import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import logoImage from "@assets/coarus-ai-logo_1764437976535.png";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-card border-t py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src={logoImage} 
                alt="COARUS AI" 
                className="h-8 w-auto"
              />
            </div>
            <p className="text-muted-foreground max-w-sm">
              {t.footer.tagline}
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">{t.header.home}</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <span className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors">
                    {t.header.home}
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/find-tools">
                  <span className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors">
                    {t.header.findTools}
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground" data-testid="text-copyright">
            © 2025 COARUS AI. {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
