import os
import re

# Directory containing the HTML files
html_dir = r"C:\Users\ZZ\Desktop\velarion-skies\velarion-skies-used"

# Check for theme-color meta tags in HTML files
print("Checking HTML files for theme-color meta tags:")
for filename in os.listdir(html_dir):
    if filename.endswith(".html"):
        filepath = os.path.join(html_dir, filename)
        
        with open(filepath, 'r', encoding='utf-8') as file:
            content = file.read()
        
        # Check if theme-color tags are present
        if 'name="theme-color"' in content:
            print(f"PASS: {filename} has theme-color meta tags")
        else:
            print(f"FAIL: {filename} is missing theme-color meta tags")

# Check theme.js file
theme_js_path = os.path.join(html_dir, "assets", "js", "theme.js")
if os.path.exists(theme_js_path):
    with open(theme_js_path, 'r', encoding='utf-8') as file:
        content = file.read()
    
    if "theme-transition" in content:
        print("PASS: theme.js has theme transition implementation")
    else:
        print("FAIL: theme.js is missing theme transition implementation")
else:
    print("FAIL: theme.js file not found")

# Check theme.css file
theme_css_path = os.path.join(html_dir, "assets", "css", "theme.css")
if os.path.exists(theme_css_path):
    with open(theme_css_path, 'r', encoding='utf-8') as file:
        content = file.read()
    
    if "theme-transition" in content:
        print("PASS: theme.css has theme transition styles")
    else:
        print("FAIL: theme.css is missing theme transition styles")
else:
    print("FAIL: theme.css file not found")

# Check manifest.json file
manifest_path = os.path.join(html_dir, "assets", "manifest.json")
if os.path.exists(manifest_path):
    with open(manifest_path, 'r', encoding='utf-8') as file:
        content = file.read()
    
    if '"theme_color"' in content:
        print("PASS: manifest.json has theme_color property")
    else:
        print("FAIL: manifest.json is missing theme_color property")
else:
    print("FAIL: manifest.json file not found")