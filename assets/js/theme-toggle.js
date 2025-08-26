// Select root, toggle button, and meta theme-color
const root = document.documentElement;
const toggleButton = document.getElementById('theme-toggle');
const metaThemeColor = document.getElementById('meta-theme-color');

/**
 * Apply the specified theme
 * @param {string} theme - The theme to apply ('light' or 'dark')
 * @param {boolean} persist - Whether to save the theme to localStorage
 */
function applyTheme(theme, persist = false) {
  // Set data-theme attribute and color-scheme
  root.setAttribute('data-theme', theme);
  root.style.colorScheme = theme;
  
  // Update meta theme-color
  if (metaThemeColor) {
    metaThemeColor.content = theme === 'dark' ? '#142639' : '#FAFAFA';
  }
  
  // Sync aria-pressed on toggle button
  if (toggleButton) {
    toggleButton.setAttribute('aria-pressed', theme === 'dark');
  }
  
  // Save to localStorage if persist is true
  if (persist) {
    localStorage.setItem('theme', theme);
  }
}

/**
 * Toggle between light and dark themes
 */
function toggleTheme() {
  const currentTheme = root.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  applyTheme(newTheme, true); // Persist the change
}

// On load: Apply saved theme or system preference
document.addEventListener('DOMContentLoaded', () => {
  // Check for saved theme or system preference
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
  
  // Apply the initial theme without persisting
  applyTheme(initialTheme);
  
  // Listen for OS theme changes if no saved preference
  if (!savedTheme) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      const systemTheme = e.matches ? 'dark' : 'light';
      applyTheme(systemTheme);
    });
  }
  
  // Add click event to toggle button
  if (toggleButton) {
    toggleButton.addEventListener('click', toggleTheme);
    
    // Add keyboard events (Enter/Space) to toggle button
    toggleButton.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleTheme();
      }
    });
  }
});