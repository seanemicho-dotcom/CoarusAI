import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import MultiSelectGrid from "./MultiSelectGrid";
import { personalIntents } from "@/lib/wizard-data";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState, useMemo } from "react";

interface StepPersonalIntentProps {
  selected: string[];
  onChange: (selected: string[]) => void;
  onNext: () => void;
  onBack: () => void;
}

const intentTranslationMap: Record<string, keyof import("@/lib/translations").Translations["wizardOptions"]> = {
  "productivity": "personalProductivity",
  "learning": "learning",
  "creative": "creative",
  "writing": "writing",
  "health": "health",
  "entertainment": "entertainment",
  "finance": "financePersonal",
  "communication": "communication",
};

export default function StepPersonalIntent({ selected, onChange, onNext, onBack }: StepPersonalIntentProps) {
  const [otherText, setOtherText] = useState("");
  const { t } = useLanguage();

  const translatedOptions = useMemo(() => {
    return personalIntents.map(option => ({
      ...option,
      label: t.wizardOptions[intentTranslationMap[option.id] as keyof typeof t.wizardOptions] || option.label
    }));
  }, [t]);

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-semibold mb-2" data-testid="text-step-title">
        {t.wizard.personalIntent}
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
          placeholder={t.wizardOptions.other}
          value={otherText}
          onChange={(e) => setOtherText(e.target.value)}
          className="max-w-md"
          data-testid="input-other-personal"
        />
      </div>
      
      <div className="flex justify-between mt-8">
        <Button variant="outline" onClick={onBack} data-testid="button-back">
          {t.wizard.back}
        </Button>
        <Button 
          onClick={onNext} 
          disabled={selected.length === 0 && !otherText}
          data-testid="button-next"
        >
          {t.wizard.next} <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
