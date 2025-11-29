import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { 
  insertLeadSchema, 
  insertToolClickSchema, 
  insertAiToolSchema, 
  insertToolCategorySchema,
  insertToolSourceSchema,
  insertPendingToolSchema
} from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Create a new lead (email capture, book call, request quote)
  app.post("/api/leads", async (req, res) => {
    try {
      const leadData = insertLeadSchema.parse(req.body);
      const lead = await storage.createLead(leadData as any);
      res.json(lead);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Invalid lead data", details: error.errors });
      } else {
        console.error("Error creating lead:", error);
        res.status(500).json({ error: "Failed to create lead" });
      }
    }
  });

  // Get all leads (admin endpoint)
  app.get("/api/leads", async (req, res) => {
    try {
      const leads = await storage.getLeads();
      res.json(leads);
    } catch (error) {
      console.error("Error fetching leads:", error);
      res.status(500).json({ error: "Failed to fetch leads" });
    }
  });

  // Track tool click (referral tracking)
  app.post("/api/tool-clicks", async (req, res) => {
    try {
      const clickData = insertToolClickSchema.parse(req.body);
      const click = await storage.createToolClick(clickData as any);
      res.json(click);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Invalid click data", details: error.errors });
      } else {
        console.error("Error tracking click:", error);
        res.status(500).json({ error: "Failed to track click" });
      }
    }
  });

  // Get all tool clicks (admin endpoint)
  app.get("/api/tool-clicks", async (req, res) => {
    try {
      const clicks = await storage.getToolClicks();
      res.json(clicks);
    } catch (error) {
      console.error("Error fetching clicks:", error);
      res.status(500).json({ error: "Failed to fetch clicks" });
    }
  });

  // Get clicks by tool ID
  app.get("/api/tool-clicks/:toolId", async (req, res) => {
    try {
      const clicks = await storage.getToolClicksByToolId(req.params.toolId);
      res.json(clicks);
    } catch (error) {
      console.error("Error fetching clicks:", error);
      res.status(500).json({ error: "Failed to fetch clicks" });
    }
  });

  // ============================================
  // AI TOOLS MANAGEMENT API
  // ============================================

  // Get all AI tools (public endpoint with filtering)
  app.get("/api/ai-tools", async (req, res) => {
    try {
      const { status, categoryId, search, limit, offset } = req.query;
      const tools = await storage.getAiTools({
        status: status as string | undefined,
        categoryId: categoryId as string | undefined,
        search: search as string | undefined,
        limit: limit ? parseInt(limit as string) : undefined,
        offset: offset ? parseInt(offset as string) : undefined,
      });
      const count = await storage.getAiToolsCount({
        status: status as string | undefined,
        categoryId: categoryId as string | undefined,
      });
      res.json({ tools, total: count });
    } catch (error) {
      console.error("Error fetching AI tools:", error);
      res.status(500).json({ error: "Failed to fetch AI tools" });
    }
  });

  // Get a single AI tool by ID or slug
  app.get("/api/ai-tools/:idOrSlug", async (req, res) => {
    try {
      const { idOrSlug } = req.params;
      let tool = await storage.getAiToolById(idOrSlug);
      if (!tool) {
        tool = await storage.getAiToolBySlug(idOrSlug);
      }
      if (!tool) {
        return res.status(404).json({ error: "Tool not found" });
      }
      res.json(tool);
    } catch (error) {
      console.error("Error fetching AI tool:", error);
      res.status(500).json({ error: "Failed to fetch AI tool" });
    }
  });

  // Create a new AI tool (admin endpoint)
  app.post("/api/ai-tools", async (req, res) => {
    try {
      const toolData = insertAiToolSchema.parse(req.body);
      const tool = await storage.createAiTool(toolData);
      
      // Log the creation
      await storage.createToolUpdateLog({
        toolId: tool.id,
        changeType: 'created',
        actorType: 'admin',
        notes: 'Tool created via API',
      });
      
      res.status(201).json(tool);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Invalid tool data", details: error.errors });
      } else {
        console.error("Error creating AI tool:", error);
        res.status(500).json({ error: "Failed to create AI tool" });
      }
    }
  });

  // Update an AI tool (admin endpoint)
  app.patch("/api/ai-tools/:id", async (req, res) => {
    try {
      const existing = await storage.getAiToolById(req.params.id);
      if (!existing) {
        return res.status(404).json({ error: "Tool not found" });
      }
      
      const tool = await storage.updateAiTool(req.params.id, req.body);
      
      // Log the update
      await storage.createToolUpdateLog({
        toolId: req.params.id,
        changeType: 'updated',
        actorType: 'admin',
        diff: { previous: existing, updated: tool },
        notes: 'Tool updated via API',
      });
      
      res.json(tool);
    } catch (error) {
      console.error("Error updating AI tool:", error);
      res.status(500).json({ error: "Failed to update AI tool" });
    }
  });

  // Delete an AI tool (admin endpoint)
  app.delete("/api/ai-tools/:id", async (req, res) => {
    try {
      const existing = await storage.getAiToolById(req.params.id);
      if (!existing) {
        return res.status(404).json({ error: "Tool not found" });
      }
      
      await storage.deleteAiTool(req.params.id);
      
      // Log the deletion
      await storage.createToolUpdateLog({
        toolId: req.params.id,
        changeType: 'archived',
        actorType: 'admin',
        notes: 'Tool deleted via API',
      });
      
      res.json({ success: true });
    } catch (error) {
      console.error("Error deleting AI tool:", error);
      res.status(500).json({ error: "Failed to delete AI tool" });
    }
  });

  // ============================================
  // TOOL CATEGORIES API
  // ============================================

  // Get all categories
  app.get("/api/tool-categories", async (req, res) => {
    try {
      const categories = await storage.getToolCategories();
      res.json(categories);
    } catch (error) {
      console.error("Error fetching categories:", error);
      res.status(500).json({ error: "Failed to fetch categories" });
    }
  });

  // Create a category (admin endpoint)
  app.post("/api/tool-categories", async (req, res) => {
    try {
      const categoryData = insertToolCategorySchema.parse(req.body);
      const category = await storage.createToolCategory(categoryData);
      res.status(201).json(category);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Invalid category data", details: error.errors });
      } else {
        console.error("Error creating category:", error);
        res.status(500).json({ error: "Failed to create category" });
      }
    }
  });

  // Update a category (admin endpoint)
  app.patch("/api/tool-categories/:id", async (req, res) => {
    try {
      const category = await storage.updateToolCategory(req.params.id, req.body);
      if (!category) {
        return res.status(404).json({ error: "Category not found" });
      }
      res.json(category);
    } catch (error) {
      console.error("Error updating category:", error);
      res.status(500).json({ error: "Failed to update category" });
    }
  });

  // ============================================
  // TOOL SOURCES API
  // ============================================

  // Get all sources
  app.get("/api/tool-sources", async (req, res) => {
    try {
      const sources = await storage.getToolSources();
      res.json(sources);
    } catch (error) {
      console.error("Error fetching sources:", error);
      res.status(500).json({ error: "Failed to fetch sources" });
    }
  });

  // Create a source (admin endpoint)
  app.post("/api/tool-sources", async (req, res) => {
    try {
      const sourceData = insertToolSourceSchema.parse(req.body);
      const source = await storage.createToolSource(sourceData);
      res.status(201).json(source);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Invalid source data", details: error.errors });
      } else {
        console.error("Error creating source:", error);
        res.status(500).json({ error: "Failed to create source" });
      }
    }
  });

  // ============================================
  // PENDING TOOLS API (Admin Review Workflow)
  // ============================================

  // Get pending tools
  app.get("/api/pending-tools", async (req, res) => {
    try {
      const { status } = req.query;
      const tools = await storage.getPendingTools(status as string | undefined);
      const count = await storage.getPendingToolsCount(status as string | undefined);
      res.json({ tools, total: count });
    } catch (error) {
      console.error("Error fetching pending tools:", error);
      res.status(500).json({ error: "Failed to fetch pending tools" });
    }
  });

  // Get a single pending tool
  app.get("/api/pending-tools/:id", async (req, res) => {
    try {
      const tool = await storage.getPendingToolById(req.params.id);
      if (!tool) {
        return res.status(404).json({ error: "Pending tool not found" });
      }
      res.json(tool);
    } catch (error) {
      console.error("Error fetching pending tool:", error);
      res.status(500).json({ error: "Failed to fetch pending tool" });
    }
  });

  // Create a pending tool (for external feeds or manual submission)
  app.post("/api/pending-tools", async (req, res) => {
    try {
      const toolData = insertPendingToolSchema.parse(req.body);
      const tool = await storage.createPendingTool(toolData);
      res.status(201).json(tool);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Invalid tool data", details: error.errors });
      } else {
        console.error("Error creating pending tool:", error);
        res.status(500).json({ error: "Failed to create pending tool" });
      }
    }
  });

  // Approve a pending tool
  app.post("/api/pending-tools/:id/approve", async (req, res) => {
    try {
      const { reviewedBy } = req.body;
      const tool = await storage.approvePendingTool(req.params.id, reviewedBy || 'admin');
      if (!tool) {
        return res.status(404).json({ error: "Pending tool not found" });
      }
      res.json(tool);
    } catch (error) {
      console.error("Error approving pending tool:", error);
      res.status(500).json({ error: "Failed to approve pending tool" });
    }
  });

  // Reject a pending tool
  app.post("/api/pending-tools/:id/reject", async (req, res) => {
    try {
      const { reviewedBy, notes } = req.body;
      const tool = await storage.rejectPendingTool(req.params.id, reviewedBy || 'admin', notes);
      if (!tool) {
        return res.status(404).json({ error: "Pending tool not found" });
      }
      res.json(tool);
    } catch (error) {
      console.error("Error rejecting pending tool:", error);
      res.status(500).json({ error: "Failed to reject pending tool" });
    }
  });

  // ============================================
  // TOOL UPDATES LOG API
  // ============================================

  // Get updates log
  app.get("/api/tool-updates-log", async (req, res) => {
    try {
      const { toolId } = req.query;
      const logs = await storage.getToolUpdatesLog(toolId as string | undefined);
      res.json(logs);
    } catch (error) {
      console.error("Error fetching updates log:", error);
      res.status(500).json({ error: "Failed to fetch updates log" });
    }
  });

  // ============================================
  // ADMIN DASHBOARD STATS API
  // ============================================

  // Get dashboard stats
  app.get("/api/admin/stats", async (req, res) => {
    try {
      const [
        totalTools,
        activeTools,
        pendingCount,
        sources,
        categories,
        recentLogs
      ] = await Promise.all([
        storage.getAiToolsCount(),
        storage.getAiToolsCount({ status: 'active' }),
        storage.getPendingToolsCount('pending'),
        storage.getToolSources(),
        storage.getToolCategories(),
        storage.getToolUpdatesLog()
      ]);
      
      res.json({
        totalTools,
        activeTools,
        pendingReview: pendingCount,
        sourcesCount: sources.length,
        categoriesCount: categories.length,
        recentActivity: recentLogs.slice(0, 10),
      });
    } catch (error) {
      console.error("Error fetching admin stats:", error);
      res.status(500).json({ error: "Failed to fetch admin stats" });
    }
  });

  return httpServer;
}
