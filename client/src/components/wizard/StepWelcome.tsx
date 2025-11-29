import { Card } from "@/components/ui/card";
import { Building2, User } from "lucide-react";
import type { UserPath } from "@/lib/wizard-data";

interface StepWelcomeProps {
  onSelect: (path: UserPath) => void;
}

export default function StepWelcome({ onSelect }: StepWelcomeProps) {
  return (
    <div className="max-w-2xl mx-auto text-center">
      <h1 className="text-3xl md:text-4xl font-semibold mb-3" data-testid="text-welcome-title">
        Welcome to COARUS AI MATCH
      </h1>
      <p className="text-muted-foreground mb-8 text-lg">
        Tell us who you are and we'll match you with the right AI solutions.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6">
        <Card
          className="p-8 cursor-pointer hover-elevate active-elevate-2 transition-all border-2 hover:border-primary"
          onClick={() => onSelect("smb")}
          data-testid="card-path-smb"
        >
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Building2 className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-xl font-semibold mb-2">I run or work at a business</h2>
            <p className="text-muted-foreground">
              Find AI tools for your team, operations, and growth
            </p>
          </div>
        </Card>
        
        <Card
          className="p-8 cursor-pointer hover-elevate active-elevate-2 transition-all border-2 hover:border-primary"
          onClick={() => onSelect("individual")}
          data-testid="card-path-individual"
        >
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <User className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-xl font-semibold mb-2">I am an individual</h2>
            <p className="text-muted-foreground">
              Find AI tools for personal productivity, learning, and more
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
