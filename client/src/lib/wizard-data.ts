export type UserPath = "smb" | "individual";

export interface WizardState {
  path: UserPath | null;
  // SMB Path
  businessTypes: string[];
  businessProblems: string[];
  businessPriorities: string[];
  workflowArea: string;
  workflowDescription: string;
  hoursPerWeek: number;
  monthlyBudget: string;
  // Individual Path
  personalIntents: string[];
  personalGoals: string[];
}

export const initialWizardState: WizardState = {
  path: null,
  businessTypes: [],
  businessProblems: [],
  businessPriorities: [],
  workflowArea: "",
  workflowDescription: "",
  hoursPerWeek: 10,
  monthlyBudget: "",
  personalIntents: [],
  personalGoals: [],
};

export const businessTypes = [
  { id: "small-mid", label: "Small / Mid-size Business", icon: "Building2" },
  { id: "manufacturing", label: "Manufacturing / Industrial", icon: "Factory" },
  { id: "retail", label: "Retail / E-commerce", icon: "ShoppingBag" },
  { id: "services", label: "Professional Services / Agency", icon: "Briefcase" },
  { id: "saas", label: "SaaS / Digital Product", icon: "Code" },
  { id: "hospitality", label: "Hospitality / Restaurant", icon: "UtensilsCrossed" },
  { id: "logistics", label: "Logistics / Warehouse / Supply Chain", icon: "Truck" },
];

export const businessProblems = [
  { id: "customer-support", label: "Automate customer support (chat, tickets, FAQs)", icon: "HeadphonesIcon" },
  { id: "sales-crm", label: "Sales automation & CRM (leads, follow-ups)", icon: "TrendingUp" },
  { id: "marketing-seo", label: "Marketing & SEO content (ads, posts)", icon: "Megaphone" },
  { id: "email-messaging", label: "Email & messaging automation", icon: "Mail" },
  { id: "dashboards", label: "Dashboards & reporting (KPIs, forecasts)", icon: "BarChart3" },
  { id: "finance", label: "Finance & accounting automation", icon: "Calculator" },
  { id: "knowledge-base", label: "Knowledge base & document summarization", icon: "BookOpen" },
  { id: "hr-hiring", label: "HR, hiring & onboarding automation", icon: "Users" },
  { id: "workflow", label: "Internal workflow automation", icon: "Workflow" },
];

export const businessPriorities = [
  { id: "save-time", label: "Save time / reduce manual work", icon: "Clock" },
  { id: "reduce-cost", label: "Reduce operating cost", icon: "DollarSign" },
  { id: "increase-revenue", label: "Increase revenue / conversions", icon: "TrendingUp" },
  { id: "customer-experience", label: "Improve customer experience", icon: "Heart" },
  { id: "productivity", label: "Increase employee productivity", icon: "Zap" },
  { id: "analytics", label: "Better data, dashboards & decisions", icon: "BarChart" },
];

export const workflowAreas = [
  "Customer support",
  "Sales / CRM",
  "Marketing / SEO",
  "Finance / accounting",
  "Operations / logistics",
  "HR / hiring",
  "General admin / back-office",
  "Other",
];

export const budgetOptions = [
  { value: "0-100", label: "$0 - $100" },
  { value: "100-500", label: "$100 - $500" },
  { value: "500-2000", label: "$500 - $2,000" },
  { value: "2000+", label: "$2,000+" },
];

export const personalIntents = [
  { id: "productivity", label: "Personal Productivity", icon: "Brain" },
  { id: "learning", label: "Learning & Skills", icon: "GraduationCap" },
  { id: "creative", label: "Creative Studio", icon: "Palette" },
  { id: "writing", label: "Writing & Content", icon: "PenLine" },
];

export const personalGoalsByIntent: Record<string, { id: string; label: string; icon: string }[]> = {
  productivity: [
    { id: "organize-tasks", label: "Organize my tasks and to-do lists", icon: "ListTodo" },
    { id: "manage-schedule", label: "Manage my calendar and schedule", icon: "Calendar" },
    { id: "stay-focused", label: "Stay focused and avoid distractions", icon: "Target" },
    { id: "build-habits", label: "Build better habits and routines", icon: "RefreshCw" },
    { id: "take-notes", label: "Take and organize notes effectively", icon: "FileText" },
  ],
  learning: [
    { id: "understand-topics", label: "Understand complex topics easily", icon: "Lightbulb" },
    { id: "learn-language", label: "Learn a new language", icon: "Globe" },
    { id: "study-help", label: "Get homework and study help", icon: "GraduationCap" },
    { id: "research", label: "Research and summarize information", icon: "Search" },
    { id: "skill-building", label: "Develop new skills", icon: "Wrench" },
  ],
  creative: [
    { id: "generate-art", label: "Create AI-generated art and images", icon: "Palette" },
    { id: "create-music", label: "Make music or audio content", icon: "Music" },
    { id: "video-editing", label: "Edit and enhance videos", icon: "Clapperboard" },
    { id: "design-graphics", label: "Design graphics and visuals", icon: "Sparkles" },
    { id: "creative-projects", label: "Fun creative projects and experiments", icon: "Lightbulb" },
  ],
  writing: [
    { id: "write-emails", label: "Write better emails faster", icon: "Mail" },
    { id: "write-essays", label: "Help with essays and reports", icon: "FileText" },
    { id: "improve-grammar", label: "Improve grammar and style", icon: "CheckCircle" },
    { id: "creative-writing", label: "Creative writing and storytelling", icon: "Feather" },
    { id: "social-posts", label: "Create social media content", icon: "Share2" },
  ],
};

export const defaultPersonalGoals = [
  { id: "save-time", label: "Save time on daily tasks", icon: "Clock" },
  { id: "be-creative", label: "Be more creative", icon: "Palette" },
  { id: "learn-something", label: "Learn something new", icon: "GraduationCap" },
  { id: "have-fun", label: "Have fun and be entertained", icon: "Smile" },
  { id: "stay-organized", label: "Stay organized", icon: "ListTodo" },
];

export function getPersonalGoalsForIntents(selectedIntents: string[]): { id: string; label: string; icon: string }[] {
  if (selectedIntents.length === 0) {
    return defaultPersonalGoals;
  }
  
  const goalsSet = new Map<string, { id: string; label: string; icon: string }>();
  
  for (const intent of selectedIntents) {
    const intentGoals = personalGoalsByIntent[intent];
    if (intentGoals) {
      for (const goal of intentGoals) {
        if (!goalsSet.has(goal.id)) {
          goalsSet.set(goal.id, goal);
        }
      }
    }
  }
  
  if (goalsSet.size === 0) {
    return defaultPersonalGoals;
  }
  
  return Array.from(goalsSet.values());
}

export const languages = {
  quick: [
    { code: "en", label: "EN" },
    { code: "es", label: "Español" },
    { code: "zh", label: "中文" },
    { code: "fr", label: "Français" },
    { code: "ko", label: "한국어" },
    { code: "hi", label: "हिन्दी" },
    { code: "de", label: "Deutsch" },
  ],
  all: [
    { code: "en", label: "English" },
    { code: "es", label: "Español (Spanish)" },
    { code: "zh", label: "中文 (Chinese)" },
    { code: "fr", label: "Français (French)" },
    { code: "ko", label: "한국어 (Korean)" },
    { code: "hi", label: "हिन्दी (Hindi)" },
    { code: "de", label: "Deutsch (German)" },
    { code: "it", label: "Italiano (Italian)" },
    { code: "ja", label: "日本語 (Japanese)" },
    { code: "bn", label: "বাংলা (Bengali)" },
    { code: "ru", label: "Русский (Russian)" },
    { code: "ar", label: "العربية (Arabic)" },
    { code: "pt", label: "Português (Portuguese)" },
  ],
};
