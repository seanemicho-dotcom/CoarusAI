import { Check, Sparkles, Target, Building2, User } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ValueProposition() {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: Building2,
      title: t.home.benefitBusiness,
      description: t.home.benefitBusinessDesc,
    },
    {
      icon: User,
      title: t.home.benefitIndividual, 
      description: t.home.benefitIndividualDesc,
    },
    {
      icon: Sparkles,
      title: t.home.benefitFresh,
      description: t.home.benefitFreshDesc,
    },
    {
      icon: Target,
      title: t.home.benefitMatch,
      description: t.home.benefitMatchDesc,
    },
  ];

  const bullets = [
    t.home.valueBullet1,
    t.home.valueBullet2,
    t.home.valueBullet3,
    t.home.valueBullet4,
  ];

  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              {t.home.valueTitle}
            </h2>
            <p className="text-slate-300 text-lg mb-6 leading-relaxed">
              {t.home.valueDesc1}
            </p>
            <p className="text-slate-400 mb-8">
              {t.home.valueDesc2}
            </p>
            
            <div className="space-y-3">
              {bullets.map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-slate-300">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="p-5 rounded-xl border border-slate-700 bg-slate-800/50 hover:border-blue-500/30 transition-colors"
                data-testid={`card-benefit-${index + 1}`}
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <benefit.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-white mb-1">{benefit.title}</h3>
                <p className="text-sm text-slate-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
