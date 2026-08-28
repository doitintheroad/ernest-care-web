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


/* ==========================================================================
   Apple-Inspired Scroll-Driven Hero Choreography Engine (Pure Vanilla, Zero Bloat)
   ========================================================================== */
(function initHeroScroll() {
  const track = document.querySelector('.hero-scroll-track');
  const copyStage = document.querySelector('.hero-copy-stage');
  const specStage = document.querySelector('.hero-spec-stage');
  const cue = document.querySelector('.hero-scroll-cue');

  if (!track || !copyStage || !specStage) return;

  // Respect reduced motion
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  function onScroll() {
    if (window.innerWidth <= 960) {
      copyStage.style.transform = '';
      specStage.style.transform = '';
      specStage.style.opacity = '';
      specStage.style.filter = '';
      return;
    }

    const rect = track.getBoundingClientRect();
    const totalDist = rect.height - window.innerHeight;
    if (totalDist <= 0) return;

    const progress = Math.min(Math.max(-rect.top / totalDist, 0), 1);

    // Smooth cubic easing
    const ease = progress < 0.5 
      ? 2 * progress * progress 
      : -1 + (4 - 2 * progress) * progress;

    // At progress 0 (top): Copy is centered across screen (+14% shift)
    // At progress 1 (scroll completed): Copy anchors cleanly to the left column (0% shift)
    const copyOffset = (1 - ease) * 14; 
    copyStage.style.transform = 'translate3d(' + copyOffset + '%, 0, 0)';

    // At progress 0: Spec stage is off-screen to right (+80px), hidden (opacity 0), blurred (8px)
    // As you scroll: Glides smoothly into place at 0px, opacity 1, blur 0px
    const specOffset = (1 - ease) * 80;
    const specOpacity = Math.min(Math.max((progress - 0.05) / 0.75, 0), 1);
    const specBlur = (1 - ease) * 8;

    specStage.style.transform = 'translate3d(' + specOffset + 'px, 0, 0)';
    specStage.style.opacity = specOpacity.toString();
    specStage.style.filter = specBlur > 0.1 ? 'blur(' + specBlur.toFixed(1) + 'px)' : 'none';
    specStage.style.pointerEvents = progress > 0.5 ? 'auto' : 'none';

    // Fade out scroll cue indicator
    if (cue) {
      const cueOpacity = Math.max(0.7 - progress * 3, 0);
      cue.style.opacity = cueOpacity.toString();
    }
  }

  window.addEventListener('scroll', function() {
    window.requestAnimationFrame(onScroll);
  }, { passive: true });

  window.addEventListener('resize', function() {
    window.requestAnimationFrame(onScroll);
  }, { passive: true });

  // Initial call
  onScroll();
})();
