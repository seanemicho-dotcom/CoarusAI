import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Loader2, Search, ArrowRight } from "lucide-react";
import MultiSelectGrid from "./MultiSelectGrid";
import { personalGoals } from "@/lib/wizard-data";
import { useState } from "react";

interface StepPersonalGoalsProps {
  selected: string[];
  onChange: (selected: string[]) => void;
  onSubmit: () => void;
  onBack: () => void;
  isSubmitting: boolean;
}

export default function StepPersonalGoals({ selected, onChange, onSubmit, onBack, isSubmitting }: StepPersonalGoalsProps) {
  const [hoursToSave, setHoursToSave] = useState(5);
  const [devicePreference, setDevicePreference] = useState("both");

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-semibold mb-2" data-testid="text-step-title">
        What do you mainly want to improve or automate?
      </h2>
      <p className="text-muted-foreground mb-6">
        Select all that apply.
      </p>
      
      <MultiSelectGrid
        options={personalGoals}
        selected={selected}
        onChange={onChange}
        columns={2}
      />
      
      <div className="mt-8 space-y-6">
        <div className="space-y-4">
          <div className="flex justify-between">
            <Label>Hours per week you want to save</Label>
            <span className="text-sm font-medium">{hoursToSave}+ hours</span>
          </div>
          <Slider
            value={[hoursToSave]}
            onValueChange={(value) => setHoursToSave(value[0])}
            min={1}
            max={20}
            step={1}
            className="w-full"
            data-testid="slider-hours-save"
          />
        </div>

        <div className="space-y-3">
          <Label>What device(s) do you primarily use?</Label>
          <RadioGroup 
            value={devicePreference} 
            onValueChange={setDevicePreference}
            className="flex gap-4"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="mobile" id="mobile" />
              <Label htmlFor="mobile" className="cursor-pointer">Mobile</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="desktop" id="desktop" />
              <Label htmlFor="desktop" className="cursor-pointer">Desktop</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="both" id="both" />
              <Label htmlFor="both" className="cursor-pointer">Both</Label>
            </div>
          </RadioGroup>
        </div>
      </div>
      
      <div className="flex justify-between mt-8">
        <Button variant="outline" onClick={onBack} data-testid="button-back">
          Back
        </Button>
        <Button 
          onClick={onSubmit}
          disabled={isSubmitting}
          data-testid="button-get-suggestions"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 w-4 h-4 animate-spin" />
              Finding tools...
            </>
          ) : (
            <>
              <Search className="mr-2 w-4 h-4" />
              Get AI Suggestions
            </>
          )}
        </Button>
      </div>
    </div>
  );
}
