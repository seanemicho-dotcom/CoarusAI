import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, User } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-background">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.1),transparent_50%)]" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center py-20">
        <h1 
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          data-testid="text-hero-headline"
        >
          Find the Right AI Solution — Business or Personal
        </h1>
        <p 
          className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          data-testid="text-hero-subheadline"
        >
          Tell us who you are and we'll match you with the best AI tools for your specific needs. 
          No technical knowledge required.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link href="/find-tools">
            <Button size="lg" className="text-lg px-8" data-testid="button-hero-cta">
              Start Tool Finder <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
        
        <div className="flex items-center justify-center gap-6 text-muted-foreground">
          <div className="flex items-center gap-2">
            <Building2 className="w-4 h-4" />
            <span className="text-sm">For SMBs</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-muted-foreground/50" />
          <div className="flex items-center gap-2">
            <User className="w-4 h-4" />
            <span className="text-sm">For Individuals</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-muted-foreground/50" />
          <span className="text-sm">Free & No Signup</span>
        </div>
      </div>
    </section>
  );
}
