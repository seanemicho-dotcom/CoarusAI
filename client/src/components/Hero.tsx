import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search, Building2, User } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(6,182,212,0.1),transparent_50%)]" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center py-24">
        <p className="text-primary/90 font-medium mb-4 tracking-wide uppercase text-sm">
          AI Tools for Everyone
        </p>
        
        <h1 
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white"
          data-testid="text-hero-headline"
        >
          {t.home.heroTitle.split(' ').map((word, i) => 
            ['AI', 'Tools', 'Perfect', 'You'].includes(word) ? (
              <span key={i} className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">{word} </span>
            ) : (
              <span key={i}>{word} </span>
            )
          )}
        </h1>
        
        <p 
          className="text-lg md:text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed"
          data-testid="text-hero-subheadline"
        >
          {t.home.heroSubtitle}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <Link href="/find-tools">
            <Button size="lg" className="text-lg px-8 bg-primary hover:bg-primary/90" data-testid="button-hero-cta">
              {t.home.getStarted} <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
          <Link href="/find-tools">
            <Button size="lg" variant="outline" className="text-lg px-8 border-slate-600 text-slate-200 hover:bg-slate-800 hover:text-white" data-testid="button-hero-explore">
              <Search className="mr-2 w-5 h-5" /> Explore Categories
            </Button>
          </Link>
        </div>
        
        <div className="flex items-center justify-center gap-6 text-slate-400 text-sm flex-wrap">
          <div className="flex items-center gap-2">
            <Building2 className="w-4 h-4" />
            <span>{t.wizard.pathSmb}</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-slate-600" />
          <div className="flex items-center gap-2">
            <User className="w-4 h-4" />
            <span>{t.wizard.pathIndividual}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
