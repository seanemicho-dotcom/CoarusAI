import { 
  users, leads, toolClicks,
  aiTools, toolCategories, toolSources, pendingTools, toolUpdatesLog, adminUsers,
  type User, type InsertUser,
  type Lead, type InsertLead,
  type ToolClick, type InsertToolClick,
  type AiTool, type InsertAiTool,
  type ToolCategory, type InsertToolCategory,
  type ToolSource, type InsertToolSource,
  type PendingTool, type InsertPendingTool,
  type ToolUpdateLog, type InsertToolUpdateLog,
  type AdminUser, type InsertAdminUser
} from "@shared/schema";
import { db } from "./db";
import { eq, desc, like, or, and, sql, ilike } from "drizzle-orm";

export interface IStorage {
  // Users
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Leads
  createLead(lead: InsertLead): Promise<Lead>;
  getLeadByEmail(email: string): Promise<Lead | undefined>;
  getLeads(): Promise<Lead[]>;
  
  // Tool Clicks
  createToolClick(click: InsertToolClick): Promise<ToolClick>;
  getToolClicks(): Promise<ToolClick[]>;
  getToolClicksByToolId(toolId: string): Promise<ToolClick[]>;
  
  // AI Tools
  getAiTools(options?: { status?: string; categoryId?: string; search?: string; limit?: number; offset?: number }): Promise<AiTool[]>;
  getAiToolById(id: string): Promise<AiTool | undefined>;
  getAiToolBySlug(slug: string): Promise<AiTool | undefined>;
  createAiTool(tool: InsertAiTool): Promise<AiTool>;
  updateAiTool(id: string, tool: Partial<InsertAiTool>): Promise<AiTool | undefined>;
  deleteAiTool(id: string): Promise<boolean>;
  getAiToolsCount(options?: { status?: string; categoryId?: string }): Promise<number>;
  
  // Tool Categories
  getToolCategories(): Promise<ToolCategory[]>;
  getToolCategoryById(id: string): Promise<ToolCategory | undefined>;
  getToolCategoryBySlug(slug: string): Promise<ToolCategory | undefined>;
  createToolCategory(category: InsertToolCategory): Promise<ToolCategory>;
  updateToolCategory(id: string, category: Partial<InsertToolCategory>): Promise<ToolCategory | undefined>;
  
  // Tool Sources
  getToolSources(): Promise<ToolSource[]>;
  getToolSourceById(id: string): Promise<ToolSource | undefined>;
  createToolSource(source: InsertToolSource): Promise<ToolSource>;
  updateToolSource(id: string, source: Partial<InsertToolSource>): Promise<ToolSource | undefined>;
  
  // Pending Tools
  getPendingTools(status?: string): Promise<PendingTool[]>;
  getPendingToolById(id: string): Promise<PendingTool | undefined>;
  createPendingTool(tool: InsertPendingTool): Promise<PendingTool>;
  updatePendingTool(id: string, tool: Partial<InsertPendingTool>): Promise<PendingTool | undefined>;
  approvePendingTool(id: string, reviewedBy: string): Promise<AiTool | undefined>;
  rejectPendingTool(id: string, reviewedBy: string, notes?: string): Promise<PendingTool | undefined>;
  getPendingToolsCount(status?: string): Promise<number>;
  
  // Tool Updates Log
  createToolUpdateLog(log: InsertToolUpdateLog): Promise<ToolUpdateLog>;
  getToolUpdatesLog(toolId?: string): Promise<ToolUpdateLog[]>;
  
  // Admin Users
  getAdminUserByEmail(email: string): Promise<AdminUser | undefined>;
  createAdminUser(user: InsertAdminUser): Promise<AdminUser>;
}

export class DatabaseStorage implements IStorage {
  // Users
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db.insert(users).values([insertUser]).returning();
    return user;
  }
  
  // Leads
  async createLead(insertLead: InsertLead): Promise<Lead> {
    const [lead] = await db.insert(leads).values([insertLead]).returning();
    return lead;
  }
  
  async getLeadByEmail(email: string): Promise<Lead | undefined> {
    const [lead] = await db.select().from(leads).where(eq(leads.email, email));
    return lead || undefined;
  }
  
  async getLeads(): Promise<Lead[]> {
    return db.select().from(leads).orderBy(desc(leads.createdAt));
  }
  
  // Tool Clicks
  async createToolClick(insertClick: InsertToolClick): Promise<ToolClick> {
    const [click] = await db.insert(toolClicks).values([insertClick]).returning();
    return click;
  }
  
  async getToolClicks(): Promise<ToolClick[]> {
    return db.select().from(toolClicks).orderBy(desc(toolClicks.createdAt));
  }
  
  async getToolClicksByToolId(toolId: string): Promise<ToolClick[]> {
    return db.select().from(toolClicks).where(eq(toolClicks.toolId, toolId));
  }
  
  // AI Tools
  async getAiTools(options?: { status?: string; categoryId?: string; search?: string; limit?: number; offset?: number }): Promise<AiTool[]> {
    let query = db.select().from(aiTools);
    const conditions = [];
    
    if (options?.status) {
      conditions.push(eq(aiTools.status, options.status));
    }
    if (options?.categoryId) {
      conditions.push(eq(aiTools.categoryId, options.categoryId));
    }
    if (options?.search) {
      conditions.push(
        or(
          ilike(aiTools.name, `%${options.search}%`),
          ilike(aiTools.shortDescription, `%${options.search}%`)
        )
      );
    }
    
    if (conditions.length > 0) {
      query = query.where(and(...conditions)) as any;
    }
    
    query = query.orderBy(desc(aiTools.isFeatured), desc(aiTools.trustScore), desc(aiTools.updatedAt)) as any;
    
    if (options?.limit) {
      query = query.limit(options.limit) as any;
    }
    if (options?.offset) {
      query = query.offset(options.offset) as any;
    }
    
    return query;
  }
  
  async getAiToolById(id: string): Promise<AiTool | undefined> {
    const [tool] = await db.select().from(aiTools).where(eq(aiTools.id, id));
    return tool || undefined;
  }
  
  async getAiToolBySlug(slug: string): Promise<AiTool | undefined> {
    const [tool] = await db.select().from(aiTools).where(eq(aiTools.slug, slug));
    return tool || undefined;
  }
  
  async createAiTool(tool: InsertAiTool): Promise<AiTool> {
    const [created] = await db.insert(aiTools).values([tool]).returning();
    return created;
  }
  
  async updateAiTool(id: string, tool: Partial<InsertAiTool>): Promise<AiTool | undefined> {
    const [updated] = await db.update(aiTools)
      .set({ ...tool, updatedAt: new Date() })
      .where(eq(aiTools.id, id))
      .returning();
    return updated || undefined;
  }
  
  async deleteAiTool(id: string): Promise<boolean> {
    const result = await db.delete(aiTools).where(eq(aiTools.id, id));
    return true;
  }
  
  async getAiToolsCount(options?: { status?: string; categoryId?: string }): Promise<number> {
    const conditions = [];
    if (options?.status) {
      conditions.push(eq(aiTools.status, options.status));
    }
    if (options?.categoryId) {
      conditions.push(eq(aiTools.categoryId, options.categoryId));
    }
    
    let query = db.select({ count: sql<number>`count(*)` }).from(aiTools);
    if (conditions.length > 0) {
      query = query.where(and(...conditions)) as any;
    }
    
    const [result] = await query;
    return Number(result?.count || 0);
  }
  
  // Tool Categories
  async getToolCategories(): Promise<ToolCategory[]> {
    return db.select().from(toolCategories).orderBy(toolCategories.displayOrder);
  }
  
  async getToolCategoryById(id: string): Promise<ToolCategory | undefined> {
    const [category] = await db.select().from(toolCategories).where(eq(toolCategories.id, id));
    return category || undefined;
  }
  
  async getToolCategoryBySlug(slug: string): Promise<ToolCategory | undefined> {
    const [category] = await db.select().from(toolCategories).where(eq(toolCategories.slug, slug));
    return category || undefined;
  }
  
  async createToolCategory(category: InsertToolCategory): Promise<ToolCategory> {
    const [created] = await db.insert(toolCategories).values([category]).returning();
    return created;
  }
  
  async updateToolCategory(id: string, category: Partial<InsertToolCategory>): Promise<ToolCategory | undefined> {
    const [updated] = await db.update(toolCategories)
      .set(category)
      .where(eq(toolCategories.id, id))
      .returning();
    return updated || undefined;
  }
  
  // Tool Sources
  async getToolSources(): Promise<ToolSource[]> {
    return db.select().from(toolSources).orderBy(toolSources.name);
  }
  
  async getToolSourceById(id: string): Promise<ToolSource | undefined> {
    const [source] = await db.select().from(toolSources).where(eq(toolSources.id, id));
    return source || undefined;
  }
  
  async createToolSource(source: InsertToolSource): Promise<ToolSource> {
    const [created] = await db.insert(toolSources).values([source]).returning();
    return created;
  }
  
  async updateToolSource(id: string, source: Partial<InsertToolSource>): Promise<ToolSource | undefined> {
    const [updated] = await db.update(toolSources)
      .set({ ...source, updatedAt: new Date() })
      .where(eq(toolSources.id, id))
      .returning();
    return updated || undefined;
  }
  
  // Pending Tools
  async getPendingTools(status?: string): Promise<PendingTool[]> {
    if (status) {
      return db.select().from(pendingTools)
        .where(eq(pendingTools.reviewStatus, status))
        .orderBy(desc(pendingTools.createdAt));
    }
    return db.select().from(pendingTools).orderBy(desc(pendingTools.createdAt));
  }
  
  async getPendingToolById(id: string): Promise<PendingTool | undefined> {
    const [tool] = await db.select().from(pendingTools).where(eq(pendingTools.id, id));
    return tool || undefined;
  }
  
  async createPendingTool(tool: InsertPendingTool): Promise<PendingTool> {
    const [created] = await db.insert(pendingTools).values([tool]).returning();
    return created;
  }
  
  async updatePendingTool(id: string, tool: Partial<InsertPendingTool>): Promise<PendingTool | undefined> {
    const [updated] = await db.update(pendingTools)
      .set(tool)
      .where(eq(pendingTools.id, id))
      .returning();
    return updated || undefined;
  }
  
  async approvePendingTool(id: string, reviewedBy: string): Promise<AiTool | undefined> {
    const pending = await this.getPendingToolById(id);
    if (!pending) return undefined;
    
    // Get category ID from slug
    let categoryId: string | undefined;
    if (pending.categorySlug) {
      const category = await this.getToolCategoryBySlug(pending.categorySlug);
      categoryId = category?.id;
    }
    
    // Create the AI tool
    const slug = pending.slug || pending.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const aiTool = await this.createAiTool({
      slug,
      name: pending.name,
      shortDescription: pending.shortDescription,
      longDescription: pending.longDescription,
      websiteUrl: pending.websiteUrl,
      logoUrl: pending.logoUrl,
      pricing: pending.pricing,
      pricingModel: pending.pricingModel,
      hasFreeTier: pending.hasFreeTier,
      categoryId,
      keywords: pending.keywords,
      features: pending.features,
      targetAudience: pending.targetAudience as any,
      sourceId: pending.sourceId,
      status: 'active',
      isVerified: true,
    });
    
    // Update pending tool status
    await this.updatePendingTool(id, {
      reviewStatus: 'approved',
      reviewedBy,
      reviewedAt: new Date(),
    });
    
    // Log the approval
    await this.createToolUpdateLog({
      toolId: aiTool.id,
      changeType: 'approved',
      actorId: reviewedBy,
      actorType: 'admin',
      notes: `Approved from pending tool ${id}`,
    });
    
    return aiTool;
  }
  
  async rejectPendingTool(id: string, reviewedBy: string, notes?: string): Promise<PendingTool | undefined> {
    return this.updatePendingTool(id, {
      reviewStatus: 'rejected',
      reviewedBy,
      reviewedAt: new Date(),
      reviewNotes: notes,
    });
  }
  
  async getPendingToolsCount(status?: string): Promise<number> {
    let query = db.select({ count: sql<number>`count(*)` }).from(pendingTools);
    if (status) {
      query = query.where(eq(pendingTools.reviewStatus, status)) as any;
    }
    const [result] = await query;
    return Number(result?.count || 0);
  }
  
  // Tool Updates Log
  async createToolUpdateLog(log: InsertToolUpdateLog): Promise<ToolUpdateLog> {
    const [created] = await db.insert(toolUpdatesLog).values([log]).returning();
    return created;
  }
  
  async getToolUpdatesLog(toolId?: string): Promise<ToolUpdateLog[]> {
    if (toolId) {
      return db.select().from(toolUpdatesLog)
        .where(eq(toolUpdatesLog.toolId, toolId))
        .orderBy(desc(toolUpdatesLog.createdAt));
    }
    return db.select().from(toolUpdatesLog).orderBy(desc(toolUpdatesLog.createdAt));
  }
  
  // Admin Users
  async getAdminUserByEmail(email: string): Promise<AdminUser | undefined> {
    const [user] = await db.select().from(adminUsers).where(eq(adminUsers.email, email));
    return user || undefined;
  }
  
  async createAdminUser(user: InsertAdminUser): Promise<AdminUser> {
    const [created] = await db.insert(adminUsers).values([user]).returning();
    return created;
  }
}

export const storage = new DatabaseStorage();
