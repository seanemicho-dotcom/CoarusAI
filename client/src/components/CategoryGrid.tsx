import { Link } from "wouter";
import { 
  HeadphonesIcon, 
  TrendingUp, 
  Megaphone, 
  Share2,
  Calculator, 
  Users, 
  Zap, 
  PenLine,
  GraduationCap,
  Heart,
  ArrowRight
} from "lucide-react";

const categories = [
  { 
    icon: HeadphonesIcon, 
    name: "Customer Support", 
    description: "AI chatbots, ticketing systems, and 24/7 automated support",
    features: ["Smart FAQ responses", "Ticket routing", "Live chat AI"],
    slug: "customer-support" 
  },
  { 
    icon: TrendingUp, 
    name: "Sales & CRM", 
    description: "Lead scoring, pipeline automation, and sales intelligence",
    features: ["Lead qualification", "Email automation", "Deal insights"],
    slug: "sales-crm" 
  },
  { 
    icon: Megaphone, 
    name: "Marketing & SEO", 
    description: "Content optimization, keyword research, and campaign tools",
    features: ["SEO analysis", "Content generation", "A/B testing"],
    slug: "marketing-seo" 
  },
  { 
    icon: Share2, 
    name: "Social Media", 
    description: "Scheduling, analytics, and content creation for social platforms",
    features: ["Auto-scheduling", "Engagement tracking", "Content ideas"],
    slug: "social-media" 
  },
  { 
    icon: Calculator, 
    name: "Finance", 
    description: "Accounting automation, invoicing, and financial analysis",
    features: ["Invoice processing", "Expense tracking", "Reports"],
    slug: "finance" 
  },
  { 
    icon: Users, 
    name: "HR & Hiring", 
    description: "Recruitment automation, candidate screening, and onboarding",
    features: ["Resume screening", "Interview scheduling", "Onboarding"],
    slug: "hr-hiring" 
  },
  { 
    icon: Zap, 
    name: "Productivity", 
    description: "Task management, workflow automation, and time optimization",
    features: ["Task automation", "Meeting notes", "Project tracking"],
    slug: "productivity" 
  },
  { 
    icon: PenLine, 
    name: "Writing & Content", 
    description: "AI-powered writing assistance, editing, and content creation",
    features: ["Blog writing", "Copy editing", "Translation"],
    slug: "writing" 
  },
  { 
    icon: GraduationCap, 
    name: "Education", 
    description: "Learning platforms, tutoring, and educational content",
    features: ["AI tutoring", "Course creation", "Skill assessment"],
    slug: "education" 
  },
  { 
    icon: Heart, 
    name: "Personal AI", 
    description: "Personal assistants, companions, and lifestyle tools",
    features: ["Personal coaching", "Health tracking", "Life planning"],
    slug: "companion" 
  },
];

export default function CategoryGrid() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <h2 
          className="text-3xl md:text-4xl font-bold text-center mb-4"
          data-testid="text-categories-title"
        >
          AI Tool <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">Categories</span>
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          Browse solutions organized by business function and personal needs
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.slice(0, 6).map((category) => (
            <Link key={category.slug} href="/find-tools">
              <div 
                className="group p-6 rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-lg transition-all cursor-pointer h-full"
                data-testid={`card-category-${category.slug}`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors flex items-center gap-2">
                      {category.name}
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">{category.description}</p>
                    <ul className="space-y-1">
                      {category.features.map((feature, i) => (
                        <li key={i} className="text-xs text-muted-foreground flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-primary/60" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {categories.slice(6).map((category) => (
            <Link key={category.slug} href="/find-tools">
              <div 
                className="group p-4 rounded-xl border border-border bg-card hover:border-primary/30 transition-all cursor-pointer h-full"
                data-testid={`card-category-${category.slug}`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <category.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm group-hover:text-primary transition-colors">{category.name}</h3>
                    <p className="text-xs text-muted-foreground">{category.features[0]}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
