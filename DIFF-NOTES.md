# DIFF NOTES: index.html

This document outlines the key changes made to the `index.html` file.

## Key Changes

- **Inlined Critical CSS:** The content of `assets/css/critical.css` has been inlined in the `<head>` to improve the time to first paint.
- **External Stylesheet:** The main stylesheet is now linked externally: `<link rel="stylesheet" href="assets/css/style.css" media="print" onload="this.media='all'">`.
- **Deferred JavaScript:** The main JavaScript file is now loaded with the `defer` attribute to prevent it from blocking the page load: `<script src="assets/js/main.js" defer></script>`.
- **Image Optimization:**
  - All data-URI images have been replaced with references to placeholder images in the `assets/images/placeholders` directory.
  - `width` and `height` attributes have been added to all `<img>` tags to prevent layout shift.
  - `loading="lazy"` has been added to all below-the-fold images to improve performance.
- **Typo Fixes:**
  - The copyright year has been corrected to `2025`.
  - Minor wording inconsistencies have been corrected for a more professional tone.
- **Removed Inline Styles:** All inline `style` attributes have been removed and replaced with utility classes where appropriate.

## TODOs

- **Replace Placeholder Images:** The placeholder images in the `assets/images/placeholders` directory should be replaced with the final images. The `assets/images/manifest.json` file provides guidance on the recommended format and dimensions for each image.
