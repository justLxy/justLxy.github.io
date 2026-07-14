/* ============================================================
   Xuanyi Lyu — homepage interactions
   - scroll-driven circular "portal" zoom (sticky stage)
   - EN / 中 language toggle
   - nav background on scroll
   - fade-up reveals for lower sections
   ============================================================ */

(function () {
  "use strict";

  const clamp = (v, min, max) => Math.min(max, Math.max(min, v));
  const lerp = (a, b, t) => a + (b - a) * t;

  /* ---------- scroll-driven portal zoom ---------- */
  const stage = document.getElementById("stage");
  const portal = document.getElementById("portal");
  const heroText = document.getElementById("heroText");
  const revealText = document.getElementById("revealText");

  // how large the circle must grow to cover the viewport (diagonal / base size)
  function computeMaxScale() {
    const base = window.innerHeight * 0.46; // matches .portal width/height (46vh)
    const diagonal = Math.hypot(window.innerWidth, window.innerHeight);
    return (diagonal * 1.15) / base;
  }
  let maxScale = computeMaxScale();

  let ticking = false;

  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const rect = stage.getBoundingClientRect();
      const scrollable = stage.offsetHeight - window.innerHeight;
      // progress 0 -> 1 across the sticky stage
      const progress = clamp(-rect.top / scrollable, 0, 1);

      // Phase A (0 -> 0.6): the circle zooms out to fill the screen
      // Phase B (0.6 -> 1): hold + hand off to the page
      const zoom = clamp(progress / 0.62, 0, 1);
      const eased = zoom * zoom * (3 - 2 * zoom); // smoothstep

      const scale = lerp(1, maxScale, eased);
      const radius = lerp(50, 0, clamp(eased * 1.4, 0, 1)); // circle -> square
      portal.style.transform = `translate(-50%, -50%) scale(${scale})`;
      portal.style.borderRadius = radius + "%";

      // hero text drifts apart and fades as we zoom in
      const heroFade = clamp(1 - zoom * 1.6, 0, 1);
      heroText.style.opacity = heroFade;
      const spread = eased * 60;
      heroText.style.setProperty("--spread", spread + "px");

      // reveal text fades in near the end of the zoom
      const revealIn = clamp((zoom - 0.55) / 0.4, 0, 1);
      revealText.style.opacity = revealIn;
      revealText.style.transform = `scale(${lerp(1.08, 1, revealIn)})`;

      ticking = false;
    });
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", () => {
    maxScale = computeMaxScale();
    onScroll();
  });
  onScroll();

  /* ---------- nav background on scroll ---------- */
  const nav = document.getElementById("nav");
  function onNavScroll() {
    nav.classList.toggle("is-scrolled", window.scrollY > 40);
  }
  window.addEventListener("scroll", onNavScroll, { passive: true });
  onNavScroll();

  /* ---------- language toggle ---------- */
  const langToggle = document.getElementById("langToggle");
  const STORAGE_KEY = "lyu-lang";
  let lang = localStorage.getItem(STORAGE_KEY) || "en";

  function applyLang(next) {
    lang = next;
    document.documentElement.lang = next === "zh" ? "zh" : "en";
    document.querySelectorAll("[data-en]").forEach((el) => {
      const val = el.getAttribute("data-" + next);
      if (val !== null) el.innerHTML = val;
    });
    langToggle.querySelectorAll("[data-lang]").forEach((span) => {
      span.classList.toggle("is-active", span.dataset.lang === next);
    });
    // switch fonts subtly for CJK legibility
    document.body.style.setProperty(
      "--sans",
      next === "zh"
        ? '"Jost", "PingFang SC", "Microsoft YaHei", sans-serif'
        : '"Jost", "Helvetica Neue", Arial, sans-serif'
    );
    localStorage.setItem(STORAGE_KEY, next);
  }

  langToggle.addEventListener("click", () => {
    applyLang(lang === "en" ? "zh" : "en");
  });
  applyLang(lang);

  /* ---------- fade-up reveals ---------- */
  const faders = document.querySelectorAll(
    ".about__head, .about__body, .edu__item, .about__label, .edu__label"
  );
  faders.forEach((el) => el.classList.add("fade-up"));

  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );
    faders.forEach((el) => io.observe(el));
  } else {
    faders.forEach((el) => el.classList.add("is-in"));
  }
})();
