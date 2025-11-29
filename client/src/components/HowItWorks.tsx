import { MessageSquare, Sparkles, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Describe Your Need",
    description: "Tell us what challenge you're facing in plain language. No technical jargon required.",
  },
  {
    icon: Sparkles,
    title: "Get Matched",
    description: "Our system analyzes your needs and finds the best AI tools from our curated database.",
  },
  {
    icon: Rocket,
    title: "Start Using AI",
    description: "Explore your personalized recommendations and start transforming your business.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <h2 
          className="text-3xl md:text-4xl font-semibold text-center mb-4"
          data-testid="text-how-it-works-title"
        >
          How It Works
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Get personalized AI tool recommendations in three simple steps
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={step.title} 
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
