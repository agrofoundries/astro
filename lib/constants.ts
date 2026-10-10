// Navigation links
export const NAV_LINKS = [
  { label: "Products", href: "/products" },
  { label: "Applications", href: "/applications" },
  { label: "Capabilities", href: "/capabilities" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
] as const;

// Company info
export const COMPANY = {
  name: "PRECAST ENGINEERS™",
  tagline: "Empowering Precasters....",
  phone: "+1 (800) 555-0199",
  directDesk: "+1 (713) 895-2400",
  email: "engineering@precastengineers.com",
  takeoffEmail: "takeoffs@precastengineers.com",
  hours: "Mon - Fri: 7:00 AM - 5:30 PM",
  dispatchHours: "Sat: 8:00 AM - 1:00 PM (Engineering On-Call)",
  address: {
    street: "4800 Industrial Blvd, Engineering Center",
    city: "Houston",
    state: "TX",
    zip: "77029",
  },
} as const;

// Engineering Service Disciplines
export const PRODUCT_CATEGORIES = [
  {
    title: "Structural Precast Engineering",
    description: "Licensed PE/SE stamped calculations for gravity, wind, and seismic performance across 48 states.",
    icon: "Building2" as const,
    href: "/products#structural",
  },
  {
    title: "Tekla LOD 400 BIM Detailing",
    description: "Clash-free 3D modeling, automated rebar fabrication tickets, and comprehensive erection sequences.",
    icon: "Columns3" as const,
    href: "/products#wall-panels",
  },
  {
    title: "Insulated Wall Panel Systems",
    description: "Thermal envelope calculations, composite non-conductive tie design, and architectural facade engineering.",
    icon: "Landmark" as const,
    href: "/products#architectural",
  },
  {
    title: "Civil & AASHTO Infrastructure",
    description: "Bridge girders, precast box culverts, retaining walls, and underground utility engineering to DOT specs.",
    icon: "Route" as const,
    href: "/products#infrastructure",
  },
  {
    title: "Connection & Anchor Design",
    description: "Stripping, handling, crane hook rigging analysis, and seismic tie-back connection details.",
    icon: "Wrench" as const,
    href: "/products#custom",
  },
  {
    title: "Precast Bid Takeoffs & Estimating",
    description: "Itemized piece counts, hardware takeoffs, and value engineering to empower precasters in winning bids.",
    icon: "Box" as const,
    href: "/products#utility",
  },
] as const;

// Industries served
export const INDUSTRIES = [
  { title: "Commercial Construction", icon: "Building" as const },
  { title: "Industrial Facilities", icon: "Factory" as const },
  { title: "Transportation & Highways", icon: "Route" as const },
  { title: "Water & Wastewater", icon: "Droplets" as const },
  { title: "Power & Utilities", icon: "Zap" as const },
  { title: "Residential Development", icon: "Home" as const },
  { title: "Municipal Infrastructure", icon: "Landmark" as const },
  { title: "Agricultural", icon: "Wheat" as const },
] as const;

// Benefits of precast
export const BENEFITS = [
  {
    title: "Faster Construction",
    description: "Precast components are manufactured off-site and delivered ready to install, reducing on-site construction time significantly.",
    icon: "Clock" as const,
  },
  {
    title: "Consistent Quality",
    description: "Factory-controlled manufacturing ensures consistent quality, precise dimensions, and superior surface finishes.",
    icon: "ShieldCheck" as const,
  },
  {
    title: "Structural Durability",
    description: "High-strength concrete with embedded reinforcement provides long-term structural performance and weather resistance.",
    icon: "Mountain" as const,
  },
  {
    title: "Cost Efficiency",
    description: "Reduced on-site labor, shorter schedules, and less material waste contribute to lower overall project costs.",
    icon: "TrendingDown" as const,
  },
  {
    title: "Design Flexibility",
    description: "Custom molds and finishes allow architects to achieve complex shapes, textures, and aesthetic requirements.",
    icon: "Palette" as const,
  },
  {
    title: "Sustainability",
    description: "Precast concrete uses locally sourced materials, produces less waste, and offers long service life with minimal maintenance.",
    icon: "Leaf" as const,
  },
] as const;

// FAQ items
export const FAQ_ITEMS = [
  {
    question: "What is precast concrete?",
    answer: "Precast concrete refers to concrete components that are cast in reusable molds at a manufacturing facility, cured under controlled conditions, and then transported to the construction site for installation. This process allows for greater quality control, faster installation, and more consistent finishes compared to cast-in-place concrete.",
  },
  {
    question: "What types of projects use precast concrete?",
    answer: "Precast concrete is used across a wide range of construction sectors, including commercial buildings, industrial facilities, parking structures, bridges, water and wastewater infrastructure, retaining walls, sound barriers, and utility structures. Its versatility makes it suitable for both architectural and structural applications.",
  },
  {
    question: "How long does it take to manufacture precast components?",
    answer: "Manufacturing timelines depend on the complexity and volume of the order. Standard products may be available within days, while custom-engineered components typically require several weeks for design coordination, mold fabrication, and production. Our team works with your project schedule to establish realistic timelines.",
  },
  {
    question: "Can precast concrete be customized?",
    answer: "Yes. Precast concrete can be manufactured in virtually any shape, size, or finish. Options include exposed aggregate, sandblasted, acid-etched, polished, painted, and form-lined surfaces. Custom embedments, insulation, and connection details can also be incorporated during manufacturing.",
  },
  {
    question: "How is precast concrete delivered and installed?",
    answer: "Precast components are transported to the project site on flatbed trailers and typically erected using cranes. Our logistics team coordinates delivery schedules, route planning, and crane access to ensure efficient installation sequences. We work directly with your general contractor or erection crew.",
  },
  {
    question: "What quality standards does PRECASTPRO follow?",
    answer: "Our manufacturing processes follow industry-recognized quality standards. We maintain rigorous in-house inspection procedures covering raw materials, batching, casting, curing, and finished product dimensions. Specific certifications and third-party audit details are available upon request.",
  },
  {
    question: "How do I request a quote?",
    answer: "You can request a quote by using our online form, calling our office, or emailing us with your project details. The more information you can provide — including drawings, specifications, quantities, and schedule — the more accurate our estimate will be.",
  },
] as const;

// Process steps
export const PROCESS_STEPS = [
  {
    step: 1,
    title: "Consultation & Design",
    description: "Share your project requirements. Our engineering team reviews your plans and provides design guidance for precast integration.",
  },
  {
    step: 2,
    title: "Engineering & Detailing",
    description: "We produce shop drawings, connection details, and production specifications tailored to your project's structural and architectural needs.",
  },
  {
    step: 3,
    title: "Manufacturing",
    description: "Components are cast in precision molds, reinforced with steel, cured under controlled conditions, and inspected before shipping.",
  },
  {
    step: 4,
    title: "Delivery & Erection",
    description: "Finished products are transported to your site and installed according to the erection sequence, with coordination support from our team.",
  },
] as const;
