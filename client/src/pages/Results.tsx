import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ResultsView from "@/components/ResultsView";
import { matchTools, type AITool } from "@/lib/tools";
import { Loader2 } from "lucide-react";

export default function Results() {
  const [location] = useLocation();
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState<{ category: string; tools: AITool[] } | null>(null);
  const [userNeed, setUserNeed] = useState("");
  
  useEffect(() => {
    // Parse query params from URL
    const searchParams = new URLSearchParams(window.location.search);
    const need = searchParams.get("need") || "";
    setUserNeed(need);
    
    // Simulate loading for better UX
    const timer = setTimeout(() => {
      if (need) {
        const matched = matchTools(need);
        setResults(matched);
      }
      setLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [location]);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12 px-6">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="w-10 h-10 animate-spin text-primary mb-4" />
            <p className="text-muted-foreground">Finding the best tools for you...</p>
          </div>
        ) : results ? (
          <ResultsView 
            category={results.category} 
            tools={results.tools}
            userNeed={userNeed}
          />
        ) : (
          <div className="text-center py-20">
            <p className="text-muted-foreground">No results found. Please try a different search.</p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
