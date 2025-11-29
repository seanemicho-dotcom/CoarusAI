export type LanguageCode = 
  | "en" | "es" | "zh" | "fr" | "ko" | "hi" 
  | "de" | "it" | "ja" | "bn" | "ru" | "ar" | "pt";

export interface Translations {
  header: {
    home: string;
    findTools: string;
  };
  home: {
    heroTitle: string;
    heroSubtitle: string;
    heroTagline: string;
    getStarted: string;
    exploreCategories: string;
    trustedBy: string;
    featuresTitle: string;
    featuresSubtitle: string;
    feature1Title: string;
    feature1Desc: string;
    feature2Title: string;
    feature2Desc: string;
    feature3Title: string;
    feature3Desc: string;
    howItWorks: string;
    howItWorksSubtitle: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
    ctaTitle: string;
    ctaSubtitle: string;
    ctaButton: string;
    emailDirect: string;
    forBusinesses: string;
    forIndividuals: string;
    forBusinessesDesc: string;
    forIndividualsDesc: string;
    quickSteps: string;
    justSteps: string;
    quickSimple: string;
    categoriesTitle: string;
    categoriesSubtitle: string;
    valueTitle: string;
    valueDesc1: string;
    valueDesc2: string;
    valueBullet1: string;
    valueBullet2: string;
    valueBullet3: string;
    valueBullet4: string;
    benefitBusiness: string;
    benefitBusinessDesc: string;
    benefitIndividual: string;
    benefitIndividualDesc: string;
    benefitFresh: string;
    benefitFreshDesc: string;
    benefitMatch: string;
    benefitMatchDesc: string;
    smbStep1: string;
    smbStep1Desc: string;
    smbStep2: string;
    smbStep2Desc: string;
    smbStep3: string;
    smbStep3Desc: string;
    smbStep4: string;
    smbStep4Desc: string;
    indStep1: string;
    indStep1Desc: string;
    indStep2: string;
    indStep2Desc: string;
  };
  categories: {
    customerSupport: string;
    customerSupportDesc: string;
    salesCrm: string;
    salesCrmDesc: string;
    marketingSeo: string;
    marketingSeoDesc: string;
    financeOps: string;
    financeOpsDesc: string;
    hrHiring: string;
    hrHiringDesc: string;
    aiCompanions: string;
    aiCompanionsDesc: string;
    creativeStudio: string;
    creativeStudioDesc: string;
    learningSkills: string;
    learningSkillsDesc: string;
    personalProductivity: string;
    personalProductivityDesc: string;
    writingContent: string;
    writingContentDesc: string;
  };
  wizard: {
    pathQuestion: string;
    pathSmb: string;
    pathSmbDesc: string;
    pathIndividual: string;
    pathIndividualDesc: string;
    businessType: string;
    businessProblems: string;
    businessPriorities: string;
    workflowArea: string;
    personalIntent: string;
    personalGoals: string;
    back: string;
    next: string;
    skip: string;
    getResults: string;
    selectAll: string;
    findingTools: string;
    otherPlaceholder: string;
    customWorkflow: string;
    hoursToSave: string;
    hoursUnit: string;
    deviceQuestion: string;
    mobile: string;
    desktop: string;
    both: string;
  };
  results: {
    titleSmb: string;
    titleIndividual: string;
    subtitle: string;
    startOver: string;
    saveResults: string;
    visitTool: string;
    helpTitle: string;
    helpSubtitle: string;
    bookCall: string;
    requestQuote: string;
    personalSetupTitle: string;
    personalSetupSubtitle: string;
    personalSetupButton: string;
    price: string;
  };
  leadModal: {
    emailResultsTitle: string;
    emailResultsDesc: string;
    bookCallTitle: string;
    bookCallDesc: string;
    requestQuoteTitle: string;
    requestQuoteDesc: string;
    personalSetupTitle: string;
    personalSetupDesc: string;
    email: string;
    emailPlaceholder: string;
    name: string;
    namePlaceholder: string;
    message: string;
    messagePlaceholder: string;
    submit: string;
    submitting: string;
    successEmail: string;
    successBooking: string;
    error: string;
    cancel: string;
    success: string;
  };
  footer: {
    tagline: string;
    copyright: string;
    navigation: string;
    contact: string;
    privacyPolicy: string;
    termsOfService: string;
  };
}

const en: Translations = {
  header: {
    home: "Home",
    findTools: "Find AI Tools",
  },
  home: {
    heroTitle: "AI Tools for Everyone",
    heroSubtitle: "Answer a few questions and get personalized AI tool recommendations tailored to your business or personal goals.",
    heroTagline: "Discover the perfect AI tools for your needs",
    getStarted: "Find Your Tools",
    exploreCategories: "Explore Categories",
    trustedBy: "Helping businesses and individuals find the perfect AI solutions",
    featuresTitle: "Why Choose Coarus AI",
    featuresSubtitle: "We make finding the right AI tools simple and personalized",
    feature1Title: "Personalized Matching",
    feature1Desc: "Our smart algorithm analyzes your needs to recommend the perfect AI tools for you.",
    feature2Title: "Curated Selection",
    feature2Desc: "We carefully evaluate and select only the best AI tools across multiple categories.",
    feature3Title: "Time Saving",
    feature3Desc: "Skip the research. Get instant recommendations that match your specific requirements.",
    howItWorks: "How It Works",
    howItWorksSubtitle: "Simple steps to discover your perfect AI tools",
    step1Title: "Tell Us Your Needs",
    step1Desc: "Answer simple questions about your business or personal goals.",
    step2Title: "Get Matched",
    step2Desc: "Our algorithm finds the best AI tools for your specific situation.",
    step3Title: "Start Using AI",
    step3Desc: "Access your personalized recommendations and start transforming your work.",
    ctaTitle: "Ready to Find Your Perfect AI Tools?",
    ctaSubtitle: "Join thousands who have already discovered the right AI solutions for their needs.",
    ctaButton: "Find My AI Tools",
    emailDirect: "Or email us directly:",
    forBusinesses: "For Businesses",
    forIndividuals: "For Individuals",
    forBusinessesDesc: "Streamline operations with AI",
    forIndividualsDesc: "Boost your personal productivity",
    quickSteps: "Quick steps",
    justSteps: "Just 2 steps",
    quickSimple: "Quick & Simple",
    categoriesTitle: "Explore AI Categories",
    categoriesSubtitle: "Browse our curated collection of AI tools by category",
    valueTitle: "Why Coarus AI?",
    valueDesc1: "We help you cut through the noise and find AI tools that actually work for your needs.",
    valueDesc2: "Our recommendations are based on real-world testing and user feedback.",
    valueBullet1: "155+ curated AI tools",
    valueBullet2: "Updated weekly with new tools",
    valueBullet3: "Personalized recommendations",
    valueBullet4: "Free to use, no signup required",
    benefitBusiness: "For Businesses",
    benefitBusinessDesc: "Find AI tools to automate workflows, improve customer service, and boost productivity.",
    benefitIndividual: "For Individuals",
    benefitIndividualDesc: "Discover AI companions, creative tools, and productivity boosters for personal use.",
    benefitFresh: "Always Fresh",
    benefitFreshDesc: "We continuously update our database with the latest AI tools and remove outdated ones.",
    benefitMatch: "Perfect Match",
    benefitMatchDesc: "Our matching algorithm considers your specific needs to recommend the best tools.",
    smbStep1: "Select Your Path",
    smbStep1Desc: "Choose business or individual",
    smbStep2: "Share Your Needs",
    smbStep2Desc: "Tell us about your challenges",
    smbStep3: "Set Priorities",
    smbStep3Desc: "What matters most to you",
    smbStep4: "Get Results",
    smbStep4Desc: "Receive personalized recommendations",
    indStep1: "Tell Us Your Goals",
    indStep1Desc: "What do you want to achieve?",
    indStep2: "Get Matched",
    indStep2Desc: "Receive personalized AI tool picks",
  },
  categories: {
    customerSupport: "Customer Support",
    customerSupportDesc: "AI chatbots, helpdesks, and support automation",
    salesCrm: "Sales & CRM",
    salesCrmDesc: "AI-powered sales tools and CRM automation",
    marketingSeo: "Marketing & SEO",
    marketingSeoDesc: "Content creation, SEO optimization, and marketing automation",
    financeOps: "Finance & Ops",
    financeOpsDesc: "Accounting, invoicing, and financial automation",
    hrHiring: "HR & Hiring",
    hrHiringDesc: "Recruitment, onboarding, and HR management",
    aiCompanions: "AI Companions",
    aiCompanionsDesc: "Virtual friends, chat companions, and emotional support AI",
    creativeStudio: "Creative Studio",
    creativeStudioDesc: "Image generation, video editing, and creative AI tools",
    learningSkills: "Learning & Skills",
    learningSkillsDesc: "AI tutors, language learning, and skill development",
    personalProductivity: "Personal Productivity",
    personalProductivityDesc: "Task management, scheduling, and personal assistants",
    writingContent: "Writing & Content",
    writingContentDesc: "AI writing assistants, copywriting, and content creation",
  },
  wizard: {
    pathQuestion: "What brings you here today?",
    pathSmb: "Business Owner",
    pathSmbDesc: "I want to improve my business operations",
    pathIndividual: "Individual",
    pathIndividualDesc: "I want AI tools for personal use",
    businessType: "What type of business do you have?",
    businessProblems: "What challenges are you facing?",
    businessPriorities: "What are your top priorities?",
    workflowArea: "Which area needs the most help?",
    personalIntent: "What would you like AI to help with?",
    personalGoals: "What are your goals?",
    back: "Back",
    next: "Next",
    skip: "Skip",
    getResults: "Get My Recommendations",
    selectAll: "Select all that apply",
    findingTools: "Finding tools...",
    otherPlaceholder: "Other (please specify)",
    customWorkflow: "Custom workflow (optional)",
    hoursToSave: "Hours per week you want to save",
    hoursUnit: "hours",
    deviceQuestion: "What device(s) do you primarily use?",
    mobile: "Mobile",
    desktop: "Desktop",
    both: "Both",
  },
  results: {
    titleSmb: "Recommended AI Solutions for Your Business",
    titleIndividual: "Recommended AI Tools for You",
    subtitle: "Based on your answers, these tools and combinations may fit your needs.",
    startOver: "Start over",
    saveResults: "Save Results",
    visitTool: "Visit",
    helpTitle: "Want help setting this up?",
    helpSubtitle: "We can integrate these tools, automate workflows, and train your team.",
    bookCall: "Book Free AI Opportunity Call",
    requestQuote: "Request Implementation Quote",
    personalSetupTitle: "Want a personalized setup?",
    personalSetupSubtitle: "Book a 1:1 session to get your AI tools configured and working together.",
    personalSetupButton: "Book Personal AI Setup Session",
    price: "Price",
  },
  leadModal: {
    emailResultsTitle: "Save Your Results",
    emailResultsDesc: "Enter your email to receive your personalized AI tool recommendations.",
    bookCallTitle: "Book Your Free AI Opportunity Call",
    bookCallDesc: "Schedule a consultation with our AI implementation experts.",
    requestQuoteTitle: "Request Implementation Quote",
    requestQuoteDesc: "Get a custom quote for integrating these AI tools into your business.",
    personalSetupTitle: "Book Personal AI Setup",
    personalSetupDesc: "Get 1:1 help setting up your AI tools for maximum benefit.",
    email: "Email",
    emailPlaceholder: "your@email.com",
    name: "Name (optional)",
    namePlaceholder: "Your name",
    message: "Message (optional)",
    messagePlaceholder: "Tell us more...",
    submit: "Submit",
    submitting: "Submitting...",
    successEmail: "Your results have been saved!",
    successBooking: "We'll be in touch soon!",
    error: "Something went wrong. Please try again.",
    cancel: "Cancel",
    success: "Success",
  },
  footer: {
    tagline: "Helping you find the perfect AI tools",
    copyright: "All rights reserved.",
    navigation: "Navigation",
    contact: "Contact",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
  },
};

type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

function mergeWithEnglish(partial: DeepPartial<Translations>): Translations {
  const result = JSON.parse(JSON.stringify(en)) as Translations;
  
  function deepMerge(target: any, source: any) {
    for (const key in source) {
      if (source[key] !== undefined && source[key] !== null) {
        if (typeof source[key] === 'object' && !Array.isArray(source[key])) {
          if (!target[key]) target[key] = {};
          deepMerge(target[key], source[key]);
        } else {
          target[key] = source[key];
        }
      }
    }
  }
  
  deepMerge(result, partial);
  return result;
}

const es = mergeWithEnglish({
  header: {
    home: "Inicio",
    findTools: "Encontrar Herramientas IA",
  },
  home: {
    heroTitle: "Herramientas de IA para Todos",
    heroSubtitle: "Responde algunas preguntas y obtiene recomendaciones personalizadas de herramientas de IA.",
    heroTagline: "Descubre las herramientas de IA perfectas para tus necesidades",
    getStarted: "Encuentra Tus Herramientas",
    exploreCategories: "Explorar Categorias",
    trustedBy: "Ayudando a empresas e individuos a encontrar soluciones de IA perfectas",
    featuresTitle: "Por Que Elegir Coarus AI",
    featuresSubtitle: "Hacemos que encontrar las herramientas de IA adecuadas sea simple y personalizado",
    feature1Title: "Emparejamiento Personalizado",
    feature1Desc: "Nuestro algoritmo inteligente analiza tus necesidades para recomendarte las herramientas perfectas.",
    feature2Title: "Seleccion Curada",
    feature2Desc: "Evaluamos y seleccionamos cuidadosamente solo las mejores herramientas de IA.",
    feature3Title: "Ahorro de Tiempo",
    feature3Desc: "Salta la investigacion. Obtiene recomendaciones instantaneas que coinciden con tus requisitos.",
    howItWorks: "Como Funciona",
    howItWorksSubtitle: "Pasos simples para descubrir tus herramientas de IA perfectas",
    ctaTitle: "Listo para Encontrar tus Herramientas de IA Perfectas?",
    ctaSubtitle: "Unete a miles que ya han descubierto las soluciones de IA adecuadas.",
    ctaButton: "Encontrar Mis Herramientas de IA",
    emailDirect: "O escribenos directamente:",
    forBusinesses: "Para Negocios",
    forIndividuals: "Para Individuos",
    forBusinessesDesc: "Optimiza operaciones con IA",
    forIndividualsDesc: "Aumenta tu productividad personal",
    quickSteps: "Pasos rapidos",
    justSteps: "Solo 2 pasos",
    quickSimple: "Rapido y Simple",
    categoriesTitle: "Explora Categorias de IA",
    categoriesSubtitle: "Navega nuestra coleccion curada de herramientas de IA por categoria",
    valueTitle: "Por Que Coarus AI?",
    valueDesc1: "Te ayudamos a encontrar herramientas de IA que realmente funcionen para tus necesidades.",
    valueDesc2: "Nuestras recomendaciones se basan en pruebas del mundo real.",
    valueBullet1: "155+ herramientas de IA curadas",
    valueBullet2: "Actualizado semanalmente",
    valueBullet3: "Recomendaciones personalizadas",
    valueBullet4: "Gratis, sin registro",
    benefitBusiness: "Para Negocios",
    benefitBusinessDesc: "Encuentra herramientas de IA para automatizar flujos de trabajo y mejorar el servicio al cliente.",
    benefitIndividual: "Para Individuos",
    benefitIndividualDesc: "Descubre companeros de IA, herramientas creativas y potenciadores de productividad.",
    benefitFresh: "Siempre Fresco",
    benefitFreshDesc: "Actualizamos continuamente nuestra base de datos con las ultimas herramientas de IA.",
    benefitMatch: "Coincidencia Perfecta",
    benefitMatchDesc: "Nuestro algoritmo considera tus necesidades especificas para recomendar las mejores herramientas.",
    smbStep1: "Selecciona Tu Camino",
    smbStep1Desc: "Elige negocio o individual",
    smbStep2: "Comparte Tus Necesidades",
    smbStep2Desc: "Cuentanos sobre tus desafios",
    smbStep3: "Establece Prioridades",
    smbStep3Desc: "Que es lo mas importante para ti",
    smbStep4: "Obtiene Resultados",
    smbStep4Desc: "Recibe recomendaciones personalizadas",
    indStep1: "Cuentanos Tus Metas",
    indStep1Desc: "Que quieres lograr?",
    indStep2: "Obtiene Coincidencias",
    indStep2Desc: "Recibe selecciones de herramientas de IA personalizadas",
  },
  categories: {
    customerSupport: "Soporte al Cliente",
    customerSupportDesc: "Chatbots de IA, mesas de ayuda y automatizacion de soporte",
    salesCrm: "Ventas y CRM",
    salesCrmDesc: "Herramientas de ventas con IA y automatizacion de CRM",
    marketingSeo: "Marketing y SEO",
    marketingSeoDesc: "Creacion de contenido, optimizacion SEO y automatizacion de marketing",
    financeOps: "Finanzas y Ops",
    financeOpsDesc: "Contabilidad, facturacion y automatizacion financiera",
    hrHiring: "RRHH y Contratacion",
    hrHiringDesc: "Reclutamiento, incorporacion y gestion de RRHH",
    aiCompanions: "Companeros de IA",
    aiCompanionsDesc: "Amigos virtuales, companeros de chat y soporte emocional",
    creativeStudio: "Estudio Creativo",
    creativeStudioDesc: "Generacion de imagenes, edicion de video y herramientas creativas",
    learningSkills: "Aprendizaje",
    learningSkillsDesc: "Tutores de IA, aprendizaje de idiomas y desarrollo de habilidades",
    personalProductivity: "Productividad Personal",
    personalProductivityDesc: "Gestion de tareas, programacion y asistentes personales",
    writingContent: "Escritura y Contenido",
    writingContentDesc: "Asistentes de escritura de IA, redaccion y creacion de contenido",
  },
  wizard: {
    pathQuestion: "Que te trae aqui hoy?",
    pathSmb: "Dueno de Negocio",
    pathSmbDesc: "Quiero mejorar las operaciones de mi negocio",
    pathIndividual: "Individual",
    pathIndividualDesc: "Quiero herramientas de IA para uso personal",
    businessType: "Que tipo de negocio tienes?",
    businessProblems: "Que desafios enfrentas?",
    businessPriorities: "Cuales son tus principales prioridades?",
    workflowArea: "Que area necesita mas ayuda?",
    personalIntent: "En que te gustaria que la IA te ayudara?",
    personalGoals: "Cuales son tus objetivos?",
    back: "Atras",
    next: "Siguiente",
    skip: "Omitir",
    getResults: "Obtener Mis Recomendaciones",
    selectAll: "Selecciona todas las opciones que correspondan",
    findingTools: "Buscando herramientas...",
    otherPlaceholder: "Otro (por favor especifica)",
    customWorkflow: "Flujo de trabajo personalizado (opcional)",
    hoursToSave: "Horas por semana que quieres ahorrar",
    hoursUnit: "horas",
    deviceQuestion: "Que dispositivo(s) usas principalmente?",
    mobile: "Movil",
    desktop: "Escritorio",
    both: "Ambos",
  },
  results: {
    titleSmb: "Soluciones de IA Recomendadas para tu Negocio",
    titleIndividual: "Herramientas de IA Recomendadas para Ti",
    subtitle: "Basado en tus respuestas, estas herramientas pueden ajustarse a tus necesidades.",
    startOver: "Comenzar de nuevo",
    saveResults: "Guardar Resultados",
    visitTool: "Visitar",
    helpTitle: "Necesitas ayuda para configurar esto?",
    helpSubtitle: "Podemos integrar estas herramientas y capacitar a tu equipo.",
    bookCall: "Reservar Llamada Gratuita",
    requestQuote: "Solicitar Cotizacion",
    personalSetupTitle: "Quieres una configuracion personalizada?",
    personalSetupSubtitle: "Reserva una sesion 1:1 para configurar tus herramientas de IA.",
    personalSetupButton: "Reservar Sesion de Configuracion Personal",
    price: "Precio",
  },
  leadModal: {
    emailResultsTitle: "Guardar Tus Resultados",
    emailResultsDesc: "Ingresa tu email para recibir tus recomendaciones personalizadas.",
    bookCallTitle: "Reservar Tu Llamada Gratuita",
    bookCallDesc: "Programa una consulta con nuestros expertos en implementacion de IA.",
    requestQuoteTitle: "Solicitar Cotizacion de Implementacion",
    requestQuoteDesc: "Obtiene una cotizacion personalizada para integrar estas herramientas de IA.",
    personalSetupTitle: "Reservar Configuracion Personal de IA",
    personalSetupDesc: "Obtiene ayuda 1:1 para configurar tus herramientas de IA.",
    email: "Email",
    emailPlaceholder: "tu@email.com",
    name: "Nombre (opcional)",
    namePlaceholder: "Tu nombre",
    message: "Mensaje (opcional)",
    messagePlaceholder: "Cuentanos mas...",
    submit: "Enviar",
    submitting: "Enviando...",
    successEmail: "Tus resultados han sido guardados!",
    successBooking: "Nos pondremos en contacto pronto!",
    error: "Algo salio mal. Por favor intenta de nuevo.",
    cancel: "Cancelar",
    success: "Exito",
  },
  footer: {
    tagline: "Ayudandote a encontrar las herramientas de IA perfectas",
    copyright: "Todos los derechos reservados.",
    navigation: "Navegacion",
    contact: "Contacto",
    privacyPolicy: "Politica de Privacidad",
    termsOfService: "Terminos de Servicio",
  },
});

const zh = mergeWithEnglish({
  header: {
    home: "首页",
    findTools: "寻找AI工具",
  },
  home: {
    heroTitle: "人人可用的AI工具",
    heroSubtitle: "回答几个问题,获取为您的业务或个人目标量身定制的AI工具推荐。",
    heroTagline: "发现适合您需求的完美AI工具",
    getStarted: "寻找您的工具",
    exploreCategories: "探索分类",
    trustedBy: "帮助企业和个人找到完美的AI解决方案",
    featuresTitle: "为什么选择Coarus AI",
    featuresSubtitle: "我们让找到合适的AI工具变得简单而个性化",
    feature1Title: "个性化匹配",
    feature1Desc: "我们的智能算法分析您的需求,为您推荐完美的AI工具。",
    feature2Title: "精选推荐",
    feature2Desc: "我们仔细评估和选择多个类别中最好的AI工具。",
    feature3Title: "节省时间",
    feature3Desc: "跳过研究。获取符合您特定要求的即时推荐。",
    howItWorks: "如何运作",
    howItWorksSubtitle: "简单步骤发现您的完美AI工具",
    ctaTitle: "准备好找到您完美的AI工具了吗?",
    ctaSubtitle: "加入已经发现适合需求的AI解决方案的数千人。",
    ctaButton: "寻找我的AI工具",
    emailDirect: "或直接发送邮件:",
    forBusinesses: "企业用户",
    forIndividuals: "个人用户",
    forBusinessesDesc: "用AI优化运营",
    forIndividualsDesc: "提升个人生产力",
    quickSteps: "快速步骤",
    justSteps: "仅需2步",
    quickSimple: "快速简单",
    categoriesTitle: "探索AI分类",
    categoriesSubtitle: "按类别浏览我们精选的AI工具集合",
    valueTitle: "为什么选择Coarus AI?",
    valueDesc1: "我们帮助您找到真正适合您需求的AI工具。",
    valueDesc2: "我们的推荐基于真实测试和用户反馈。",
    valueBullet1: "155+精选AI工具",
    valueBullet2: "每周更新新工具",
    valueBullet3: "个性化推荐",
    valueBullet4: "免费使用,无需注册",
    benefitBusiness: "企业用户",
    benefitBusinessDesc: "找到AI工具来自动化工作流程,改善客户服务,提高生产力。",
    benefitIndividual: "个人用户",
    benefitIndividualDesc: "发现AI伴侣、创意工具和个人使用的生产力提升器。",
    benefitFresh: "始终新鲜",
    benefitFreshDesc: "我们持续更新数据库,添加最新的AI工具,移除过时的工具。",
    benefitMatch: "完美匹配",
    benefitMatchDesc: "我们的匹配算法考虑您的具体需求来推荐最佳工具。",
    smbStep1: "选择您的路径",
    smbStep1Desc: "选择企业或个人",
    smbStep2: "分享您的需求",
    smbStep2Desc: "告诉我们您的挑战",
    smbStep3: "设定优先级",
    smbStep3Desc: "什么对您最重要",
    smbStep4: "获取结果",
    smbStep4Desc: "收到个性化推荐",
    indStep1: "告诉我们您的目标",
    indStep1Desc: "您想实现什么?",
    indStep2: "获得匹配",
    indStep2Desc: "收到个性化AI工具推荐",
  },
  categories: {
    customerSupport: "客户支持",
    customerSupportDesc: "AI聊天机器人、帮助台和支持自动化",
    salesCrm: "销售与CRM",
    salesCrmDesc: "AI驱动的销售工具和CRM自动化",
    marketingSeo: "营销与SEO",
    marketingSeoDesc: "内容创作、SEO优化和营销自动化",
    financeOps: "财务与运营",
    financeOpsDesc: "会计、发票和财务自动化",
    hrHiring: "人力资源与招聘",
    hrHiringDesc: "招聘、入职和人力资源管理",
    aiCompanions: "AI伴侣",
    aiCompanionsDesc: "虚拟朋友、聊天伙伴和情感支持AI",
    creativeStudio: "创意工作室",
    creativeStudioDesc: "图像生成、视频编辑和创意AI工具",
    learningSkills: "学习与技能",
    learningSkillsDesc: "AI导师、语言学习和技能发展",
    personalProductivity: "个人生产力",
    personalProductivityDesc: "任务管理、日程安排和个人助理",
    writingContent: "写作与内容",
    writingContentDesc: "AI写作助手、文案和内容创作",
  },
  wizard: {
    pathQuestion: "您今天来这里做什么?",
    pathSmb: "企业主",
    pathSmbDesc: "我想改善我的业务运营",
    pathIndividual: "个人",
    pathIndividualDesc: "我想要个人使用的AI工具",
    businessType: "您经营什么类型的业务?",
    businessProblems: "您面临什么挑战?",
    businessPriorities: "您的首要任务是什么?",
    workflowArea: "哪个领域最需要帮助?",
    personalIntent: "您希望AI帮助您做什么?",
    personalGoals: "您的目标是什么?",
    back: "返回",
    next: "下一步",
    skip: "跳过",
    getResults: "获取我的推荐",
    selectAll: "选择所有适用项",
    findingTools: "正在查找工具...",
    otherPlaceholder: "其他（请说明）",
    customWorkflow: "自定义工作流程（可选）",
    hoursToSave: "每周想节省的小时数",
    hoursUnit: "小时",
    deviceQuestion: "您主要使用什么设备?",
    mobile: "移动端",
    desktop: "桌面端",
    both: "两者都用",
  },
  results: {
    titleSmb: "为您的业务推荐的AI解决方案",
    titleIndividual: "为您推荐的AI工具",
    subtitle: "根据您的回答,这些工具和组合可能符合您的需求。",
    startOver: "重新开始",
    saveResults: "保存结果",
    visitTool: "访问",
    helpTitle: "需要帮助设置吗?",
    helpSubtitle: "我们可以集成这些工具,自动化工作流程,并培训您的团队。",
    bookCall: "预约免费AI机会电话",
    requestQuote: "请求实施报价",
    personalSetupTitle: "想要个性化设置?",
    personalSetupSubtitle: "预约1对1会议,让您的AI工具配置并协同工作。",
    personalSetupButton: "预约个人AI设置会议",
    price: "价格",
  },
  leadModal: {
    emailResultsTitle: "保存您的结果",
    emailResultsDesc: "输入您的电子邮件以接收个性化的AI工具推荐。",
    bookCallTitle: "预约您的免费AI机会电话",
    bookCallDesc: "与我们的AI实施专家安排咨询。",
    requestQuoteTitle: "请求实施报价",
    requestQuoteDesc: "获取将这些AI工具集成到您业务中的定制报价。",
    personalSetupTitle: "预约个人AI设置",
    personalSetupDesc: "获得1对1帮助,设置您的AI工具以获得最大收益。",
    email: "电子邮件",
    emailPlaceholder: "您的邮箱@email.com",
    name: "姓名(可选)",
    namePlaceholder: "您的姓名",
    message: "留言(可选)",
    messagePlaceholder: "告诉我们更多...",
    submit: "提交",
    submitting: "提交中...",
    successEmail: "您的结果已保存!",
    successBooking: "我们会尽快联系您!",
    error: "出了点问题。请重试。",
    cancel: "取消",
    success: "成功",
  },
  footer: {
    tagline: "帮助您找到完美的AI工具",
    copyright: "版权所有。",
    navigation: "导航",
    contact: "联系我们",
    privacyPolicy: "隐私政策",
    termsOfService: "服务条款",
  },
});

const fr = mergeWithEnglish({
  header: {
    home: "Accueil",
    findTools: "Trouver des Outils IA",
  },
  home: {
    heroTitle: "Outils IA pour Tous",
    heroSubtitle: "Repondez a quelques questions et obtenez des recommandations personnalisees d'outils IA.",
    heroTagline: "Decouvrez les outils IA parfaits pour vos besoins",
    getStarted: "Trouvez Vos Outils",
    exploreCategories: "Explorer les Categories",
    trustedBy: "Aider les entreprises et les individus a trouver les solutions IA parfaites",
    howItWorks: "Comment Ca Marche",
    howItWorksSubtitle: "Etapes simples pour decouvrir vos outils IA parfaits",
    ctaTitle: "Pret a Trouver Vos Outils IA Parfaits?",
    ctaSubtitle: "Rejoignez des milliers qui ont deja decouvert les bonnes solutions IA.",
    ctaButton: "Trouver Mes Outils IA",
    emailDirect: "Ou ecrivez-nous directement:",
    forBusinesses: "Pour les Entreprises",
    forIndividuals: "Pour les Individus",
    forBusinessesDesc: "Optimisez les operations avec l'IA",
    forIndividualsDesc: "Boostez votre productivite personnelle",
    quickSteps: "Etapes rapides",
    justSteps: "Seulement 2 etapes",
    quickSimple: "Rapide et Simple",
    categoriesTitle: "Explorer les Categories IA",
    categoriesSubtitle: "Parcourez notre collection d'outils IA par categorie",
  },
  categories: {
    customerSupport: "Support Client",
    customerSupportDesc: "Chatbots IA, helpdesks et automatisation du support",
    salesCrm: "Ventes et CRM",
    salesCrmDesc: "Outils de vente IA et automatisation CRM",
    marketingSeo: "Marketing et SEO",
    marketingSeoDesc: "Creation de contenu, optimisation SEO et automatisation marketing",
    financeOps: "Finance et Ops",
    financeOpsDesc: "Comptabilite, facturation et automatisation financiere",
    hrHiring: "RH et Recrutement",
    hrHiringDesc: "Recrutement, integration et gestion RH",
    aiCompanions: "Compagnons IA",
    aiCompanionsDesc: "Amis virtuels, compagnons de chat et soutien emotionnel",
    creativeStudio: "Studio Creatif",
    creativeStudioDesc: "Generation d'images, montage video et outils creatifs IA",
    learningSkills: "Apprentissage",
    learningSkillsDesc: "Tuteurs IA, apprentissage des langues et developpement des competences",
    personalProductivity: "Productivite Personnelle",
    personalProductivityDesc: "Gestion des taches, planification et assistants personnels",
    writingContent: "Ecriture et Contenu",
    writingContentDesc: "Assistants d'ecriture IA, redaction et creation de contenu",
  },
  wizard: {
    pathQuestion: "Qu'est-ce qui vous amene ici aujourd'hui?",
    pathSmb: "Chef d'Entreprise",
    pathSmbDesc: "Je veux ameliorer les operations de mon entreprise",
    pathIndividual: "Individuel",
    pathIndividualDesc: "Je veux des outils IA pour un usage personnel",
    back: "Retour",
    next: "Suivant",
    skip: "Passer",
    getResults: "Obtenir Mes Recommandations",
    selectAll: "Selectionnez toutes les options pertinentes",
    findingTools: "Recherche des outils...",
  },
  results: {
    titleSmb: "Solutions IA Recommandees pour Votre Entreprise",
    titleIndividual: "Outils IA Recommandes pour Vous",
    startOver: "Recommencer",
    saveResults: "Sauvegarder",
    visitTool: "Visiter",
  },
  footer: {
    tagline: "Vous aider a trouver les outils IA parfaits",
    copyright: "Tous droits reserves.",
    navigation: "Navigation",
    contact: "Contact",
    privacyPolicy: "Politique de Confidentialite",
    termsOfService: "Conditions d'Utilisation",
  },
});

const ko = mergeWithEnglish({
  header: {
    home: "홈",
    findTools: "AI 도구 찾기",
  },
  home: {
    heroTitle: "모두를 위한 AI 도구",
    heroSubtitle: "몇 가지 질문에 답하고 비즈니스 또는 개인 목표에 맞춘 AI 도구 추천을 받으세요.",
    heroTagline: "당신의 필요에 맞는 완벽한 AI 도구를 발견하세요",
    getStarted: "도구 찾기",
    exploreCategories: "카테고리 탐색",
    trustedBy: "기업과 개인이 완벽한 AI 솔루션을 찾도록 돕습니다",
    howItWorks: "작동 방식",
    howItWorksSubtitle: "완벽한 AI 도구를 발견하는 간단한 단계",
    ctaTitle: "완벽한 AI 도구를 찾을 준비가 되셨나요?",
    ctaSubtitle: "이미 적합한 AI 솔루션을 발견한 수천 명과 함께하세요.",
    ctaButton: "내 AI 도구 찾기",
    emailDirect: "또는 직접 이메일 보내기:",
    forBusinesses: "비즈니스용",
    forIndividuals: "개인용",
    forBusinessesDesc: "AI로 운영 최적화",
    forIndividualsDesc: "개인 생산성 향상",
    quickSteps: "빠른 단계",
    justSteps: "단 2단계",
    quickSimple: "빠르고 간단",
    categoriesTitle: "AI 카테고리 탐색",
    categoriesSubtitle: "카테고리별로 엄선된 AI 도구 컬렉션 탐색",
  },
  categories: {
    customerSupport: "고객 지원",
    customerSupportDesc: "AI 챗봇, 헬프데스크 및 지원 자동화",
    salesCrm: "영업 및 CRM",
    salesCrmDesc: "AI 기반 영업 도구 및 CRM 자동화",
    marketingSeo: "마케팅 및 SEO",
    marketingSeoDesc: "콘텐츠 생성, SEO 최적화 및 마케팅 자동화",
    financeOps: "재무 및 운영",
    financeOpsDesc: "회계, 청구서 발행 및 재무 자동화",
    hrHiring: "HR 및 채용",
    hrHiringDesc: "채용, 온보딩 및 HR 관리",
    aiCompanions: "AI 동반자",
    aiCompanionsDesc: "가상 친구, 채팅 동반자 및 감정 지원 AI",
    creativeStudio: "크리에이티브 스튜디오",
    creativeStudioDesc: "이미지 생성, 비디오 편집 및 크리에이티브 AI 도구",
    learningSkills: "학습 및 기술",
    learningSkillsDesc: "AI 튜터, 언어 학습 및 기술 개발",
    personalProductivity: "개인 생산성",
    personalProductivityDesc: "작업 관리, 일정 및 개인 비서",
    writingContent: "글쓰기 및 콘텐츠",
    writingContentDesc: "AI 글쓰기 도우미, 카피라이팅 및 콘텐츠 생성",
  },
  wizard: {
    pathQuestion: "오늘 무엇이 필요하세요?",
    pathSmb: "사업주",
    pathSmbDesc: "비즈니스 운영을 개선하고 싶습니다",
    pathIndividual: "개인",
    pathIndividualDesc: "개인적으로 사용할 AI 도구를 원합니다",
    back: "뒤로",
    next: "다음",
    skip: "건너뛰기",
    getResults: "추천 받기",
    findingTools: "도구 찾는 중...",
  },
  results: {
    titleSmb: "비즈니스를 위한 추천 AI 솔루션",
    titleIndividual: "당신을 위한 추천 AI 도구",
    startOver: "다시 시작",
    saveResults: "결과 저장",
    visitTool: "방문",
  },
  footer: {
    tagline: "완벽한 AI 도구를 찾도록 도와드립니다",
    copyright: "모든 권리 보유.",
    navigation: "탐색",
    contact: "연락처",
    privacyPolicy: "개인정보 보호정책",
    termsOfService: "서비스 약관",
  },
});

const hi = mergeWithEnglish({
  header: {
    home: "होम",
    findTools: "AI टूल्स खोजें",
  },
  home: {
    heroTitle: "सभी के लिए AI टूल्स",
    heroSubtitle: "कुछ सवालों के जवाब दें और अपने व्यवसाय या व्यक्तिगत लक्ष्यों के लिए AI टूल सुझाव प्राप्त करें।",
    heroTagline: "अपनी जरूरतों के लिए सही AI टूल्स खोजें",
    getStarted: "अपने टूल्स खोजें",
    exploreCategories: "श्रेणियां देखें",
    trustedBy: "व्यवसायों और व्यक्तियों को सही AI समाधान खोजने में मदद करना",
    howItWorks: "यह कैसे काम करता है",
    ctaTitle: "अपने परफेक्ट AI टूल्स खोजने के लिए तैयार हैं?",
    ctaButton: "मेरे AI टूल्स खोजें",
    forBusinesses: "व्यवसायों के लिए",
    forIndividuals: "व्यक्तियों के लिए",
    categoriesTitle: "AI श्रेणियां देखें",
  },
  wizard: {
    pathQuestion: "आज आप यहां क्यों आए हैं?",
    pathSmb: "व्यवसाय मालिक",
    pathSmbDesc: "मैं अपने व्यवसाय संचालन में सुधार करना चाहता हूं",
    pathIndividual: "व्यक्तिगत",
    pathIndividualDesc: "मुझे व्यक्तिगत उपयोग के लिए AI टूल्स चाहिए",
    back: "वापस",
    next: "आगे",
    skip: "छोड़ें",
    getResults: "मेरी सिफारिशें प्राप्त करें",
  },
  footer: {
    tagline: "सही AI टूल्स खोजने में आपकी मदद करना",
    copyright: "सर्वाधिकार सुरक्षित।",
    navigation: "नेविगेशन",
    contact: "संपर्क",
    privacyPolicy: "गोपनीयता नीति",
    termsOfService: "सेवा की शर्तें",
  },
});

const de = mergeWithEnglish({
  header: {
    home: "Startseite",
    findTools: "KI-Tools Finden",
  },
  home: {
    heroTitle: "KI-Tools fur Alle",
    heroSubtitle: "Beantworten Sie einige Fragen und erhalten Sie personalisierte KI-Tool-Empfehlungen.",
    heroTagline: "Entdecken Sie die perfekten KI-Tools fur Ihre Bedurfnisse",
    getStarted: "Ihre Tools Finden",
    exploreCategories: "Kategorien Erkunden",
    trustedBy: "Wir helfen Unternehmen und Einzelpersonen, die perfekten KI-Losungen zu finden",
    howItWorks: "So Funktioniert Es",
    ctaTitle: "Bereit, Ihre Perfekten KI-Tools zu Finden?",
    ctaButton: "Meine KI-Tools Finden",
    forBusinesses: "Fur Unternehmen",
    forIndividuals: "Fur Privatpersonen",
    categoriesTitle: "KI-Kategorien Erkunden",
  },
  categories: {
    customerSupport: "Kundensupport",
    customerSupportDesc: "KI-Chatbots, Helpdesks und Support-Automatisierung",
    salesCrm: "Vertrieb & CRM",
    salesCrmDesc: "KI-gestutzte Vertriebstools und CRM-Automatisierung",
    marketingSeo: "Marketing & SEO",
    marketingSeoDesc: "Content-Erstellung, SEO-Optimierung und Marketing-Automatisierung",
    financeOps: "Finanzen & Betrieb",
    financeOpsDesc: "Buchhaltung, Rechnungsstellung und Finanzautomatisierung",
    hrHiring: "HR & Recruiting",
    hrHiringDesc: "Rekrutierung, Onboarding und HR-Management",
    aiCompanions: "KI-Begleiter",
    aiCompanionsDesc: "Virtuelle Freunde, Chat-Begleiter und emotionale Unterstutzung",
    creativeStudio: "Kreativstudio",
    creativeStudioDesc: "Bildgenerierung, Videobearbeitung und kreative KI-Tools",
    learningSkills: "Lernen & Fahigkeiten",
    learningSkillsDesc: "KI-Tutoren, Sprachlernen und Kompetenzentwicklung",
    personalProductivity: "Personliche Produktivitat",
    personalProductivityDesc: "Aufgabenverwaltung, Terminplanung und personliche Assistenten",
    writingContent: "Schreiben & Inhalt",
    writingContentDesc: "KI-Schreibassistenten, Texterstellung und Content-Erstellung",
  },
  wizard: {
    pathQuestion: "Was fuhrt Sie heute hierher?",
    pathSmb: "Geschaftsinhaber",
    pathSmbDesc: "Ich mochte meine Geschaftsablaufe verbessern",
    pathIndividual: "Privatperson",
    pathIndividualDesc: "Ich mochte KI-Tools fur den personlichen Gebrauch",
    back: "Zuruck",
    next: "Weiter",
    skip: "Uberspringen",
    getResults: "Meine Empfehlungen Erhalten",
  },
  footer: {
    tagline: "Wir helfen Ihnen, die perfekten KI-Tools zu finden",
    copyright: "Alle Rechte vorbehalten.",
    navigation: "Navigation",
    contact: "Kontakt",
    privacyPolicy: "Datenschutzrichtlinie",
    termsOfService: "Nutzungsbedingungen",
  },
});

const it = mergeWithEnglish({
  header: {
    home: "Home",
    findTools: "Trova Strumenti IA",
  },
  home: {
    heroTitle: "Strumenti IA per Tutti",
    heroSubtitle: "Rispondi a qualche domanda e ottieni raccomandazioni personalizzate di strumenti IA.",
    heroTagline: "Scopri gli strumenti IA perfetti per le tue esigenze",
    getStarted: "Trova i Tuoi Strumenti",
    exploreCategories: "Esplora Categorie",
    trustedBy: "Aiutiamo aziende e individui a trovare le soluzioni IA perfette",
    howItWorks: "Come Funziona",
    ctaTitle: "Pronto a Trovare i Tuoi Strumenti IA Perfetti?",
    ctaButton: "Trova i Miei Strumenti IA",
    forBusinesses: "Per le Aziende",
    forIndividuals: "Per gli Individui",
    categoriesTitle: "Esplora Categorie IA",
  },
  wizard: {
    pathQuestion: "Cosa ti porta qui oggi?",
    pathSmb: "Imprenditore",
    pathSmbDesc: "Voglio migliorare le operazioni della mia azienda",
    pathIndividual: "Individuale",
    pathIndividualDesc: "Voglio strumenti IA per uso personale",
    back: "Indietro",
    next: "Avanti",
    skip: "Salta",
    getResults: "Ottieni le Mie Raccomandazioni",
  },
  footer: {
    tagline: "Ti aiutiamo a trovare gli strumenti IA perfetti",
    copyright: "Tutti i diritti riservati.",
    navigation: "Navigazione",
    contact: "Contatto",
    privacyPolicy: "Informativa sulla Privacy",
    termsOfService: "Termini di Servizio",
  },
});

const ja = mergeWithEnglish({
  header: {
    home: "ホーム",
    findTools: "AIツールを探す",
  },
  home: {
    heroTitle: "すべての人のためのAIツール",
    heroSubtitle: "いくつかの質問に答えて、ビジネスや個人の目標に合わせたAIツールの推奨を受けましょう。",
    heroTagline: "あなたのニーズに合った完璧なAIツールを発見",
    getStarted: "ツールを見つける",
    exploreCategories: "カテゴリを探索",
    trustedBy: "企業と個人が完璧なAIソリューションを見つけるお手伝い",
    howItWorks: "使い方",
    ctaTitle: "完璧なAIツールを見つける準備はできましたか?",
    ctaButton: "私のAIツールを見つける",
    forBusinesses: "ビジネス向け",
    forIndividuals: "個人向け",
    categoriesTitle: "AIカテゴリを探索",
  },
  categories: {
    customerSupport: "カスタマーサポート",
    customerSupportDesc: "AIチャットボット、ヘルプデスク、サポート自動化",
    salesCrm: "営業とCRM",
    salesCrmDesc: "AI搭載の営業ツールとCRM自動化",
    marketingSeo: "マーケティングとSEO",
    marketingSeoDesc: "コンテンツ作成、SEO最適化、マーケティング自動化",
    financeOps: "財務と運営",
    financeOpsDesc: "会計、請求書発行、財務自動化",
    hrHiring: "HRと採用",
    hrHiringDesc: "採用、オンボーディング、HR管理",
    aiCompanions: "AIコンパニオン",
    aiCompanionsDesc: "バーチャルフレンド、チャットコンパニオン、感情サポートAI",
    creativeStudio: "クリエイティブスタジオ",
    creativeStudioDesc: "画像生成、動画編集、クリエイティブAIツール",
    learningSkills: "学習とスキル",
    learningSkillsDesc: "AIチューター、語学学習、スキル開発",
    personalProductivity: "個人の生産性",
    personalProductivityDesc: "タスク管理、スケジューリング、パーソナルアシスタント",
    writingContent: "ライティングとコンテンツ",
    writingContentDesc: "AIライティングアシスタント、コピーライティング、コンテンツ作成",
  },
  wizard: {
    pathQuestion: "今日は何をお探しですか?",
    pathSmb: "ビジネスオーナー",
    pathSmbDesc: "ビジネス運営を改善したい",
    pathIndividual: "個人",
    pathIndividualDesc: "個人使用のAIツールが欲しい",
    back: "戻る",
    next: "次へ",
    skip: "スキップ",
    getResults: "おすすめを取得",
  },
  footer: {
    tagline: "完璧なAIツールを見つけるお手伝い",
    copyright: "全著作権所有。",
    navigation: "ナビゲーション",
    contact: "お問い合わせ",
    privacyPolicy: "プライバシーポリシー",
    termsOfService: "利用規約",
  },
});

const bn = mergeWithEnglish({
  header: {
    home: "হোম",
    findTools: "AI টুল খুঁজুন",
  },
  home: {
    heroTitle: "সবার জন্য AI টুল",
    heroSubtitle: "কিছু প্রশ্নের উত্তর দিন এবং আপনার ব্যবসা বা ব্যক্তিগত লক্ষ্যের জন্য AI টুল সুপারিশ পান।",
    heroTagline: "আপনার প্রয়োজনের জন্য সঠিক AI টুল আবিষ্কার করুন",
    getStarted: "আপনার টুল খুঁজুন",
    exploreCategories: "বিভাগ দেখুন",
    howItWorks: "কিভাবে কাজ করে",
    ctaTitle: "আপনার পারফেক্ট AI টুল খুঁজতে প্রস্তুত?",
    ctaButton: "আমার AI টুল খুঁজুন",
    forBusinesses: "ব্যবসার জন্য",
    forIndividuals: "ব্যক্তিদের জন্য",
    categoriesTitle: "AI বিভাগ দেখুন",
  },
  wizard: {
    pathQuestion: "আজ আপনাকে কী এখানে এনেছে?",
    pathSmb: "ব্যবসার মালিক",
    pathIndividual: "ব্যক্তিগত",
    back: "পিছনে",
    next: "পরবর্তী",
    skip: "এড়িয়ে যান",
    getResults: "সুপারিশ পান",
  },
  footer: {
    tagline: "সঠিক AI টুল খুঁজে পেতে সাহায্য করছি",
    copyright: "সর্বস্বত্ব সংরক্ষিত।",
    navigation: "নেভিগেশন",
    contact: "যোগাযোগ",
    privacyPolicy: "গোপনীয়তা নীতি",
    termsOfService: "সেবার শর্তাবলী",
  },
});

const ru = mergeWithEnglish({
  header: {
    home: "Главная",
    findTools: "Найти ИИ-инструменты",
  },
  home: {
    heroTitle: "ИИ-инструменты для всех",
    heroSubtitle: "Ответьте на несколько вопросов и получите персонализированные рекомендации по ИИ-инструментам.",
    heroTagline: "Откройте для себя идеальные ИИ-инструменты для ваших нужд",
    getStarted: "Найти свои инструменты",
    exploreCategories: "Изучить категории",
    trustedBy: "Помогаем бизнесу и частным лицам находить идеальные ИИ-решения",
    howItWorks: "Как это работает",
    ctaTitle: "Готовы найти свои идеальные ИИ-инструменты?",
    ctaButton: "Найти мои ИИ-инструменты",
    forBusinesses: "Для бизнеса",
    forIndividuals: "Для частных лиц",
    categoriesTitle: "Изучить категории ИИ",
  },
  categories: {
    customerSupport: "Поддержка клиентов",
    customerSupportDesc: "ИИ-чатботы, хелпдески и автоматизация поддержки",
    salesCrm: "Продажи и CRM",
    salesCrmDesc: "ИИ-инструменты продаж и автоматизация CRM",
    marketingSeo: "Маркетинг и SEO",
    marketingSeoDesc: "Создание контента, SEO-оптимизация и автоматизация маркетинга",
    financeOps: "Финансы и операции",
    financeOpsDesc: "Бухгалтерия, выставление счетов и финансовая автоматизация",
    hrHiring: "HR и найм",
    hrHiringDesc: "Рекрутинг, онбординг и управление персоналом",
    aiCompanions: "ИИ-компаньоны",
    aiCompanionsDesc: "Виртуальные друзья, чат-компаньоны и эмоциональная поддержка",
    creativeStudio: "Креативная студия",
    creativeStudioDesc: "Генерация изображений, редактирование видео и креативные ИИ-инструменты",
    learningSkills: "Обучение и навыки",
    learningSkillsDesc: "ИИ-репетиторы, изучение языков и развитие навыков",
    personalProductivity: "Личная продуктивность",
    personalProductivityDesc: "Управление задачами, планирование и личные помощники",
    writingContent: "Написание и контент",
    writingContentDesc: "ИИ-помощники для письма, копирайтинг и создание контента",
  },
  wizard: {
    pathQuestion: "Что привело вас сюда сегодня?",
    pathSmb: "Владелец бизнеса",
    pathSmbDesc: "Я хочу улучшить операции моего бизнеса",
    pathIndividual: "Частное лицо",
    pathIndividualDesc: "Мне нужны ИИ-инструменты для личного использования",
    back: "Назад",
    next: "Далее",
    skip: "Пропустить",
    getResults: "Получить рекомендации",
  },
  footer: {
    tagline: "Помогаем найти идеальные ИИ-инструменты",
    copyright: "Все права защищены.",
    navigation: "Навигация",
    contact: "Контакты",
    privacyPolicy: "Политика конфиденциальности",
    termsOfService: "Условия использования",
  },
});

const ar = mergeWithEnglish({
  header: {
    home: "الرئيسية",
    findTools: "ابحث عن أدوات الذكاء الاصطناعي",
  },
  home: {
    heroTitle: "أدوات الذكاء الاصطناعي للجميع",
    heroSubtitle: "أجب عن بعض الأسئلة واحصل على توصيات مخصصة لأدوات الذكاء الاصطناعي.",
    heroTagline: "اكتشف أدوات الذكاء الاصطناعي المثالية لاحتياجاتك",
    getStarted: "ابحث عن أدواتك",
    exploreCategories: "استكشف الفئات",
    trustedBy: "نساعد الشركات والأفراد في العثور على حلول الذكاء الاصطناعي المثالية",
    howItWorks: "كيف يعمل",
    ctaTitle: "هل أنت مستعد للعثور على أدوات الذكاء الاصطناعي المثالية؟",
    ctaButton: "ابحث عن أدوات الذكاء الاصطناعي الخاصة بي",
    forBusinesses: "للشركات",
    forIndividuals: "للأفراد",
    categoriesTitle: "استكشف فئات الذكاء الاصطناعي",
  },
  wizard: {
    pathQuestion: "ما الذي أتى بك إلى هنا اليوم؟",
    pathSmb: "صاحب عمل",
    pathSmbDesc: "أريد تحسين عمليات عملي",
    pathIndividual: "فرد",
    pathIndividualDesc: "أريد أدوات ذكاء اصطناعي للاستخدام الشخصي",
    back: "رجوع",
    next: "التالي",
    skip: "تخطي",
    getResults: "احصل على توصياتي",
  },
  footer: {
    tagline: "نساعدك في العثور على أدوات الذكاء الاصطناعي المثالية",
    copyright: "جميع الحقوق محفوظة.",
    navigation: "التنقل",
    contact: "اتصل بنا",
    privacyPolicy: "سياسة الخصوصية",
    termsOfService: "شروط الخدمة",
  },
});

const pt = mergeWithEnglish({
  header: {
    home: "Inicio",
    findTools: "Encontrar Ferramentas de IA",
  },
  home: {
    heroTitle: "Ferramentas de IA para Todos",
    heroSubtitle: "Responda algumas perguntas e obtenha recomendacoes personalizadas de ferramentas de IA.",
    heroTagline: "Descubra as ferramentas de IA perfeitas para suas necessidades",
    getStarted: "Encontre Suas Ferramentas",
    exploreCategories: "Explorar Categorias",
    trustedBy: "Ajudando empresas e individuos a encontrar as solucoes de IA perfeitas",
    howItWorks: "Como Funciona",
    ctaTitle: "Pronto para Encontrar Suas Ferramentas de IA Perfeitas?",
    ctaButton: "Encontrar Minhas Ferramentas de IA",
    forBusinesses: "Para Empresas",
    forIndividuals: "Para Individuos",
    categoriesTitle: "Explorar Categorias de IA",
  },
  categories: {
    customerSupport: "Suporte ao Cliente",
    customerSupportDesc: "Chatbots de IA, helpdesks e automacao de suporte",
    salesCrm: "Vendas e CRM",
    salesCrmDesc: "Ferramentas de vendas com IA e automacao de CRM",
    marketingSeo: "Marketing e SEO",
    marketingSeoDesc: "Criacao de conteudo, otimizacao de SEO e automacao de marketing",
    financeOps: "Financas e Operacoes",
    financeOpsDesc: "Contabilidade, faturamento e automacao financeira",
    hrHiring: "RH e Contratacao",
    hrHiringDesc: "Recrutamento, integracao e gestao de RH",
    aiCompanions: "Companheiros de IA",
    aiCompanionsDesc: "Amigos virtuais, companheiros de chat e suporte emocional",
    creativeStudio: "Estudio Criativo",
    creativeStudioDesc: "Geracao de imagens, edicao de video e ferramentas criativas de IA",
    learningSkills: "Aprendizagem e Habilidades",
    learningSkillsDesc: "Tutores de IA, aprendizagem de idiomas e desenvolvimento de habilidades",
    personalProductivity: "Produtividade Pessoal",
    personalProductivityDesc: "Gestao de tarefas, agendamento e assistentes pessoais",
    writingContent: "Escrita e Conteudo",
    writingContentDesc: "Assistentes de escrita de IA, redacao e criacao de conteudo",
  },
  wizard: {
    pathQuestion: "O que te traz aqui hoje?",
    pathSmb: "Empresario",
    pathSmbDesc: "Quero melhorar as operacoes do meu negocio",
    pathIndividual: "Individual",
    pathIndividualDesc: "Quero ferramentas de IA para uso pessoal",
    back: "Voltar",
    next: "Proximo",
    skip: "Pular",
    getResults: "Obter Minhas Recomendacoes",
  },
  footer: {
    tagline: "Ajudando voce a encontrar as ferramentas de IA perfeitas",
    copyright: "Todos os direitos reservados.",
    navigation: "Navegacao",
    contact: "Contato",
    privacyPolicy: "Politica de Privacidade",
    termsOfService: "Termos de Servico",
  },
});

const translations: Record<LanguageCode, Translations> = {
  en,
  es,
  zh,
  fr,
  ko,
  hi,
  de,
  it,
  ja,
  bn,
  ru,
  ar,
  pt,
};

export function getTranslations(language: LanguageCode): Translations {
  return translations[language] || translations.en;
}

export const languageNames: Record<LanguageCode, string> = {
  en: "English",
  es: "Espanol",
  zh: "中文",
  fr: "Francais",
  ko: "한국어",
  hi: "हिन्दी",
  de: "Deutsch",
  it: "Italiano",
  ja: "日本語",
  bn: "বাংলা",
  ru: "Русский",
  ar: "العربية",
  pt: "Portugues",
};
