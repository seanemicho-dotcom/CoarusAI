import { useLanguage } from "@/contexts/LanguageContext";
import { Building2, User } from "lucide-react";

export default function HowItWorks() {
  const { t } = useLanguage();

  const smbSteps = [
    { number: "01", title: t.home.smbStep1, description: t.home.smbStep1Desc },
    { number: "02", title: t.home.smbStep2, description: t.home.smbStep2Desc },
    { number: "03", title: t.home.smbStep3, description: t.home.smbStep3Desc },
    { number: "04", title: t.home.smbStep4, description: t.home.smbStep4Desc },
  ];

  const individualSteps = [
    { number: "01", title: t.home.indStep1, description: t.home.indStep1Desc },
    { number: "02", title: t.home.indStep2, description: t.home.indStep2Desc },
  ];

  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <h2 
          className="text-3xl md:text-4xl font-bold text-center mb-4 text-white"
          data-testid="text-how-it-works-title"
        >
          {t.home.howItWorks}
        </h2>
        <p className="text-slate-400 text-center mb-16 max-w-2xl mx-auto">
          {t.home.howItWorksSubtitle}
        </p>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                <Building2 className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{t.home.forBusinesses}</h3>
                <p className="text-sm text-slate-400">{t.home.quickSteps}</p>
              </div>
            </div>
            <div className="space-y-4">
              {smbSteps.map((step, index) => (
                <div 
                  key={index} 
                  className="flex gap-4 p-4 rounded-xl border border-slate-800 bg-slate-900/50 hover:border-blue-500/30 transition-colors"
                  data-testid={`card-smb-step-${index + 1}`}
                >
                  <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent shrink-0">
                    {step.number}
                  </span>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{step.title}</h4>
                    <p className="text-sm text-slate-400">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                <User className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{t.home.forIndividuals}</h3>
                <p className="text-sm text-slate-400">{t.home.justSteps}</p>
              </div>
            </div>
            <div className="space-y-4">
              {individualSteps.map((step, index) => (
                <div 
                  key={index} 
                  className="flex gap-4 p-4 rounded-xl border border-slate-800 bg-slate-900/50 hover:border-purple-500/30 transition-colors"
                  data-testid={`card-individual-step-${index + 1}`}
                >
                  <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent shrink-0">
                    {step.number}
                  </span>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{step.title}</h4>
                    <p className="text-sm text-slate-400">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 rounded-xl bg-purple-500/10 border border-purple-500/20">
              <p className="text-purple-300 text-sm text-center">
                {t.home.quickSimple}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
