export interface AITool {
  id: string;
  name: string;
  description: string;
  category: string;
  features: string[];
  url: string;
  keywords: string[];
  pricing: string;
  fitScore?: number;
  targetUser: "smb" | "individual" | "both";
  isNsfw?: boolean;
  nsfwLevel?: "partial" | "yes" | "no";
}

export const aiTools: AITool[] = [
  // Customer Support
  {
    id: "tidio",
    name: "Tidio",
    description: "AI chatbot platform for websites with live chat, visitor tracking, and automated responses for small businesses.",
    category: "customer-support",
    features: ["AI chatbots", "Live chat", "Visitor tracking", "Email integration"],
    url: "https://www.tidio.com",
    keywords: ["customer service", "chat", "chatbot", "support", "website"],
    pricing: "$29/mo",
    targetUser: "smb",
  },
  {
    id: "freshdesk",
    name: "Freshdesk",
    description: "Cloud-based customer support with AI-powered automation, self-service portal, and team collaboration.",
    category: "customer-support",
    features: ["Freddy AI", "Auto-assign", "Knowledge base", "Team inbox"],
    url: "https://freshdesk.com",
    keywords: ["customer service", "support", "tickets", "automation", "help desk"],
    pricing: "$18+/mo",
    targetUser: "smb",
  },
  {
    id: "zendesk",
    name: "Zendesk",
    description: "Customer service platform with AI-powered ticket routing, suggested replies, and omnichannel support.",
    category: "customer-support",
    features: ["AI ticket routing", "Answer bot", "Analytics", "Omnichannel"],
    url: "https://www.zendesk.com",
    keywords: ["customer service", "support", "tickets", "help desk", "crm"],
    pricing: "$19+/agent/mo",
    targetUser: "smb",
  },
  {
    id: "intercom",
    name: "Intercom",
    description: "AI-powered customer messaging platform for support, engagement, and conversational bots.",
    category: "customer-support",
    features: ["AI chatbots", "Live chat", "Help center", "Proactive support"],
    url: "https://www.intercom.com",
    keywords: ["customer service", "support", "chat", "chatbot", "help desk"],
    pricing: "$74+/mo",
    targetUser: "smb",
  },
  // Sales & CRM
  {
    id: "freshsales",
    name: "Freshsales AI",
    description: "CRM with AI-powered lead scoring, auto-followup, and sales forecasting for growing teams.",
    category: "sales-crm",
    features: ["AI lead scoring", "Auto-followup", "Pipeline insights", "Forecasting"],
    url: "https://www.freshworks.com/crm/sales",
    keywords: ["crm", "sales", "leads", "automation", "forecasting"],
    pricing: "$15-69/mo",
    targetUser: "smb",
  },
  {
    id: "hubspot",
    name: "HubSpot CRM",
    description: "Free CRM with AI-powered lead scoring, email tracking, and sales automation tools.",
    category: "sales-crm",
    features: ["AI lead scoring", "Email tracking", "Pipeline management", "Free tier"],
    url: "https://www.hubspot.com/crm",
    keywords: ["crm", "sales", "leads", "marketing", "automation"],
    pricing: "Free - $50+/mo",
    targetUser: "smb",
  },
  {
    id: "pipedrive",
    name: "Pipedrive",
    description: "Sales CRM with AI sales assistant for deal insights, activity suggestions, and visual pipeline.",
    category: "sales-crm",
    features: ["AI assistant", "Visual pipeline", "Lead scoring", "Email integration"],
    url: "https://www.pipedrive.com",
    keywords: ["crm", "sales", "pipeline", "deals", "small business"],
    pricing: "$14+/user/mo",
    targetUser: "smb",
  },
  {
    id: "zoho-crm",
    name: "Zoho CRM",
    description: "CRM software with Zia AI for predictions, lead scoring, and workflow automation.",
    category: "sales-crm",
    features: ["Zia AI", "Lead scoring", "Workflow automation", "Multichannel"],
    url: "https://www.zoho.com/crm",
    keywords: ["crm", "sales", "leads", "automation", "ai"],
    pricing: "$14+/user/mo",
    targetUser: "smb",
  },
  {
    id: "close-crm",
    name: "Close CRM",
    description: "CRM built for sales teams with built-in calling, email sequences, and pipeline automation.",
    category: "sales-crm",
    features: ["Built-in calling", "Email sequences", "Pipeline automation", "Reporting"],
    url: "https://www.close.com",
    keywords: ["crm", "sales", "calling", "email", "pipeline"],
    pricing: "$29+/user/mo",
    targetUser: "smb",
  },
  // Marketing & SEO
  {
    id: "jasper",
    name: "Jasper AI",
    description: "AI copywriting assistant for marketing content, blog posts, social media copy, and ads.",
    category: "marketing-seo",
    features: ["AI copywriting", "50+ templates", "Brand voice", "SEO optimization"],
    url: "https://www.jasper.ai",
    keywords: ["marketing", "content", "copywriting", "social media", "ads", "blog", "seo"],
    pricing: "$39+/mo",
    targetUser: "both",
  },
  {
    id: "surfer-seo",
    name: "Surfer SEO",
    description: "AI-powered SEO tool for content optimization, keyword research, and ranking analysis.",
    category: "marketing-seo",
    features: ["Content optimizer", "Keyword research", "SERP analyzer", "AI writing"],
    url: "https://surferseo.com",
    keywords: ["seo", "content", "keywords", "ranking", "optimization"],
    pricing: "$59+/mo",
    targetUser: "both",
  },
  {
    id: "copyai",
    name: "Copy.ai",
    description: "AI-powered writing tool for marketing copy, emails, social posts, and product descriptions.",
    category: "marketing-seo",
    features: ["90+ templates", "Multiple languages", "Team collaboration", "Brand voice"],
    url: "https://www.copy.ai",
    keywords: ["marketing", "content", "copywriting", "email", "social media"],
    pricing: "$36+/mo",
    targetUser: "both",
  },
  {
    id: "writesonic",
    name: "Writesonic",
    description: "AI writing platform for SEO-optimized content, ads, landing pages, and product descriptions.",
    category: "marketing-seo",
    features: ["SEO content", "Landing pages", "Ad copy", "Article writer"],
    url: "https://writesonic.com",
    keywords: ["marketing", "content", "seo", "ads", "landing pages"],
    pricing: "$19+/mo",
    targetUser: "both",
  },
  {
    id: "canva",
    name: "Canva Magic Design",
    description: "Design platform with AI-powered Magic Design for graphics, presentations, and marketing materials.",
    category: "marketing-seo",
    features: ["Magic Design AI", "Brand kit", "Templates", "Video editing"],
    url: "https://www.canva.com",
    keywords: ["marketing", "design", "graphics", "social media", "presentations"],
    pricing: "Free - $12.99/mo",
    targetUser: "both",
  },
  // Social Media
  {
    id: "buffer",
    name: "Buffer",
    description: "Social media management with AI-powered scheduling, analytics, and content suggestions.",
    category: "social-media",
    features: ["Auto-scheduling", "AI content ideas", "Analytics", "Multi-platform"],
    url: "https://buffer.com",
    keywords: ["social media", "marketing", "scheduling", "instagram", "twitter"],
    pricing: "$6+/channel/mo",
    targetUser: "both",
  },
  {
    id: "hootsuite",
    name: "Hootsuite",
    description: "Social media management for scheduling posts, monitoring mentions, and analyzing performance.",
    category: "social-media",
    features: ["Bulk scheduling", "Social listening", "Team collaboration", "Analytics"],
    url: "https://www.hootsuite.com",
    keywords: ["social media", "marketing", "scheduling", "monitoring"],
    pricing: "$99+/mo",
    targetUser: "smb",
  },
  {
    id: "later",
    name: "Later",
    description: "Visual social media planner for Instagram, TikTok, and Pinterest with drag-and-drop calendar.",
    category: "social-media",
    features: ["Visual planner", "Link in bio", "Best time to post", "Analytics"],
    url: "https://later.com",
    keywords: ["social media", "instagram", "tiktok", "pinterest", "scheduling"],
    pricing: "$18+/mo",
    targetUser: "both",
  },
  {
    id: "metricool",
    name: "Metricool",
    description: "All-in-one social media tool for planning, analyzing, and growing your presence.",
    category: "social-media",
    features: ["Content planner", "Competitor analysis", "Reports", "Ad management"],
    url: "https://metricool.com",
    keywords: ["social media", "analytics", "scheduling", "competitors"],
    pricing: "$18+/mo",
    targetUser: "both",
  },
  // Finance & Accounting
  {
    id: "quickbooks",
    name: "QuickBooks Online",
    description: "Cloud-based accounting with AI-powered categorization, receipt scanning, and financial insights.",
    category: "finance",
    features: ["Auto-categorization", "Receipt capture", "Invoicing", "Tax prep"],
    url: "https://quickbooks.intuit.com",
    keywords: ["bookkeeping", "accounting", "invoicing", "taxes", "finance"],
    pricing: "$30+/mo",
    targetUser: "smb",
  },
  {
    id: "xero",
    name: "Xero",
    description: "Cloud accounting with AI-driven bank reconciliation, expense tracking, and financial reporting.",
    category: "finance",
    features: ["Bank feeds", "Smart reconciliation", "Multi-currency", "Payroll"],
    url: "https://www.xero.com",
    keywords: ["bookkeeping", "accounting", "invoicing", "finance", "payroll"],
    pricing: "$13+/mo",
    targetUser: "smb",
  },
  {
    id: "freshbooks",
    name: "FreshBooks",
    description: "Invoicing and accounting software with automatic payment reminders and expense tracking.",
    category: "finance",
    features: ["Professional invoices", "Auto reminders", "Time tracking", "Expenses"],
    url: "https://www.freshbooks.com",
    keywords: ["invoicing", "billing", "accounting", "payments"],
    pricing: "$17+/mo",
    targetUser: "smb",
  },
  {
    id: "zoho-books",
    name: "Zoho Books",
    description: "Online accounting software with automated workflows, bank feeds, and inventory management.",
    category: "finance",
    features: ["Automated workflows", "Bank feeds", "Inventory", "Time tracking"],
    url: "https://www.zoho.com/books",
    keywords: ["bookkeeping", "accounting", "invoicing", "inventory"],
    pricing: "$15+/mo",
    targetUser: "smb",
  },
  // HR & Hiring
  {
    id: "workday",
    name: "Workday",
    description: "Enterprise HR platform with AI-powered talent management, analytics, and automation.",
    category: "hr-hiring",
    features: ["AI analytics", "Talent management", "Payroll", "Learning"],
    url: "https://www.workday.com",
    keywords: ["hr", "hiring", "payroll", "talent", "enterprise"],
    pricing: "Custom",
    targetUser: "smb",
  },
  {
    id: "bamboohr",
    name: "BambooHR",
    description: "HR software for small to medium businesses with hiring, onboarding, and performance tools.",
    category: "hr-hiring",
    features: ["Applicant tracking", "Onboarding", "Time tracking", "Performance"],
    url: "https://www.bamboohr.com",
    keywords: ["hr", "hiring", "onboarding", "performance"],
    pricing: "$6+/employee/mo",
    targetUser: "smb",
  },
  // Productivity (Individual)
  {
    id: "notion",
    name: "Notion AI",
    description: "All-in-one workspace with AI writing assistant, databases, wikis, and project tracking.",
    category: "productivity",
    features: ["Notion AI", "Databases", "Wiki", "Project tracking"],
    url: "https://www.notion.so",
    keywords: ["productivity", "notes", "wiki", "project management", "ai writing"],
    pricing: "Free - $10/mo",
    targetUser: "both",
  },
  {
    id: "todoist",
    name: "Todoist",
    description: "Task management app with natural language input, recurring tasks, and smart scheduling.",
    category: "productivity",
    features: ["Natural language", "Recurring tasks", "Labels & filters", "Integrations"],
    url: "https://todoist.com",
    keywords: ["productivity", "tasks", "to-do", "personal", "organization"],
    pricing: "Free - $4/mo",
    targetUser: "individual",
  },
  {
    id: "clickup",
    name: "ClickUp",
    description: "All-in-one project management with AI task creation, docs, time tracking, and workflows.",
    category: "productivity",
    features: ["ClickUp AI", "Custom views", "Docs", "Time tracking"],
    url: "https://clickup.com",
    keywords: ["project management", "tasks", "team", "collaboration"],
    pricing: "Free - $7/mo",
    targetUser: "both",
  },
  // Writing & Content (Individual)
  {
    id: "grammarly",
    name: "Grammarly",
    description: "AI writing assistant for grammar, clarity, tone, and style improvements across all content.",
    category: "writing",
    features: ["Grammar check", "Tone detection", "Plagiarism", "Style guide"],
    url: "https://www.grammarly.com",
    keywords: ["writing", "grammar", "productivity", "communication", "email"],
    pricing: "Free - $12/mo",
    targetUser: "individual",
  },
  {
    id: "quillbot",
    name: "Quillbot",
    description: "AI paraphrasing and writing tool for rewording, summarizing, and improving text.",
    category: "writing",
    features: ["Paraphraser", "Summarizer", "Grammar checker", "Citation generator"],
    url: "https://quillbot.com",
    keywords: ["writing", "paraphrase", "summarize", "grammar", "academic"],
    pricing: "Free - $9.95/mo",
    targetUser: "individual",
  },
  {
    id: "notion-ai",
    name: "Notion AI",
    description: "AI writing assistant built into Notion for drafting, editing, summarizing, and brainstorming.",
    category: "writing",
    features: ["AI drafting", "Summarization", "Translation", "Brainstorming"],
    url: "https://www.notion.so/product/ai",
    keywords: ["writing", "ai", "drafting", "notes", "productivity"],
    pricing: "$10/mo add-on",
    targetUser: "individual",
  },
  // Learning & Education (Individual)
  {
    id: "khan-academy",
    name: "Khan Academy",
    description: "Free educational platform with AI tutor Khanmigo for personalized learning.",
    category: "education",
    features: ["Khanmigo AI tutor", "Free courses", "Progress tracking", "All subjects"],
    url: "https://www.khanacademy.org",
    keywords: ["education", "learning", "courses", "free", "tutoring"],
    pricing: "Free",
    targetUser: "individual",
  },
  {
    id: "coursera",
    name: "Coursera",
    description: "Online learning platform with AI-powered skill assessments and courses from top universities.",
    category: "education",
    features: ["University courses", "Certificates", "Skill assessments", "Career paths"],
    url: "https://www.coursera.org",
    keywords: ["education", "courses", "university", "skills", "certificates"],
    pricing: "$49+/mo",
    targetUser: "individual",
  },
  {
    id: "duolingo",
    name: "Duolingo",
    description: "Language learning app with AI-powered personalization and gamified progress tracking.",
    category: "education",
    features: ["AI personalization", "40+ languages", "Gamification", "Progress tracking"],
    url: "https://www.duolingo.com",
    keywords: ["education", "language", "learning", "free", "app"],
    pricing: "Free - $6.99/mo",
    targetUser: "individual",
  },
  // Personal Finance (Individual)
  {
    id: "ynab",
    name: "YNAB",
    description: "Budgeting app that helps you give every dollar a job and break the paycheck cycle.",
    category: "personal-finance",
    features: ["Zero-based budgeting", "Goal tracking", "Bank sync", "Reports"],
    url: "https://www.ynab.com",
    keywords: ["finance", "budgeting", "personal", "money", "saving"],
    pricing: "$14.99/mo",
    targetUser: "individual",
  },
  {
    id: "mint",
    name: "Mint",
    description: "Free personal finance app for budgeting, bill tracking, and credit score monitoring.",
    category: "personal-finance",
    features: ["Auto-categorization", "Bill reminders", "Credit score", "Insights"],
    url: "https://mint.intuit.com",
    keywords: ["finance", "budgeting", "personal", "free", "tracking"],
    pricing: "Free",
    targetUser: "individual",
  },
  // Companion / Emotional Support
  {
    id: "replika",
    name: "Replika",
    description: "AI companion for emotional support, conversation, and romantic simulation.",
    category: "companion",
    features: ["Emotional support", "Conversation", "Customizable personality", "Memory"],
    url: "https://replika.com",
    keywords: ["companion", "emotional", "chat", "ai friend", "support"],
    pricing: "Free - $19.99/mo",
    targetUser: "individual",
    isNsfw: false,
    nsfwLevel: "partial",
  },
  {
    id: "paradot",
    name: "Paradot",
    description: "Social AI companion focused on emotional bonding and meaningful conversations.",
    category: "companion",
    features: ["Emotional bonding", "Personality development", "Memory", "Conversations"],
    url: "https://www.paradot.ai",
    keywords: ["companion", "emotional", "social", "bonding", "chat"],
    pricing: "Free",
    targetUser: "individual",
    isNsfw: false,
    nsfwLevel: "no",
  },
  {
    id: "character-ai",
    name: "Character.AI",
    description: "Create and chat with AI characters for roleplay, entertainment, and creative interactions.",
    category: "companion",
    features: ["Custom characters", "Roleplay", "Creative conversations", "Persona RP"],
    url: "https://character.ai",
    keywords: ["roleplay", "characters", "chat", "creative", "entertainment"],
    pricing: "Free - $9.99/mo",
    targetUser: "individual",
    isNsfw: false,
    nsfwLevel: "no",
  },
  // Adult / NSFW Companion (18+)
  {
    id: "kindroid",
    name: "Kindroid",
    description: "Customizable AI companion with romantic and intimate conversation options for adults.",
    category: "adult-companion",
    features: ["Customizable AI", "Voice messages", "Intimate conversations", "Memory"],
    url: "https://kindroid.ai",
    keywords: ["adult", "romantic", "companion", "intimate", "18+"],
    pricing: "$13.99/mo",
    targetUser: "individual",
    isNsfw: true,
    nsfwLevel: "yes",
  },
  {
    id: "crushon",
    name: "CrushOn.AI",
    description: "AI roleplay platform for unfiltered romantic and adult fantasy interactions.",
    category: "adult-companion",
    features: ["NSFW roleplay", "Custom characters", "Unfiltered chat", "Scenarios"],
    url: "https://crushon.ai",
    keywords: ["adult", "nsfw", "roleplay", "fantasy", "18+"],
    pricing: "$9.99+/mo",
    targetUser: "individual",
    isNsfw: true,
    nsfwLevel: "yes",
  },
  {
    id: "janitor-ai",
    name: "Janitor AI",
    description: "Character-based AI chat platform supporting NSFW content and creative roleplay.",
    category: "adult-companion",
    features: ["Character creation", "NSFW support", "API integration", "Community"],
    url: "https://janitorai.com",
    keywords: ["adult", "nsfw", "roleplay", "characters", "18+"],
    pricing: "Free - Premium",
    targetUser: "individual",
    isNsfw: true,
    nsfwLevel: "yes",
  },
  {
    id: "chai-ai",
    name: "Chai AI",
    description: "AI chat platform with diverse characters including romantic and adult-oriented bots.",
    category: "adult-companion",
    features: ["Many characters", "Romantic options", "Mobile app", "Premium content"],
    url: "https://chai.ml",
    keywords: ["chat", "companion", "romantic", "mobile", "ai"],
    pricing: "Free - $13.99/mo",
    targetUser: "individual",
    isNsfw: true,
    nsfwLevel: "partial",
  },
];

export const categories = [
  { slug: "customer-support", name: "Customer Support", icon: "HeadphonesIcon", targetUser: "smb" },
  { slug: "sales-crm", name: "Sales & CRM", icon: "TrendingUp", targetUser: "smb" },
  { slug: "marketing-seo", name: "Marketing & SEO", icon: "Megaphone", targetUser: "both" },
  { slug: "social-media", name: "Social Media", icon: "Share2", targetUser: "both" },
  { slug: "finance", name: "Finance & Accounting", icon: "Calculator", targetUser: "smb" },
  { slug: "hr-hiring", name: "HR & Hiring", icon: "Users", targetUser: "smb" },
  { slug: "productivity", name: "Productivity", icon: "Zap", targetUser: "both" },
  { slug: "writing", name: "Writing & Content", icon: "PenLine", targetUser: "individual" },
  { slug: "education", name: "Learning & Education", icon: "GraduationCap", targetUser: "individual" },
  { slug: "personal-finance", name: "Personal Finance", icon: "Wallet", targetUser: "individual" },
  { slug: "companion", name: "AI Companions", icon: "Heart", targetUser: "individual" },
  { slug: "adult-companion", name: "Adult Companions (18+)", icon: "Flame", targetUser: "individual" },
];

export interface MatchResult {
  category: string;
  tools: AITool[];
  fitScores: Map<string, number>;
}

export function matchToolsForBusiness(
  problems: string[],
  priorities: string[],
  budget: string,
  hoursPerWeek: number
): MatchResult {
  const categoryMapping: Record<string, string[]> = {
    "customer-support": ["customer-support"],
    "sales-crm": ["sales-crm"],
    "marketing-seo": ["marketing-seo", "social-media"],
    "email-messaging": ["marketing-seo"],
    "dashboards": ["productivity", "sales-crm"],
    "finance": ["finance"],
    "knowledge-base": ["productivity"],
    "hr-hiring": ["hr-hiring"],
    "workflow": ["productivity"],
  };

  const relevantCategories = new Set<string>();
  problems.forEach(problem => {
    const cats = categoryMapping[problem] || [];
    cats.forEach(c => relevantCategories.add(c));
  });

  const scoredTools = aiTools
    .filter(tool => tool.targetUser === "smb" || tool.targetUser === "both")
    .filter(tool => relevantCategories.has(tool.category))
    .map(tool => {
      let score = 60;
      
      // Problem match bonus
      problems.forEach(problem => {
        if (categoryMapping[problem]?.includes(tool.category)) {
          score += 10;
        }
      });

      // Priority bonus
      if (priorities.includes("save-time") && tool.features.some(f => f.toLowerCase().includes("auto"))) {
        score += 5;
      }
      if (priorities.includes("reduce-cost") && tool.pricing.includes("Free")) {
        score += 5;
      }

      // Hours bonus - more hours = more need
      if (hoursPerWeek > 20) score += 5;
      if (hoursPerWeek > 30) score += 5;

      return { ...tool, fitScore: Math.min(score, 99) };
    })
    .sort((a, b) => (b.fitScore || 0) - (a.fitScore || 0))
    .slice(0, 6);

  const fitScores = new Map<string, number>();
  scoredTools.forEach(t => fitScores.set(t.id, t.fitScore || 0));

  const primaryCategory = scoredTools[0]?.category || "productivity";

  return {
    category: primaryCategory,
    tools: scoredTools,
    fitScores,
  };
}

export function matchToolsForIndividual(
  intents: string[],
  goals: string[],
  isAdultPath: boolean,
  contentLevel: string
): MatchResult {
  const intentMapping: Record<string, string[]> = {
    "productivity": ["productivity"],
    "writing": ["writing"],
    "learning": ["education"],
    "career": ["writing", "productivity"],
    "finance": ["personal-finance"],
    "entertainment": ["companion"],
    "companionship": ["companion"],
    "adult": ["adult-companion", "companion"],
  };

  const relevantCategories = new Set<string>();
  intents.forEach(intent => {
    const cats = intentMapping[intent] || [];
    cats.forEach(c => relevantCategories.add(c));
  });

  let filteredTools = aiTools
    .filter(tool => tool.targetUser === "individual" || tool.targetUser === "both")
    .filter(tool => relevantCategories.has(tool.category));

  // Filter NSFW content based on settings
  if (!isAdultPath || contentLevel === "companion-only") {
    filteredTools = filteredTools.filter(tool => !tool.isNsfw);
  } else if (contentLevel === "romantic") {
    filteredTools = filteredTools.filter(tool => !tool.isNsfw || tool.nsfwLevel === "partial");
  }

  const scoredTools = filteredTools
    .map(tool => {
      let score = 70;
      
      intents.forEach(intent => {
        if (intentMapping[intent]?.includes(tool.category)) {
          score += 8;
        }
      });

      goals.forEach(goal => {
        if (tool.keywords.some(k => goal.toLowerCase().includes(k))) {
          score += 5;
        }
      });

      return { ...tool, fitScore: Math.min(score, 99) };
    })
    .sort((a, b) => (b.fitScore || 0) - (a.fitScore || 0))
    .slice(0, 6);

  const fitScores = new Map<string, number>();
  scoredTools.forEach(t => fitScores.set(t.id, t.fitScore || 0));

  const primaryCategory = scoredTools[0]?.category || "productivity";

  return {
    category: primaryCategory,
    tools: scoredTools,
    fitScores,
  };
}
