// =============================================================================
// Smooth Scrolling for Anchor Links
// =============================================================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      // Close mobile menu if open
      document.querySelector('.nav-links').classList.remove('active');
      document.querySelector('.nav-toggle').classList.remove('active');
      
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

// =============================================================================
// Mobile Navigation Toggle
// =============================================================================
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  navToggle.classList.toggle('active');
});

// Close mobile menu when clicking a nav link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    navToggle.classList.remove('active');
  });
});

// =============================================================================
// Reveal Animations on Scroll
// =============================================================================
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;
  
  revealElements.forEach((el, index) => {
    el.style.setProperty('--delay', index);
    
    const elementTop = el.getBoundingClientRect().top;
    const elementVisible = 100; // Trigger when 100px from bottom of viewport
    
    if (elementTop < windowHeight - elementVisible) {
      el.style.opacity = '1';
      el.style.transform = 'none';
    }
  });
};

// Run on load and scroll
window.addEventListener('DOMContentLoaded', revealOnScroll);
window.addEventListener('scroll', revealOnScroll);

// =============================================================================
// Form Submission (Real submission with feedback)
// =============================================================================
const contactForm = document.getElementById('contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    // Show loading state
    const btn = this.querySelector('button[type="submit"]');
    const originalText = btn.textContent;
    
    btn.disabled = true;
    btn.textContent = 'Submitting...';
    
    // Form will submit normally to FormSubmit
    // Note: User will be redirected to confirmation page or FormSubmit default
  });
}