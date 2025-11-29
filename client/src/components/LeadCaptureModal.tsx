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
import { useLanguage } from "@/contexts/LanguageContext";
import { Calendar, FileText, Mail, User, Loader2 } from "lucide-react";
import type { WizardState } from "@/lib/wizard-data";

type LeadSource = "email_results" | "book_call" | "request_quote" | "personal_setup";

interface LeadCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
  source: LeadSource;
  wizardState: WizardState;
  recommendedTools?: string[];
}

const sourceIcons: Record<LeadSource, any> = {
  email_results: Mail,
  book_call: Calendar,
  request_quote: FileText,
  personal_setup: User,
};

export default function LeadCaptureModal({
  isOpen,
  onClose,
  source,
  wizardState,
  recommendedTools = [],
}: LeadCaptureModalProps) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();
  const { language, t } = useLanguage();
  
  const Icon = sourceIcons[source];

  const getConfig = () => {
    switch (source) {
      case "email_results":
        return { title: t.leadModal.emailResultsTitle, description: t.leadModal.emailResultsDesc };
      case "book_call":
        return { title: t.leadModal.bookCallTitle, description: t.leadModal.bookCallDesc };
      case "request_quote":
        return { title: t.leadModal.requestQuoteTitle, description: t.leadModal.requestQuoteDesc };
      case "personal_setup":
        return { title: t.leadModal.personalSetupTitle, description: t.leadModal.personalSetupDesc };
    }
  };

  const config = getConfig();

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
        title: t.leadModal.success,
        description: source === "email_results" 
          ? t.leadModal.successEmail
          : t.leadModal.successBooking,
      });
      setEmail("");
      setName("");
      setMessage("");
      onClose();
    },
    onError: () => {
      toast({
        title: t.leadModal.error,
        description: t.leadModal.error,
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
            <Label htmlFor="email">{t.leadModal.email} *</Label>
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
                <Label htmlFor="name">{t.leadModal.name}</Label>
                <Input
                  id="name"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  data-testid="input-lead-name"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">{t.leadModal.message}</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us more..."
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
              {t.leadModal.cancel}
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
                  {t.leadModal.submitting}
                </>
              ) : (
                t.leadModal.submit
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
