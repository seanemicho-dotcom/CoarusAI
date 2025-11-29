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
  ArrowRight,
  Building2,
  User,
  Palette,
  Brain,
  Sparkles,
  MessageCircle
} from "lucide-react";

const businessCategories = [
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
    icon: Calculator, 
    name: "Finance & Ops", 
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
];

const individualCategories = [
  { 
    icon: Heart, 
    name: "AI Companions", 
    description: "Personal AI friends, emotional support, and meaningful conversations",
    features: ["Chat companions", "Emotional support", "Roleplay"],
    slug: "companion" 
  },
  { 
    icon: Palette, 
    name: "Creative Studio", 
    description: "AI art, music, video creation, and creative tools",
    features: ["Image generation", "Music creation", "Video editing"],
    slug: "creative" 
  },
  { 
    icon: GraduationCap, 
    name: "Learning & Skills", 
    description: "AI tutors, language learning, and skill development",
    features: ["AI tutoring", "Language practice", "Skill building"],
    slug: "education" 
  },
  { 
    icon: Brain, 
    name: "Personal Productivity", 
    description: "AI assistants for daily life, planning, and personal goals",
    features: ["Task planning", "Note-taking", "Life organization"],
    slug: "productivity" 
  },
  { 
    icon: PenLine, 
    name: "Writing & Content", 
    description: "AI writing helpers for blogs, stories, and personal projects",
    features: ["Blog writing", "Story creation", "Editing help"],
    slug: "writing" 
  },
];

function CategoryCard({ category, size = "large" }: { category: typeof businessCategories[0], size?: "large" | "small" }) {
  if (size === "small") {
    return (
      <Link href="/find-tools">
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
    );
  }

  return (
    <Link href="/find-tools">
      <div 
        className="group p-5 rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-lg transition-all cursor-pointer h-full"
        data-testid={`card-category-${category.slug}`}
      >
        <div className="flex items-start gap-4">
          <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
            <category.icon className="w-5 h-5 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-base mb-1 group-hover:text-primary transition-colors flex items-center gap-2">
              {category.name}
              <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </h3>
            <p className="text-sm text-muted-foreground mb-2">{category.description}</p>
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
  );
}

export default function CategoryGrid() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <h2 
          className="text-3xl md:text-4xl font-bold text-center mb-4"
          data-testid="text-categories-title"
        >
          AI Tool <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">Categories</span>
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          Choose your path: business solutions or personal AI tools
        </p>
        
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                <Building2 className="w-5 h-5 text-blue-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold">For Businesses</h3>
                <p className="text-sm text-muted-foreground">SMB tools to scale your operations</p>
              </div>
            </div>
            <div className="space-y-4">
              {businessCategories.map((category) => (
                <CategoryCard key={category.slug} category={category} size="small" />
              ))}
            </div>
          </div>
          
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
                <User className="w-5 h-5 text-purple-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold">For Individuals</h3>
                <p className="text-sm text-muted-foreground">Personal AI companions & tools</p>
              </div>
            </div>
            <div className="space-y-4">
              {individualCategories.map((category) => (
                <CategoryCard key={category.slug} category={category} size="small" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
