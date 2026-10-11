// Mobile nav toggle
const navToggle = document.getElementById('nav-toggle');
const mainNav = document.getElementById('main-nav');

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Contact form -> WhatsApp redirect
const contactForm = document.getElementById('contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('field-name').value.trim();
    const service = document.getElementById('field-service').value.trim();
    const message = document.getElementById('field-message').value.trim();

    const text =
      `Hi Malabar Codeworks, I'm ${name}.\n` +
      `Service needed: ${service}\n` +
      `Message: ${message}`;

    const whatsappUrl = `https://wa.me/919746549843?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank', 'noopener');
  });
}

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
