import os
import re

# Directory containing the project files
project_dir = r"C:\\Users\\ZZ\\Desktop\\velarion-skies\\velarion-skies-used"

# Check for the new dark mode colors in CSS files
print("Checking CSS files for updated dark mode colors:")
css_files = [
    os.path.join(project_dir, "assets", "css", "theme.css"),
    os.path.join(project_dir, "assets", "css", "dark-theme.css"),
    os.path.join(project_dir, "assets", "css", "critical.css")
]

for css_file in css_files:
    if os.path.exists(css_file):
        with open(css_file, 'r', encoding='utf-8') as file:
            content = file.read()
        
        # Check for the new color definitions
        if "--primary: #071f33" in content and "--accent: #C8A46B" in content:
            print(f"PASS: {os.path.basename(css_file)} has updated dark mode colors")
        else:
            print(f"FAIL: {os.path.basename(css_file)} is missing updated dark mode colors")
    else:
        print(f"FAIL: {css_file} not found")

# Check theme-color meta tags in HTML files
print("\\nChecking HTML files for updated theme-color meta tags:")
for filename in os.listdir(project_dir):
    if filename.endswith(".html"):
        filepath = os.path.join(project_dir, filename)
        
        with open(filepath, 'r', encoding='utf-8') as file:
            content = file.read()
        
        # Check for updated dark mode theme-color meta tag
        if 'content="#142639" media="(prefers-color-scheme: dark)"' in content:
            print(f"PASS: {filename} has updated dark mode theme-color meta tag")
        else:
            print(f"FAIL: {filename} is missing updated dark mode theme-color meta tag")

# Check manifest.json
print("\\nChecking manifest.json for updated background color:")
manifest_path = os.path.join(project_dir, "assets", "manifest.json")
if os.path.exists(manifest_path):
    with open(manifest_path, 'r', encoding='utf-8') as file:
        content = file.read()
    
    if '"background_color": "#142639"' in content:
        print("PASS: manifest.json has updated background color")
    else:
        print("FAIL: manifest.json is missing updated background color")
else:
    print("FAIL: manifest.json not found")