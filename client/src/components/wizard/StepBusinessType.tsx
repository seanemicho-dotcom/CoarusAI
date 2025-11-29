import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import MultiSelectGrid from "./MultiSelectGrid";
import { businessTypes } from "@/lib/wizard-data";
import { useState } from "react";

interface StepBusinessTypeProps {
  selected: string[];
  onChange: (selected: string[]) => void;
  onNext: () => void;
  onBack: () => void;
}

export default function StepBusinessType({ selected, onChange, onNext, onBack }: StepBusinessTypeProps) {
  const [otherText, setOtherText] = useState("");

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-semibold mb-2" data-testid="text-step-title">
        What type of business are you?
      </h2>
      <p className="text-muted-foreground mb-6">
        Select all that apply to get the most relevant recommendations.
      </p>
      
      <MultiSelectGrid
        options={businessTypes}
        selected={selected}
        onChange={onChange}
      />
      
      <div className="mt-4">
        <Input
          placeholder="Other (please specify)"
          value={otherText}
          onChange={(e) => setOtherText(e.target.value)}
          className="max-w-md"
          data-testid="input-other-business"
        />
      </div>
      
      <div className="flex justify-between mt-8">
        <Button variant="outline" onClick={onBack} data-testid="button-back">
          Back
        </Button>
        <Button 
          onClick={onNext} 
          disabled={selected.length === 0 && !otherText}
          data-testid="button-next"
        >
          Next <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
