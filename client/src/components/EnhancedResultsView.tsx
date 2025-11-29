import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Sparkles, Calendar, FileText } from "lucide-react";
import EnhancedToolCard from "./EnhancedToolCard";
import type { MatchResult } from "@/lib/tools";
import type { UserPath } from "@/lib/wizard-data";

interface EnhancedResultsViewProps {
  result: MatchResult;
  userPath: UserPath;
}

const categoryLabels: Record<string, string> = {
  "customer-support": "Customer Support",
  "sales-crm": "Sales & CRM",
  "marketing-seo": "Marketing & SEO",
  "social-media": "Social Media",
  "finance": "Finance & Accounting",
  "hr-hiring": "HR & Hiring",
  "productivity": "Productivity",
  "writing": "Writing & Content",
  "education": "Learning & Education",
  "personal-finance": "Personal Finance",
};

export default function EnhancedResultsView({ result, userPath }: EnhancedResultsViewProps) {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-8">
        <Link href="/find-tools">
          <Button variant="ghost" className="mb-4" data-testid="button-back">
            <ArrowLeft className="mr-2 w-4 h-4" /> Start over
          </Button>
        </Link>
        
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-primary" />
          </div>
          <Badge variant="secondary" className="text-sm">
            {categoryLabels[result.category] || result.category}
          </Badge>
        </div>
        
        <h1 
          className="text-3xl md:text-4xl font-semibold mb-3"
          data-testid="text-results-title"
        >
          {userPath === "smb" 
            ? "Recommended AI Solutions for Your Business"
            : "Recommended AI Tools for You"
          }
        </h1>
        
        <p className="text-muted-foreground max-w-2xl">
          Based on your answers, these tools and combinations may fit your needs.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {result.tools.map(tool => (
          <EnhancedToolCard 
            key={tool.id} 
            tool={tool}
            fitScore={result.fitScores.get(tool.id)}
          />
        ))}
      </div>

      {userPath === "smb" ? (
        <Card className="p-8 bg-primary/5 border-primary/20">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-2">
              Want help setting this up?
            </h3>
            <p className="text-muted-foreground mb-6">
              We can integrate these tools, automate workflows, and train your team.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" data-testid="button-book-call">
                <Calendar className="mr-2 w-4 h-4" />
                Book Free AI Opportunity Call
              </Button>
              <Button size="lg" variant="outline" data-testid="button-request-quote">
                <FileText className="mr-2 w-4 h-4" />
                Request Implementation Quote
              </Button>
            </div>
          </div>
        </Card>
      ) : (
        <Card className="p-8 bg-muted/50">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-2">
              Want a personalized setup?
            </h3>
            <p className="text-muted-foreground mb-6">
              Book a 1:1 session to get your AI tools configured and working together.
            </p>
            <Button size="lg" data-testid="button-personal-setup">
              <Calendar className="mr-2 w-4 h-4" />
              Book Personal AI Setup Session
            </Button>
          </div>
        </Card>
      )}
      
      <div className="mt-8 text-center">
        <Link href="/find-tools">
          <Button variant="outline" data-testid="button-start-over">
            Start New Search
          </Button>
        </Link>
      </div>
    </div>
  );
}
