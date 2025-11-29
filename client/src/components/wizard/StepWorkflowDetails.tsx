import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Loader2, Search } from "lucide-react";
import { workflowAreas, budgetOptions } from "@/lib/wizard-data";
import { useLanguage } from "@/contexts/LanguageContext";

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

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-semibold mb-2" data-testid="text-step-title">
        {t.wizard.workflowArea}
      </h2>
      <p className="text-muted-foreground mb-6">
        This helps us find the best-fit AI solutions for your needs.
      </p>
      
      <div className="space-y-6">
        <div className="space-y-2">
          <Label>Main process to improve</Label>
          <Select value={workflowArea} onValueChange={onWorkflowAreaChange}>
            <SelectTrigger data-testid="select-workflow-area">
              <SelectValue placeholder="Select an area" />
            </SelectTrigger>
            <SelectContent>
              {workflowAreas.map((area) => (
                <SelectItem key={area} value={area}>{area}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Describe what happens today</Label>
          <Textarea
            id="description"
            placeholder="Example: We manually respond to customer emails, prepare weekly reports in Excel, and track inventory on spreadsheets..."
            value={workflowDescription}
            onChange={(e) => onWorkflowDescriptionChange(e.target.value)}
            className="min-h-[100px]"
            data-testid="textarea-workflow-description"
          />
        </div>

        <div className="space-y-4">
          <div className="flex justify-between">
            <Label>Hours spent per week on this process</Label>
            <span className="text-sm font-medium">{hoursPerWeek}+ hours</span>
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
          <Label>Approximate monthly budget for AI solutions</Label>
          <RadioGroup 
            value={monthlyBudget} 
            onValueChange={onBudgetChange}
            className="grid grid-cols-2 gap-3"
          >
            {budgetOptions.map((option) => (
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
