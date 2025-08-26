// Parallax scrolling effect for hero section and decorative elements
document.addEventListener('DOMContentLoaded', function() {
  // Check if we're on the home page
  if (!document.body.classList.contains('page-home')) {
    return;
  }

  // Get the hero section and its layers
  const heroSection = document.querySelector('.hero');
  if (heroSection) {
    const parallaxLayers = heroSection.querySelectorAll('.parallax-layer, .hero-parallax-bg');

    // Add scroll event listener for parallax effect
    window.addEventListener('scroll', function() {
      const scrolled = window.pageYOffset;
      const heroRect = heroSection.getBoundingClientRect();
      const heroTop = heroRect.top + window.pageYOffset;
      const heroBottom = heroRect.bottom + window.pageYOffset;

      // Only apply parallax if hero is in view
      if (window.pageYOffset > heroBottom || (window.pageYOffset + window.innerHeight) < heroTop) {
        return;
      }

      parallaxLayers.forEach(layer => {
        const depth = layer.dataset.depth || 0; // Default to 0 for main bg
        const rate = scrolled * -depth; // Negative for opposite direction
        // Use transform3d for potential hardware acceleration
        layer.style.transform = `translate3d(0, ${rate}px, 0)`;
      });
    });

    // Trigger initial scroll to set positions
    window.dispatchEvent(new Event('scroll'));
  }

  // Add subtle parallax to decorative elements in sections
  const parallaxElements = document.querySelectorAll('.parallax-element');
  
  if (parallaxElements.length > 0) {
    window.addEventListener('scroll', function() {
      parallaxElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top + window.pageYOffset;
        const elementBottom = rect.bottom + window.pageYOffset;
        
        // Only apply parallax if element is in view
        if (window.pageYOffset > elementBottom || (window.pageYOffset + window.innerHeight) < elementTop) {
          return;
        }
        
        const scrolled = window.pageYOffset;
        const speed = element.dataset.parallaxSpeed || 0.05; // Default slow speed
        const yPos = -(scrolled * speed);
        
        element.style.transform = `translate3d(0, ${yPos}px, 0)`;
      });
    });
  }
});