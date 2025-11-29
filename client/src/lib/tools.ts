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
  // Bookkeeping
  {
    id: "quickbooks",
    name: "QuickBooks Online",
    description: "Cloud-based accounting software with AI-powered categorization, receipt scanning, and financial insights for small businesses.",
    category: "bookkeeping",
    features: ["Auto-categorization", "Receipt capture", "Invoicing", "Tax prep"],
    url: "https://quickbooks.intuit.com",
    keywords: ["bookkeeping", "accounting", "invoicing", "taxes", "finance"]
  },
  {
    id: "xero",
    name: "Xero",
    description: "Cloud accounting with AI-driven bank reconciliation, expense tracking, and financial reporting for growing businesses.",
    category: "bookkeeping",
    features: ["Bank feeds", "Smart reconciliation", "Multi-currency", "Payroll"],
    url: "https://www.xero.com",
    keywords: ["bookkeeping", "accounting", "invoicing", "finance", "payroll"]
  },
  {
    id: "wave",
    name: "Wave Accounting",
    description: "Free accounting software for small businesses with automated invoicing, receipt scanning, and financial reports.",
    category: "bookkeeping",
    features: ["Free accounting", "Invoicing", "Receipt scanning", "Financial reports"],
    url: "https://www.waveapps.com",
    keywords: ["bookkeeping", "accounting", "invoicing", "free", "small business"]
  },
  {
    id: "zoho-books",
    name: "Zoho Books",
    description: "Online accounting software with automated workflows, bank feeds, and inventory management for small businesses.",
    category: "bookkeeping",
    features: ["Automated workflows", "Bank feeds", "Inventory", "Time tracking"],
    url: "https://www.zoho.com/books",
    keywords: ["bookkeeping", "accounting", "invoicing", "inventory"]
  },
  // Invoicing
  {
    id: "freshbooks",
    name: "FreshBooks",
    description: "Invoicing and accounting software built for small business owners with automatic payment reminders and expense tracking.",
    category: "invoicing",
    features: ["Professional invoices", "Auto reminders", "Time tracking", "Expenses"],
    url: "https://www.freshbooks.com",
    keywords: ["invoicing", "billing", "accounting", "payments"]
  },
  {
    id: "zoho-invoice",
    name: "Zoho Invoice",
    description: "Free online invoicing software with automated payment reminders, time tracking, and multi-currency support.",
    category: "invoicing",
    features: ["Free invoicing", "Payment reminders", "Time tracking", "Multi-currency"],
    url: "https://www.zoho.com/invoice",
    keywords: ["invoicing", "billing", "free", "payments"]
  },
  {
    id: "invoice-ninja",
    name: "Invoice Ninja",
    description: "Open-source invoicing platform with proposals, recurring invoices, and auto-billing for freelancers and businesses.",
    category: "invoicing",
    features: ["Recurring invoices", "Proposals", "Auto-billing", "Open source"],
    url: "https://www.invoiceninja.com",
    keywords: ["invoicing", "billing", "freelancer", "proposals"]
  },
  {
    id: "square-invoices",
    name: "Square Invoices",
    description: "Free invoicing tool that lets you send invoices, track payments, and accept card payments from anywhere.",
    category: "invoicing",
    features: ["Free to send", "Card payments", "Payment tracking", "Mobile app"],
    url: "https://squareup.com/invoices",
    keywords: ["invoicing", "billing", "payments", "mobile"]
  },
  // Marketing
  {
    id: "jasper",
    name: "Jasper AI",
    description: "AI copywriting assistant that helps create marketing content, blog posts, social media copy, and ads in seconds.",
    category: "marketing",
    features: ["AI copywriting", "50+ templates", "Brand voice", "SEO optimization"],
    url: "https://www.jasper.ai",
    keywords: ["marketing", "content", "copywriting", "social media", "ads", "blog", "seo"]
  },
  {
    id: "copyai",
    name: "Copy.ai",
    description: "AI-powered writing tool for creating marketing copy, emails, social posts, and product descriptions instantly.",
    category: "marketing",
    features: ["90+ templates", "Multiple languages", "Team collaboration", "Brand voice"],
    url: "https://www.copy.ai",
    keywords: ["marketing", "content", "copywriting", "email", "social media"]
  },
  {
    id: "writesonic",
    name: "Writesonic",
    description: "AI writing platform for creating SEO-optimized content, ads, landing pages, and product descriptions.",
    category: "marketing",
    features: ["SEO content", "Landing pages", "Ad copy", "Article writer"],
    url: "https://writesonic.com",
    keywords: ["marketing", "content", "seo", "ads", "landing pages"]
  },
  {
    id: "canva",
    name: "Canva (Magic Design)",
    description: "Design platform with AI-powered Magic Design for creating graphics, presentations, and marketing materials easily.",
    category: "marketing",
    features: ["Magic Design AI", "Brand kit", "Templates", "Video editing"],
    url: "https://www.canva.com",
    keywords: ["marketing", "design", "graphics", "social media", "presentations"]
  },
  // Social Media
  {
    id: "buffer",
    name: "Buffer",
    description: "Social media management platform with AI-powered scheduling, analytics, and content suggestions for all platforms.",
    category: "social media",
    features: ["Auto-scheduling", "AI content ideas", "Analytics", "Multi-platform"],
    url: "https://buffer.com",
    keywords: ["social media", "marketing", "scheduling", "instagram", "twitter", "facebook"]
  },
  {
    id: "hootsuite",
    name: "Hootsuite",
    description: "Social media management tool for scheduling posts, monitoring mentions, and analyzing performance across networks.",
    category: "social media",
    features: ["Bulk scheduling", "Social listening", "Team collaboration", "Analytics"],
    url: "https://www.hootsuite.com",
    keywords: ["social media", "marketing", "scheduling", "monitoring", "analytics"]
  },
  {
    id: "later",
    name: "Later",
    description: "Visual social media planner for Instagram, TikTok, and Pinterest with drag-and-drop calendar and analytics.",
    category: "social media",
    features: ["Visual planner", "Link in bio", "Best time to post", "User-generated content"],
    url: "https://later.com",
    keywords: ["social media", "instagram", "tiktok", "pinterest", "scheduling"]
  },
  {
    id: "metricool",
    name: "Metricool",
    description: "All-in-one social media tool for planning, analyzing, and growing your presence across all major platforms.",
    category: "social media",
    features: ["Content planner", "Competitor analysis", "Reports", "Ad management"],
    url: "https://metricool.com",
    keywords: ["social media", "analytics", "scheduling", "competitors"]
  },
  // Customer Service
  {
    id: "freshdesk",
    name: "Freshdesk",
    description: "Cloud-based customer support with AI-powered automation, self-service portal, and team collaboration tools.",
    category: "customer service",
    features: ["Freddy AI", "Auto-assign", "Knowledge base", "Team inbox"],
    url: "https://freshdesk.com",
    keywords: ["customer service", "support", "tickets", "automation", "help desk"]
  },
  {
    id: "zendesk",
    name: "Zendesk",
    description: "Customer service platform with AI-powered ticket routing, suggested replies, and omnichannel support.",
    category: "customer service",
    features: ["AI ticket routing", "Answer bot", "Analytics", "Omnichannel"],
    url: "https://www.zendesk.com",
    keywords: ["customer service", "support", "tickets", "help desk", "crm"]
  },
  {
    id: "tidio",
    name: "Tidio",
    description: "Live chat and chatbot platform for websites with AI-powered responses and visitor tracking for small businesses.",
    category: "customer service",
    features: ["Live chat", "AI chatbots", "Visitor tracking", "Email integration"],
    url: "https://www.tidio.com",
    keywords: ["customer service", "chat", "chatbot", "live chat", "website"]
  },
  {
    id: "intercom",
    name: "Intercom",
    description: "AI-powered customer messaging platform for support, engagement, and conversational bots across all channels.",
    category: "customer service",
    features: ["AI chatbots", "Live chat", "Help center", "Proactive support"],
    url: "https://www.intercom.com",
    keywords: ["customer service", "support", "chat", "chatbot", "help desk"]
  },
  // Sales CRM
  {
    id: "hubspot",
    name: "HubSpot CRM",
    description: "Free CRM with AI-powered lead scoring, email tracking, and sales automation tools for growing teams.",
    category: "sales crm",
    features: ["AI lead scoring", "Email tracking", "Pipeline management", "Free tier"],
    url: "https://www.hubspot.com/crm",
    keywords: ["crm", "sales", "leads", "marketing", "automation"]
  },
  {
    id: "pipedrive",
    name: "Pipedrive",
    description: "Sales CRM with AI sales assistant for deal insights, activity suggestions, and visual pipeline management.",
    category: "sales crm",
    features: ["AI assistant", "Visual pipeline", "Lead scoring", "Email integration"],
    url: "https://www.pipedrive.com",
    keywords: ["crm", "sales", "pipeline", "deals", "small business"]
  },
  {
    id: "zoho-crm",
    name: "Zoho CRM",
    description: "CRM software with Zia AI for predictions, lead scoring, and workflow automation for sales teams.",
    category: "sales crm",
    features: ["Zia AI", "Lead scoring", "Workflow automation", "Multichannel"],
    url: "https://www.zoho.com/crm",
    keywords: ["crm", "sales", "leads", "automation", "ai"]
  },
  {
    id: "close-crm",
    name: "Close CRM",
    description: "CRM built for sales teams with built-in calling, email sequences, and pipeline automation features.",
    category: "sales crm",
    features: ["Built-in calling", "Email sequences", "Pipeline automation", "Reporting"],
    url: "https://www.close.com",
    keywords: ["crm", "sales", "calling", "email", "pipeline"]
  },
  // Productivity
  {
    id: "notion",
    name: "Notion",
    description: "All-in-one workspace with AI writing assistant, databases, wikis, and project tracking for teams.",
    category: "productivity",
    features: ["Notion AI", "Databases", "Wiki", "Project tracking"],
    url: "https://www.notion.so",
    keywords: ["productivity", "notes", "wiki", "project management", "ai writing"]
  },
  {
    id: "todoist",
    name: "Todoist",
    description: "Task management app with natural language input, recurring tasks, and smart scheduling for personal productivity.",
    category: "productivity",
    features: ["Natural language", "Recurring tasks", "Labels & filters", "Integrations"],
    url: "https://todoist.com",
    keywords: ["productivity", "tasks", "to-do", "personal", "organization"]
  },
  {
    id: "microsoft-todo",
    name: "Microsoft To Do",
    description: "Simple task management app integrated with Microsoft 365 with smart suggestions and My Day planning.",
    category: "productivity",
    features: ["My Day", "Smart suggestions", "Microsoft 365", "Shared lists"],
    url: "https://todo.microsoft.com",
    keywords: ["productivity", "tasks", "to-do", "microsoft", "free"]
  },
  {
    id: "google-tasks",
    name: "Google Tasks",
    description: "Simple task manager integrated with Gmail and Google Calendar for managing to-dos alongside your schedule.",
    category: "productivity",
    features: ["Gmail integration", "Calendar sync", "Subtasks", "Mobile app"],
    url: "https://support.google.com/tasks",
    keywords: ["productivity", "tasks", "to-do", "google", "free"]
  },
  // Project Management
  {
    id: "trello",
    name: "Trello",
    description: "Visual project management with Kanban boards, Butler automation, and Power-Ups for team collaboration.",
    category: "project management",
    features: ["Kanban boards", "Butler automation", "Power-Ups", "Templates"],
    url: "https://trello.com",
    keywords: ["project management", "kanban", "boards", "tasks", "visual"]
  },
  {
    id: "asana",
    name: "Asana",
    description: "Project management with AI-powered task prioritization, timeline views, and workflow automation for teams.",
    category: "project management",
    features: ["AI prioritization", "Timeline view", "Goals tracking", "Workload"],
    url: "https://asana.com",
    keywords: ["project management", "tasks", "team", "collaboration", "goals"]
  },
  {
    id: "clickup",
    name: "ClickUp",
    description: "All-in-one project management with AI task creation, docs, time tracking, and customizable workflows.",
    category: "project management",
    features: ["ClickUp AI", "Custom views", "Docs", "Time tracking"],
    url: "https://clickup.com",
    keywords: ["project management", "tasks", "team", "collaboration", "docs"]
  },
  {
    id: "monday",
    name: "Monday.com",
    description: "Work OS with AI-powered project tracking, automation, and team collaboration for any workflow.",
    category: "project management",
    features: ["AI automations", "Visual boards", "Time tracking", "Integrations"],
    url: "https://monday.com",
    keywords: ["project management", "tasks", "team", "collaboration", "workflow"]
  },
  // Writing
  {
    id: "grammarly",
    name: "Grammarly",
    description: "AI writing assistant for grammar, clarity, tone, and style improvements across all your content.",
    category: "writing",
    features: ["Grammar check", "Tone detection", "Plagiarism", "Style guide"],
    url: "https://www.grammarly.com",
    keywords: ["writing", "grammar", "productivity", "communication", "email"]
  },
  {
    id: "quillbot",
    name: "Quillbot",
    description: "AI paraphrasing and writing tool for rewording, summarizing, and improving your text instantly.",
    category: "writing",
    features: ["Paraphraser", "Summarizer", "Grammar checker", "Citation generator"],
    url: "https://quillbot.com",
    keywords: ["writing", "paraphrase", "summarize", "grammar", "academic"]
  },
  {
    id: "notion-ai",
    name: "Notion AI",
    description: "AI writing assistant built into Notion for drafting, editing, summarizing, and brainstorming content.",
    category: "writing",
    features: ["AI drafting", "Summarization", "Translation", "Brainstorming"],
    url: "https://www.notion.so/product/ai",
    keywords: ["writing", "ai", "drafting", "notes", "productivity"]
  },
  {
    id: "jasper-docs",
    name: "Jasper Documents",
    description: "AI-powered document editor for creating long-form content, blogs, and articles with your brand voice.",
    category: "writing",
    features: ["Long-form content", "Brand voice", "SEO mode", "Collaboration"],
    url: "https://www.jasper.ai",
    keywords: ["writing", "content", "blog", "articles", "ai"]
  },
  // Education
  {
    id: "khan-academy",
    name: "Khan Academy",
    description: "Free educational platform with AI tutor Khanmigo for personalized learning in math, science, and more.",
    category: "education",
    features: ["Khanmigo AI tutor", "Free courses", "Progress tracking", "All subjects"],
    url: "https://www.khanacademy.org",
    keywords: ["education", "learning", "courses", "free", "tutoring"]
  },
  {
    id: "quizlet",
    name: "Quizlet",
    description: "Learning platform with AI-powered flashcards, practice tests, and study games for any subject.",
    category: "education",
    features: ["AI flashcards", "Practice tests", "Study games", "Learn mode"],
    url: "https://quizlet.com",
    keywords: ["education", "learning", "flashcards", "studying", "memory"]
  },
  {
    id: "coursera",
    name: "Coursera",
    description: "Online learning platform with AI-powered skill assessments and courses from top universities worldwide.",
    category: "education",
    features: ["University courses", "Certificates", "Skill assessments", "Career paths"],
    url: "https://www.coursera.org",
    keywords: ["education", "courses", "university", "skills", "certificates"]
  },
  {
    id: "duolingo",
    name: "Duolingo",
    description: "Language learning app with AI-powered personalization, bite-sized lessons, and gamified progress tracking.",
    category: "education",
    features: ["AI personalization", "40+ languages", "Gamification", "Progress tracking"],
    url: "https://www.duolingo.com",
    keywords: ["education", "language", "learning", "free", "app"]
  }
];

export const categories = [
  { slug: "bookkeeping", name: "Bookkeeping", icon: "Calculator" },
  { slug: "invoicing", name: "Invoicing", icon: "Receipt" },
  { slug: "marketing", name: "Marketing", icon: "Megaphone" },
  { slug: "social media", name: "Social Media", icon: "Share2" },
  { slug: "customer service", name: "Customer Service", icon: "HeadphonesIcon" },
  { slug: "sales crm", name: "Sales CRM", icon: "Users" },
  { slug: "productivity", name: "Productivity", icon: "Zap" },
  { slug: "project management", name: "Project Management", icon: "FolderKanban" },
  { slug: "writing", name: "Writing", icon: "PenLine" },
  { slug: "education", name: "Education", icon: "GraduationCap" },
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
    if (needLower.includes(tool.category.toLowerCase())) {
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
      tools: aiTools.filter(t => t.category === "productivity").slice(0, 4)
    };
  }
  
  return {
    category: primaryCategory,
    tools: topTools.map(({ score, ...tool }) => tool)
  };
}
