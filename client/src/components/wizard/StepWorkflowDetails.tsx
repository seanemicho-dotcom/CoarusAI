import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Loader2, Search } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useMemo } from "react";

interface StepWorkflowDetailsProps {
  workflowArea: string;
  workflowDescription: string;
  hoursPerWeek: number;
  monthlyBudget: string;
  onWorkflowAreaChange: (value: string) => void;
  onWorkflowDescriptionChange: (value: string) => void;
  onHoursChange: (value: number) => void;
  onBudgetChange: (value: string) => void;
  onSubmit: () => void;
  onBack: () => void;
  isSubmitting: boolean;
}

const workflowAreaKeys = [
  "customerSupport",
  "salesCrm",
  "marketingSeo",
  "finance",
  "operations",
  "hrHiring",
  "admin",
  "other",
] as const;

const budgetOptionKeys = [
  { value: "0-100", key: "budget0" },
  { value: "100-500", key: "budget100" },
  { value: "500-2000", key: "budget500" },
  { value: "2000+", key: "budget2000" },
] as const;

export default function StepWorkflowDetails({
  workflowArea,
  workflowDescription,
  hoursPerWeek,
  monthlyBudget,
  onWorkflowAreaChange,
  onWorkflowDescriptionChange,
  onHoursChange,
  onBudgetChange,
  onSubmit,
  onBack,
  isSubmitting,
}: StepWorkflowDetailsProps) {
  const { t } = useLanguage();

  const translatedWorkflowAreas = useMemo(() => {
    return workflowAreaKeys.map(key => ({
      value: key,
      label: t.workflowAreas[key]
    }));
  }, [t]);

  const translatedBudgetOptions = useMemo(() => {
    return budgetOptionKeys.map(option => ({
      value: option.value,
      label: t.budgetOptions[option.key as keyof typeof t.budgetOptions]
    }));
  }, [t]);

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-semibold mb-2" data-testid="text-step-title">
        {t.wizard.workflowArea}
      </h2>
      <p className="text-muted-foreground mb-6">
        {t.wizard.workflowAreaDesc}
      </p>
      
      <div className="space-y-6">
        <div className="space-y-2">
          <Label>{t.wizard.mainProcess}</Label>
          <Select value={workflowArea} onValueChange={onWorkflowAreaChange}>
            <SelectTrigger data-testid="select-workflow-area">
              <SelectValue placeholder={t.wizard.selectArea} />
            </SelectTrigger>
            <SelectContent>
              {translatedWorkflowAreas.map((area) => (
                <SelectItem key={area.value} value={area.value}>{area.label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">{t.wizard.describeToday}</Label>
          <Textarea
            id="description"
            placeholder={t.wizard.describeExample}
            value={workflowDescription}
            onChange={(e) => onWorkflowDescriptionChange(e.target.value)}
            className="min-h-[100px]"
            data-testid="textarea-workflow-description"
          />
        </div>

        <div className="space-y-4">
          <div className="flex justify-between">
            <Label>{t.wizard.hoursSpent}</Label>
            <span className="text-sm font-medium">{hoursPerWeek}+ {t.wizard.hoursUnit}</span>
          </div>
          <Slider
            value={[hoursPerWeek]}
            onValueChange={(value) => onHoursChange(value[0])}
            min={0}
            max={40}
            step={5}
            className="w-full"
            data-testid="slider-hours"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>0</span>
            <span>10</span>
            <span>20</span>
            <span>30</span>
            <span>40+</span>
          </div>
        </div>

        <div className="space-y-3">
          <Label>{t.wizard.budgetQuestion}</Label>
          <RadioGroup 
            value={monthlyBudget} 
            onValueChange={onBudgetChange}
            className="grid grid-cols-2 gap-3"
          >
            {translatedBudgetOptions.map((option) => (
              <div key={option.value} className="flex items-center space-x-2">
                <RadioGroupItem value={option.value} id={option.value} data-testid={`radio-budget-${option.value}`} />
                <Label htmlFor={option.value} className="cursor-pointer">{option.label}</Label>
              </div>
            ))}
          </RadioGroup>
        </div>
      </div>
      
      <div className="flex justify-between mt-8">
        <Button variant="outline" onClick={onBack} data-testid="button-back">
          {t.wizard.back}
        </Button>
        <Button 
          onClick={onSubmit} 
          disabled={isSubmitting}
          data-testid="button-find-matches"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 w-4 h-4 animate-spin" />
              {t.wizard.findingTools}
            </>
          ) : (
            <>
              <Search className="mr-2 w-4 h-4" />
              {t.wizard.getResults}
            </>
          )}
        </Button>
      </div>
    </div>
  );
}
