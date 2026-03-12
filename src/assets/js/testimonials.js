class TestimonialSlider {
  constructor(element) {
    this.slider = element;
    this.testimonials = this.slider.querySelectorAll('[data-testimonial]');
    this.prevBtn = this.slider.parentElement.querySelector('[data-prev]');
    this.nextBtn = this.slider.parentElement.querySelector('[data-next]');
    this.dotsContainer = this.slider.parentElement.querySelector('[data-dots]');
    
    this.currentIndex = 0;
    this.isSliding = false;
    this.autoplayInterval = null;
    this.autoplayDelay = 5000; // 5 seconds
    this.init();
  }

  init() {
    if (this.testimonials.length === 0) {
      return;
    }

    this.createDots();
    this.bindEvents();
    this.setupInitialState();
    this.startAutoplay();
  }

  createDots() {
    if (!this.dotsContainer) return;
    
    this.dotsContainer.innerHTML = '';
    
    this.testimonials.forEach((_, index) => {
      const dot = document.createElement('div');
      dot.className = `dot ${index === 0 ? 'active' : ''}`;
      dot.addEventListener('click', () => this.goToSlide(index));
      this.dotsContainer.appendChild(dot);
    });
    
    this.dots = this.dotsContainer.querySelectorAll('.dot');
  }

  bindEvents() {
    if (this.prevBtn) {
      this.prevBtn.addEventListener('click', () => this.previousSlide());
    }
    
    if (this.nextBtn) {
      this.nextBtn.addEventListener('click', () => this.nextSlide());
    }

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (this.isInViewport()) {
        if (e.key === 'ArrowLeft') {
          e.preventDefault();
          this.previousSlide();
        } else if (e.key === 'ArrowRight') {
          e.preventDefault();
          this.nextSlide();
        }
      }
    });

    // Touch events for mobile swipe
    this.setupTouchEvents();

    // Pause autoplay on hover
    this.slider.addEventListener('mouseenter', () => this.stopAutoplay());
    this.slider.addEventListener('mouseleave', () => this.startAutoplay());

    // Pause autoplay when tab is not visible
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        this.stopAutoplay();
      } else {
        this.startAutoplay();
      }
    });
  }

  setupTouchEvents() {
    let startX = 0;
    let startY = 0;
    let isMoving = false;

    this.slider.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
      isMoving = true;
      this.stopAutoplay();
    }, { passive: true });

    this.slider.addEventListener('touchmove', (e) => {
      if (!isMoving) return;
      
      const currentX = e.touches[0].clientX;
      const currentY = e.touches[0].clientY;
      const diffX = startX - currentX;
      const diffY = startY - currentY;

      // Si el movimiento vertical es mayor, no hacer nada (scroll normal)
      if (Math.abs(diffY) > Math.abs(diffX)) {
        return;
      }

      // Prevenir scroll horizontal accidental
      if (Math.abs(diffX) > 30) {
        e.preventDefault();
      }
    }, { passive: false });

    this.slider.addEventListener('touchend', (e) => {
      if (!isMoving) return;
      
      const endX = e.changedTouches[0].clientX;
      const diffX = startX - endX;

      if (Math.abs(diffX) > 50) { // Mínimo 50px de swipe
        if (diffX > 0) {
          this.nextSlide();
        } else {
          this.previousSlide();
        }
      }

      isMoving = false;
      this.startAutoplay();
    }, { passive: true });
  }

  setupInitialState() {
    this.testimonials.forEach((testimonial, index) => {
      testimonial.classList.toggle('active', index === 0);
    });
    
    this.updateControls();
  }

  goToSlide(index) {
    if (this.isSliding || index === this.currentIndex) return;
    
    const direction = index > this.currentIndex ? 'right' : 'left';
    this.slide(index, direction);
  }

  nextSlide() {
    if (this.isSliding) return;
    
    const nextIndex = (this.currentIndex + 1) % this.testimonials.length;
    this.slide(nextIndex, 'right');
  }

  previousSlide() {
    if (this.isSliding) return;
    
    const prevIndex = this.currentIndex === 0 
      ? this.testimonials.length - 1 
      : this.currentIndex - 1;
    this.slide(prevIndex, 'left');
  }

  slide(newIndex, direction) {
    if (this.isSliding) return;
    
    this.isSliding = true;
    this.stopAutoplay();
    
    const currentTestimonial = this.testimonials[this.currentIndex];
    const newTestimonial = this.testimonials[newIndex];
    
    // Añadir clase de dirección al slider
    this.slider.classList.add(`sliding-${direction}`);
    
    // Preparar el nuevo testimonial
    if (direction === 'right') {
      newTestimonial.style.transform = 'translateX(50px)';
      newTestimonial.style.opacity = '0';
    } else {
      newTestimonial.style.transform = 'translateX(-50px)';
      newTestimonial.style.opacity = '0';
    }
    
    newTestimonial.style.visibility = 'visible';
    newTestimonial.style.position = 'absolute';
    
    // Animar salida del actual
    requestAnimationFrame(() => {
      if (direction === 'right') {
        currentTestimonial.style.transform = 'translateX(-50px)';
      } else {
        currentTestimonial.style.transform = 'translateX(50px)';
      }
      currentTestimonial.style.opacity = '0';
      
      // Animar entrada del nuevo
      setTimeout(() => {
        newTestimonial.style.transform = 'translateX(0)';
        newTestimonial.style.opacity = '1';
      }, 50);
    });
    
    // Completar transición
    setTimeout(() => {
      // Limpiar estilos del testimonial anterior
      currentTestimonial.classList.remove('active');
      currentTestimonial.style.transform = '';
      currentTestimonial.style.opacity = '';
      currentTestimonial.style.visibility = '';
      currentTestimonial.style.position = '';
      
      // Activar nuevo testimonial
      newTestimonial.classList.add('active');
      newTestimonial.style.transform = '';
      newTestimonial.style.opacity = '';
      newTestimonial.style.visibility = '';
      newTestimonial.style.position = '';
      
      // Limpiar clases de dirección
      this.slider.classList.remove(`sliding-${direction}`);
      
      this.currentIndex = newIndex;
      this.updateControls();
      this.isSliding = false;
      this.startAutoplay();
      
      // Dispatch custom event
      this.slider.dispatchEvent(new CustomEvent('testimonialChanged', {
        detail: { 
          currentIndex: this.currentIndex, 
          testimonial: newTestimonial 
        }
      }));
    }, 600);
  }

  updateControls() {
    // Update dots
    if (this.dots) {
      this.dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === this.currentIndex);
      });
    }
    
    // Update navigation buttons
    if (this.prevBtn && this.nextBtn) {
      // En un carousel infinito, siempre habilitados
      this.prevBtn.disabled = false;
      this.nextBtn.disabled = false;
    }
  }

  startAutoplay() {
    if (this.testimonials.length <= 1) return;
    
    this.stopAutoplay();
    this.autoplayInterval = setInterval(() => {
      if (!this.isSliding && this.isInViewport()) {
        this.nextSlide();
      }
    }, this.autoplayDelay);
  }

  stopAutoplay() {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
      this.autoplayInterval = null;
    }
  }

  isInViewport() {
    const rect = this.slider.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Método público para controlar desde fuera
  setAutoplayDelay(delay) {
    this.autoplayDelay = delay;
    if (this.autoplayInterval) {
      this.stopAutoplay();
      this.startAutoplay();
    }
  }

  // Método público para ir a un slide específico
  goTo(index) {
    if (index >= 0 && index < this.testimonials.length) {
      this.goToSlide(index);
    }
  }

  // Método público para obtener información del estado actual
  getCurrentState() {
    return {
      currentIndex: this.currentIndex,
      totalSlides: this.testimonials.length,
      isSliding: this.isSliding,
      autoplayActive: this.autoplayInterval !== null
    };
  }

  // Cleanup method
  destroy() {
    this.stopAutoplay();
    
    // Remove event listeners
    if (this.prevBtn) {
      this.prevBtn.removeEventListener('click', this.previousSlide);
    }
    
    if (this.nextBtn) {
      this.nextBtn.removeEventListener('click', this.nextSlide);
    }
    
    if (this.dots) {
      this.dots.forEach(dot => {
        dot.removeEventListener('click', this.goToSlide);
      });
    }
  }
}

// Auto-initialize testimonial sliders
document.addEventListener('DOMContentLoaded', function() {
  const sliders = document.querySelectorAll('[data-testimonials-slider]');
  
  sliders.forEach(slider => {
    new TestimonialSlider(slider);
  });
});

// Expose to global scope if needed
window.TestimonialSlider = TestimonialSlider;