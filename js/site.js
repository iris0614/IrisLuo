(function () {
  const STORAGE_KEY = "iris-lang";

  const I18N = {
    en: {
      doc_home: "Iris Luo · Business Analyst",
      doc_about: "About · Iris Luo",
      doc_projects: "Projects · Iris Luo",
      nav_home: "Home",
      nav_about: "About",
      nav_projects: "Projects",
      nav_brand: "Iris Luo",
      lang_label: "Language",

      hero_kicker: "Open to new opportunities",
      hero_name: "Iris Luo",
      hero_role: "Business Analyst · Investment Insight",
      hero_bio:
        "Business analyst with dual master’s degrees in Data Science and Economics. I turn market signals, operating metrics, and messy data into decisions — insight first, models second.",
      cta_projects: "View projects",
      cta_resume: "Resume",
      cta_about: "About me",
      stat_years: "Years analyzing",
      stat_degrees: "Master’s degrees",
      stat_projects: "Selected projects",
      photo_caption: "UBC MDS · Vancouver",
      photo_alt: "Portrait of Iris Luo",

      skills_label: "Skills",
      skills_ml: "Business insight",
      skills_data: "Markets & risk",
      skills_eng: "Analysis toolkit",
      skills_kpi: "KPI analysis",
      skills_unit: "Unit economics",
      skills_decision: "Decision support",
      skills_valuation: "Valuation",
      skills_risk: "Risk",
      skills_invest: "Investment logic",
      skills_models: "Mental models",

      social_label: "Connect",
      social_copy: "Email is the fastest way to reach me. LinkedIn and GitHub work too.",
      social_email: "Email",
      social_email_hint: "iris0614ubc@gmail.com",
      social_linkedin: "LinkedIn",
      social_linkedin_hint: "iris-luo",
      social_github: "GitHub",
      social_github_hint: "iris0614",
      aria_email: "Email Iris Luo",
      aria_linkedin: "Iris Luo on LinkedIn",
      aria_github: "Iris Luo on GitHub",

      featured_kicker: "02 / Work",
      featured_title: "Selected projects",
      view_all: "All projects",
      other_kicker: "03 / Other",
      other_title: "Other work",
      other_lead: "Personal platforms for reading archives and investment research — how I think about markets.",

      p_notes_title: "Reading Notes",
      p_notes_desc:
        "A magazine-style journal of books and the thinking they leave. Volume 01, nineteen essays on cycles, risk, and decisions.",
      p_zen_title: "MarketZen",
      p_zen_desc:
        "A local investment journal. Log trades, keep principles, review the quality of decisions — data stays in the browser.",
      p_sql_title: "SQL Genius",
      p_sql_desc: "Ask a business question in plain language — get the metric, the query, and the answer.",
      p_air_title: "Airfield Hazards",
      p_air_desc: "Operational-risk system for real-time bird tracking at airports — a safety decision, awarded Best Talk in UBC MDS.",
      p_churn_title: "Churn Insights",
      p_churn_desc: "Retention economics: who leaves, why it matters, and which levers are worth pulling.",
      p_home_title: "HomeScope",
      p_home_desc: "What actually moves property value — for investors, planners, and market analysts.",
      p_crypto_title: "CryptoPulse",
      p_crypto_desc: "Market-structure dashboard for BTC, ETH, SOL, and BNB: spot vs futures volume, MA200 regime, and liquidation levels.",
      p_pyx_title: "Pyxplor",
      p_pyx_desc: "Faster first look at a dataset, so the analysis can start with the business question.",
      live: "Live",
      github: "GitHub",
      report: "Report",
      docs: "Docs",
      paper: "Paper",

      contact_title: "Let’s work together",
      contact_copy: "Open to roles in business analysis, investment research, and decision support.",
      contact_email: "Email me",
      footer_copy: "Designed as a bilingual portfolio.",
      footer_left: "© 2026 Iris Luo",

      about_kicker: "01 / Profile",
      about_title: "About",
      about_lead:
        "Business analyst with dual master’s degrees. I read metrics, risk, and investment logic across disciplines — so complex problems become decisions teams can act on.",
      about_resume: "Download resume",

      about_do_kicker: "02 / Focus",
      about_do_title: "How I work",
      about_do_clean_title: "Business metrics & insight",
      about_do_clean:
        "I start with the question that matters, then track the KPIs that move the business — growth, retention, unit economics, and where the story actually changes.",
      about_do_viz_title: "Risk & investment logic",
      about_do_viz:
        "Downside, regime, and capital structure come before the upside story. Markets, credit, and operations share the same discipline: know what can break.",
      about_do_ai_title: "Cross-disciplinary thinking",
      about_do_ai:
        "Economics, data, and product sense in one frame. I use models and tools when they sharpen a decision — not as the decision itself.",

      about_edu_kicker: "03 / Education",
      about_edu_title: "Education",
      about_edu_mds: "Master of Data Science (GPA: 4.23/4.33)",
      about_edu_mds_school: "University of British Columbia · Vancouver, BC",
      about_edu_mds_time: "Sep 2023 – Nov 2024",
      about_edu_mds_courses:
        "Coursework I use in analysis: statistical inference, spatial and temporal models, data visualization, databases, and collaborative software — plus supervised and unsupervised learning.",
      about_edu_mds_link: "Course descriptions",
      about_edu_berk: "Public Economics (Exchange)",
      about_edu_berk_gpa: "GPA: 3.7/4.0",
      about_edu_berk_school: "University of California, Berkeley · California, United States",
      about_edu_berk_time: "Jul 2021 – Aug 2021",
      about_edu_hust: "Master of Science in Economics (GPA: 86.7/100)",
      about_edu_hust_school: "Huazhong University of Science and Technology · Wuhan, China",
      about_edu_hust_time: "Sep 2020 – Jun 2023",
      about_edu_ccnu: "Bachelor of Science in Economics (GPA: 88.63/100)",
      about_edu_ccnu_school: "Central China Normal University · Wuhan, China",
      about_edu_ccnu_time: "Sep 2016 – Jun 2020",

      about_cap_kicker: "04 / Capstone",
      about_cap_title: "Capstone project",
      about_cap_role: "Illuminex AI · Data Scientist",
      about_cap_time: "Apr 2024 – Jun 2024",
      about_cap_1:
        "Raised bird-strike awareness at Chengdu Shuangliu Airport to 60% mAP — a safety outcome above the prior 49.5% best — so operations could see risk in time to act.",
      about_cap_2:
        "Built synthetic airfield scenes so the system would hold up in the real operating environment, not just the lab.",
      about_cap_3:
        "Ran the data and inference workflow on AWS so the team could use it in time. Awarded Best Talk in the UBC MDS program.",

      about_work_kicker: "05 / Experience",
      about_work_title: "Work experience",
      about_job1_org: "Beijing Academy of Social Sciences",
      about_job1_role: "Data Analyst Intern",
      about_job1_time: "Sep 2019 – Feb 2020",
      about_job1_1:
        "Sped up the queries behind leadership reports, cutting page load time by 15% and retrieval by 20%.",
      about_job1_2:
        "Read 20,000+ records for the questions that mattered, lifting student engagement metrics by 12%.",
      about_job1_3:
        "Built the dashboards senior leadership used to run the operation, supporting a 10% gain in efficiency.",
      about_job2_org: "Deloitte",
      about_job2_role: "Audit and Assurance Intern",
      about_job2_time: "Jul 2019 – Aug 2019",
      about_job2_1:
        "Ran financial analysis on major corporates, including Guangshen Railway — 5,000+ data points, 20% higher assessment accuracy.",
      about_job2_2:
        "Closed data audits and 15+ executive reports that cut senior review time by 30%.",
      about_job3_org: "Zhongshan Securities",
      about_job3_role: "Investment Banking Intern",
      about_job3_time: "Apr 2019 – Jun 2019",
      about_job3_1:
        "Built valuation models from growth, profitability, and competitive position, with 90% accuracy on valuation premiums.",
      about_job3_2:
        "Tightened due diligence by 20% through a closer read of financials and capital structure.",
      about_job4_org: "Agricultural Bank of China",
      about_job4_role: "Risk Management Intern",
      about_job4_time: "Jul 2018 – Aug 2018",
      about_job4_1:
        "Scored 4,000+ loans for customer rating and credit risk, lifting assessment accuracy by 10%.",
      about_job4_2:
        "Worked with the risk team to fold those findings into the models the desk already used.",

      about_vol_kicker: "06 / Community",
      about_vol_title: "Volunteer",
      about_vol_org: "Rural Education Empowerment Plan",
      about_vol_time: "Jan 2017 – Dec 2018",
      about_vol_1:
        "Helped design a 1+1+1 model pairing 502 rural teachers with university students for mutual learning, spanning research and practice.",
      about_vol_2:
        "Supported a 1+X volunteer management model that grew to 600+ volunteers and 20 primary schools.",
      about_vol_3:
        "Helped negotiate partnerships that secured $29,000 in funding from nonprofits and tech companies.",
      about_vol_4:
        "Contributed to teacher training with ICT, mixed-mode teaching, and flipped-classroom resources for rural schools.",
      about_vol_a1:
        "4th Internet+ · Hubei Provincial Gold",
      about_vol_a2:
        "2018 China College Students' Entrepreneurship Competition · Hubei Provincial Gold, National Silver",
      about_vol_a3:
        "2018 China Youth Volunteers Service Project · Hubei Provincial Gold, National Silver",

      about_ach_kicker: "07 / Strengths",
      about_ach_title: "Strengths",
      about_ach_1_title: "Business insight",
      about_ach_1:
        "Turn operations and markets into the few metrics leadership can act on.",
      about_ach_2_title: "Risk & investment",
      about_ach_2:
        "Valuation, credit, and market structure — downside first, then the upside story.",
      about_ach_3_title: "Mental models",
      about_ach_3:
        "Cross-disciplinary frames from economics, markets, and systems thinking.",
      about_ach_4_title: "Decision support",
      about_ach_4:
        "Dashboards and analysis that shorten the path from a question to a call.",

      proj_kicker: "Selected work",
      proj_title: "Projects",
      proj_lead: "From customer economics to market structure — selected work designed to support a decision.",
      proj_notes_desc:
        "An editorial journal with a magazine layout. Volume 01 now holds nineteen essays — cycles, risk, investing, and how to decide.",
      proj_notes_tech: "Next.js, TypeScript, Python",
      proj_zen_desc:
        "A local investment journal for logging trades, keeping principles, and reviewing the quality of decisions. Dashboard, trade log, diary, and review filters — stored in the browser. No signup, no cloud.",
      proj_zen_tech: "React, TypeScript, Vite, Tailwind CSS, Recharts",
      proj_sql_desc:
        "A decision-support agent that turns a business question into SQL and a result. Non-technical teammates can interrogate SQLite or PostgreSQL without waiting on a queue.",
      proj_sql_tech: "Python (Streamlit, Pandas), OpenAI API, SQL (PostgreSQL, SQLite)",
      proj_sql_ai: "Language models interpret the question and return the query plus the metric.",
      proj_air_desc:
        "Helped an airport see bird-strike risk in time to act. The system improved detection quality and supported a live safety workflow; awarded Best Talk in UBC MDS.",
      proj_air_tech: "Python (Altair, Matplotlib, PyTorch, Pandas, NumPy, Pytest), Makefile, AWS",
      proj_air_models: "Detection stack: RetinaNet, YOLOv8, Faster R-CNN",
      proj_air_pipe: "Project pipeline",
      proj_air_scripts: "How the scripts interact",
      proj_churn_desc:
        "End-to-end view of customer churn — from warehouse to executive dashboard — so the business can see which segments, prices, and behaviors actually drive attrition.",
      proj_churn_tech: "Python (Altair, Matplotlib, Plotly, PyTorch, Seaborn, Pandas, NumPy), Tableau, PostgreSQL",
      proj_home_desc:
        "A market-read for investors, developers, analysts, and planners who need to see what actually moves property value.",
      proj_home_tech: "Python (Altair, Plotly, Pandas, PyArrow), Dash",
      proj_home_dash: "Dashboard",
      proj_crypto_desc:
        "Built for traders and analysts who need more than a price chart. Compare spot and derivatives volume, read the 200-day regime, and map estimated liquidation clusters across BTC, ETH, SOL, and BNB — in an Apple-style interface.",
      proj_crypto_tech: "R (Shiny, dplyr), Python (Plotly), Binance spot & USDT-M APIs",
      proj_pyx_desc:
        "A first-pass toolkit across numeric, categorical, binary, and time-series data — less setup, more time on the decision.",
      proj_pyx_tech: "Python (PyPI, Pytest, Seaborn, Pandas), Poetry, Cookiecutter",
      tech: "Tech",
    },
    zh: {
      doc_home: "Iris Luo · 商业分析师",
      doc_about: "关于 · Iris Luo",
      doc_projects: "项目 · Iris Luo",
      nav_home: "首页",
      nav_about: "关于",
      nav_projects: "项目",
      nav_brand: "Iris Luo",
      lang_label: "语言",

      hero_kicker: "目前开放新机会",
      hero_name: "Iris Luo",
      hero_role: "商业分析师 · 投资洞察",
      hero_bio:
        "拥有数据科学与经济学双硕士学位，以商业分析与投资决策为核心。把市场信号、经营指标与复杂数据，转成可落地的判断。",
      cta_projects: "查看项目",
      cta_resume: "简历",
      cta_about: "关于我",
      stat_years: "分析相关经验",
      stat_degrees: "硕士学位",
      stat_projects: "精选项目",
      photo_caption: "UBC 数据科学硕士 · 温哥华",
      photo_alt: "Iris Luo 的肖像",

      skills_label: "技能",
      skills_ml: "商业洞察",
      skills_data: "市场与风险",
      skills_eng: "分析工具",
      skills_kpi: "业务指标",
      skills_unit: "单位经济",
      skills_decision: "决策支持",
      skills_valuation: "估值",
      skills_risk: "风险",
      skills_invest: "投资逻辑",
      skills_models: "思维模型",

      social_label: "联系",
      social_copy: "邮件是最快的联系方式，也欢迎通过 LinkedIn 或 GitHub 找到我。",
      social_email: "邮箱",
      social_email_hint: "iris0614ubc@gmail.com",
      social_linkedin: "领英",
      social_linkedin_hint: "iris-luo",
      social_github: "GitHub",
      social_github_hint: "iris0614",
      aria_email: "给 Iris Luo 发邮件",
      aria_linkedin: "Iris Luo 的领英主页",
      aria_github: "Iris Luo 的 GitHub",

      featured_kicker: "02 / 作品",
      featured_title: "精选项目",
      view_all: "全部项目",
      other_kicker: "03 / 其他",
      other_title: "其他作品",
      other_lead: "用于阅读积累与投资研究的个人平台，延续我对市场与决策的思考。",

      p_notes_title: "读书笔记",
      p_notes_desc: "杂志风私人读书笔记，把读过的书与思考留在纸上。目前第一辑十九篇，写周期、风险与决策。",
      p_zen_title: "观市",
      p_zen_desc: "极简本地投资手帐。记录交易、沉淀原则、复盘决策质量。数据只存在浏览器里，无需注册。",
      p_sql_title: "SQL Genius",
      p_sql_desc: "用白话提出业务问题，同时得到指标、查询语句和结果。",
      p_air_title: "机场鸟击风险",
      p_air_desc: "机场实时鸟击的运营风险系统——先看到风险，再做安全决策。获 UBC MDS Best Talk。",
      p_churn_title: "流失洞察",
      p_churn_desc: "客户留存经济学：谁在离开、为什么重要、哪些杠杆值得拉。",
      p_home_title: "HomeScope",
      p_home_desc: "看清真正推动房价的变量——给投资人、规划者与市场分析师。",
      p_crypto_title: "CryptoPulse",
      p_crypto_desc: "覆盖 BTC、ETH、SOL、BNB 的市场结构仪表盘：现货/合约量、MA200 趋势与清算线。",
      p_pyx_title: "Pyxplor",
      p_pyx_desc: "更快看清数据集的第一面，好让分析从业务问题开始。",
      live: "线上演示",
      github: "代码仓库",
      report: "报告",
      docs: "文档",
      paper: "论文",

      contact_title: "欢迎合作",
      contact_copy: "目前开放商业分析、投资研究与决策支持相关机会。",
      contact_email: "发邮件",
      footer_copy: "双语作品集。",
      footer_left: "© 2026 Iris Luo",

      about_kicker: "01 / 简介",
      about_title: "关于",
      about_lead: "商业分析师，经济学与数据科学双硕士。用跨学科思维看清业务指标、风险与投资逻辑，把复杂问题收成可执行的判断。",
      about_resume: "下载简历",

      about_do_kicker: "02 / 方向",
      about_do_title: "工作方式",
      about_do_clean_title: "业务指标与洞察",
      about_do_clean: "先问对问题，再盯住真正推动业务的指标——增长、留存、单位经济，以及故事在哪里转折。",
      about_do_viz_title: "风险管理与投资逻辑",
      about_do_viz: "先看下行、周期位置与资本结构，再谈上行叙事。市场、信贷与经营共用同一套纪律：先知道什么会坏。",
      about_do_ai_title: "跨学科思维模型",
      about_do_ai: "把经济学、数据与产品感觉放进同一框架。模型与工具用来锐化判断，而不是代替判断。",

      about_edu_kicker: "03 / 教育",
      about_edu_title: "教育经历",
      about_edu_mds: "数据科学硕士（GPA: 4.23/4.33）",
      about_edu_mds_school: "英属哥伦比亚大学 · 加拿大温哥华",
      about_edu_mds_time: "2023.09 – 2024.11",
      about_edu_mds_courses:
        "分析中用到的课程：统计推断、时空模型、数据可视化、数据库与协作开发，以及监督与无监督学习。",
      about_edu_mds_link: "课程介绍",
      about_edu_berk: "公共经济学（交换）",
      about_edu_berk_gpa: "GPA: 3.7/4.0",
      about_edu_berk_school: "加州大学伯克利分校 · 美国加利福尼亚",
      about_edu_berk_time: "2021.07 – 2021.08",
      about_edu_hust: "经济学硕士（GPA: 86.7/100）",
      about_edu_hust_school: "华中科技大学 · 中国武汉",
      about_edu_hust_time: "2020.09 – 2023.06",
      about_edu_ccnu: "经济学学士（GPA: 88.63/100）",
      about_edu_ccnu_school: "华中师范大学 · 中国武汉",
      about_edu_ccnu_time: "2016.09 – 2020.06",

      about_cap_kicker: "04 / 毕业项目",
      about_cap_title: "毕业设计",
      about_cap_role: "Illuminex AI · 数据科学家",
      about_cap_time: "2024.04 – 2024.06",
      about_cap_1:
        "在成都双流机场把鸟击风险识别做到 60% mAP，超过此前 49.5% 的最好成绩，让运营能及时看到风险并采取行动。",
      about_cap_2: "用合成机场场景检验系统在真实作业环境中的稳定性，而不只是实验室数字。",
      about_cap_3: "在 AWS 上跑通数据与推理流程，保证团队用得上。该工作获 UBC MDS Best Talk。",

      about_work_kicker: "05 / 经历",
      about_work_title: "工作经历",
      about_job1_org: "北京市社会科学院",
      about_job1_role: "数据分析实习生",
      about_job1_time: "2019.09 – 2020.02",
      about_job1_1: "理顺管理层报表背后的查询，页面加载下降 15%，检索速度提升 20%。",
      about_job1_2: "从 2 万余条记录里找出真正重要的问题，学生参与指标提升 12%。",
      about_job1_3: "为管理层做出用于日常经营的仪表盘，支撑运营效率提升约 10%。",
      about_job2_org: "德勤",
      about_job2_role: "审计与鉴证实习生",
      about_job2_time: "2019.07 – 2019.08",
      about_job2_1: "对广深铁路等企业做财务分析，覆盖 5000+ 数据点，评估准确度提升 20%。",
      about_job2_2: "完成数据审计并交付 15+ 份管理层报表，将高层审阅时间缩短 30%。",
      about_job3_org: "中山证券",
      about_job3_role: "投资银行实习生",
      about_job3_time: "2019.04 – 2019.06",
      about_job3_1: "从增长、盈利与竞争格局出发做估值模型，估值溢价准确率达 90%。",
      about_job3_2: "通过更细的财务与资本结构阅读，将尽调效率提升 20%。",
      about_job4_org: "中国农业银行",
      about_job4_role: "风险管理实习生",
      about_job4_time: "2018.07 – 2018.08",
      about_job4_1: "对 4000+ 笔贷款做客户评级与信用风险判断，评估准确度提升 10%。",
      about_job4_2: "与风险团队协作，把结论并入柜台已经在用的财务模型。",

      about_vol_kicker: "06 / 公益",
      about_vol_title: "志愿经历",
      about_vol_org: "乡村教育赋能计划",
      about_vol_time: "2017.01 – 2018.12",
      about_vol_1: "参与设计 1+1+1 模式，为 502 名乡村教师匹配大学生，覆盖线上研究与实践培训。",
      about_vol_2: "协助搭建 1+X 志愿者管理机制，覆盖 600+ 志愿者和 20 所小学。",
      about_vol_3: "协助对接公益组织与科技公司，争取到约 2.9 万美元资金。",
      about_vol_4: "参与乡村教师培训，引入 ICT、混合教学与翻转课堂，建设互联网教学资源库。",
      about_vol_a1: "第四届互联网+ · 湖北省金奖",
      about_vol_a2: "2018 创青春 · 湖北省金奖、全国银奖",
      about_vol_a3: "2018 中国青年志愿者服务项目 · 湖北省金奖、全国银奖",

      about_ach_kicker: "07 / 能力",
      about_ach_title: "能力侧重",
      about_ach_1_title: "商业洞察",
      about_ach_1: "把经营与市场收成管理层真正用得上的几项指标。",
      about_ach_2_title: "风险与投资",
      about_ach_2: "估值、信贷与市场结构——先看下行，再谈上行故事。",
      about_ach_3_title: "思维模型",
      about_ach_3: "从经济学、市场与系统思考里抽出可复用的跨学科框架。",
      about_ach_4_title: "决策支持",
      about_ach_4: "用分析与仪表盘缩短从提问到拍板的路径。",

      proj_kicker: "作品",
      proj_title: "项目",
      proj_lead: "从客户经济到市场结构，这里是我做过的一部分决策支持作品。",
      proj_notes_desc:
        "极简杂志风的私人读书笔记：纸张色、大留白、卡片错落。目前第一辑十九篇，记录周期、风险、投资与如何做判断。",
      proj_notes_tech: "Next.js、TypeScript、Python",
      proj_zen_desc:
        "极简本地投资手帐：仪表盘、交易记录、原则、日记与复盘。用来沉淀决策质量。数据只存在浏览器里，无需注册。",
      proj_zen_tech: "React、TypeScript、Vite、Tailwind CSS、Recharts",
      proj_sql_desc:
        "把业务问题转成 SQL 与结果的决策助手。非技术同事也能直接问 SQLite 或 PostgreSQL，不必排队等数仓。",
      proj_sql_tech: "Python（Streamlit、Pandas）、OpenAI API、SQL（PostgreSQL、SQLite）",
      proj_sql_ai: "由语言模型理解问题，同时返回查询语句与指标。",
      proj_air_desc:
        "帮助机场及时看到鸟击风险并采取行动。系统提升了识别质量，支撑实时安全流程，获 UBC MDS Best Talk。",
      proj_air_tech: "Python（Altair、Matplotlib、PyTorch、Pandas、NumPy、Pytest）、Makefile、AWS",
      proj_air_models: "检测方案：RetinaNet、YOLOv8、Faster R-CNN",
      proj_air_pipe: "项目流水线",
      proj_air_scripts: "脚本之间的调用关系",
      proj_churn_desc:
        "从数仓到管理层仪表盘的客户流失全景，看清哪些客群、价格与行为真正在推高流失。",
      proj_churn_tech: "Python（Altair、Matplotlib、Plotly、PyTorch、Seaborn、Pandas、NumPy）、Tableau、PostgreSQL",
      proj_home_desc: "给投资人、开发商、分析师与规划者的市场阅读：看清真正推动房价的变量。",
      proj_home_tech: "Python（Altair、Plotly、Pandas、PyArrow）、Dash",
      proj_home_dash: "仪表盘",
      proj_crypto_desc:
        "给需要看清市场结构的交易员与分析师：对比现货与合约成交量，读取 200 日均线所处区间，并估算 BTC、ETH、SOL、BNB 的清算密集区。界面为苹果风。",
      proj_crypto_tech: "R（Shiny、dplyr）、Python（Plotly）、币安现货与 U 本位合约接口",
      proj_pyx_desc: "对数值、类别、二元与时序数据做第一轮扫描，少花准备时间，多留给判断。",
      proj_pyx_tech: "Python（PyPI、Pytest、Seaborn、Pandas）、Poetry、Cookiecutter",
      tech: "技术栈",
    },
  };

  const ICONS = {
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3.5" y="5.5" width="17" height="13" rx="2"/><path d="M4 7.5 12 13l8-5.5"/></svg>',
    linkedin:
      '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.5 9.5H3.7V20h2.8V9.5ZM5.1 4a1.65 1.65 0 1 0 0 3.3 1.65 1.65 0 0 0 0-3.3ZM20.3 20h-2.8v-5.1c0-1.22-.02-2.78-1.7-2.78-1.7 0-1.96 1.32-1.96 2.69V20h-2.8V9.5h2.68v1.43h.04c.37-.7 1.28-1.44 2.64-1.44 2.82 0 3.34 1.86 3.34 4.28V20Z"/></svg>',
    github:
      '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.2a9.8 9.8 0 0 0-3.1 19.1c.49.09.67-.21.67-.47v-1.66c-2.73.59-3.3-1.16-3.3-1.16-.45-1.14-1.1-1.44-1.1-1.44-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.18-.25-4.47-1.09-4.47-4.86 0-1.07.38-1.95 1.02-2.64-.1-.25-.44-1.27.1-2.64 0 0 .83-.27 2.73 1.01a9.5 9.5 0 0 1 4.97 0c1.9-1.28 2.73-1.01 2.73-1.01.54 1.37.2 2.39.1 2.64.63.69 1.01 1.57 1.01 2.64 0 3.78-2.3 4.61-4.49 4.85.36.31.68.92.68 1.86v2.76c0 .26.18.57.68.47A9.8 9.8 0 0 0 12 2.2Z"/></svg>',
  };

  function pageKey() {
    const path = (location.pathname.split("/").pop() || "index.html").toLowerCase();
    if (path.includes("about")) return "doc_about";
    if (path.includes("projects")) return "doc_projects";
    return "doc_home";
  }

  function detectLang() {
    const param = new URLSearchParams(location.search).get("lang");
    if (param === "zh" || param === "en") return param;
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "zh" || saved === "en") return saved;
    const nav = (navigator.language || "en").toLowerCase();
    return nav.startsWith("zh") ? "zh" : "en";
  }

  function t(lang, key) {
    return (I18N[lang] && I18N[lang][key]) || I18N.en[key] || "";
  }

  function apply(lang) {
    const dict = I18N[lang] || I18N.en;
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    document.title = dict[pageKey()] || document.title;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key] != null) el.textContent = dict[key];
    });

    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      const key = el.getAttribute("data-i18n-aria");
      if (dict[key] != null) el.setAttribute("aria-label", dict[key]);
    });

    document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
      const key = el.getAttribute("data-i18n-alt");
      if (dict[key] != null) el.setAttribute("alt", dict[key]);
    });

    const brand = document.querySelector(".navbar-title");
    if (brand && dict.nav_brand) brand.textContent = dict.nav_brand;

    document.querySelectorAll(".navbar .nav-link").forEach((link) => {
      const href = (link.getAttribute("href") || "").toLowerCase();
      const span = link.querySelector(".menu-text") || link;
      if (href.includes("about")) span.textContent = dict.nav_about;
      else if (href.includes("projects")) span.textContent = dict.nav_projects;
      else if (href.includes("index") || href.endsWith("./") || href.endsWith("/")) {
        span.textContent = dict.nav_home;
      }
    });

    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.classList.toggle("is-active", btn.dataset.lang === lang);
    });
  }

  function setLang(lang) {
    localStorage.setItem(STORAGE_KEY, lang);
    apply(lang);
  }

  function injectToggle() {
    if (document.querySelector(".lang-switch")) return;
    const container = document.querySelector(".navbar-container");
    if (!container) return;

    const wrap = document.createElement("div");
    wrap.className = "lang-switch";
    wrap.setAttribute("role", "group");
    wrap.setAttribute("aria-label", "Language");

    ["zh", "en"].forEach((code) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "lang-btn";
      btn.dataset.lang = code;
      btn.textContent = code === "zh" ? "中" : "EN";
      btn.addEventListener("click", () => setLang(code));
      wrap.appendChild(btn);
    });

    container.appendChild(wrap);
  }

  function enhanceIcons() {
    document.querySelectorAll("[data-icon]").forEach((el) => {
      const name = el.getAttribute("data-icon");
      if (ICONS[name] && !el.querySelector("svg")) el.innerHTML = ICONS[name];
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    injectToggle();
    enhanceIcons();
    apply(detectLang());
  });
})();
