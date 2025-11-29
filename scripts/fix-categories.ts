import { db } from "../server/db";
import { toolCategories, aiTools } from "../shared/schema";
import { aiTools as staticTools } from "../client/src/lib/tools";
import { eq } from "drizzle-orm";

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

async function fixCategories() {
  console.log("Fixing category assignments...");
  
  try {
    // Get all categories
    const categories = await db.select().from(toolCategories);
    const categoryMap: Record<string, string> = {};
    for (const cat of categories) {
      categoryMap[cat.slug] = cat.id;
    }
    console.log("Loaded categories:", Object.keys(categoryMap));
    
    // Get all tools and create a map of tool slug -> original category
    const toolCategoryMap: Record<string, string> = {};
    for (const tool of staticTools) {
      toolCategoryMap[tool.id] = tool.category;
    }
    
    // Get all database tools
    const dbTools = await db.select().from(aiTools);
    console.log(`Found ${dbTools.length} tools in database`);
    
    let fixed = 0;
    let alreadyCorrect = 0;
    let notFound = 0;
    
    for (const dbTool of dbTools) {
      const originalCategory = toolCategoryMap[dbTool.slug];
      if (!originalCategory) {
        notFound++;
        continue;
      }
      
      const mappedCategorySlug = categorySlugMapping[originalCategory] || originalCategory;
      const correctCategoryId = categoryMap[mappedCategorySlug];
      
      if (!correctCategoryId) {
        console.log(`Warning: No category found for "${dbTool.name}" with category "${originalCategory}" -> "${mappedCategorySlug}"`);
        continue;
      }
      
      if (dbTool.categoryId === correctCategoryId) {
        alreadyCorrect++;
        continue;
      }
      
      // Update the tool
      await db.update(aiTools)
        .set({ categoryId: correctCategoryId })
        .where(eq(aiTools.id, dbTool.id));
      
      fixed++;
    }
    
    console.log(`\nFix complete!`);
    console.log(`Fixed: ${fixed} tools`);
    console.log(`Already correct: ${alreadyCorrect} tools`);
    console.log(`Not found in static: ${notFound} tools`);
    
  } catch (error) {
    console.error("Fix failed:", error);
    process.exit(1);
  }
  
  process.exit(0);
}

fixCategories();
