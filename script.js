// ================================================
// PORTFOLIO INTERACTIVE FUNCTIONALITY
// Abdelrahman Ehab - AI Engineer Portfolio
// ================================================

// ================================================
// SMOOTH SCROLLING & NAVIGATION
// ================================================

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      // Close mobile menu if open
      const navMenu = document.getElementById("navMenu");
      const menuToggle = document.getElementById("menuToggle");
      if (navMenu.classList.contains("active")) {
        navMenu.classList.remove("active");
        menuToggle.classList.remove("active");
      }
    }
  });
});

// ================================================
// NAVBAR SCROLL EFFECTS
// ================================================

const navbar = document.getElementById("navbar");
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section[id]");

// Add scrolled class to navbar
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  // Highlight active section in navigation
  highlightActiveSection();
});

// Highlight active navigation link based on scroll position
function highlightActiveSection() {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (window.pageYOffset >= sectionTop - 100) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
}

// ================================================
// MOBILE MENU TOGGLE
// ================================================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  menuToggle.classList.toggle("active");
});

// Close mobile menu when clicking outside
document.addEventListener("click", (event) => {
  const isClickInsideNav = navbar.contains(event.target);

  if (!isClickInsideNav && navMenu.classList.contains("active")) {
    navMenu.classList.remove("active");
    menuToggle.classList.remove("active");
  }
});

// ================================================
// TYPING ANIMATION FOR HERO
// ================================================

const typingText = document.getElementById("typingText");
const phrases = [
  "AI Engineer",
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeEffect() {
  const currentPhrase = phrases[phraseIndex];

  if (isDeleting) {
    typingText.textContent = currentPhrase.substring(0, charIndex - 1);
    charIndex--;
    typingSpeed = 50;
  } else {
    typingText.textContent = currentPhrase.substring(0, charIndex + 1);
    charIndex++;
    typingSpeed = 100;
  }

  if (!isDeleting && charIndex === currentPhrase.length) {
    // Pause at end of phrase
    typingSpeed = 2000;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    typingSpeed = 500;
  }

  setTimeout(typeEffect, typingSpeed);
}

// Start typing effect when page loads
window.addEventListener("load", () => {
  setTimeout(typeEffect, 1000);
});

// ================================================
// PORTFOLIO FILTERING
// ================================================

const filterBtns = document.querySelectorAll(".filter-btn");
const portfolioItems = document.querySelectorAll(".portfolio-item");

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Remove active class from all buttons
    filterBtns.forEach((b) => b.classList.remove("active"));

    // Add active class to clicked button
    btn.classList.add("active");

    const filter = btn.getAttribute("data-filter");

    // Filter portfolio items
    portfolioItems.forEach((item) => {
      const category = item.getAttribute("data-category");

      if (filter === "all" || category === filter) {
        item.style.display = "block";
        setTimeout(() => {
          item.style.opacity = "1";
          item.style.transform = "translateY(0)";
        }, 10);
      } else {
        item.style.opacity = "0";
        item.style.transform = "translateY(20px)";
        setTimeout(() => {
          item.style.display = "none";
        }, 300);
      }
    });
  });
});

// ================================================
// TESTIMONIALS CAROUSEL - REMOVED
// ================================================
// Testimonials section has been removed from the portfolio



// ================================================
// CONTACT FORM VALIDATION & SUBMISSION
// ================================================

// Initialize EmailJS with your Public Key
// IMPORTANT: Replace 'YOUR_PUBLIC_KEY' with your actual EmailJS public key
// Get it from: https://dashboard.emailjs.com/admin/account
emailjs.init('ktm98NMpL89MWvqdS');

const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

// Real-time validation
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function showError(input, message) {
  const errorElement = document.getElementById(`${input.id}Error`);
  if (errorElement) {
    errorElement.textContent = message;
    input.style.borderColor = "var(--color-error)";
  }
}

function clearError(input) {
  const errorElement = document.getElementById(`${input.id}Error`);
  if (errorElement) {
    errorElement.textContent = "";
    input.style.borderColor = "rgba(255, 255, 255, 0.1)";
  }
}

// Validate on blur
nameInput.addEventListener("blur", () => {
  if (nameInput.value.trim() === "") {
    showError(nameInput, "Name is required");
  } else {
    clearError(nameInput);
  }
});

emailInput.addEventListener("blur", () => {
  if (emailInput.value.trim() === "") {
    showError(emailInput, "Email is required");
  } else if (!validateEmail(emailInput.value)) {
    showError(emailInput, "Please enter a valid email");
  } else {
    clearError(emailInput);
  }
});

messageInput.addEventListener("blur", () => {
  if (messageInput.value.trim() === "") {
    showError(messageInput, "Message is required");
  } else if (messageInput.value.trim().length < 10) {
    showError(messageInput, "Message must be at least 10 characters");
  } else {
    clearError(messageInput);
  }
});

// Form submission with EmailJS
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Clear previous status
  formStatus.className = "form-status";
  formStatus.textContent = "";

  // Validate all fields
  let isValid = true;

  if (nameInput.value.trim() === "") {
    showError(nameInput, "Name is required");
    isValid = false;
  }

  if (emailInput.value.trim() === "") {
    showError(emailInput, "Email is required");
    isValid = false;
  } else if (!validateEmail(emailInput.value)) {
    showError(emailInput, "Please enter a valid email");
    isValid = false;
  }

  if (messageInput.value.trim() === "") {
    showError(messageInput, "Message is required");
    isValid = false;
  } else if (messageInput.value.trim().length < 10) {
    showError(messageInput, "Message must be at least 10 characters");
    isValid = false;
  }

  if (!isValid) {
    return;
  }

  // Show loading state
  const submitBtn = contactForm.querySelector(".btn-primary");
  const originalText = submitBtn.innerHTML;
  submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
  submitBtn.disabled = true;

  // Send email using EmailJS
  // IMPORTANT: Replace 'YOUR_SERVICE_ID' and 'YOUR_TEMPLATE_ID' with your actual IDs
  emailjs.sendForm('service_0tp9b7d', 'template_wzi5yua', contactForm)
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      
      // Success
      formStatus.className = "form-status success";
      formStatus.textContent =
        "Thank you! Your message has been sent successfully. I'll get back to you soon.";

      // Reset form
      contactForm.reset();
      clearError(nameInput);
      clearError(emailInput);
      clearError(messageInput);

      // Restore button
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;

      // Hide success message after 5 seconds
      setTimeout(() => {
        formStatus.className = "form-status";
      }, 5000);
    })
    .catch((error) => {
      console.error('FAILED...', error);
      
      // Error
      formStatus.className = "form-status error";
      formStatus.textContent =
        "Oops! Something went wrong. Please try again or email me directly at abdulrahman.ehab.hussein@gmail.com";

      // Restore button
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;

      // Hide error message after 7 seconds
      setTimeout(() => {
        formStatus.className = "form-status";
      }, 7000);
    });
});

// ================================================
// SCROLL ANIMATIONS (INTERSECTION OBSERVER)
// ================================================

const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe elements for scroll animations
const animateOnScroll = document.querySelectorAll(
  ".card, .highlight-item, .skill-item",
);
animateOnScroll.forEach((el) => {
  observer.observe(el);
});

// ================================================
// BACK TO TOP BUTTON
// ================================================

const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    backToTopBtn.classList.add("visible");
  } else {
    backToTopBtn.classList.remove("visible");
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// ================================================
// IMAGE LAZY LOADING (PROGRESSIVE ENHANCEMENT)
// ================================================

// Modern browsers support native lazy loading via loading="lazy" attribute
// For older browsers, we can use Intersection Observer
if ("loading" in HTMLImageElement.prototype) {
  // Native lazy loading supported
  const images = document.querySelectorAll("img");
  images.forEach((img) => {
    img.loading = "lazy";
  });
} else {
  // Fallback for older browsers
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src || img.src;
        img.classList.add("loaded");
        imageObserver.unobserve(img);
      }
    });
  });

  const images = document.querySelectorAll("img");
  images.forEach((img) => imageObserver.observe(img));
}

// ================================================
// ACCESSIBILITY IMPROVEMENTS
// ================================================

// Announce dynamic content changes to screen readers
function announceToScreenReader(message) {
  const announcement = document.createElement("div");
  announcement.setAttribute("role", "status");
  announcement.setAttribute("aria-live", "polite");
  announcement.classList.add("sr-only");
  announcement.textContent = message;
  document.body.appendChild(announcement);

  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
}

// Trap focus in mobile menu when open
const focusableElements = "a[href], button, textarea, input, select";
const firstFocusableElement = navMenu.querySelectorAll(focusableElements)[0];
const focusableContent = navMenu.querySelectorAll(focusableElements);
const lastFocusableElement = focusableContent[focusableContent.length - 1];

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && navMenu.classList.contains("active")) {
    navMenu.classList.remove("active");
    menuToggle.classList.remove("active");
    menuToggle.focus();
  }

  if (e.key === "Tab" && navMenu.classList.contains("active")) {
    if (e.shiftKey) {
      if (document.activeElement === firstFocusableElement) {
        lastFocusableElement.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastFocusableElement) {
        firstFocusableElement.focus();
        e.preventDefault();
      }
    }
  }
});

// ================================================
// PERFORMANCE OPTIMIZATION
// ================================================

// Debounce scroll events for better performance
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Apply debouncing to scroll handler
const debouncedScrollHandler = debounce(() => {
  highlightActiveSection();
}, 100);

window.addEventListener("scroll", debouncedScrollHandler);

// ================================================
// CONSOLE MESSAGE
// ================================================

console.log(
  "%c👋 Hello from Abdelrahman Ehab!",
  "color: #00d4ff; font-size: 20px; font-weight: bold;",
);
console.log(
  "%cInterested in AI & Machine Learning? Let's connect!",
  "color: #ffd700; font-size: 14px;",
);
console.log(
  "%cEmail: abdulrahman.ehab.hussein@gmail.com",
  "color: #00ff88; font-size: 12px;",
);

// ================================================
// PROJECT MODALS
// ================================================

// Get all modal elements
const modals = document.querySelectorAll('.modal-overlay');
const modalTriggers = document.querySelectorAll('.project-btn');
const modalCloseButtons = document.querySelectorAll('.modal-close');

// Function to open modal
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('active');
    document.body.classList.add('modal-open');
  }
}

// Function to close modal
function closeModal(modal) {
  modal.classList.remove('active');
  document.body.classList.remove('modal-open');
}

// Add click event listeners to all "View Details" buttons
modalTriggers.forEach((trigger) => {
  trigger.addEventListener('click', (e) => {
    e.preventDefault();
    const modalId = trigger.getAttribute('href').substring(1); // Remove the # from href
    openModal(modalId);
  });
});

// Add click event listeners to all close buttons
modalCloseButtons.forEach((closeBtn) => {
  closeBtn.addEventListener('click', () => {
    const modal = closeBtn.closest('.modal-overlay');
    closeModal(modal);
  });
});

// Close modal when clicking on overlay (outside the modal container)
modals.forEach((modal) => {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal(modal);
    }
  });
});

// Close modal when pressing ESC key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    modals.forEach((modal) => {
      if (modal.classList.contains('active')) {
        closeModal(modal);
      }
    });
  }
});

