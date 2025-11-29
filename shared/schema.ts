import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, integer, jsonb, boolean, numeric, uuid } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Users table (existing)
export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Leads table - captures user submissions and contact info
export const leads = pgTable("leads", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  email: text("email").notNull(),
  name: text("name"),
  userPath: text("user_path").notNull(), // 'smb' or 'individual'
  businessTypes: jsonb("business_types").$type<string[]>(),
  businessProblems: jsonb("business_problems").$type<string[]>(),
  businessPriorities: jsonb("business_priorities").$type<string[]>(),
  workflowArea: text("workflow_area"),
  workflowDescription: text("workflow_description"),
  personalIntents: jsonb("personal_intents").$type<string[]>(),
  personalGoals: jsonb("personal_goals").$type<string[]>(),
  recommendedTools: jsonb("recommended_tools").$type<string[]>(),
  language: text("language").default("en"),
  source: text("source"), // 'email_results', 'book_call', 'request_quote', 'personal_setup'
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertLeadSchema = createInsertSchema(leads).omit({
  id: true,
  createdAt: true,
});

export type InsertLead = z.infer<typeof insertLeadSchema>;
export type Lead = typeof leads.$inferSelect;

// Tool clicks table - tracks referral/affiliate clicks
export const toolClicks = pgTable("tool_clicks", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  toolId: text("tool_id").notNull(),
  toolName: text("tool_name").notNull(),
  toolUrl: text("tool_url").notNull(),
  leadId: varchar("lead_id"),
  sessionId: text("session_id"),
  userPath: text("user_path"),
  language: text("language").default("en"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertToolClickSchema = createInsertSchema(toolClicks).omit({
  id: true,
  createdAt: true,
});

export type InsertToolClick = z.infer<typeof insertToolClickSchema>;
export type ToolClick = typeof toolClicks.$inferSelect;

// ============================================
// AI TOOLS MANAGEMENT SYSTEM
// ============================================

// Tool Sources - Track where data comes from (manual, APIs, etc.)
export const toolSources = pgTable("tool_sources", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(), // e.g., "Manual Entry", "There's An AI For That", "ProductHunt"
  type: varchar("type", { length: 40 }).notNull(), // 'manual', 'api', 'rss', 'scraper'
  endpoint: text("endpoint"), // API endpoint URL if applicable
  apiKey: text("api_key"), // Encrypted API key reference
  trustBaseline: numeric("trust_baseline", { precision: 3, scale: 2 }).default("0.80"),
  isActive: boolean("is_active").default(true),
  lastSyncAt: timestamp("last_sync_at"),
  syncFrequency: varchar("sync_frequency", { length: 20 }).default("daily"), // 'hourly', 'daily', 'weekly'
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const insertToolSourceSchema = createInsertSchema(toolSources).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export type InsertToolSource = z.infer<typeof insertToolSourceSchema>;
export type ToolSource = typeof toolSources.$inferSelect;

// Tool Categories - Categories for organizing AI tools
export const toolCategories = pgTable("tool_categories", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  slug: varchar("slug", { length: 100 }).notNull().unique(), // e.g., "customer-support"
  name: text("name").notNull(), // e.g., "Customer Support"
  description: text("description"),
  icon: varchar("icon", { length: 50 }), // Icon name from lucide-react
  displayOrder: integer("display_order").default(0),
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertToolCategorySchema = createInsertSchema(toolCategories).omit({
  id: true,
  createdAt: true,
});

export type InsertToolCategory = z.infer<typeof insertToolCategorySchema>;
export type ToolCategory = typeof toolCategories.$inferSelect;

// AI Tools - Main table storing all AI tools (replaces static file)
export const aiTools = pgTable("ai_tools", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  slug: varchar("slug", { length: 180 }).notNull().unique(), // URL-friendly unique identifier
  name: text("name").notNull(),
  shortDescription: varchar("short_description", { length: 300 }),
  longDescription: text("long_description"),
  websiteUrl: text("website_url").notNull(),
  logoUrl: text("logo_url"),
  pricing: varchar("pricing", { length: 120 }),
  pricingModel: varchar("pricing_model", { length: 40 }), // 'free', 'freemium', 'paid', 'enterprise'
  hasFreeTier: boolean("has_free_tier").default(false),
  
  // Categorization
  categoryId: varchar("category_id").references(() => toolCategories.id),
  keywords: text("keywords").array().default(sql`ARRAY[]::text[]`),
  features: text("features").array().default(sql`ARRAY[]::text[]`),
  
  // Targeting
  targetAudience: varchar("target_audience", { length: 20 }).default("both"), // 'smb', 'individual', 'both'
  languages: text("languages").array().default(sql`ARRAY[]::text[]`),
  
  // Trust & Quality
  sourceId: varchar("source_id").references(() => toolSources.id),
  trustScore: numeric("trust_score", { precision: 3, scale: 2 }).default("0.70"),
  popularity: integer("popularity").default(0), // Click count or engagement metric
  
  // Status Management
  status: varchar("status", { length: 20 }).default("active"), // 'active', 'pending', 'deprecated', 'archived'
  isFeatured: boolean("is_featured").default(false),
  isVerified: boolean("is_verified").default(false),
  
  // Affiliate/Revenue
  affiliateUrl: text("affiliate_url"),
  affiliateId: varchar("affiliate_id", { length: 100 }),
  
  // Timestamps
  launchedAt: timestamp("launched_at"), // When the tool was originally launched
  lastVerifiedAt: timestamp("last_verified_at"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const insertAiToolSchema = createInsertSchema(aiTools).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export type InsertAiTool = z.infer<typeof insertAiToolSchema>;
export type AiTool = typeof aiTools.$inferSelect;

// Pending Tools - Staging area for tools awaiting review
export const pendingTools = pgTable("pending_tools", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  
  // Tool data (same structure as ai_tools)
  name: text("name").notNull(),
  slug: varchar("slug", { length: 180 }),
  shortDescription: varchar("short_description", { length: 300 }),
  longDescription: text("long_description"),
  websiteUrl: text("website_url").notNull(),
  logoUrl: text("logo_url"),
  pricing: varchar("pricing", { length: 120 }),
  pricingModel: varchar("pricing_model", { length: 40 }),
  hasFreeTier: boolean("has_free_tier").default(false),
  categorySlug: varchar("category_slug", { length: 100 }),
  keywords: text("keywords").array().default(sql`ARRAY[]::text[]`),
  features: text("features").array().default(sql`ARRAY[]::text[]`),
  targetAudience: varchar("target_audience", { length: 20 }).default("both"),
  
  // Raw data from source
  rawPayload: jsonb("raw_payload"),
  
  // Import tracking
  sourceId: varchar("source_id").references(() => toolSources.id),
  externalId: varchar("external_id", { length: 200 }), // ID from external source for dedup
  
  // Review workflow
  reviewStatus: varchar("review_status", { length: 20 }).default("pending"), // 'pending', 'approved', 'rejected', 'duplicate'
  reviewedBy: varchar("reviewed_by", { length: 100 }),
  reviewedAt: timestamp("reviewed_at"),
  reviewNotes: text("review_notes"),
  
  // Duplicate detection
  duplicateOfId: varchar("duplicate_of_id"), // If marked as duplicate, references existing tool
  similarityScore: numeric("similarity_score", { precision: 3, scale: 2 }),
  
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertPendingToolSchema = createInsertSchema(pendingTools).omit({
  id: true,
  createdAt: true,
});

export type InsertPendingTool = z.infer<typeof insertPendingToolSchema>;
export type PendingTool = typeof pendingTools.$inferSelect;

// Tool Updates Log - Audit trail for all changes
export const toolUpdatesLog = pgTable("tool_updates_log", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  toolId: varchar("tool_id").references(() => aiTools.id),
  changeType: varchar("change_type", { length: 40 }).notNull(), // 'created', 'updated', 'approved', 'deprecated', 'featured', 'archived'
  fieldChanged: varchar("field_changed", { length: 100 }),
  previousValue: text("previous_value"),
  newValue: text("new_value"),
  diff: jsonb("diff"), // Full diff for complex changes
  actorId: varchar("actor_id", { length: 100 }), // User who made the change
  actorType: varchar("actor_type", { length: 20 }).default("admin"), // 'admin', 'system', 'api'
  notes: text("notes"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertToolUpdateLogSchema = createInsertSchema(toolUpdatesLog).omit({
  id: true,
  createdAt: true,
});

export type InsertToolUpdateLog = z.infer<typeof insertToolUpdateLogSchema>;
export type ToolUpdateLog = typeof toolUpdatesLog.$inferSelect;

// Admin Users - For admin dashboard access
export const adminUsers = pgTable("admin_users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  email: text("email").notNull().unique(),
  passwordHash: text("password_hash").notNull(),
  name: text("name"),
  role: varchar("role", { length: 20 }).default("editor"), // 'admin', 'editor', 'viewer'
  isActive: boolean("is_active").default(true),
  lastLoginAt: timestamp("last_login_at"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertAdminUserSchema = createInsertSchema(adminUsers).omit({
  id: true,
  createdAt: true,
});

export type InsertAdminUser = z.infer<typeof insertAdminUserSchema>;
export type AdminUser = typeof adminUsers.$inferSelect;
