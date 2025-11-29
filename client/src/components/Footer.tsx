import { Link } from "wouter";
import { Sparkles } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card border-t py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-semibold text-xl">Coarus AI</span>
            </div>
            <p className="text-muted-foreground max-w-sm">
              Helping small and medium businesses find the perfect AI tools 
              to transform their operations and boost productivity.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <span className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors">
                    Home
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/find-tools">
                  <span className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors">
                    Find Tools
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li><span className="text-muted-foreground">Marketing</span></li>
              <li><span className="text-muted-foreground">Customer Service</span></li>
              <li><span className="text-muted-foreground">Bookkeeping</span></li>
              <li><span className="text-muted-foreground">Productivity</span></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground" data-testid="text-copyright">
            © 2025 Coarus AI. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Made with care for SMBs worldwide
          </p>
        </div>
      </div>
    </footer>
  );
}
