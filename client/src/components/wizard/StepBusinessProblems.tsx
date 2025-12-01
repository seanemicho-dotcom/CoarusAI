import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import MultiSelectGrid from "./MultiSelectGrid";
import { businessProblems } from "@/lib/wizard-data";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState, useMemo } from "react";

interface StepBusinessProblemsProps {
  selected: string[];
  onChange: (selected: string[]) => void;
  onNext: () => void;
  onBack: () => void;
}

const problemsTranslationMap: Record<string, keyof import("@/lib/translations").Translations["wizardOptions"]> = {
  "customer-support": "customerSupport",
  "sales-crm": "salesCrm",
  "marketing-seo": "marketingSeo",
  "email-messaging": "emailMessaging",
  "dashboards": "dashboards",
  "finance": "finance",
  "knowledge-base": "knowledgeBase",
  "hr-hiring": "hrHiring",
  "workflow": "workflow",
};

export default function StepBusinessProblems({ selected, onChange, onNext, onBack }: StepBusinessProblemsProps) {
  const [customWorkflow, setCustomWorkflow] = useState("");
  const { t } = useLanguage();

  const translatedOptions = useMemo(() => {
    return businessProblems.map(option => ({
      ...option,
      label: t.wizardOptions[problemsTranslationMap[option.id] as keyof typeof t.wizardOptions] || option.label
    }));
  }, [t]);

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-semibold mb-2" data-testid="text-step-title">
        {t.wizard.businessProblems}
      </h2>
      <p className="text-muted-foreground mb-6">
        {t.wizard.selectAll}
      </p>
      
      <MultiSelectGrid
        options={translatedOptions}
        selected={selected}
        onChange={onChange}
        columns={2}
      />
      
      <div className="mt-4">
        <Input
          placeholder={t.wizard.customWorkflow}
          value={customWorkflow}
          onChange={(e) => setCustomWorkflow(e.target.value)}
          className="max-w-md"
          data-testid="input-custom-workflow"
        />
      </div>
      
      <div className="flex justify-between mt-8">
        <Button variant="outline" onClick={onBack} data-testid="button-back">
          {t.wizard.back}
        </Button>
        <div className="flex gap-3">
          <Button 
            variant="ghost" 
            onClick={onNext}
            data-testid="button-skip"
          >
            {t.wizard.skip}
          </Button>
          <Button 
            onClick={onNext} 
            disabled={selected.length === 0}
            data-testid="button-next"
          >
            {t.wizard.next} <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
