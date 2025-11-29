import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export default function Header() {
  const [location] = useLocation();
  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-6 flex h-16 items-center justify-between gap-4">
        <Link href="/" data-testid="link-home">
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-semibold text-xl" data-testid="text-logo">Coarus AI</span>
          </div>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/">
            <span 
              className={`text-sm cursor-pointer transition-colors ${location === "/" ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
              data-testid="link-nav-home"
            >
              Home
            </span>
          </Link>
          <Link href="/find-tools">
            <span 
              className={`text-sm cursor-pointer transition-colors ${location === "/find-tools" ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
              data-testid="link-nav-find-tools"
            >
              Find Tools
            </span>
          </Link>
        </nav>
        
        <Link href="/find-tools">
          <Button data-testid="button-get-started">
            Get Started
          </Button>
        </Link>
      </div>
    </header>
  );
}
