import { db } from "../server/db";
import { toolCategories, toolSources, aiTools } from "../shared/schema";
import { aiTools as staticTools } from "../client/src/lib/tools";
import { eq } from "drizzle-orm";

const categories = [
  { slug: "customer-support", name: "Customer Support", icon: "Headphones", displayOrder: 1 },
  { slug: "sales-crm", name: "Sales & CRM", icon: "TrendingUp", displayOrder: 2 },
  { slug: "marketing-seo", name: "Marketing & SEO", icon: "Target", displayOrder: 3 },
  { slug: "content-creation", name: "Content Creation & Writing", icon: "FileText", displayOrder: 4 },
  { slug: "design-creative", name: "Design & Creative", icon: "Palette", displayOrder: 5 },
  { slug: "video-audio", name: "Video & Audio", icon: "Video", displayOrder: 6 },
  { slug: "productivity-automation", name: "Productivity & Automation", icon: "Zap", displayOrder: 7 },
  { slug: "finance-accounting", name: "Finance & Accounting", icon: "DollarSign", displayOrder: 8 },
  { slug: "hr-hiring", name: "HR & Hiring", icon: "Users", displayOrder: 9 },
  { slug: "social-media", name: "Social Media", icon: "Share2", displayOrder: 10 },
  { slug: "ecommerce", name: "E-Commerce", icon: "ShoppingCart", displayOrder: 11 },
  { slug: "education-learning", name: "Education & Learning", icon: "GraduationCap", displayOrder: 12 },
  { slug: "research-analysis", name: "Research & Analysis", icon: "Search", displayOrder: 13 },
  { slug: "development-coding", name: "Development & Coding", icon: "Code", displayOrder: 14 },
  { slug: "personal-companion", name: "Personal Companion", icon: "Heart", displayOrder: 15 },
];

const categorySlugMapping: Record<string, string> = {
  "customer-support": "customer-support",
  "sales-crm": "sales-crm",
  "marketing-seo": "marketing-seo",
  "writing": "content-creation",
  "content-creation": "content-creation",
  "design": "design-creative",
  "design-creative": "design-creative",
  "video-audio": "video-audio",
  "productivity": "productivity-automation",
  "Productivity": "productivity-automation",
  "productivity-automation": "productivity-automation",
  "Personal Productivity": "productivity-automation",
  "finance": "finance-accounting",
  "personal-finance": "finance-accounting",
  "finance-accounting": "finance-accounting",
  "hr-hiring": "hr-hiring",
  "social-media": "social-media",
  "ecommerce": "ecommerce",
  "education": "education-learning",
  "education-learning": "education-learning",
  "research": "research-analysis",
  "research-analysis": "research-analysis",
  "development": "development-coding",
  "development-coding": "development-coding",
  "personal-companion": "personal-companion",
};

async function seed() {
  console.log("Starting seed process...");
  
  try {
    // 1. Create the default "Manual Entry" source
    console.log("Creating default source...");
    const existingSources = await db.select().from(toolSources);
    let manualSourceId: string;
    
    if (existingSources.length === 0) {
      const [manualSource] = await db.insert(toolSources).values({
        name: "Manual Entry",
        type: "manual",
        trustBaseline: "1.00",
        isActive: true,
        syncFrequency: "manual",
      }).returning();
      manualSourceId = manualSource.id;
      console.log("Created manual source:", manualSourceId);
    } else {
      manualSourceId = existingSources[0].id;
      console.log("Using existing source:", manualSourceId);
    }
    
    // 2. Create categories
    console.log("Creating categories...");
    const categoryMap: Record<string, string> = {};
    
    for (const cat of categories) {
      const existing = await db.select().from(toolCategories).where(eq(toolCategories.slug, cat.slug));
      if (existing.length === 0) {
        const [created] = await db.insert(toolCategories).values({
          slug: cat.slug,
          name: cat.name,
          icon: cat.icon,
          displayOrder: cat.displayOrder,
          isActive: true,
        }).returning();
        categoryMap[cat.slug] = created.id;
        console.log(`Created category: ${cat.name}`);
      } else {
        categoryMap[cat.slug] = existing[0].id;
        console.log(`Category already exists: ${cat.name}`);
      }
    }
    
    // 3. Migrate tools
    console.log("Migrating tools...");
    let created = 0;
    let skipped = 0;
    
    for (const tool of staticTools) {
      // Check if tool already exists
      const existing = await db.select().from(aiTools).where(eq(aiTools.slug, tool.id));
      if (existing.length > 0) {
        skipped++;
        continue;
      }
      
      // Map category slug using the mapping
      const mappedCategorySlug = categorySlugMapping[tool.category] || tool.category;
      const categoryId = categoryMap[mappedCategorySlug] || null;
      
      if (!categoryId) {
        console.log(`Warning: No category found for tool "${tool.name}" with category "${tool.category}"`);
      }
      
      // Determine pricing model
      let pricingModel = "paid";
      let hasFreeTier = false;
      const pricingLower = tool.pricing.toLowerCase();
      if (pricingLower.includes("free")) {
        hasFreeTier = true;
        if (pricingLower === "free" || pricingLower.startsWith("free plan")) {
          pricingModel = "free";
        } else {
          pricingModel = "freemium";
        }
      } else if (pricingLower.includes("custom") || pricingLower.includes("enterprise")) {
        pricingModel = "enterprise";
      }
      
      await db.insert(aiTools).values({
        slug: tool.id,
        name: tool.name,
        shortDescription: tool.description.substring(0, 300),
        longDescription: tool.description,
        websiteUrl: tool.url,
        pricing: tool.pricing,
        pricingModel,
        hasFreeTier,
        categoryId,
        keywords: tool.keywords,
        features: tool.features,
        targetAudience: tool.targetUser,
        sourceId: manualSourceId,
        trustScore: "0.85",
        status: "active",
        isVerified: true,
        isFeatured: false,
      });
      
      created++;
      if (created % 20 === 0) {
        console.log(`Progress: ${created} tools created...`);
      }
    }
    
    console.log(`\nSeed complete!`);
    console.log(`Created: ${created} tools`);
    console.log(`Skipped (already exist): ${skipped} tools`);
    console.log(`Total tools in database: ${created + skipped}`);
    
  } catch (error) {
    console.error("Seed failed:", error);
    process.exit(1);
  }
  
  process.exit(0);
}

seed();
