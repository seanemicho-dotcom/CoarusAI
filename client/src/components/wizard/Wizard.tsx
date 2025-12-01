import { useState } from "react";
import WizardProgress from "./WizardProgress";
import StepWelcome from "./StepWelcome";
import StepBusinessType from "./StepBusinessType";
import StepBusinessProblems from "./StepBusinessProblems";
import StepBusinessPriorities from "./StepBusinessPriorities";
import StepWorkflowDetails from "./StepWorkflowDetails";
import StepPersonalIntent from "./StepPersonalIntent";
import StepPersonalGoals from "./StepPersonalGoals";
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
  initialState?: WizardState | null;
  startAtLastStep?: boolean;
}

export default function Wizard({ onComplete, initialState, startAtLastStep }: WizardProps) {
  const getInitialStep = () => {
    if (startAtLastStep && initialState?.path) {
      return initialState.path === "smb" ? 4 : 2;
    }
    return 0;
  };
  
  const [state, setState] = useState<WizardState>(initialState || initialWizardState);
  const [step, setStep] = useState(getInitialStep);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateState = <K extends keyof WizardState>(key: K, value: WizardState[K]) => {
    setState(prev => ({ ...prev, [key]: value }));
  };

  const handleIntentChange = (intents: string[]) => {
    setState(prev => ({ 
      ...prev, 
      personalIntents: intents,
      personalGoals: []
    }));
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
      state.personalGoals
    );
    
    setIsSubmitting(false);
    onComplete(result, state);
  };

  // Determine total steps based on path
  const getSmbSteps = () => ["Type", "Problems", "Priorities", "Details"];
  const getIndividualSteps = () => ["Intent", "Goals"];

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
              onChange={handleIntentChange}
              onNext={() => setStep(2)}
              onBack={handleBack}
            />
          );
        case 2:
          return (
            <StepPersonalGoals
              selected={state.personalGoals}
              selectedIntents={state.personalIntents}
              onChange={(val) => updateState("personalGoals", val)}
              onSubmit={handleIndividualSubmit}
              onBack={handleBack}
              isSubmitting={isSubmitting}
            />
          );
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
