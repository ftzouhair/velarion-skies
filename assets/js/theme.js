document.addEventListener('DOMContentLoaded', () => {
  const switcher = document.getElementById('theme-switcher');
  const doc = document.documentElement;
  
  // Add a class for transition effects
  doc.classList.add('theme-transition');
  
  // Function to apply the chosen theme with smooth transition
  const applyTheme = (theme) => {
    // Add transition class
    doc.classList.add('theme-transition');
    
    // Apply the theme
    doc.setAttribute('data-theme', theme);
    
    // Update switcher state
    if (switcher) {
      switcher.setAttribute('aria-pressed', theme === 'dark');
      
      // Add visual feedback for the switcher
      switcher.classList.add('switching');
      setTimeout(() => {
        switcher.classList.remove('switching');
      }, 300);
    }
    
    // Update meta theme-color tag
    const themeColorMeta = document.getElementById('meta-theme-color');
    if (themeColorMeta) {
      if (theme === 'dark') {
        themeColorMeta.setAttribute('content', '#142639');
      } else {
        themeColorMeta.setAttribute('content', '#FAFAFA');
      }
    }
    
    // Save to localStorage
    localStorage.setItem('theme', theme);
    
    // Remove transition class after a short delay to prevent initial transition
    setTimeout(() => {
      doc.classList.remove('theme-transition');
    }, 300);
  };

  // Determine the initial theme
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
  
  // Apply initial theme without transition
  doc.setAttribute('data-theme', initialTheme);
  if (switcher) {
    switcher.setAttribute('aria-pressed', initialTheme === 'dark');
  }
  
  // Add transition class after initial load
  setTimeout(() => {
    doc.classList.add('theme-transition');
  }, 100);

  // Add click listener to the switcher button
  if (switcher) {
    switcher.addEventListener('click', () => {
      const newTheme = doc.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
    });
  }

  // Listen for changes in OS preference
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    // Only apply OS preference change if user hasn't explicitly set a theme
    if (!localStorage.getItem('theme')) {
      const newTheme = e.matches ? 'dark' : 'light';
      applyTheme(newTheme);
    }
  });
});