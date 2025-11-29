import { 
  users, leads, toolClicks,
  type User, type InsertUser,
  type Lead, type InsertLead,
  type ToolClick, type InsertToolClick
} from "@shared/schema";
import { db } from "./db";
import { eq, desc } from "drizzle-orm";

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
}

export const storage = new DatabaseStorage();
