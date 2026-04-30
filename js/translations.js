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
            description: "/* This is Xuanyi Lyu's personal homepage */",
            contact: "Contact Me",
            resume: "View Resume",
            subtitle: "Software Engineer & AI Algorithm Developer."
        },

        // About Section
        about: {
            title: "About Me",
            greeting: "Hello, I'm Xuanyi Lyu",
            intro: "I'm an INFJ-T passionate about technology and innovation, with a Columbia University M.S. in Computer Science and a University of Toronto B.S. in Computer Science and Statistics.",
            interests: "My interests center on AI and large language models, including RAG, long-term memory, model integration, and intelligent agent applications.",
            goals: "I'm dedicated to building practical AI systems that connect rigorous machine learning ideas with reliable software engineering and real user needs.",
            name_label: "Name",
            email_label: "Email",
            education_label: "Education",
            education_value: "Columbia University / University of Toronto"
        },

        // Education Section
        education: {
            title: "Education",
            columbia_degree: "Master of Science",
            columbia_program: "Computer Science",
            columbia_university: "Columbia University, New York, United States",
            focus_title: "Academic Focus",
            columbia_focus: "Computer Science graduate study with focus on artificial intelligence, large language models, RAG, machine learning, and software systems.",
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
            minecraft_point1: "Launched and scaled an original RPG server from 0 to 1, attracting 10,000+ unique players in total and sustaining 100+ concurrent active users through engaging PvP systems, boss events, and in-game monetization (subscriptions, merchandise).",
            minecraft_point2: "Cultivated a loyal community of daily active users and increased player retention by 55% via targeted feedback loops (e.g., chat groups, in-game mail, polls, and surveys).",
            minecraft_point3: "Designed and developed custom thematic maps, 3D weapon models, lore, and 10,000+ words of scripted narrative, integrated NPC dialogue with LLMs, enhancing player immersion.",
            minecraft_point4: "Drove server growth with digital marketing across TikTok, WeChat, and Minecraft forums, generating 20+ daily sign-ups.",
            club_title: "University of Toronto Chinese Club",
            club_role: "Director, Information Solutions Dept.",
            club_point1: "Built club website and facilitated collaboration across departments, streamlining event engagement for 100+ members.",
            cssu_title: "Full-Stack Loyalty Platform Development for Computer Science Student Union (CSSU)",
            cssu_role: "Web Developer & 1st Place Winner",
            cssu_point1: "Won 1st place among 61 teams in the Winter 2025 Web Design Contest by overwhelming vote; subsequently invited by Prof. Jack Sun to continue developing the project as the official CSSU loyalty platform.",
            cssu_point2: "Introduced LLM collaborative development (Vibe Coding) through prompt engineering to translate natural language requirements into technical specs. Developed a full-stack architecture using React.js, Node.js, Express.js, Prisma, and PostgreSQL with CI/CD.",
            trustmark_title: "Digital Content Trust Traceability and Art Authentication Application Development",
            trustmark_role: "Research Assistant | Supervisor: Prof. Daniel Chun",
            trustmark_point1: "Addressed vulnerabilities in traditional C2PA metadata stripping during image compression and screenshots in the AIGC era.",
            trustmark_point2: "Designed and implemented a hybrid provenance framework integrating TrustMark imperceptible watermarking with C2PA content credentials. Proposed a persistent content credential scheme of 'metadata hard binding + watermark soft binding'.",
            trustmark_point3: "Awards & Funding: SREP (Summer Research Exchange Program) Award (20,000 RMB); selected via competitive Centre for International Experience (CIE) nomination."
        },

        // Projects Section
        projects: {
            title: "Projects",
            filter_all: "All",
            filter_ux: "UX/HCI",
            filter_data: "Data Analysis",
            filter_dev: "Development",
            
            // Existing/Updated Projects
            utchinese_title: "University of Toronto Chinese Club",
            utchinese_desc: "Developed a comprehensive web platform for UofT's Chinese student organization, featuring bilingual support, cultural event showcases, and community engagement tools with modern interactive interfaces.",
            
            financial_title: "UX/HCI-Driven Financial Management Application Design",
            financial_desc: "Led formative research through 18 interviews, 170 surveys, and contextual observation. Designed and tested prototypes, increasing task success rate by 32%. Developed high-fidelity Figma prototype; achieved 95% satisfaction rate.",
            
            nba_title: "Data-Driven Evaluation of NBA Player Scoring Determinants",
            nba_desc: "Performed comprehensive data cleaning and EDA on 1,400+ NBA player records. Modeled and optimized multiple linear regression models using AIC/BIC variable selection, executing multicollinearity checks and Box-Cox transformations.",
            
            tetris_title: "MIPS Assembly Language Tetris Game",
            tetris_desc: "Implemented core Tetris mechanics in MIPS assembly, including block generation, movement, rotation, and collision detection. Designed a dynamic pixel-based UI with Bitmap Display and integrated keyboard controls.",
            
            todo_title: "Java-based Todo List App for Task and Deadline Management",
            todo_desc: "Implemented “Clean Architecture” and advanced design patterns (Builder, Observer, Strategy). Achieved 100% test coverage with JUnit 5; integrated the Todoist API to enable cloud sync and reliable task management.",
            
            othello_title: "Intelligent Othello Game Agent with Adversarial Search",
            othello_desc: "Developed an intelligent game agent by implementing a Minimax algorithm with alpha-beta pruning. Designed heuristic evaluation functions based on piece differential, mobility, and corner control.",
            
            cssu_title: "Full-Stack Loyalty Platform Development for Computer Science Student Union (CSSU)",
            cssu_desc: "Introduced LLM collaborative development (Vibe Coding) through prompt engineering to translate natural language requirements into technical specs. Developed a full-stack architecture using React.js, Node.js, Express.js, Prisma, and PostgreSQL with CI/CD.",
            
            trustmark_title: "Digital Content Trust Traceability and Art Authentication",
            trustmark_desc: "Designed and implemented a hybrid provenance framework integrating TrustMark imperceptible watermarking with C2PA content credentials. Addressed vulnerabilities in traditional C2PA metadata stripping during image compression and screenshots.",

            // New Projects
            minecraft_ai_title: "Minecraft AI NPC Dialogue Plugin",
            minecraft_ai_desc: "Independently developed an AI NPC dialogue plugin for Minecraft servers. Integrated LLM foundation APIs, Embedding APIs, knowledge base RAG, and model-driven long-term memory mechanisms for persistent context-aware conversations.",
            
            minecraft_economy_title: "Adaptive Minecraft Server Economy Control Plugin",
            minecraft_economy_desc: "Designed and developed an adaptive economy control plugin for Minecraft servers. Built online value discovery and risk control algorithms based on player transaction logs, integrating dynamic AMM, bilateral quotes, and abnormal trade identification.",
            
            windmill_title: "Computer Graphics Project: Whispers of the Windmill",
            windmill_desc: "Built a rendering system featuring ray tracing, shader pipelines, and physical animation. Utilized dynamic BVH acceleration structures to achieve real-time efficient intersection calculations for an 11,000+ triangle scene.",
            
            os_title: "OS User-Level Threading Library",
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
            description: "/* 这里是吕宣谊的个人主页 */",
            contact: "联系我",
            resume: "查看简历",
            subtitle: "软件工程师 & AI 算法开发者。"
        },

        // About Section
        about: {
            title: "关于我",
            greeting: "你好，我是吕宣谊",
            intro: "我是一名 INFJ-T 性格的学生，对技术和创新充满热情，拥有哥伦比亚大学计算机科学硕士与多伦多大学计算机科学和统计学学士背景。",
            interests: "我的方向聚焦 AI 与大语言模型，包括 RAG、长期记忆、模型集成和智能体应用。",
            goals: "我希望构建实用可靠的 AI 系统，把机器学习方法、软件工程能力和真实用户需求结合起来。",
            name_label: "姓名",
            email_label: "邮箱",
            education_label: "教育",
            education_value: "哥伦比亚大学 / 多伦多大学"
        },

        // Education Section
        education: {
            title: "教育背景",
            columbia_degree: "理学硕士",
            columbia_program: "计算机科学",
            columbia_university: "哥伦比亚大学，美国纽约",
            focus_title: "学术方向",
            columbia_focus: "计算机科学研究生学习，重点关注人工智能、大语言模型、RAG、机器学习与软件系统方向。",
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
            minecraft_title: "网络游戏《我的世界》私人商业化服务器",
            minecraft_role: "开发与运营",
            minecraft_point1: "从 0 到 1 完全独立完成游戏机制设计、开发、运营、商业化：累计吸引 10,000+名独立玩家，并每日维持 100+同时在线活跃用户数。",
            minecraft_point2: "建立了极具粘性的玩家社区，通过针对性的反馈循环（如聊天群、游戏内邮件、投票和问卷调查等方式）优化游戏体验，使玩家留存率提升了 55%。",
            minecraft_point3: "编写万字世界观背景、开发原创插件、将 NPC 对话接入 AI 大模型、设计游戏关卡以及商业化机制（会员订阅和虚拟商品）。",
            minecraft_point4: "通过创建玩家 QQ 社群、在游戏相关论坛开展数字营销的方式驱动服务器玩家增长，实现每日新增注册 20+玩家。",
            club_title: "多大中文社团 UTChinese",
            club_role: "技术部部长",
            club_point1: "建立了俱乐部网站并促进了各部门之间的合作，简化了100多名成员的活动参与。",
            cssu_title: "多伦多大学计算机科学系官方平台全栈开发",
            cssu_role: "全栈开发实习生",
            cssu_point1: "以压倒性票数在 2025 年多伦多大学网页开发竞赛中从 61 支队伍中荣获第一名；随后受教授邀请，继续将该项目开发为多伦多大学计算机科学系的官方数字化奖励营销平台。",
            cssu_point2: "通过提示词工程和上下文引导，引入大语言模型协同开发（Vibe Coding），将自然语言产品需求精准转化为技术规格。开发了基于 React.js、Node.js、Express.js、Prisma、PostgreSQL 的全栈架构。通过 GitHub Actions 实现 CI/CD。",
            trustmark_title: "数字内容可信溯源与艺术品认证应用开发",
            trustmark_role: "研究助理 | 导师: Daniel Chun 教授",
            trustmark_point1: "针对 AIGC 时代数字媒体深度伪造内容泛滥的痛点，精准定位了传统 C2PA 内容凭证在图像压缩和截图中极易遭遇“元数据剥离”的关键脆弱性。",
            trustmark_point2: "设计并实现了融合 TrustMark 隐形水印与 C2PA 内容凭证的混合溯源框架。创新性地提出“元数据硬绑定 + 水印软绑定”的持久内容凭证方案。",
            trustmark_point3: "奖项与资金支持：获多伦多大学国际体验中心（CIE）提名，荣获 SREP 暑期科研交换项目奖学金（共 20,000 人民币）。"
        },

        // Projects Section
        projects: {
            title: "项目",
            filter_all: "全部",
            filter_ux: "人机交互",
            filter_data: "数据分析",
            filter_dev: "软件开发",
            
            utchinese_title: "多大中文社团 UTChinese",
            utchinese_desc: "为多伦多大学中文学生组织开发的综合网络平台，提供双语支持、文化活动展示和社区互动功能，采用现代化交互界面设计。",
            
            financial_title: "用户体验/人机交互驱动的财务管理应用设计",
            financial_desc: "通过18次访谈、170份问卷和情境观察领导形成性研究。设计并测试原型，任务成功率提高32%。开发高保真Figma原型；满意度达到95%。",
            
            nba_title: "NBA球员得分决定因素的数据驱动评估",
            nba_desc: "对 1,400+条 NBA 球员记录进行全面的数据清洗与探索性数据分析。使用 AIC/BIC 变量选择法建模并优化了多元线性回归模型。执行多重共线性检查、异常值分析，并通过 Box-Cox 变换使数据满足模型假设。",
            
            tetris_title: "MIPS汇编语言俄罗斯方块游戏",
            tetris_desc: "在MIPS汇编中实现核心俄罗斯方块机制，包括方块生成、移动、旋转和碰撞检测。设计了带有位图显示的动态像素UI和集成键盘控制。",
            
            todo_title: "基于Java的待办事项管理应用",
            todo_desc: "实施“清洁架构”和高级设计模式（建造者、观察者、策略）。使用JUnit 5实现100%测试覆盖率；集成Todoist API实现云同步。",
            
            othello_title: "基于对抗搜索的智能黑白棋游戏代理",
            othello_desc: "通过实现带Alpha-Beta剪枝的Minimax算法开发智能游戏代理。设计基于棋子差异、机动性和角控制的启发式评估函数。",
            
            cssu_title: "多伦多大学计算机科学系官方平台全栈开发",
            cssu_desc: "通过提示词工程和上下文引导，引入大语言模型协同开发（Vibe Coding），将自然语言产品需求精准转化为技术规格。开发了基于 React.js、Node.js、Express.js、Prisma、PostgreSQL 的全栈架构，并通过 GitHub Actions 实现 CI/CD。",
            
            trustmark_title: "数字内容可信溯源与艺术品认证应用开发",
            trustmark_desc: "针对 AIGC 时代数字媒体深度伪造内容泛滥的痛点，设计并实现了融合 TrustMark 隐形水印与 C2PA 内容凭证的混合溯源框架。创新性地提出“元数据硬绑定 + 水印软绑定”的持久内容凭证方案。",

            // New Projects
            minecraft_ai_title: "网络游戏《我的世界》AI NPC 对话插件",
            minecraft_ai_desc: "独立完成面向《我的世界》服务器场景的 AI NPC 对话插件设计与开发，集成大模型基座 API、Embedding API、知识库 RAG 与模型驱动长期记忆机制，实现长对话中的知识召回与增强回复生成。",
            
            minecraft_economy_title: "Minecraft 服务器经济自适应调控插件",
            minecraft_economy_desc: "独立完成面向《我的世界》服务器场景的经济自适应调控插件设计与开发，基于玩家交易日志构建在线价值发现与风控算法，融合动态 AMM、双边报价、阶段化统计学习与异常交易识别。",
            
            windmill_title: "计算机图形学项目：风车的低语",
            windmill_desc: "构建了一套包含光线追踪、着色器管线与物理动画的渲染系统；利用动态 BVH 加速结构，实现了 11,000+三角形场景的实时高效求交计算。应用 Blinn-Phong 光照模型与精确的刚体动力学模拟。",
            
            os_title: "操作系统用户级线程库",
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