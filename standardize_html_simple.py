import os
import re

# Directory containing the HTML files
html_dir = r"C:\\Users\\ZZ\\Desktop\\velarion-skies\\velarion-skies-used"

# Correct implementation to insert after viewport meta tag
correct_script_and_meta = '''  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <script>
  (function(){
    const key='theme';
    const saved=localStorage.getItem(key);
    const prefersDark=window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme=saved || (prefersDark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.style.colorScheme = theme;
  })();
  </script>
  <meta name="theme-color" content="#FAFAFA" id="meta-theme-color">'''

# Pattern to find viewport meta tag
viewport_pattern = r'(<meta[^>]*name="viewport"[^>]*>)'

for filename in os.listdir(html_dir):
    if filename.endswith(".html"):
        filepath = os.path.join(html_dir, filename)
        
        with open(filepath, 'r', encoding='utf-8') as file:
            content = file.read()
        
        # Remove existing theme-color meta tags
        content = re.sub(r'<meta[^>]*name="theme-color"[^>]*>', '', content)
        
        # Remove existing inline theme scripts
        content = re.sub(r'<script>\s*\(function\(\)\{[^}]*const key=\'theme\';[^}]*document\.documentElement\.style\.colorScheme = theme;[^}]*\}\)\(\);\s*</script>', '', content)
        
        # Insert correct script and meta after viewport meta tag
        content = re.sub(viewport_pattern, correct_script_and_meta, content, count=1)
        
        with open(filepath, 'w', encoding='utf-8') as file:
            file.write(content)
        
        print(f"Updated {filename}")

print("All HTML files have been standardized.")