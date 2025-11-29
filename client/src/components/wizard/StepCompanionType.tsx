import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight } from "lucide-react";
import MultiSelectGrid from "./MultiSelectGrid";
import { companionTypes } from "@/lib/wizard-data";

interface StepCompanionTypeProps {
  selected: string[];
  onChange: (selected: string[]) => void;
  onNext: () => void;
  onBack: () => void;
}

export default function StepCompanionType({ selected, onChange, onNext, onBack }: StepCompanionTypeProps) {
  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-semibold mb-2" data-testid="text-step-title">
        What kind of AI companion are you looking for?
      </h2>
      <p className="text-muted-foreground mb-6">
        Select all that apply.
      </p>
      
      <MultiSelectGrid
        options={companionTypes}
        selected={selected}
        onChange={onChange}
        columns={2}
      />
      
      <div className="mt-4 space-y-2">
        <Label htmlFor="gender-pref">Gender or style preferences (optional)</Label>
        <Input
          id="gender-pref"
          placeholder="e.g., feminine voice, male character, anime style..."
          className="max-w-md"
          data-testid="input-gender-preference"
        />
      </div>
      
      <div className="flex justify-between mt-8">
        <Button variant="outline" onClick={onBack} data-testid="button-back">
          Back
        </Button>
        <Button 
          onClick={onNext} 
          disabled={selected.length === 0}
          data-testid="button-next"
        >
          Next - Set Boundaries <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
