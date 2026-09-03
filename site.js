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


/* ==========================================================================
   Apple-Grade Kinetic Hero Engine: Smooth Slide + Staggered Subtext/Table Fade
   ========================================================================== */
(function initKineticHero() {
  const track = document.querySelector('.hero-scroll-track');
  const container = document.querySelector('.hero-choreography');
  const h1 = document.querySelector('.hero-display');
  const subtextStage = document.querySelector('.hero-subtext-stage');
  const specStage = document.querySelector('.hero-spec-stage');
  const cue = document.querySelector('.hero-scroll-cue');

  if (!track || !container || !h1 || !subtextStage || !specStage) return;

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  function onScroll() {
    if (window.innerWidth <= 960) {
      h1.style.transform = '';
      subtextStage.style.transform = '';
      subtextStage.style.opacity = '';
      specStage.style.transform = '';
      specStage.style.opacity = '';
      specStage.style.filter = '';
      return;
    }

    const rect = track.getBoundingClientRect();
    const totalDist = rect.height - window.innerHeight;
    if (totalDist <= 0) return;

    // Scroll progress 0.0 -> 1.0
    const progress = Math.min(Math.max(-rect.top / totalDist, 0), 1);

    // ── STAGE 1: HEADLINE SLIDES FROM CENTER TO LEFT ANCHOR (Progress 0.0 -> 0.5)
    // Calculate exact center offset relative to the container
    const containerWidth = container.clientWidth;
    const h1Width = h1.clientWidth;
    // Dead-center X within the container
    const maxCenterShift = Math.max((containerWidth - h1Width) / 2, 0);

    const slideProgress = Math.min(progress / 0.5, 1);
    // Smooth cubic bezier easing
    const slideEase = slideProgress < 0.5
      ? 2 * slideProgress * slideProgress
      : -1 + (4 - 2 * slideProgress) * slideProgress;

    const currentShift = maxCenterShift * (1 - slideEase);
    h1.style.transform = 'translate3d(' + currentShift.toFixed(1) + 'px, 0, 0)';

    // ── STAGE 2: SUBTEXT & TABLE FADE IN (Progress 0.35 -> 0.85)
    const fadeProgress = Math.min(Math.max((progress - 0.35) / 0.5, 0), 1);
    const fadeEase = fadeProgress * fadeProgress * (3 - 2 * fadeProgress); // Smoothstep

    // Subtext floats gently up as it fades in
    const subtextY = (1 - fadeEase) * 20;
    subtextStage.style.opacity = fadeEase.toFixed(3);
    subtextStage.style.transform = 'translate3d(0, ' + subtextY.toFixed(1) + 'px, 0)';
    subtextStage.style.pointerEvents = fadeProgress > 0.7 ? 'auto' : 'none';

    // Specification Table slides in from right (+45px) with soft focus reveal
    const tableX = (1 - fadeEase) * 45;
    const tableBlur = (1 - fadeEase) * 6;
    specStage.style.opacity = fadeEase.toFixed(3);
    specStage.style.transform = 'translate3d(' + tableX.toFixed(1) + 'px, 0, 0)';
    specStage.style.filter = tableBlur > 0.1 ? 'blur(' + tableBlur.toFixed(1) + 'px)' : 'none';
    specStage.style.pointerEvents = fadeProgress > 0.7 ? 'auto' : 'none';

    // Scroll cue fades out quickly on first scrub
    if (cue) {
      const cueOpacity = Math.max(0.7 - progress * 3.5, 0);
      cue.style.opacity = cueOpacity.toFixed(2);
    }
  }

  window.addEventListener('scroll', function() {
    window.requestAnimationFrame(onScroll);
  }, { passive: true });

  window.addEventListener('resize', function() {
    window.requestAnimationFrame(onScroll);
  }, { passive: true });

  // Run on initial load
  onScroll();
})();


/* ==========================================================================
   Apple-Grade Kinetic Hero Engine: Full-Width Right-to-Left Slide + Staggered Subtext Fade
   ========================================================================== */
(function initKineticHero() {
  const track = document.querySelector('.hero-scroll-track');
  const container = document.querySelector('.hero-choreography');
  const copyStage = document.querySelector('.hero-copy-stage');
  const h1 = document.querySelector('.hero-display');
  const subtextStage = document.querySelector('.hero-subtext-stage');
  const specStage = document.querySelector('.hero-spec-stage');
  const cue = document.querySelector('.hero-scroll-cue');

  if (!track || !container || !copyStage || !h1 || !subtextStage || !specStage) return;

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) {
    h1.style.transform = 'none';
    subtextStage.style.opacity = '1';
    subtextStage.style.transform = 'none';
    subtextStage.style.pointerEvents = 'auto';
    specStage.style.opacity = '1';
    specStage.style.transform = 'none';
    specStage.style.filter = 'none';
    specStage.style.pointerEvents = 'auto';
    return;
  }

  function updateChoreography() {
    if (window.innerWidth <= 960) {
      h1.style.transform = '';
      subtextStage.style.transform = '';
      subtextStage.style.opacity = '';
      subtextStage.style.pointerEvents = '';
      specStage.style.transform = '';
      specStage.style.opacity = '';
      specStage.style.filter = '';
      specStage.style.pointerEvents = '';
      return;
    }

    const rect = track.getBoundingClientRect();
    const totalDist = rect.height - window.innerHeight;
    if (totalDist <= 0) return;

    // Scroll progress 0.0 -> 1.0
    const progress = Math.min(Math.max(-rect.top / totalDist, 0), 1);

    // ── STAGE 1: HEADLINE TRANSITIONS FROM FULL-WIDTH RIGHT TO LEFT ANCHOR
    // Progress 0.0 -> 0.48
    // Calculate right-offset so the headline begins spanning across the right side of the container
    const containerW = container.clientWidth;
    const h1W = h1.clientWidth;
    // Shift distance: spans from the right edge of container over to 0 (left anchor)
    const rightSpanShift = Math.max(containerW - h1W, containerW * 0.38);

    const slideProgress = Math.min(progress / 0.48, 1);
    // Smooth cubic easing curve
    const slideEase = slideProgress < 0.5
      ? 2 * slideProgress * slideProgress
      : -1 + (4 - 2 * slideProgress) * slideProgress;

    // At progress 0: currentShift = rightSpanShift (all the way to the right)
    // At progress 1 (slide complete): currentShift = 0 (anchored left)
    const currentShift = rightSpanShift * (1 - slideEase);
    h1.style.transform = 'translate3d(' + currentShift.toFixed(1) + 'px, 0, 0)';

    // ── STAGE 2: SUBTEXT & SPECIFICATION TABLE FADE IN
    // Starts only after headline is mostly anchored (progress 0.40 -> 0.88)
    const fadeProgress = Math.min(Math.max((progress - 0.40) / 0.48, 0), 1);
    // Smoothstep interpolation
    const fadeEase = fadeProgress * fadeProgress * (3 - 2 * fadeProgress);

    // Subtext: starts at opacity 0, gently rises 24px into place
    const subtextY = (1 - fadeEase) * 24;
    subtextStage.style.opacity = fadeEase.toFixed(3);
    subtextStage.style.transform = 'translate3d(0, ' + subtextY.toFixed(1) + 'px, 0)';
    subtextStage.style.pointerEvents = fadeProgress > 0.75 ? 'auto' : 'none';

    // Specification Table: starts at opacity 0, glides in 50px from right, unblurs
    const tableX = (1 - fadeEase) * 50;
    const tableBlur = (1 - fadeEase) * 8;
    specStage.style.opacity = fadeEase.toFixed(3);
    specStage.style.transform = 'translate3d(' + tableX.toFixed(1) + 'px, 0, 0)';
    specStage.style.filter = tableBlur > 0.1 ? 'blur(' + tableBlur.toFixed(1) + 'px)' : 'none';
    specStage.style.pointerEvents = fadeProgress > 0.75 ? 'auto' : 'none';

    // Scroll cue indicator fades out on initial user scroll
    if (cue) {
      const cueOpacity = Math.max(0.7 - progress * 4, 0);
      cue.style.opacity = cueOpacity.toFixed(2);
    }
  }

  // Bind passive listeners
  window.addEventListener('scroll', function() {
    window.requestAnimationFrame(updateChoreography);
  }, { passive: true });

  window.addEventListener('resize', function() {
    window.requestAnimationFrame(updateChoreography);
  }, { passive: true });

  // Execute immediately on script parse
  updateChoreography();
})();


/* ==========================================================================
   Apple-Grade Kinetic Hero Engine: Scroll Choreography & Reading Plateau
   ========================================================================== */
(function initKineticHero() {
  const track = document.querySelector('.hero-scroll-track');
  const anchor = document.querySelector('.hero-h1-anchor');
  const l1 = document.querySelector('.hl-1');
  const l2 = document.querySelector('.hl-2');
  const subtextStage = document.querySelector('.hero-subtext-stage');
  const specStage = document.querySelector('.hero-spec-stage');
  const cue = document.querySelector('.hero-scroll-cue');

  if (!track || !anchor || !l1 || !l2 || !subtextStage || !specStage) return;

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) {
    l1.style.transform = 'none';
    l2.style.transform = 'none';
    subtextStage.style.opacity = '1';
    subtextStage.style.transform = 'none';
    subtextStage.style.pointerEvents = 'auto';
    specStage.style.opacity = '1';
    specStage.style.transform = 'none';
    specStage.style.filter = 'none';
    specStage.style.pointerEvents = 'auto';
    return;
  }

  // Geometry cache
  let anchorLeft = 0;
  let screenCenter = 0;
  let w1 = 0;
  let w2 = 0;
  let shift1 = 0;
  let shift2 = 0;
  const startScale = 1.15; // Subtle luxury expansion at rest

  function measureGeometry() {
    if (window.innerWidth <= 960) {
      l1.style.transform = '';
      l2.style.transform = '';
      subtextStage.style.opacity = '';
      subtextStage.style.transform = '';
      subtextStage.style.pointerEvents = '';
      specStage.style.opacity = '';
      specStage.style.transform = '';
      specStage.style.filter = '';
      specStage.style.pointerEvents = '';
      return;
    }

    // Temporarily clear transforms to measure true unscaled layout dimensions
    const prevT1 = l1.style.transform;
    const prevT2 = l2.style.transform;
    l1.style.transform = 'none';
    l2.style.transform = 'none';

    const anchorRect = anchor.getBoundingClientRect();
    anchorLeft = anchorRect.left;
    screenCenter = window.innerWidth / 2;

    w1 = l1.offsetWidth;
    w2 = l2.offsetWidth;

    // Restore transforms
    l1.style.transform = prevT1;
    l2.style.transform = prevT2;

    // The shift required so each line's visual midpoint sits at screenCenter
    // With transform-origin: left center:
    // visual_left = anchorLeft + shift
    // visual_width = w * startScale
    // visual_center = visual_left + visual_width / 2 = screenCenter
    // => shift = screenCenter - anchorLeft - (w * startScale) / 2
    shift1 = screenCenter - anchorLeft - (w1 * startScale) / 2;
    shift2 = screenCenter - anchorLeft - (w2 * startScale) / 2;
  }

  function updateHeroChoreography() {
    if (window.innerWidth <= 960) return;

    const rect = track.getBoundingClientRect();
    const totalDist = rect.height - window.innerHeight;
    if (totalDist <= 0) return;

    // Scrub progress from 0.0 to 1.0
    const progress = Math.min(Math.max(-rect.top / totalDist, 0), 1);

    // ── CHOREOGRAPHY PHASES ──
    // Phase 1 (0.00 -> 0.08): Centered Opening Hold. Text sits dead-center.
    // Phase 2 (0.08 -> 0.48): Kinetic Glide. Headline transitions from center to left anchor.
    // Phase 3 (0.48 -> 0.88): Reading Plateau. 100% assembled, stable reading hold.
    // Phase 4 (0.88 -> 1.00): Natural Release to next section.

    let slideEase = 0;
    if (progress <= 0.08) {
      slideEase = 0;
    } else if (progress >= 0.48) {
      slideEase = 1;
    } else {
      const t = (progress - 0.08) / 0.40;
      slideEase = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }

    // 1. Headline Motion (glide + scale down)
    const currentScale = startScale - (startScale - 1) * slideEase;
    const currentX1 = shift1 * (1 - slideEase);
    const currentX2 = shift2 * (1 - slideEase);

    l1.style.transform = 'translate3d(' + currentX1.toFixed(2) + 'px, 0, 0) scale(' + currentScale.toFixed(3) + ')';
    l2.style.transform = 'translate3d(' + currentX2.toFixed(2) + 'px, 0, 0) scale(' + currentScale.toFixed(3) + ')';

    // 2. Subtext & Specification Instrument Fade-in
    // Starts as the headline nears the left anchor (progress 0.22 -> 0.48)
    let fadeEase = 0;
    if (progress <= 0.22) {
      fadeEase = 0;
    } else if (progress >= 0.48) {
      fadeEase = 1;
    } else {
      const f = (progress - 0.22) / 0.26;
      fadeEase = f * f * (3 - 2 * f);
    }

    const subtextY = (1 - fadeEase) * 20;
    subtextStage.style.opacity = fadeEase.toFixed(3);
    subtextStage.style.transform = 'translate3d(0, ' + subtextY.toFixed(1) + 'px, 0)';
    subtextStage.style.pointerEvents = fadeEase > 0.8 ? 'auto' : 'none';

    const tableX = (1 - fadeEase) * 40;
    const tableBlur = (1 - fadeEase) * 6;
    specStage.style.opacity = fadeEase.toFixed(3);
    specStage.style.transform = 'translate3d(' + tableX.toFixed(1) + 'px, 0, 0)';
    specStage.style.filter = tableBlur > 0.1 ? 'blur(' + tableBlur.toFixed(1) + 'px)' : 'none';
    specStage.style.pointerEvents = fadeEase > 0.8 ? 'auto' : 'none';

    // 3. Scroll Cue
    if (cue) {
      const cueOpacity = Math.max(0.75 - progress * 12, 0);
      cue.style.opacity = cueOpacity.toFixed(2);
    }
  }

  // Window events
  window.addEventListener('scroll', function() {
    window.requestAnimationFrame(updateHeroChoreography);
  }, { passive: true });

  window.addEventListener('resize', function() {
    measureGeometry();
    window.requestAnimationFrame(updateHeroChoreography);
  }, { passive: true });

  // Initial measurement once typography is ready
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(function() {
      measureGeometry();
      updateHeroChoreography();
    });
  } else {
    setTimeout(function() {
      measureGeometry();
      updateHeroChoreography();
    }, 60);
  }
})();

// ── EAP GAP DIAGNOSTIC INTERACTION ──
  (function initDiagnostic() {
    var diagCard = document.querySelector('.diagnostic-card');
    if (!diagCard) return;

    var answers = [null, null, null, null, null];
    var scoreVal = document.getElementById('diag-score-val');
    var scoreStatus = document.getElementById('diag-score-status');
    var analysisP = document.getElementById('diag-analysis-p');
    var emailForm = document.getElementById('diag-email-form');
    var emailInput = document.getElementById('diag-email-input');
    var emailConfirm = document.getElementById('diag-email-confirm');

    var qRows = diagCard.querySelectorAll('.diagnostic-q-row');

    qRows.forEach(function (row, idx) {
      var btnYes = row.querySelector('.diag-btn-yes');
      var btnNo = row.querySelector('.diag-btn-no');

      if (btnYes && btnNo) {
        btnYes.addEventListener('click', function () {
          answers[idx] = true;
          btnYes.classList.add('active-yes');
          btnNo.classList.remove('active-no');
          updateAuditScore();
        });

        btnNo.addEventListener('click', function () {
          answers[idx] = false;
          btnNo.classList.add('active-no');
          btnYes.classList.remove('active-yes');
          updateAuditScore();
        });
      }
    });

    function updateAuditScore() {
      var answeredCount = 0;
      var yesCount = 0;

      answers.forEach(function (ans) {
        if (ans !== null) {
          answeredCount++;
          if (ans === true) yesCount++;
        }
      });

      if (answeredCount === 0) return;

      var pct = Math.round((yesCount / 5) * 100);
      if (scoreVal) scoreVal.textContent = pct + '%';

      if (pct === 100) {
        if (scoreStatus) {
          scoreStatus.textContent = 'FULL CARVE-OUT STRUCTURE';
          scoreStatus.style.color = '#7ADAA0';
        }
        if (analysisP) analysisP.textContent = 'Your organization has established robust executive clinical infrastructure with dedicated clinician access, rapid SLAs, and statutory data isolation.';
      } else if (pct >= 60) {
        if (scoreStatus) {
          scoreStatus.textContent = 'MODERATE LEADERSHIP COVERAGE GAP';
          scoreStatus.style.color = 'var(--ochre)';
        }
        if (analysisP) analysisP.textContent = 'Your current program covers general staff but leaves senior professionals vulnerable to intake delays, privacy hesitation, and token 3-session cutoffs.';
      } else {
        if (scoreStatus) {
          scoreStatus.textContent = 'ACUTE LEADERSHIP RISK EXPOSURE';
          scoreStatus.style.color = '#FF9B94';
        }
        if (analysisP) analysisP.textContent = 'Your senior cohort is operating with near-zero usable clinical support. Standard 1-800 triage creates unmanaged duty-of-care exposure under Ontario WSIA and OHSA standards.';
      }
    }

    if (emailForm) {
      emailForm.addEventListener('submit', function (e) {
        e.preventDefault();
        var email = emailInput ? emailInput.value.trim() : '';
        if (!email) return;

        if (typeof gtag === 'function') {
          gtag('event', 'generate_lead', {
            event_category: 'engagement',
            event_label: 'eap_gap_diagnostic',
            value: email
          });
        }

        emailForm.style.display = 'none';
        if (emailConfirm) {
          emailConfirm.style.display = 'block';
          emailConfirm.textContent = 'Audit evaluation and Executive Board Memo dispatched to ' + email + '. You can also access the raw monograph below.';
        }
      });
    }
  })();

