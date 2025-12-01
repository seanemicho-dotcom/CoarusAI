import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(6,182,212,0.1),transparent_50%)]" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center py-24">
        <p className="text-primary/90 font-medium mb-4 tracking-wide uppercase text-sm">
          {t.home.heroTagline}
        </p>
        
        <h1 
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white"
          data-testid="text-hero-headline"
        >
          {t.home.heroTitle}
        </h1>
        
        <p 
          className="text-lg md:text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed"
          data-testid="text-hero-subheadline"
        >
          {t.home.heroSubtitle}
        </p>
        
        <div className="flex justify-center">
          <Link href="/find-tools">
            <Button size="lg" className="text-lg px-8 bg-primary hover:bg-primary/90" data-testid="button-hero-cta">
              {t.home.getStarted} <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
