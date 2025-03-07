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

let typed = null;

// 打字机文字配置
const typedStrings = {
    en: [
        'I\'m UofT Student',
        'I\'m Full Stack Developer',
        'I\'m UX/HCI Enthusiast',
        'I\'m AI Explorer',
        'I\'m Problem Solver'
    ],
    zh: [
        '我是多伦多大学学生',
        '我是全栈开发学习者',
        '我是用户体验设计爱好者',
        '我是人工智能探索者',
        '我是善于解决问题的人'
    ]
};

/**
 * 初始化打字机效果
 * @param {string} lang - 语言代码 ('en' 或 'zh')
 */
function initTyped(lang) {
    if (typed) {
        typed.destroy();
    }

    typed = new Typed('.typed', {
        strings: typedStrings[lang],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 2000,
        startDelay: 500,
        loop: true,
        showCursor: true,
        cursorChar: '|',
        autoInsertCss: true,
        fadeOut: true,
        fadeOutClass: 'typed-fade-out',
        fadeOutDelay: 500,
    });
}

/**
 * Language Switcher
 */
function switchLanguage(lang) {
    currentLang = lang;

    // 更新打字机效果
    initTyped(lang);

    // 更新语言按钮状态
    if (lang === 'en') {
        langEn.classList.add('active');
        langZh.classList.remove('active');
        document.documentElement.lang = 'en';
    } else {
        langZh.classList.add('active');
        langEn.classList.remove('active');
        document.documentElement.lang = 'zh';
    }

    // 更新所有带有 data-i18n 属性的文本元素
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const keyParts = key.split('.');
        
        // 从翻译对象中获取对应的值
        let value = translations[lang];
        for (const part of keyParts) {
            if (value && value[part] !== undefined) {
                value = value[part];
            } else {
                // 如果找不到翻译，保持原文
                value = element.textContent;
                break;
            }
        }

        // 更新文本内容
        element.textContent = value;
        
        // 如果是 glitch 效果的元素，同时更新 data-text 属性
        if (element.classList.contains('glitch')) {
            element.setAttribute('data-text', value);
        }
    });

    // 保存语言偏好
    localStorage.setItem('preferredLanguage', lang);
}

document.addEventListener('DOMContentLoaded', () => {
    // 加载保存的语言偏好或使用浏览器语言
    const savedLang = localStorage.getItem('preferredLanguage');
    const browserLang = navigator.language.startsWith('zh') ? 'zh' : 'en';
    const initialLang = savedLang || browserLang;
    
    // 初始化语言和打字机效果
    switchLanguage(initialLang);

    // 语言切换事件处理
    langEn.addEventListener('click', () => {
        if (currentLang !== 'en') {
            switchLanguage('en');
        }
    });

    langZh.addEventListener('click', () => {
        if (currentLang !== 'zh') {
            switchLanguage('zh');
        }
    });

    // 预加载器
    setTimeout(() => {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }, 1000);
});

// Removing particles.js configuration since we're using pure CSS animations

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