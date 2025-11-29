# COARUS AI Design Guidelines

## Design Approach
**System**: Modern SaaS aesthetic inspired by Linear's clarity, Stripe's trustworthiness, and ProductHunt's discovery patterns. Clean, professional interface optimized for business decision-makers who value efficiency and credibility.

## Core Design Principles
1. **Professional Trust**: Clean layouts that signal reliability and expertise
2. **Scanning Efficiency**: Clear hierarchy enabling quick evaluation of recommendations
3. **Action-Oriented**: Prominent CTAs that guide users toward tool discovery
4. **Progressive Disclosure**: Simple entry, detailed results

---

## Typography
- **Primary Font**: Inter (Google Fonts) - clean, professional, excellent readability
- **Hierarchy**:
  - Hero headline: `text-5xl md:text-6xl font-bold`
  - Section headers: `text-3xl md:text-4xl font-semibold`
  - Tool names: `text-xl font-semibold`
  - Body text: `text-base` (16px)
  - Metadata/categories: `text-sm text-gray-600`

---

## Layout System
**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16, 20 (e.g., `p-4`, `gap-8`, `mt-12`, `py-20`)

**Container Strategy**:
- Hero/full-width sections: `max-w-7xl mx-auto px-6`
- Form containers: `max-w-2xl mx-auto`
- Results grid: `max-w-6xl mx-auto`

---

## Page Structure

### Landing/Home Page
**Hero Section** (80vh):
- Large, professional hero image showing diverse business professionals collaborating with technology (modern office, laptops, bright atmosphere)
- Centered headline: "Find the Perfect AI Tools for Your Business"
- Subheadline explaining value proposition (1-2 sentences)
- Primary CTA button with blurred background overlay
- Trust indicator: "Trusted by 500+ SMBs worldwide" with small logo strip

**How It Works** (3-column grid on desktop, stack on mobile):
- Icon + Title + Description for each step
- Steps: "Describe Your Need" → "Get Matched" → "Start Using AI"

**Featured Categories** (2x3 grid):
- Category cards with icon, name, tool count
- Categories: Marketing, Customer Service, Bookkeeping, Productivity, CRM, Project Management

**CTA Section**:
- Bold headline: "Ready to Transform Your Business?"
- Primary button leading to intake form
- Secondary text: "No signup required • Free recommendations"

### Intake Form Page
**Header**: Logo, simple nav, progress indicator (if multi-step in future)

**Form Container** (centered, `max-w-2xl`):
- Page title: "Tell Us About Your Needs"
- User type selection: Two large radio cards (SMB / Individual Professional)
- Need description textarea: Large, welcoming (min 4 rows), placeholder with examples
- Submit button: Full-width on mobile, fixed-width on desktop
- Helper text below: "The more specific, the better we can help"

### Results Page
**Results Header**:
- Matched category badge with icon
- Headline: "Recommended AI Tools for [Category]"
- Brief explanation of match

**Tool Cards Grid** (single column mobile, 2-column desktop using `md:grid-cols-2`, `gap-6`):
Each card includes:
- Tool name as prominent heading
- Category badge
- 2-3 sentence description
- Key features as bulleted list (3-4 items)
- "Visit Tool →" button with external link icon
- Subtle card borders with hover elevation

**Refinement Section** (bottom):
- "Not quite right?" prompt
- Button to go back and refine search
- Suggestion to try different keywords

---

## Component Library

### Buttons
- **Primary**: Solid with hover state, `px-8 py-3 text-lg font-semibold rounded-lg`
- **Secondary**: Outline variant
- **Link Buttons**: Underline on hover, arrow icons for external links

### Cards
- **Tool Cards**: White background, `border border-gray-200`, `rounded-xl`, `p-6`
- **Category Cards**: Hover effect with subtle shadow lift, icon at top
- **Radio Selection Cards**: Large clickable areas with border highlight when selected

### Form Inputs
- **Textarea**: `border-2`, focus ring, `rounded-lg`, generous padding
- **Radio Cards**: Full card selection area, visual active state

### Navigation
- **Header**: Sticky top, logo left, simple text links right, clean divider bottom
- **Footer**: 3-column layout (About, Resources, Contact), social links, copyright

---

## Animations
**Minimal, purposeful only**:
- Card hover: Subtle lift (`hover:shadow-lg transition-shadow`)
- Button hover: Slight scale (`hover:scale-105`)
- Form focus: Smooth border color transition
- Page transitions: Subtle fade-in for results

---

## Images

### Large Hero Image
**Placement**: Landing page hero section (full-width background)
**Description**: Professional photograph showing diverse small business team collaborating in modern workspace. Bright, optimistic lighting. Team members working on laptops with visible engagement. Should convey innovation, teamwork, and forward-thinking business approach. Modern office environment with plants, natural light, collaborative atmosphere.
**Treatment**: Subtle gradient overlay (dark to transparent, bottom to top) to ensure text readability

### Optional Section Images
**Features Section**: Small icon illustrations (use Font Awesome icons instead)
**Category Cards**: Icon-based, no photos needed

---

## Accessibility
- Minimum contrast ratio 4.5:1 for all text
- Focus indicators on all interactive elements
- Semantic HTML with proper heading hierarchy
- ARIA labels for icon-only buttons
- Form labels properly associated with inputs