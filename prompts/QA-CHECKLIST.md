# QA Checklist

This checklist outlines the quality gates for the project. Each item should be tested and marked as Pass or Fail.

## Visual

- [ ] **Pixel parity check:**
  - [ ] 1440px width: [Pass/Fail]
  - [ ] 1024px width: [Pass/Fail]
  - [ ] 768px width: [Pass/Fail]
  - [ ] 390px width: [Pass/Fail]
- [ ] **No layout jumps:**
  - [ ] Hero section: [Pass/Fail]
  - [ ] Navigation: [Pass/Fail]
  - [ ] Call to Action (CTA): [Pass/Fail]

## Functional

- [ ] **Mobile menu:**
  - [ ] Toggles correctly: [Pass/Fail]
  - [ ] Traps no focus: [Pass/Fail]
- [ ] **FAQ section:**
  - [ ] Expands/collapses via mouse: [Pass/Fail]
  - [ ] Expands/collapses via keyboard: [Pass/Fail]
- [ ] **Flight calculator:**
  - [ ] Outputs times correctly: [Pass/Fail]
  - [ ] Responds to both selectors: [Pass/Fail]

## Performance

- [ ] **Lighthouse (Fast 4G emulation):**
  - [ ] Performance: ≥ 90 [Pass/Fail]
  - [ ] Best Practices: ≥ 95 [Pass/Fail]
  - [ ] Accessibility: ≥ 95 [Pass/Fail]
  - [ ] SEO: ≥ 95 [Pass/Fail]
  - [ ] Largest Contentful Paint (LCP): ≤ 1.8s [Pass/Fail]
  - [ ] Cumulative Layout Shift (CLS): ≤ 0.1 [Pass/Fail]
  - [ ] Total Blocking Time (TBT): ≤ 200ms [Pass/Fail]

## Code

- [ ] **Console errors/warnings:**
  - [ ] No console errors: [Pass/Fail]
  - [ ] No console warnings: [Pass/Fail]
- [ ] **HTML validation:**
  - [ ] W3C HTML validation: [Pass/Fail]
- [ ] **CSS errors:**
  - [ ] No critical CSS errors: [Pass/Fail]
