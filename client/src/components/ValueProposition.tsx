import { Check, Sparkles, Target, TrendingUp, Users } from "lucide-react";

export default function ValueProposition() {
  const benefits = [
    {
      icon: Target,
      title: "Discover AI opportunities",
      description: "Find the right AI tools for your specific business challenges",
    },
    {
      icon: Sparkles,
      title: "Stay ahead of the curve", 
      description: "Access the latest AI tools as soon as they launch",
    },
    {
      icon: TrendingUp,
      title: "Maximize ROI",
      description: "Get personalized recommendations based on your needs and budget",
    },
    {
      icon: Users,
      title: "No expertise required",
      description: "Plain-language guidance, no technical knowledge needed",
    },
  ];

  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              Most SMBs don't know what{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                AI can already do
              </span>{" "}
              for them
            </h2>
            <p className="text-slate-300 text-lg mb-6 leading-relaxed">
              Every week, new AI tools launch that can automate customer support, generate marketing content, analyze data, and streamline operations. But most small and mid-size companies don't have time to track what's possible.
            </p>
            <p className="text-slate-400 mb-8">
              COARUS AI helps you discover the right AI tools for your specific needs – without the hype or technical jargon.
            </p>
            
            <div className="space-y-3">
              {[
                "Curated recommendations from 155+ verified AI tools",
                "Updated weekly with the latest launches",
                "Personalized matches based on your industry and goals",
                "Free, no signup required",
              ].map((item, i) => (
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
