import ResultsView from '../ResultsView';
import { aiTools } from "@/lib/tools";

export default function ResultsViewExample() {
  const mockTools = aiTools.filter(t => t.category === "marketing").slice(0, 3);
  
  return (
    <div className="p-8">
      <ResultsView 
        category="marketing" 
        tools={mockTools}
        userNeed="I need help with social media marketing and email campaigns"
      />
    </div>
  );
}
