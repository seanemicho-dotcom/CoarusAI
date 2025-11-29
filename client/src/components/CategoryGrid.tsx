import { Link } from "wouter";
import { Card } from "@/components/ui/card";
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
  Heart
} from "lucide-react";

const categories = [
  { icon: HeadphonesIcon, name: "Customer Support", description: "AI chatbots & ticketing", slug: "customer-support" },
  { icon: TrendingUp, name: "Sales & CRM", description: "Lead scoring & automation", slug: "sales-crm" },
  { icon: Megaphone, name: "Marketing & SEO", description: "Content & optimization", slug: "marketing-seo" },
  { icon: Share2, name: "Social Media", description: "Scheduling & analytics", slug: "social-media" },
  { icon: Calculator, name: "Finance", description: "Accounting & invoicing", slug: "finance" },
  { icon: Users, name: "HR & Hiring", description: "Recruitment automation", slug: "hr-hiring" },
  { icon: Zap, name: "Productivity", description: "Task & project tools", slug: "productivity" },
  { icon: PenLine, name: "Writing", description: "Content creation", slug: "writing" },
  { icon: GraduationCap, name: "Education", description: "Learning & tutoring", slug: "education" },
  { icon: Heart, name: "Companions", description: "AI conversation & support", slug: "companion" },
];

export default function CategoryGrid() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <h2 
          className="text-3xl md:text-4xl font-semibold text-center mb-4"
          data-testid="text-categories-title"
        >
          Explore AI Tool Categories
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Browse solutions organized by business function and personal needs
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {categories.map((category) => (
            <Link key={category.slug} href="/find-tools">
              <Card 
                className="p-5 cursor-pointer hover-elevate active-elevate-2 transition-all h-full"
                data-testid={`card-category-${category.slug}`}
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <category.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-sm mb-1">{category.name}</h3>
                <p className="text-xs text-muted-foreground">{category.description}</p>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
