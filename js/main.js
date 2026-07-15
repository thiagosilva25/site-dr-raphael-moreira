// =========================================================
// Raphael Moreira Odontologia — main.js
// =========================================================

document.addEventListener('DOMContentLoaded', () => {

  // ---- WhatsApp: link com mensagem pré-preenchida ----
  // TODO: confirmar número final do WhatsApp do Dr. Raphael
  const WHATSAPP_NUMBER = '5531982603364';
  const WHATSAPP_MESSAGE = 'Olá, vim pelo site e gostaria de agendar uma consulta';
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  document.querySelectorAll('#whatsapp-header, #whatsapp-hero, #whatsapp-location, #whatsapp-float')
    .forEach(el => el.setAttribute('href', whatsappUrl));

  // ---- Menu mobile ----
  const navToggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('nav');

  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('is-open');
      navToggle.classList.toggle('is-active', isOpen);
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    nav.querySelectorAll('.nav__link').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('is-open');
        navToggle.classList.remove('is-active');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
  // ---- Slider Antes/Depois (arrastar para comparar) ----
  document.querySelectorAll('.ba-slider').forEach(slider => {
    const before = slider.querySelector('.ba-slider__before');
    const handle = slider.querySelector('.ba-slider__handle');
    const input = slider.querySelector('.ba-slider__input');

    const update = (value) => {
      before.style.clipPath = `inset(0 ${100 - value}% 0 0)`;
      handle.style.left = `${value}%`;
    };

    input.addEventListener('input', (e) => update(e.target.value));
    update(input.value); // posição inicial (50%)
  });

  // ---- Filtro da galeria Antes/Depois ----
  const filterButtons = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => {
        b.classList.remove('is-active');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('is-active');
      btn.setAttribute('aria-pressed', 'true');

      const filter = btn.dataset.filter;
      galleryItems.forEach(item => {
        const match = filter === 'all' || item.dataset.category === filter;
        item.classList.toggle('is-hidden', !match);
      });
    });
  });

  // ---- Reveal ao rolar a página ----
  const revealEls = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window && revealEls.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(el => observer.observe(el));
  } else {
    // fallback: sem suporte a IntersectionObserver, mostra tudo direto
    revealEls.forEach(el => el.classList.add('is-visible'));
  }

  // ---- Ano dinâmico no rodapé ----
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

});