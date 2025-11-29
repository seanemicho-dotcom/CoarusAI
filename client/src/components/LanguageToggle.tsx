import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe, ChevronDown } from "lucide-react";
import { languages } from "@/lib/wizard-data";
import { useLanguage } from "@/contexts/LanguageContext";
import type { LanguageCode } from "@/lib/translations";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 flex-wrap">
      <Globe className="w-4 h-4 text-muted-foreground mr-1" />
      
      {languages.quick.map((lang) => (
        <Button
          key={lang.code}
          variant={language === lang.code ? "secondary" : "ghost"}
          size="sm"
          className="h-7 px-2 text-xs"
          onClick={() => setLanguage(lang.code as LanguageCode)}
          data-testid={`lang-${lang.code}`}
        >
          {lang.label}
        </Button>
      ))}
      
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="sm" className="h-7 px-2 text-xs" data-testid="lang-more">
            More <ChevronDown className="ml-1 w-3 h-3" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="max-h-[300px] overflow-y-auto">
          {languages.all.map((lang) => (
            <DropdownMenuItem
              key={lang.code}
              onClick={() => setLanguage(lang.code as LanguageCode)}
              className={language === lang.code ? "bg-muted" : ""}
              data-testid={`lang-dropdown-${lang.code}`}
            >
              {lang.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
