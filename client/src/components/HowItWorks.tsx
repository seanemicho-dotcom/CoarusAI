import { useLanguage } from "@/contexts/LanguageContext";
import { Building2, User } from "lucide-react";

export default function HowItWorks() {
  const { t } = useLanguage();

  const smbSteps = [
    { number: "01", title: "Tell us about your business", description: "Select your industry and company size" },
    { number: "02", title: "Describe your challenges", description: "What problems are you trying to solve?" },
    { number: "03", title: "Set your priorities", description: "Budget, timeline, and key requirements" },
    { number: "04", title: "Get matched", description: "Receive personalized AI tool recommendations" },
  ];

  const individualSteps = [
    { number: "01", title: "Choose your interests", description: "Creativity, learning, productivity, or companionship" },
    { number: "02", title: "Get matched", description: "Discover personal AI tools tailored to you" },
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
          Two simple paths to find your perfect AI tools
        </p>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                <Building2 className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">For Businesses</h3>
                <p className="text-sm text-slate-400">4 quick steps</p>
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
                <h3 className="text-xl font-bold text-white">For Individuals</h3>
                <p className="text-sm text-slate-400">Just 2 steps</p>
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
                Quick and simple for personal use!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
