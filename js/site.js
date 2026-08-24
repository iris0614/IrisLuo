(function () {
  const STORAGE_KEY = "iris-lang";

  const I18N = {
    en: {
      doc_home: "Iris Luo · Data Scientist",
      doc_about: "About · Iris Luo",
      doc_projects: "Projects · Iris Luo",
      nav_home: "Home",
      nav_about: "About",
      nav_projects: "Projects",
      nav_brand: "Iris Luo",
      lang_label: "Language",

      hero_kicker: "Open to opportunities",
      hero_name: "Iris Luo",
      hero_role: "Data Scientist · Generative AI",
      hero_bio:
        "I build reliable data products across cleaning, visualization, modeling, and generative AI — with dual master’s degrees in Data Science and Economics.",
      cta_projects: "View projects",
      cta_resume: "Resume",
      cta_about: "About me",
      stat_years: "Years in data",
      stat_degrees: "Master’s degrees",
      stat_projects: "Selected projects",
      photo_caption: "UBC MDS · Vancouver",
      photo_alt: "Portrait of Iris Luo",

      skills_label: "Skills",
      skills_ml: "Machine learning & AI",
      skills_data: "Data & visualization",
      skills_eng: "Engineering",

      social_label: "Connect",
      social_copy: "The fastest way to reach me is email. LinkedIn and GitHub are always open too.",
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

      p_sql_title: "SQL Genius",
      p_sql_desc: "Natural-language SQL agent for SQLite and PostgreSQL — ask a question, get the query and the result.",
      p_air_title: "Airfield Hazards",
      p_air_desc: "Object detection pipeline for real-time bird tracking at airports, awarded Best Talk in UBC MDS.",
      p_churn_title: "Churn Insights",
      p_churn_desc: "End-to-end churn analysis: PostgreSQL ETL, Tableau, and a model bake-off across classic ML algorithms.",
      p_home_title: "HomeScope",
      p_home_desc: "Interactive real-estate analytics for investors, planners, and market analysts.",
      p_crypto_title: "CryptoPulse",
      p_crypto_desc: "Shiny dashboard for exploring cryptocurrency markets, with a focus on Bitcoin and Ethereum.",
      p_pyx_title: "Pyxplor",
      p_pyx_desc: "Python package that automates EDA across numeric, categorical, binary, and time-series data.",
      live: "Live",
      github: "GitHub",
      report: "Report",
      docs: "Docs",
      paper: "Paper",

      contact_title: "Let’s work together",
      contact_copy: "Available for data science, generative AI, and analytics roles.",
      contact_email: "Email me",
      footer_copy: "Designed as a bilingual portfolio.",
      footer_left: "© 2026 Iris Luo",

      about_kicker: "01 / Profile",
      about_title: "About",
      about_lead:
        "Data scientist with dual master’s degrees, a bias for clean pipelines, and a habit of turning messy questions into decisions.",
      about_resume: "Download resume",

      about_do_kicker: "02 / Focus",
      about_do_title: "What I do",
      about_do_clean_title: "Data cleaning & transformation",
      about_do_clean:
        "Protect data integrity and prepare datasets for serious analysis with disciplined wrangling and QA.",
      about_do_viz_title: "Analysis & visualization",
      about_do_viz:
        "Turn complex tables into clear stories with Power BI, Tableau, and Python — so teams can actually decide.",
      about_do_ai_title: "ML, AI & generative AI",
      about_do_ai:
        "Apply models and language systems to real problems: NLP, SQL automation, computer vision, and forecasting.",

      about_edu_kicker: "03 / Education",
      about_edu_title: "Education",
      about_edu_mds: "Master of Data Science (GPA: 4.23/4.33)",
      about_edu_mds_school: "University of British Columbia · Vancouver, BC",
      about_edu_mds_time: "Sep 2023 – Nov 2024",
      about_edu_mds_courses:
        "Relevant coursework: Statistical Inference and Computation, Spatial and Temporal Models, Supervised Learning, Unsupervised Learning, Data Visualization, Algorithms and Data Structures, Collaborative Software Development, Databases and Data Retrieval, Web and Cloud Computing.",
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
        "Built an object detection pipeline with Faster R-CNN, YOLOv8, and RetinaNet, reaching 60% mAP for bird-strike mitigation at Chengdu Shuangliu Airport — above the previous 49.5% best.",
      about_cap_2:
        "Pioneered synthetic data augmentation with airplane imagery, improving realism and accuracy in complex airfield scenes.",
      about_cap_3:
        "Managed large-scale datasets on AWS and optimized models for real-time inference. Awarded Best Talk in the UBC MDS program.",

      about_work_kicker: "05 / Experience",
      about_work_title: "Work experience",
      about_job1_org: "Beijing Academy of Social Sciences",
      about_job1_role: "Data Analyst Intern",
      about_job1_time: "Sep 2019 – Feb 2020",
      about_job1_1:
        "Optimized MySQL queries, cutting page load time by 15% and speeding retrieval by 20%.",
      about_job1_2:
        "Analyzed 20,000+ records, uncovering insights that improved student engagement metrics by 12%.",
      about_job1_3:
        "Built reports and dashboards for senior leadership, supporting a 10% gain in operational efficiency.",
      about_job2_org: "Deloitte",
      about_job2_role: "Audit and Assurance Intern",
      about_job2_time: "Jul 2019 – Aug 2019",
      about_job2_1:
        "Ran financial analysis on major corporates, including Guangshen Railway, lifting assessment accuracy by 20% across 5,000+ data points in Python.",
      about_job2_2:
        "Completed data audits and 15+ Power BI reports that reduced senior review time by 30%.",
      about_job3_org: "Zhongshan Securities",
      about_job3_role: "Investment Banking Intern",
      about_job3_time: "Apr 2019 – Jun 2019",
      about_job3_1:
        "Built valuation and financial models with 90% accuracy on valuation premiums, using growth, profitability, and competitive analysis.",
      about_job3_2:
        "Streamlined due diligence by 20% through deeper financial and capital-structure review.",
      about_job4_org: "Agricultural Bank of China",
      about_job4_role: "Risk Management Intern",
      about_job4_time: "Jul 2018 – Aug 2018",
      about_job4_1:
        "Applied machine learning to 4,000+ loans, improving customer rating and risk-assessment accuracy by 10%.",
      about_job4_2:
        "Worked with the risk team to fold model insights into production financial models.",

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
        "Gold Award · Fourth ‘Internet+’ University Students Innovation and Entrepreneurship Competition, Hubei.",
      about_vol_a2:
        "Gold (Hubei) and Silver (national) · 2018 China University Students’ Entrepreneurship Competition.",
      about_vol_a3:
        "Gold (Hubei) and Silver (national) · 2018 China Youth Volunteer Service Project Competition.",

      about_ach_kicker: "07 / Strengths",
      about_ach_title: "Achievements & skills",
      about_ach_1_title: "Data visualization",
      about_ach_1:
        "Visual systems that cut report review time by 30%, using Tableau, Power BI, and Python.",
      about_ach_2_title: "Generative AI",
      about_ach_2:
        "Shipped NL-to-SQL and other generative workflows that compress the path from question to decision.",
      about_ach_3_title: "Operating leverage",
      about_ach_3:
        "Automated analysis prep and reduced turnaround by 25% through cleaner pipelines.",
      about_ach_4_title: "Insight generation",
      about_ach_4:
        "Translate dense datasets into business intelligence that leadership can act on.",

      proj_kicker: "Selected work",
      proj_title: "Projects",
      proj_lead: "A few systems I have designed, built, and shipped — from generative SQL to computer vision on the airfield.",
      proj_sql_desc:
        "An AI SQL agent that turns plain language into queries. Users upload a SQLite database, ask a question, and receive both the SQL and the result — so non-technical teammates can still interrogate data.",
      proj_sql_tech: "Python (Streamlit, Pandas), OpenAI API, SQL (PostgreSQL, SQLite)",
      proj_sql_ai: "OpenAI models interpret the question and generate SQL dynamically.",
      proj_air_desc:
        "A cost-effective object detection pipeline for real-time bird identification at airports, using RetinaNet, YOLOv8, and careful preprocessing to raise both performance and safety.",
      proj_air_tech: "Python (Altair, Matplotlib, PyTorch, Pandas, NumPy, Pytest), Makefile, AWS",
      proj_air_models: "Models: RetinaNet, YOLOv8, Faster R-CNN",
      proj_air_pipe: "Project pipeline",
      proj_air_scripts: "How the scripts interact",
      proj_churn_desc:
        "ETL and cleaning in PostgreSQL, richer visuals in Tableau, then a model comparison in Jupyter — KNN, Decision Tree, Random Forest, RBF SVM, and Logistic Regression — after thorough EDA.",
      proj_churn_tech: "Python (Altair, Matplotlib, Plotly, PyTorch, Seaborn, Pandas, NumPy), Tableau, PostgreSQL",
      proj_home_desc:
        "An analytics platform for the real-estate market. Built for investors, developers, analysts, and urban planners who need a clear read on what actually moves property value.",
      proj_home_tech: "Python (Altair, Plotly, Pandas, PyArrow), Dash",
      proj_home_dash: "Dashboard",
      proj_crypto_desc:
        "A Shiny dashboard for exploring cryptocurrency data, with a focus on Bitcoin and Ethereum.",
      proj_crypto_tech: "Python (Plotly), R (dplyr), Shiny",
      proj_pyx_desc:
        "A Python package that automates exploratory data analysis for numeric, categorical, binary, and time-series data — less boilerplate, faster first look.",
      proj_pyx_tech: "Python (PyPI, Pytest, Seaborn, Pandas), Poetry, Cookiecutter",
      tech: "Tech",
    },
    zh: {
      doc_home: "罗念一 · 数据科学家",
      doc_about: "关于 · 罗念一",
      doc_projects: "项目 · 罗念一",
      nav_home: "首页",
      nav_about: "关于",
      nav_projects: "项目",
      nav_brand: "罗念一",
      lang_label: "语言",

      hero_kicker: "正在关注新机会",
      hero_name: "罗念一",
      hero_role: "数据科学家 · 生成式 AI",
      hero_bio:
        "我把数据清洗、可视化、建模和生成式 AI 做成可交付的产品。拥有数据科学与经济学双硕士学位，关注靠谱的流水线，而不是演示文稿。",
      cta_projects: "查看项目",
      cta_resume: "简历",
      cta_about: "关于我",
      stat_years: "数据相关经验",
      stat_degrees: "硕士学位",
      stat_projects: "精选项目",
      photo_caption: "UBC 数据科学硕士 · 温哥华",
      photo_alt: "罗念一的肖像",

      skills_label: "技能",
      skills_ml: "机器学习与 AI",
      skills_data: "数据与可视化",
      skills_eng: "工程能力",

      social_label: "联系",
      social_copy: "最快的方式是发邮件。LinkedIn 和 GitHub 也随时欢迎。",
      social_email: "邮箱",
      social_email_hint: "iris0614ubc@gmail.com",
      social_linkedin: "领英",
      social_linkedin_hint: "iris-luo",
      social_github: "GitHub",
      social_github_hint: "iris0614",
      aria_email: "给罗念一发邮件",
      aria_linkedin: "罗念一的领英主页",
      aria_github: "罗念一的 GitHub",

      featured_kicker: "02 / 作品",
      featured_title: "精选项目",
      view_all: "全部项目",

      p_sql_title: "SQL Genius",
      p_sql_desc: "面向 SQLite 与 PostgreSQL 的自然语言 SQL 助手：提问，即可得到查询语句和结果。",
      p_air_title: "机场鸟击风险",
      p_air_desc: "机场场景下的实时鸟类目标检测流水线，获 UBC 数据科学硕士项目 Best Talk。",
      p_churn_title: "流失洞察",
      p_churn_desc: "完整流失分析链路：PostgreSQL ETL、Tableau 可视化，以及经典机器学习模型对比。",
      p_home_title: "HomeScope",
      p_home_desc: "面向投资人、规划者和市场分析师的交互式房地产分析产品。",
      p_crypto_title: "CryptoPulse",
      p_crypto_desc: "用于探索加密货币市场的 Shiny 仪表盘，重点覆盖比特币与以太坊。",
      p_pyx_title: "Pyxplor",
      p_pyx_desc: "自动完成数值、类别、二元与时序数据探索性分析的 Python 包。",
      live: "线上演示",
      github: "代码仓库",
      report: "报告",
      docs: "文档",
      paper: "论文",

      contact_title: "可以一起做点什么",
      contact_copy: "开放数据科学、生成式 AI 与分析相关的机会。",
      contact_email: "发邮件",
      footer_copy: "双语作品集。",
      footer_left: "© 2026 罗念一",

      about_kicker: "01 / 简介",
      about_title: "关于",
      about_lead: "数据科学家，双硕士背景。习惯把乱的问题收成干净的流水线，再变成可以拍板的结论。",
      about_resume: "下载简历",

      about_do_kicker: "02 / 方向",
      about_do_title: "我在做什么",
      about_do_clean_title: "数据清洗与转换",
      about_do_clean: "用严格的 wrangling 和质检保护数据完整性，为后续分析备好可用数据集。",
      about_do_viz_title: "分析与可视化",
      about_do_viz: "用 Power BI、Tableau 和 Python 把复杂表格讲清楚，让团队真的能做决定。",
      about_do_ai_title: "机器学习、AI 与生成式 AI",
      about_do_ai: "把模型与语言模型用到真实问题上：自然语言处理、SQL 自动化、计算机视觉与预测。",

      about_edu_kicker: "03 / 教育",
      about_edu_title: "教育经历",
      about_edu_mds: "数据科学硕士（GPA: 4.23/4.33）",
      about_edu_mds_school: "英属哥伦比亚大学 · 加拿大温哥华",
      about_edu_mds_time: "2023.09 – 2024.11",
      about_edu_mds_courses:
        "相关课程：统计推断与计算、时空模型、监督学习、无监督学习、数据可视化、算法与数据结构、协作软件开发、数据库与数据检索、Web 与云计算。",
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
        "搭建 Faster R-CNN、YOLOv8 与 RetinaNet 目标检测流水线，在成都双流机场鸟击防控场景达到 60% mAP，超过此前 49.5% 的最好成绩。",
      about_cap_2: "用飞机图像做合成数据增强，提升复杂机场场景下的真实感与预测精度。",
      about_cap_3: "在 AWS 上管理大规模数据，并优化模型以支持实时推理。该工作获 UBC MDS Best Talk。",

      about_work_kicker: "05 / 经历",
      about_work_title: "工作经历",
      about_job1_org: "北京市社会科学院",
      about_job1_role: "数据分析实习生",
      about_job1_time: "2019.09 – 2020.02",
      about_job1_1: "优化 MySQL 查询，页面加载时间下降 15%，数据检索速度提升 20%。",
      about_job1_2: "分析 2 万余条记录，发现可落地的洞察，学生参与指标提升 12%。",
      about_job1_3: "为管理层制作报表与仪表盘，支撑运营效率提升约 10%。",
      about_job2_org: "德勤",
      about_job2_role: "审计与鉴证实习生",
      about_job2_time: "2019.07 – 2019.08",
      about_job2_1: "用 Python 对广深铁路等企业做财务分析，覆盖 5000+ 数据点，评估准确度提升 20%。",
      about_job2_2: "完成数据审计并用 Power BI 产出 15+ 份报表，将高层审阅时间缩短 30%。",
      about_job3_org: "中山证券",
      about_job3_role: "投资银行实习生",
      about_job3_time: "2019.04 – 2019.06",
      about_job3_1: "完成估值与财务建模，结合增长、盈利与竞争力分析，估值溢价准确率达 90%。",
      about_job3_2: "通过更深入的财务与资本结构尽调，将流程效率提升 20%。",
      about_job4_org: "中国农业银行",
      about_job4_role: "风险管理实习生",
      about_job4_time: "2018.07 – 2018.08",
      about_job4_1: "对 4000+ 笔贷款应用机器学习，客户评级与风险评估准确度提升 10%。",
      about_job4_2: "与风险团队协作，将模型结论并入现有财务模型。",

      about_vol_kicker: "06 / 公益",
      about_vol_title: "志愿经历",
      about_vol_org: "乡村教育赋能计划",
      about_vol_time: "2017.01 – 2018.12",
      about_vol_1: "参与设计 1+1+1 模式，为 502 名乡村教师匹配大学生，覆盖线上研究与实践培训。",
      about_vol_2: "协助搭建 1+X 志愿者管理机制，覆盖 600+ 志愿者和 20 所小学。",
      about_vol_3: "协助对接公益组织与科技公司，争取到约 2.9 万美元资金。",
      about_vol_4: "参与乡村教师培训，引入 ICT、混合教学与翻转课堂，建设互联网教学资源库。",
      about_vol_a1: "金奖 · 第四届“互联网+”大学生创新创业大赛（湖北）。",
      about_vol_a2: "湖北金奖、全国银奖 · 2018 年中国“互联网+”大学生创新创业大赛相关赛道。",
      about_vol_a3: "湖北金奖、全国银奖 · 2018 年中国青年志愿服务项目大赛。",

      about_ach_kicker: "07 / 能力",
      about_ach_title: "成果与技能",
      about_ach_1_title: "数据可视化",
      about_ach_1: "用 Tableau、Power BI 与 Python 把报表审阅时间缩短 30%。",
      about_ach_2_title: "生成式 AI",
      about_ach_2: "落地自然语言转 SQL 等生成式流程，压缩从提问到决策的路径。",
      about_ach_3_title: "效率",
      about_ach_3: "通过自动化与更干净的流水线，将分析准备时间缩短 25%。",
      about_ach_4_title: "洞察",
      about_ach_4: "把密集数据翻译成管理层能执行的业务判断。",

      proj_kicker: "作品",
      proj_title: "项目",
      proj_lead: "从生成式 SQL 到机场计算机视觉，这里是我设计、实现并交付过的一部分系统。",
      proj_sql_desc:
        "把自然语言转成 SQL 的智能体。用户上传 SQLite 数据库、用白话提问，即可同时得到 SQL 与查询结果，让非技术同事也能问数据。",
      proj_sql_tech: "Python（Streamlit、Pandas）、OpenAI API、SQL（PostgreSQL、SQLite）",
      proj_sql_ai: "由 OpenAI 模型动态理解问题并生成 SQL。",
      proj_air_desc:
        "面向机场实时鸟类识别的高性价比目标检测流水线，使用 RetinaNet、YOLOv8 与精细预处理，同时提升性能与安全性。",
      proj_air_tech: "Python（Altair、Matplotlib、PyTorch、Pandas、NumPy、Pytest）、Makefile、AWS",
      proj_air_models: "尝试模型：RetinaNet、YOLOv8、Faster R-CNN",
      proj_air_pipe: "项目流水线",
      proj_air_scripts: "脚本之间的调用关系",
      proj_churn_desc:
        "在 PostgreSQL 中完成 ETL 与清洗，用 Tableau 加强可视化，再在 Jupyter 中对比 KNN、决策树、随机森林、RBF SVM 与逻辑回归。",
      proj_churn_tech: "Python（Altair、Matplotlib、Plotly、PyTorch、Seaborn、Pandas、NumPy）、Tableau、PostgreSQL",
      proj_home_desc: "面向房地产市场的分析平台，帮助投资人、开发商、分析师与城市规划者看清影响房价的关键变量。",
      proj_home_tech: "Python（Altair、Plotly、Pandas、PyArrow）、Dash",
      proj_home_dash: "仪表盘",
      proj_crypto_desc: "交互式加密货币 Shiny 仪表盘，重点观察比特币与以太坊。",
      proj_crypto_tech: "Python（Plotly）、R（dplyr）、Shiny",
      proj_pyx_desc: "面向数值、类别、二元与时序数据的自动 EDA Python 包，减少样板代码，加快第一轮分析。",
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
