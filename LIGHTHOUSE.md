# Lighthouse Performance Expectations

Based on the optimizations performed, we expect the following Lighthouse scores on a Fast 4G emulation:

- **Performance:** > 90
- **Time to Interactive (TTI):** < 3.8s
- **Total Blocking Time (TBT):** < 200ms
- **Cumulative Layout Shift (CLS):** < 0.1

These scores are based on the following optimizations:

- **Critical CSS:** Inlining critical CSS to ensure a fast first paint.
- **Asynchronous CSS:** Loading non-critical CSS asynchronously to avoid render blocking.
- **Deferred JavaScript:** Deferring the loading of JavaScript to prevent it from blocking the page load.
- **Image Optimization:**
  - Using `loading="lazy"` for below-the-fold images.
  - Providing `width` and `height` attributes to prevent layout shift.
  - Preloading the hero image.
- **Font Optimization:**
  - Using `preconnect` to speed up the connection to Google Fonts.
  - Using `font-display: swap` to ensure that text is visible while the fonts are loading.
