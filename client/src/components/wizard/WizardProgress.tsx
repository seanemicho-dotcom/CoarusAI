import { Check } from "lucide-react";

interface WizardProgressProps {
  currentStep: number;
  totalSteps: number;
  labels?: string[];
}

export default function WizardProgress({ currentStep, totalSteps, labels }: WizardProgressProps) {
  return (
    <div className="w-full mb-8">
      <div className="flex items-center justify-between">
        {Array.from({ length: totalSteps }).map((_, index) => {
          const stepNum = index + 1;
          const isCompleted = stepNum < currentStep;
          const isCurrent = stepNum === currentStep;
          
          return (
            <div key={index} className="flex items-center flex-1 last:flex-none">
              <div className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all ${
                    isCompleted
                      ? "bg-primary text-primary-foreground"
                      : isCurrent
                      ? "bg-primary text-primary-foreground ring-4 ring-primary/20"
                      : "bg-muted text-muted-foreground"
                  }`}
                  data-testid={`step-indicator-${stepNum}`}
                >
                  {isCompleted ? <Check className="w-5 h-5" /> : stepNum}
                </div>
                {labels && labels[index] && (
                  <span className={`text-xs mt-2 text-center max-w-[80px] ${
                    isCurrent ? "text-foreground font-medium" : "text-muted-foreground"
                  }`}>
                    {labels[index]}
                  </span>
                )}
              </div>
              {index < totalSteps - 1 && (
                <div className={`flex-1 h-1 mx-2 rounded ${
                  isCompleted ? "bg-primary" : "bg-muted"
                }`} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
