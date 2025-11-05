
// Minimal script for interaction
document.addEventListener('DOMContentLoaded', () => {
  // simple progressive enhancement: make external links open in new tab (already mostly handled in HTML)
  document.querySelectorAll('a[target="_blank"]').forEach(a => a.rel = 'noopener');
});
