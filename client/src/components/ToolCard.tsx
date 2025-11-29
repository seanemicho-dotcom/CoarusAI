import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Check } from "lucide-react";
import type { AITool } from "@/lib/tools";

interface ToolCardProps {
  tool: AITool;
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

export default function ToolCard({ tool }: ToolCardProps) {
  const handleVisit = () => {
    window.open(tool.url, "_blank", "noopener,noreferrer");
  };
  
  return (
    <Card className="p-6 hover-elevate transition-all" data-testid={`card-tool-${tool.id}`}>
      <div className="flex flex-col h-full">
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3 className="text-xl font-semibold" data-testid={`text-tool-name-${tool.id}`}>
            {tool.name}
          </h3>
          <Badge variant="secondary" className="shrink-0">
            {categoryLabels[tool.category] || tool.category}
          </Badge>
        </div>
        
        <p className="text-muted-foreground mb-4 flex-grow" data-testid={`text-tool-description-${tool.id}`}>
          {tool.description}
        </p>
        
        <div className="space-y-4">
          <ul className="space-y-2">
            {tool.features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2 text-sm">
                <Check className="w-4 h-4 text-primary shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          
          <Button 
            onClick={handleVisit}
            className="w-full"
            data-testid={`button-visit-${tool.id}`}
          >
            Visit {tool.name} <ExternalLink className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
}
