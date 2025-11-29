import { MessageSquare, Sparkles, Rocket } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function HowItWorks() {
  const { t } = useLanguage();

  const steps = [
    {
      icon: MessageSquare,
      title: t.home.step1Title,
      description: t.home.step1Desc,
    },
    {
      icon: Sparkles,
      title: t.home.step2Title,
      description: t.home.step2Desc,
    },
    {
      icon: Rocket,
      title: t.home.step3Title,
      description: t.home.step3Desc,
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <h2 
          className="text-3xl md:text-4xl font-semibold text-center mb-4"
          data-testid="text-how-it-works-title"
        >
          {t.home.howItWorks}
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          {t.home.featuresSubtitle}
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="text-center"
              data-testid={`card-step-${index + 1}`}
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <step.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="text-sm text-muted-foreground mb-2">Step {index + 1}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
