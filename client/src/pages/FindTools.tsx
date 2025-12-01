import { useState, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Wizard from "@/components/wizard/Wizard";
import EnhancedResultsView from "@/components/EnhancedResultsView";
import type { MatchResult } from "@/lib/tools";
import type { WizardState } from "@/lib/wizard-data";

export default function FindTools() {
  const [result, setResult] = useState<MatchResult | null>(null);
  const [wizardState, setWizardState] = useState<WizardState | null>(null);
  const [returnToLastStep, setReturnToLastStep] = useState(false);
  const savedWizardStateRef = useRef<WizardState | null>(null);

  const handleComplete = (matchResult: MatchResult, state: WizardState) => {
    setResult(matchResult);
    setWizardState(state);
    savedWizardStateRef.current = state;
    setReturnToLastStep(false);
  };

  const handleStartOver = () => {
    setResult(null);
    setWizardState(null);
    savedWizardStateRef.current = null;
    setReturnToLastStep(false);
  };

  const handleBack = () => {
    setResult(null);
    setReturnToLastStep(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-8 px-6">
        {result && wizardState ? (
          <EnhancedResultsView 
            result={result}
            userPath={wizardState.path!}
            wizardState={wizardState}
            onStartOver={handleStartOver}
            onBack={handleBack}
          />
        ) : (
          <Wizard 
            onComplete={handleComplete} 
            initialState={returnToLastStep ? savedWizardStateRef.current : null}
            startAtLastStep={returnToLastStep}
          />
        )}
      </main>
      <Footer />
    </div>
  );
}
