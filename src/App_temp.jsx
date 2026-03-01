import React, { useState, useEffect, useRef, Suspense, lazy } from 'react';

/* ─── BILINGUAL CONTENT ─── */
const CONTENT = {
  en: {
    company: 'Insight Beauty',
    tagline: 'See the Beauty in Every Detail',
    phone: '+44 07724707293',
    email: 'willanlimanbdut76999@gmail.com',
    whatsapp: '+44 07724707293',
    website: 'dongximei.vercel.app',

    nav: ['Products', 'Capabilities', 'Projects', 'Why Us', 'Contact'],

    hero: {
      eyebrow: 'Perforated Metal Excellence',
      headline: ['Precision Metal', 'Perforation Specialist'],
      sub: 'Engineered perforated metal panels for architectural drama, acoustic control, and solar shading. From concept to installation — we deliver custom-punched solutions at ±0.2mm tolerance. Factory direct. Global reach.',
      cta1: 'Request a Sample',
      cta2: 'View Our Work',
    },

    stats: [
      { n: '200+', label: 'Projects Delivered' },
      { n: '15+', label: 'Years Experience' },
      { n: '30+', label: 'Countries Served' },
      { n: '100%', label: 'Custom Engineering' },
    ],

    products: [
      {
        id: 'perforated',
        name: 'Perforated Metal Panel',
        short: 'Perforated',
        desc: 'Our flagship product. Engineered perforated metal panels for sun control, ventilation, acoustic treatment, and dramatic architectural expression. Custom hole patterns, open-area ratios, and edge profiles. The gold standard for modern facades, premium retail, museums, and cultural spaces.',
        specs: [
          'Material: Aluminum / Mild Steel / Stainless Steel',
          'Sheet Thickness: 1.0mm – 4.0mm',
          'Max Sheet Size: 2,500 × 1,250mm',
          'Hole Pattern: Round / Square / Hexagonal / Custom',
          'Hole Diameter: 1mm – 50mm',
          'Open Area Ratio: 10% – 55%',
          'Center Distance: 1.5× – 3× hole diameter',
          'Surface Treatment: Powder coating / Anodizing / Hot-dip galvanizing',
          'Tolerance: ±0.2mm (CNC punching)',
          'Acoustic Rating: Up to NRC 0.95',
          'Solar Control: Up to 85% shading',
        ],
        image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=900&q=80',
        color: '#f5f5ff',
      },
      {
        id: 'alucobond',
        name: 'Aluminum Composite Panel',
        short: 'ACP / ACM',
        desc: 'Lightweight, rigid, and weather-resistant backing solution. Our aluminum composite panels complement perforated designs and work standalone for high-rise facades, retail fit-outs, and commercial interiors. Available in 200+ finishes.',
        specs: [
          'Panel Thickness: 3mm / 4mm / 6mm',
          'Max Width: 1,600mm',
          'Max Length: 7,200mm',
          'Aluminum Skin: 0.3mm – 0.5mm per side',
          'Core Material: Polyethylene (PE) / FR mineral',
          'Surface Finish: PVDF 70% fluoropolymer coating',
          'Color Options: 200+ RAL / custom color matching',
          'Fire Rating: A2-s1,d0 / B1 available',
          'Weight: approx. 5–8 kg/m² (4mm panel)',
          'Warranty: 10-year coating warranty',
        ],
        image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&q=80',
        color: '#f0f4ff',
      },
      {
        id: 'custom',
        name: 'Custom Facade Engineering',
        short: 'Deep Design',
        desc: 'From concept to installation-ready shop drawings. We provide full facade deepening services: BIM coordination, structural calculations, connection detailing, and on-site technical support for complex metal facade systems.',
        specs: [
          'BIM / Revit coordination (LOD 300–400)',
          'Structural load analysis per EN / AISC / AS standards',
          'Wind load calculation & glazing design',
          'Thermal bridging & condensation analysis',
          'Shop drawings & fabrication packages (ISO)',
          'Prototype & mock-up testing',
          'Connection detailing & anchor design',
          'Seismic & movement joint engineering',
          'On-site quality inspection / installation supervision',
          'As-built documentation & O&M manuals',
        ],
        image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&q=80',
        color: '#f8f9fa',
      },
    ],

    capabilities: [
      { icon: '◉', title: 'Perforated Punching Expertise', body: 'CNC precision punching at ±0.2mm tolerance. Round, square, hexagonal, or custom hole patterns. Open-area ratios from 10% to 55%. In-house capability from concept to finished sheet.' },
      { icon: '◆', title: 'Acoustic & Solar Engineering', body: 'Calculate NRC ratings for sound absorption. Design solar shading at 50–85% reduction. Thermal analysis, airflow simulation, and visual comfort assessment included.' },
      { icon: '⊕', title: 'Material Versatility', body: 'Aluminum, mild steel, stainless steel — all punched to spec. Powder coat, anodize, hot-dip galvanize, or raw finish. Custom edge profiles and framework integration.' },
      { icon: '◎', title: 'Project Management & Installation', body: 'From shop drawings to site installation. Weekly progress updates, quality inspections, and on-site technical support. We manage logistics and coordinate with architects & contractors.' },
    ],

    projects: [
      { name: 'Shopping Mall Atrium', location: 'Shenzhen, China', type: 'Perforated Panel Ceiling', sqm: '1,800 m²' },
      { name: 'Museum Feature Wall', location: "Xi'an, China", type: 'Custom Hexagonal Perforation', sqm: '2,100 m²' },
      { name: 'Airport Terminal Facade', location: 'Wuhan, China', type: 'Perforated + Acoustic Control', sqm: '9,000 m²' },
      { name: 'Corporate HQ Brise-Soleil', location: 'Guangzhou, China', type: 'Solar Shading Perforation', sqm: '4,200 m²' },
      { name: 'Retail Storefront', location: 'Hangzhou, China', type: 'Custom Perforated Curtain Wall', sqm: '1,200 m²' },
      { name: 'Hotel Tower Screening', location: 'Chengdu, China', type: 'Stainless Perforated Panels', sqm: '5,600 m²' },
    ],

    whyus: [
      { title: 'Factory Direct', body: 'No middlemen. We quote directly from our own production facility — lower cost, faster lead time.' },
      { title: 'English-Speaking Team', body: 'Dedicated English-speaking project managers from enquiry to delivery.' },
      { title: 'Sample Before Order', body: 'Full-size samples and system mock-ups provided before production commitment.' },
      { title: 'Export Experienced', body: 'Familiar with international logistics, trade terms, and customs documentation for smooth cross-border delivery.' },
    ],

    productsSection: {
      eyebrow: 'Product Range',
      headline: 'Engineered Metal Facade Solutions',
      specsLabel: 'Technical Specifications',
      enquireBtn: 'Enquire via WhatsApp',
      customNote: 'Custom sizes, finishes, and configurations available on request.',
    },

    capsSection: {
      eyebrow: 'What We Specialize In',
      headlineA: 'Perforated Metal',
      headlineB: 'Mastery',
      sub: 'From custom hole patterns to acoustic engineering, solar shading design, and precision CNC punching — we are the perforated metal specialists your architect is looking for.',
    },

    projectsSection: {
      eyebrow: 'Our Track Record',
      headlineA: 'Perforated Metal',
      headlineB: 'Project Gallery',
      requestNote: 'Complete portfolio of perforated and mixed-material projects available on request —',
    },

    whySection: {
      eyebrow: 'Why Choose Us',
      headline: ['Your Facade', 'Partner,', 'Not Just a Supplier'],
      body: 'We combine factory-direct pricing with international project management capability. Every project gets a dedicated coordinator, transparent timeline, and quality documentation.',
      cta: 'Start a Conversation',
    },

    contact: {
      getInTouch: 'Get in Touch',
      headline: 'Start Your Project',
      sub: 'Send us your drawings or a brief project description and we\'ll respond within 24 hours.',
      sendBtn: 'Send Enquiry',
      sentBtn: '✓ Mail Client Opened',
      namePh: 'Your Name *',
      companyPh: 'Company',
      emailPh: 'Email Address *',
      msgPh: 'Project details — material, area, location, timeline...',
      sendLabel: 'Send Us a Message',
      orWhatsapp: 'Or message us directly on WhatsApp for faster response.',
    },

    footer: {
      rights: '© 2025 Insight Beauty. All rights reserved.',
    },
  },

  zh: {
    company: '洞悉美',
    tagline: '洞察每一处细节之美',
    phone: '+86 17683775684',
    email: 'willanlimanbdut76999@gmail.com',
    whatsapp: '+86 17683775684',
    website: 'dongximei.vercel.app',

    nav: ['产品', '能力', '项目', '为什么选我们', '联系我们'],

    hero: {
      eyebrow: '穿孔金属板专家',
      headline: ['精密穿孔', '金属板系统'],
      sub: '为建筑创意、声学控制、遮阳美学而设计的穿孔金属板。从概念到安装——我们提供 ±0.2mm 精度的定制冲孔方案。工厂直供，全球交付。',
      cta1: '申请样品',
      cta2: '查看案例',
    },

    stats: [
      { n: '200+', label: '已交付项目' },
      { n: '15+', label: '年行业经验' },
      { n: '30+', label: '服务国家' },
      { n: '100%', label: '定制工程' },
    ],

    products: [
      {
        id: 'perforated',
        name: '穿孔金属板',
        short: '穿孔板',
        desc: '我们的明星产品。专为遮阳控制、通风、声学处理及建筑表达而设计的穿孔金属板。提供自定义孔型、开孔率及边缘型材。是现代建筑、高端零售、博物馆及文化空间的首选方案。',
        specs: [
          '材质：铝板 / 碳钢 / 不锈钢',
          '板材厚度：1.0mm – 4.0mm',
          '最大板幅：2,500 × 1,250mm',
          '孔型：圆形 / 方形 / 六边形 / 定制',
          '孔径：1mm – 50mm',
          '开孔率：10% – 55%',
          '孔间距：1.5× – 3× 孔径',
          '表面处理：静电喷涂 / 阳极氧化 / 热浸镀锌',
          '加工精度：±0.2mm（CNC 数控冲压）',
          '声学指数：NRC 达 0.95',
          '遮阳效果：可达 85% 遮光率',
        ],
        image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=900&q=80',
        color: '#f5f5ff',
      },
      {
        id: 'alucobond',
        name: '铝塑复合板',
        short: 'ACP / ACM',
        desc: '轻质、刚性、耐候性强。我们的铝塑复合板是穿孔板的完美配套，也可独立应用于高层幕墙、零售装修及商业内装。提供 200+ 种表面处理工艺。',
        specs: [
          '板材厚度：3mm / 4mm / 6mm',
          '最大宽度：1,600mm',
          '最大长度：7,200mm',
          '铝皮厚度：单面 0.3mm – 0.5mm',
          '芯层材料：聚乙烯（PE）/ 阻燃矿物芯',
          '表面涂层：PVDF 70% 氟碳涂料',
          '颜色选项：200+ RAL 色号 / 定制色彩匹配',
          '防火等级：A2-s1,d0 / B1 可选',
          '重量：约 5–8 kg/m²（4mm 板）',
          '质保：涂层 10 年质量保证',
        ],
        image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&q=80',
        color: '#f0f4ff',
      },
      {
        id: 'custom',
        name: '定制幕墙深化设计',
        short: '深化设计',
        desc: '从概念方案到可施工深化图纸，我们提供完整的幕墙深化服务：BIM 协调、结构计算、节点深化以及复杂金属幕墙系统的现场技术支持。',
        specs: [
          'BIM / Revit 协调（LOD 300–400）',
          '符合 EN / AISC / AS 标准的结构荷载分析',
          '风荷载计算及玻璃设计',
          '热桥分析及冷凝结露分析',
          '加工图及制造包（ISO 标准）',
          '样板制作及测试',
          '节点详图及锚固设计',
          '抗震及变形缝工程设计',
          '现场质量检查 / 安装监督',
          '竣工文件及运维手册',
        ],
        image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&q=80',
        color: '#f8f9fa',
      },
    ],

    capabilities: [
      { icon: '◉', title: '穿孔冲压专业', body: 'CNC 数控冲压，精度 ±0.2mm。圆形、方形、六边形或自定义孔型。开孔率 10% 至 55%。从概念到成品全程in-house完成。' },
      { icon: '◆', title: '声学与遮阳设计', body: '计算 NRC 吸音系数。设计 50–85% 的遮阳效果。包含热工分析、气流模拟、视觉舒适度评估。' },
      { icon: '⊕', title: '材料多样性', body: '铝板、碳钢、不锈钢——全部精密冲孔。静电喷涂、阳极氧化、热浸镀锌或原色。支持边缘定制和框架集成。' },
      { icon: '◎', title: '项目管理与安装', body: '从深化图到现场安装全程把控。每周进度报告、质量检查、现场技术支持。协调物流、与建筑师和承包商无缝对接。' },
    ],

    projects: [
      { name: '购物中心中庭', location: '中国 深圳', type: '穿孔板吊顶', sqm: '1,800 m²' },
      { name: '博物馆特色墙', location: '中国 西安', type: '自定义六边形穿孔', sqm: '2,100 m²' },
      { name: '机场航站楼', location: '中国 武汉', type: '穿孔板 + 声学控制', sqm: '9,000 m²' },
      { name: '企业总部遮阳', location: '中国 广州', type: '太阳能遮阳穿孔', sqm: '4,200 m²' },
      { name: '零售门店幕墙', location: '中国 杭州', type: '定制穿孔幕墙', sqm: '1,200 m²' },
      { name: '酒店塔楼屏风', location: '中国 成都', type: '不锈钢穿孔板', sqm: '5,600 m²' },
    ],

    whyus: [
      { title: '工厂直供', body: '无中间商，直接从我们自有生产基地报价，降低成本，缩短交期。' },
      { title: '英语服务团队', body: '专属英语国际项目经理，从询盘到交付全程跟进。' },
      { title: '先样后批量', body: '正式下单前提供实物尺寸样品及系统样板，确保您放心下单。' },
      { title: '出口经验丰富', body: '熟悉国际物流、贸易术语及海关文件，确保跨境交货顺畅无忧。' },
    ],

    productsSection: {
      eyebrow: '产品系列',
      headline: '工程级金属幕墙解决方案',
      specsLabel: '技术参数',
      enquireBtn: '通过 WhatsApp 询价',
      customNote: '可根据需求定制尺寸、表面处理及配置方案。',
    },

    capsSection: {
      eyebrow: '我们的专长',
      headlineA: '穿孔金属板',
      headlineB: '精通之道',
      sub: '从自定义孔型到声学工程、遮阳设计、精密数控冲压——我们是您建筑师正在寻找的穿孔金属板专家。',
    },

    projectsSection: {
      eyebrow: '项目案例',
      headlineA: '穿孔金属板',
      headlineB: '作品展示',
      requestNote: '更多穿孔及组合材料项目案例可应要求提供 —',
    },

    whySection: {
      eyebrow: '为什么选择我们',
      headline: ['您的幕墙', '合作伙伴，', '而非仅仅是供应商'],
      body: '我们将工厂直供价格与国际项目管理能力相结合。每个项目配备专属协调人、透明时间表及质量文件。',
      cta: '开始对话',
    },

    contact: {
      getInTouch: '联系我们',
      headline: '启动您的项目',
      sub: '发送图纸或简要项目描述，我们将在 24 小时内回复。',
      sendBtn: '发送询盘',
      sentBtn: '✓ 邮件客户端已打开',
      namePh: '您的姓名 *',
      companyPh: '公司名称',
      emailPh: '邮箱地址 *',
      msgPh: '项目详情 — 材料、面积、地点、时间节点...',
      sendLabel: '给我们留言',
      orWhatsapp: '或通过 WhatsApp 直接联系我们，获得更快回复。',
    },

    footer: {
      rights: '© 2025 洞悉美 (Insight Beauty). 保留所有权利。',
    },
  },
};

/* ─── HOOKS ─── */
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, vis];
}

/* ─── LOGO ─── */
