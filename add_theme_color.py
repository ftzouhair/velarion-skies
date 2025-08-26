import os
import re

# Directory containing the HTML files
html_dir = r"C:\Users\ZZ\Desktop\velarion-skies\velarion-skies-used"

# Regex pattern to find the viewport meta tag
viewport_pattern = r'(<meta name="viewport" content="[^"]*" />\s*)'

# Theme-color meta tags to insert
theme_color_tags = '''<meta name="theme-color" content="#071f33" media="(prefers-color-scheme: light)">
  <meta name="theme-color" content="#0A1929" media="(prefers-color-scheme: dark)">
  '''

# Iterate through all HTML files in the directory
for filename in os.listdir(html_dir):
    if filename.endswith(".html"):
        filepath = os.path.join(html_dir, filename)
        
        # Read the file content
        with open(filepath, 'r', encoding='utf-8') as file:
            content = file.read()
        
        # Check if theme-color tags are already present
        if 'name="theme-color"' not in content:
            # Insert theme-color tags after the viewport meta tag
            updated_content = re.sub(viewport_pattern, r'\1' + theme_color_tags, content, count=1)
            
            # Write the updated content back to the file
            with open(filepath, 'w', encoding='utf-8') as file:
                file.write(updated_content)
            
            print(f"Updated {filename}")
        else:
            print(f"Skipped {filename} (theme-color tags already present)")