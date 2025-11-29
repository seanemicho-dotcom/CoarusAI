import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Calendar, FileText, Mail, User, Loader2 } from "lucide-react";
import type { WizardState } from "@/lib/wizard-data";

type LeadSource = "email_results" | "book_call" | "request_quote" | "personal_setup";

interface LeadCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
  source: LeadSource;
  wizardState: WizardState;
  recommendedTools?: string[];
  language?: string;
}

const sourceConfig: Record<LeadSource, { title: string; description: string; icon: any; buttonText: string }> = {
  email_results: {
    title: "Save Your Results",
    description: "Enter your email to receive your personalized AI tool recommendations.",
    icon: Mail,
    buttonText: "Send Results",
  },
  book_call: {
    title: "Book Free AI Opportunity Call",
    description: "Schedule a free 30-minute call with our AI experts to discuss how we can help your business.",
    icon: Calendar,
    buttonText: "Request Call",
  },
  request_quote: {
    title: "Request Implementation Quote",
    description: "Get a custom quote for AI tool integration, workflow automation, and team training.",
    icon: FileText,
    buttonText: "Get Quote",
  },
  personal_setup: {
    title: "Book Personal AI Setup",
    description: "Schedule a 1:1 session to get your AI tools configured and working together.",
    icon: User,
    buttonText: "Book Session",
  },
};

export default function LeadCaptureModal({
  isOpen,
  onClose,
  source,
  wizardState,
  recommendedTools = [],
  language = "en",
}: LeadCaptureModalProps) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();
  
  const config = sourceConfig[source];
  const Icon = config.icon;

  const mutation = useMutation({
    mutationFn: async () => {
      return apiRequest("POST", "/api/leads", {
        email,
        name: name || null,
        userPath: wizardState.path || "unknown",
        businessTypes: wizardState.businessTypes,
        businessProblems: wizardState.businessProblems,
        businessPriorities: wizardState.businessPriorities,
        workflowArea: wizardState.workflowArea || null,
        workflowDescription: message || wizardState.workflowDescription || null,
        personalIntents: wizardState.personalIntents,
        personalGoals: wizardState.personalGoals,
        recommendedTools,
        language,
        source,
      });
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: source === "email_results" 
          ? "Your results have been saved. Check your email soon!"
          : "We've received your request and will be in touch shortly!",
      });
      setEmail("");
      setName("");
      setMessage("");
      onClose();
    },
    onError: () => {
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    mutation.mutate();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Icon className="w-5 h-5 text-primary" />
            </div>
            <DialogTitle>{config.title}</DialogTitle>
          </div>
          <DialogDescription>{config.description}</DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              data-testid="input-lead-email"
            />
          </div>
          
          {source !== "email_results" && (
            <>
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  data-testid="input-lead-name"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">
                  {source === "request_quote" ? "Project Details" : "Anything else we should know?"}
                </Label>
                <Textarea
                  id="message"
                  placeholder={source === "request_quote" 
                    ? "Tell us about your project and goals..."
                    : "Optional message..."}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={3}
                  data-testid="input-lead-message"
                />
              </div>
            </>
          )}
          
          <div className="flex gap-3 pt-2">
            <Button 
              type="button" 
              variant="outline" 
              onClick={onClose}
              className="flex-1"
              data-testid="button-cancel-lead"
            >
              Cancel
            </Button>
            <Button 
              type="submit" 
              className="flex-1"
              disabled={!email || mutation.isPending}
              data-testid="button-submit-lead"
            >
              {mutation.isPending ? (
                <>
                  <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                config.buttonText
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
