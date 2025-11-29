import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "@/contexts/LanguageContext";
import logoImage from "@assets/coarus-ai-logo_1764437976535.png";

export default function Header() {
  const [location] = useLocation();
  const { t } = useLanguage();
  
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-950/95 backdrop-blur supports-[backdrop-filter]:bg-slate-950/80">
      <div className="max-w-7xl mx-auto px-6 flex h-16 items-center justify-between gap-4">
        <Link href="/" data-testid="link-home">
          <div className="flex items-center cursor-pointer">
            <img 
              src={logoImage} 
              alt="COARUS AI" 
              className="h-8 md:h-10 w-auto"
              data-testid="img-logo"
            />
          </div>
        </Link>
        
        <div className="hidden md:flex items-center gap-4">
          <LanguageToggle />
        </div>
        
        <nav className="flex items-center gap-4">
          <Link href="/">
            <span 
              className={`text-sm cursor-pointer transition-colors hidden sm:inline ${location === "/" ? "text-white" : "text-slate-400 hover:text-white"}`}
              data-testid="link-nav-home"
            >
              {t.header.home}
            </span>
          </Link>
          <Link href="/find-tools">
            <Button className="bg-primary hover:bg-primary/90" data-testid="button-get-started">
              {t.header.findTools}
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
