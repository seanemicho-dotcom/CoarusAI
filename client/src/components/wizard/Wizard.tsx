import { useState } from "react";
import { useLocation } from "wouter";
import WizardProgress from "./WizardProgress";
import StepWelcome from "./StepWelcome";
import StepBusinessType from "./StepBusinessType";
import StepBusinessProblems from "./StepBusinessProblems";
import StepBusinessPriorities from "./StepBusinessPriorities";
import StepWorkflowDetails from "./StepWorkflowDetails";
import StepPersonalIntent from "./StepPersonalIntent";
import StepPersonalGoals from "./StepPersonalGoals";
import StepCompanionType from "./StepCompanionType";
import StepAgeVerification from "./StepAgeVerification";
import { 
  type WizardState, 
  type UserPath, 
  initialWizardState 
} from "@/lib/wizard-data";
import { 
  matchToolsForBusiness, 
  matchToolsForIndividual,
  type MatchResult 
} from "@/lib/tools";

interface WizardProps {
  onComplete: (result: MatchResult, state: WizardState) => void;
}

export default function Wizard({ onComplete }: WizardProps) {
  const [state, setState] = useState<WizardState>(initialWizardState);
  const [step, setStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateState = <K extends keyof WizardState>(key: K, value: WizardState[K]) => {
    setState(prev => ({ ...prev, [key]: value }));
  };

  const handlePathSelect = (path: UserPath) => {
    updateState("path", path);
    setStep(1);
  };

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const handleBusinessSubmit = async () => {
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const result = matchToolsForBusiness(
      state.businessProblems,
      state.businessPriorities,
      state.monthlyBudget,
      state.hoursPerWeek
    );
    
    setIsSubmitting(false);
    onComplete(result, state);
  };

  const handleIndividualSubmit = async () => {
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const result = matchToolsForIndividual(
      state.personalIntents,
      state.personalGoals,
      state.isAdultPath,
      state.contentLevel
    );
    
    setIsSubmitting(false);
    onComplete(result, state);
  };

  const isAdultPath = state.personalIntents.includes("companionship") || 
                      state.personalIntents.includes("adult");

  // Determine total steps based on path
  const getSmbSteps = () => ["Type", "Problems", "Priorities", "Details"];
  const getIndividualSteps = () => {
    if (isAdultPath) {
      return ["Intent", "Companion", "Boundaries"];
    }
    return ["Intent", "Goals"];
  };

  const currentStepLabels = state.path === "smb" 
    ? getSmbSteps() 
    : state.path === "individual" 
      ? getIndividualSteps()
      : [];

  const totalSteps = currentStepLabels.length;

  // Render appropriate step based on path and step number
  const renderStep = () => {
    // Step 0: Welcome (path selection)
    if (step === 0) {
      return <StepWelcome onSelect={handlePathSelect} />;
    }

    // SMB Path
    if (state.path === "smb") {
      switch (step) {
        case 1:
          return (
            <StepBusinessType
              selected={state.businessTypes}
              onChange={(val) => updateState("businessTypes", val)}
              onNext={() => setStep(2)}
              onBack={handleBack}
            />
          );
        case 2:
          return (
            <StepBusinessProblems
              selected={state.businessProblems}
              onChange={(val) => updateState("businessProblems", val)}
              onNext={() => setStep(3)}
              onBack={handleBack}
            />
          );
        case 3:
          return (
            <StepBusinessPriorities
              selected={state.businessPriorities}
              onChange={(val) => updateState("businessPriorities", val)}
              onNext={() => setStep(4)}
              onBack={handleBack}
            />
          );
        case 4:
          return (
            <StepWorkflowDetails
              workflowArea={state.workflowArea}
              workflowDescription={state.workflowDescription}
              hoursPerWeek={state.hoursPerWeek}
              monthlyBudget={state.monthlyBudget}
              onWorkflowAreaChange={(val) => updateState("workflowArea", val)}
              onWorkflowDescriptionChange={(val) => updateState("workflowDescription", val)}
              onHoursChange={(val) => updateState("hoursPerWeek", val)}
              onBudgetChange={(val) => updateState("monthlyBudget", val)}
              onSubmit={handleBusinessSubmit}
              onBack={handleBack}
              isSubmitting={isSubmitting}
            />
          );
      }
    }

    // Individual Path
    if (state.path === "individual") {
      switch (step) {
        case 1:
          return (
            <StepPersonalIntent
              selected={state.personalIntents}
              onChange={(val) => {
                updateState("personalIntents", val);
                // Check if adult path
                const hasAdult = val.includes("companionship") || val.includes("adult");
                updateState("isAdultPath", hasAdult);
              }}
              onNext={() => setStep(2)}
              onBack={handleBack}
            />
          );
        case 2:
          // Branch based on adult selection
          if (isAdultPath) {
            return (
              <StepCompanionType
                selected={state.companionTypes}
                onChange={(val) => updateState("companionTypes", val)}
                onNext={() => setStep(3)}
                onBack={handleBack}
              />
            );
          } else {
            return (
              <StepPersonalGoals
                selected={state.personalGoals}
                onChange={(val) => updateState("personalGoals", val)}
                onSubmit={handleIndividualSubmit}
                onBack={handleBack}
                isSubmitting={isSubmitting}
              />
            );
          }
        case 3:
          // Only for adult path
          if (isAdultPath) {
            return (
              <StepAgeVerification
                ageVerified={state.ageVerified}
                contentLevel={state.contentLevel}
                safeWord={state.safeWord}
                allowStrongLanguage={state.allowStrongLanguage}
                noHumiliation={state.noHumiliation}
                allowFantasyCharacters={state.allowFantasyCharacters}
                onAgeVerified={(val) => updateState("ageVerified", val)}
                onContentLevelChange={(val) => updateState("contentLevel", val)}
                onSafeWordChange={(val) => updateState("safeWord", val)}
                onAllowStrongLanguageChange={(val) => updateState("allowStrongLanguage", val)}
                onNoHumiliationChange={(val) => updateState("noHumiliation", val)}
                onAllowFantasyCharactersChange={(val) => updateState("allowFantasyCharacters", val)}
                onSubmit={handleIndividualSubmit}
                onBack={handleBack}
                isSubmitting={isSubmitting}
              />
            );
          }
          break;
      }
    }

    return null;
  };

  return (
    <div className="py-8 px-6">
      {step > 0 && state.path && (
        <div className="max-w-2xl mx-auto mb-8">
          <WizardProgress 
            currentStep={step} 
            totalSteps={totalSteps}
            labels={currentStepLabels}
          />
        </div>
      )}
      {renderStep()}
    </div>
  );
}
