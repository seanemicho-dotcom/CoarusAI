import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Sparkles, Calendar, FileText, Mail } from "lucide-react";
import EnhancedToolCard from "./EnhancedToolCard";
import LeadCaptureModal from "./LeadCaptureModal";
import { useLanguage } from "@/contexts/LanguageContext";
import type { MatchResult } from "@/lib/tools";
import type { WizardState, UserPath } from "@/lib/wizard-data";
import type { Translations } from "@/lib/translations";

interface EnhancedResultsViewProps {
  result: MatchResult;
  userPath: UserPath;
  wizardState: WizardState;
  onStartOver: () => void;
  onBack: () => void;
}

const categoryKeyMap: Record<string, keyof Translations["categories"]> = {
  "customer-support": "customerSupport",
  "sales-crm": "salesCrm",
  "marketing-seo": "marketingSeo",
  "social-media": "marketingSeo",
  "finance": "financeOps",
  "hr-hiring": "hrHiring",
  "productivity": "personalProductivity",
  "writing": "writingContent",
  "education": "learningSkills",
  "personal-finance": "financeOps",
  "creative": "creativeStudio",
  "learning": "learningSkills",
};

type LeadSource = "email_results" | "book_call" | "request_quote" | "personal_setup";

export default function EnhancedResultsView({ 
  result, 
  userPath, 
  wizardState,
  onStartOver,
  onBack,
}: EnhancedResultsViewProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSource, setModalSource] = useState<LeadSource>("email_results");
  const { language, t } = useLanguage();
  
  const sessionId = useMemo(() => {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }, []);
  
  const recommendedToolIds = result.tools.map(t => t.id);

  const openModal = (source: LeadSource) => {
    setModalSource(source);
    setModalOpen(true);
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-8">
        <div className="flex gap-2 mb-4 flex-wrap">
          <Button 
            variant="ghost" 
            onClick={onBack}
            data-testid="button-back-top"
          >
            <ArrowLeft className="mr-2 w-4 h-4" /> {t.results.back}
          </Button>
          <Button 
            variant="ghost" 
            onClick={onStartOver}
            data-testid="button-start-over-top"
          >
            {t.results.startOver}
          </Button>
        </div>
        
        <div className="flex items-center gap-3 mb-3 flex-wrap">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-primary" />
          </div>
          <Badge variant="secondary" className="text-sm">
            {categoryKeyMap[result.category] 
              ? t.categories[categoryKeyMap[result.category]]
              : result.category}
          </Badge>
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => openModal("email_results")}
            data-testid="button-email-results"
          >
            <Mail className="mr-2 w-4 h-4" />
            {t.results.saveResults}
          </Button>
        </div>
        
        <h1 
          className="text-3xl md:text-4xl font-semibold mb-3"
          data-testid="text-results-title"
        >
          {userPath === "smb" 
            ? t.results.titleSmb
            : t.results.titleIndividual
          }
        </h1>
        
        <p className="text-muted-foreground max-w-2xl">
          {t.results.subtitle}
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {result.tools.map(tool => (
          <EnhancedToolCard 
            key={tool.id} 
            tool={tool}
            fitScore={tool.fitScore}
            sessionId={sessionId}
            userPath={userPath}
            language={language}
          />
        ))}
      </div>

      {userPath === "smb" ? (
        <Card className="p-8 bg-primary/5 border-primary/20">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-2">
              {t.results.helpTitle}
            </h3>
            <p className="text-muted-foreground mb-6">
              {t.results.helpSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button 
                size="lg" 
                onClick={() => openModal("book_call")}
                data-testid="button-book-call"
              >
                <Calendar className="mr-2 w-4 h-4" />
                {t.results.bookCall}
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={() => openModal("request_quote")}
                data-testid="button-request-quote"
              >
                <FileText className="mr-2 w-4 h-4" />
                {t.results.requestQuote}
              </Button>
            </div>
          </div>
        </Card>
      ) : (
        <Card className="p-8 bg-muted/50">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-2">
              {t.results.personalSetupTitle}
            </h3>
            <p className="text-muted-foreground mb-6">
              {t.results.personalSetupSubtitle}
            </p>
            <Button 
              size="lg" 
              onClick={() => openModal("personal_setup")}
              data-testid="button-personal-setup"
            >
              <Calendar className="mr-2 w-4 h-4" />
              {t.results.personalSetupButton}
            </Button>
          </div>
        </Card>
      )}
      
      <div className="mt-8 flex justify-center gap-3 flex-wrap">
        <Button 
          variant="outline" 
          onClick={onBack}
          data-testid="button-back-bottom"
        >
          <ArrowLeft className="mr-2 w-4 h-4" /> {t.results.back}
        </Button>
        <Button 
          variant="outline" 
          onClick={onStartOver}
          data-testid="button-start-over-bottom"
        >
          {t.results.startOver}
        </Button>
      </div>
      
      <LeadCaptureModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        source={modalSource}
        wizardState={wizardState}
        recommendedTools={recommendedToolIds}
      />
    </div>
  );
}
