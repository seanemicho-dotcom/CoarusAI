import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { 
  Megaphone, 
  HeadphonesIcon, 
  Calculator, 
  Zap, 
  Users, 
  FolderKanban,
  GraduationCap,
  Receipt,
  Share2,
  PenLine
} from "lucide-react";

const categories = [
  { icon: Calculator, name: "Bookkeeping", count: 4, slug: "bookkeeping" },
  { icon: Receipt, name: "Invoicing", count: 4, slug: "invoicing" },
  { icon: Megaphone, name: "Marketing", count: 4, slug: "marketing" },
  { icon: Share2, name: "Social Media", count: 4, slug: "social media" },
  { icon: HeadphonesIcon, name: "Customer Service", count: 4, slug: "customer service" },
  { icon: Users, name: "Sales CRM", count: 4, slug: "sales crm" },
  { icon: Zap, name: "Productivity", count: 4, slug: "productivity" },
  { icon: FolderKanban, name: "Project Management", count: 4, slug: "project management" },
  { icon: PenLine, name: "Writing", count: 4, slug: "writing" },
  { icon: GraduationCap, name: "Education", count: 4, slug: "education" },
];

export default function CategoryGrid() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <h2 
          className="text-3xl md:text-4xl font-semibold text-center mb-4"
          data-testid="text-categories-title"
        >
          Browse by Category
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Explore AI tools organized by business function
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {categories.map((category) => (
            <Link key={category.slug} href="/find-tools">
              <Card 
                className="p-5 cursor-pointer hover-elevate active-elevate-2 transition-all"
                data-testid={`card-category-${category.slug.replace(" ", "-")}`}
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <category.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-sm mb-1">{category.name}</h3>
                <p className="text-xs text-muted-foreground">{category.count} tools</p>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
