import { Link } from "wouter";
import { 
  HeadphonesIcon, 
  TrendingUp, 
  Megaphone, 
  Calculator, 
  Users, 
  PenLine,
  GraduationCap,
  Heart,
  Building2,
  User,
  Palette,
  Brain
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function CategoryGrid() {
  const { t } = useLanguage();

  const businessCategories = [
    { 
      icon: HeadphonesIcon, 
      name: t.categories.customerSupport, 
      description: t.categories.customerSupportDesc,
      slug: "customer-support" 
    },
    { 
      icon: TrendingUp, 
      name: t.categories.salesCrm, 
      description: t.categories.salesCrmDesc,
      slug: "sales-crm" 
    },
    { 
      icon: Megaphone, 
      name: t.categories.marketingSeo, 
      description: t.categories.marketingSeoDesc,
      slug: "marketing-seo" 
    },
    { 
      icon: Calculator, 
      name: t.categories.financeOps, 
      description: t.categories.financeOpsDesc,
      slug: "finance" 
    },
    { 
      icon: Users, 
      name: t.categories.hrHiring, 
      description: t.categories.hrHiringDesc,
      slug: "hr-hiring" 
    },
  ];

  const individualCategories = [
    { 
      icon: Heart, 
      name: t.categories.aiCompanions, 
      description: t.categories.aiCompanionsDesc,
      slug: "companion" 
    },
    { 
      icon: Palette, 
      name: t.categories.creativeStudio, 
      description: t.categories.creativeStudioDesc,
      slug: "creative" 
    },
    { 
      icon: GraduationCap, 
      name: t.categories.learningSkills, 
      description: t.categories.learningSkillsDesc,
      slug: "education" 
    },
    { 
      icon: Brain, 
      name: t.categories.personalProductivity, 
      description: t.categories.personalProductivityDesc,
      slug: "productivity" 
    },
    { 
      icon: PenLine, 
      name: t.categories.writingContent, 
      description: t.categories.writingContentDesc,
      slug: "writing" 
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <h2 
          className="text-3xl md:text-4xl font-bold text-center mb-4"
          data-testid="text-categories-title"
        >
          {t.home.categoriesTitle}
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          {t.home.categoriesSubtitle}
        </p>
        
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                <Building2 className="w-5 h-5 text-blue-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold">{t.home.forBusinesses}</h3>
                <p className="text-sm text-muted-foreground">{t.home.forBusinessesDesc}</p>
              </div>
            </div>
            <div className="space-y-4">
              {businessCategories.map((category) => (
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
                        <p className="text-xs text-muted-foreground">{category.description}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
                <User className="w-5 h-5 text-purple-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold">{t.home.forIndividuals}</h3>
                <p className="text-sm text-muted-foreground">{t.home.forIndividualsDesc}</p>
              </div>
            </div>
            <div className="space-y-4">
              {individualCategories.map((category) => (
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
                        <p className="text-xs text-muted-foreground">{category.description}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
