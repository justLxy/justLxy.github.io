/**
 * Main JavaScript for Xuanyi Lyu's Personal Portfolio
 */

// DOM Elements
const preloader = document.querySelector('.preloader');
const header = document.querySelector('.header');
const navToggle = document.querySelector('.nav-toggle');
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');
const backToTop = document.querySelector('.back-to-top');
const langEn = document.getElementById('lang-en');
const langZh = document.getElementById('lang-zh');
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');
const contactForm = document.getElementById('contactForm');

// Current language (default: English)
let currentLang = 'en';

/**
 * Preloader
 */
window.addEventListener('load', () => {
  setTimeout(() => {
    preloader.style.opacity = '0';
    setTimeout(() => {
      preloader.style.display = 'none';
    }, 500);
  }, 1000);
});

/**
 * Particles.js Starry Sky Configuration
 */
document.addEventListener('DOMContentLoaded', () => {
  if (typeof particlesJS !== 'undefined') {
    particlesJS('particles-js', {
      particles: {
        number: {
          value: 150,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: "#ffffff"
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#000000"
          }
        },
        opacity: {
          value: 0.8,
          random: true,
          anim: {
            enable: true,
            speed: 0.5,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 2,
          random: true,
          anim: {
            enable: true,
            speed: 1,
            size_min: 0.1,
            sync: false
          }
        },
        line_linked: {
          enable: false
        },
        move: {
          enable: true,
          speed: 0.3,
          direction: "none",
          random: true,
          straight: false,
          out_mode: "out",
          bounce: false
        }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "bubble"
          },
          onclick: {
            enable: true,
            mode: "repulse"
          },
          resize: true
        },
        modes: {
          bubble: {
            distance: 100,
            size: 4,
            duration: 2,
            opacity: 1,
            speed: 3
          },
          repulse: {
            distance: 150,
            duration: 0.4
          }
        }
      },
      retina_detect: true
    });
  }
});

/**
 * Sticky Header
 */
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }

  // Update active navigation link based on scroll position
  updateActiveNavOnScroll();

  // Show or hide the back to top button
  if (window.scrollY > 500) {
    backToTop.classList.add('active');
  } else {
    backToTop.classList.remove('active');
  }
});

/**
 * Navigation Toggle (Mobile)
 */
navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('active');
  navbar.classList.toggle('active');
});

/**
 * Close mobile menu when a nav link is clicked
 */
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('active');
    navbar.classList.remove('active');
  });
});

/**
 * Smooth Scrolling for Navigation Links
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    if (targetId === '#') return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 70,
        behavior: 'smooth'
      });
    }
  });
});

/**
 * Back to Top Button
 */
backToTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

/**
 * Update Active Navigation Link on Scroll
 */
function updateActiveNavOnScroll() {
  const scrollPosition = window.scrollY;

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');

    if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
    ) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

/**
 * Typed.js Animation for Hero Section
 */
document.addEventListener('DOMContentLoaded', () => {
  if (typeof Typed !== 'undefined') {
    const typedElement = document.querySelector('.typed');
    const strings = {
      en: 'Computer Science & Statistics Student',
      zh: '计算机科学与统计学学生'
    };

    new Typed(typedElement, {
      strings: [strings[currentLang]],
      typeSpeed: 50,
      backSpeed: 30,
      loop: false,
      showCursor: true,
      cursorChar: '|'
    });

    // Store the typed instance for language switching
    window.typedInstance = typedElement._typed;
  }
});

/**
 * Language Switcher
 */
function switchLanguage(lang) {
  currentLang = lang;

  // Update active language button
  if (lang === 'en') {
    langEn.classList.add('active');
    langZh.classList.remove('active');
    document.documentElement.lang = 'en';
  } else {
    langZh.classList.add('active');
    langEn.classList.remove('active');
    document.documentElement.lang = 'zh';
  }

  // Update all text elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    const keyParts = key.split('.');

    let value = translations[lang];
    for (const part of keyParts) {
      if (value && value[part] !== undefined) {
        value = value[part];
      } else {
        console.warn(`Translation missing: ${key} for language ${lang}`);
        return;
      }
    }

    if (element.classList.contains('typed')) {
      // Update typed.js text
      if (window.typedInstance) {
        window.typedInstance.strings = [value];
        window.typedInstance.reset();
      }
    } else {
      // Update regular text
      element.textContent = value;
    }
  });

  // Save language preference
  localStorage.setItem('preferredLanguage', lang);
}

// Language button event listeners
langEn.addEventListener('click', () => switchLanguage('en'));
langZh.addEventListener('click', () => switchLanguage('zh'));

// Load saved language preference or use browser language
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('preferredLanguage');
  const browserLang = navigator.language.startsWith('zh') ? 'zh' : 'en';
  switchLanguage(savedLang || browserLang);
});

/**
 * Project Filtering
 */
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Update active filter button
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filterValue = btn.getAttribute('data-filter');

    // Filter projects
    projectCards.forEach(card => {
      if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

/**
 * Contact Form Submission
 */
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form data
    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      subject: document.getElementById('subject').value,
      message: document.getElementById('message').value
    };

    // Display form submission message (for demonstration)
    alert(
        currentLang === 'en'
            ? 'Thank you for your message! I will get back to you soon.'
            : '感谢您的留言！我将很快回复您。'
    );

    // Reset form
    contactForm.reset();

    // In a real implementation, you would send this data to a server
    console.log('Form data:', formData);
  });
}

/**
 * Initialize AOS (Animate on Scroll)
 */
document.addEventListener('DOMContentLoaded', () => {
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
});

/**
 * Skills Progress Animation
 */
const animateSkills = () => {
  const skillsSection = document.getElementById('skills');
  if (!skillsSection) return;

  const skillBars = document.querySelectorAll('.skill-progress');

  const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            skillBars.forEach(bar => {
              const width = bar.style.width;
              bar.style.width = '0';
              setTimeout(() => {
                bar.style.width = width;
              }, 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
  );

  observer.observe(skillsSection);
};

document.addEventListener('DOMContentLoaded', animateSkills);

/**
 * Window resize event handler
 */
window.addEventListener('resize', () => {
  // Close mobile menu on window resize
  if (window.innerWidth > 768 && navbar.classList.contains('active')) {
    navToggle.classList.remove('active');
    navbar.classList.remove('active');
  }
});