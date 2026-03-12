/**
 * GenericGridFilter - A reusable, auto-initializing class for multi-select filtering
 * and animated layouts, designed to work with AOS animations.
 *
 * To use, add the `data-filter-container` attribute to your grid element.
 * Configure it with:
 *  - `data-item-selector`: (Required) CSS selector for the items to filter.
 *  - `data-filter-controls`: (Required) CSS selector for the filter inputs (<select>, etc).
 *  - `data-clear-button`: (Optional) CSS selector for the clear button.
 *  - `data-gutter`: (Optional) The space between items in pixels.
 *  - `data-padding`: (Optional) Padding on the sides of the container in pixels.
 */
class GenericGridFilter {
    constructor(containerElement, options = {}) {
        this.container = containerElement;
        if (!this.container) return;

        // Default options are now merged with options read from data attributes
        this.options = {
            itemSelector: '.filter-item',
            filterControlSelector: '.filter-control',
            clearButtonSelector: null,
            gutter: 20,
            padding: 0, // Nuevo: padding lateral
            transitionDuration: 500,
            ...options // Options from data attributes will override these
        };

        this.items = Array.from(this.container.querySelectorAll(this.options.itemSelector));
        this.filters = Array.from(document.querySelectorAll(this.options.filterControlSelector));
        this.clearButton = this.options.clearButtonSelector ? document.querySelector(this.options.clearButtonSelector) : null;
        this.visibleItems = [];

        if (this.items.length === 0) return;
        this.init();
    }

    init() {
        if (typeof AOS !== 'undefined') {
            AOS.init({ duration: 600, once: true });
        }

        this.container.style.position = 'relative';
        // Aplicar padding al contenedor
        if (this.options.padding > 0) {
            this.container.style.paddingLeft = `${this.options.padding}px`;
            this.container.style.paddingRight = `${this.options.padding}px`;
        }
        
        this.items.forEach(item => {
            item.style.position = 'absolute';
            item.style.transition = `all ${this.options.transitionDuration}ms ease-in-out`;
        });

        this.filters.forEach(select => select.addEventListener('change', () => this.applyFilters()));
        if (this.clearButton) {
            this.clearButton.addEventListener('click', () => this.resetFilters());
        }
        
        // Use a small delay for the initial layout to ensure assets are ready
        setTimeout(() => this.applyFilters(), 100);
        window.addEventListener('resize', () => this.debounce(() => this.layout(), 250));
    }

    applyFilters() {
        document.documentElement.classList.add('filter-active');
        
        const selectedFilters = this.filters.reduce((acc, control) => {
            const filterType = control.getAttribute('data-filter');
            if (filterType && control.value) {
                acc[filterType] = control.value;
            }
            return acc;
        }, {});

        this.visibleItems = [];

        this.items.forEach(item => {
            let isMatch = true;
            for (const filterKey in selectedFilters) {
                const itemValue = item.getAttribute(`data-${filterKey}`);
                if (itemValue !== selectedFilters[filterKey]) {
                    isMatch = false;
                    break;
                }
            }

            if (isMatch) {
                this.visibleItems.push(item);
                this.showItem(item);
            } else {
                this.hideItem(item);
            }
        });

        this.layout();
        
        setTimeout(() => {
            document.documentElement.classList.remove('filter-active');
        }, this.options.transitionDuration);
    }

    resetFilters() {
        this.filters.forEach(select => select.value = '');
        this.applyFilters();
    }

    layout() {
        if (this.visibleItems.length === 0) {
            return;
        }

        // Restar el padding del ancho disponible
        const containerWidth = this.container.offsetWidth - (this.options.padding * 2);
        const gutter = this.options.gutter;
        
        let numColumns = 3;
        if (containerWidth <= 768) numColumns = 2;
        if (containerWidth <= 640) numColumns = 1;

        const itemWidth = (containerWidth - (numColumns - 1) * gutter) / numColumns;
        const columnHeights = new Array(numColumns).fill(0);

        this.visibleItems.forEach(item => {
            item.style.width = `${itemWidth}px`;
            const shortestColumnIndex = columnHeights.indexOf(Math.min(...columnHeights));
            const x = shortestColumnIndex * (itemWidth + gutter);
            const y = columnHeights[shortestColumnIndex];
            item.style.transform = `translate3d(${x}px, ${y}px, 0)`;
            columnHeights[shortestColumnIndex] += item.offsetHeight + gutter;
        });

        this.refreshAOS();
    }

    showItem(item) {
        item.style.opacity = '1';
        item.style.pointerEvents = 'auto';
        setTimeout(() => item.classList.add('aos-animate'), 50);
    }
    
    hideItem(item) {
        item.style.opacity = '0';
        item.style.pointerEvents = 'none';
        item.classList.remove('aos-animate');
    }

    refreshAOS() {
        if (typeof AOS !== 'undefined') {
            AOS.refresh();
        }
    }

    debounce(func, delay) {
        let timeout;
        return (...args) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), delay);
        };
    }
}

// --- AUTO-INITIALIZER ---
// This code runs automatically when the page is loaded.
document.addEventListener('DOMContentLoaded', () => {
    // 1. Find all elements that have the `data-filter-container` attribute.
    const filterContainers = document.querySelectorAll('[data-filter-container]');

    // 2. Loop through each container found.
    filterContainers.forEach(container => {
        // 3. Read the configuration from its own data attributes.
        const options = {
            itemSelector: container.dataset.itemSelector,
            filterControlSelector: container.dataset.filterControls,
            clearButtonSelector: container.dataset.clearButton,
            gutter: container.dataset.gutter ? parseInt(container.dataset.gutter, 10) : undefined,
            padding: container.dataset.padding ? parseInt(container.dataset.padding, 10) : undefined // Nuevo
        };

        // 4. Create a new instance of the filter for this specific container.
        new GenericGridFilter(container, options);
    });
});