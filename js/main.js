/* ============================================================
   Xuanyi Lyu — homepage interactions
   - cinematic background-video switcher (crossfade)
   - mobile menu overlay
   - EN / 中 language toggle
   - fade-up reveals for lower sections
   ============================================================ */

(function () {
  "use strict";

  /* ---------- background video switcher ---------- */
  const videos = Array.from(document.querySelectorAll(".hero__video"));
  const switchBtns = Array.from(document.querySelectorAll(".hero__switch-btn"));
  const heroTheme = document.getElementById("heroTheme");
  const DARK_INDEX = 2; // "Deep Woods"
  const CROSSFADE = 1000;

  const AUTO_INTERVAL = 7000; // dwell time on each scene before auto-advancing
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let activeVideo = 0;
  let isTransitioning = false;
  let autoTimer = null;

  function setVideo(index) {
    if (index === activeVideo || isTransitioning || !videos.length) return;
    isTransitioning = true;

    videos.forEach((v, i) => v.classList.toggle("is-active", i === index));
    switchBtns.forEach((b, i) => b.classList.toggle("is-active", i === index));
    if (heroTheme) heroTheme.classList.toggle("is-dark", index === DARK_INDEX);

    activeVideo = index;
    setTimeout(() => { isTransitioning = false; }, CROSSFADE);
  }

  function stopAuto() {
    if (autoTimer) { clearInterval(autoTimer); autoTimer = null; }
  }
  function startAuto() {
    if (reduceMotion || videos.length < 2) return;
    stopAuto();
    autoTimer = setInterval(() => {
      setVideo((activeVideo + 1) % videos.length);
    }, AUTO_INTERVAL);
  }

  switchBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      setVideo(Number(btn.dataset.video));
      startAuto(); // reset the countdown after a manual pick
    });
  });

  // pause the carousel while the tab is hidden, resume on return
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) stopAuto();
    else startAuto();
  });

  startAuto();

  /* ---------- mobile menu ---------- */
  const burger = document.getElementById("burger");
  const hmenu = document.getElementById("hmenu");

  function closeMenu() {
    if (!hmenu) return;
    hmenu.classList.remove("is-open");
    burger.classList.remove("is-open");
    burger.setAttribute("aria-expanded", "false");
  }
  function toggleMenu() {
    if (!hmenu) return;
    const open = !hmenu.classList.contains("is-open");
    hmenu.classList.toggle("is-open", open);
    burger.classList.toggle("is-open", open);
    burger.setAttribute("aria-expanded", String(open));
  }
  if (burger) burger.addEventListener("click", toggleMenu);
  if (hmenu) {
    hmenu.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeMenu));
    hmenu.querySelector(".hmenu__backdrop").addEventListener("click", closeMenu);
  }

  /* ---------- language toggle ---------- */
  const STORAGE_KEY = "lyu-lang";
  let lang = localStorage.getItem(STORAGE_KEY) || "en";

  function applyLang(next) {
    lang = next;
    document.documentElement.lang = next === "zh" ? "zh" : "en";
    document.querySelectorAll("[data-en]").forEach((el) => {
      const val = el.getAttribute("data-" + next);
      if (val !== null) el.innerHTML = val;
    });
    document.querySelectorAll("[data-lang]").forEach((span) => {
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

  function toggleLang() {
    applyLang(lang === "en" ? "zh" : "en");
  }
  const langToggle = document.getElementById("langToggle");
  const langToggleMobile = document.getElementById("langToggleMobile");
  if (langToggle) langToggle.addEventListener("click", toggleLang);
  if (langToggleMobile) langToggleMobile.addEventListener("click", toggleLang);
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
