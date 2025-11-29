import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Loader2, Search, ShieldCheck, AlertTriangle } from "lucide-react";
import { contentLevels } from "@/lib/wizard-data";
import { useState } from "react";

interface StepAgeVerificationProps {
  ageVerified: boolean;
  contentLevel: string;
  safeWord: string;
  allowStrongLanguage: boolean;
  noHumiliation: boolean;
  allowFantasyCharacters: boolean;
  onAgeVerified: (verified: boolean) => void;
  onContentLevelChange: (level: string) => void;
  onSafeWordChange: (word: string) => void;
  onAllowStrongLanguageChange: (allow: boolean) => void;
  onNoHumiliationChange: (noHumiliation: boolean) => void;
  onAllowFantasyCharactersChange: (allow: boolean) => void;
  onSubmit: () => void;
  onBack: () => void;
  isSubmitting: boolean;
}

export default function StepAgeVerification({
  ageVerified,
  contentLevel,
  safeWord,
  allowStrongLanguage,
  noHumiliation,
  allowFantasyCharacters,
  onAgeVerified,
  onContentLevelChange,
  onSafeWordChange,
  onAllowStrongLanguageChange,
  onNoHumiliationChange,
  onAllowFantasyCharactersChange,
  onSubmit,
  onBack,
  isSubmitting,
}: StepAgeVerificationProps) {
  const [showBoundaries, setShowBoundaries] = useState(ageVerified);

  const handleAgeConfirm = (isAdult: boolean) => {
    onAgeVerified(isAdult);
    if (isAdult) {
      setShowBoundaries(true);
    }
  };

  if (!showBoundaries) {
    return (
      <div className="max-w-xl mx-auto text-center">
        <div className="w-16 h-16 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mx-auto mb-6">
          <AlertTriangle className="w-8 h-8 text-amber-600" />
        </div>
        
        <h2 className="text-2xl md:text-3xl font-semibold mb-3" data-testid="text-age-check">
          Age Verification Required
        </h2>
        <p className="text-muted-foreground mb-8">
          This experience may include romantic or adult content.<br />
          Are you 18 years or older?
        </p>
        
        <div className="flex gap-4 justify-center">
          <Button 
            variant="outline" 
            size="lg"
            onClick={onBack}
            data-testid="button-not-18"
          >
            No, take me back
          </Button>
          <Button 
            size="lg"
            onClick={() => handleAgeConfirm(true)}
            data-testid="button-confirm-18"
          >
            Yes, I am 18+
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
          <ShieldCheck className="w-5 h-5 text-green-600" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold" data-testid="text-step-title">
            Set Your Boundaries
          </h2>
          <p className="text-muted-foreground text-sm">
            Your comfort and safety matter. Configure your preferences below.
          </p>
        </div>
      </div>
      
      <div className="space-y-6">
        <div className="space-y-3">
          <Label className="text-base">Content level preference</Label>
          <RadioGroup 
            value={contentLevel} 
            onValueChange={onContentLevelChange}
            className="space-y-3"
          >
            {contentLevels.map((level) => (
              <Card 
                key={level.value} 
                className={`p-4 cursor-pointer transition-all ${
                  contentLevel === level.value ? "ring-2 ring-primary" : ""
                }`}
                onClick={() => onContentLevelChange(level.value)}
              >
                <div className="flex items-center space-x-3">
                  <RadioGroupItem value={level.value} id={level.value} />
                  <Label htmlFor={level.value} className="cursor-pointer flex-1">
                    {level.label}
                  </Label>
                </div>
              </Card>
            ))}
          </RadioGroup>
        </div>

        <div className="space-y-4 pt-4 border-t">
          <Label className="text-base">Safety settings</Label>
          
          <div className="space-y-2">
            <Label htmlFor="safe-word">Safe word (stops interaction immediately)</Label>
            <Input
              id="safe-word"
              placeholder="Enter a safe word..."
              value={safeWord}
              onChange={(e) => onSafeWordChange(e.target.value)}
              className="max-w-sm"
              data-testid="input-safe-word"
            />
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="strong-language" className="cursor-pointer">
                Allow strong language
              </Label>
              <Switch
                id="strong-language"
                checked={allowStrongLanguage}
                onCheckedChange={onAllowStrongLanguageChange}
                data-testid="switch-strong-language"
              />
            </div>
            
            <div className="flex items-center justify-between">
              <Label htmlFor="no-humiliation" className="cursor-pointer">
                No humiliation or degrading content
              </Label>
              <Switch
                id="no-humiliation"
                checked={noHumiliation}
                onCheckedChange={onNoHumiliationChange}
                data-testid="switch-no-humiliation"
              />
            </div>
            
            <div className="flex items-center justify-between">
              <Label htmlFor="fantasy-characters" className="cursor-pointer">
                Allow fantasy characters
              </Label>
              <Switch
                id="fantasy-characters"
                checked={allowFantasyCharacters}
                onCheckedChange={onAllowFantasyCharactersChange}
                data-testid="switch-fantasy-characters"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex justify-between mt-8">
        <Button variant="outline" onClick={onBack} data-testid="button-back">
          Back
        </Button>
        <Button 
          onClick={onSubmit}
          disabled={!contentLevel || isSubmitting}
          data-testid="button-see-companions"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 w-4 h-4 animate-spin" />
              Finding companions...
            </>
          ) : (
            <>
              <Search className="mr-2 w-4 h-4" />
              See Companion Platforms
            </>
          )}
        </Button>
      </div>
    </div>
  );
}
