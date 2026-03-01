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
    whatsapp: '+44 07724707293',
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
function LogoMark() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" style={{cursor:'pointer'}}>
      <defs>
        <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2563eb" stopOpacity="1" />
          <stop offset="100%" stopColor="#1e40af" stopOpacity="1" />
        </linearGradient>
      </defs>
      
      <circle cx="22" cy="22" r="20" stroke="url(#logo-grad)" strokeWidth="1.8" fill="none"/>
      
      <circle cx="22" cy="6" r="2.2" fill="url(#logo-grad)"/>
      <circle cx="32.4" cy="9.6" r="2.2" fill="url(#logo-grad)"/>
      <circle cx="37.6" cy="19.2" r="2.2" fill="url(#logo-grad)"/>
      <circle cx="35.2" cy="30.8" r="2.2" fill="url(#logo-grad)"/>
      <circle cx="24.4" cy="38" r="2.2" fill="url(#logo-grad)"/>
      <circle cx="11.6" cy="36" r="2.2" fill="url(#logo-grad)"/>
      <circle cx="4.8" cy="26" r="2.2" fill="url(#logo-grad)"/>
      <circle cx="6.4" cy="14.2" r="2.2" fill="url(#logo-grad)"/>
      <circle cx="11.6" cy="7.2" r="2.2" fill="url(#logo-grad)"/>
      
      <circle cx="22" cy="22" r="4.5" stroke="url(#logo-grad)" strokeWidth="1.2" fill="none" opacity="0.7"/>
    </svg>
  );
}

/* ─── OPTIMIZED IMAGE COMPONENT ─── */
function OptimizedImg({ src, alt, ...props }) {
  const srcBase = src.split('?')[0];
  const srcSet = `${srcBase}?w=400&q=70 400w, ${srcBase}?w=600&q=75 600w, ${srcBase}?w=900&q=80 900w`;
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      srcSet={srcSet}
      sizes="(max-width: 640px) 100vw, (max-width: 900px) 75vw, 600px"
      {...props}
    />
  );
}

/* ─── NAV ─── */
function Nav({ C, lang, setLang }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);

  const ids = ['products', 'capabilities', 'projects', 'whyus', 'contact'];

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? 'rgba(255,255,255,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(37,99,235,0.1)' : '1px solid transparent',
      transition: 'all 0.35s',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <LogoMark />
          <div>
            <div style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 700, fontSize: '1.1rem', color: scrolled ? '#1a1a2e' : '#1a1a2e', lineHeight: 1.1 }}>{C.company}</div>
            <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '0.55rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: scrolled ? '#6b7280' : '#6b7280' }}>{C.tagline}</div>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
          {C.nav.map((n, i) => (
            <a key={n} href={`#${ids[i]}`} style={{
              textDecoration: 'none', fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 500,
              fontSize: '0.78rem', letterSpacing: '0.12em', textTransform: 'uppercase',
              color: scrolled ? '#1a1a2e' : '#1a1a2e', opacity: 0.75,
              transition: 'opacity 0.2s',
            }}
              onMouseEnter={e => e.target.style.opacity = '1'}
              onMouseLeave={e => e.target.style.opacity = '0.75'}
            >{n}</a>
          ))}
          <button onClick={() => setLang(lang === 'en' ? 'zh' : 'en')} style={{
            background: 'none', border: '1px solid rgba(37,99,235,0.3)', color: '#2563eb',
            padding: '6px 14px', borderRadius: 2, cursor: 'pointer',
            fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 600,
            fontSize: '0.72rem', letterSpacing: '0.1em',
          }}>{lang === 'en' ? '中文' : 'EN'}</button>
        </div>
      </div>
    </nav>
  );
}

/* ─── HERO ─── */
function Hero({ C, lang }) {
  const ctaHref = lang === 'zh' 
    ? `tel:${C.phone.replace(/\s/g, '')}` 
    : `https://wa.me/${C.whatsapp.replace(/\D/g, '')}`;
  const isPhone = lang === 'zh';

  return (
    <section style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center',
      position: 'relative', overflow: 'hidden', background: '#ffffff',
    }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1800&q=80)', backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(0.92) saturate(0.8)', opacity: 0.08 }}/>
      <div style={{ position: 'relative', maxWidth: 1200, margin: '0 auto', padding: '160px 40px 180px' }}>
        <div style={{ maxWidth: 680 }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: 24, animation: 'fadeUp 0.7s both' }}>
            <span style={{ display: 'inline-block', width: 40, height: 1, background: '#2563eb', marginRight: 14 }}/>
            <span style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 600, fontSize: '0.72rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#2563eb' }}>{C.hero.eyebrow}</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2.8rem, 6vw, 4.8rem)', lineHeight: 1.05, marginBottom: 28, animation: 'fadeUp 0.7s 0.15s both', color: '#1a1a2e' }}>
            {C.hero.headline[0]}<br/>
            <span style={{ color: '#2563eb', fontStyle: 'italic' }}>{C.hero.headline[1]}</span>
          </h1>
          <p style={{ fontSize: '1.05rem', color: '#4b5563', maxWidth: 540, marginBottom: 48, lineHeight: 1.8, animation: 'fadeUp 0.7s 0.4s both' }}>{C.hero.sub}</p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', animation: 'fadeUp 0.7s 0.55s both' }}>
            <a 
              href={ctaHref} 
              target={isPhone ? undefined : '_blank'} 
              rel={isPhone ? undefined : 'noreferrer'} 
              style={{
                background: '#2563eb', color: '#ffffff',
                padding: '14px 36px', borderRadius: 2, textDecoration: 'none',
                fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700,
                fontSize: '0.82rem', letterSpacing: '0.14em', textTransform: 'uppercase',
                boxShadow: '0 8px 32px rgba(37,99,235,0.25)',
              }}>{C.hero.cta1}</a>
            <button onClick={() => document.getElementById('capabilities')?.scrollIntoView({ behavior: 'smooth' })} style={{
              background: 'none', border: '1px solid rgba(37,99,235,0.4)', color: '#2563eb',
              padding: '14px 36px', borderRadius: 2, cursor: 'pointer',
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 600,
              fontSize: '0.82rem', letterSpacing: '0.14em', textTransform: 'uppercase',
            }}>{C.hero.cta2}</button>
          </div>
        </div>
      </div>

      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, borderTop: '1px solid rgba(37,99,235,0.1)', background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(8px)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)' }}>
          {C.stats.map((s, i) => (
            <div key={i} style={{ padding: '28px 0', textAlign: 'center', borderRight: i < 3 ? '1px solid rgba(37,99,235,0.08)' : 'none' }}>
              <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2.2rem', fontWeight: 700, color: '#2563eb', lineHeight: 1 }}>{s.n}</div>
              <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#6b7280', marginTop: 6 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── PRODUCTS ─── */
function Products({ C, lang }) {
  const [ref, vis] = useInView();
  const [active, setActive] = useState(0);
  const p = C.products[active];
  const sec = C.productsSection;
  
  const enquireHref = lang === 'zh'
    ? `tel:${C.phone.replace(/\s/g, '')}`
    : `https://wa.me/${C.whatsapp.replace(/\D/g,'')}?text=Hi, I'm interested in ${encodeURIComponent(p.name)}`;
  const isPhone = lang === 'zh';

  return (
    <section id="products" style={{ padding: '100px 0', background: '#f8f9fa' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px' }} ref={ref}>
        <div style={{ marginBottom: 64 }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
            <span style={{ display: 'inline-block', width: 40, height: 1, background: '#2563eb', marginRight: 14 }}/>
            <span style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 600, fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#2563eb' }}>{sec.eyebrow}</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.4rem)', color: '#1a1a2e', opacity: vis ? 1 : 0, transform: vis ? 'none' : 'translateY(20px)', transition: 'all 0.7s' }}>{sec.headline}</h2>
        </div>

        <div style={{ display: 'flex', gap: 0, borderBottom: '1px solid rgba(37,99,235,0.12)', marginBottom: 48, flexWrap: 'wrap' }}>
          {C.products.map((prod, i) => (
            <button key={prod.id} onClick={() => setActive(i)} style={{
              background: 'none', border: 'none', cursor: 'pointer', padding: '14px 32px',
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 600,
              fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase',
              color: active === i ? '#2563eb' : '#6b7280',
              borderBottom: active === i ? '2px solid #2563eb' : '2px solid transparent',
              marginBottom: -1, transition: 'all 0.2s',
            }}>{prod.short}</button>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }} className="product-grid">
          <div>
            <h3 style={{ fontSize: '2.2rem', marginBottom: 20, color: '#1a1a2e' }}>{p.name}</h3>
            <p style={{ color: '#4b5563', lineHeight: 1.9, marginBottom: 28, fontSize: '0.95rem' }}>{p.desc}</p>

            <div style={{ width: '100%', height: 230, borderRadius: 4, overflow: 'hidden', border: '1px solid rgba(37,99,235,0.1)', marginBottom: 28, position: 'relative' }}>
              <OptimizedImg
                src={p.image} alt={p.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.6s' }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
              />
            </div>

            <a href={enquireHref}
              target={isPhone ? undefined : '_blank'} 
              rel={isPhone ? undefined : 'noreferrer'} 
              style={{
                display: 'inline-block',
                background: '#2563eb', color: '#ffffff',
                padding: '12px 28px', borderRadius: 2, textDecoration: 'none',
                fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700,
                fontSize: '0.78rem', letterSpacing: '0.14em', textTransform: 'uppercase',
              }}>{sec.enquireBtn}</a>
          </div>

          <div style={{ background: '#ffffff', border: '1px solid rgba(37,99,235,0.1)', padding: 36, borderRadius: 4, boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
            <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 600, fontSize: '0.68rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#2563eb', marginBottom: 24 }}>{sec.specsLabel}</div>
            {p.specs.map((s, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 14, padding: '10px 0', borderBottom: i < p.specs.length - 1 ? '1px solid rgba(37,99,235,0.06)' : 'none' }}>
                <span style={{ color: '#2563eb', fontSize: '0.5rem', marginTop: 6, flexShrink: 0 }}>◆</span>
                <span style={{ fontSize: '0.88rem', color: '#374151', lineHeight: 1.5 }}>{s}</span>
              </div>
            ))}
            <div style={{ marginTop: 24, padding: '14px 18px', background: 'rgba(37,99,235,0.04)', border: '1px solid rgba(37,99,235,0.1)', borderRadius: 2 }}>
              <div style={{ fontSize: '0.78rem', color: '#2563eb', fontFamily: 'Barlow Condensed, sans-serif', letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.8 }}>{sec.customNote}</div>
            </div>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:768px){.product-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}

/* ─── CAPABILITIES ─── */
function Capabilities({ C }) {
  const [ref, vis] = useInView();
  const sec = C.capsSection;
  return (
    <section id="capabilities" style={{ padding: '100px 0', background: '#ffffff', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=1400&q=60)', backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(1.1) saturate(0.3)', opacity: 0.04 }}/>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(37,99,235,0.04) 1px, transparent 1px)', backgroundSize: '20px 20px' }}/>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px', position: 'relative' }} ref={ref}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 64, flexWrap: 'wrap', gap: 24 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
              <span style={{ display: 'inline-block', width: 40, height: 1, background: '#2563eb', marginRight: 14 }}/>
              <span style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 600, fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#2563eb' }}>{sec.eyebrow}</span>
            </div>
            <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.4rem)', color: '#1a1a2e' }}>{sec.headlineA}<br/><span style={{ color: '#2563eb', fontStyle: 'italic' }}>{sec.headlineB}</span></h2>
          </div>
          <p style={{ maxWidth: 360, color: '#4b5563', fontSize: '0.95rem', lineHeight: 1.8 }}>{sec.sub}</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 1, background: 'rgba(37,99,235,0.06)' }} className="caps-grid">
          {C.capabilities.map((cap, i) => (
            <div key={i} style={{ background: '#ffffff', padding: '40px 32px', opacity: vis ? 1 : 0, transform: vis ? 'none' : 'translateY(24px)', transition: `all 0.6s ${i * 0.12}s` }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(37,99,235,0.03)'}
              onMouseLeave={e => e.currentTarget.style.background = '#ffffff'}
            >
              <div style={{ fontSize: '1.8rem', color: '#2563eb', marginBottom: 20 }}>{cap.icon}</div>
              <h4 style={{ fontSize: '1.1rem', marginBottom: 14, color: '#1a1a2e' }}>{cap.title}</h4>
              <p style={{ fontSize: '0.88rem', color: '#6b7280', lineHeight: 1.8 }}>{cap.body}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:900px){.caps-grid{grid-template-columns:1fr 1fr!important}} @media(max-width:500px){.caps-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}

/* ─── PROJECTS ─── */
function Projects({ C }) {
  const [ref, vis] = useInView();
  const sec = C.projectsSection;
  const projImages = [
    'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=70',
    'https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?w=600&q=70',
    'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=600&q=70',
    'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&q=70',
    'https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=600&q=70',
    'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=70',
  ];

  return (
    <section id="projects" style={{ padding: '100px 0', background: '#f8f9fa' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px' }} ref={ref}>
        <div style={{ marginBottom: 64 }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
            <span style={{ display: 'inline-block', width: 40, height: 1, background: '#2563eb', marginRight: 14 }}/>
            <span style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 600, fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#2563eb' }}>{sec.eyebrow}</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.4rem)', color: '#1a1a2e' }}>{sec.headlineA}<br/><span style={{ color: '#2563eb', fontStyle: 'italic' }}>{sec.headlineB}</span></h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }} className="proj-grid">
          {C.projects.map((proj, i) => (
            <div key={i} style={{
              position: 'relative', overflow: 'hidden', borderRadius: 3, cursor: 'default',
              opacity: vis ? 1 : 0, transform: vis ? 'none' : 'translateY(20px)',
              transition: `all 0.5s ${i * 0.08}s`,
            }}
              onMouseEnter={e => {
                e.currentTarget.querySelector('.pimg').style.transform = 'scale(1.06)';
                e.currentTarget.querySelector('.pov').style.opacity = '1';
              }}
              onMouseLeave={e => {
                e.currentTarget.querySelector('.pimg').style.transform = 'scale(1)';
                e.currentTarget.querySelector('.pov').style.opacity = '0.7';
              }}
            >
              <div style={{ height: 230, overflow: 'hidden', background: '#e5e7eb' }}>
                <OptimizedImg className="pimg" src={projImages[i]} alt={proj.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.5s', filter: 'brightness(0.7)' }}
                />
              </div>
              <div className="pov" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(26,26,46,0.92) 35%, rgba(26,26,46,0.1) 100%)', opacity: 0.7, transition: 'opacity 0.3s' }}/>
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '20px 24px' }}>
                <div style={{ fontSize: '0.6rem', fontFamily: 'Barlow Condensed, sans-serif', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(37,99,235,0.8)', marginBottom: 6 }}>Project {String(i+1).padStart(2,'0')}</div>
                <h4 style={{ fontSize: '1.05rem', color: '#ffffff', marginBottom: 4, fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic' }}>{proj.name}</h4>
                <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.7)', marginBottom: 10 }}>{proj.location}</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: 10 }}>
                  <span style={{ fontSize: '0.75rem', color: '#93c5fd', fontFamily: 'Barlow Condensed, sans-serif', letterSpacing: '0.08em' }}>{proj.type}</span>
                  <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)' }}>{proj.sqm}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p style={{ textAlign: 'center', marginTop: 40, color: '#6b7280', fontSize: '0.85rem' }}>
          {sec.requestNote} <a href={`mailto:${C.email}`} style={{ color: '#2563eb', textDecoration: 'none' }}>{C.email}</a>
        </p>
      </div>
      <style>{`@media(max-width:900px){.proj-grid{grid-template-columns:1fr 1fr!important}} @media(max-width:500px){.proj-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}

/* ─── WHY US ─── */
function WhyUs({ C, lang }) {
  const [ref, vis] = useInView();
  const sec = C.whySection;
  const ctaHref = lang === 'zh' 
    ? `tel:${C.phone.replace(/\s/g, '')}` 
    : `https://wa.me/${C.whatsapp.replace(/\D/g,'')}`;
  const isPhone = lang === 'zh';
  
  return (
    <section id="whyus" style={{ padding: '100px 0', background: '#ffffff', position: 'relative' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px' }} ref={ref}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }} className="why-grid">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
              <span style={{ display: 'inline-block', width: 40, height: 1, background: '#2563eb', marginRight: 14 }}/>
              <span style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 600, fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#2563eb' }}>{sec.eyebrow}</span>
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3.2rem)', marginBottom: 28, color: '#1a1a2e' }}>
              {sec.headline[0]}<br/><span style={{ color: '#2563eb', fontStyle: 'italic' }}>{sec.headline[1]}</span><br/>{sec.headline[2]}
            </h2>
            <p style={{ color: '#4b5563', lineHeight: 1.9, marginBottom: 36, fontSize: '0.95rem' }}>{sec.body}</p>
            <a 
              href={ctaHref} 
              target={isPhone ? undefined : '_blank'} 
              rel={isPhone ? undefined : 'noreferrer'} 
              style={{
                display: 'inline-block',
                background: '#2563eb', color: '#ffffff',
                padding: '14px 36px', borderRadius: 2, textDecoration: 'none',
                fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700,
                fontSize: '0.82rem', letterSpacing: '0.14em', textTransform: 'uppercase',
                boxShadow: '0 8px 32px rgba(37,99,235,0.2)',
              }}>{sec.cta}</a>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: 'rgba(37,99,235,0.08)' }}>
            {C.whyus.map((w, i) => (
              <div key={i} style={{ background: '#ffffff', padding: '32px 28px', opacity: vis ? 1 : 0, transform: vis ? 'none' : 'translateY(16px)', transition: `all 0.5s ${0.2 + i * 0.1}s` }}>
                <div style={{ width: 32, height: 32, border: '1px solid rgba(37,99,235,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18, color: '#2563eb', fontSize: '0.7rem' }}>0{i+1}</div>
                <h4 style={{ fontSize: '1rem', color: '#1a1a2e', marginBottom: 10, fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic' }}>{w.title}</h4>
                <p style={{ fontSize: '0.84rem', color: '#6b7280', lineHeight: 1.75 }}>{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`@media(max-width:900px){.why-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}

/* ─── CONTACT ─── */
function Contact({ C }) {
  const [form, setForm] = useState({ name: '', company: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const ct = C.contact;

  const handleSubmit = () => {
    if (!form.name || !form.email) return;
    const subject = encodeURIComponent(`Project Enquiry from ${form.name} — ${form.company}`);
    const body = encodeURIComponent(`Name: ${form.name}\nCompany: ${form.company}\nEmail: ${form.email}\n\n${form.message}`);
    window.open(`mailto:${C.email}?subject=${subject}&body=${body}`);
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const inp = {
    width: '100%', background: '#f8f9fa', border: '1px solid rgba(37,99,235,0.15)',
    color: '#1a1a2e', padding: '14px 18px', borderRadius: 2, fontSize: '0.92rem',
    fontFamily: 'Barlow, sans-serif', outline: 'none', boxSizing: 'border-box',
  };

  return (
    <section id="contact" style={{ padding: '100px 0', background: '#f8f9fa', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(37,99,235,0.03) 1px, transparent 1px)', backgroundSize: '24px 24px' }}/>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px', position: 'relative' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80 }} className="contact-grid">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
              <span style={{ display: 'inline-block', width: 40, height: 1, background: '#2563eb', marginRight: 14 }}/>
              <span style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 600, fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#2563eb' }}>{ct.getInTouch}</span>
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3.2rem)', marginBottom: 20, color: '#1a1a2e' }}>{ct.headline}</h2>
            <p style={{ color: '#4b5563', lineHeight: 1.9, marginBottom: 48, fontSize: '0.95rem' }}>{ct.sub}</p>
            {[
              { label: 'WhatsApp', value: C.whatsapp, href: `https://wa.me/${C.whatsapp.replace(/\D/g,'')}`, icon: '💬' },
              { label: 'Phone', value: C.phone, href: `tel:${C.phone}`, icon: '☎️' },
              { label: 'Email', value: C.email, href: `mailto:${C.email}`, icon: '✉' },
              { label: 'Website', value: C.website, href: `https://${C.website}`, icon: '🌐' },
            ].map(m => (
              <a key={m.label} href={m.href} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 18, padding: '18px 0', borderBottom: '1px solid rgba(37,99,235,0.08)', textDecoration: 'none' }}>
                <div style={{ width: 42, height: 42, border: '1px solid rgba(37,99,235,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', flexShrink: 0, borderRadius: 2 }}>{m.icon}</div>
                <div>
                  <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#6b7280', marginBottom: 3 }}>{m.label}</div>
                  <div style={{ color: '#2563eb', fontSize: '0.92rem' }}>{m.value}</div>
                </div>
              </a>
            ))}
          </div>
          <div style={{ background: '#ffffff', border: '1px solid rgba(37,99,235,0.1)', padding: 40, borderRadius: 4, boxShadow: '0 4px 24px rgba(0,0,0,0.04)' }}>
            <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 600, fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#2563eb', marginBottom: 28 }}>{ct.sendLabel}</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
              <input style={inp} placeholder={ct.namePh} value={form.name} onChange={e => setForm(p => ({...p, name: e.target.value}))} onFocus={e => e.target.style.borderColor='rgba(37,99,235,0.5)'} onBlur={e => e.target.style.borderColor='rgba(37,99,235,0.15)'}/>
              <input style={inp} placeholder={ct.companyPh} value={form.company} onChange={e => setForm(p => ({...p, company: e.target.value}))} onFocus={e => e.target.style.borderColor='rgba(37,99,235,0.5)'} onBlur={e => e.target.style.borderColor='rgba(37,99,235,0.15)'}/>
            </div>
            <input style={{...inp, marginBottom: 16}} placeholder={ct.emailPh} value={form.email} onChange={e => setForm(p => ({...p, email: e.target.value}))} onFocus={e => e.target.style.borderColor='rgba(37,99,235,0.5)'} onBlur={e => e.target.style.borderColor='rgba(37,99,235,0.15)'}/>
            <textarea style={{...inp, minHeight: 120, resize: 'vertical', marginBottom: 20}} placeholder={ct.msgPh} value={form.message} onChange={e => setForm(p => ({...p, message: e.target.value}))} onFocus={e => e.target.style.borderColor='rgba(37,99,235,0.5)'} onBlur={e => e.target.style.borderColor='rgba(37,99,235,0.15)'}/>
            <button onClick={handleSubmit} style={{
              width: '100%', background: sent ? 'rgba(37,99,235,0.1)' : '#2563eb',
              color: sent ? '#2563eb' : '#ffffff', border: sent ? '1px solid #2563eb' : 'none',
              padding: '15px 0', borderRadius: 2, cursor: 'pointer',
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700,
              fontSize: '0.82rem', letterSpacing: '0.14em', textTransform: 'uppercase', transition: 'all 0.3s',
            }}>{sent ? ct.sentBtn : ct.sendBtn}</button>
            <p style={{ marginTop: 14, fontSize: '0.78rem', color: '#6b7280', textAlign: 'center', lineHeight: 1.5 }}>{ct.orWhatsapp}</p>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:768px){.contact-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}

/* ─── FOOTER ─── */
function Footer({ C }) {
  return (
    <footer style={{ background: '#ffffff', borderTop: '1px solid rgba(37,99,235,0.1)', padding: '40px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 20 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <LogoMark />
          <div>
            <div style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 700, fontSize: '1rem', color: '#1a1a2e' }}>{C.company}</div>
            <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '0.58rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#6b7280' }}>{C.tagline}</div>
          </div>
        </div>
        <div style={{ fontSize: '0.8rem', color: '#9ca3af', textAlign: 'center', lineHeight: 1.8 }}>
          <div>{C.website}</div>
          <div>{C.footer.rights}</div>
        </div>
        <div style={{ display: 'flex', gap: 16 }}>
          <a href={`https://wa.me/${C.whatsapp.replace(/\D/g,'')}`} target="_blank" rel="noreferrer" style={{ color: '#2563eb', fontSize: '0.78rem', textDecoration: 'none', fontFamily: 'Barlow Condensed, sans-serif', letterSpacing: '0.1em', textTransform: 'uppercase' }}>WhatsApp</a>
          <a href={`mailto:${C.email}`} style={{ color: '#2563eb', fontSize: '0.78rem', textDecoration: 'none', fontFamily: 'Barlow Condensed, sans-serif', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Email</a>
        </div>
      </div>
    </footer>
  );
}

/* ─── APP ─── */
export default function App() {
  const [lang, setLang] = useState('en');
  const C = CONTENT[lang];
  return (
    <>
      <Nav C={C} lang={lang} setLang={setLang} />
      <Hero C={C} lang={lang} />
      <Products C={C} lang={lang} />
      <Capabilities C={C} />
      <Projects C={C} />
      <WhyUs C={C} lang={lang} />
      <Contact C={C} />
      <Footer C={C} />
    </>
  );
}
