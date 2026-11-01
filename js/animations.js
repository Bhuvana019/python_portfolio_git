/**
 * THE PYTHON WONDERLAND - Animations & Dynamic Atmospheric Micro-Interactions
 * 
 * Features:
 * - Fluid custom cursor and sparkle trail
 * - Parallax floating glass bubbles
 * - 3D card tilt perspective
 * - Scroll progress tracking
 * - Confetti & celebration burst animation for Group Quiz 1st Place
 */

(function () {
  'use strict';

  const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ------------------------------------------------------------------------
     1. CUSTOM CURSOR & SPARKLE TRAIL
     ------------------------------------------------------------------------ */
  function initCustomCursor() {
    if (isTouchDevice || prefersReducedMotion) return;

    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';

    const follower = document.createElement('div');
    follower.className = 'custom-cursor-follower';

    document.body.appendChild(cursor);
    document.body.appendChild(follower);

    let mouseX = -100;
    let mouseY = -100;
    let followerX = -100;
    let followerY = -100;

    let lastSparkleTime = 0;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      cursor.style.transform = `translate(${mouseX}px, ${mouseY}px)`;

      const now = performance.now();
      if (now - lastSparkleTime > 65) {
        spawnSparkle(mouseX, mouseY);
        lastSparkleTime = now;
      }
    });

    function renderFollower() {
      followerX += (mouseX - followerX) * 0.18;
      followerY += (mouseY - followerY) * 0.18;

      follower.style.transform = `translate(${followerX}px, ${followerY}px)`;
      requestAnimationFrame(renderFollower);
    }
    requestAnimationFrame(renderFollower);

    const interactiveSelectors = 'a, button, .star-vault-showcase-card, .scrapbook-paper-card, .project-showcase-card, .diary-showcase-card, .lab-experiment-card, .challenge-featured-card, .roadmap-node-point, .blog-image-card, .btn-primary, .btn-secondary, .btn-explore-journey';
    
    document.addEventListener('mouseover', (e) => {
      if (e.target.closest(interactiveSelectors)) {
        cursor.classList.add('active');
      }
    });

    document.addEventListener('mouseout', (e) => {
      if (e.target.closest(interactiveSelectors)) {
        cursor.classList.remove('active');
      }
    });
  }

  function spawnSparkle(x, y) {
    if (prefersReducedMotion) return;
    const sparkle = document.createElement('span');
    sparkle.className = 'sparkle-trail';
    const sparkles = ['✦', '✧', '⋆', '•', '+'];
    sparkle.textContent = sparkles[Math.floor(Math.random() * sparkles.length)];

    const offsetX = (Math.random() - 0.5) * 16;
    const offsetY = (Math.random() - 0.5) * 16;

    sparkle.style.left = `${x + offsetX}px`;
    sparkle.style.top = `${y + offsetY}px`;

    document.body.appendChild(sparkle);

    setTimeout(() => {
      sparkle.remove();
    }, 800);
  }

  /* ------------------------------------------------------------------------
     2. PARALLAX EFFECT FOR GLASS BUBBLES
     ------------------------------------------------------------------------ */
  function initBubbleParallax() {
    if (prefersReducedMotion) return;

    const bubbles = document.querySelectorAll('.glass-bubble');
    if (!bubbles.length) return;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    window.addEventListener('mousemove', (e) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      targetX = (e.clientX - centerX) / centerX;
      targetY = (e.clientY - centerY) / centerY;
    });

    function animateBubbles() {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;

      bubbles.forEach((bubble, index) => {
        const factor = (index + 1) * 20;
        bubble.style.marginLeft = `${currentX * factor}px`;
        bubble.style.marginTop = `${currentY * factor}px`;
      });

      requestAnimationFrame(animateBubbles);
    }

    requestAnimationFrame(animateBubbles);
  }

  /* ------------------------------------------------------------------------
     3. 3D CARD TILT EFFECT
     ------------------------------------------------------------------------ */
  function init3DCardTilt() {
    if (isTouchDevice || prefersReducedMotion) return;

    const cards = document.querySelectorAll('.star-vault-showcase-card, .scrapbook-paper-card, .project-showcase-card, .lab-experiment-card, .challenge-featured-card');

    cards.forEach((card) => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const cardX = e.clientX - rect.left;
        const cardY = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((cardY - centerY) / centerY) * -5;
        const rotateY = ((cardX - centerX) / centerX) * 5;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    });
  }

  /* ------------------------------------------------------------------------
     4. READING PROGRESS BAR & SCROLL INTERACTIONS
     ------------------------------------------------------------------------ */
  function initScrollProgress() {
    const progressBar = document.querySelector('.scroll-progress-bar');
    const header = document.querySelector('.site-header');
    const backToTopBtn = document.querySelector('.back-to-top-btn');

    window.addEventListener('scroll', () => {
      const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;

      if (progressBar) {
        progressBar.style.width = scrolled + '%';
      }

      if (header) {
        if (winScroll > 60) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      }

      if (backToTopBtn) {
        if (winScroll > 450) {
          backToTopBtn.classList.add('visible');
        } else {
          backToTopBtn.classList.remove('visible');
        }
      }
    });

    if (backToTopBtn) {
      backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    }
  }

  /* ------------------------------------------------------------------------
     5. FLOATING DECORATIONS
     ------------------------------------------------------------------------ */
  function generateFloatingDecorations() {
    const container = document.querySelector('.floating-decorations');
    if (!container) return;

    const symbols = ['✦', '★', '✧', '+', '✸', '✻'];
    const count = 20;

    for (let i = 0; i < count; i++) {
      const el = document.createElement('div');
      const isStar = Math.random() > 0.4;
      el.className = `floating-symbol ${isStar ? 'star' : 'plus'}`;
      el.textContent = symbols[Math.floor(Math.random() * symbols.length)];

      el.style.left = `${Math.random() * 95}%`;
      el.style.top = `${Math.random() * 95}%`;
      el.style.animationDelay = `${(Math.random() * 4).toFixed(1)}s`;
      el.style.animationDuration = `${(5 + Math.random() * 4).toFixed(1)}s`;
      el.style.opacity = (0.2 + Math.random() * 0.45).toFixed(2);

      container.appendChild(el);
    }
  }

  /* ------------------------------------------------------------------------
     6. CELEBRATION CONFETTI BURST (FOR 1ST PLACE QUIZ)
     ------------------------------------------------------------------------ */
  function triggerQuizCelebration(canvasElement) {
    if (!canvasElement || prefersReducedMotion) return;

    const ctx = canvasElement.getContext('2d');
    const width = canvasElement.width = canvasElement.offsetWidth;
    const height = canvasElement.height = canvasElement.offsetHeight;

    const colors = ['#EE6983', '#850E35', '#FFC4C4', '#FFB347', '#FFD700', '#2E7D32'];
    const particles = [];
    const particleCount = 45;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: width / 2 + (Math.random() - 0.5) * 80,
        y: 80,
        vx: (Math.random() - 0.5) * 9,
        vy: -Math.random() * 7 - 2,
        size: Math.random() * 7 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        vRot: (Math.random() - 0.5) * 14,
        shape: Math.random() > 0.4 ? 'rect' : 'circle',
        alpha: 1
      });
    }

    let animationFrameId;

    function renderParticles() {
      ctx.clearRect(0, 0, width, height);
      let alive = false;

      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.22; // gravity
        p.rotation += p.vRot;
        p.alpha -= 0.016;

        if (p.alpha > 0) {
          alive = true;
          ctx.save();
          ctx.globalAlpha = Math.max(0, p.alpha);
          ctx.translate(p.x, p.y);
          ctx.rotate((p.rotation * Math.PI) / 180);
          ctx.fillStyle = p.color;

          if (p.shape === 'rect') {
            ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
          } else {
            ctx.beginPath();
            ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
            ctx.fill();
          }
          ctx.restore();
        }
      });

      if (alive) {
        animationFrameId = requestAnimationFrame(renderParticles);
      } else {
        ctx.clearRect(0, 0, width, height);
        cancelAnimationFrame(animationFrameId);
      }
    }

    renderParticles();
  }

  window.WonderlandAnimations = {
    initCustomCursor,
    initBubbleParallax,
    init3DCardTilt,
    initScrollProgress,
    generateFloatingDecorations,
    triggerQuizCelebration
  };

  document.addEventListener('DOMContentLoaded', () => {
    initCustomCursor();
    initBubbleParallax();
    init3DCardTilt();
    initScrollProgress();
    generateFloatingDecorations();
  });
})();
