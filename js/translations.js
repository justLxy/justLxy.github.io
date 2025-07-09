/**
 * Translations for bilingual support (English and Chinese)
 */
const translations = {
    en: {
        name: 'Xuanyi Lyu',
        // Navigation
        nav: {
            home: "Home",
            about: "About",
            education: "Education",
            experience: "Experience",
            projects: "Projects",
            skills: "Skills",
            contact: "Contact"
        },

        // Hero Section
        hero: {
            description: "Student at University of Toronto from the class of 2026.",
            contact: "Contact Me",
            resume: "Download Resume"
        },

        // About Section
        about: {
            title: "About Me",
            greeting: "Hello, I'm Xuanyi Lyu",
            intro: "I'm an INFJ-T passionate about technology and innovation. Currently pursuing a double major in Computer Science & Statistics with a minor in Economics at the University of Toronto.",
            interests: "My interests include UX/HCI, Artificial Intelligence, and Machine Learning. I enjoy creating solutions that combine technical excellence with user-centered design.",
            goals: "I'm dedicated to academic exploration and technological innovation, seeking to make meaningful contributions to society through my work in computer science and data analysis.",
            name_label: "Name",
            email_label: "Email",
            education_label: "Education",
            education_value: "University of Toronto"
        },

        // Education Section
        education: {
            title: "Education",
            degree: "Bachelor of Science",
            program: "Computer Science & Statistics Double Major, Economics Minor",
            university: "University of Toronto, Toronto, Canada",
            honors: "Dean's List Scholar (2022-2025)",
            courses_title: "Core Courses",
            courses: "Software Design, Data Structures and Analysis, Computer Organization, Systems Programming, UX/HCI, Databases, Probability, Statistics and Data Analysis, Web Programming, Operating Systems, Artificial Intelligence"
        },

        // Experience Section
        experience: {
            title: "Experience",
            minecraft_title: "Commercial Minecraft Role-Playing Game Server",
            minecraft_role: "Founder & Operator",
            minecraft_point1: "Developed and operated an original RPG server, attracting 10,000+ players through engaging PvP battles and boss challenges; achieved 100+ ongoing player involvement through in-game purchases, subscriptions, and personalized merchandise.",
            minecraft_point2: "Established a vibrant community of 100+ active players, enhancing satisfaction and retention through feedback from QQ groups, in-game mail, group polls, and surveys.",
            minecraft_point3: "Designed thematic maps, weapon models, and storylines, and created 8,000+ words of script.",
            minecraft_point4: "Expanded the user base by increasing server visibility through social media (QQ, WeChat), online advertising, and Minecraft community forums (MCBBS), attracting an average of 20+ new players daily.",
            club_title: "University of Toronto Chinese Club",
            club_role: "Director, Information Solutions Department",
            club_point1: "Developed and maintained the club website, enhancing user experience and ensuring timely event announcements.",
            cssu_title: "Full-Stack Rewards Platform Development for Computer Science Student Union (CSSU)",
            cssu_role: "Web Developer & 1st Place Winner",
            cssu_point1: "Won 1st place (among 60+ teams) in the Winter 2025 Web Design Contest by overwhelming vote; invited by Prof. Jack Sun to further develop the project as UofT CSSU's official loyalty-rewards platform under his supervision.",
            cssu_point2: "Built with React.js (frontend) and Node.js/Express.js/PrismaORM/PostgreSQL (backend); integrated JWT-based authentication, implemented a CI/CD pipeline via GitHub Actions with Jest testing, and deployed on Vercel and Railway.",
            trustmark_title: "Multi-Standard Digital-Art Provenance Framework Based on TrustMark Watermarking",
            trustmark_role: "Research Assistant under Prof. Daniel Chun (HKUST)",
            trustmark_point1: "Developed a unified, cross-standard provenance framework for digital images by integrating TrustMark imperceptible watermarking.",
            trustmark_point2: "Enabled seamless embedding and verification of leading standards (C2PA, W3C DID, DCI 3.0, Art ID) to ensure artwork authenticity and traceability."
        },

        // Projects Section
        projects: {
            title: "Projects",
            filter_all: "All",
            filter_ux: "UX/HCI",
            filter_data: "Data Analysis",
            filter_dev: "Development",
            utchinese_title: "UTChinese Network Official Website",
            utchinese_desc: "Developed a comprehensive web platform for UofT's Chinese student organization, featuring bilingual support, cultural event showcases, and community engagement tools with modern interactive interfaces.",
            financial_title: "UX/HCI-Driven Financial Management Application Design",
            financial_desc: "Lead a team in designing a financial management application for university students, conducting comprehensive user research, creating prototypes, and implementing iterative design improvements.",
            nba_title: "Statistics and Data Analysis of NBA Player Performance",
            nba_desc: "Analyzed NBA player performance metrics using statistical methods to identify factors influencing scoring performance, building and refining a multiple linear regression model.",
            tetris_title: "MIPS Assembly Language Tetris Game",
            tetris_desc: "Independently developed a Tetris game in MIPS assembly language, implementing core mechanics including block generation, movement, rotation, and collision detection with a pixel-based UI.",
            todo_title: "Java-based Todo List Application",
            todo_desc: "Led the development of a task and deadline management application using Java, implementing Clean Architecture principles and design patterns with comprehensive testing.",
            othello_title: "Advanced Othello AI with Alpha-Beta Pruning",
            othello_desc: "Developed a strategic Othello/Reversi game with a custom AI using the Alpha-Beta pruning algorithm, dynamic heuristic evaluation.",
            cssu_title: "Full-Stack Rewards Platform for Computer Science Student Union",
            cssu_desc: "Won 1st place in Winter 2025 Web Design Contest (60+ teams). Developing UofT CSSU's official loyalty-rewards platform under Prof. Jack Sun's supervision. Full-stack application with modern CI/CD pipeline.",
            trustmark_title: "Multi-Standard Digital-Art Provenance Framework",
            trustmark_desc: "Research project under Prof. Daniel Chun (HKUST). Unified framework integrating TrustMark watermarking with C2PA, W3C DID, DCI 3.0, and Art ID standards for digital artwork authenticity and traceability."
        },

        // Skills Section
        skills: {
            title: "Skills",
            achievements: "Achievements",
            usaco: "USA Computing Olympiad (USACO)",
            usaco_desc: "Gold Division (Ranked 1/3676)",
            euclid: "Euclid Mathematics Contest",
            euclid_desc: "Excellence Award (Top 25%)",
            purple: "Purple Comet Math Meet",
            purple_desc: "Team First Place (Ranked 1/3353)",
            calligraphy: "Chinese Soft Brush Calligraphy",
            calligraphy_desc: "Level 10 Certificate (Highest Level)",
            drums: "Drum Set",
            drums_desc: "Level 8 Certificate (Out of 10)",
            volunteer: "Community Volunteer",
            volunteer_desc: "100+ hours supporting community services at library, fire station, and blood center (2021 - Present)"
        },

        // Contact Section
        contact: {
            title: "Contact Me",
            email: "Email",
            location: "Location",
            location_value: "Toronto, Canada",
            name: "Name",
            email_address: "Your Email Address",
            subject: "Subject",
            message: "Message",
            send: "Send Message"
        },

        // Footer
        footer: {
            tagline: "xuanyi.lyu@mail.utoronto.ca",
            copyright: "© 2025 Xuanyi Lyu. All rights reserved."
        }
    },

    zh: {
        name: '吕宣谊',
        // Navigation
        nav: {
            home: "首页",
            about: "关于",
            education: "教育",
            experience: "经历",
            projects: "项目",
            skills: "技能",
            contact: "联系"
        },

        // Hero Section
        hero: {
            description: "多伦多大学 2026 届在读本科生。",
            contact: "联系我",
            resume: "下载简历"
        },

        // About Section
        about: {
            title: "关于我",
            greeting: "你好，我是吕宣谊",
            intro: "我是一名INFJ-T性格的学生，对技术和创新充满热情。目前在多伦多大学攻读计算机科学与统计学双专业，辅修经济学。",
            interests: "我的兴趣领域包括人机交互、人工智能和机器学习。我喜欢创造结合技术卓越和以用户为中心设计的解决方案。",
            goals: "我致力于学术探索和技术创新，希望通过我在计算机科学和数据分析方面的工作为社会做出有意义的贡献。",
            name_label: "姓名",
            email_label: "邮箱",
            education_label: "教育",
            education_value: "多伦多大学"
        },

        // Education Section
        education: {
            title: "教育背景",
            degree: "理学学士",
            program: "计算机科学与统计学双专业，经济学辅修",
            university: "多伦多大学，多伦多，加拿大",
            honors: "院长名单学者 (2022-2025)",
            courses_title: "核心课程",
            courses: "软件设计，数据结构与分析，计算机组成，系统编程，人机交互，数据库，概率论，统计与数据分析，Web编程，操作系统，人工智能"
        },

        // Experience Section
        experience: {
            title: "经验",
            minecraft_title: "Minecraft RPG 游戏服务器:《一人之上》&《记忆代理人》",
            minecraft_role: "创始人和运营者",
            minecraft_point1: "开发并运营原创RPG服务器，通过PvP战斗和Boss挑战吸引了10,000多名玩家；通过游戏内购买、订阅和个性化商品实现了100多名玩家的持续参与。",
            minecraft_point2: "建立了一个由100多名活跃玩家组成的充满活力的社区，通过QQ群、游戏内邮件、群组投票和调查收集反馈，提高满意度和留存率。",
            minecraft_point3: "设计主题地图、武器模型和故事情节，创作了8,000多字的脚本。",
            minecraft_point4: "通过社交媒体（QQ、微信）、在线广告和Minecraft社区论坛（MCBBS）增加服务器知名度，扩大用户群，平均每天吸引20多名新玩家。",
            club_title: "多大中文社团 UTChinese",
            club_role: "信息技术部门主任",
            club_point1: "开发和维护俱乐部网站，增强用户体验并确保社团活动的及时发布。",
            cssu_title: "多伦多大学计算机科学学生会全栈积分平台开发",
            cssu_role: "网页开发者 & 第一名优胜者",
            cssu_point1: "在2025年冬季网页设计大赛（60+队伍）中荣获第一名；受 Sun 教授邀请，在其指导下进一步开发 UofT CSSU 官方忠诚度积分平台。",
            cssu_point2: "使用 React.js（前端）和 Node.js/Express.js/PrismaORM/PostgreSQL（后端）构建；集成 JWT 身份验证，实现 GitHub Actions CI/CD 流水线并部署至 Vercel 与 Railway。",
            trustmark_title: "基于 TrustMark 水印的多标准数字艺术溯源框架",
            trustmark_role: "香港科技大学 Daniel Chun 教授研究助理",
            trustmark_point1: "通过整合 TrustMark 隐形水印，开发统一、跨标准的数字图像溯源框架。",
            trustmark_point2: "实现 C2PA、W3C DID、DCI 3.0 和 Art ID 等领先标准的无缝嵌入与验证，确保艺术品的真实性与可追溯性。"
        },

        // Projects Section
        projects: {
            title: "项目",
            filter_all: "全部",
            filter_ux: "人机交互",
            filter_data: "数据分析",
            filter_dev: "软件开发",
            utchinese_title: "多大中文社团官方网站",
            utchinese_desc: "为多伦多大学中文学生组织开发的综合网络平台，提供双语支持、文化活动展示和社区互动功能，采用现代化交互界面设计。",
            financial_title: "财务管理应用UI原型设计",
            financial_desc: "领导团队为大学生设计财务管理应用程序，进行全面的用户研究，创建原型，并实施迭代设计改进。",
            nba_title: "NBA球员表现的统计和数据分析",
            nba_desc: "使用统计方法分析NBA球员表现指标，以确定影响得分表现的因素，构建并完善多元线性回归模型。",
            tetris_title: "MIPS汇编语言俄罗斯方块游戏",
            tetris_desc: "独立开发MIPS汇编语言的俄罗斯方块游戏，实现方块生成、移动、旋转、碰撞检测等核心机制，使用基于像素的用户界面。",
            todo_title: "基于Java的Todo-list待办事项软件",
            todo_desc: "领导开发任务和截止日期管理应用程序，使用Java实现，应用清洁架构原则和设计模式，进行全面测试。",
            othello_title: "基于Alpha-Beta算法和原创启发式算法的黑白棋游戏对战AI",
            othello_desc: "开发了一款战略性黑白棋/翻转棋游戏，使用Alpha-Beta剪枝算法、动态原创启发式评估智能AI。",
            cssu_title: "计算机科学学生会全栈积分平台",
            cssu_desc: "在2025年冬季网页设计大赛（60+队伍）中夺冠。在 Sun 教授监督下开发 UofT CSSU 官方忠诚度积分平台，采用现代化 CI/CD 全栈架构。",
            trustmark_title: "多标准数字艺术溯源框架",
            trustmark_desc: "香港科技大学 Daniel Chun 教授指导的研究项目。将 TrustMark 水印与 C2PA、W3C DID、DCI 3.0、Art ID 标准融合，确保数字艺术作品的真实性与可追溯性。"
        },

        // Skills Section
        skills: {
            title: "成就",
            achievements: "竞赛",
            usaco: "美国计算机奥林匹克竞赛 (USACO)",
            usaco_desc: "金牌组 (排名 1/3676)",
            euclid: "欧几里得数学竞赛",
            euclid_desc: "卓越奖 (前25%)",
            purple: "紫色彗星数学竞赛",
            purple_desc: "团队第一名 (排名 1/3353)",
            calligraphy: "中国软笔书法",
            calligraphy_desc: "10级证书 (满级10级)",
            drums: "架子鼓",
            drums_desc: "8级证书 (满级10级)",
            volunteer: "社区志愿者",
            volunteer_desc: "在图书馆、消防站和献血中心等社区服务中累计 100+ 小时 (2021 - 今)"
        },

        // Contact Section
        contact: {
            title: "联系我",
            email: "邮箱",
            location: "位置",
            location_value: "多伦多，加拿大",
            name: "姓名",
            email_address: "你的邮箱地址",
            subject: "主题",
            message: "消息",
            send: "发送消息"
        },

        // Footer
        footer: {
            tagline: "xuanyi.lyu@mail.utoronto.ca",
            copyright: "© 2025 吕宣谊。保留所有权利。"
        }
    }
};

// Export the translations object
if (typeof module !== 'undefined' && module.exports) {
    module.exports = translations;
} else {
    // When used in browser
    window.translations = translations;
}
