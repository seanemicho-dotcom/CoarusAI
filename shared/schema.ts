import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, integer, jsonb } from "drizzle-orm/pg-core";
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
