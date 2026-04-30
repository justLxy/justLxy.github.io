/**
 * Main JavaScript for Xuanyi Lyu's Personal Portfolio
 */

// DOM Elements
const preloader = document.querySelector('.preloader');
const header = document.querySelector('.header');
const navToggle = document.querySelector('.nav-toggle');
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.nav-link');
const langEn = document.getElementById('lang-en');
const langZh = document.getElementById('lang-zh');
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');
const contactForm = document.getElementById('contactForm');

// Current language (default: English)
let currentLang = 'en';
let typed = null;

// Typed.js Strings
const typedStrings = {
    en: [
        'I\'m an INFJ-T',
        'I\'m an AI/LLM Builder',
        'I\'m a RAG Developer',
        'I\'m an Algorithm Developer',
        'I\'m a Machine Learning Enthusiast',
        'I\'m an Intuitive Problem Solver',
        'I\'m a Deep Thinker'
    ],
    zh: [
        '我是INFJ-T',
        '我是 AI / 大模型开发者',
        '我是 RAG 应用开发者',
        '我是算法开发者',
        '我是机器学习爱好者',
        '我是灵感驱动的设计者',
        '我是富有洞察力的思考者'
    ]
};

/**
 * Initialize Typed.js
 */
function initTyped(lang) {
    if (typed) {
        typed.destroy();
    }

    typed = new Typed('.typed', {
        strings: typedStrings[lang],
        typeSpeed: 40,
        backSpeed: 25,
        backDelay: 3000,
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

    initTyped(lang);

    if (lang === 'en') {
        langEn.classList.add('active');
        langZh.classList.remove('active');
        document.documentElement.lang = 'en';
    } else {
        langZh.classList.add('active');
        langEn.classList.remove('active');
        document.documentElement.lang = 'zh';
    }

    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const keyParts = key.split('.');
        
        let value = translations[lang];
        for (const part of keyParts) {
            if (value && value[part] !== undefined) {
                value = value[part];
            } else {
                value = element.textContent;
                break;
            }
        }

        element.textContent = value;
    });

    localStorage.setItem('preferredLanguage', lang);
}

/**
 * Custom Cursor
 */
function initCursor() {
    // Custom cursor disabled
    return;
    
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');
    
    if (!cursorDot || !cursorOutline) return;

    window.addEventListener('mousemove', (e) => {
        const posX = e.clientX;
        const posY = e.clientY;

        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        cursorOutline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 150, fill: "forwards" }); // Decreased duration from 500 to 150 for faster tracking
    });

    // Hover effect on links and buttons
    const hoverElements = document.querySelectorAll('a, button, .bento-item, .project-card');
    
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursorOutline.style.width = '60px';
            cursorOutline.style.height = '60px';
            cursorOutline.style.backgroundColor = 'rgba(255,255,255,0.1)';
        });
        
        el.addEventListener('mouseleave', () => {
            cursorOutline.style.width = '40px';
            cursorOutline.style.height = '40px';
            cursorOutline.style.backgroundColor = 'transparent';
        });
    });
}

/**
 * Smooth Scrolling with Lenis
 */
function initLenis() {
    // Disabled Lenis smooth scrolling as requested
    return;
}

/**
 * GSAP Animations
 */
function initGSAP() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
    
    gsap.registerPlugin(ScrollTrigger);

    // Hero Section Animation
    const tl = gsap.timeline();
    
    tl.fromTo('.hero-title', 
        { y: 100, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1, ease: 'power4.out', delay: 0.5 }
    )
    .fromTo('.hero-subtitle',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
        "-=0.6"
    )
    .fromTo('.typing-text',
        { opacity: 0 },
        { opacity: 1, duration: 0.5 },
        "-=0.4"
    )
    .fromTo('.hero-buttons .btn',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out' },
        "-=0.2"
    )
    .fromTo('.social-links a',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, stagger: 0.1, ease: 'back.out(1.7)' },
        "-=0.4"
    );

    // Scroll Reveal Animations
    const revealElements = document.querySelectorAll('.gs-reveal');
    
    revealElements.forEach((el) => {
        gsap.fromTo(el,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: el,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                }
            }
        );
    });

    // Parallax Orb
    gsap.to('.bg-orb', {
        yPercent: 50,
        ease: 'none',
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: true
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // Preloader
    setTimeout(() => {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
            // Initialize animations after preloader
            initGSAP();
        }, 500);
    }, 1000);

    // Initialize Language
    const savedLang = localStorage.getItem('preferredLanguage');
    const browserLang = navigator.language.startsWith('zh') ? 'zh' : 'en';
    const initialLang = savedLang || browserLang;
    switchLanguage(initialLang);

    // Event Listeners
    langEn.addEventListener('click', () => {
        if (currentLang !== 'en') switchLanguage('en');
    });

    langZh.addEventListener('click', () => {
        if (currentLang !== 'zh') switchLanguage('zh');
    });

    // Initialize features
    initCursor();
    // initLenis(); // Disabled

    // Sticky Header
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });

    // Mobile Nav
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navbar.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navbar.classList.remove('active');
        });
    });

    // Project Filtering
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            projectCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    gsap.to(card, { opacity: 1, scale: 1, display: 'flex', duration: 0.4 });
                } else {
                    gsap.to(card, { opacity: 0, scale: 0.9, display: 'none', duration: 0.4 });
                }
            });
        });
    });

    // Contact Form (Preserved Logic)
    if (contactForm) {
        const formLoadTime = Date.now();
        
        const checkCooldown = () => {
            const lastSubmitTime = localStorage.getItem('lastEmailSubmitTime');
            const cooldownPeriod = 300 * 1000;

            if (lastSubmitTime) {
                const timeElapsed = Date.now() - parseInt(lastSubmitTime);
                if (timeElapsed < cooldownPeriod) {
                    const remainingSeconds = Math.ceil((cooldownPeriod - timeElapsed) / 1000);
                    return { canSubmit: false, remainingSeconds: remainingSeconds };
                }
            }
            return { canSubmit: true };
        };

        const incrementSubmitCount = () => {
            const today = new Date().toISOString().split('T')[0];
            const dailyCount = localStorage.getItem(`emailSubmitCount_${today}`) || 0;
            localStorage.setItem(`emailSubmitCount_${today}`, parseInt(dailyCount) + 1);
            return parseInt(dailyCount) + 1;
        };

        const checkDailyLimit = () => {
            const today = new Date().toISOString().split('T')[0];
            const dailyCount = localStorage.getItem(`emailSubmitCount_${today}`) || 0;
            const dailyLimit = 2;
            return { canSubmit: parseInt(dailyCount) < dailyLimit, dailyCount: parseInt(dailyCount), dailyLimit: dailyLimit };
        };
        
        const checkSubmissionSpeed = () => {
            const minTimeToFill = 5000;
            const timeTaken = Date.now() - formLoadTime;
            return { canSubmit: timeTaken >= minTimeToFill, timeTaken: Math.floor(timeTaken / 1000) };
        };
        
        const checkHoneypot = () => {
            const honeypotField = document.getElementById('website');
            return honeypotField ? honeypotField.value === '' : true;
        };

        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nameValue = document.getElementById('name').value.trim();
            const emailValue = document.getElementById('email').value.trim();
            const subjectValue = document.getElementById('subject').value.trim();
            const messageValue = document.getElementById('message').value.trim();

            if (!checkHoneypot()) return;

            const speedCheck = checkSubmissionSpeed();
            if (!speedCheck.canSubmit) {
                alert(currentLang === 'en' ? 'Please take your time to fill out the form properly.' : '请花时间正确填写表单。');
                return;
            }

            const cooldownCheck = checkCooldown();
            if (!cooldownCheck.canSubmit) {
                alert(currentLang === 'en' ? `Please wait ${cooldownCheck.remainingSeconds} seconds.` : `请等待 ${cooldownCheck.remainingSeconds} 秒。`);
                return;
            }

            const dailyLimitCheck = checkDailyLimit();
            if (!dailyLimitCheck.canSubmit) {
                alert(currentLang === 'en' ? `Daily limit reached.` : `您已达到每日发送限制。`);
                return;
            }

            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.innerHTML;
            submitBtn.disabled = true;
            submitBtn.innerHTML = currentLang === 'en' ? 'Sending...' : '发送中...';

            grecaptcha.ready(function() {
                grecaptcha.execute('6LdpmfwrAAAAAAX8tqQs8X-LcHv4gyhjbvwQcxMG', {action: 'submit'})
                    .then(function(token) {
                        const templateParams = {
                            from_name: nameValue,
                            from_email: emailValue,
                            subject: subjectValue,
                            message: messageValue,
                            to_name: 'Xuanyi Lyu',
                            reply_to: emailValue,
                            'g-recaptcha-response': token
                        };

                        sendEmailWithParams(templateParams, submitBtn, originalBtnText);
                    })
                    .catch(function(error) {
                        const templateParams = {
                            from_name: nameValue,
                            from_email: emailValue,
                            subject: subjectValue,
                            message: messageValue,
                            to_name: 'Xuanyi Lyu',
                            reply_to: emailValue
                        };
                        sendEmailWithParams(templateParams, submitBtn, originalBtnText);
                    });
            });
        });
        
        function sendEmailWithParams(templateParams, submitBtn, originalBtnText) {
            emailjs.send('service_thrb14n', 'template_zkqwiqb', templateParams)
                .then(function(response) {
                    localStorage.setItem('lastEmailSubmitTime', Date.now().toString());
                    incrementSubmitCount();
                    alert(currentLang === 'en' ? 'Thank you for your message!' : '感谢您的留言！');
                    contactForm.reset();
                }, function(error) {
                    alert(currentLang === 'en' ? `Error sending message (${error.status}).` : `发送消息时出错 (${error.status})。`);
                })
                .finally(function() {
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = originalBtnText;
                });
        }
    }
});

// Window resize event handler
window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && navbar.classList.contains('active')) {
        navToggle.classList.remove('active');
        navbar.classList.remove('active');
    }
});
