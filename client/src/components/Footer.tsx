import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import { Mail, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                COARUS
              </span>
            </div>
            <p className="text-slate-400 max-w-sm mb-6">
              {t.footer.tagline}
            </p>
            <div className="flex items-center gap-4">
              <a href="mailto:info@coarus.com" className="text-slate-400 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-white">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/">
                  <span className="text-slate-400 hover:text-white cursor-pointer transition-colors">
                    {t.header.home}
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/find-tools">
                  <span className="text-slate-400 hover:text-white cursor-pointer transition-colors">
                    {t.header.findTools}
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-white">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:info@coarus.com" className="text-slate-400 hover:text-white cursor-pointer transition-colors">
                  info@coarus.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500" data-testid="text-copyright">
            © 2025 COARUS. {t.footer.copyright}
          </p>
          <div className="flex items-center gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
