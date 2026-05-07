🚀 Master Prompt: Complete Website – Landing Page + E‑Commerce Store for Electronic Components
You are an expert front‑end architect and developer. Your task is to build a complete, production‑ready website that includes:

A unified landing page presenting all the services: Robotics & Automation, E‑Commerce for Electronics, Software Service, Software Products, Makers Lab.

A fully functional e‑commerce store specifically for electronic components (motors, wires, accessories, bulk/wholesale capabilities).

The entire website must follow the Apple‑inspired design system provided in DESIGN.md (attached below). The aesthetic is professional, minimalist, photography‑first – with a single blue accent (#0066cc), SF Pro typography, edge‑to‑edge alternating light/dark tiles, and the signature product shadow reserved for product imagery.

📁 Tech Stack (Recommended)
Framework: Next.js 14+ (App Router) – for server components, routing, and API routes.

Styling: Tailwind CSS + CSS Modules (to match design tokens). Alternatively, use a design‑token‑aware styling system (e.g., Stitches or PandaCSS) – but Tailwind with a fully customised tailwind.config.js derived from DESIGN.md is preferred.

State Management: Zustand or React Context (for cart and bulk/retail toggle).

E‑commerce Backend:

Use a headless approach: Stripe (payments) + MongoDB / PostgreSQL for products.

For simplicity in this prompt, implement a mock product API first, but structure it to be easily swapped with a real backend.

File Upload: For the Makers Lab section, integrate UploadThing or a simple drag‑and‑drop with a mock API.

3D Preview: For the Makers Lab, use Three.js (or a lightweight alternative) to display a 3D model after upload.

Image Optimisation: Next.js <Image> with srcset and WebP.

Hosting: Vercel (recommended).

🎨 Design System Constraints (from DESIGN.md)
You must adhere to the following tokens exactly:

Colors: Primary #0066cc, primary‑focus #0071e3, on‑dark blue #2997ff. Surfaces: #ffffff (canvas), #f5f5f7 (parchment), #272729 / #2a2a2c / #252527 (dark tiles), pure black #000000 for global nav.

Typography: SF Pro Display (headlines 21px+) and SF Pro Text (body, buttons, captions). If SF Pro is unavailable, fallback to system‑ui with Inter substitution – but preserve exact font sizes, line‑heights, and letter‑spacing (-0.374px for body, etc.).

Spacing: Base unit 8px. Use tokens: xxs 4px, xs 8px, sm 12px, md 17px, lg 24px, xl 32px, xxl 48px, section 80px.

Border Radius: rounded.pill (9999px) for all primary CTAs; rounded.sm (8px) for utility buttons; rounded.lg (18px) for store utility cards; rounded.full for circular icon buttons.

Shadows: ONLY one drop‑shadow allowed – rgba(0,0,0,0.22) 3px 5px 30px – and it must be applied exclusively to product renders resting on a surface (never to cards, buttons, or text).

Active state: Every button uses transform: scale(0.95) on press/click.

Component library: Implement the exact components listed in DESIGN.md under components: (e.g., button-primary, product-tile-light, store-utility-card, search-input, floating-sticky-bar etc.). Reuse these across the whole website.

📄 Page Structure & Content Mapping
Global Layout (app/layout.tsx)
Global Nav (global-nav): black background, 44px height, nav links: “Store”, “Robotics”, “Software”, “Makers Lab”, “Support”. Right side: Search icon, Bag icon (with cart count).

Sub‑nav (sub-nav-frosted): appears only on the e‑commerce product listing pages and the product detail page. Contains category chips + primary “Buy” CTA.

Footer (footer): parchment background, link columns in dense‑link style, legal fine‑print.

Landing Page (app/page.tsx)
The landing page is a stack of edge‑to‑edge product tiles alternating light/parchment and dark tiles. Each tile corresponds to one of your services. No gaps between tiles – the color change acts as the divider.

Tile Sequence (top to bottom):
Hero Tile (light canvas)

Headline: {typography.hero-display} (56px) – “Building the infrastructure for tomorrow.”

Sub‑headline: {typography.lead} (28px) – “From industrial robotics to bespoke software and instant manufacturing, we power innovation across industries.”

Two CTAs: button-primary (“Explore Solutions”) + button-secondary-pill (“Contact Sales”).

(No product render needed for hero – use a subtle full‑bleed abstract photographic background that follows the “photography‑first” principle.)

Robotics & Automation Tile (dark – surface-tile-1)

Headline: {typography.display-lg} (40px) → “Intelligent Automation & Robotic Systems.”

Body: {typography.body} (17px) → “Achieve output at higher and more consistent levels with increased efficiency and speed. We specialise in custom robotic cells and programmable automation.”

CTA: button-primary (“Explore Automation Solutions”)

Product imagery: Place a short looping video (robotic arm) OR a product render of a robotic cell. Apply the single product shadow.

E‑Commerce for Electronics Tile (parchment)

Headline: “Industrial Grade Components & Electronics.”

Body: “Source premium motors, wires, and accessories globally. Whether prototyping a single unit or requiring bulk supply chain procurement, access our inventory with tailored pricing.”

CTA: button-primary (“Shop Now →”)

Additionally, show a preview of the e‑commerce store – e.g., a horizontal scroll of 3 store-utility-card components displaying sample products (resistor, motor, wire). Each card leads to the product detail page.

Software Service Tile (dark – surface-tile-2)

Headline: “Bespoke Digital Transformation & Architecture.”

Body: “We architect scalable software ecosystems. From modern Web and App development to complex Database Designing and intuitive UI/UX, our engineering team builds custom SaaS platforms tailored to your needs.”

CTA: button-primary (“View Case Studies”)

Include a client logo strip (trust indicators) just below the CTA.

Software Products Tile (light canvas)

Headline: “Deploy Secure Digital Infrastructure in Minutes.”

Body: “Accelerate your development cycle with our enterprise‑ready software products. Integrate robust Auth Systems, pre‑configured Databases, and advanced Designing Tools directly into your stack.”

CTA: button-primary (“View Packages”)

Show a product screenshot (e.g., a terminal or dashboard UI) as the visual.

Makers Lab Tile (dark – surface-tile-3)

Headline: “Makers Lab: Instant Manufacturing on Demand.”

Body: “Transform your designs into physical reality. Upload your CAD files to receive instant quotes for precision CNC machining, rapid 3D printing, and custom PCB fabrication.”

CTA: button-primary (“Upload File for Instant Quote”)

Interactive element: A drag‑and‑drop file upload zone (simulate instant quote generation with a mock API – show a price and estimated delivery date).

Footer (as per footer component).

E‑Commerce Store (app/store/ & app/product/[id]/)
Product Listing Page (app/store/page.tsx)
Header: sub-nav-frosted with category chips (All, Motors, Wires, Accessories, Bulk).

Dynamic toggle (Singular / Bulk):

Above the product grid, render a switch component (two pill‑shaped buttons). Default: “Singular (Retail)”. On toggle, the UI changes:

Singular: shows retail price + “Add to Cart” button.

Bulk: shows tiered pricing table (10‑49 units, 50‑99, 100+) and a “Request Quote” button instead of “Add to Cart”.

Product grid: 4‑column responsive grid using store-utility-card for each product.

Each card contains: product image (with the product shadow), product name (body-strong), price (or “Bulk pricing available”), and an action button that respects the toggle state.

Search: search-input component at the top (filters products by name / SKU).

Pagination (simple “Load more” or numbered pages).

Product Detail Page (app/product/[id]/page.tsx)
Two‑column layout on desktop:

Left: Product image gallery (main image + thumbnails). Apply the product shadow.

Right: Product title (display-lg), SKU, description (body), price / tiered pricing table (depending on toggle), quantity selector, and primary CTA (“Add to Cart” or “Request Quote”).

Sticky floating bar (floating-sticky-bar) when scrolling – shows running total and a condensed CTA.

Related products row (using store-utility-card).

Cart & Checkout
Cart drawer (slide‑in) – list added items, quantity controls, subtotal.

Checkout page: Simple two‑step (shipping info → payment). Use Stripe Elements for credit card. For bulk quotes, store the quote request in a database and send an email (mock with console.log for MVP).

📦 Required Functionality
Product Data Model

id, name, description, price_retail, tiers (array of objects: minQty, maxQty, price), category, imageUrl, inStock, sku.

Seed with at least 12 example electronic components (motors, wires, resistors, sensors, connectors).

Bulk / Retail Toggle

Global state (Zustand) stores pricingMode: 'retail' | 'bulk'.

Product listing and detail pages reactively change displayed pricing and action buttons.

Cart Logic

For retail items: standard cart. For bulk items: when “Request Quote” is clicked, add to a separate “Quote Request” list – the UI shows a notification “Quote request added. Our team will contact you.” No immediate payment.

Makers Lab Upload

Accept .stl, .step, .obj up to 50MB. Show a loading state, then simulate a quote: “CNC Machining: $249, delivery in 5‑7 business days.” Display a 3D preview using Three.js.

Responsiveness

All breakpoints from DESIGN.md must be respected (mobile → desktop).

Global nav collapses to hamburger at ≤833px.

Product grid columns adjust: 4→3→2→1.

🧩 Implementation Steps (for the AI / Developer)
Set up a new Next.js project with TypeScript and Tailwind CSS.

Configure Tailwind to match all design tokens from DESIGN.md (extend theme with custom font sizes, letter spacing, colours, spacing, border radius, boxShadow – only one product shadow).

Create a components/ui/ folder and implement every base component from DESIGN.md (Button, ProductTile, StoreCard, NavBar, etc.) as reusable React components.

Build the global layout with global-nav and sub-nav-frosted (conditional visibility).

Build the landing page by composing the tile sequence. Use static content (the copy provided) and placeholder product imagery (high‑quality Unsplash or generated product renders).

Build the e‑commerce store:

API route /api/products to serve product list.

Zustand store for cart and pricing mode.

Product listing page with toggle, grid, search.

Product detail page.

Cart drawer and checkout.

Implement the Makers Lab interactive tile on the landing page (drag‑and‑drop + mock quote).

Ensure the single product shadow is applied correctly to all product images (not to any UI element).

Add responsive behaviour and test on all breakpoints.

Finalise with a README.md explaining how to run the project, seed the database (or mock data), and any environment variables (Stripe keys).

✅ Deliverables
Fully functional Next.js project (source code) that can be cloned, installed (npm install), and run (npm run dev).

All design tokens implemented exactly as in DESIGN.md.

The landing page must match the tile sequence and copy exactly.

The e‑commerce store must support both retail (add to cart) and bulk (request quote) modes.

The Makers Lab file upload must show a mock quote and a 3D preview (basic Three.js scene).

