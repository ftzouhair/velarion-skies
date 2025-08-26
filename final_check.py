import os
import re

# Directory containing the HTML files
html_dir = r"C:\Users\ZZ\Desktop\velarion-skies\velarion-skies-used"

print("Checking HTML files for correct implementation:")

for filename in os.listdir(html_dir):
    if filename.endswith(".html"):
        filepath = os.path.join(html_dir, filename)
        
        with open(filepath, 'r', encoding='utf-8') as file:
            content = file.read()
        
        # Check for correct data-theme attribute
        has_data_theme = 'data-theme="light"' in content
        
        # Check for inline script
        has_inline_script = "const key='theme'" in content and "document.documentElement.setAttribute('data-theme', theme)" in content
        
        # Check for meta theme-color with id
        has_meta_theme_color = '<meta name="theme-color" content="#FAFAFA" id="meta-theme-color">' in content
        
        # Check for multiple theme-color tags (should not have any)
        theme_color_tags = re.findall(r'<meta[^>]*name="theme-color"[^>]*>', content)
        has_multiple_theme_colors = len(theme_color_tags) > 1
        
        if has_data_theme and has_inline_script and has_meta_theme_color and not has_multiple_theme_colors:
            print(f"PASS: {filename} - Correct implementation")
        else:
            print(f"FAIL: {filename} - Issues found:")
            if not has_data_theme:
                print("  - Missing data-theme attribute")
            if not has_inline_script:
                print("  - Missing inline script")
            if not has_meta_theme_color:
                print("  - Missing meta theme-color tag with id")
            if has_multiple_theme_colors:
                print("  - Has multiple theme-color tags")

print("\nChecking CSS for dark mode implementation:")

# Check CSS files
css_files = [
    os.path.join(html_dir, "assets", "css", "theme.css"),
    os.path.join(html_dir, "assets", "css", "style.css")
]

for css_file in css_files:
    if os.path.exists(css_file):
        with open(css_file, 'r', encoding='utf-8') as file:
            content = file.read()
        
        # Check for dark mode variables
        has_dark_variables = '[data-theme="dark"]' in content
        has_luxury_touches = '[data-theme="dark"] .card' in content
        
        if has_dark_variables and has_luxury_touches:
            print(f"PASS: {os.path.basename(css_file)} - Dark mode properly implemented")
        else:
            print(f"FAIL: {os.path.basename(css_file)} - Issues found:")
            if not has_dark_variables:
                print("  - Missing dark mode variables")
            if not has_luxury_touches:
                print("  - Missing luxury touches")