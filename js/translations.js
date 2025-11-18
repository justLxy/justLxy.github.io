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
            courses: "Software Engineering, Artificial Intelligence, Web Programming, HCI, Data Structures and Analysis, Computer Organization, Systems Programming, Operating Systems, Machine Learning, Probability, Statistics and Data Analysis"
        },

        // Experience Section
        experience: {
            title: "Experience",
            minecraft_title: "Commercial Minecraft Role-Playing Game (RPG) Server",
            minecraft_role: "Founder & Operator",
            minecraft_point1: "Launched and scaled an original RPG server, attracting 10,000+ unique players in total and sustaining 60+ concurrent active users through engaging PvP systems, boss events, and in-game monetization (subscriptions, merchandise).",
            minecraft_point2: "Cultivated a loyal community of 150+ daily active users and increased player retention by 35% via targeted feedback loops (e.g., chat groups, in-game mail, polls, and surveys).",
            minecraft_point3: "Designed and developed custom thematic maps, 3D weapon models, lore, and 8,000+ words of scripted narrative, enhancing player immersion and increasing average play time by 40%.",
            minecraft_point4: "Drove server growth with digital marketing across TikTok, WeChat, and Minecraft forums (e.g., MCBBS), generating 20+ daily sign-ups per day and a 15% month-over-month traffic increase.",
            club_title: "University of Toronto Chinese Club",
            club_role: "Director, Information Solutions Dept.",
            club_point1: "Built club website and facilitated collaboration across departments, streamlining event engagement for 100+ members.",
            cssu_title: "Full-Stack Loyalty Platform Development for Computer Science Student Union (CSSU)",
            cssu_role: "Web Developer & 1st Place Winner",
            cssu_point1: "Won 1st place among 60+ teams in the Winter 2025 Web Design Contest by overwhelming vote; subsequently invited by Prof. Jack Sun to continue developing the project as the official CSSU loyalty platform.",
            cssu_point2: "Developed a full-stack system with React.js (frontend) and Node.js/Express.js/PrismaORM/PostgreSQL (backend); integrated JWT-based authentication, implemented a CI/CD pipeline via GitHub Actions with Jest testing, and deployed on Vercel and Railway.",
            trustmark_title: "Interoperable Provenance Metadata for the Art & Museum Sector",
            trustmark_role: "Research Assistant | Supervisor: Prof. Daniel Chun",
            trustmark_point1: "Designed and implemented a unified, cross-standard provenance framework for digital images, integrating TrustMark imperceptible watermarking with C2PA, W3C DIDs, and Art ID to enable secure embedding and verification to ensure artwork authenticity and traceability.",
            trustmark_point2: "Awards & Funding: SREP (Summer Research Exchange Program) Award (CAD $3,000) and IE+ (International Experience Plus) Award (CAD $1,000); selected via competitive Centre for International Experience (CIE) nomination."
        },

        // Projects Section
        projects: {
            title: "Projects",
            filter_all: "All",
            filter_ux: "UX/HCI",
            filter_data: "Data Analysis",
            filter_dev: "Development",
            
            // Existing/Updated Projects
            utchinese_title: "UTChinese Network Official Website",
            utchinese_desc: "Developed a comprehensive web platform for UofT's Chinese student organization, featuring bilingual support, cultural event showcases, and community engagement tools with modern interactive interfaces.",
            
            financial_title: "UX/HCI-Driven Financial Management Application Design",
            financial_desc: "Led formative research through 18 interviews, 170 surveys, and contextual observation. Designed and tested prototypes, increasing task success rate by 32%. Developed high-fidelity Figma prototype; achieved 95% satisfaction rate.",
            
            nba_title: "Data-Driven Evaluation of NBA Player Scoring Determinants",
            nba_desc: "Led a basketball analytics project in R, performing comprehensive data cleaning and exploratory data analysis on 1,400+ NBA player records. Developed multiple linear regression models with rigorous diagnostics to uncover scoring trends.",
            
            tetris_title: "MIPS Assembly Language Tetris Game",
            tetris_desc: "Implemented core Tetris mechanics in MIPS assembly, including block generation, movement, rotation, and collision detection. Designed a dynamic pixel-based UI with Bitmap Display and integrated keyboard controls.",
            
            todo_title: "Java-based Todo List App for Task and Deadline Management",
            todo_desc: "Implemented “Clean Architecture” and advanced design patterns (Builder, Observer, Strategy). Achieved 100% test coverage with JUnit 5; integrated the Todoist API to enable cloud sync and reliable task management.",
            
            othello_title: "Intelligent Othello Game Agent with Adversarial Search",
            othello_desc: "Developed an intelligent game agent by implementing a Minimax algorithm with alpha-beta pruning. Designed heuristic evaluation functions based on piece differential, mobility, and corner control.",
            
            cssu_title: "Full-Stack Loyalty Platform Development for CSSU",
            cssu_desc: "Won 1st place among 60+ teams in Winter 2025 Web Design Contest. Developing official loyalty platform with React.js, Node.js/Express.js, PrismaORM, PostgreSQL. Integrated JWT auth and CI/CD pipeline.",
            
            trustmark_title: "Interoperable Provenance Metadata for the Art & Museum Sector",
            trustmark_desc: "Designed a unified provenance framework integrating TrustMark watermarking with C2PA, W3C DIDs, and Art ID. Enabled secure embedding and verification for artwork authenticity. Won SREP and IE+ Awards.",

            // New Project
            os_title: "OS User-Level Threading Library & Virtual Memory Simulator",
            os_desc: "Engineered a user-level thread library in C with cooperative/preemptive multithreading and synchronization. Built a virtual memory simulator with hierarchical page tables, demand paging, and copy-on-write optimization."
        },

        // Skills Section
        skills: {
            title: "Skills",
            achievements: "Activities & Achievements", // Renamed from "Achievements" to match content better
            
            // Technical Skills (New)
            tech_title: "Technical Skills",
            languages: "Languages",
            languages_list: "Java, R, Python, C/C++, SQL, TypeScript/JavaScript/HTML/CSS, Assembly language",
            technologies: "Technologies",
            technologies_list: "Git, Linux, Microsoft Office, Figma, Canva, Photoshop, Next.js/Node.js/React, Terraform, Kubernetes",

            // Achievements/Activities (Existing)
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
            courses: "软件工程，人工智能，Web编程，人机交互，数据结构与分析，计算机组成，系统编程，操作系统，机器学习，概率论，统计与数据分析"
        },

        // Experience Section
        experience: {
            title: "经验",
            minecraft_title: "Minecraft RPG 游戏服务器",
            minecraft_role: "创始人和运营者",
            minecraft_point1: "开发并运营原创RPG服务器，通过PvP战斗和Boss挑战吸引了10,000多名玩家；通过游戏内购买、订阅和个性化商品实现了60+并发活跃用户。",
            minecraft_point2: "培养了150+日活跃用户的忠实社区，通过QQ群、游戏内邮件、投票和调查收集反馈，将玩家留存率提高了35%。",
            minecraft_point3: "设计并开发了定制主题地图、3D武器模型、传说故事和8,000多字的脚本叙事，增强了玩家沉浸感，平均游戏时间增加了40%。",
            minecraft_point4: "通过在抖音、微信和Minecraft论坛（如MCBBS）上的数字营销推动服务器增长，平均每天产生20+注册，月流量增长15%。",
            club_title: "多大中文社团 UTChinese",
            club_role: "信息技术部门主任",
            club_point1: "建立了俱乐部网站并促进了各部门之间的合作，简化了100多名成员的活动参与。",
            cssu_title: "多伦多大学计算机科学学生会全栈积分平台开发",
            cssu_role: "网页开发者 & 第一名优胜者",
            cssu_point1: "在2025年冬季网页设计大赛（60+队伍）中以压倒性票数荣获第一名；随后受 Jack Sun 教授邀请，作为官方 CSSU 忠诚度平台继续开发该项目。",
            cssu_point2: "开发了一个包含 React.js（前端）和 Node.js/Express.js/PrismaORM/PostgreSQL（后端）的全栈系统；集成了基于 JWT 的身份验证，通过 GitHub Actions 实施 CI/CD 管道并进行 Jest 测试，并部署在 Vercel 和 Railway 上。",
            trustmark_title: "艺术与博物馆领域的可互操作溯源元数据",
            trustmark_role: "研究助理 | 导师: Daniel Chun 教授",
            trustmark_point1: "设计并实施了一个统一的、跨标准的数字图像溯源框架，集成了 TrustMark 隐形水印与 C2PA、W3C DID 和 Art ID，以实现安全的嵌入和验证，确保证书的真实性和可追溯性。",
            trustmark_point2: "奖项与资助：SREP（暑期研究交流计划）奖（3,000加元）和 IE+（国际经验加）奖（1,000加元）；通过竞争激烈的国际体验中心（CIE）提名入选。"
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
            
            financial_title: "用户体验/人机交互驱动的财务管理应用设计",
            financial_desc: "通过18次访谈、170份问卷和情境观察领导形成性研究。设计并测试原型，任务成功率提高32%。开发高保真Figma原型；满意度达到95%。",
            
            nba_title: "NBA球员得分决定因素的数据驱动评估",
            nba_desc: "领导R语言篮球分析项目，对1,400+ NBA球员记录进行全面数据清洗和探索性分析。使用AIC/BIC变量选择开发多元线性回归模型，进行严格诊断。",
            
            tetris_title: "MIPS汇编语言俄罗斯方块游戏",
            tetris_desc: "在MIPS汇编中实现核心俄罗斯方块机制，包括方块生成、移动、旋转和碰撞检测。设计了带有位图显示的动态像素UI和集成键盘控制。",
            
            todo_title: "基于Java的待办事项管理应用",
            todo_desc: "实施“清洁架构”和高级设计模式（建造者、观察者、策略）。使用JUnit 5实现100%测试覆盖率；集成Todoist API实现云同步。",
            
            othello_title: "基于对抗搜索的智能黑白棋游戏代理",
            othello_desc: "通过实现带Alpha-Beta剪枝的Minimax算法开发智能游戏代理。设计基于棋子差异、机动性和角控制的启发式评估函数。",
            
            cssu_title: "计算机科学学生会全栈积分平台",
            cssu_desc: "在2025年冬季网页设计大赛（60+队伍）中夺冠。使用React.js、Node.js等开发CSSU官方忠诚度平台。集成JWT认证和CI/CD流水线。",
            
            trustmark_title: "艺术与博物馆领域的可互操作溯源元数据",
            trustmark_desc: "设计统一溯源框架，集成TrustMark水印、C2PA、W3C DID和Art ID。实现艺术品真实性的安全嵌入和验证。获得SREP和IE+奖项。",

            // New Project
            os_title: "操作系统用户级线程库与虚拟内存模拟器",
            os_desc: "用C语言设计用户级线程库，实现协作/抢占式多线程。构建具有分级页表、按需分页和写时复制优化的虚拟内存模拟器。"
        },

        // Skills Section
        skills: {
            title: "技能",
            achievements: "活动与成就",
            
            // Technical Skills
            tech_title: "专业技能",
            languages: "编程语言",
            languages_list: "Java, R, Python, C/C++, SQL, TypeScript/JavaScript/HTML/CSS, Assembly language",
            technologies: "技术栈",
            technologies_list: "Git, Linux, Microsoft Office, Figma, Canva, Photoshop, Next.js/Node.js/React, Terraform, Kubernetes",

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