/**
 * Devansh Gandotra Neog — Portfolio Website Client Script
 * Lightweight, zero dependencies, accessible, fast.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Update year dynamically
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  /* -------------------------------------------------------------------------
   * Theme Management (Light / Dark)
   * ----------------------------------------------------------------------- */
  const themeToggleBtn = document.getElementById('theme-toggle');
  const storedTheme = localStorage.getItem('theme-preference');

  const applyTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme-preference', theme);
  };

  if (storedTheme) {
    applyTheme(storedTheme);
  } else {
    // Default to light academic aesthetic as per design principles
    applyTheme('light');
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
    });
  }

  /* -------------------------------------------------------------------------
   * Mobile Menu Drawer
   * ----------------------------------------------------------------------- */
  const menuToggleBtn = document.getElementById('menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (menuToggleBtn && mobileNav) {
    menuToggleBtn.addEventListener('click', () => {
      const isOpen = mobileNav.classList.toggle('open');
      menuToggleBtn.setAttribute('aria-expanded', String(isOpen));
      mobileNav.setAttribute('aria-hidden', String(!isOpen));
    });

    mobileLinks.forEach((link) => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('open');
        menuToggleBtn.setAttribute('aria-expanded', 'false');
        mobileNav.setAttribute('aria-hidden', 'true');
      });
    });
  }

  /* -------------------------------------------------------------------------
   * Active Navigation Scroll Spy
   * ----------------------------------------------------------------------- */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const onScroll = () => {
    const scrollPos = window.scrollY + 120;

    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach((link) => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* -------------------------------------------------------------------------
   * Project Status Filtering
   * ----------------------------------------------------------------------- */
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectEntries = document.querySelectorAll('.project-entry');

  // Compute counts dynamically
  const counts = {
    all: projectEntries.length,
    finished: 0,
    'in-progress': 0,
    experimental: 0,
  };

  projectEntries.forEach((entry) => {
    const status = entry.getAttribute('data-status');
    if (counts[status] !== undefined) {
      counts[status]++;
    }
  });

  const countAllEl = document.getElementById('count-all');
  const countFinishedEl = document.getElementById('count-finished');
  const countInProgressEl = document.getElementById('count-in-progress');
  const countExperimentalEl = document.getElementById('count-experimental');

  if (countAllEl) countAllEl.textContent = counts.all;
  if (countFinishedEl) countFinishedEl.textContent = counts.finished;
  if (countInProgressEl) countInProgressEl.textContent = counts['in-progress'];
  if (countExperimentalEl) countExperimentalEl.textContent = counts.experimental;

  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterButtons.forEach((b) => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });

      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const filterVal = btn.getAttribute('data-filter');

      projectEntries.forEach((entry) => {
        const entryStatus = entry.getAttribute('data-status');
        if (filterVal === 'all' || entryStatus === filterVal) {
          entry.classList.remove('hidden');
        } else {
          entry.classList.add('hidden');
        }
      });
    });
  });

  /* -------------------------------------------------------------------------
   * Email Copy Helper
   * ----------------------------------------------------------------------- */
  const copyEmailBtns = document.querySelectorAll('.copy-email-btn');
  copyEmailBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const email = btn.getAttribute('data-email');
      if (email && navigator.clipboard) {
        navigator.clipboard.writeText(email).then(() => {
          const originalText = btn.textContent;
          btn.textContent = 'Copied!';
          setTimeout(() => {
            btn.textContent = originalText;
          }, 2000);
        });
      }
    });
  });

  /* -------------------------------------------------------------------------
   * Modal Dialog (CV / Resume & Technical Project Notes)
   * ----------------------------------------------------------------------- */
  const modalBackdrop = document.getElementById('modal-backdrop');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalContentBody = document.getElementById('modal-content-body');
  const openResumeBtn = document.getElementById('open-resume-btn');
  const projectNoteLinks = document.querySelectorAll('.project-note-link');

  const openModal = (htmlContent) => {
    if (!modalBackdrop || !modalContentBody) return;
    modalContentBody.innerHTML = htmlContent;
    modalBackdrop.classList.add('open');
    modalBackdrop.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Bind any dynamic modal buttons (e.g. print)
    const printBtn = modalContentBody.querySelector('#cv-print-action');
    if (printBtn) {
      printBtn.addEventListener('click', () => window.print());
    }
  };

  const closeModal = () => {
    if (!modalBackdrop) return;
    modalBackdrop.classList.remove('open');
    modalBackdrop.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) {
        closeModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop && modalBackdrop.classList.contains('open')) {
      closeModal();
    }
  });

  // Modal Content Definitions
  const resumeHtml = `
    <article class="cv-container">
      <header class="cv-header">
        <h2 class="cv-name">Devansh Gandotra Neog</h2>
        <div class="cv-sub">AI Student &amp; Developer &bull; Perth, Western Australia</div>
        <div class="cv-meta">
          <span>devanshgandotra@gmail.com</span>
          <span>github.com/devansh-neog</span>
          <span>linkedin.com/in/devansh-neog</span>
        </div>
      </header>

      <section class="cv-section">
        <h3 class="cv-section-title">Education</h3>
        <div class="cv-entry">
          <div class="cv-entry-head">
            <span>The University of Western Australia (UWA)</span>
            <span>Present</span>
          </div>
          <div class="cv-entry-sub">Bachelor of Science — Artificial Intelligence &amp; Computer Science</div>
          <p class="cv-entry-desc">Coursework in Algorithms, Data Structures, Machine Learning Foundations, Discrete Mathematics, Linear Algebra.</p>
        </div>

        <div class="cv-entry">
          <div class="cv-entry-head">
            <span>Senior Secondary School (Grade 12)</span>
            <span>Distinction — 95.8% Aggregate</span>
          </div>
          <div class="cv-entry-sub">Science &amp; Mathematics Stream</div>
        </div>

        <div class="cv-entry">
          <div class="cv-entry-head">
            <span>Secondary School (Grade 10)</span>
            <span>Distinction — 94.8% Aggregate</span>
          </div>
        </div>
      </section>

      <section class="cv-section">
        <h3 class="cv-section-title">Key Honors &amp; Achievements</h3>
        <div class="cv-entry">
          <div class="cv-entry-head">
            <span>IOQM Qualified (Indian Olympiad Qualifier in Mathematics)</span>
          </div>
          <p class="cv-entry-desc">Qualified prestigious national mathematical olympiad, testing advanced problem-solving in number theory, combinatorics, and geometry.</p>
        </div>

        <div class="cv-entry">
          <div class="cv-entry-head">
            <span>Tesla Coil Competition — First Place</span>
          </div>
          <p class="cv-entry-desc">Engineered and tuned a working high-voltage resonant transformer; awarded 1st place in the engineering showcase.</p>
        </div>

        <div class="cv-entry">
          <div class="cv-entry-head">
            <span>Authored Three Published Books</span>
          </div>
          <p class="cv-entry-desc">Wrote and published three original books spanning narrative storytelling and thematic works.</p>
        </div>
      </section>

      <section class="cv-section">
        <h3 class="cv-section-title">Technical Competencies</h3>
        <p class="cv-entry-desc"><strong>Languages:</strong> Python, C/C++, JavaScript, SQL, HTML5/CSS3</p>
        <p class="cv-entry-desc"><strong>Core Topics:</strong> Data Structures &amp; Algorithms, Reverse-Mode Autograd, Search Heuristics, Linear Algebra, Multivariable Calculus</p>
        <p class="cv-entry-desc"><strong>Tools:</strong> Git, GitHub, Linux/Bash, VS Code, NumPy, PyTorch</p>
      </section>

      <div class="cv-actions">
        <button type="button" class="cv-print-btn" id="cv-print-action">Print / Save as PDF</button>
      </div>
    </article>
  `;

  const technicalNotes = {
    microautograd: `
      <article class="cv-container">
        <header class="cv-header">
          <h2 class="cv-name" style="font-size: 1.5rem;">MicroAutograd Engine: Architecture Note</h2>
          <div class="cv-sub">Design principles &amp; first-principles implementation</div>
        </header>
        <div class="cv-section">
          <p class="cv-entry-desc" style="font-size: 0.95rem; line-height: 1.6;">
            <strong>Objective:</strong> Demystify backpropagation by implementing an autograd engine from scratch without relying on PyTorch or TensorFlow.
          </p>
          <p class="cv-entry-desc" style="font-size: 0.95rem; line-height: 1.6; margin-top: 10px;">
            <strong>Computational Graph:</strong> Every scalar value is wrapped inside a <code>Value</code> object storing its data, gradient, and the closure of preceding child operations. When an operation like addition or multiplication is invoked, a directed acyclic graph (DAG) is dynamically assembled in memory.
          </p>
          <p class="cv-entry-desc" style="font-size: 0.95rem; line-height: 1.6; margin-top: 10px;">
            <strong>Topological Sort &amp; Chain Rule:</strong> Backpropagation traverses the nodes in reverse topological order, accumulating gradients via the multivariable chain rule (<code>dOut/dChild += local_derivative * parent_grad</code>).
          </p>
        </div>
      </article>
    `,
    agent: `
      <article class="cv-container">
        <header class="cv-header">
          <h2 class="cv-name" style="font-size: 1.5rem;">Autonomous Reasoning Agent: Design Log</h2>
          <div class="cv-sub">Multi-step planning, tool schemas &amp; backtracking</div>
        </header>
        <div class="cv-section">
          <p class="cv-entry-desc" style="font-size: 0.95rem; line-height: 1.6;">
            <strong>Core Concept:</strong> Moving beyond simple single-turn prompt-response models toward autonomous loops that verify hypotheses before acting.
          </p>
          <p class="cv-entry-desc" style="font-size: 0.95rem; line-height: 1.6; margin-top: 10px;">
            <strong>Architecture:</strong> Uses an async Python loop equipped with JSON-schema tool definitions (code execution, file read/write, web lookup). The agent maintains an explicit scratchpad separating deductive thinking from tool execution payloads, allowing self-correction when tool outputs return errors.
          </p>
        </div>
      </article>
    `,
    tesla: `
      <article class="cv-container">
        <header class="cv-header">
          <h2 class="cv-name" style="font-size: 1.5rem;">High-Voltage Resonant Transformer: Build Report</h2>
          <div class="cv-sub">1st Place Physics &amp; Engineering Competition Entry</div>
        </header>
        <div class="cv-section">
          <p class="cv-entry-desc" style="font-size: 0.95rem; line-height: 1.6;">
            <strong>Resonance Matching:</strong> The primary LC tank circuit and secondary distributed inductor-capacitor system were matched to an exact resonant frequency (<code>f = 1 / (2&pi;&radic;(LC))</code>).
          </p>
          <p class="cv-entry-desc" style="font-size: 0.95rem; line-height: 1.6; margin-top: 10px;">
            <strong>Secondary Coil Winding:</strong> Hand-wound over 900 turns of fine enameled magnet wire on a precision PVC cylinder, accounting for self-capacitance modeled via the Medhurst empirical formula. Demonstrated safe spark discharges and wireless illumination of fluorescent tubes via electromagnetic induction.
          </p>
        </div>
      </article>
    `,
  };

  if (openResumeBtn) {
    openResumeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal(resumeHtml);
    });
  }

  projectNoteLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const modalKey = link.getAttribute('data-modal');
      if (modalKey && technicalNotes[modalKey]) {
        openModal(technicalNotes[modalKey]);
      }
    });
  });
});
