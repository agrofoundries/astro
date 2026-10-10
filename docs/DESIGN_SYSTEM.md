# PRECASTPRO — Design System Documentation

## 1. Brand Identity & Color System
PRECASTPRO is designed with an American industrial corporate aesthetic for heavy construction, civil infrastructure, and commercial general contractors.

### Color Tokens
- **Brand Primary Red**: `#C8102E` (sampled from the industrial PRECASTPRO logomark)
- **Brand Primary Dark (Hover)**: `#A50E1B`
- **Brand Primary Light (Accent)**: `#E23840`
- **Brand Tint Soft**: `#FEF2F2` (Red-50) & `#FDE8E8` (Red-100)
- **Neutral Backgrounds (Strict Light Theme)**:
  - Base: `#FFFFFF`
  - Subtle Concrete Tint: `#F4F4F6`
  - Card Neutral: `#F8F9FA`
  - Border Lines: `#E5E7EB` (Gray-200)
- **Typography Colors**:
  - Headings & High Contrast: `#111827` (Gray-900)
  - Body Text: `#4B5563` (Gray-600)
  - Subtle Meta Text: `#6B7280` (Gray-500)

## 2. Typography
- **Headings**: `Manrope` (Sans-serif, geometric, structural weight, 700 to 900)
- **Body & Technical Specs**: `Inter` (Sans-serif, clean, legibility-optimized, 400 to 600)

## 3. Layout Architecture
- **Full-Width Edge-to-Edge Layout**: All sections span `w-full` with subtle alternating light concrete and pure white backgrounds.
- **Section Inner Container**: Maximum width `1280px` with fluid responsive padding (`px-4 sm:px-6 lg:px-8`).
- **Section Padding**: Consistent vertical spacing (`py-16 md:py-24`).
- **Zero Dark Themes**: Avoids dark mode or muddy dark container backgrounds in accordance with light corporate design specifications.

## 4. Components & Buttons
- **Primary Button (`.btn-primary`)**: Solid brand red (`#C8102E`), white text, rounded corners, subtle shadow, hover state darkening to `#A50E1B`.
- **Secondary Button (`.btn-secondary`)**: Clean white background, bordered with `#D1D5DB`, gray-900 text, hover state with subtle gray tint.
- **Interactive Accordion**: Accessible expand/collapse for FAQ sections with rotating chevrons.
- **Interactive Gallery**: Filterable tabs for multi-sector precast case studies with image zoom lightbox modal.
