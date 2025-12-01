import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Loader2, Search } from "lucide-react";
import MultiSelectGrid from "./MultiSelectGrid";
import { getPersonalGoalsForIntents } from "@/lib/wizard-data";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState, useMemo } from "react";
import type { Translations } from "@/lib/translations";

interface StepPersonalGoalsProps {
  selected: string[];
  selectedIntents: string[];
  onChange: (selected: string[]) => void;
  onSubmit: () => void;
  onBack: () => void;
  isSubmitting: boolean;
}

const goalsTranslationMap: Record<string, keyof Translations["wizardOptions"]> = {
  "organize-tasks": "organizeTasks",
  "manage-schedule": "manageSchedule",
  "stay-focused": "stayFocused",
  "build-habits": "buildHabits",
  "take-notes": "takeNotes",
  "understand-topics": "understandTopics",
  "learn-language": "learnLanguage",
  "study-help": "studyHelp",
  "research": "research",
  "skill-building": "skillBuilding",
  "generate-art": "generateArt",
  "create-music": "createMusic",
  "video-editing": "videoEditing",
  "design-graphics": "designGraphics",
  "creative-projects": "creativeProjects",
  "write-emails": "writeEmails",
  "write-essays": "writeEssays",
  "improve-grammar": "improveGrammar",
  "creative-writing": "creativeWriting",
  "social-posts": "socialPosts",
  "save-time": "saveTimeGoal",
  "be-creative": "beCreative",
  "learn-something": "learnSomething",
  "have-fun": "haveFun",
  "stay-organized": "stayOrganized",
};

export default function StepPersonalGoals({ 
  selected, 
  selectedIntents,
  onChange, 
  onSubmit, 
  onBack, 
  isSubmitting 
}: StepPersonalGoalsProps) {
  const [hoursToSave, setHoursToSave] = useState(5);
  const [devicePreference, setDevicePreference] = useState("both");
  const { t } = useLanguage();

  const goalOptions = useMemo(() => {
    const goals = getPersonalGoalsForIntents(selectedIntents);
    return goals.map(goal => ({
      ...goal,
      label: t.wizardOptions[goalsTranslationMap[goal.id] as keyof typeof t.wizardOptions] || goal.label
    }));
  }, [selectedIntents, t]);

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-semibold mb-2" data-testid="text-step-title">
        {t.wizard.personalGoals}
      </h2>
      <p className="text-muted-foreground mb-6">
        {t.wizard.selectAll}
      </p>
      
      <MultiSelectGrid
        options={goalOptions}
        selected={selected}
        onChange={onChange}
        columns={2}
      />
      
      <div className="mt-8 space-y-6">
        <div className="space-y-4">
          <div className="flex justify-between">
            <Label>{t.wizard.hoursToSave}</Label>
            <span className="text-sm font-medium">{hoursToSave}+ {t.wizard.hoursUnit}</span>
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
          <Label>{t.wizard.deviceQuestion}</Label>
          <RadioGroup 
            value={devicePreference} 
            onValueChange={setDevicePreference}
            className="flex gap-4"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="mobile" id="mobile" />
              <Label htmlFor="mobile" className="cursor-pointer">{t.wizard.mobile}</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="desktop" id="desktop" />
              <Label htmlFor="desktop" className="cursor-pointer">{t.wizard.desktop}</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="both" id="both" />
              <Label htmlFor="both" className="cursor-pointer">{t.wizard.both}</Label>
            </div>
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
          data-testid="button-get-suggestions"
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
