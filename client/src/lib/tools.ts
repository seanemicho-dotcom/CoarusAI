// todo: remove mock functionality - replace with API call
export interface AITool {
  id: string;
  name: string;
  description: string;
  category: string;
  features: string[];
  url: string;
  keywords: string[];
}

export const aiTools: AITool[] = [
  // Marketing
  {
    id: "jasper",
    name: "Jasper",
    description: "AI copywriting assistant that helps create marketing content, blog posts, social media copy, and ads in seconds.",
    category: "marketing",
    features: ["AI copywriting", "50+ templates", "Brand voice", "SEO optimization"],
    url: "https://www.jasper.ai",
    keywords: ["marketing", "content", "copywriting", "social media", "ads", "blog", "seo"]
  },
  {
    id: "buffer",
    name: "Buffer",
    description: "Social media management platform with AI-powered scheduling, analytics, and content suggestions.",
    category: "marketing",
    features: ["Auto-scheduling", "AI content ideas", "Analytics", "Multi-platform"],
    url: "https://buffer.com",
    keywords: ["social media", "marketing", "scheduling", "instagram", "twitter", "facebook"]
  },
  {
    id: "mailchimp",
    name: "Mailchimp",
    description: "Email marketing platform with AI-powered personalization, automation, and campaign optimization.",
    category: "marketing",
    features: ["Email automation", "AI recommendations", "A/B testing", "Customer journeys"],
    url: "https://mailchimp.com",
    keywords: ["email", "marketing", "newsletter", "automation", "campaigns"]
  },
  // Customer Service
  {
    id: "intercom",
    name: "Intercom",
    description: "AI-powered customer messaging platform for support, engagement, and conversational bots.",
    category: "customer-service",
    features: ["AI chatbots", "Live chat", "Help center", "Proactive support"],
    url: "https://www.intercom.com",
    keywords: ["customer service", "support", "chat", "chatbot", "help desk"]
  },
  {
    id: "zendesk",
    name: "Zendesk",
    description: "Customer service platform with AI-powered ticket routing, suggested replies, and automation.",
    category: "customer-service",
    features: ["AI ticket routing", "Answer bot", "Analytics", "Omnichannel"],
    url: "https://www.zendesk.com",
    keywords: ["customer service", "support", "tickets", "help desk", "crm"]
  },
  {
    id: "freshdesk",
    name: "Freshdesk",
    description: "Cloud-based customer support with AI-powered automation, self-service, and team collaboration.",
    category: "customer-service",
    features: ["Freddy AI", "Auto-assign", "Knowledge base", "Team inbox"],
    url: "https://freshdesk.com",
    keywords: ["customer service", "support", "tickets", "automation"]
  },
  // Bookkeeping
  {
    id: "quickbooks",
    name: "QuickBooks",
    description: "Accounting software with AI-powered categorization, receipt scanning, and financial insights.",
    category: "bookkeeping",
    features: ["Auto-categorization", "Receipt capture", "Invoicing", "Tax prep"],
    url: "https://quickbooks.intuit.com",
    keywords: ["bookkeeping", "accounting", "invoicing", "taxes", "finance"]
  },
  {
    id: "xero",
    name: "Xero",
    description: "Cloud accounting with AI-driven bank reconciliation, expense tracking, and financial reporting.",
    category: "bookkeeping",
    features: ["Bank feeds", "Smart reconciliation", "Multi-currency", "Payroll"],
    url: "https://www.xero.com",
    keywords: ["bookkeeping", "accounting", "invoicing", "finance", "payroll"]
  },
  {
    id: "wave",
    name: "Wave",
    description: "Free accounting software for small businesses with automated invoicing and receipt scanning.",
    category: "bookkeeping",
    features: ["Free accounting", "Invoicing", "Receipt scanning", "Financial reports"],
    url: "https://www.waveapps.com",
    keywords: ["bookkeeping", "accounting", "invoicing", "free", "small business"]
  },
  // Productivity
  {
    id: "notion",
    name: "Notion AI",
    description: "All-in-one workspace with AI writing assistant, databases, and team collaboration tools.",
    category: "productivity",
    features: ["AI writing", "Databases", "Wiki", "Project tracking"],
    url: "https://www.notion.so",
    keywords: ["productivity", "notes", "wiki", "project management", "ai writing"]
  },
  {
    id: "clickup",
    name: "ClickUp",
    description: "Project management platform with AI-powered task creation, summaries, and workflow automation.",
    category: "productivity",
    features: ["ClickUp AI", "Task management", "Docs", "Time tracking"],
    url: "https://clickup.com",
    keywords: ["productivity", "project management", "tasks", "collaboration"]
  },
  {
    id: "grammarly",
    name: "Grammarly",
    description: "AI writing assistant for grammar, clarity, tone, and style improvements across all your content.",
    category: "productivity",
    features: ["Grammar check", "Tone detection", "Plagiarism", "Style guide"],
    url: "https://www.grammarly.com",
    keywords: ["writing", "grammar", "productivity", "communication", "email"]
  },
  // CRM
  {
    id: "hubspot",
    name: "HubSpot CRM",
    description: "Free CRM with AI-powered lead scoring, email tracking, and sales automation tools.",
    category: "crm",
    features: ["AI lead scoring", "Email tracking", "Pipeline management", "Free tier"],
    url: "https://www.hubspot.com/crm",
    keywords: ["crm", "sales", "leads", "marketing", "automation"]
  },
  {
    id: "salesforce",
    name: "Salesforce Einstein",
    description: "Enterprise CRM with Einstein AI for predictions, recommendations, and intelligent automation.",
    category: "crm",
    features: ["Einstein AI", "Sales Cloud", "Forecasting", "Analytics"],
    url: "https://www.salesforce.com",
    keywords: ["crm", "sales", "enterprise", "leads", "automation"]
  },
  {
    id: "pipedrive",
    name: "Pipedrive",
    description: "Sales CRM with AI sales assistant for deal insights, activity suggestions, and automation.",
    category: "crm",
    features: ["AI assistant", "Visual pipeline", "Lead scoring", "Email integration"],
    url: "https://www.pipedrive.com",
    keywords: ["crm", "sales", "pipeline", "deals", "small business"]
  },
  // Project Management
  {
    id: "monday",
    name: "Monday.com",
    description: "Work OS with AI-powered project tracking, automation, and team collaboration features.",
    category: "project-management",
    features: ["AI automations", "Visual boards", "Time tracking", "Integrations"],
    url: "https://monday.com",
    keywords: ["project management", "tasks", "team", "collaboration", "workflow"]
  },
  {
    id: "asana",
    name: "Asana",
    description: "Project management with AI-powered task prioritization, status updates, and workflow automation.",
    category: "project-management",
    features: ["AI prioritization", "Timeline view", "Goals tracking", "Workload"],
    url: "https://asana.com",
    keywords: ["project management", "tasks", "team", "collaboration", "goals"]
  },
  {
    id: "trello",
    name: "Trello",
    description: "Visual project management with Butler automation and AI-powered suggestions for productivity.",
    category: "project-management",
    features: ["Butler automation", "Kanban boards", "Power-Ups", "Templates"],
    url: "https://trello.com",
    keywords: ["project management", "kanban", "boards", "tasks", "visual"]
  },
  // Education
  {
    id: "coursera",
    name: "Coursera for Business",
    description: "Enterprise learning platform with AI-powered skill assessments and personalized learning paths.",
    category: "education",
    features: ["AI recommendations", "Skill tracking", "Certificates", "Enterprise tools"],
    url: "https://www.coursera.org/business",
    keywords: ["education", "training", "courses", "skills", "learning"]
  },
  {
    id: "duolingo",
    name: "Duolingo for Business",
    description: "Language learning platform with AI-powered personalization and progress tracking for teams.",
    category: "education",
    features: ["AI personalization", "40+ languages", "Team dashboard", "Gamification"],
    url: "https://www.duolingo.com",
    keywords: ["education", "language", "learning", "training", "team"]
  },
  // Content Creation
  {
    id: "canva",
    name: "Canva",
    description: "Design platform with AI-powered tools for creating graphics, presentations, and marketing materials.",
    category: "content-creation",
    features: ["Magic Design", "Brand kit", "Templates", "Video editing"],
    url: "https://www.canva.com",
    keywords: ["design", "graphics", "content", "marketing", "social media", "presentations"]
  },
  {
    id: "midjourney",
    name: "Midjourney",
    description: "AI image generation tool for creating stunning visuals, artwork, and marketing imagery.",
    category: "content-creation",
    features: ["AI art", "High quality", "Style control", "Fast generation"],
    url: "https://www.midjourney.com",
    keywords: ["content", "images", "art", "design", "graphics", "ai images"]
  },
  {
    id: "descript",
    name: "Descript",
    description: "AI-powered audio and video editing with transcription, voice cloning, and screen recording.",
    category: "content-creation",
    features: ["AI editing", "Transcription", "Screen recording", "Overdub voice"],
    url: "https://www.descript.com",
    keywords: ["video", "audio", "podcast", "content", "editing", "transcription"]
  }
];

export const categories = [
  { slug: "marketing", name: "Marketing", icon: "Megaphone" },
  { slug: "customer-service", name: "Customer Service", icon: "HeadphonesIcon" },
  { slug: "bookkeeping", name: "Bookkeeping", icon: "Calculator" },
  { slug: "productivity", name: "Productivity", icon: "Zap" },
  { slug: "crm", name: "CRM", icon: "Users" },
  { slug: "project-management", name: "Project Management", icon: "FolderKanban" },
  { slug: "education", name: "Education", icon: "GraduationCap" },
  { slug: "content-creation", name: "Content Creation", icon: "FileText" },
];

export function matchTools(userNeed: string): { category: string; tools: AITool[] } {
  const needLower = userNeed.toLowerCase();
  
  // Score each tool based on keyword matches
  const scoredTools = aiTools.map(tool => {
    let score = 0;
    tool.keywords.forEach(keyword => {
      if (needLower.includes(keyword)) {
        score += 2;
      }
    });
    // Check category name
    if (needLower.includes(tool.category.replace("-", " "))) {
      score += 3;
    }
    // Check tool name
    if (needLower.includes(tool.name.toLowerCase())) {
      score += 5;
    }
    // Check description words
    const descWords = tool.description.toLowerCase().split(" ");
    descWords.forEach(word => {
      if (word.length > 4 && needLower.includes(word)) {
        score += 1;
      }
    });
    return { ...tool, score };
  });
  
  // Sort by score and get top matches
  const topTools = scoredTools
    .filter(t => t.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 5);
  
  // Determine primary category
  const categoryCounts: Record<string, number> = {};
  topTools.forEach(tool => {
    categoryCounts[tool.category] = (categoryCounts[tool.category] || 0) + tool.score;
  });
  
  let primaryCategory = "productivity"; // default
  let maxCount = 0;
  Object.entries(categoryCounts).forEach(([cat, count]) => {
    if (count > maxCount) {
      maxCount = count;
      primaryCategory = cat;
    }
  });
  
  // If no matches, return general productivity tools
  if (topTools.length === 0) {
    return {
      category: "productivity",
      tools: aiTools.filter(t => t.category === "productivity").slice(0, 3)
    };
  }
  
  return {
    category: primaryCategory,
    tools: topTools.map(({ score, ...tool }) => tool)
  };
}
