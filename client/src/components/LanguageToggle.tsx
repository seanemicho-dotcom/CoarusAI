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
      <Globe className="w-4 h-4 text-slate-400 mr-1" />
      
      {languages.quick.map((lang) => (
        <Button
          key={lang.code}
          variant={language === lang.code ? "secondary" : "ghost"}
          size="sm"
          className={`h-7 px-2 text-xs ${language === lang.code ? "bg-slate-700 text-white" : "text-slate-300 hover:text-white hover:bg-slate-800"}`}
          onClick={() => setLanguage(lang.code as LanguageCode)}
          data-testid={`lang-${lang.code}`}
        >
          {lang.label}
        </Button>
      ))}
      
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="sm" className="h-7 px-2 text-xs text-slate-300 hover:text-white hover:bg-slate-800" data-testid="lang-more">
            More <ChevronDown className="ml-1 w-3 h-3" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="max-h-[300px] overflow-y-auto bg-slate-900 border-slate-700">
          {languages.all.map((lang) => (
            <DropdownMenuItem
              key={lang.code}
              onClick={() => setLanguage(lang.code as LanguageCode)}
              className={`text-slate-300 hover:text-white hover:bg-slate-800 ${language === lang.code ? "bg-slate-700 text-white" : ""}`}
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
