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
        'I\'m a INFJ-T',
        'I\'m a Game Developer',
        'I\'m a Full Stack Developer',
        'I\'m a UX/HCI Enthusiast',
        'I\'m an Intuitive Problem Solver',
        'I\'m a Deep Thinker'
    ],
    zh: [
        '我是INFJ-T',
        '我是游戏开发者',
        '我是全栈开发学习者',
        '我是用户体验设计爱好者',
        '我是灵感驱动的设计者',
        '我是富有洞察力的思考者'
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
        typeSpeed: 40,  // 降低打字速度
        backSpeed: 25,  // 降低退格速度
        backDelay: 3000,  // 增加停留时间
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
 * Contact Form Submission with Anti-Spam Protection
 */
if (contactForm) {
    // Record when the form was loaded (to detect too-fast submissions)
    const formLoadTime = Date.now();
    
    // Prevent spam: check cooldown time
    const checkCooldown = () => {
        const lastSubmitTime = localStorage.getItem('lastEmailSubmitTime');
        const cooldownPeriod = 300 * 1000; // 300 seconds cooldown

        if (lastSubmitTime) {
            const timeElapsed = Date.now() - parseInt(lastSubmitTime);
            if (timeElapsed < cooldownPeriod) {
                const remainingSeconds = Math.ceil((cooldownPeriod - timeElapsed) / 1000);
                return {
                    canSubmit: false,
                    remainingSeconds: remainingSeconds
                };
            }
        }

        return { canSubmit: true };
    };

    // Record send count
    const incrementSubmitCount = () => {
        const today = new Date().toISOString().split('T')[0]; // Get current date YYYY-MM-DD
        const dailyCount = localStorage.getItem(`emailSubmitCount_${today}`) || 0;

        localStorage.setItem(`emailSubmitCount_${today}`, parseInt(dailyCount) + 1);
        return parseInt(dailyCount) + 1;
    };

    // Check daily send limit
    const checkDailyLimit = () => {
        const today = new Date().toISOString().split('T')[0];
        const dailyCount = localStorage.getItem(`emailSubmitCount_${today}`) || 0;
        const dailyLimit = 2; // Maximum 2 emails per day

        return {
            canSubmit: parseInt(dailyCount) < dailyLimit,
            dailyCount: parseInt(dailyCount),
            dailyLimit: dailyLimit
        };
    };
    
    // Check if submission is too fast (bot detection)
    const checkSubmissionSpeed = () => {
        const minTimeToFill = 5000; // Minimum 5 seconds to fill the form
        const timeTaken = Date.now() - formLoadTime;
        
        return {
            canSubmit: timeTaken >= minTimeToFill,
            timeTaken: Math.floor(timeTaken / 1000)
        };
    };
    
    // Check honeypot field (bot trap)
    const checkHoneypot = () => {
        const honeypotField = document.getElementById('website');
        // If honeypot field is filled, it's likely a bot
        return honeypotField ? honeypotField.value === '' : true;
    };
    
    // Detect random gibberish strings
    const isRandomString = (text) => {
        if (!text || text.length < 3) return false;
        
        // Check for too many consecutive consonants (common in random strings)
        const consecutiveConsonants = /[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]{6,}/;
        if (consecutiveConsonants.test(text)) return true;
        
        // Check for mixed case random pattern (e.g., "jKCNFCALUqqneYkzXpQgvaEk")
        const randomCasePattern = /[a-z][A-Z][a-z][A-Z]|[A-Z]{3,}[a-z]{2,}[A-Z]{3,}/;
        if (randomCasePattern.test(text)) return true;
        
        // Check vowel ratio (random strings often have very low vowel ratio)
        const vowels = text.match(/[aeiouAEIOU]/g);
        const vowelRatio = vowels ? vowels.length / text.length : 0;
        if (vowelRatio < 0.15 && text.length > 10) return true;
        
        // Check for repeating character patterns
        const repeatingPattern = /(.)\1{4,}/;
        if (repeatingPattern.test(text)) return true;
        
        return false;
    };
    
    // Validate content quality
    const validateContent = (name, subject, message) => {
        // Check if any field contains random gibberish
        if (isRandomString(name)) {
            return { valid: false, reason: 'invalid_name' };
        }
        
        if (isRandomString(subject)) {
            return { valid: false, reason: 'invalid_subject' };
        }
        
        if (isRandomString(message)) {
            return { valid: false, reason: 'invalid_message' };
        }
        
        // Check message quality
        const words = message.trim().split(/\s+/);
        if (words.length < 3) {
            return { valid: false, reason: 'message_too_short' };
        }
        
        // Check for reasonable name (at least one space for full name, or reasonable length)
        if (name.length > 50 || (name.length > 20 && !name.includes(' '))) {
            return { valid: false, reason: 'invalid_name_length' };
        }
        
        return { valid: true };
    };
    
    // Check for suspicious email domains
    const validateEmail = (email) => {
        // Allow QQ email addresses (common in China, often all numbers)
        if (/@qq\.com$/i.test(email) || /@qq\.cn$/i.test(email)) {
            return true;
        }
        
        // Allow other common Chinese email services
        if (/@(163|126|sina|sohu|yeah|aliyun)\.com$/i.test(email)) {
            return true;
        }
        
        // Common temporary/spam email domains
        const suspiciousPatterns = [
            /^[a-z]+\d+@gmail\.com$/i,  // Pattern like: bewubohodoj59@gmail.com
            /@(temp|trash|fake|spam|guerrilla|10minute|throwaway)/i,
            /\d{5,}@/,  // Too many numbers in email (but exclude QQ and other Chinese services)
        ];
        
        for (const pattern of suspiciousPatterns) {
            if (pattern.test(email)) {
                return false;
            }
        }
        
        return true;
    };

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const nameValue = document.getElementById('name').value.trim();
        const emailValue = document.getElementById('email').value.trim();
        const subjectValue = document.getElementById('subject').value.trim();
        const messageValue = document.getElementById('message').value.trim();

        // 1. Check honeypot field (bot trap)
        if (!checkHoneypot()) {
            console.warn('Spam detected: Honeypot field filled');
            // Don't show error to bot, just silently fail
            return;
        }

        // 2. Check submission speed (too fast = bot)
        const speedCheck = checkSubmissionSpeed();
        if (!speedCheck.canSubmit) {
            alert(
                currentLang === 'en'
                    ? 'Please take your time to fill out the form properly.'
                    : '请花时间正确填写表单。'
            );
            return;
        }

        // 3. Validate content quality
        const contentCheck = validateContent(nameValue, subjectValue, messageValue);
        if (!contentCheck.valid) {
            const errorMessages = {
                en: {
                    invalid_name: 'Please enter a valid name.',
                    invalid_subject: 'Please enter a meaningful subject.',
                    invalid_message: 'Please enter a meaningful message.',
                    message_too_short: 'Your message is too short. Please provide more details.',
                    invalid_name_length: 'Please enter a valid name.'
                },
                zh: {
                    invalid_name: '请输入有效的姓名。',
                    invalid_subject: '请输入有意义的主题。',
                    invalid_message: '请输入有意义的消息内容。',
                    message_too_short: '您的消息太短了，请提供更多详细信息。',
                    invalid_name_length: '请输入有效的姓名。'
                }
            };
            
            alert(errorMessages[currentLang][contentCheck.reason]);
            return;
        }

        // 4. Validate email
        if (!validateEmail(emailValue)) {
            alert(
                currentLang === 'en'
                    ? 'Please use a valid email address.'
                    : '请使用有效的电子邮件地址。'
            );
            return;
        }

        // 5. Check cooldown time
        const cooldownCheck = checkCooldown();
        if (!cooldownCheck.canSubmit) {
            alert(
                currentLang === 'en'
                    ? `Please wait ${cooldownCheck.remainingSeconds} seconds before sending another message.`
                    : `请等待 ${cooldownCheck.remainingSeconds} 秒后再发送另一条消息。`
            );
            return;
        }

        // 6. Check daily limit
        const dailyLimitCheck = checkDailyLimit();
        if (!dailyLimitCheck.canSubmit) {
            alert(
                currentLang === 'en'
                    ? `You have reached the daily limit of ${dailyLimitCheck.dailyLimit} messages.`
                    : `您已达到每日 ${dailyLimitCheck.dailyLimit} 条消息的限制。`
            );
            return;
        }

        // Get submit button and show loading state
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = currentLang === 'en' ? 'Sending...' : '发送中...';

        // Execute reCAPTCHA v3 verification
        grecaptcha.ready(function() {
            grecaptcha.execute('6LdpmfwrAAAAAAX8tqQs8X-LcHv4gyhjbvwQcxMG', {action: 'submit'})
                .then(function(token) {
                    // Prepare parameters to send (including reCAPTCHA token)
                    const templateParams = {
                        from_name: nameValue,
                        from_email: emailValue,
                        subject: subjectValue,
                        message: messageValue,
                        to_name: 'Xuanyi Lyu',
                        reply_to: emailValue,
                        'g-recaptcha-response': token  // Add reCAPTCHA token
                    };

                    // Log the parameters for debugging (you can remove this in production)
                    console.log('Sending email with reCAPTCHA protection');

                    // Use EmailJS to send email
                    sendEmailWithParams(templateParams, submitBtn, originalBtnText);
                })
                .catch(function(error) {
                    console.error('reCAPTCHA error:', error);
                    // If reCAPTCHA fails, still try to send (fallback)
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
    
    // Helper function to send email
    function sendEmailWithParams(templateParams, submitBtn, originalBtnText) {
        emailjs.send('service_thrb14n', 'template_zkqwiqb', templateParams)
            .then(function(response) {
                console.log('Email sent successfully!', response.status, response.text);

                // Record send time and count
                localStorage.setItem('lastEmailSubmitTime', Date.now().toString());
                incrementSubmitCount();

                // Show success message
                alert(
                    currentLang === 'en'
                        ? 'Thank you for your message! I will get back to you soon.'
                        : '感谢您的留言！我将很快回复您。'
                );

                // Reset form
                contactForm.reset();
            }, function(error) {
                console.error('Failed to send email...', error);

                // Show error message with more details for debugging
                alert(
                    currentLang === 'en'
                        ? `Sorry, there was an error sending your message (${error.status}). Please try again later.`
                        : `抱歉，发送消息时出错 (${error.status})。请稍后再试。`
                );
            })
            .finally(function() {
                // Restore button state
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnText;
            });
    }
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
