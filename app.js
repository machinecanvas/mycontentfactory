const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

document.querySelectorAll('[data-year]').forEach(el => {
  el.textContent = new Date().getFullYear();
});

// Lightweight UTM capture so enquiries can show where the lead came from.
const params = new URLSearchParams(window.location.search);
const utmFields = ['utm_source', 'utm_medium', 'utm_campaign'];
utmFields.forEach(key => {
  const field = document.querySelector(`[name="${key}"]`);
  if (field && params.get(key)) field.value = params.get(key);
});
