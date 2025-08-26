// Premium Navigation & Page Transitions

document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu functionality with premium transitions
  const mobileMenu = document.querySelector('.mobile-menu');
  const navLinks = document.querySelector('.nav-links');
  
  if (mobileMenu && navLinks) {
    mobileMenu.addEventListener('click', () => {
      const isOpen = navLinks.classList.contains('active');
      
      // Toggle menu state
      navLinks.classList.toggle('active');
      mobileMenu.classList.toggle('open');
      mobileMenu.setAttribute('aria-expanded', String(!isOpen));
    });
    
    // Close menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
          navLinks.classList.remove('active');
          mobileMenu.classList.remove('open');
          mobileMenu.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }
  
  // Enhanced page transition functionality (SPA-like)
  const pageLinks = document.querySelectorAll('a[href]:not([target="_blank"]):not([href^="#"]):not([href^="mailto:"]):not([href^="tel:"])');
  
  pageLinks.forEach(link => {
    // Check if it's an internal link (same domain)
    if (isInternalLink(link.href)) {
      link.addEventListener('click', function(e) {
        // Don't interfere with form submissions or other special cases
        if (this.classList.contains('no-transition') || 
            this.getAttribute('data-no-transition') === 'true') {
          return;
        }
        
        e.preventDefault();
        const href = this.href;
        
        // Trigger page transition
        initiatePageTransition(href);
      });
    }
  });
  
  // Function to check if a link is internal
  function isInternalLink(url) {
    try {
      const currentDomain = window.location.hostname;
      const linkDomain = new URL(url).hostname;
      return currentDomain === linkDomain;
    } catch (e) {
      // If URL parsing fails, assume it's internal
      return true;
    }
  }
  
  // Function to initiate page transition
  function initiatePageTransition(href) {
    // Create transition overlay
    let overlay = document.querySelector('.page-transition-overlay');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.className = 'page-transition-overlay';
      document.body.appendChild(overlay);
    }
    
    // Fade out current content
    const pageContent = document.querySelector('main') || document.body;
    pageContent.classList.add('fade-out');
    
    // Activate overlay
    overlay.classList.add('active');
    
    // Navigate to new page after transition
    setTimeout(() => {
      window.location.href = href;
    }, 500); // Match the CSS transition duration
  }
  
  // Function to handle page load with transition
  function handlePageLoad() {
    // Remove any existing overlay
    const existingOverlay = document.querySelector('.page-transition-overlay');
    if (existingOverlay) {
      existingOverlay.classList.remove('active');
      setTimeout(() => {
        if (existingOverlay.parentNode) {
          existingOverlay.parentNode.removeChild(existingOverlay);
        }
      }, 500);
    }
    
    // Fade in content
    const pageContent = document.querySelector('main') || document.body;
    pageContent.classList.remove('fade-out');
  }
  
  // Handle initial page load
  handlePageLoad();
  
  // Handle browser back/forward buttons
  window.addEventListener('popstate', function() {
    handlePageLoad();
  });
});