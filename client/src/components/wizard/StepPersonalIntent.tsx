import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import MultiSelectGrid from "./MultiSelectGrid";
import { personalIntents } from "@/lib/wizard-data";
import { useState } from "react";

interface StepPersonalIntentProps {
  selected: string[];
  onChange: (selected: string[]) => void;
  onNext: () => void;
  onBack: () => void;
}

export default function StepPersonalIntent({ selected, onChange, onNext, onBack }: StepPersonalIntentProps) {
  const [otherText, setOtherText] = useState("");

  const hasAdultSelection = selected.includes("companionship") || selected.includes("adult");

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-semibold mb-2" data-testid="text-step-title">
        What do you want AI to help you with?
      </h2>
      <p className="text-muted-foreground mb-6">
        Select all that apply.
      </p>
      
      <MultiSelectGrid
        options={personalIntents}
        selected={selected}
        onChange={onChange}
        columns={2}
      />
      
      <div className="mt-4">
        <Input
          placeholder="Other (please specify)"
          value={otherText}
          onChange={(e) => setOtherText(e.target.value)}
          className="max-w-md"
          data-testid="input-other-personal"
        />
      </div>

      {hasAdultSelection && (
        <div className="mt-4 p-4 bg-muted/50 rounded-lg">
          <p className="text-sm text-muted-foreground">
            You've selected companionship or adult content options. The next steps will include age verification and preference settings.
          </p>
        </div>
      )}
      
      <div className="flex justify-between mt-8">
        <Button variant="outline" onClick={onBack} data-testid="button-back">
          Back
        </Button>
        <Button 
          onClick={onNext} 
          disabled={selected.length === 0 && !otherText}
          data-testid="button-next"
        >
          Continue <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
