import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 bg-primary">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 
          className="text-3xl md:text-4xl font-semibold text-primary-foreground mb-4"
          data-testid="text-cta-headline"
        >
          Ready to Transform Your Business?
        </h2>
        <p className="text-primary-foreground/80 mb-8 text-lg">
          Join thousands of businesses already using the right AI tools
        </p>
        
        <Link href="/find-tools">
          <Button 
            size="lg" 
            variant="secondary"
            className="text-lg px-8"
            data-testid="button-cta-find-tools"
          >
            Find Your AI Tools <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </Link>
        
        <p className="text-primary-foreground/60 mt-6 text-sm">
          No signup required • Free recommendations • Takes 30 seconds
        </p>
      </div>
    </section>
  );
}
