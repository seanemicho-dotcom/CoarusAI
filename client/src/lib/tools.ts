export interface AITool {
  id: string;
  name: string;
  description: string;
  category: string;
  features: string[];
  url: string;
  keywords: string[];
  pricing: string;
  fitScore?: number;
  targetUser: "smb" | "individual" | "both";
}

export const aiTools: AITool[] = [
  // ============================================
  // CUSTOMER SUPPORT (10 tools)
  // ============================================
  {
    id: "tidio",
    name: "Tidio",
    description: "AI chatbot platform for websites with live chat, visitor tracking, and automated responses for small businesses.",
    category: "customer-support",
    features: ["AI chatbots", "Live chat", "Visitor tracking", "Email integration"],
    url: "https://www.tidio.com",
    keywords: ["customer service", "chat", "chatbot", "support", "website"],
    pricing: "$29/mo",
    targetUser: "smb",
  },
  {
    id: "freshdesk",
    name: "Freshdesk",
    description: "Cloud-based customer support with AI-powered automation, self-service portal, and team collaboration.",
    category: "customer-support",
    features: ["Freddy AI", "Auto-assign", "Knowledge base", "Team inbox"],
    url: "https://freshdesk.com",
    keywords: ["customer service", "support", "tickets", "automation", "help desk"],
    pricing: "from $18/mo",
    targetUser: "smb",
  },
  {
    id: "zendesk",
    name: "Zendesk",
    description: "Customer service platform with AI-powered ticket routing, suggested replies, and omnichannel support.",
    category: "customer-support",
    features: ["AI ticket routing", "Answer bot", "Analytics", "Omnichannel"],
    url: "https://www.zendesk.com",
    keywords: ["customer service", "support", "tickets", "help desk", "crm"],
    pricing: "$19+/agent/mo",
    targetUser: "smb",
  },
  {
    id: "intercom",
    name: "Intercom",
    description: "AI-powered customer messaging platform for support, engagement, and conversational bots.",
    category: "customer-support",
    features: ["AI chatbots", "Live chat", "Help center", "Proactive support"],
    url: "https://www.intercom.com",
    keywords: ["customer service", "support", "chat", "chatbot", "help desk"],
    pricing: "$74+/mo",
    targetUser: "smb",
  },
  {
    id: "ada",
    name: "Ada",
    description: "AI-powered customer service automation platform that resolves inquiries instantly with personalized responses.",
    category: "customer-support",
    features: ["AI automation", "Personalization", "Multi-language", "Analytics"],
    url: "https://www.ada.cx",
    keywords: ["customer service", "automation", "chatbot", "support", "ai"],
    pricing: "Custom",
    targetUser: "smb",
  },
  {
    id: "drift",
    name: "Drift",
    description: "Conversational AI platform for sales and customer support with real-time chat and meeting scheduling.",
    category: "customer-support",
    features: ["Conversational AI", "Meeting scheduling", "Lead routing", "Playbooks"],
    url: "https://www.drift.com",
    keywords: ["chat", "sales", "support", "conversational", "leads"],
    pricing: "Custom",
    targetUser: "smb",
  },
  {
    id: "helpscout",
    name: "Help Scout",
    description: "Customer service software with AI-powered suggestions, shared inbox, and knowledge base management.",
    category: "customer-support",
    features: ["AI suggestions", "Shared inbox", "Knowledge base", "Reporting"],
    url: "https://www.helpscout.com",
    keywords: ["customer service", "help desk", "email", "support", "inbox"],
    pricing: "$20/user/mo",
    targetUser: "smb",
  },
  {
    id: "userbot",
    name: "Userbot.ai",
    description: "24/7 AI chatbot for customer queries with natural language understanding and multi-channel support.",
    category: "customer-support",
    features: ["24/7 support", "NLU", "Multi-channel", "Human handoff"],
    url: "https://userbot.ai",
    keywords: ["chatbot", "customer service", "ai", "automation", "support"],
    pricing: "Custom",
    targetUser: "smb",
  },
  {
    id: "crisp",
    name: "Crisp",
    description: "All-in-one business messaging platform with AI chatbot, live chat, and CRM integration.",
    category: "customer-support",
    features: ["AI chatbot", "Live chat", "CRM", "Multi-channel"],
    url: "https://crisp.chat",
    keywords: ["chat", "messaging", "crm", "support", "customer service"],
    pricing: "Free - $95/mo",
    targetUser: "smb",
  },
  {
    id: "kayako",
    name: "Kayako",
    description: "Customer service platform with AI-powered insights, unified conversations, and team collaboration.",
    category: "customer-support",
    features: ["AI insights", "Unified inbox", "Collaboration", "Analytics"],
    url: "https://kayako.com",
    keywords: ["customer service", "help desk", "support", "tickets", "collaboration"],
    pricing: "$30+/agent/mo",
    targetUser: "smb",
  },

  // ============================================
  // SALES & CRM (12 tools)
  // ============================================
  {
    id: "freshsales",
    name: "Freshsales AI",
    description: "CRM with AI-powered lead scoring, auto-followup, and sales forecasting for growing teams.",
    category: "sales-crm",
    features: ["AI lead scoring", "Auto-followup", "Pipeline insights", "Forecasting"],
    url: "https://www.freshworks.com/crm/sales",
    keywords: ["crm", "sales", "leads", "automation", "forecasting"],
    pricing: "$15-69/mo",
    targetUser: "smb",
  },
  {
    id: "hubspot",
    name: "HubSpot CRM",
    description: "Free CRM with AI-powered lead scoring, email tracking, and sales automation tools.",
    category: "sales-crm",
    features: ["AI lead scoring", "Email tracking", "Pipeline management", "Free tier"],
    url: "https://www.hubspot.com/crm",
    keywords: ["crm", "sales", "leads", "marketing", "automation"],
    pricing: "Free - $50+/mo",
    targetUser: "smb",
  },
  {
    id: "pipedrive",
    name: "Pipedrive",
    description: "Sales CRM with AI sales assistant for deal insights, activity suggestions, and visual pipeline.",
    category: "sales-crm",
    features: ["AI assistant", "Visual pipeline", "Lead scoring", "Email integration"],
    url: "https://www.pipedrive.com",
    keywords: ["crm", "sales", "pipeline", "deals", "small business"],
    pricing: "$14+/user/mo",
    targetUser: "smb",
  },
  {
    id: "zoho-crm",
    name: "Zoho CRM",
    description: "CRM software with Zia AI for predictions, lead scoring, and workflow automation.",
    category: "sales-crm",
    features: ["Zia AI", "Lead scoring", "Workflow automation", "Multichannel"],
    url: "https://www.zoho.com/crm",
    keywords: ["crm", "sales", "leads", "automation", "ai"],
    pricing: "$14+/user/mo",
    targetUser: "smb",
  },
  {
    id: "close-crm",
    name: "Close CRM",
    description: "CRM built for sales teams with built-in calling, email sequences, and pipeline automation.",
    category: "sales-crm",
    features: ["Built-in calling", "Email sequences", "Pipeline automation", "Reporting"],
    url: "https://www.close.com",
    keywords: ["crm", "sales", "calling", "email", "pipeline"],
    pricing: "$29+/user/mo",
    targetUser: "smb",
  },
  {
    id: "salesforce-einstein",
    name: "Salesforce Einstein",
    description: "AI-powered CRM with predictive analytics, automated insights, and intelligent recommendations.",
    category: "sales-crm",
    features: ["Predictive analytics", "Lead scoring", "Opportunity insights", "Automation"],
    url: "https://www.salesforce.com/einstein",
    keywords: ["crm", "sales", "enterprise", "ai", "analytics"],
    pricing: "$25+/user/mo",
    targetUser: "smb",
  },
  {
    id: "apollo",
    name: "Apollo.io",
    description: "Sales intelligence platform with AI-powered prospecting, data enrichment, and outreach automation.",
    category: "sales-crm",
    features: ["Prospecting", "Data enrichment", "Email sequences", "Analytics"],
    url: "https://www.apollo.io",
    keywords: ["sales", "prospecting", "leads", "outreach", "data"],
    pricing: "Free - $79/mo",
    targetUser: "smb",
  },
  {
    id: "gong",
    name: "Gong",
    description: "Revenue intelligence platform with AI conversation analytics for sales teams.",
    category: "sales-crm",
    features: ["Conversation analytics", "Deal insights", "Coaching", "Forecasting"],
    url: "https://www.gong.io",
    keywords: ["sales", "revenue", "analytics", "conversation", "coaching"],
    pricing: "Custom",
    targetUser: "smb",
  },
  {
    id: "outreach",
    name: "Outreach",
    description: "Sales execution platform with AI-powered engagement, sequencing, and analytics.",
    category: "sales-crm",
    features: ["Engagement", "Sequences", "Analytics", "AI insights"],
    url: "https://www.outreach.io",
    keywords: ["sales", "engagement", "outreach", "sequences", "automation"],
    pricing: "Custom",
    targetUser: "smb",
  },
  {
    id: "salesloft",
    name: "Salesloft",
    description: "Sales engagement platform with AI cadences, call recording, and pipeline management.",
    category: "sales-crm",
    features: ["Cadences", "Call recording", "Pipeline", "Analytics"],
    url: "https://www.salesloft.com",
    keywords: ["sales", "engagement", "calls", "pipeline", "automation"],
    pricing: "Custom",
    targetUser: "smb",
  },
  {
    id: "copper",
    name: "Copper CRM",
    description: "Google Workspace-native CRM with AI suggestions, relationship tracking, and automation.",
    category: "sales-crm",
    features: ["Google integration", "AI suggestions", "Relationship tracking", "Automation"],
    url: "https://www.copper.com",
    keywords: ["crm", "google", "sales", "relationships", "automation"],
    pricing: "$23+/user/mo",
    targetUser: "smb",
  },
  {
    id: "insightly",
    name: "Insightly",
    description: "CRM and project management platform with AI insights and workflow automation.",
    category: "sales-crm",
    features: ["Project management", "AI insights", "Workflows", "Reporting"],
    url: "https://www.insightly.com",
    keywords: ["crm", "projects", "sales", "automation", "insights"],
    pricing: "$29+/user/mo",
    targetUser: "smb",
  },

  // ============================================
  // MARKETING & SEO (15 tools)
  // ============================================
  {
    id: "jasper",
    name: "Jasper AI",
    description: "AI copywriting assistant for marketing content, blog posts, social media copy, and ads.",
    category: "marketing-seo",
    features: ["AI copywriting", "50+ templates", "Brand voice", "SEO optimization"],
    url: "https://www.jasper.ai",
    keywords: ["marketing", "content", "copywriting", "social media", "ads", "blog", "seo"],
    pricing: "$39+/mo",
    targetUser: "smb",
  },
  {
    id: "semrush",
    name: "Semrush",
    description: "All-in-one SEO toolkit with AI content optimization, keyword research, and competitor analysis.",
    category: "marketing-seo",
    features: ["Keyword research", "Content AI", "Competitor analysis", "Site audit"],
    url: "https://www.semrush.com",
    keywords: ["seo", "marketing", "keywords", "content", "analytics"],
    pricing: "$129+/mo",
    targetUser: "smb",
  },
  {
    id: "ahrefs",
    name: "Ahrefs",
    description: "SEO toolset with backlink analysis, keyword research, and content explorer for marketers.",
    category: "marketing-seo",
    features: ["Backlink analysis", "Keyword research", "Site audit", "Rank tracking"],
    url: "https://ahrefs.com",
    keywords: ["seo", "backlinks", "keywords", "content", "ranking"],
    pricing: "$99+/mo",
    targetUser: "smb",
  },
  {
    id: "surfer-seo",
    name: "Surfer SEO",
    description: "AI-powered on-page SEO tool with content editor, SERP analysis, and optimization recommendations.",
    category: "marketing-seo",
    features: ["Content editor", "SERP analysis", "Optimization", "AI writing"],
    url: "https://surferseo.com",
    keywords: ["seo", "content", "optimization", "writing", "serp"],
    pricing: "$59+/mo",
    targetUser: "smb",
  },
  {
    id: "clearscope",
    name: "Clearscope",
    description: "Content optimization platform with AI-powered keyword research and competitive analysis.",
    category: "marketing-seo",
    features: ["Content optimization", "Keyword research", "Competitive analysis", "Integrations"],
    url: "https://www.clearscope.io",
    keywords: ["seo", "content", "keywords", "optimization", "marketing"],
    pricing: "$170+/mo",
    targetUser: "smb",
  },
  {
    id: "frase",
    name: "Frase",
    description: "AI content research and SEO tool that helps create high-ranking content faster.",
    category: "marketing-seo",
    features: ["Content research", "AI writing", "SEO optimization", "Content briefs"],
    url: "https://www.frase.io",
    keywords: ["seo", "content", "research", "writing", "optimization"],
    pricing: "$14.99+/mo",
    targetUser: "smb",
  },
  {
    id: "activecampaign",
    name: "ActiveCampaign",
    description: "Email marketing and automation platform with AI-powered predictive sending and segmentation.",
    category: "marketing-seo",
    features: ["Email automation", "Predictive sending", "Segmentation", "CRM"],
    url: "https://www.activecampaign.com",
    keywords: ["email", "marketing", "automation", "crm", "campaigns"],
    pricing: "$29+/mo",
    targetUser: "smb",
  },
  {
    id: "mailchimp",
    name: "Mailchimp",
    description: "Email marketing platform with AI content assistant, audience segmentation, and automation.",
    category: "marketing-seo",
    features: ["Email campaigns", "AI assistant", "Automation", "Segmentation"],
    url: "https://mailchimp.com",
    keywords: ["email", "marketing", "newsletters", "automation", "campaigns"],
    pricing: "Free - $299/mo",
    targetUser: "smb",
  },
  {
    id: "klaviyo",
    name: "Klaviyo",
    description: "E-commerce marketing platform with AI-powered email and SMS automation for online stores.",
    category: "marketing-seo",
    features: ["Email automation", "SMS marketing", "AI segmentation", "E-commerce"],
    url: "https://www.klaviyo.com",
    keywords: ["email", "sms", "ecommerce", "marketing", "automation"],
    pricing: "Free - $45+/mo",
    targetUser: "smb",
  },
  {
    id: "marketo",
    name: "Marketo Engage",
    description: "Enterprise marketing automation with AI-powered lead scoring and personalization.",
    category: "marketing-seo",
    features: ["Lead scoring", "Personalization", "Automation", "Analytics"],
    url: "https://business.adobe.com/products/marketo",
    keywords: ["marketing", "automation", "leads", "enterprise", "personalization"],
    pricing: "Custom",
    targetUser: "smb",
  },
  {
    id: "optinmonster",
    name: "OptinMonster",
    description: "Lead generation tool with AI-powered popups, A/B testing, and behavioral triggers.",
    category: "marketing-seo",
    features: ["Popups", "A/B testing", "Behavioral triggers", "Exit intent"],
    url: "https://optinmonster.com",
    keywords: ["leads", "popups", "conversion", "marketing", "optimization"],
    pricing: "$9+/mo",
    targetUser: "smb",
  },
  {
    id: "unbounce",
    name: "Unbounce",
    description: "Landing page builder with AI copywriting, Smart Traffic optimization, and A/B testing.",
    category: "marketing-seo",
    features: ["Landing pages", "AI copywriting", "Smart Traffic", "A/B testing"],
    url: "https://unbounce.com",
    keywords: ["landing pages", "conversion", "marketing", "optimization", "ai"],
    pricing: "$74+/mo",
    targetUser: "smb",
  },
  {
    id: "scalenut",
    name: "Scalenut",
    description: "AI-powered SEO and content marketing platform with topic clusters and content planning.",
    category: "marketing-seo",
    features: ["Content planning", "Topic clusters", "SEO optimization", "AI writing"],
    url: "https://www.scalenut.com",
    keywords: ["seo", "content", "marketing", "planning", "ai"],
    pricing: "$39+/mo",
    targetUser: "smb",
  },
  {
    id: "marketmuse",
    name: "MarketMuse",
    description: "AI content strategy platform with topic modeling and content optimization recommendations.",
    category: "marketing-seo",
    features: ["Topic modeling", "Content optimization", "Competitive analysis", "AI insights"],
    url: "https://www.marketmuse.com",
    keywords: ["content", "seo", "strategy", "optimization", "ai"],
    pricing: "Free - $149+/mo",
    targetUser: "smb",
  },
  {
    id: "brevo",
    name: "Brevo",
    description: "Email and SMS marketing platform with automation, chatbots, and transactional emails.",
    category: "marketing-seo",
    features: ["Email marketing", "SMS", "Automation", "Chatbots"],
    url: "https://www.brevo.com",
    keywords: ["email", "sms", "marketing", "automation", "transactional"],
    pricing: "Free - $25+/mo",
    targetUser: "smb",
  },

  // ============================================
  // CONTENT CREATION & WRITING (15 tools)
  // ============================================
  {
    id: "chatgpt",
    name: "ChatGPT",
    description: "OpenAI's conversational AI for content creation, brainstorming, coding, and general assistance.",
    category: "writing",
    features: ["Content generation", "Coding help", "Brainstorming", "Multi-modal"],
    url: "https://chat.openai.com",
    keywords: ["ai", "writing", "content", "coding", "assistant"],
    pricing: "Free - $20/mo",
    targetUser: "both",
  },
  {
    id: "claude",
    name: "Claude",
    description: "Anthropic's AI assistant for writing, analysis, coding, and research with long context windows.",
    category: "writing",
    features: ["Long-form writing", "Analysis", "Coding", "Research"],
    url: "https://claude.ai",
    keywords: ["ai", "writing", "analysis", "coding", "research"],
    pricing: "Free - $20/mo",
    targetUser: "both",
  },
  {
    id: "copy-ai",
    name: "Copy.ai",
    description: "AI copywriting tool for marketing copy, social media posts, and product descriptions.",
    category: "writing",
    features: ["Marketing copy", "Social posts", "Product descriptions", "Templates"],
    url: "https://www.copy.ai",
    keywords: ["copywriting", "marketing", "social media", "content", "ai"],
    pricing: "Free - $36/mo",
    targetUser: "both",
  },
  {
    id: "writesonic",
    name: "Writesonic",
    description: "AI content generator for SEO-optimized articles, ads, and marketing copy.",
    category: "writing",
    features: ["SEO articles", "Ad copy", "Landing pages", "AI chat"],
    url: "https://writesonic.com",
    keywords: ["writing", "seo", "content", "marketing", "ai"],
    pricing: "Free - $45/mo",
    targetUser: "both",
  },
  {
    id: "grammarly",
    name: "Grammarly",
    description: "AI writing assistant for grammar, spelling, tone, and clarity improvements.",
    category: "writing",
    features: ["Grammar check", "Tone detection", "Clarity suggestions", "Plagiarism check"],
    url: "https://www.grammarly.com",
    keywords: ["grammar", "writing", "editing", "spelling", "tone"],
    pricing: "Free - $12/mo",
    targetUser: "both",
  },
  {
    id: "rytr",
    name: "Rytr",
    description: "AI writing assistant for quick content generation across 40+ use cases.",
    category: "writing",
    features: ["40+ use cases", "Multiple languages", "Templates", "Auto editing"],
    url: "https://rytr.me",
    keywords: ["writing", "content", "copywriting", "ai", "templates"],
    pricing: "Free - $29/mo",
    targetUser: "both",
  },
  {
    id: "wordtune",
    name: "Wordtune",
    description: "AI writing companion that rewrites sentences for clarity, tone, and style.",
    category: "writing",
    features: ["Sentence rewriting", "Tone adjustment", "Summarization", "Browser extension"],
    url: "https://www.wordtune.com",
    keywords: ["writing", "rewriting", "tone", "editing", "ai"],
    pricing: "Free - $24.99/mo",
    targetUser: "both",
  },
  {
    id: "quillbot",
    name: "QuillBot",
    description: "AI paraphrasing tool with grammar checker, summarizer, and translation features.",
    category: "writing",
    features: ["Paraphrasing", "Grammar check", "Summarizer", "Translation"],
    url: "https://quillbot.com",
    keywords: ["paraphrasing", "grammar", "writing", "summarizing", "ai"],
    pricing: "Free - $9.95/mo",
    targetUser: "both",
  },
  {
    id: "notion-ai",
    name: "Notion AI",
    description: "AI assistant built into Notion for writing, summarizing, and brainstorming in your workspace.",
    category: "writing",
    features: ["Writing assistance", "Summarization", "Brainstorming", "Translation"],
    url: "https://www.notion.so/product/ai",
    keywords: ["writing", "productivity", "notes", "ai", "workspace"],
    pricing: "$10/mo add-on",
    targetUser: "both",
  },
  {
    id: "anyword",
    name: "Anyword",
    description: "AI copywriting platform with predictive performance scores and custom brand models.",
    category: "writing",
    features: ["Predictive scoring", "Brand voice", "A/B testing", "Analytics"],
    url: "https://anyword.com",
    keywords: ["copywriting", "marketing", "ai", "analytics", "brand"],
    pricing: "$39+/mo",
    targetUser: "smb",
  },
  {
    id: "peppertype",
    name: "Peppertype AI",
    description: "AI content assistant for generating marketing copy, blog ideas, and social content.",
    category: "writing",
    features: ["Marketing copy", "Blog ideas", "Social content", "Templates"],
    url: "https://www.peppercontent.io/peppertype-ai/",
    keywords: ["content", "marketing", "writing", "ai", "copy"],
    pricing: "$25+/mo",
    targetUser: "smb",
  },
  {
    id: "writer",
    name: "Writer",
    description: "Enterprise AI writing platform with brand-safe content generation and style guidelines.",
    category: "writing",
    features: ["Brand safety", "Style guides", "Compliance", "Team collaboration"],
    url: "https://writer.com",
    keywords: ["writing", "enterprise", "brand", "compliance", "ai"],
    pricing: "Custom",
    targetUser: "smb",
  },
  {
    id: "hyperwrite",
    name: "HyperWrite",
    description: "AI writing assistant with autocomplete, content generation, and research capabilities.",
    category: "writing",
    features: ["Autocomplete", "Content generation", "Research", "Browser extension"],
    url: "https://www.hyperwriteai.com",
    keywords: ["writing", "autocomplete", "ai", "research", "assistant"],
    pricing: "Free - $19.99/mo",
    targetUser: "both",
  },
  {
    id: "longshot",
    name: "Longshot AI",
    description: "AI content writer with fact-checking, research, and SEO optimization features.",
    category: "writing",
    features: ["Fact-checking", "Research", "SEO optimization", "Blog writing"],
    url: "https://www.longshot.ai",
    keywords: ["writing", "facts", "research", "seo", "blog"],
    pricing: "$19+/mo",
    targetUser: "both",
  },
  {
    id: "sudowrite",
    name: "Sudowrite",
    description: "AI writing tool designed for fiction writers with story development and character assistance.",
    category: "writing",
    features: ["Story development", "Character help", "Rewriting", "Brainstorming"],
    url: "https://www.sudowrite.com",
    keywords: ["fiction", "creative writing", "stories", "ai", "characters"],
    pricing: "$10+/mo",
    targetUser: "individual",
  },

  // ============================================
  // DESIGN & CREATIVE (15 tools)
  // ============================================
  {
    id: "canva",
    name: "Canva",
    description: "Design platform with AI-powered Magic Design, background removal, and template generation.",
    category: "design",
    features: ["Magic Design", "Background removal", "Templates", "Brand kit"],
    url: "https://www.canva.com",
    keywords: ["design", "graphics", "templates", "social media", "branding"],
    pricing: "Free - $12.99/mo",
    targetUser: "both",
  },
  {
    id: "midjourney",
    name: "Midjourney",
    description: "AI image generator creating artistic, high-quality images from text prompts.",
    category: "design",
    features: ["Text-to-image", "Artistic styles", "Variations", "Upscaling"],
    url: "https://www.midjourney.com",
    keywords: ["ai art", "image generation", "creative", "design", "artwork"],
    pricing: "$10+/mo",
    targetUser: "both",
  },
  {
    id: "dall-e",
    name: "DALL-E 3",
    description: "OpenAI's AI image generator creating detailed images from text descriptions.",
    category: "design",
    features: ["Text-to-image", "Editing", "Variations", "High quality"],
    url: "https://openai.com/dall-e-3",
    keywords: ["ai art", "image generation", "design", "creative", "openai"],
    pricing: "$20/mo (via ChatGPT Plus)",
    targetUser: "both",
  },
  {
    id: "adobe-firefly",
    name: "Adobe Firefly",
    description: "Adobe's generative AI for creating images, text effects, and color palettes commercially safe.",
    category: "design",
    features: ["Image generation", "Text effects", "Color palettes", "Commercial safe"],
    url: "https://firefly.adobe.com",
    keywords: ["design", "adobe", "image generation", "creative", "commercial"],
    pricing: "Included with Creative Cloud",
    targetUser: "both",
  },
  {
    id: "stable-diffusion",
    name: "Stable Diffusion",
    description: "Open-source AI image generator with customizable models and local deployment options.",
    category: "design",
    features: ["Open-source", "Customizable", "Local deployment", "Text-to-image"],
    url: "https://stability.ai",
    keywords: ["ai art", "open source", "image generation", "customizable", "free"],
    pricing: "Free (open-source)",
    targetUser: "both",
  },
  {
    id: "figma-ai",
    name: "Figma AI",
    description: "Design tool with AI-powered features for UI/UX design, prototyping, and collaboration.",
    category: "design",
    features: ["UI design", "Prototyping", "Collaboration", "AI suggestions"],
    url: "https://www.figma.com",
    keywords: ["design", "ui", "ux", "prototyping", "collaboration"],
    pricing: "Free - $12+/mo",
    targetUser: "both",
  },
  {
    id: "looka",
    name: "Looka",
    description: "AI logo maker and brand identity designer for creating professional logos instantly.",
    category: "design",
    features: ["Logo design", "Brand kits", "Business cards", "Social media"],
    url: "https://looka.com",
    keywords: ["logo", "branding", "design", "identity", "business"],
    pricing: "$65 one-time",
    targetUser: "smb",
  },
  {
    id: "remove-bg",
    name: "Remove.bg",
    description: "AI-powered background removal tool for images with instant results.",
    category: "design",
    features: ["Background removal", "Batch processing", "API", "Editing"],
    url: "https://www.remove.bg",
    keywords: ["background", "removal", "images", "editing", "ai"],
    pricing: "Free - $0.20/image",
    targetUser: "both",
  },
  {
    id: "recraft",
    name: "Recraft.ai",
    description: "AI design tool for creating vector graphics, illustrations, and brand-consistent imagery.",
    category: "design",
    features: ["Vector graphics", "Illustrations", "Brand consistency", "Upscaling"],
    url: "https://www.recraft.ai",
    keywords: ["design", "vectors", "illustrations", "branding", "ai"],
    pricing: "Free - $25/mo",
    targetUser: "both",
  },
  {
    id: "designs-ai",
    name: "Designs.ai",
    description: "All-in-one AI creative platform with logo maker, video maker, and design tools.",
    category: "design",
    features: ["Logo maker", "Video maker", "Design tools", "Color palettes"],
    url: "https://designs.ai",
    keywords: ["design", "logo", "video", "creative", "branding"],
    pricing: "$19+/mo",
    targetUser: "smb",
  },
  {
    id: "stockimg",
    name: "Stockimg.ai",
    description: "AI-generated stock images, logos, posters, and book covers from text prompts.",
    category: "design",
    features: ["Stock images", "Logos", "Posters", "Book covers"],
    url: "https://stockimg.ai",
    keywords: ["stock", "images", "design", "logos", "ai"],
    pricing: "$19+/mo",
    targetUser: "both",
  },
  {
    id: "leonardo",
    name: "Leonardo.ai",
    description: "AI image generator with fine-tuned models for game assets, concept art, and graphics.",
    category: "design",
    features: ["Game assets", "Concept art", "Fine-tuned models", "Image editing"],
    url: "https://leonardo.ai",
    keywords: ["ai art", "games", "concept art", "graphics", "design"],
    pricing: "Free - $12+/mo",
    targetUser: "both",
  },
  {
    id: "uizard",
    name: "Uizard",
    description: "AI UI/UX design tool that converts sketches and screenshots into editable designs.",
    category: "design",
    features: ["Sketch to design", "Screenshot scanning", "Prototyping", "Templates"],
    url: "https://uizard.io",
    keywords: ["ui", "ux", "design", "prototyping", "wireframes"],
    pricing: "Free - $12+/mo",
    targetUser: "both",
  },
  {
    id: "fotor",
    name: "Fotor",
    description: "AI photo editor and design tool with background removal, enhancement, and templates.",
    category: "design",
    features: ["Photo editing", "Background removal", "Enhancement", "Templates"],
    url: "https://www.fotor.com",
    keywords: ["photo", "editing", "design", "enhancement", "ai"],
    pricing: "Free - $8.99/mo",
    targetUser: "both",
  },
  {
    id: "photoroom",
    name: "PhotoRoom",
    description: "AI photo editing app for product photos with background removal and professional results.",
    category: "design",
    features: ["Product photos", "Background removal", "Templates", "Batch editing"],
    url: "https://www.photoroom.com",
    keywords: ["photo", "product", "ecommerce", "background", "editing"],
    pricing: "Free - $12.99/mo",
    targetUser: "both",
  },

  // ============================================
  // VIDEO & AUDIO (12 tools)
  // ============================================
  {
    id: "synthesia",
    name: "Synthesia",
    description: "AI video generator with 230+ digital avatars and 140+ languages for professional videos.",
    category: "video-audio",
    features: ["AI avatars", "140+ languages", "Templates", "Custom avatars"],
    url: "https://www.synthesia.io",
    keywords: ["video", "avatar", "ai", "training", "presentations"],
    pricing: "$22+/mo",
    targetUser: "smb",
  },
  {
    id: "heygen",
    name: "HeyGen",
    description: "AI video platform for creating professional videos with realistic AI avatars.",
    category: "video-audio",
    features: ["AI avatars", "Voice cloning", "Templates", "Multi-language"],
    url: "https://www.heygen.com",
    keywords: ["video", "avatar", "ai", "voice", "presentations"],
    pricing: "$29+/mo",
    targetUser: "smb",
  },
  {
    id: "descript",
    name: "Descript",
    description: "AI-powered video and podcast editor with transcription, overdub, and studio sound.",
    category: "video-audio",
    features: ["Transcription", "Overdub", "Studio sound", "Screen recording"],
    url: "https://www.descript.com",
    keywords: ["video", "audio", "podcast", "editing", "transcription"],
    pricing: "Free - $24/mo",
    targetUser: "both",
  },
  {
    id: "elevenlabs",
    name: "ElevenLabs",
    description: "AI voice synthesis platform with realistic text-to-speech and voice cloning.",
    category: "video-audio",
    features: ["Text-to-speech", "Voice cloning", "Multi-language", "API"],
    url: "https://elevenlabs.io",
    keywords: ["voice", "text-to-speech", "ai", "audio", "cloning"],
    pricing: "Free - $22+/mo",
    targetUser: "both",
  },
  {
    id: "runway",
    name: "Runway",
    description: "AI video editor with generative tools for video creation, editing, and effects.",
    category: "video-audio",
    features: ["Video generation", "Green screen", "Motion tracking", "AI editing"],
    url: "https://runwayml.com",
    keywords: ["video", "ai", "editing", "generation", "effects"],
    pricing: "Free - $28/mo",
    targetUser: "both",
  },
  {
    id: "pictory",
    name: "Pictory",
    description: "AI video creator that transforms text and articles into engaging videos automatically.",
    category: "video-audio",
    features: ["Text to video", "Article to video", "Captions", "Summarization"],
    url: "https://pictory.ai",
    keywords: ["video", "text", "content", "ai", "automation"],
    pricing: "$19+/mo",
    targetUser: "both",
  },
  {
    id: "lumen5",
    name: "Lumen5",
    description: "AI video creation platform that transforms blog posts into engaging social videos.",
    category: "video-audio",
    features: ["Blog to video", "Templates", "Stock library", "Branding"],
    url: "https://lumen5.com",
    keywords: ["video", "blog", "social media", "content", "marketing"],
    pricing: "$19+/mo",
    targetUser: "smb",
  },
  {
    id: "invideo",
    name: "InVideo AI",
    description: "AI video editor with templates, stock footage, and automated video creation.",
    category: "video-audio",
    features: ["Templates", "Stock footage", "Text to video", "Editing"],
    url: "https://invideo.io",
    keywords: ["video", "editing", "templates", "ai", "content"],
    pricing: "Free - $25/mo",
    targetUser: "both",
  },
  {
    id: "murf",
    name: "Murf AI",
    description: "AI voice generator with 120+ voices for voiceovers, videos, and presentations.",
    category: "video-audio",
    features: ["120+ voices", "Voice cloning", "Video sync", "Multi-language"],
    url: "https://murf.ai",
    keywords: ["voice", "voiceover", "ai", "audio", "presentations"],
    pricing: "Free - $26/mo",
    targetUser: "both",
  },
  {
    id: "krisp",
    name: "Krisp",
    description: "AI noise cancellation app that removes background noise from calls in real-time.",
    category: "video-audio",
    features: ["Noise cancellation", "Echo removal", "Voice clarity", "All apps"],
    url: "https://krisp.ai",
    keywords: ["noise", "audio", "calls", "meetings", "ai"],
    pricing: "Free - $8/mo",
    targetUser: "both",
  },
  {
    id: "otter",
    name: "Otter.ai",
    description: "AI meeting transcription and note-taking tool with automated summaries and action items.",
    category: "video-audio",
    features: ["Transcription", "Meeting notes", "Action items", "Integrations"],
    url: "https://otter.ai",
    keywords: ["transcription", "meetings", "notes", "ai", "audio"],
    pricing: "Free - $16.99/mo",
    targetUser: "both",
  },
  {
    id: "fireflies",
    name: "Fireflies.ai",
    description: "AI meeting assistant that records, transcribes, and summarizes meetings automatically.",
    category: "video-audio",
    features: ["Recording", "Transcription", "Summaries", "Action items"],
    url: "https://fireflies.ai",
    keywords: ["meetings", "transcription", "notes", "ai", "recording"],
    pricing: "Free - $18/mo",
    targetUser: "both",
  },

  // ============================================
  // PRODUCTIVITY & AUTOMATION (12 tools)
  // ============================================
  {
    id: "zapier",
    name: "Zapier",
    description: "Workflow automation platform connecting 7,000+ apps with AI-powered automation.",
    category: "productivity",
    features: ["7,000+ apps", "AI automation", "No-code", "Multi-step workflows"],
    url: "https://zapier.com",
    keywords: ["automation", "workflow", "integration", "apps", "no-code"],
    pricing: "Free - $19.99+/mo",
    targetUser: "both",
  },
  {
    id: "notion",
    name: "Notion",
    description: "All-in-one workspace with AI writing, databases, docs, and project management.",
    category: "productivity",
    features: ["AI writing", "Databases", "Docs", "Project management"],
    url: "https://www.notion.so",
    keywords: ["notes", "docs", "projects", "workspace", "ai"],
    pricing: "Free - $10+/mo",
    targetUser: "both",
  },
  {
    id: "clickup",
    name: "ClickUp",
    description: "Project management platform with AI-powered task automation and progress tracking.",
    category: "productivity",
    features: ["Task management", "AI automation", "Time tracking", "Docs"],
    url: "https://clickup.com",
    keywords: ["projects", "tasks", "automation", "productivity", "team"],
    pricing: "Free - $7+/mo",
    targetUser: "both",
  },
  {
    id: "monday",
    name: "Monday.com",
    description: "Work operating system with AI-powered insights, automation, and team collaboration.",
    category: "productivity",
    features: ["Work management", "AI insights", "Automation", "Dashboards"],
    url: "https://monday.com",
    keywords: ["projects", "work", "team", "automation", "collaboration"],
    pricing: "$8+/user/mo",
    targetUser: "smb",
  },
  {
    id: "asana",
    name: "Asana",
    description: "Work management platform with AI-powered status updates, summaries, and smart fields.",
    category: "productivity",
    features: ["Smart Status", "AI summaries", "Workflows", "Portfolios"],
    url: "https://asana.com",
    keywords: ["projects", "tasks", "work", "team", "management"],
    pricing: "Free - $10.99+/mo",
    targetUser: "both",
  },
  {
    id: "trello",
    name: "Trello",
    description: "Visual project management with AI-powered Butler automation and power-ups.",
    category: "productivity",
    features: ["Kanban boards", "Butler automation", "Power-ups", "Templates"],
    url: "https://trello.com",
    keywords: ["kanban", "boards", "projects", "visual", "automation"],
    pricing: "Free - $10+/mo",
    targetUser: "both",
  },
  {
    id: "airtable",
    name: "Airtable",
    description: "Low-code platform combining spreadsheets and databases with AI-powered automation.",
    category: "productivity",
    features: ["Databases", "Automation", "Views", "Integrations"],
    url: "https://airtable.com",
    keywords: ["database", "spreadsheet", "automation", "low-code", "data"],
    pricing: "Free - $20+/mo",
    targetUser: "both",
  },
  {
    id: "make",
    name: "Make (Integromat)",
    description: "Visual automation platform for creating complex workflows with AI integrations.",
    category: "productivity",
    features: ["Visual builder", "Complex workflows", "AI integrations", "1,000+ apps"],
    url: "https://www.make.com",
    keywords: ["automation", "workflow", "integration", "visual", "no-code"],
    pricing: "Free - $9+/mo",
    targetUser: "both",
  },
  {
    id: "taskade",
    name: "Taskade",
    description: "AI-powered workspace with task lists, mind maps, and custom AI agents.",
    category: "productivity",
    features: ["Task lists", "Mind maps", "AI agents", "Collaboration"],
    url: "https://taskade.com",
    keywords: ["tasks", "collaboration", "ai", "mind maps", "workspace"],
    pricing: "Free - $4+/mo",
    targetUser: "both",
  },
  {
    id: "motion",
    name: "Motion",
    description: "AI-powered calendar and task manager that automatically schedules your work.",
    category: "productivity",
    features: ["Auto-scheduling", "Task management", "Calendar", "AI planning"],
    url: "https://www.usemotion.com",
    keywords: ["calendar", "scheduling", "tasks", "ai", "productivity"],
    pricing: "$19+/mo",
    targetUser: "both",
  },
  {
    id: "reclaim",
    name: "Reclaim.ai",
    description: "AI calendar assistant that automatically schedules tasks, habits, and meetings.",
    category: "productivity",
    features: ["Smart scheduling", "Habits", "Task scheduling", "Meeting optimization"],
    url: "https://reclaim.ai",
    keywords: ["calendar", "scheduling", "habits", "ai", "time"],
    pricing: "Free - $10+/mo",
    targetUser: "both",
  },
  {
    id: "superhuman",
    name: "Superhuman",
    description: "AI-powered email client with smart sorting, snippets, and instant reply suggestions.",
    category: "productivity",
    features: ["Smart inbox", "Snippets", "AI replies", "Speed"],
    url: "https://superhuman.com",
    keywords: ["email", "inbox", "ai", "productivity", "fast"],
    pricing: "$30/mo",
    targetUser: "both",
  },

  // ============================================
  // FINANCE & ACCOUNTING (10 tools)
  // ============================================
  {
    id: "quickbooks",
    name: "QuickBooks Online",
    description: "Accounting software with AI-powered categorization, invoicing, and financial insights.",
    category: "finance",
    features: ["AI categorization", "Invoicing", "Expense tracking", "Reports"],
    url: "https://quickbooks.intuit.com",
    keywords: ["accounting", "invoicing", "expenses", "bookkeeping", "finance"],
    pricing: "$30+/mo",
    targetUser: "smb",
  },
  {
    id: "xero",
    name: "Xero",
    description: "Cloud accounting with AI bank reconciliation, invoicing, and real-time financials.",
    category: "finance",
    features: ["Bank reconciliation", "Invoicing", "Payroll", "Reports"],
    url: "https://www.xero.com",
    keywords: ["accounting", "finance", "invoicing", "bookkeeping", "cloud"],
    pricing: "$15+/mo",
    targetUser: "smb",
  },
  {
    id: "freshbooks",
    name: "FreshBooks",
    description: "Invoicing and accounting software with AI-powered expense categorization for freelancers.",
    category: "finance",
    features: ["Invoicing", "Expense tracking", "Time tracking", "Reports"],
    url: "https://www.freshbooks.com",
    keywords: ["invoicing", "accounting", "freelance", "expenses", "time"],
    pricing: "$15+/mo",
    targetUser: "smb",
  },
  {
    id: "wave",
    name: "Wave",
    description: "Free accounting and invoicing software with AI receipt scanning for small businesses.",
    category: "finance",
    features: ["Free accounting", "Invoicing", "Receipt scanning", "Reports"],
    url: "https://www.waveapps.com",
    keywords: ["accounting", "free", "invoicing", "small business", "receipts"],
    pricing: "Free",
    targetUser: "smb",
  },
  {
    id: "expensify",
    name: "Expensify",
    description: "AI-powered expense management with receipt scanning and automatic report creation.",
    category: "finance",
    features: ["Receipt scanning", "Auto-reports", "Mileage tracking", "Corporate cards"],
    url: "https://www.expensify.com",
    keywords: ["expenses", "receipts", "reports", "finance", "business"],
    pricing: "$5+/user/mo",
    targetUser: "smb",
  },
  {
    id: "mint",
    name: "Mint",
    description: "Personal finance app with AI-powered budgeting, bill tracking, and financial insights.",
    category: "personal-finance",
    features: ["Budgeting", "Bill tracking", "Credit monitoring", "Goals"],
    url: "https://mint.intuit.com",
    keywords: ["budgeting", "personal finance", "bills", "credit", "money"],
    pricing: "Free",
    targetUser: "individual",
  },
  {
    id: "ynab",
    name: "YNAB",
    description: "Budgeting app with AI-powered insights to help you give every dollar a job.",
    category: "personal-finance",
    features: ["Zero-based budgeting", "Goals", "Reports", "Bank sync"],
    url: "https://www.youneedabudget.com",
    keywords: ["budgeting", "personal finance", "money", "savings", "goals"],
    pricing: "$14.99/mo",
    targetUser: "individual",
  },
  {
    id: "copilot-money",
    name: "Copilot Money",
    description: "AI-powered personal finance app with beautiful insights and subscription tracking.",
    category: "personal-finance",
    features: ["AI insights", "Subscription tracking", "Investments", "Goals"],
    url: "https://copilot.money",
    keywords: ["personal finance", "budgeting", "subscriptions", "investments", "ai"],
    pricing: "$9.99/mo",
    targetUser: "individual",
  },
  {
    id: "bench",
    name: "Bench",
    description: "AI-assisted bookkeeping service with dedicated bookkeepers and financial insights.",
    category: "finance",
    features: ["Bookkeeping", "Financial statements", "Tax prep", "Insights"],
    url: "https://bench.co",
    keywords: ["bookkeeping", "accounting", "tax", "finance", "service"],
    pricing: "$249+/mo",
    targetUser: "smb",
  },
  {
    id: "pilot",
    name: "Pilot",
    description: "Bookkeeping, tax, and CFO services for startups with AI-powered financial management.",
    category: "finance",
    features: ["Bookkeeping", "Tax", "CFO services", "R&D credits"],
    url: "https://pilot.com",
    keywords: ["bookkeeping", "tax", "startup", "cfo", "finance"],
    pricing: "$499+/mo",
    targetUser: "smb",
  },

  // ============================================
  // HR & HIRING (10 tools)
  // ============================================
  {
    id: "workable",
    name: "Workable",
    description: "AI-powered recruiting platform with sourcing, screening, and applicant tracking.",
    category: "hr-hiring",
    features: ["AI sourcing", "Screening", "ATS", "Interview scheduling"],
    url: "https://www.workable.com",
    keywords: ["recruiting", "hiring", "ats", "hr", "candidates"],
    pricing: "$99+/mo",
    targetUser: "smb",
  },
  {
    id: "lever",
    name: "Lever",
    description: "Talent acquisition platform with AI-powered candidate matching and DEI analytics.",
    category: "hr-hiring",
    features: ["Candidate matching", "DEI analytics", "CRM", "Analytics"],
    url: "https://www.lever.co",
    keywords: ["recruiting", "hiring", "dei", "ats", "talent"],
    pricing: "Custom",
    targetUser: "smb",
  },
  {
    id: "greenhouse",
    name: "Greenhouse",
    description: "Recruiting software with AI-powered screening and structured hiring processes.",
    category: "hr-hiring",
    features: ["Structured hiring", "AI screening", "Onboarding", "Analytics"],
    url: "https://www.greenhouse.io",
    keywords: ["recruiting", "hiring", "ats", "onboarding", "hr"],
    pricing: "Custom",
    targetUser: "smb",
  },
  {
    id: "eightfold",
    name: "Eightfold AI",
    description: "AI talent intelligence platform with skills-based matching and diversity focus.",
    category: "hr-hiring",
    features: ["Skills matching", "Diversity", "Internal mobility", "Talent pool"],
    url: "https://eightfold.ai",
    keywords: ["talent", "ai", "diversity", "skills", "recruiting"],
    pricing: "Custom",
    targetUser: "smb",
  },
  {
    id: "textio",
    name: "Textio",
    description: "AI-powered writing platform for inclusive job descriptions and HR communications.",
    category: "hr-hiring",
    features: ["Inclusive writing", "Job descriptions", "Performance feedback", "Bias detection"],
    url: "https://textio.com",
    keywords: ["writing", "job descriptions", "dei", "hr", "inclusive"],
    pricing: "Custom",
    targetUser: "smb",
  },
  {
    id: "gusto",
    name: "Gusto",
    description: "All-in-one payroll and HR platform with AI-powered compliance and benefits management.",
    category: "hr-hiring",
    features: ["Payroll", "Benefits", "Compliance", "Hiring"],
    url: "https://gusto.com",
    keywords: ["payroll", "hr", "benefits", "compliance", "small business"],
    pricing: "$40+/mo",
    targetUser: "smb",
  },
  {
    id: "bamboohr",
    name: "BambooHR",
    description: "HR software with AI-powered analytics, applicant tracking, and employee management.",
    category: "hr-hiring",
    features: ["ATS", "Employee data", "Time tracking", "Analytics"],
    url: "https://www.bamboohr.com",
    keywords: ["hr", "employee", "ats", "analytics", "management"],
    pricing: "Custom",
    targetUser: "smb",
  },
  {
    id: "rippling",
    name: "Rippling",
    description: "Unified workforce platform with AI-powered HR, IT, and finance management.",
    category: "hr-hiring",
    features: ["HR", "IT", "Payroll", "Device management"],
    url: "https://www.rippling.com",
    keywords: ["hr", "payroll", "it", "workforce", "management"],
    pricing: "$8+/user/mo",
    targetUser: "smb",
  },
  {
    id: "deel",
    name: "Deel",
    description: "Global payroll and compliance platform with AI-powered contractor management.",
    category: "hr-hiring",
    features: ["Global payroll", "Compliance", "Contractors", "EOR"],
    url: "https://www.deel.com",
    keywords: ["global", "payroll", "contractors", "compliance", "hr"],
    pricing: "$49+/mo",
    targetUser: "smb",
  },
  {
    id: "lattice",
    name: "Lattice",
    description: "People management platform with AI-powered performance reviews and engagement surveys.",
    category: "hr-hiring",
    features: ["Performance", "Engagement", "Goals", "Analytics"],
    url: "https://lattice.com",
    keywords: ["performance", "hr", "engagement", "goals", "reviews"],
    pricing: "$11+/user/mo",
    targetUser: "smb",
  },

  // ============================================
  // SOCIAL MEDIA (10 tools)
  // ============================================
  {
    id: "hootsuite",
    name: "Hootsuite",
    description: "Social media management platform with AI-powered scheduling and analytics.",
    category: "social-media",
    features: ["Scheduling", "Analytics", "Team collaboration", "Listening"],
    url: "https://www.hootsuite.com",
    keywords: ["social media", "scheduling", "analytics", "management", "marketing"],
    pricing: "$99+/mo",
    targetUser: "smb",
  },
  {
    id: "buffer",
    name: "Buffer",
    description: "Social media scheduler with AI-powered content suggestions and analytics.",
    category: "social-media",
    features: ["Scheduling", "AI suggestions", "Analytics", "Multi-platform"],
    url: "https://buffer.com",
    keywords: ["social media", "scheduling", "content", "analytics", "marketing"],
    pricing: "Free - $6+/mo",
    targetUser: "both",
  },
  {
    id: "sprout-social",
    name: "Sprout Social",
    description: "Social media management with AI-powered publishing, analytics, and listening.",
    category: "social-media",
    features: ["Publishing", "Analytics", "Listening", "CRM"],
    url: "https://sproutsocial.com",
    keywords: ["social media", "analytics", "listening", "management", "enterprise"],
    pricing: "$199+/mo",
    targetUser: "smb",
  },
  {
    id: "later",
    name: "Later",
    description: "Visual social media scheduler with AI-powered best time to post recommendations.",
    category: "social-media",
    features: ["Visual planner", "Best time to post", "Linkin.bio", "Analytics"],
    url: "https://later.com",
    keywords: ["instagram", "social media", "scheduling", "visual", "marketing"],
    pricing: "Free - $18+/mo",
    targetUser: "both",
  },
  {
    id: "ocoya",
    name: "Ocoya",
    description: "AI-powered social media assistant for content creation, scheduling, and copywriting.",
    category: "social-media",
    features: ["AI copywriting", "Scheduling", "Graphics", "Multi-platform"],
    url: "https://www.ocoya.com",
    keywords: ["social media", "ai", "copywriting", "scheduling", "content"],
    pricing: "$15+/mo",
    targetUser: "both",
  },
  {
    id: "taplio",
    name: "Taplio",
    description: "AI-powered LinkedIn growth tool for content creation and audience building.",
    category: "social-media",
    features: ["LinkedIn AI", "Content ideas", "Analytics", "Scheduling"],
    url: "https://taplio.com",
    keywords: ["linkedin", "social media", "ai", "growth", "content"],
    pricing: "$49+/mo",
    targetUser: "both",
  },
  {
    id: "vista-social",
    name: "Vista Social",
    description: "Social media management with AI content generation and advanced scheduling.",
    category: "social-media",
    features: ["AI content", "Scheduling", "Analytics", "Reviews management"],
    url: "https://vistasocial.com",
    keywords: ["social media", "ai", "scheduling", "management", "analytics"],
    pricing: "$15+/mo",
    targetUser: "smb",
  },
  {
    id: "predis",
    name: "Predis.ai",
    description: "AI social media content generator for posts, carousels, and video clips.",
    category: "social-media",
    features: ["AI content", "Carousels", "Videos", "Hashtags"],
    url: "https://predis.ai",
    keywords: ["social media", "ai", "content", "videos", "carousels"],
    pricing: "Free - $29+/mo",
    targetUser: "both",
  },
  {
    id: "brandwatch",
    name: "Brandwatch",
    description: "Social listening and analytics platform with AI-powered insights and reporting.",
    category: "social-media",
    features: ["Social listening", "Analytics", "Influencer tracking", "Reporting"],
    url: "https://www.brandwatch.com",
    keywords: ["social listening", "analytics", "monitoring", "insights", "brand"],
    pricing: "Custom",
    targetUser: "smb",
  },
  {
    id: "mention",
    name: "Mention",
    description: "Media monitoring tool with AI-powered brand tracking across social and web.",
    category: "social-media",
    features: ["Brand monitoring", "Social listening", "Alerts", "Analytics"],
    url: "https://mention.com",
    keywords: ["monitoring", "brand", "social", "mentions", "alerts"],
    pricing: "$41+/mo",
    targetUser: "smb",
  },

  // ============================================
  // E-COMMERCE (8 tools)
  // ============================================
  {
    id: "shopify",
    name: "Shopify Magic",
    description: "E-commerce platform with AI-powered product descriptions, images, and store optimization.",
    category: "ecommerce",
    features: ["AI descriptions", "Store builder", "Payments", "Inventory"],
    url: "https://www.shopify.com",
    keywords: ["ecommerce", "online store", "products", "selling", "ai"],
    pricing: "$29+/mo",
    targetUser: "smb",
  },
  {
    id: "woocommerce-ai",
    name: "WooCommerce AI",
    description: "WordPress e-commerce with AI-powered product recommendations and inventory management.",
    category: "ecommerce",
    features: ["Product recommendations", "Inventory", "WordPress", "Extensions"],
    url: "https://woocommerce.com",
    keywords: ["ecommerce", "wordpress", "products", "selling", "open source"],
    pricing: "Free (hosting extra)",
    targetUser: "smb",
  },
  {
    id: "bigcommerce",
    name: "BigCommerce",
    description: "E-commerce platform with AI-powered search, recommendations, and marketing tools.",
    category: "ecommerce",
    features: ["AI search", "Recommendations", "Multi-channel", "B2B"],
    url: "https://www.bigcommerce.com",
    keywords: ["ecommerce", "b2b", "enterprise", "multi-channel", "selling"],
    pricing: "$29+/mo",
    targetUser: "smb",
  },
  {
    id: "nosto",
    name: "Nosto",
    description: "AI-powered personalization platform for e-commerce product recommendations.",
    category: "ecommerce",
    features: ["Personalization", "Recommendations", "Segmentation", "A/B testing"],
    url: "https://www.nosto.com",
    keywords: ["personalization", "ecommerce", "recommendations", "ai", "retail"],
    pricing: "Custom",
    targetUser: "smb",
  },
  {
    id: "yotpo",
    name: "Yotpo",
    description: "E-commerce marketing platform with AI-powered reviews, loyalty, and SMS marketing.",
    category: "ecommerce",
    features: ["Reviews", "Loyalty", "SMS", "UGC"],
    url: "https://www.yotpo.com",
    keywords: ["reviews", "loyalty", "ecommerce", "marketing", "sms"],
    pricing: "Free - Custom",
    targetUser: "smb",
  },
  {
    id: "rebuy",
    name: "Rebuy",
    description: "AI-powered personalization for Shopify with upsells, cross-sells, and smart cart.",
    category: "ecommerce",
    features: ["Upsells", "Cross-sells", "Smart cart", "Personalization"],
    url: "https://www.rebuyengine.com",
    keywords: ["shopify", "upsell", "personalization", "cart", "ecommerce"],
    pricing: "$99+/mo",
    targetUser: "smb",
  },
  {
    id: "privy",
    name: "Privy",
    description: "E-commerce marketing platform with AI-powered popups, email, and SMS for Shopify.",
    category: "ecommerce",
    features: ["Popups", "Email", "SMS", "Cart abandonment"],
    url: "https://www.privy.com",
    keywords: ["popups", "email", "sms", "ecommerce", "shopify"],
    pricing: "Free - $30+/mo",
    targetUser: "smb",
  },
  {
    id: "gorgias",
    name: "Gorgias",
    description: "E-commerce customer service platform with AI-powered automation and order management.",
    category: "ecommerce",
    features: ["AI automation", "Order management", "Multi-channel", "Macros"],
    url: "https://www.gorgias.com",
    keywords: ["customer service", "ecommerce", "helpdesk", "shopify", "support"],
    pricing: "$10+/mo",
    targetUser: "smb",
  },

  // ============================================
  // EDUCATION & LEARNING (8 tools)
  // ============================================
  {
    id: "duolingo",
    name: "Duolingo",
    description: "AI-powered language learning app with personalized lessons and gamification.",
    category: "education",
    features: ["40+ languages", "AI personalization", "Gamification", "Speech recognition"],
    url: "https://www.duolingo.com",
    keywords: ["language", "learning", "education", "ai", "languages"],
    pricing: "Free - $12.99/mo",
    targetUser: "individual",
  },
  {
    id: "coursera",
    name: "Coursera",
    description: "Online learning platform with AI-powered course recommendations from top universities.",
    category: "education",
    features: ["University courses", "AI recommendations", "Certificates", "Degrees"],
    url: "https://www.coursera.org",
    keywords: ["courses", "learning", "education", "university", "certificates"],
    pricing: "Free - $49+/mo",
    targetUser: "individual",
  },
  {
    id: "khan-academy",
    name: "Khan Academy",
    description: "Free learning platform with AI-powered tutoring across math, science, and more.",
    category: "education",
    features: ["Free courses", "AI tutor", "Personalized learning", "K-12"],
    url: "https://www.khanacademy.org",
    keywords: ["education", "free", "learning", "math", "science"],
    pricing: "Free",
    targetUser: "individual",
  },
  {
    id: "quizlet",
    name: "Quizlet",
    description: "AI-powered study platform with flashcards, practice tests, and personalized learning.",
    category: "education",
    features: ["Flashcards", "AI tutor", "Practice tests", "Study games"],
    url: "https://quizlet.com",
    keywords: ["flashcards", "study", "learning", "education", "ai"],
    pricing: "Free - $7.99/mo",
    targetUser: "individual",
  },
  {
    id: "brainly",
    name: "Brainly",
    description: "AI homework helper and learning community with step-by-step explanations.",
    category: "education",
    features: ["AI explanations", "Community help", "Math solver", "Tutoring"],
    url: "https://brainly.com",
    keywords: ["homework", "learning", "education", "tutoring", "ai"],
    pricing: "Free - $24/yr",
    targetUser: "individual",
  },
  {
    id: "socratic",
    name: "Socratic by Google",
    description: "AI-powered homework helper that explains concepts with visual learning resources.",
    category: "education",
    features: ["Visual explanations", "Camera input", "Multiple subjects", "Free"],
    url: "https://socratic.org",
    keywords: ["homework", "education", "ai", "learning", "google"],
    pricing: "Free",
    targetUser: "individual",
  },
  {
    id: "photomath",
    name: "Photomath",
    description: "AI math solver that scans problems and provides step-by-step solutions.",
    category: "education",
    features: ["Camera input", "Step-by-step", "Graphing", "Multiple methods"],
    url: "https://photomath.com",
    keywords: ["math", "solver", "education", "learning", "ai"],
    pricing: "Free - $9.99/mo",
    targetUser: "individual",
  },
  {
    id: "synthesis",
    name: "Synthesis",
    description: "AI-powered learning program teaching critical thinking through collaborative games.",
    category: "education",
    features: ["Critical thinking", "Team games", "Live sessions", "Ages 6-14"],
    url: "https://www.synthesis.com",
    keywords: ["education", "kids", "thinking", "games", "learning"],
    pricing: "$180/mo",
    targetUser: "individual",
  },

  // ============================================
  // RESEARCH & ANALYSIS (8 tools)
  // ============================================
  {
    id: "perplexity",
    name: "Perplexity AI",
    description: "AI-powered research assistant with cited sources and real-time information.",
    category: "research",
    features: ["Cited sources", "Real-time", "Follow-up questions", "Pro Search"],
    url: "https://www.perplexity.ai",
    keywords: ["research", "search", "ai", "citations", "information"],
    pricing: "Free - $20/mo",
    targetUser: "both",
  },
  {
    id: "elicit",
    name: "Elicit",
    description: "AI research assistant that finds and summarizes academic papers automatically.",
    category: "research",
    features: ["Paper search", "Summarization", "Data extraction", "Citations"],
    url: "https://elicit.org",
    keywords: ["research", "academic", "papers", "ai", "science"],
    pricing: "Free - $10+/mo",
    targetUser: "both",
  },
  {
    id: "consensus",
    name: "Consensus",
    description: "AI-powered search engine for scientific research with evidence-based answers.",
    category: "research",
    features: ["Scientific search", "Evidence-based", "Citations", "Summaries"],
    url: "https://consensus.app",
    keywords: ["research", "science", "evidence", "academic", "papers"],
    pricing: "Free - $8.99/mo",
    targetUser: "both",
  },
  {
    id: "scholarai",
    name: "ScholarAI",
    description: "AI research assistant for exploring scientific literature with deep understanding.",
    category: "research",
    features: ["Literature search", "PDF analysis", "Citations", "Summaries"],
    url: "https://www.scholarai.io",
    keywords: ["research", "academic", "literature", "papers", "ai"],
    pricing: "Free - Custom",
    targetUser: "both",
  },
  {
    id: "notebooklm",
    name: "NotebookLM",
    description: "Google's AI research assistant that grounds insights in your own documents.",
    category: "research",
    features: ["Document analysis", "Source-grounded", "Summaries", "Q&A"],
    url: "https://notebooklm.google.com",
    keywords: ["research", "documents", "google", "ai", "notes"],
    pricing: "Free",
    targetUser: "both",
  },
  {
    id: "scite",
    name: "Scite",
    description: "AI-powered citation analysis showing how papers support or contrast each other.",
    category: "research",
    features: ["Smart citations", "Support/contrast", "Reference checking", "Alerts"],
    url: "https://scite.ai",
    keywords: ["citations", "research", "academic", "papers", "analysis"],
    pricing: "Free - $20/mo",
    targetUser: "both",
  },
  {
    id: "semantic-scholar",
    name: "Semantic Scholar",
    description: "AI-powered academic search engine with paper recommendations and summaries.",
    category: "research",
    features: ["AI summaries", "Recommendations", "Citation graphs", "Alerts"],
    url: "https://www.semanticscholar.org",
    keywords: ["academic", "research", "papers", "search", "ai"],
    pricing: "Free",
    targetUser: "both",
  },
  {
    id: "connected-papers",
    name: "Connected Papers",
    description: "Visual tool for exploring academic paper connections and building reading lists.",
    category: "research",
    features: ["Visual graphs", "Paper connections", "Prior/derivative work", "Reading lists"],
    url: "https://www.connectedpapers.com",
    keywords: ["research", "papers", "visual", "academic", "connections"],
    pricing: "Free - $3+/mo",
    targetUser: "both",
  },

  // ============================================
  // DEVELOPMENT & CODING (10 tools)
  // ============================================
  {
    id: "github-copilot",
    name: "GitHub Copilot",
    description: "AI pair programmer that suggests code, functions, and entire algorithms as you type.",
    category: "development",
    features: ["Code suggestions", "Multi-language", "IDE integration", "Chat"],
    url: "https://github.com/features/copilot",
    keywords: ["coding", "programming", "ai", "developer", "github"],
    pricing: "$10+/mo",
    targetUser: "both",
  },
  {
    id: "cursor",
    name: "Cursor",
    description: "AI-first code editor with intelligent code generation and natural language editing.",
    category: "development",
    features: ["AI editing", "Code generation", "Chat", "Multi-file"],
    url: "https://cursor.sh",
    keywords: ["coding", "editor", "ai", "programming", "developer"],
    pricing: "Free - $20/mo",
    targetUser: "both",
  },
  {
    id: "replit-ai",
    name: "Replit AI",
    description: "AI-powered coding platform with code generation, explanation, and deployment.",
    category: "development",
    features: ["Code generation", "Explanation", "Deployment", "Collaboration"],
    url: "https://replit.com",
    keywords: ["coding", "ide", "ai", "deployment", "collaboration"],
    pricing: "Free - $20+/mo",
    targetUser: "both",
  },
  {
    id: "tabnine",
    name: "Tabnine",
    description: "AI code assistant with personalized completions trained on your codebase.",
    category: "development",
    features: ["Personalized AI", "Privacy", "Multi-language", "IDE plugins"],
    url: "https://www.tabnine.com",
    keywords: ["coding", "ai", "completions", "programming", "privacy"],
    pricing: "Free - $12/mo",
    targetUser: "both",
  },
  {
    id: "codeium",
    name: "Codeium",
    description: "Free AI coding assistant with autocomplete, search, and chat for developers.",
    category: "development",
    features: ["Free", "Autocomplete", "Search", "Chat"],
    url: "https://codeium.com",
    keywords: ["coding", "ai", "free", "autocomplete", "developer"],
    pricing: "Free - $10/mo",
    targetUser: "both",
  },
  {
    id: "sourcegraph-cody",
    name: "Sourcegraph Cody",
    description: "AI coding assistant with codebase-aware answers and code generation.",
    category: "development",
    features: ["Codebase context", "Code generation", "Explanations", "IDE integration"],
    url: "https://sourcegraph.com/cody",
    keywords: ["coding", "ai", "codebase", "search", "developer"],
    pricing: "Free - $9/mo",
    targetUser: "both",
  },
  {
    id: "pieces",
    name: "Pieces for Developers",
    description: "AI-powered code snippet manager with intelligent organization and context.",
    category: "development",
    features: ["Snippet management", "AI context", "Search", "Integrations"],
    url: "https://pieces.app",
    keywords: ["snippets", "coding", "ai", "organization", "developer"],
    pricing: "Free",
    targetUser: "both",
  },
  {
    id: "codegpt",
    name: "CodeGPT",
    description: "AI coding assistant for VSCode with code explanation and generation.",
    category: "development",
    features: ["Code explanation", "Generation", "VSCode", "Multi-language"],
    url: "https://www.codegpt.co",
    keywords: ["coding", "vscode", "ai", "explanation", "generation"],
    pricing: "Free - $10/mo",
    targetUser: "both",
  },
  {
    id: "blackbox",
    name: "Blackbox AI",
    description: "AI code assistant with autocomplete, code search, and code generation.",
    category: "development",
    features: ["Autocomplete", "Code search", "Generation", "Multi-IDE"],
    url: "https://www.blackbox.ai",
    keywords: ["coding", "ai", "autocomplete", "search", "developer"],
    pricing: "Free - $13.99/mo",
    targetUser: "both",
  },
  {
    id: "amazon-codewhisperer",
    name: "Amazon CodeWhisperer",
    description: "AI coding companion from AWS with security scanning and code suggestions.",
    category: "development",
    features: ["Code suggestions", "Security scanning", "AWS integration", "Multi-language"],
    url: "https://aws.amazon.com/codewhisperer/",
    keywords: ["coding", "aws", "ai", "security", "developer"],
    pricing: "Free - $19/mo",
    targetUser: "both",
  },
];

// Categories for filtering
export const categories = [
  { id: "customer-support", name: "Customer Support", icon: "headphones" },
  { id: "sales-crm", name: "Sales & CRM", icon: "chart-line" },
  { id: "marketing-seo", name: "Marketing & SEO", icon: "bullhorn" },
  { id: "writing", name: "Writing & Content", icon: "pen" },
  { id: "design", name: "Design & Creative", icon: "palette" },
  { id: "video-audio", name: "Video & Audio", icon: "video" },
  { id: "productivity", name: "Productivity", icon: "rocket" },
  { id: "finance", name: "Finance & Accounting", icon: "calculator" },
  { id: "personal-finance", name: "Personal Finance", icon: "wallet" },
  { id: "hr-hiring", name: "HR & Hiring", icon: "users" },
  { id: "social-media", name: "Social Media", icon: "share-alt" },
  { id: "ecommerce", name: "E-commerce", icon: "shopping-cart" },
  { id: "education", name: "Education", icon: "graduation-cap" },
  { id: "research", name: "Research & Analysis", icon: "search" },
  { id: "development", name: "Development & Coding", icon: "code" },
];

// Match result interface
export interface MatchResult {
  category: string;
  tools: AITool[];
  score: number;
}

// Matching function for wizard results
export function matchTools(
  userPath: "smb" | "individual",
  selectedKeywords: string[],
  selectedCategories: string[] = []
): MatchResult[] {
  const results: Map<string, { tools: AITool[]; totalScore: number }> = new Map();

  aiTools.forEach((tool) => {
    // Filter by user path
    if (tool.targetUser !== "both" && tool.targetUser !== userPath) {
      return;
    }

    // Calculate keyword match score
    let keywordScore = 0;
    const lowerKeywords = selectedKeywords.map((k) => k.toLowerCase());

    tool.keywords.forEach((toolKeyword) => {
      const lowerToolKeyword = toolKeyword.toLowerCase();
      lowerKeywords.forEach((selectedKeyword) => {
        if (
          lowerToolKeyword.includes(selectedKeyword) ||
          selectedKeyword.includes(lowerToolKeyword)
        ) {
          keywordScore += 10;
        }
      });
    });

    // Check category match
    if (selectedCategories.length > 0) {
      if (selectedCategories.includes(tool.category)) {
        keywordScore += 20;
      }
    }

    // Check feature matches
    tool.features.forEach((feature) => {
      const lowerFeature = feature.toLowerCase();
      lowerKeywords.forEach((keyword) => {
        if (lowerFeature.includes(keyword) || keyword.includes(lowerFeature)) {
          keywordScore += 5;
        }
      });
    });

    // Check description matches
    const lowerDesc = tool.description.toLowerCase();
    lowerKeywords.forEach((keyword) => {
      if (lowerDesc.includes(keyword)) {
        keywordScore += 3;
      }
    });

    if (keywordScore > 0) {
      const existingCategory = results.get(tool.category);
      const toolWithScore = { ...tool, fitScore: Math.min(keywordScore, 100) };

      if (existingCategory) {
        existingCategory.tools.push(toolWithScore);
        existingCategory.totalScore += keywordScore;
      } else {
        results.set(tool.category, {
          tools: [toolWithScore],
          totalScore: keywordScore,
        });
      }
    }
  });

  // Convert to array and sort
  const matchResults: MatchResult[] = [];
  results.forEach((value, category) => {
    // Sort tools within category by score
    value.tools.sort((a, b) => (b.fitScore || 0) - (a.fitScore || 0));
    
    matchResults.push({
      category,
      tools: value.tools.slice(0, 5), // Top 5 per category
      score: value.totalScore,
    });
  });

  // Sort categories by total score
  matchResults.sort((a, b) => b.score - a.score);

  return matchResults.slice(0, 6); // Return top 6 categories
}

// Get tools by category
export function getToolsByCategory(categoryId: string): AITool[] {
  return aiTools.filter((tool) => tool.category === categoryId);
}

// Search tools
export function searchTools(query: string): AITool[] {
  const lowerQuery = query.toLowerCase();
  return aiTools.filter(
    (tool) =>
      tool.name.toLowerCase().includes(lowerQuery) ||
      tool.description.toLowerCase().includes(lowerQuery) ||
      tool.keywords.some((k) => k.toLowerCase().includes(lowerQuery))
  );
}

// Problem/keyword mapping for business matching
const problemKeywordMap: Record<string, string[]> = {
  "customer-support": ["customer service", "support", "chat", "chatbot", "help desk", "tickets"],
  "lead-generation": ["leads", "crm", "sales", "prospecting", "outreach"],
  "content-creation": ["content", "writing", "copywriting", "blog", "articles"],
  "marketing": ["marketing", "seo", "ads", "campaigns", "email marketing"],
  "social-media": ["social media", "scheduling", "posts", "instagram", "linkedin"],
  "finance": ["accounting", "invoicing", "expenses", "bookkeeping", "finance"],
  "hr": ["hiring", "recruiting", "hr", "payroll", "employees"],
  "productivity": ["productivity", "automation", "workflow", "tasks", "projects"],
  "design": ["design", "graphics", "images", "branding", "creative"],
  "video": ["video", "audio", "presentations", "voice", "transcription"],
  "ecommerce": ["ecommerce", "online store", "products", "selling", "shopify"],
  "analytics": ["analytics", "data", "insights", "reporting", "tracking"],
};

// Intent/keyword mapping for individual matching
const intentKeywordMap: Record<string, string[]> = {
  "learning": ["education", "learning", "courses", "study", "skills"],
  "writing": ["writing", "content", "grammar", "editing", "creative writing"],
  "productivity": ["productivity", "tasks", "calendar", "notes", "organization"],
  "finance": ["budgeting", "personal finance", "money", "savings", "investments"],
  "coding": ["coding", "programming", "developer", "code", "software"],
  "design": ["design", "graphics", "art", "creative", "images"],
  "research": ["research", "academic", "papers", "analysis", "information"],
  "health": ["health", "fitness", "wellness", "meditation", "mental health"],
};

// Match tools for business users
export function matchToolsForBusiness(
  problems: string[],
  priorities: string[],
  budget: string,
  hoursPerWeek: number
): MatchResult {
  // Collect all relevant keywords based on problems and priorities
  const allKeywords: string[] = [];
  
  problems.forEach(problem => {
    const keywords = problemKeywordMap[problem] || [problem];
    allKeywords.push(...keywords);
  });
  
  priorities.forEach(priority => {
    const keywords = problemKeywordMap[priority] || [priority];
    allKeywords.push(...keywords);
  });

  // Add budget-based filtering keywords
  if (budget === "free" || budget === "low") {
    allKeywords.push("free", "affordable");
  }

  // Get matching results
  const results = matchTools("smb", allKeywords);
  
  // Find the best matching category
  if (results.length > 0) {
    const topResult = results[0];
    return {
      category: getCategoryName(topResult.category),
      tools: results.flatMap(r => r.tools).slice(0, 10),
      score: topResult.score,
    };
  }

  // Fallback to productivity if no matches
  return {
    category: "Productivity",
    tools: aiTools.filter(t => t.targetUser !== "individual").slice(0, 10).map(t => ({ ...t, fitScore: 70 })),
    score: 70,
  };
}

// Match tools for individual users
export function matchToolsForIndividual(
  intents: string[],
  goals: string[]
): MatchResult {
  // Collect all relevant keywords based on intents and goals
  const allKeywords: string[] = [];
  
  intents.forEach(intent => {
    const keywords = intentKeywordMap[intent] || [intent];
    allKeywords.push(...keywords);
  });
  
  goals.forEach(goal => {
    allKeywords.push(goal);
  });

  // Get matching results
  const results = matchTools("individual", allKeywords);
  
  // Find the best matching category
  if (results.length > 0) {
    const topResult = results[0];
    return {
      category: getCategoryName(topResult.category),
      tools: results.flatMap(r => r.tools).slice(0, 10),
      score: topResult.score,
    };
  }

  // Fallback to personal productivity if no matches
  return {
    category: "Personal Productivity",
    tools: aiTools.filter(t => t.targetUser !== "smb").slice(0, 10).map(t => ({ ...t, fitScore: 70 })),
    score: 70,
  };
}

// Helper to get category display name
function getCategoryName(categoryId: string): string {
  const category = categories.find(c => c.id === categoryId);
  return category?.name || categoryId;
}
