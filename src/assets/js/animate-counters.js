// Enhanced counter animation system with better error handling and debugging
function animateCounter(element, options = {}) {
  const defaultOptions = {
    duration: 2000,
    easing: 'easeOutQuart',
    delay: 0,
    separator: true,
    debug: false
  };
  
  const config = { ...defaultOptions, ...options };
  
  // Get target value from data attribute or text content
  const originalText = element.getAttribute('data-target') || element.textContent.trim();
  
  // Enhanced number extraction for formats like "12k+", "16+", "20+"
  let target, prefix = '', suffix = '';
  
  // Extract number and handle k/K multipliers
  const matches = originalText.match(/^([^\d]*?)(\d+(?:\.\d+)?)(k|K)?([^\d]*?)$/);
  
  if (matches) {
    prefix = matches[1] || '';
    target = parseFloat(matches[2]);
    const multiplier = matches[3];
    suffix = matches[4] || '';
    
    // Handle k/K multiplier (thousands)
    if (multiplier && multiplier.toLowerCase() === 'k') {
      target = target * 1000;
      suffix = 'k' + suffix; // Keep the k in the suffix
    }
  } else {
    // Fallback: extract just the number
    const numberMatch = originalText.match(/\d+/);
    if (numberMatch) {
      target = parseInt(numberMatch[0]);
      prefix = originalText.split(target)[0] || '';
      suffix = originalText.split(target)[1] || '';
    }
  }
  
  if (isNaN(target) || target === 0) {
    return;
  }
  
  // Easing functions
  const easingFunctions = {
    linear: t => t,
    easeOutQuart: t => 1 - Math.pow(1 - t, 4),
    easeOutCubic: t => 1 - Math.pow(1 - t, 3),
    easeInOutQuart: t => t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t,
    easeOutExpo: t => t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
  };
  
  const easingFunction = easingFunctions[config.easing] || easingFunctions.easeOutQuart;
  
  // Mark element as animating to prevent duplicate animations
  if (element.dataset.animating === 'true') {
    return;
  }
  element.dataset.animating = 'true';
  
  // Start animation after delay
  setTimeout(() => {
    const startTime = performance.now();
    
    function updateCounter(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / config.duration, 1);
      const easedProgress = easingFunction(progress);
      
      // Calculate current value
      let current = Math.floor(target * easedProgress);
      
      // Handle special formatting for k values
      let displayValue;
      if (suffix.includes('k')) {
        // If original had k, show as decimal with k
        displayValue = (current / 1000).toFixed(current < 1000 ? 1 : 0);
        if (displayValue.endsWith('.0')) {
          displayValue = displayValue.slice(0, -2);
        }
      } else {
        displayValue = config.separator ? current.toLocaleString() : current.toString();
      }
      
      element.textContent = prefix + displayValue + suffix;
      
      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        // Final value
        let finalValue;
        if (suffix.includes('k')) {
          finalValue = (target / 1000).toFixed(target < 1000 ? 1 : 0);
          if (finalValue.endsWith('.0')) {
            finalValue = finalValue.slice(0, -2);
          }
        } else {
          finalValue = config.separator ? target.toLocaleString() : target.toString();
        }
        
        element.textContent = prefix + finalValue + suffix;
        element.dataset.animating = 'false';
        
        // Dispatch custom event when animation completes
        element.dispatchEvent(new CustomEvent('counterComplete', { 
          detail: { target, element, originalText } 
        }));
      }
    }
    
    // Set initial value to 0
    element.textContent = prefix + '0' + (suffix.includes('k') ? 'k' + suffix.replace('k', '') : suffix);
    requestAnimationFrame(updateCounter);
  }, config.delay);
}

// Enhanced observer with better debugging
function createCounterObserver() {
  // More comprehensive selector
  const counters = document.querySelectorAll(`
    [data-counter],
    [data-count],
    .counter,
    .count,
    .num[data-counter],
    .number[data-target],
    .animate-number,
    .count-up
  `);

  
  if (counters.length === 0) {
    return;
  }
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const element = entry.target;
        
        // Get options from data attributes
        const options = {
          duration: parseInt(element.dataset.duration) || parseInt(element.dataset.counterDuration) || 2000,
          easing: element.dataset.easing || element.dataset.counterEasing || 'easeOutQuart',
          delay: parseInt(element.dataset.delay) || parseInt(element.dataset.counterDelay) || 0,
          separator: element.dataset.separator !== 'false',
          debug: element.dataset.debug === 'true' || document.documentElement.dataset.counterDebug === 'true'
        };
        
        // Add a small delay to ensure AOS animations don't interfere
        setTimeout(() => {
          animateCounter(element, options);
        }, 100);
        
        // Stop observing this element
        observer.unobserve(element);
      }
    });
  }, {
    threshold: parseFloat(document.documentElement.dataset.counterThreshold) || 0.1,
    rootMargin: document.documentElement.dataset.counterMargin || '0px 0px -20px 0px'
  });
  
  // Observe all counter elements
  counters.forEach(counter => {
    observer.observe(counter);
  });
  
  return observer;
}

// Manual function with better error handling
function animateCounters(selector = '[data-counter], .counter, .count', options = {}) {
  const elements = document.querySelectorAll(selector);  
  elements.forEach((element, index) => {
    const elementOptions = {
      ...options,
      delay: (options.delay || 0) + (options.stagger || 100) * index
    };
    
    animateCounter(element, elementOptions);
  });
}

// Enhanced initialization with debugging
function initCounterSystem() {
  // Check if manual mode is enabled
  const isManualMode = document.documentElement.dataset.counterMode === 'manual';
  
  if (!isManualMode) {
    // Wait a bit for other libraries (like AOS) to initialize
    setTimeout(() => {
      createCounterObserver();
    }, 500);
  }
  
  // Expose global functions
  window.animateCounter = animateCounter;
  window.animateCounters = animateCounters;
  window.initCounterSystem = initCounterSystem;
}

// Multiple initialization methods with better timing
function smartInit() {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      setTimeout(initCounterSystem, 100);
    });
  } else if (document.readyState === 'interactive') {
    setTimeout(initCounterSystem, 100);
  } else {
    initCounterSystem();
  }
}

smartInit();