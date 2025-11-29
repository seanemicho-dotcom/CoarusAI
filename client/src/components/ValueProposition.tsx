import { Check, Sparkles, Target, TrendingUp, Users, Building2, User } from "lucide-react";

export default function ValueProposition() {
  const benefits = [
    {
      icon: Building2,
      title: "For Businesses",
      description: "Automate workflows, boost productivity, and scale operations with AI",
    },
    {
      icon: User,
      title: "For Individuals", 
      description: "Personal AI assistants, learning tools, and creative companions",
    },
    {
      icon: Sparkles,
      title: "Always Fresh",
      description: "New AI tools added weekly – never miss the latest innovations",
    },
    {
      icon: Target,
      title: "Personalized Matches",
      description: "Get recommendations tailored to your specific needs and goals",
    },
  ];

  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              Most people don't know what{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                AI can already do
              </span>{" "}
              for them
            </h2>
            <p className="text-slate-300 text-lg mb-6 leading-relaxed">
              Every week, new AI tools launch – for business automation, personal productivity, creative projects, learning, and more. But most people don't have time to track what's possible or figure out which tools actually work.
            </p>
            <p className="text-slate-400 mb-8">
              Whether you're running a business or looking for personal AI tools, COARUS AI helps you discover the right solutions – without the hype or technical jargon.
            </p>
            
            <div className="space-y-3">
              {[
                "Curated recommendations from 155+ verified AI tools",
                "Updated weekly with the latest launches",
                "Two paths: Business tools OR Personal AI companions",
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
