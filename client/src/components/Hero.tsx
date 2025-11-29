import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, User } from "lucide-react";
import heroImage from "@assets/generated_images/business_team_collaboration_workspace.png";

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center py-20">
        <h1 
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          data-testid="text-hero-headline"
        >
          Find the Perfect AI Tools for Your Business
        </h1>
        <p 
          className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto"
          data-testid="text-hero-subheadline"
        >
          Describe what you need, and we'll match you with the best AI solutions. 
          No more searching through hundreds of tools.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link href="/find-tools">
            <Button size="lg" className="text-lg px-8" data-testid="button-hero-cta">
              Find AI Tools <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
        
        <div className="flex items-center justify-center gap-6 text-white/80">
          <div className="flex items-center gap-2">
            <Building2 className="w-4 h-4" />
            <span className="text-sm">For SMBs</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-white/50" />
          <div className="flex items-center gap-2">
            <User className="w-4 h-4" />
            <span className="text-sm">For Professionals</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-white/50" />
          <span className="text-sm">Free & No Signup</span>
        </div>
      </div>
    </section>
  );
}
