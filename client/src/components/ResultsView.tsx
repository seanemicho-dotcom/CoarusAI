import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Sparkles } from "lucide-react";
import ToolCard from "./ToolCard";
import type { AITool } from "@/lib/tools";

interface ResultsViewProps {
  category: string;
  tools: AITool[];
  userNeed?: string;
}

const categoryLabels: Record<string, string> = {
  "marketing": "Marketing",
  "customer-service": "Customer Service",
  "bookkeeping": "Bookkeeping",
  "productivity": "Productivity",
  "crm": "CRM",
  "project-management": "Project Management",
  "education": "Education",
  "content-creation": "Content Creation",
};

export default function ResultsView({ category, tools, userNeed }: ResultsViewProps) {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <Link href="/find-tools">
          <Button variant="ghost" className="mb-4" data-testid="button-back">
            <ArrowLeft className="mr-2 w-4 h-4" /> Back to search
          </Button>
        </Link>
        
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-primary" />
          </div>
          <Badge variant="secondary" className="text-sm">
            {categoryLabels[category] || category}
          </Badge>
        </div>
        
        <h1 
          className="text-3xl md:text-4xl font-semibold mb-3"
          data-testid="text-results-title"
        >
          Recommended AI Tools for You
        </h1>
        
        {userNeed && (
          <p className="text-muted-foreground max-w-2xl" data-testid="text-user-need">
            Based on your need: "{userNeed}"
          </p>
        )}
      </div>
      
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {tools.map(tool => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
      
      <div className="bg-muted/50 rounded-xl p-6 text-center">
        <h3 className="font-semibold mb-2">Not quite what you're looking for?</h3>
        <p className="text-muted-foreground mb-4">
          Try describing your needs differently or be more specific about your use case.
        </p>
        <Link href="/find-tools">
          <Button variant="outline" data-testid="button-refine-search">
            Refine Your Search
          </Button>
        </Link>
      </div>
    </div>
  );
}
