# Luxury Dark Mode Toggle System - Color Palette Update

## Overview
This document describes the updates made to the luxury dark mode toggle system for the VELARION Skies website to implement the "Deep Navy Elegance" palette as specified in the CSS guide.

## Updated Color Palette
### Dark Mode (Updated)
- Primary: #071f33 (Brand Navy)
- Accent: #C8A46B (Warm Gold)
- Background: #142639 (Deep Navy Background)
- Surface: #1e3a52 (Lighter Navy for Cards)
- Text Primary: #E8F0FF (Warm Off-White)
- Text Secondary: #B8C5D6 (Muted Blue-Gray)
- Border: #2D4A66 (Navy Border)
- Gold Glow: rgba(200,164,107,0.14) (Subtle gold glow)

## Files Updated

### CSS Files
1. `assets/css/theme.css` - Updated dark mode color definitions
2. `assets/css/dark-theme.css` - Updated dark mode color definitions
3. `assets/css/critical.css` - Updated dark mode accent color

### HTML Files
All 15 HTML files were updated to use the new dark mode background color in the theme-color meta tag:
- `about.html`
- `accessibility.html`
- `aircraft.html`
- `booking.html`
- `contact.html`
- `cookies.html`
- `destinations.html`
- `faq.html`
- `index.html`
- `legal.html`
- `privacy-policy.html`
- `request-quote.html`
- `services.html`
- `terms-conditions.html`
- `thank-you.html`

### Configuration Files
1. `assets/manifest.json` - Updated background_color to #142639

## Implementation Details
The updates ensure consistent color usage across all platform features and maintain the sophisticated "Deep Navy Elegance" color palette throughout the site. All transitions between light and dark modes now use the specified colors, providing a seamless luxury experience.