/**
 * Ernest Care interaction. No widgets. No tilt. No marquee.
 */
(function () {
  'use strict';

  var toggle = document.getElementById('mobile-toggle');
  var menu = document.getElementById('mobile-menu');
  if (toggle && menu) {
    if (!toggle.hasAttribute('aria-expanded')) toggle.setAttribute('aria-expanded', 'false');

    toggle.addEventListener('click', function () {
      var open = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });

    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        menu.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Open menu');
      });
    });
  }

  document.querySelectorAll('.js-booking').forEach(function (btn) {
    btn.addEventListener('click', function () {
      if (typeof gtag === 'function') {
        gtag('event', 'generate_lead', {
          event_category: 'engagement',
          event_label: 'briefing'
        });
        gtag('event', 'conversion', { send_to: 'AW-946159700' });
      }
    });
  });

  document.querySelectorAll('.term-tooltip').forEach(function (el) {
    el.addEventListener('click', function (e) {
      if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
      e.preventDefault();
      var open = el.classList.toggle('is-open');
      el.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    el.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        el.classList.toggle('is-open');
      }
      if (e.key === 'Escape') el.classList.remove('is-open');
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    var fadeElements = document.querySelectorAll('.fade-up, .fade-up-stagger');
    if (!fadeElements.length) return;
    if (!('IntersectionObserver' in window)) {
      fadeElements.forEach(function (el) { el.classList.add('in-view'); });
      return;
    }
    var fadeObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { root: null, rootMargin: '0px 0px -40px 0px', threshold: 0 });
    fadeElements.forEach(function (el) { fadeObserver.observe(el); });
  });
})();
