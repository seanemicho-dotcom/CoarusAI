import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertLeadSchema, insertToolClickSchema } from "@shared/schema";
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

  return httpServer;
}
