import ToolCard from '../ToolCard';
import type { AITool } from "@/lib/tools";

const mockTool: AITool = {
  id: "jasper",
  name: "Jasper",
  description: "AI copywriting assistant that helps create marketing content, blog posts, social media copy, and ads in seconds.",
  category: "marketing",
  features: ["AI copywriting", "50+ templates", "Brand voice", "SEO optimization"],
  url: "https://www.jasper.ai",
  keywords: ["marketing", "content"]
};

export default function ToolCardExample() {
  return (
    <div className="max-w-md p-4">
      <ToolCard tool={mockTool} />
    </div>
  );
}
