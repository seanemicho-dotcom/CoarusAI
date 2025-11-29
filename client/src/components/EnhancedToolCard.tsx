import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Check, Star, Bookmark } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import type { AITool } from "@/lib/tools";

interface EnhancedToolCardProps {
  tool: AITool;
  fitScore?: number;
  onSave?: () => void;
  sessionId?: string;
  userPath?: string;
  language?: string;
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

export default function EnhancedToolCard({ 
  tool, 
  fitScore, 
  onSave,
  sessionId,
  userPath,
  language = "en"
}: EnhancedToolCardProps) {
  
  const outboundUrl = tool.affiliateUrl || tool.url;
  const isAffiliateClick = !!tool.affiliateUrl;

  const trackClick = useMutation({
    mutationFn: async () => {
      return apiRequest("POST", "/api/tool-clicks", {
        toolId: tool.id,
        toolName: tool.name,
        toolUrl: outboundUrl,
        isAffiliate: isAffiliateClick,
        sessionId,
        userPath,
        language,
      });
    },
  });

  const handleVisit = () => {
    trackClick.mutate();
    window.open(outboundUrl, "_blank", "noopener,noreferrer");
  };

  const displayScore = fitScore || tool.fitScore || 0;
  
  return (
    <Card className="p-6 hover-elevate transition-all" data-testid={`card-tool-${tool.id}`}>
      <div className="flex flex-col h-full">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-1" data-testid={`text-tool-name-${tool.id}`}>
              {tool.name}
            </h3>
            <Badge variant="secondary" className="text-xs">
              {categoryLabels[tool.category] || tool.category}
            </Badge>
          </div>
          
          {displayScore > 0 && (
            <div className="flex items-center gap-1 bg-primary/10 px-3 py-1.5 rounded-full">
              <Star className="w-4 h-4 text-primary fill-primary" />
              <span className="text-sm font-semibold text-primary">{displayScore}%</span>
            </div>
          )}
        </div>
        
        <p className="text-muted-foreground text-sm mb-4 flex-grow" data-testid={`text-tool-description-${tool.id}`}>
          {tool.description}
        </p>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Price:</span>
            <span className="font-medium">{tool.pricing}</span>
          </div>
          
          <ul className="space-y-1.5">
            {tool.features.slice(0, 3).map((feature, index) => (
              <li key={index} className="flex items-center gap-2 text-sm">
                <Check className="w-4 h-4 text-primary shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          
          <div className="flex gap-2">
            <Button 
              onClick={handleVisit}
              className="flex-1"
              data-testid={`button-visit-${tool.id}`}
            >
              Visit <ExternalLink className="ml-2 w-4 h-4" />
            </Button>
            {onSave && (
              <Button 
                variant="outline" 
                size="icon"
                onClick={onSave}
                data-testid={`button-save-${tool.id}`}
              >
                <Bookmark className="w-4 h-4" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
}
