import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, GripVertical, Clock, DollarSign, TrendingUp, Heart, Zap, BarChart } from "lucide-react";
import { businessPriorities } from "@/lib/wizard-data";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState, useEffect, useRef, useMemo } from "react";
import type { LucideIcon } from "lucide-react";
import type { Translations } from "@/lib/translations";

interface StepBusinessPrioritiesProps {
  selected: string[];
  onChange: (selected: string[]) => void;
  onNext: () => void;
  onBack: () => void;
}

const iconMap: Record<string, LucideIcon> = {
  Clock,
  DollarSign,
  TrendingUp,
  Heart,
  Zap,
  BarChart,
};

const prioritiesTranslationMap: Record<string, keyof Translations["wizardOptions"]> = {
  "save-time": "saveTime",
  "reduce-cost": "reduceCost",
  "increase-revenue": "increaseRevenue",
  "customer-experience": "customerExperience",
  "productivity": "productivity",
  "analytics": "analytics",
};

export default function StepBusinessPriorities({ selected, onChange, onNext, onBack }: StepBusinessPrioritiesProps) {
  const { t } = useLanguage();
  const [draggedItem, setDraggedItem] = useState<string | null>(null);
  const onChangeRef = useRef(onChange);
  const prevSelectedRef = useRef<string[]>([]);
  onChangeRef.current = onChange;

  const translatedPriorities = useMemo(() => {
    return businessPriorities.map(option => ({
      ...option,
      label: t.wizardOptions[prioritiesTranslationMap[option.id] as keyof typeof t.wizardOptions] || option.label
    }));
  }, [t]);

  const [items, setItems] = useState(() => {
    if (selected.length === 0) {
      return translatedPriorities;
    }
    const selectedSet = new Set(selected);
    const selectedItems = selected
      .map(id => translatedPriorities.find(p => p.id === id))
      .filter(Boolean) as typeof translatedPriorities;
    const remainingItems = translatedPriorities.filter(p => !selectedSet.has(p.id));
    return [...selectedItems, ...remainingItems];
  });

  useEffect(() => {
    setItems(prev => {
      return prev.map(item => {
        const translated = translatedPriorities.find(p => p.id === item.id);
        return translated ? { ...item, label: translated.label } : item;
      });
    });
  }, [translatedPriorities]);

  useEffect(() => {
    const newSelected = items.slice(0, 3).map(i => i.id);
    const prevSelected = prevSelectedRef.current;
    const hasChanged = newSelected.length !== prevSelected.length || 
                       newSelected.some((id, i) => id !== prevSelected[i]);
    
    if (hasChanged) {
      prevSelectedRef.current = newSelected;
      onChangeRef.current(newSelected);
    }
  }, [items]);

  const handleDragStart = (id: string) => {
    setDraggedItem(id);
  };

  const handleDragOver = (e: React.DragEvent, targetId: string) => {
    e.preventDefault();
    if (!draggedItem || draggedItem === targetId) return;

    const draggedIndex = items.findIndex(i => i.id === draggedItem);
    const targetIndex = items.findIndex(i => i.id === targetId);

    const newItems = [...items];
    const [removed] = newItems.splice(draggedIndex, 1);
    newItems.splice(targetIndex, 0, removed);
    setItems(newItems);
  };

  const handleDragEnd = () => {
    setDraggedItem(null);
  };

  const getIcon = (iconName: string) => {
    const IconComponent = iconMap[iconName];
    return IconComponent ? <IconComponent className="w-5 h-5" /> : null;
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-semibold mb-2" data-testid="text-step-title">
        {t.wizard.businessPriorities}
      </h2>
      <p className="text-muted-foreground mb-6">
        {t.wizard.selectAll}
      </p>
      
      <div className="space-y-3">
        {items.map((item, index) => {
          const isTop3 = index < 3;
          return (
            <Card
              key={item.id}
              draggable
              onDragStart={() => handleDragStart(item.id)}
              onDragOver={(e) => handleDragOver(e, item.id)}
              onDragEnd={handleDragEnd}
              className={`p-4 cursor-grab active:cursor-grabbing transition-all ${
                isTop3 ? "ring-2 ring-primary bg-primary/5" : ""
              } ${draggedItem === item.id ? "opacity-50" : ""}`}
              data-testid={`priority-${item.id}`}
            >
              <div className="flex items-center gap-3">
                <GripVertical className="w-5 h-5 text-muted-foreground" />
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  isTop3 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                }`}>
                  {index + 1}
                </div>
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  isTop3 ? "bg-primary/20 text-primary" : "bg-muted text-muted-foreground"
                }`}>
                  {getIcon(item.icon)}
                </div>
                <span className={isTop3 ? "font-medium" : ""}>{item.label}</span>
              </div>
            </Card>
          );
        })}
      </div>
      
      <div className="flex justify-between mt-8">
        <Button variant="outline" onClick={onBack} data-testid="button-back">
          {t.wizard.back}
        </Button>
        <Button onClick={onNext} data-testid="button-next">
          {t.wizard.next} <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
