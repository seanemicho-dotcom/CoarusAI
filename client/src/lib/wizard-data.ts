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
  { id: "productivity", label: "Personal productivity & organization", icon: "Brain" },
  { id: "writing", label: "Writing & content help", icon: "PenLine" },
  { id: "learning", label: "Studying, learning, or research", icon: "BookOpen" },
  { id: "career", label: "Job & career support", icon: "Briefcase" },
  { id: "finance", label: "Personal finance organization", icon: "DollarSign" },
  { id: "entertainment", label: "Entertainment / fun / creativity", icon: "Gamepad2" },
];

export const personalGoals = [
  { id: "organize", label: "Organize my tasks, schedule, and life", icon: "ListTodo" },
  { id: "write-faster", label: "Write faster (emails, essays, reports)", icon: "PenLine" },
  { id: "learn-faster", label: "Learn faster or understand complex topics", icon: "GraduationCap" },
  { id: "job-tasks", label: "Get help with job tasks", icon: "Briefcase" },
  { id: "track-finances", label: "Track and plan my personal finances", icon: "Wallet" },
  { id: "creative", label: "Generate creative content", icon: "Palette" },
];

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
