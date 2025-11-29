import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Building2, User, ArrowRight, Loader2 } from "lucide-react";

interface IntakeFormProps {
  onSubmit?: (userType: string, need: string) => void;
}

export default function IntakeForm({ onSubmit }: IntakeFormProps) {
  const [, setLocation] = useLocation();
  const [userType, setUserType] = useState<"smb" | "individual" | null>(null);
  const [need, setNeed] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userType || !need.trim()) return;
    
    setIsSubmitting(true);
    
    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    if (onSubmit) {
      onSubmit(userType, need);
    } else {
      // Navigate to results with query params
      const params = new URLSearchParams({ type: userType, need: need });
      setLocation(`/results?${params.toString()}`);
    }
    
    setIsSubmitting(false);
  };
  
  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h1 
          className="text-3xl md:text-4xl font-semibold mb-3"
          data-testid="text-form-title"
        >
          Tell Us About Your Needs
        </h1>
        <p className="text-muted-foreground">
          We'll match you with the best AI tools for your specific situation
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="space-y-3">
          <Label className="text-base">I am a...</Label>
          <div className="grid grid-cols-2 gap-4">
            <Card
              className={`p-6 cursor-pointer transition-all hover-elevate ${
                userType === "smb" 
                  ? "ring-2 ring-primary bg-primary/5" 
                  : ""
              }`}
              onClick={() => setUserType("smb")}
              data-testid="card-usertype-smb"
            >
              <div className="flex flex-col items-center text-center">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 ${
                  userType === "smb" ? "bg-primary" : "bg-muted"
                }`}>
                  <Building2 className={`w-6 h-6 ${
                    userType === "smb" ? "text-primary-foreground" : "text-muted-foreground"
                  }`} />
                </div>
                <h3 className="font-semibold mb-1">Small/Medium Business</h3>
                <p className="text-sm text-muted-foreground">Company or team looking for AI solutions</p>
              </div>
            </Card>
            
            <Card
              className={`p-6 cursor-pointer transition-all hover-elevate ${
                userType === "individual" 
                  ? "ring-2 ring-primary bg-primary/5" 
                  : ""
              }`}
              onClick={() => setUserType("individual")}
              data-testid="card-usertype-individual"
            >
              <div className="flex flex-col items-center text-center">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 ${
                  userType === "individual" ? "bg-primary" : "bg-muted"
                }`}>
                  <User className={`w-6 h-6 ${
                    userType === "individual" ? "text-primary-foreground" : "text-muted-foreground"
                  }`} />
                </div>
                <h3 className="font-semibold mb-1">Individual Professional</h3>
                <p className="text-sm text-muted-foreground">Freelancer, creator, or solo professional</p>
              </div>
            </Card>
          </div>
        </div>
        
        <div className="space-y-3">
          <Label htmlFor="need" className="text-base">What do you need help with?</Label>
          <Textarea
            id="need"
            placeholder="Describe your challenge in plain language, e.g., 'I run a small online shop and need help with email marketing and social media' or 'I need to automate bookkeeping and invoicing for my consulting business'"
            className="min-h-[140px] text-base"
            value={need}
            onChange={(e) => setNeed(e.target.value)}
            data-testid="textarea-need"
          />
          <p className="text-sm text-muted-foreground">
            The more specific you are, the better we can help you find the right tools
          </p>
        </div>
        
        <Button 
          type="submit" 
          size="lg"
          className="w-full md:w-auto md:px-12"
          disabled={!userType || !need.trim() || isSubmitting}
          data-testid="button-submit-form"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 w-5 h-5 animate-spin" />
              Finding tools...
            </>
          ) : (
            <>
              Find AI Tools <ArrowRight className="ml-2 w-5 h-5" />
            </>
          )}
        </Button>
      </form>
    </div>
  );
}
