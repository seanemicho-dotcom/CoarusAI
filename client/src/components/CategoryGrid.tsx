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
  FileText 
} from "lucide-react";

const categories = [
  { icon: Megaphone, name: "Marketing", count: 12, slug: "marketing" },
  { icon: HeadphonesIcon, name: "Customer Service", count: 8, slug: "customer-service" },
  { icon: Calculator, name: "Bookkeeping", count: 6, slug: "bookkeeping" },
  { icon: Zap, name: "Productivity", count: 15, slug: "productivity" },
  { icon: Users, name: "CRM", count: 7, slug: "crm" },
  { icon: FolderKanban, name: "Project Management", count: 9, slug: "project-management" },
  { icon: GraduationCap, name: "Education", count: 5, slug: "education" },
  { icon: FileText, name: "Content Creation", count: 11, slug: "content-creation" },
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
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category) => (
            <Link key={category.slug} href="/find-tools">
              <Card 
                className="p-6 cursor-pointer hover-elevate active-elevate-2 transition-all"
                data-testid={`card-category-${category.slug}`}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-1">{category.name}</h3>
                <p className="text-sm text-muted-foreground">{category.count} tools</p>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
