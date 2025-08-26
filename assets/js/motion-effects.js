// Scroll-Triggered Storytelling Effects

document.addEventListener('DOMContentLoaded', function() {
  // Check if user prefers reduced motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  // If user prefers reduced motion, don't initialize animations
  if (prefersReducedMotion) {
    return;
  }
  
  // Create IntersectionObserver
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      // If element is in viewport
      if (entry.isIntersecting) {
        // Add is-visible class to trigger animation
        entry.target.classList.add('is-visible');
        
        // Stop observing this element to prevent re-triggering
        observer.unobserve(entry.target);
      }
    });
  }, {
    // Trigger when 10% of the element is visible
    threshold: 0.1,
    // Trigger 50px before element enters viewport
    rootMargin: '0px 0px -50px 0px'
  });
  
  // Observe all elements with motion-fade-up class
  document.querySelectorAll('.motion-fade-up').forEach(el => {
    observer.observe(el);
  });
  
  // Observe all elements with motion-stagger class
  document.querySelectorAll('.motion-stagger').forEach(el => {
    observer.observe(el);
  });
});