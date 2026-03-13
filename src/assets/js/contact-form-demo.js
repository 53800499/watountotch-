// ==========================================================================
// CONTACT FORM - booking version
// Validates the booking form, shows real-time errors, success messages
// ==========================================================================
document.addEventListener('DOMContentLoaded', function () {
  const contactForm = document.getElementById('contactForm');
  const submitBtn = contactForm.querySelector('.booking-form__btn');
  const formSuccess = document.getElementById('form-success');
  const formError = document.getElementById('form-error');

  // --- Helpers for errors ---
  function showFieldError(fieldName, message) {
    const errorElement = document.getElementById(`${fieldName}-error`);
    if (errorElement) {
      errorElement.textContent = message;
      errorElement.classList.add('show');
    }
  }

  function clearFieldErrors() {
    const errorElements = contactForm.querySelectorAll('.form-error');
    errorElements.forEach((el) => {
      el.textContent = '';
      el.classList.remove('show');
    });
  }

  function showSuccessMessage(message) {
    formError.style.display = 'none';
    formSuccess.style.display = 'flex';
    if (message) formSuccess.querySelector('span').textContent = message;
    setTimeout(() => {
      formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
  }

  // --- Real-time validation ---
  function setupRealTimeValidation() {
    const fields = {
      name: {
        element: contactForm.querySelector('#name'),
        validate: (v) => {
          if (!v.trim()) return 'Name is required';
          if (v.trim().length < 2) return 'Name must be at least 2 characters';
          return null;
        },
      },
      email: {
        element: contactForm.querySelector('#email'),
        validate: (v) => {
          if (!v.trim()) return 'Email is required';
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(v)) return 'Please enter a valid email address';
          return null;
        },
      },
      phone: {
        element: contactForm.querySelector('#phone'),
        validate: (v) => {
          if (v.trim() && !/^[\+]?[0-9][\d\s\-\(\)]{5,15}$/.test(v)) {
            return 'Please enter a valid phone number';
          }
          return null;
        },
      },
      message: {
        element: contactForm.querySelector('#message'),
        validate: (v) => {
          if (!v.trim()) return 'Message is required';
          if (v.trim().length < 10) return 'Message must be at least 10 characters';
          if (v.trim().length > 2000) return 'Message must be less than 2000 characters';
          return null;
        },
      },
    };

    Object.keys(fields).forEach((fieldName) => {
      const field = fields[fieldName];
      const errorElement = document.getElementById(`${fieldName}-error`);
      field.element.addEventListener('blur', function () {
        const error = field.validate(this.value);
        if (error) showFieldError(fieldName, error);
        else if (errorElement) {
          errorElement.textContent = '';
          errorElement.classList.remove('show');
        }
      });

      field.element.addEventListener('input', function () {
        if (errorElement && errorElement.classList.contains('show')) {
          const error = field.validate(this.value);
          if (!error) {
            errorElement.textContent = '';
            errorElement.classList.remove('show');
          }
        }
      });
    });

    // Privacy checkbox
    const privacy = contactForm.querySelector('input[name="privacy"]');
    privacy.addEventListener('change', function () {
      const err = document.getElementById('privacy-error');
      if (this.checked && err) {
        err.textContent = '';
        err.classList.remove('show');
      }
    });
  }

  // --- Submit handler ---
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    clearFieldErrors();
    formSuccess.style.display = 'none';
    formError.style.display = 'none';

    const data = new FormData(contactForm);
    let valid = true;

    // Name
    if (!data.get('name').trim()) {
      showFieldError('name', 'Name is required');
      valid = false;
    }

    // Email
    const emailVal = data.get('email').trim();
    if (!emailVal) {
      showFieldError('email', 'Email is required');
      valid = false;
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailVal)) {
        showFieldError('email', 'Please enter a valid email address');
        valid = false;
      }
    }

    // Phone (optional)
    const phoneVal = data.get('phone').trim();
    if (phoneVal && !/^[\+]?[0-9][\d\s\-\(\)]{5,15}$/.test(phoneVal)) {
      showFieldError('phone', 'Please enter a valid phone number');
      valid = false;
    }

    // Message
    const msg = data.get('message').trim();
    if (!msg) {
      showFieldError('message', 'Message is required');
      valid = false;
    } else if (msg.length < 10) {
      showFieldError('message', 'Message must be at least 10 characters');
      valid = false;
    }

    // Privacy
    if (!data.get('privacy')) {
      showFieldError('privacy', 'You must accept the privacy policy');
      valid = false;
    }

    if (!valid) {
      const firstError = contactForm.querySelector('.form-error.show');
      if (firstError) {
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      formError.style.display = 'block';
      return;
    }

    // Success simulation
    const name = data.get('name').trim();
    const msgs = [
      `Thank you ${name}! Your message has been received. We'll get back to you within 24 hours.`,
      `Hi ${name}! Thanks for your interest in our tours. We'll contact you soon!`,
      `Great to hear from you, ${name}! We'll respond shortly.`,
    ];
    const randomMsg = msgs[Math.floor(Math.random() * msgs.length)];
    showSuccessMessage(randomMsg);

    setTimeout(() => {
      contactForm.reset();
      updateCharCounter();
    }, 1500);
  });

  // --- Char counter ---
  const messageTextarea = contactForm.querySelector('#message');
  const counter = document.createElement('div');
  counter.className = 'char-counter';
  counter.style.cssText = 'font-size:12px;color:#6b7280;margin-top:5px;text-align:right;';
  messageTextarea.insertAdjacentElement('afterend', counter);

  function updateCharCounter() {
    const len = messageTextarea.value.length;
    const max = 2000;
    counter.textContent = `${len}/${max} characters`;
    if (len > max * 0.9) counter.style.color = '#f59e0b';
    else if (len > max) counter.style.color = '#dc3545';
    else counter.style.color = '#6b7280';
  }

  messageTextarea.addEventListener('input', updateCharCounter);
  updateCharCounter();

  // Auto-resize textarea
  messageTextarea.addEventListener('input', function () {
    this.style.height = 'auto';
    this.style.height = Math.min(this.scrollHeight, 200) + 'px';
  });

  // UX focus styling
  const inputs = contactForm.querySelectorAll('input, select, textarea');
  inputs.forEach((inp, idx) => {
    inp.addEventListener('focus', () => inp.closest('.booking-form__field')?.classList.add('focused'));
    inp.addEventListener('blur', () => inp.closest('.booking-form__field')?.classList.remove('focused'));

    if (inp.type !== 'textarea') {
      inp.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
          e.preventDefault();
          const next = inputs[idx + 1];
          if (next) next.focus();
          else submitBtn.click();
        }
      });
    }
  });

  setupRealTimeValidation();
});
