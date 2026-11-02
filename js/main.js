/**
 * THE PYTHON WONDERLAND - Main Application Logic
 * 
 * Flow:
 * 1. Loading Screen (smooth fade out)
 * 2. Personal Introduction Hero (I AM P. Bhuvanehswari, 23MID0230, Dr. Sharmila Banu K, circular photo)
 * 3. Explore My Journey transition to The Python Wonderland
 * 4. Creation Studio Exhibition Gallery (Selected Creations with 3D hover glow)
 * 5. Challenge Arena Celebration Particles for 1st Place Quiz
 * 6. Beyond The Syllabus Roadmap (exact images: voice, module, encode, crt/bhuvana)
 * 7. Blog on Medium ("The Day Zero Stole Number One's Job")
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // DOM Containers
  const loadingScreen = document.getElementById('wonderland-loader');
  const personalIntroSection = document.getElementById('intro-hero');
  const btnExploreJourney = document.getElementById('btn-explore-journey');
  const pythonWonderlandSection = document.getElementById('wonderland-home');

  const starVaultContainer = document.getElementById('star-vault-container');
  const wordsWorthKeepingContainer = document.getElementById('words-worth-keeping-container');
  const creationStudioContainer = document.getElementById('creation-studio-grid');
  const classroomDiariesContainer = document.getElementById('classroom-diaries-container');
  const labDiariesContainer = document.getElementById('lab-diaries-container');
  const challengeArenaContainer = document.getElementById('challenge-arena-grid');
  const beyondSyllabusContainer = document.getElementById('beyond-syllabus-grid');
  const blogContainer = document.getElementById('blog-container');
  const galaxyContainer = document.getElementById('galaxy-container');

  // Modal Elements
  const modalOverlay = document.getElementById('wonderland-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalHeaderBadge = document.getElementById('modal-header-badge');
  const modalBody = document.getElementById('modal-body');
  const modalCloseBtn = document.getElementById('modal-close-btn');

  // Mobile Nav Elements
  const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
  const navLinksList = document.querySelector('.nav-links');

  /* ------------------------------------------------------------------------
     1. CREATIVE LOADING SCREEN FADE OUT
     ------------------------------------------------------------------------ */
  function initLoadingScreen() {
    if (!loadingScreen) return;

    // Disappear smoothly after short natural delay (max 1.5s)
    setTimeout(() => {
      loadingScreen.classList.add('fade-out');
      setTimeout(() => {
        loadingScreen.style.display = 'none';
      }, 750);
    }, 1400);
  }

  /* ------------------------------------------------------------------------
     2. PERSONAL INTRODUCTION -> PYTHON WONDERLAND TRANSITION
     ------------------------------------------------------------------------ */
  function initPersonalIntro() {
    if (!btnExploreJourney || !pythonWonderlandSection) return;

    btnExploreJourney.addEventListener('click', (e) => {
      e.preventDefault();
      pythonWonderlandSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  }

  /* ------------------------------------------------------------------------
     3. COLLECTION 01: THE STAR VAULT
     ------------------------------------------------------------------------ */
  function renderStarVault() {
    if (!starVaultContainer || !window.WONDERLAND_DATA) return;
    const info = window.WONDERLAND_DATA.starVaultInfo;

    let starsRowHTML = '';
    for (let i = 1; i <= 10; i++) {
      starsRowHTML += `<span class="vault-single-star" title="Star ${i} of 10">★</span>`;
    }

    starVaultContainer.innerHTML = `
      <div class="star-vault-showcase-card">
        <div class="star-vault-count-badge">
          <span>✨</span>
          <span>10 Stars of Academic Excellence</span>
        </div>
        <div class="star-vault-constellation-preview">
          ${starsRowHTML}
        </div>
        <h3 class="star-vault-title">${info.title}</h3>
        <p class="star-vault-desc">${info.subtitle}</p>
        <button type="button" class="btn-view-stars" id="btn-open-stars-photo">
          <span>✦ Click to View Stars</span>
          <span>↗</span>
        </button>
      </div>
    `;

    const openStarsBtn = document.getElementById('btn-open-stars-photo');
    if (openStarsBtn) {
      openStarsBtn.addEventListener('click', () => {
        openStarsPhotoModal(info);
      });
    }
  }

  function openStarsPhotoModal(info) {
    const badgeHTML = `
      <span class="card-module-tag">10 Academic Stars</span>
      <span style="font-size: 0.85rem; font-weight: 700; color: var(--color-burgundy);">Classroom Achievement Record</span>
    `;

    // 10 Golden Star Topics Grid HTML
    const topics = info.topics || [];
    const topicsListHTML = topics.map((t, idx) => `
      <div class="star-topic-item" style="animation-delay: ${(idx * 0.06).toFixed(2)}s;" tabindex="0">
        <span class="golden-star-bullet" aria-hidden="true">★</span>
        <span class="star-topic-num">#${t.id < 10 ? '0' + t.id : t.id}</span>
        <span class="star-topic-text">${t.name}</span>
      </div>
    `).join('');

    const contentHTML = `
      <div class="modal-content-body">
        <div class="modal-info-box" style="text-align: center; background: #fffcf8;">
          <p style="font-size: 1rem; color: var(--color-burgundy); font-weight: 600;">
            ${info.reflection}
          </p>
          <span style="font-size: 0.8rem; color: var(--color-text-muted); display: block; margin-top: 0.4rem;">
            Tip: Click the image to toggle zoom
          </span>
        </div>
        <div style="text-align: center; overflow: hidden; border-radius: 16px;">
          <img src="${info.photoUrl}" alt="10 Python Classroom Stars Proof" class="modal-photo-img" id="zoomable-star-photo">
        </div>

        <!-- 10 Golden Star Topics Constellation -->
        <div class="star-vault-topics-section">
          <div class="star-topics-header">
            <span class="star-topics-title">10 Golden Star Learning Milestones</span>
          </div>
          <div class="star-topics-grid">
            ${topicsListHTML}
          </div>
        </div>
      </div>
    `;

    openModal(badgeHTML, "The 10 Classroom Stars Record", contentHTML);

    const zoomableImg = document.getElementById('zoomable-star-photo');
    if (zoomableImg) {
      zoomableImg.addEventListener('click', () => {
        zoomableImg.classList.toggle('zoomed');
      });
    }
  }

  /* ------------------------------------------------------------------------
     4. COLLECTION 02: WORDS WORTH KEEPING
     ------------------------------------------------------------------------ */
  function renderWordsWorthKeeping() {
    if (!wordsWorthKeepingContainer || !window.WONDERLAND_DATA) return;
    const data = window.WONDERLAND_DATA.wordsWorthKeeping;

    wordsWorthKeepingContainer.innerHTML = data.map(remark => {
      const isCat2 = remark.photoUrl && remark.photoUrl.includes("cat2");
      return `
        <article class="scrapbook-paper-card" data-remark-id="${remark.id}" tabindex="0" role="button" aria-label="Faculty remark: ${remark.remark}">
          <div class="scrapbook-pin"></div>
          <div class="scrapbook-tape"></div>
          
          <div class="remark-proof-thumbnail-wrapper">
            <img src="${remark.photoUrl}" alt="${remark.remark}" class="remark-proof-thumbnail ${isCat2 ? 'pos-right' : ''}" loading="lazy">
          </div>

          <div class="handwritten-remark-quote">${remark.remark}</div>
          <p style="font-size: 0.95rem; color: var(--color-text-muted); margin-bottom: 1.25rem; line-height: 1.5;">${remark.context}</p>
          
          <div class="remark-meta-bar">
            <div class="exam-badge">📋 ${remark.examName}</div>
          </div>

          <div class="scrapbook-photo-hint">
            <span>🔍 Click to Enlarge Answer Script Proof</span>
          </div>
        </article>
      `;
    }).join('');

    wordsWorthKeepingContainer.querySelectorAll('.scrapbook-paper-card').forEach(card => {
      card.addEventListener('click', () => {
        const id = parseInt(card.dataset.remarkId, 10);
        const item = window.WONDERLAND_DATA.wordsWorthKeeping.find(r => r.id === id);
        if (item) openRemarkModal(item);
      });
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          card.click();
        }
      });
    });
  }

  function openRemarkModal(remark) {
    const badgeHTML = `
      <span class="card-module-tag">Faculty Commendation</span>
      <span style="font-size: 0.85rem; font-weight: 700; color: var(--color-burgundy);">Exam Answer Script Verification</span>
    `;

    const contentHTML = `
      <div class="modal-content-body">
        <div class="modal-info-box" style="background: #FFFDF8; border-left: 4px solid var(--color-coral);">
          <div class="modal-info-label">Faculty Appreciation</div>
          <div style="font-family: var(--font-handwriting); font-size: 2.2rem; color: var(--color-burgundy); margin: 0.5rem 0;">
            "${remark.remark}"
          </div>
          <p style="font-size: 0.95rem; color: var(--color-text-muted);">${remark.context}</p>
        </div>

        <div style="text-align: center; overflow: hidden; border-radius: 16px;">
          <img src="${remark.photoUrl}" alt="${remark.remark}" class="modal-photo-img" id="zoomable-remark-img">
          <span style="font-size: 0.8rem; color: var(--color-text-muted); display: block; margin-top: 0.5rem;">
            Click to toggle zoom
          </span>
        </div>

        <div class="modal-info-box">
          <div class="modal-info-label">Evaluation Details</div>
          <div class="modal-info-val">
            <p><strong>Assessment:</strong> ${remark.examName}</p>
            <p><strong>Student Reflection:</strong> ${remark.reflection}</p>
          </div>
        </div>
      </div>
    `;

    openModal(badgeHTML, `Faculty Remark: "${remark.remark}"`, contentHTML);

    const zoomableImg = document.getElementById('zoomable-remark-img');
    if (zoomableImg) {
      zoomableImg.addEventListener('click', () => {
        zoomableImg.classList.toggle('zoomed');
      });
    }
  }

  /* ------------------------------------------------------------------------
     5. COLLECTION 03: THE CREATION STUDIO (EXHIBITION GALLERY)
     ------------------------------------------------------------------------ */
  function renderCreationStudio() {
    if (!creationStudioContainer || !window.WONDERLAND_DATA) return;
    const projects = window.WONDERLAND_DATA.creationStudio;

    creationStudioContainer.innerHTML = projects.map(project => {
      const isTravelPlanner = (project.title.toLowerCase().includes("travel planner"));

      const slidesHTML = project.screenshots.map((src, imgIdx) => `
        <div class="carousel-slide" data-slide-index="${imgIdx}" data-img-src="${src}" title="Click to enlarge image">
          <img src="${src}" alt="${project.title} screenshot ${imgIdx + 1}" loading="lazy">
        </div>
      `).join('');

      const dotsHTML = project.screenshots.map((_, dotIdx) => `
        <span class="carousel-dot ${dotIdx === 0 ? 'active' : ''}" data-dot-index="${dotIdx}"></span>
      `).join('');

      let apiDiagramHTML = '';
      if (isTravelPlanner && project.relationship) {
        apiDiagramHTML = `
          <div class="api-diagram-container">
            <div class="api-diagram-title">⚡ Inter-Service API Communication Flow</div>
            <div class="api-flow-nodes">
              <div class="flow-node app">Travel Planner</div>
              <div class="flow-arrow"><span>→</span>API Request</div>
              <div class="flow-node peer">Experience Finder</div>
              <div class="flow-arrow"><span>→</span>API Response</div>
              <div class="flow-node app">Travel Planner</div>
            </div>
          </div>
        `;
      }

      let resourcesHTML = '';
      if (isTravelPlanner && project.resources) {
        const resourceCardsHTML = project.resources.map(res => `
          <a href="${res.url}" target="_blank" rel="noopener noreferrer" class="resource-card-link">
            <div class="resource-icon-badge">${res.icon}</div>
            <div class="resource-text-group">
              <div class="resource-label">${res.label}</div>
              <div class="resource-desc">${res.description}</div>
            </div>
            <span class="resource-arrow">↗</span>
          </a>
        `).join('');

        resourcesHTML = `
          <button type="button" class="btn-toggle-resources" data-toggle-target="accordion-${project.id}">
            <span>Explore More on Project ↗</span>
            <span class="accordion-arrow">▼</span>
          </button>
          <div class="project-resources-accordion" id="accordion-${project.id}">
            <div class="resources-grid">
              ${resourceCardsHTML}
            </div>
          </div>
        `;
      }

      return `
        <article class="project-showcase-card" id="project-card-${project.id}">
          <div class="project-carousel" data-carousel-id="${project.id}">
            <div class="carousel-slides-wrapper" style="transform: translateX(0%);">
              ${slidesHTML}
            </div>
            <button type="button" class="carousel-nav-btn prev" aria-label="Previous image">‹</button>
            <button type="button" class="carousel-nav-btn next" aria-label="Next image">›</button>
            <div class="carousel-dots">
              ${dotsHTML}
            </div>
          </div>

          <div class="project-card-content">
            <div style="display: flex; gap: 0.5rem; margin-bottom: 0.75rem;">
              <span class="card-module-tag" style="background: var(--color-burgundy); color: #fff;">${project.categoryLabel}</span>
              <span class="card-module-tag">Status: ${project.status}</span>
            </div>

            <h3 class="project-card-title">${project.title}</h3>
            <p class="project-card-desc">${project.shortDescription}</p>

            ${apiDiagramHTML}

            <div class="project-tech-pills">
              ${project.technologies.map(t => `<span class="tech-pill">${t}</span>`).join('')}
            </div>

            ${resourcesHTML}
          </div>
        </article>
      `;
    }).join('');

    initCarousels();
    initResourceAccordions();
  }

  function initCarousels() {
    const carousels = document.querySelectorAll('.project-carousel');

    carousels.forEach(carousel => {
      const wrapper = carousel.querySelector('.carousel-slides-wrapper');
      const slides = carousel.querySelectorAll('.carousel-slide');
      const prevBtn = carousel.querySelector('.carousel-nav-btn.prev');
      const nextBtn = carousel.querySelector('.carousel-nav-btn.next');
      const dots = carousel.querySelectorAll('.carousel-dot');
      let currentIndex = 0;
      const totalSlides = slides.length;

      function updateSlide(index) {
        currentIndex = (index + totalSlides) % totalSlides;
        wrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
        dots.forEach((dot, idx) => {
          dot.classList.toggle('active', idx === currentIndex);
        });
      }

      if (prevBtn) {
        prevBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          updateSlide(currentIndex - 1);
        });
      }

      if (nextBtn) {
        nextBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          updateSlide(currentIndex + 1);
        });
      }

      dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
          e.stopPropagation();
          const targetIndex = parseInt(dot.dataset.dotIndex, 10);
          updateSlide(targetIndex);
        });
      });

      slides.forEach(slide => {
        slide.addEventListener('click', () => {
          const imgSrc = slide.dataset.imgSrc;
          openImageLightbox(imgSrc, "Project Screenshot Lightbox");
        });
      });
    });
  }

  function initResourceAccordions() {
    const toggleButtons = document.querySelectorAll('.btn-toggle-resources');
    toggleButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.dataset.toggleTarget;
        const accordion = document.getElementById(targetId);
        if (accordion) {
          const isOpen = accordion.classList.contains('open');
          accordion.classList.toggle('open');
          const arrow = btn.querySelector('.accordion-arrow');
          if (arrow) {
            arrow.textContent = isOpen ? '▼' : '▲';
          }
        }
      });
    });
  }

  /* ------------------------------------------------------------------------
     6. COLLECTION 04: CLASSROOM DIARIES
     ------------------------------------------------------------------------ */
  function renderClassroomDiaries() {
    if (!classroomDiariesContainer || !window.WONDERLAND_DATA) return;
    const data = window.WONDERLAND_DATA.classroomDiaries;

    classroomDiariesContainer.innerHTML = data.map(entry => {
      if (entry.isComparisonCard) {
        return `
          <article class="diary-showcase-card">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem;">
              <span class="card-module-tag" style="background: var(--color-burgundy); color: #fff;">${entry.entryType}</span>
            </div>
            <h3 style="font-family: var(--font-serif); font-size: 1.5rem; color: var(--color-burgundy); margin-bottom: 0.75rem;">${entry.title}</h3>
            <p style="font-size: 0.95rem; color: var(--color-text-muted); line-height: 1.6; margin-bottom: 1.25rem;">${entry.description}</p>

            <div class="copy-comparison-box">
              <div style="font-size: 0.8rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: var(--color-burgundy); text-align: center;">
                Visual Memory & Reference Architecture
              </div>
              <div class="copy-columns">
                <div class="copy-col ref">
                  <div class="copy-col-title">${entry.comparison.leftTitle}</div>
                  <div class="copy-col-sub">${entry.comparison.leftSubtitle}</div>
                  <div class="copy-col-text">${entry.comparison.leftExplanation}</div>
                  <code class="copy-code-snippet">${entry.comparison.leftCode}</code>
                </div>

                <div class="copy-col shallow">
                  <div class="copy-col-title">${entry.comparison.rightTitle}</div>
                  <div class="copy-col-sub">${entry.comparison.rightSubtitle}</div>
                  <div class="copy-col-text">${entry.comparison.rightExplanation}</div>
                  <code class="copy-code-snippet">${entry.comparison.rightCode}</code>
                </div>
              </div>
            </div>

            <div style="font-family: var(--font-handwriting); font-size: 1.15rem; color: var(--color-burgundy); margin-top: auto;">
              💡 "${entry.reflectionNote}"
            </div>
          </article>
        `;
      } else {
        return `
          <article class="diary-showcase-card">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem;">
              <span class="card-module-tag">${entry.entryType}</span>
            </div>

            <div class="diary-photo-preview" data-photo-src="${entry.photoUrl}" title="Click to view full image">
              <img src="${entry.photoUrl}" alt="${entry.title}" loading="lazy">
            </div>

            <h3 style="font-family: var(--font-serif); font-size: 1.5rem; color: var(--color-burgundy); margin-bottom: 0.75rem;">${entry.title}</h3>
            <p style="font-size: 0.95rem; color: var(--color-text-muted); line-height: 1.6; margin-bottom: 1.25rem;">${entry.description}</p>

            <div style="font-family: var(--font-handwriting); font-size: 1.15rem; color: var(--color-burgundy); margin-top: auto; border-top: 1px dashed rgba(133, 14, 53, 0.15); padding-top: 1rem;">
              🌟 "${entry.reflectionNote}"
            </div>
          </article>
        `;
      }
    }).join('');

    classroomDiariesContainer.querySelectorAll('[data-photo-src]').forEach(box => {
      box.addEventListener('click', () => {
        openImageLightbox(box.dataset.photoSrc, "Classroom Diary Photo Lightbox");
      });
    });
  }

  /* ------------------------------------------------------------------------
     7. COLLECTION 05: LAB DIARIES
     ------------------------------------------------------------------------ */
  function renderLabDiaries() {
    if (!labDiariesContainer || !window.WONDERLAND_DATA) return;
    const data = window.WONDERLAND_DATA.labDiaries;

    labDiariesContainer.innerHTML = data.map(exp => {
      if (exp.difficultyStats) {
        return `
          <article class="lab-experiment-card">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.85rem;">
              <span class="card-module-tag" style="background: var(--color-burgundy); color: #fff;">${exp.badge}</span>
            </div>

            <div class="padlet-photo-container" data-photo-src="${exp.photoUrl}" title="Click to enlarge Padlet submission">
              <img src="${exp.photoUrl}" alt="${exp.title}" loading="lazy">
            </div>

            <h3 style="font-family: var(--font-serif); font-size: 1.55rem; color: var(--color-burgundy); margin-bottom: 0.75rem;">${exp.title}</h3>
            <p style="font-size: 0.95rem; color: var(--color-text-muted); line-height: 1.6; margin-bottom: 1.25rem;">${exp.description}</p>

            <div class="difficulty-distribution-strip">
              <div class="diff-badge easy">
                <span>${exp.difficultyStats.easy}</span>
                <span>Easy</span>
              </div>
              <div class="diff-badge medium">
                <span>${exp.difficultyStats.medium}</span>
                <span>Medium</span>
              </div>
              <div class="diff-badge hard">
                <span>${exp.difficultyStats.hard}</span>
                <span>Hard</span>
              </div>
              <div class="diff-badge total">
                <span>${exp.difficultyStats.total}</span>
                <span>Total</span>
              </div>
            </div>

            <div style="font-family: var(--font-handwriting); font-size: 1.15rem; color: var(--color-burgundy); margin-top: auto; border-top: 1px dashed rgba(133, 14, 53, 0.15); padding-top: 1rem;">
              ⚡ "${exp.reflectionNote}"
            </div>
          </article>
        `;
      } else {
        const workflowHTML = exp.workflowSteps.map((step, idx) => `
          <span class="ml-step-item">${step}</span>
          ${idx < exp.workflowSteps.length - 1 ? '<span class="ml-step-arrow">→</span>' : ''}
        `).join('');

        return `
          <article class="lab-experiment-card">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.85rem;">
              <span class="card-module-tag" style="background: var(--color-burgundy); color: #fff;">${exp.badge}</span>
            </div>

            <div class="ml-accuracy-hero-banner">
              <div class="ml-accuracy-label">Model Accuracy Achieved</div>
              <div class="ml-accuracy-number">${exp.modelAccuracy}</div>
            </div>

            <h3 style="font-family: var(--font-serif); font-size: 1.55rem; color: var(--color-burgundy); margin-bottom: 0.75rem;">${exp.title}</h3>
            <p style="font-size: 0.95rem; color: var(--color-text-muted); line-height: 1.6; margin-bottom: 1.25rem;">${exp.description}</p>

            <div style="font-size: 0.78rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: var(--color-burgundy); margin-bottom: 0.5rem;">
              Machine Learning Pipeline Flow:
            </div>
            <div class="ml-workflow-steps">
              ${workflowHTML}
            </div>

            <div style="font-family: var(--font-handwriting); font-size: 1.15rem; color: var(--color-burgundy); margin-top: auto; border-top: 1px dashed rgba(133, 14, 53, 0.15); padding-top: 1rem;">
              🎯 "${exp.reflectionNote}"
            </div>
          </article>
        `;
      }
    }).join('');

    labDiariesContainer.querySelectorAll('[data-photo-src]').forEach(box => {
      box.addEventListener('click', () => {
        openImageLightbox(box.dataset.photoSrc, "Lab Diary Photo Lightbox");
      });
    });
  }

  /* ------------------------------------------------------------------------
     8. COLLECTION 06: THE CHALLENGE ARENA (WITH CELEBRATION PARTICLES)
     ------------------------------------------------------------------------ */
  function renderChallengeArena() {
    if (!challengeArenaContainer || !window.WONDERLAND_DATA) return;
    const data = window.WONDERLAND_DATA.challengeArena;

    challengeArenaContainer.innerHTML = data.map(act => {
      if (act.highlight) {
        return `
          <article class="challenge-featured-card quiz-first-place-card" id="quiz-first-card">
            <canvas class="celebration-canvas" id="quiz-confetti-canvas"></canvas>

            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.85rem;">
              <span class="card-module-tag">${act.activityType}</span>
            </div>

            <div>
              <div class="first-place-trophy-badge" id="trophy-badge">
                ${act.badgeText}
              </div>
            </div>

            <div class="challenge-photo-thumb" data-photo-src="${act.photoUrl}" title="Click to enlarge Classroom Quiz photograph">
              <img src="${act.photoUrl}" alt="${act.title}" loading="lazy">
            </div>

            <h3 style="font-family: var(--font-serif); font-size: 1.6rem; color: var(--color-burgundy); margin-bottom: 0.75rem;">${act.title}</h3>
            <p style="font-size: 0.95rem; color: var(--color-text-muted); line-height: 1.6; margin-bottom: 1.25rem;">${act.description}</p>

            <div style="background: rgba(255, 255, 255, 0.85); border-radius: 12px; padding: 1rem; border: 1px solid rgba(133, 14, 53, 0.1); margin-top: auto; font-size: 0.85rem;">
              <p><strong>Team Dynamic:</strong> ${act.teamInfo}</p>
              <p style="color: var(--color-burgundy); font-weight: 700; margin-top: 0.25rem;">🌟 Outcome: ${act.outcome}</p>
            </div>
          </article>
        `;
      } else {
        const conceptsHTML = act.concepts.map(c => `
          <span class="storyboard-concept-pill" title="${c.desc}">✦ ${c.name}</span>
        `).join('');

        const formattedDesc = act.description.split('\n').join('<br>');

        return `
          <article class="challenge-featured-card">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.85rem;">
              <span class="card-module-tag">${act.activityType}</span>
            </div>

            <div style="display: inline-flex; align-items: center; gap: 0.5rem; margin-bottom: 1rem;">
              <span class="card-module-tag" style="background: #2A131B; color: #fff; font-size: 0.85rem; padding: 0.4rem 0.9rem;">
                ${act.badgeText}
              </span>
            </div>

            <div class="challenge-gallery-dual">
              <div class="storyboard-photo-thumb" data-photo-src="${act.photoUrl}" title="Click to view Multithreading Storyboard">
                <img src="${act.photoUrl}" alt="Multithreading Storyboard" loading="lazy">
                <span class="storyboard-thumb-tag">Storyboard Illustration</span>
              </div>
              <div class="storyboard-photo-thumb" data-photo-src="${act.remarksPhotoUrl}" title="Click to view Faculty Commendation Remarks">
                <img src="${act.remarksPhotoUrl}" alt="Storyboard Faculty Remarks" loading="lazy">
                <span class="storyboard-thumb-tag">Faculty Commendation</span>
              </div>
            </div>

            <h3 style="font-family: var(--font-serif); font-size: 1.6rem; color: var(--color-burgundy); margin-bottom: 0.75rem;">${act.title}</h3>
            <p class="multithread-desc-3lines">${formattedDesc}</p>

            <div style="font-size: 0.78rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: var(--color-burgundy); margin-bottom: 0.5rem;">
              Concurrency Coordination Mechanisms:
            </div>
            <div class="storyboard-concepts-strip">
              ${conceptsHTML}
            </div>

            <div style="background: rgba(255, 255, 255, 0.85); border-radius: 12px; padding: 0.85rem 1rem; border: 1px solid rgba(133, 14, 53, 0.1); margin-top: auto; font-size: 0.85rem;">
              <p style="color: var(--color-burgundy); font-weight: 700;">🌟 ${act.outcome}</p>
            </div>
          </article>
        `;
      }
    }).join('');

    // Attach Celebration Hover Effect for Quiz 1st Place Card
    const quizCard = document.getElementById('quiz-first-card');
    const confettiCanvas = document.getElementById('quiz-confetti-canvas');
    if (quizCard && confettiCanvas) {
      let isCelebrating = false;
      quizCard.addEventListener('mouseenter', () => {
        if (!isCelebrating && window.WonderlandAnimations && window.WonderlandAnimations.triggerQuizCelebration) {
          isCelebrating = true;
          window.WonderlandAnimations.triggerQuizCelebration(confettiCanvas);
          setTimeout(() => { isCelebrating = false; }, 2000);
        }
      });
      // Touch support
      quizCard.addEventListener('click', () => {
        if (!isCelebrating && window.WonderlandAnimations && window.WonderlandAnimations.triggerQuizCelebration) {
          isCelebrating = true;
          window.WonderlandAnimations.triggerQuizCelebration(confettiCanvas);
          setTimeout(() => { isCelebrating = false; }, 2000);
        }
      });
    }

    challengeArenaContainer.querySelectorAll('[data-photo-src]').forEach(box => {
      box.addEventListener('click', () => {
        openImageLightbox(box.dataset.photoSrc, "Challenge Arena Photo Lightbox");
      });
    });
  }

  /* ------------------------------------------------------------------------
     9. COLLECTION 07: BEYOND THE SYLLABUS (ROADMAP WITH VOICE, MODULE, ENCODE, CRT)
     ------------------------------------------------------------------------ */
  function renderBeyondSyllabus() {
    if (!beyondSyllabusContainer || !window.WONDERLAND_DATA) return;
    const data = window.WONDERLAND_DATA.beyondSyllabusRoadmap;

    const nodesHTML = data.map(node => `
      <div class="roadmap-node-point" data-node-id="${node.id}" tabindex="0">
        <div class="roadmap-step-bubble">
          <span class="roadmap-step-icon">${node.icon}</span>
          <span class="roadmap-step-num">${node.step}</span>
        </div>
        <div class="roadmap-step-label">${node.title}</div>

        <div class="roadmap-hover-popover" title="Double click to close this box">
          <div class="popover-image" data-photo-src="${node.photoUrl}" title="Click to enlarge image">
            <img src="${node.photoUrl}" alt="${node.title}" loading="lazy">
          </div>
          <div class="popover-title">${node.title}</div>
          <div class="popover-subtitle">${node.subtitle}</div>
          <p class="popover-desc">${node.description}</p>
          ${node.url ? `<a href="${node.url}" target="_blank" rel="noopener noreferrer" class="popover-action-btn">Open Audio Link ↗</a>` : ''}
          <span class="popover-dismiss-hint">Tip: Double-click box to dismiss</span>
        </div>
      </div>
    `).join('');

    beyondSyllabusContainer.innerHTML = `
      <div class="beyond-roadmap-container">
        <div class="roadmap-nodes-grid">
          ${nodesHTML}
        </div>
      </div>
    `;

    // Attach Hover to Reveal & Double-click to Dismiss
    const nodePoints = beyondSyllabusContainer.querySelectorAll('.roadmap-node-point');
    nodePoints.forEach(point => {
      point.addEventListener('mouseenter', () => {
        point.classList.add('revealed');
      });

      const popover = point.querySelector('.roadmap-hover-popover');
      if (popover) {
        popover.addEventListener('dblclick', (e) => {
          e.stopPropagation();
          point.classList.remove('revealed');
        });
      }

      const popoverImg = point.querySelector('.popover-image');
      if (popoverImg) {
        popoverImg.addEventListener('click', (e) => {
          e.stopPropagation();
          openImageLightbox(popoverImg.dataset.photoSrc, point.querySelector('.popover-title').textContent);
        });
      }
    });

    // End-of-semester reflection closing note
    const closingNote = window.WONDERLAND_DATA.semesterReflection;
    if (closingNote) {
      const closingNoteHTML = `
        <div style="grid-column: 1 / -1; width: 100%;">
          <div class="semester-closing-note-box">
            <div class="scrapbook-pin"></div>
            <div class="scrapbook-tape"></div>
            <p class="semester-closing-text">“${closingNote.note}”</p>
            <div class="semester-closing-signature">${closingNote.signature}</div>
          </div>
        </div>
      `;
      beyondSyllabusContainer.insertAdjacentHTML('beforeend', closingNoteHTML);
    }
  }

  /* ------------------------------------------------------------------------
     10. FINAL SECTION: BLOG – A LITTLE STORY BEHIND THE CODE
     ------------------------------------------------------------------------ */
  function renderBlogSection() {
    if (!blogContainer || !window.WONDERLAND_DATA) return;
    const blog = window.WONDERLAND_DATA.blogArticle;

    blogContainer.innerHTML = `
      <div class="blog-showcase-container">
        <div class="blog-gallery-grid">
          <div class="blog-image-card" data-photo-src="${blog.images[0]}" title="Click to enlarge Blog Image 1">
            <img src="${blog.images[0]}" alt="${blog.articleTitle} Scene 1" loading="lazy">
          </div>
          <div class="blog-image-card" data-photo-src="${blog.images[1]}" title="Click to enlarge Blog Image 2">
            <img src="${blog.images[1]}" alt="${blog.articleTitle} Scene 2" loading="lazy">
          </div>
        </div>

        <div class="blog-editorial-content">
          <div class="blog-platform-tag">
            <span>✍️</span>
            <span>${blog.publishedPlatform}</span>
          </div>

          <h3 class="blog-article-headline">${blog.articleTitle}</h3>
          <p class="blog-article-narrative">${blog.description}</p>

          <a href="${blog.mediumUrl}" target="_blank" rel="noopener noreferrer" class="btn-read-medium">
            <span>Read the Full Story on Medium</span>
            <span>↗</span>
          </a>
        </div>
      </div>
    `;

    blogContainer.querySelectorAll('[data-photo-src]').forEach(box => {
      box.addEventListener('click', () => {
        openImageLightbox(box.dataset.photoSrc, "Medium Blog Illustration Lightbox");
      });
    });
  }

  /* ------------------------------------------------------------------------
     11. FINAL SECTION: FINAL LEARNING FROM CSI3007 (MILKY WAY GALAXY)
     ------------------------------------------------------------------------ */
  function renderGalaxySection() {
    if (!galaxyContainer || !window.WONDERLAND_DATA) return;
    const galaxy = window.WONDERLAND_DATA.csi3007Galaxy;
    if (!galaxy) return;

    // Build the 3 orbital rings with 12 rotating topic badges
    // Ring 1 (Inner): 4 topics (Lists, Multithreading, Iterators, NumPy)
    // Ring 2 (Middle): 4 topics (Machine Learning, API Calls, Threads, Pivot Table)
    // Ring 3 (Outer): 4 topics (Multi Indexing, JSON, Deployment, Git)
    const ring1Topics = galaxy.topics.filter(t => t.ring === 1);
    const ring2Topics = galaxy.topics.filter(t => t.ring === 2);
    const ring3Topics = galaxy.topics.filter(t => t.ring === 3);

    function createOrbitalNodesHTML(topicsList, ringClass, reverseClass) {
      const topicNodesHTML = topicsList.map(t => {
        return `
          <div class="galaxy-orbit-node" style="--node-angle: ${t.angle}deg;" data-topic="${t.name}">
            <div class="galaxy-node-counter-rot ${reverseClass}">
              <div class="galaxy-topic-pill" tabindex="0">
                <span class="galaxy-topic-dot">✦</span>
                <span class="galaxy-topic-text">${t.name}</span>
              </div>
            </div>
          </div>
        `;
      }).join('');

      // Add sparkling twinkling stars spaced around each orbit circle
      const starOffsets = [45, 135, 225, 315, 90, 270];
      const twinkleStarsHTML = starOffsets.map((angleOffset, idx) => {
        const starSize = idx % 2 === 0 ? 7 : 5;
        const duration = (2.2 + (idx * 0.4)).toFixed(1);
        const delay = (idx * 0.35).toFixed(2);
        return `
          <div class="orbit-twinkle-star" style="--star-angle: ${angleOffset}deg; --star-size: ${starSize}px; --twinkle-duration: ${duration}s; --twinkle-delay: ${delay}s;" aria-hidden="true">
            <div class="orbit-twinkle-star-body"></div>
          </div>
        `;
      }).join('');

      return topicNodesHTML + twinkleStarsHTML;
    }

    galaxyContainer.innerHTML = `
      <div class="galaxy-universe-wrapper">
        <!-- Ambient Stardust Canvas Background -->
        <div class="galaxy-stardust-layer" aria-hidden="true"></div>

        <!-- The Solar/Galactic Core System -->
        <div class="galaxy-cosmos-stage">
          <!-- Central Glowing Galaxy Core / Spiral -->
          <div class="galaxy-central-core">
            <div class="core-spiral-glow"></div>
            <div class="core-spiral-halo"></div>
            <div class="core-title-badge">
              <span class="core-icon">🌌</span>
              <span class="core-name">CSI3007</span>
              <span class="core-sub">Core Python</span>
            </div>
          </div>

          <!-- Orbital Ring 1: Inner (Lists, Multithreading, Iterators, NumPy) -->
          <div class="galaxy-orbital-ring ring-1">
            <div class="galaxy-ring-rotor rotor-cw-slow">
              ${createOrbitalNodesHTML(ring1Topics, "ring-1", "rotor-ccw-slow")}
            </div>
          </div>

          <!-- Orbital Ring 2: Middle (Machine Learning, API Calls, Threads, Pivot Table) -->
          <div class="galaxy-orbital-ring ring-2">
            <div class="galaxy-ring-rotor rotor-cw-medium">
              ${createOrbitalNodesHTML(ring2Topics, "ring-2", "rotor-ccw-medium")}
            </div>
          </div>

          <!-- Orbital Ring 3: Outer (Multi Indexing, JSON, Deployment, Git) -->
          <div class="galaxy-orbital-ring ring-3">
            <div class="galaxy-ring-rotor rotor-cw-fast">
              ${createOrbitalNodesHTML(ring3Topics, "ring-3", "rotor-ccw-fast")}
            </div>
          </div>
        </div>

        <!-- Cosmic Tooltip Box (Appears on hover) -->
        <div class="galaxy-active-topic-tooltip" id="galaxy-topic-tooltip">
          <span class="tooltip-eyebrow">Cosmic Learning Milestone</span>
          <h4 class="tooltip-topic-title" id="tooltip-topic-name">Explore Topic</h4>
        </div>

        <!-- Ending Experience Closing Statement -->
        <div class="galaxy-closing-statement-wrap">
          <p class="galaxy-closing-line">“${galaxy.closingStatement}”</p>
          <div class="galaxy-closing-credit">${galaxy.courseCredit}</div>
        </div>
      </div>
    `;

    // Interactive Hover: Pause ring, highlight pill, show tooltip
    const topicPills = galaxyContainer.querySelectorAll('.galaxy-topic-pill');
    const tooltip = document.getElementById('galaxy-topic-tooltip');
    const tooltipTitle = document.getElementById('tooltip-topic-name');

    topicPills.forEach(pill => {
      const node = pill.closest('.galaxy-orbit-node');
      const topicName = node ? node.dataset.topic : pill.textContent.trim();
      const ring = pill.closest('.galaxy-orbital-ring');

      pill.addEventListener('mouseenter', () => {
        if (ring) ring.classList.add('paused');
        pill.classList.add('highlighted');
        if (tooltip && tooltipTitle) {
          tooltipTitle.textContent = topicName;
          tooltip.classList.add('visible');
        }
      });

      pill.addEventListener('mouseleave', () => {
        if (ring) ring.classList.remove('paused');
        pill.classList.remove('highlighted');
        if (tooltip) {
          tooltip.classList.remove('visible');
        }
      });
    });
  }
  function openImageLightbox(imgSrc, title) {
    const badgeHTML = `<span class="card-module-tag">Full Resolution Preview</span>`;
    const contentHTML = `
      <div class="modal-content-body" style="text-align: center;">
        <img src="${imgSrc}" alt="${title}" class="modal-photo-img" id="zoomable-lightbox-img">
        <span style="font-size: 0.8rem; color: var(--color-text-muted); display: block; margin-top: 0.5rem;">
          Click image to toggle zoom
        </span>
      </div>
    `;
    openModal(badgeHTML, title, contentHTML);

    const zoomableImg = document.getElementById('zoomable-lightbox-img');
    if (zoomableImg) {
      zoomableImg.addEventListener('click', () => {
        zoomableImg.classList.toggle('zoomed');
      });
    }
  }

  function openModal(headerBadge, title, contentHTML) {
    modalHeaderBadge.innerHTML = headerBadge;
    modalTitle.textContent = title;
    modalBody.innerHTML = contentHTML;
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });

  /* ------------------------------------------------------------------------
     12. MOBILE NAVIGATION DRAWER
     ------------------------------------------------------------------------ */
  if (mobileNavToggle && navLinksList) {
    mobileNavToggle.addEventListener('click', () => {
      mobileNavToggle.classList.toggle('open');
      navLinksList.classList.toggle('open');
    });

    navLinksList.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileNavToggle.classList.remove('open');
        navLinksList.classList.remove('open');
      });
    });
  }

  /* ------------------------------------------------------------------------
     13. ACTIVE NAVIGATION HIGHLIGHT TRACKING
     ------------------------------------------------------------------------ */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const observerOptions = {
    root: null,
    rootMargin: '-30% 0px -60% 0px',
    threshold: 0
  };

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(sec => navObserver.observe(sec));

  // Initialize all elements
  initLoadingScreen();
  initPersonalIntro();

  renderStarVault();
  renderWordsWorthKeeping();
  renderCreationStudio();
  renderClassroomDiaries();
  renderLabDiaries();
  renderChallengeArena();
  renderBeyondSyllabus();
  renderBlogSection();
  if (galaxyContainer) {
    renderGalaxySection();
  }

  if (window.WonderlandAnimations && window.WonderlandAnimations.init3DCardTilt) {
    window.WonderlandAnimations.init3DCardTilt();
  }
});
