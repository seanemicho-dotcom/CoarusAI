import { Card } from "@/components/ui/card";
import { 
  Check, Building2, Factory, ShoppingBag, Briefcase, Code, UtensilsCrossed, Truck, 
  HeadphonesIcon, TrendingUp, Megaphone, Mail, BarChart3, Calculator, BookOpen, 
  Users, Workflow, Clock, DollarSign, Heart, Zap, BarChart, Brain, PenLine, 
  Gamepad2, Flame, ListTodo, GraduationCap, Wallet, Palette, MessageCircle, 
  HeartHandshake, Drama, Calendar, Target, RefreshCw, FileText, CheckCircle, 
  Feather, Share2, Lightbulb, Globe, Search, Wrench, Compass, Receipt, 
  PiggyBank, FileSpreadsheet, Music, Sparkles, Smile, MessageSquare, Clapperboard
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Option {
  id: string;
  label: string;
  icon?: string;
}

interface MultiSelectGridProps {
  options: Option[];
  selected: string[];
  onChange: (selected: string[]) => void;
  columns?: 2 | 3;
}

const iconMap: Record<string, LucideIcon> = {
  Building2,
  Factory,
  ShoppingBag,
  Briefcase,
  Code,
  UtensilsCrossed,
  Truck,
  HeadphonesIcon,
  TrendingUp,
  Megaphone,
  Mail,
  BarChart3,
  Calculator,
  BookOpen,
  Users,
  Workflow,
  Clock,
  DollarSign,
  Heart,
  Zap,
  BarChart,
  Brain,
  PenLine,
  Gamepad2,
  Flame,
  ListTodo,
  GraduationCap,
  Wallet,
  Palette,
  MessageCircle,
  HeartHandshake,
  Drama,
  Calendar,
  Target,
  RefreshCw,
  Repeat: RefreshCw,
  FileText,
  CheckCircle,
  Feather,
  Share2,
  Lightbulb,
  Globe,
  Search,
  Wrench,
  Compass,
  Receipt,
  PiggyBank,
  FileSpreadsheet,
  Music,
  Sparkles,
  Smile,
  MessageSquare,
  Clapperboard,
  StickyNote: FileText,
  Linkedin: Users,
};

export default function MultiSelectGrid({ options, selected, onChange, columns = 2 }: MultiSelectGridProps) {
  const toggleOption = (id: string) => {
    if (selected.includes(id)) {
      onChange(selected.filter(s => s !== id));
    } else {
      onChange([...selected, id]);
    }
  };

  const getIcon = (iconName?: string) => {
    if (!iconName) return null;
    const IconComponent = iconMap[iconName];
    return IconComponent ? <IconComponent className="w-5 h-5" /> : null;
  };

  return (
    <div className={`grid gap-3 ${columns === 3 ? "md:grid-cols-3" : "md:grid-cols-2"}`}>
      {options.map((option) => {
        const isSelected = selected.includes(option.id);
        return (
          <Card
            key={option.id}
            className={`p-4 cursor-pointer transition-all hover-elevate ${
              isSelected ? "ring-2 ring-primary bg-primary/5" : ""
            }`}
            onClick={() => toggleOption(option.id)}
            data-testid={`option-${option.id}`}
          >
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                isSelected ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
              }`}>
                {isSelected ? <Check className="w-5 h-5" /> : getIcon(option.icon)}
              </div>
              <span className={`text-sm ${isSelected ? "font-medium" : ""}`}>
                {option.label}
              </span>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
