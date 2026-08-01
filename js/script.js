(function () {
  "use strict";

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Footer year ---------- */
  document.querySelectorAll("#year").forEach((el) => (el.textContent = new Date().getFullYear()));

  /* ---------- Mobile nav toggle ---------- */
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");
  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      const open = navLinks.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    navLinks.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        navLinks.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      })
    );
  }

  /* ---------- Active nav link by current file ---------- */
  const path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll('.nav-links a[data-page]').forEach((a) => {
    if (a.getAttribute("data-page") === path) a.classList.add("active");
  });

  /* ---------- Cursor glow follow ---------- */
  const glow = document.querySelector(".cursor-glow");
  if (glow && !reduceMotion && window.matchMedia("(hover: hover)").matches) {
    window.addEventListener(
      "mousemove",
      (e) => {
        glow.style.left = e.clientX + "px";
        glow.style.top = e.clientY + "px";
      },
      { passive: true }
    );
  }

  /* ---------- Reveal on scroll ---------- */
  const revealEls = document.querySelectorAll(".reveal");
  if (reduceMotion) {
    revealEls.forEach((el) => el.classList.add("in"));
  } else {
    const revealObserver = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach((el) => revealObserver.observe(el));
  }

  /* ---------- Animated counters (home page) ---------- */
  const statNums = document.querySelectorAll(".stat-num, .num[data-count]");
  function animateCount(el) {
    const target = parseFloat(el.getAttribute("data-count"));
    const decimals = parseInt(el.getAttribute("data-decimal") || "0", 10);
    const duration = 1000;
    const start = performance.now();
    function tick(now) {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = (target * eased).toFixed(decimals);
      if (p < 1) requestAnimationFrame(tick);
      else el.textContent = target.toFixed(decimals);
    }
    if (reduceMotion) el.textContent = target.toFixed(decimals);
    else requestAnimationFrame(tick);
  }
  const statObserver = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.6 }
  );
  statNums.forEach((el) => statObserver.observe(el));

  /* ---------- Skill filter (skills page) ---------- */
  const filterBtns = document.querySelectorAll(".filter-btn");
  const skillCards = document.querySelectorAll(".skill-card");
  if (filterBtns.length && skillCards.length) {
    filterBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        filterBtns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        const cat = btn.getAttribute("data-filter");
        skillCards.forEach((card) => {
          const show = cat === "all" || card.getAttribute("data-cat") === cat;
          card.style.display = show ? "" : "none";
        });
      });
    });
  }

  /* ---------- Contact form (front-end only) ---------- */
  const form = document.getElementById("contactForm");
  const formNote = document.getElementById("formNote");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      formNote.textContent =
        "Message drafted locally — connect a form service in js/script.js to actually send it.";
      form.reset();
    });
  }
})();
