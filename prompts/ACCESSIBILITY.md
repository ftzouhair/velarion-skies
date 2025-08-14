# Accessibility Audit

This document outlines the accessibility checks performed on the `index.html` file.

| Check | Status | Notes |
| --- | --- | --- |
| **Color Contrast** | ⚠️ Manual Check Needed | The color contrast needs to be checked with a tool to ensure it meets WCAG AA standards. |
| **Focus States** | ✅ Passed | All interactive elements have a visible focus state using the `:focus-visible` pseudo-class. |
| **`aria-current`** | ✅ Passed | The active navigation link has the `aria-current="page"` attribute. |
| **`prefers-reduced-motion`** | ✅ Passed | A media query has been added to disable animations and transitions for users who prefer reduced motion. |
| **Heading Hierarchy** | ✅ Passed | The heading hierarchy is logical, with a single `<h1>` and descriptive `<h2>` tags for each section. |
| **Alt Text** | ✅ Passed | All images have descriptive alt text. |
| **Structured Data** | ✅ Passed | The `TravelAgency` JSON-LD has been enhanced with the `sameAs` property for social media profiles. |
