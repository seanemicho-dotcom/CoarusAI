import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function CTASection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-primary">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 
          className="text-3xl md:text-4xl font-semibold text-primary-foreground mb-4"
          data-testid="text-cta-headline"
        >
          {t.home.ctaTitle}
        </h2>
        <p className="text-primary-foreground/80 mb-8 text-lg">
          {t.home.ctaSubtitle}
        </p>
        
        <Link href="/find-tools">
          <Button 
            size="lg" 
            variant="secondary"
            className="text-lg px-8"
            data-testid="button-cta-find-tools"
          >
            {t.home.ctaButton} <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
