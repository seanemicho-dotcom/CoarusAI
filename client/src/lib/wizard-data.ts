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
  companionTypes: string[];
  isAdultPath: boolean;
  ageVerified: boolean;
  contentLevel: string;
  safeWord: string;
  allowStrongLanguage: boolean;
  noHumiliation: boolean;
  allowFantasyCharacters: boolean;
  devicePreference: string;
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
  companionTypes: [],
  isAdultPath: false,
  ageVerified: false,
  contentLevel: "",
  safeWord: "",
  allowStrongLanguage: false,
  noHumiliation: true,
  allowFantasyCharacters: false,
  devicePreference: "both",
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
  { id: "companionship", label: "Companionship & emotional support", icon: "Heart" },
  { id: "adult", label: "Romantic or fantasy experiences (18+)", icon: "Flame" },
];

export const personalGoals = [
  { id: "organize", label: "Organize my tasks, schedule, and life", icon: "ListTodo" },
  { id: "write-faster", label: "Write faster (emails, essays, reports)", icon: "PenLine" },
  { id: "learn-faster", label: "Learn faster or understand complex topics", icon: "GraduationCap" },
  { id: "job-tasks", label: "Get help with job tasks", icon: "Briefcase" },
  { id: "track-finances", label: "Track and plan my personal finances", icon: "Wallet" },
  { id: "creative", label: "Generate creative content", icon: "Palette" },
];

export const companionTypes = [
  { id: "emotional", label: "Emotional support / someone to talk to", icon: "Heart" },
  { id: "daily-chat", label: "Daily conversation & check-ins", icon: "MessageCircle" },
  { id: "romantic", label: "Romantic simulation / virtual partner", icon: "HeartHandshake" },
  { id: "friendship", label: "Friendship & casual company", icon: "Users" },
  { id: "roleplay", label: "Character or roleplay (fantasy, anime, etc.)", icon: "Drama" },
  { id: "erotic", label: "Erotic / sexual fantasy roleplay (18+)", icon: "Flame" },
];

export const contentLevels = [
  { value: "companion-only", label: "Companionship only - friendly / emotional support, no explicit content", color: "bg-gray-100" },
  { value: "romantic", label: "Romantic + suggestive - flirting and romance, but no explicit descriptions", color: "bg-yellow-100" },
  { value: "explicit", label: "Explicit adult content allowed - erotic or sexual themes", color: "bg-red-100" },
];

export const languages = {
  quick: [
    { code: "en", label: "EN" },
    { code: "ko", label: "한국어" },
    { code: "es", label: "Español" },
    { code: "pt", label: "Português" },
    { code: "de", label: "Deutsch" },
    { code: "it", label: "Italiano" },
    { code: "ja", label: "日本語" },
  ],
  all: [
    { code: "en", label: "English" },
    { code: "zh", label: "中文 (Chinese)" },
    { code: "hi", label: "हिन्दी (Hindi)" },
    { code: "es", label: "Español (Spanish)" },
    { code: "ar", label: "العربية (Arabic)" },
    { code: "fr", label: "Français (French)" },
    { code: "bn", label: "বাংলা (Bengali)" },
    { code: "pt", label: "Português (Portuguese)" },
    { code: "ru", label: "Русский (Russian)" },
    { code: "ko", label: "한국어 (Korean)" },
    { code: "ja", label: "日本語 (Japanese)" },
    { code: "de", label: "Deutsch (German)" },
    { code: "it", label: "Italiano (Italian)" },
    { code: "ur", label: "اردو (Urdu)" },
  ],
};
