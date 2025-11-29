import { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { queryClient, apiRequest } from "@/lib/queryClient";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { 
  Link2, 
  ExternalLink, 
  Check, 
  X, 
  Search, 
  DollarSign,
  MousePointerClick,
  TrendingUp,
  ArrowLeft
} from "lucide-react";
import { Link } from "wouter";

interface Tool {
  id: string;
  name: string;
  websiteUrl: string;
  affiliateUrl: string | null;
  categoryId: string;
  shortDescription: string | null;
}

interface ToolClick {
  id: string;
  toolId: string;
  toolName: string;
  createdAt: string;
}

const suggestedAffiliates = [
  { name: "Jasper AI", url: "https://www.jasper.ai/partners", commission: "25% recurring" },
  { name: "Copy.ai", url: "https://www.copy.ai/affiliates", commission: "45% first payment" },
  { name: "Writesonic", url: "https://writesonic.com/affiliates", commission: "30% recurring" },
  { name: "Surfer SEO", url: "https://surferseo.com/affiliate-program", commission: "25% recurring" },
  { name: "Grammarly", url: "https://www.grammarly.com/affiliates", commission: "$20 per sale" },
  { name: "Notion", url: "https://www.notion.so/affiliates", commission: "50% first year" },
  { name: "Canva", url: "https://www.canva.com/affiliates", commission: "Up to $36/signup" },
  { name: "Hostinger", url: "https://www.hostinger.com/affiliates", commission: "60% per sale" },
  { name: "Semrush", url: "https://www.semrush.com/partner", commission: "$200 per sale" },
  { name: "Loom", url: "https://www.loom.com/affiliates", commission: "15% recurring" },
];

export default function AdminPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTool, setSelectedTool] = useState<Tool | null>(null);
  const [affiliateLink, setAffiliateLink] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();

  const { data: toolsData, isLoading: toolsLoading } = useQuery<{ tools: Tool[]; total: number }>({
    queryKey: ["/api/ai-tools"],
    queryFn: async () => {
      const res = await fetch("/api/ai-tools?limit=500");
      if (!res.ok) throw new Error("Failed to fetch tools");
      return res.json();
    },
  });

  const { data: clicksData } = useQuery<ToolClick[]>({
    queryKey: ["/api/tool-clicks"],
  });

  const updateTool = useMutation({
    mutationFn: async ({ id, affiliateUrl }: { id: string; affiliateUrl: string }) => {
      return apiRequest("PATCH", `/api/ai-tools/${id}`, { affiliateUrl });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/ai-tools"] });
      toast({
        title: "Affiliate link saved!",
        description: "The affiliate link has been added to this tool.",
      });
      setIsDialogOpen(false);
      setSelectedTool(null);
      setAffiliateLink("");
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to save affiliate link. Please try again.",
        variant: "destructive",
      });
    },
  });

  const tools = toolsData?.tools || [];
  
  const filteredTools = tools.filter(tool => 
    tool.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toolsWithAffiliate = tools.filter(t => t.affiliateUrl);
  const toolsWithoutAffiliate = tools.filter(t => !t.affiliateUrl);

  const clickCounts = (clicksData || []).reduce((acc, click) => {
    acc[click.toolName] = (acc[click.toolName] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const topClickedTools = Object.entries(clickCounts)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 10);

  const handleEditClick = (tool: Tool) => {
    setSelectedTool(tool);
    setAffiliateLink(tool.affiliateUrl || "");
    setIsDialogOpen(true);
  };

  const handleSave = () => {
    if (selectedTool) {
      updateTool.mutate({ id: selectedTool.id, affiliateUrl: affiliateLink });
    }
  };

  const handleRemoveAffiliate = () => {
    if (selectedTool) {
      updateTool.mutate({ id: selectedTool.id, affiliateUrl: "" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Link href="/">
            <Button variant="ghost" size="icon" data-testid="button-back-home">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold" data-testid="text-admin-title">Affiliate Manager</h1>
            <p className="text-muted-foreground">Manage your affiliate links and track earnings</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <Card className="p-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                <Check className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-2xl font-bold" data-testid="text-affiliate-count">{toolsWithAffiliate.length}</p>
                <p className="text-sm text-muted-foreground">Tools with affiliate links</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center">
                <Link2 className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <p className="text-2xl font-bold" data-testid="text-no-affiliate-count">{toolsWithoutAffiliate.length}</p>
                <p className="text-sm text-muted-foreground">Tools need affiliate links</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                <MousePointerClick className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl font-bold" data-testid="text-total-clicks">{clicksData?.length || 0}</p>
                <p className="text-sm text-muted-foreground">Total referral clicks</p>
              </div>
            </div>
          </Card>
        </div>

        <Tabs defaultValue="tools" className="space-y-6">
          <TabsList>
            <TabsTrigger value="tools" data-testid="tab-tools">All Tools</TabsTrigger>
            <TabsTrigger value="clicks" data-testid="tab-clicks">Top Clicked</TabsTrigger>
            <TabsTrigger value="suggested" data-testid="tab-suggested">Suggested Programs</TabsTrigger>
          </TabsList>

          <TabsContent value="tools" className="space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search tools by name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
                data-testid="input-search-tools"
              />
            </div>

            {toolsLoading ? (
              <div className="text-center py-8 text-muted-foreground">Loading tools...</div>
            ) : (
              <div className="space-y-2">
                {filteredTools.map((tool) => (
                  <Card 
                    key={tool.id} 
                    className="p-4 hover-elevate cursor-pointer"
                    onClick={() => handleEditClick(tool)}
                    data-testid={`card-tool-${tool.id}`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <h3 className="font-medium truncate">{tool.name}</h3>
                          {tool.affiliateUrl ? (
                            <Badge variant="default" className="bg-green-600 shrink-0">
                              <DollarSign className="w-3 h-3 mr-1" />
                              Affiliate Active
                            </Badge>
                          ) : (
                            <Badge variant="secondary" className="shrink-0">
                              <X className="w-3 h-3 mr-1" />
                              No Affiliate
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground truncate mt-1">
                          {tool.shortDescription || tool.websiteUrl}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        {clickCounts[tool.name] && (
                          <span className="text-sm text-muted-foreground">
                            {clickCounts[tool.name]} clicks
                          </span>
                        )}
                        <Button variant="outline" size="sm" data-testid={`button-edit-${tool.id}`}>
                          {tool.affiliateUrl ? "Edit Link" : "Add Link"}
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="clicks" className="space-y-4">
            <Card className="p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Most Clicked Tools
              </h3>
              {topClickedTools.length === 0 ? (
                <p className="text-muted-foreground">No clicks recorded yet. Clicks will appear here once users start visiting tools.</p>
              ) : (
                <div className="space-y-3">
                  {topClickedTools.map(([toolName, count], index) => (
                    <div key={toolName} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="w-6 h-6 bg-muted rounded-full flex items-center justify-center text-sm font-medium">
                          {index + 1}
                        </span>
                        <span className="font-medium">{toolName}</span>
                      </div>
                      <Badge variant="secondary">{count} clicks</Badge>
                    </div>
                  ))}
                </div>
              )}
            </Card>
          </TabsContent>

          <TabsContent value="suggested" className="space-y-4">
            <Card className="p-6">
              <h3 className="font-semibold mb-2">How to Add Affiliate Links</h3>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground mb-6">
                <li>Click on a program below to visit their affiliate signup page</li>
                <li>Sign up and wait for approval (usually 1-3 days)</li>
                <li>Copy your unique affiliate link from their dashboard</li>
                <li>Come back here and paste it into the tool's affiliate link field</li>
              </ol>
            </Card>

            <div className="grid md:grid-cols-2 gap-4">
              {suggestedAffiliates.map((affiliate) => (
                <Card key={affiliate.name} className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">{affiliate.name}</h4>
                      <p className="text-sm text-green-600 font-medium">{affiliate.commission}</p>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => window.open(affiliate.url, "_blank")}
                      data-testid={`button-signup-${affiliate.name.toLowerCase().replace(/\s/g, '-')}`}
                    >
                      Sign Up <ExternalLink className="w-3 h-3 ml-1" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                {selectedTool?.affiliateUrl ? "Edit" : "Add"} Affiliate Link
              </DialogTitle>
              <DialogDescription>
                Paste your affiliate link for <strong>{selectedTool?.name}</strong> below.
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-4 py-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Regular Website URL</label>
                <p className="text-sm text-muted-foreground bg-muted p-2 rounded">
                  {selectedTool?.websiteUrl}
                </p>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Your Affiliate Link</label>
                <Input
                  placeholder="https://example.com/?ref=your-id"
                  value={affiliateLink}
                  onChange={(e) => setAffiliateLink(e.target.value)}
                  data-testid="input-affiliate-url"
                />
                <p className="text-xs text-muted-foreground mt-1">
                  Paste the unique link you received from the affiliate program
                </p>
              </div>
            </div>

            <div className="flex justify-between">
              {selectedTool?.affiliateUrl && (
                <Button 
                  variant="destructive" 
                  onClick={handleRemoveAffiliate}
                  disabled={updateTool.isPending}
                  data-testid="button-remove-affiliate"
                >
                  Remove Link
                </Button>
              )}
              <div className="flex gap-2 ml-auto">
                <Button 
                  variant="outline" 
                  onClick={() => setIsDialogOpen(false)}
                  data-testid="button-cancel"
                >
                  Cancel
                </Button>
                <Button 
                  onClick={handleSave}
                  disabled={updateTool.isPending || !affiliateLink}
                  data-testid="button-save-affiliate"
                >
                  {updateTool.isPending ? "Saving..." : "Save Link"}
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
