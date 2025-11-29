import { useLanguage } from "@/contexts/LanguageContext";

export default function HowItWorks() {
  const { t } = useLanguage();

  const steps = [
    {
      number: "01",
      title: t.home.step1Title,
      description: t.home.step1Desc,
      tag: "Free",
    },
    {
      number: "02",
      title: t.home.step2Title,
      description: t.home.step2Desc,
    },
    {
      number: "03",
      title: t.home.step3Title,
      description: t.home.step3Desc,
    },
  ];

  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <h2 
          className="text-3xl md:text-4xl font-bold text-center mb-4 text-white"
          data-testid="text-how-it-works-title"
        >
          How It <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Works</span>
        </h2>
        <p className="text-slate-400 text-center mb-16 max-w-2xl mx-auto">
          {t.home.featuresSubtitle}
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative p-6 rounded-xl border border-slate-800 bg-slate-900/50 hover:border-blue-500/30 transition-colors"
              data-testid={`card-step-${index + 1}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  {step.number}
                </span>
                {step.tag && (
                  <span className="px-2 py-1 text-xs font-medium bg-primary/20 text-primary rounded">
                    {step.tag}
                  </span>
                )}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{step.title}</h3>
              <p className="text-slate-400 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
