import os
import re

# Directory containing the HTML files
html_dir = r"C:\Users\ZZ\Desktop\velarion-skies\velarion-skies-used"

# Regex pattern to find the dark mode theme-color meta tag
dark_theme_pattern = r'(<meta name="theme-color" content=")#0A1929(" media="\(prefers-color-scheme: dark\)">)'

# New dark mode theme color
new_dark_theme_color = r'\1#142639\2'

# Iterate through all HTML files in the directory
for filename in os.listdir(html_dir):
    if filename.endswith(".html"):
        filepath = os.path.join(html_dir, filename)
        
        # Read the file content
        with open(filepath, 'r', encoding='utf-8') as file:
            content = file.read()
        
        # Update the dark mode theme-color meta tag
        updated_content = re.sub(dark_theme_pattern, new_dark_theme_color, content)
        
        # Write the updated content back to the file
        with open(filepath, 'w', encoding='utf-8') as file:
            file.write(updated_content)
        
        print(f"Updated {filename}")