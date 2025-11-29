import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function CTASection() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.15),transparent_70%)]" />
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 
          className="text-3xl md:text-4xl font-bold text-white mb-4"
          data-testid="text-cta-headline"
        >
          Ready to Discover <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">AI Tools</span> for Your Business?
        </h2>
        <p className="text-slate-300 mb-10 text-lg max-w-2xl mx-auto">
          {t.home.ctaSubtitle}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link href="/find-tools">
            <Button 
              size="lg" 
              className="text-lg px-8 bg-primary hover:bg-primary/90"
              data-testid="button-cta-find-tools"
            >
              {t.home.ctaButton} <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
        
        <div className="flex items-center justify-center gap-2 text-slate-400 text-sm">
          <Mail className="w-4 h-4" />
          <span>Prefer to email directly?</span>
          <a href="mailto:info@coarus.com" className="text-primary hover:underline">info@coarus.com</a>
        </div>
      </div>
    </section>
  );
}
