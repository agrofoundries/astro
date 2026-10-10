# TASK_CHECKLIST.md — PRECASTPRO Website UI Refinement

## A. Audit
- [x] Inspect current homepage and section components
- [x] Locate all dark section backgrounds
- [x] Locate the black footer styles
- [x] Inspect global CSS and design tokens
- [x] Record current responsive issues

## B. Light theme
- [x] Establish consistent light-background tokens
- [x] Remove dark hero backgrounds and overlays
- [x] Remove dark section backgrounds
- [x] Replace black CTA banners
- [x] Replace dark card backgrounds
- [x] Replace dark dropdown and mobile menu backgrounds
- [x] Replace the black footer
- [x] Verify readable text contrast

## C. Alternating backgrounds
- [x] Apply the planned white/light-gray section sequence
- [x] Verify background changes across all homepage sections
- [x] Use the light-red accent sparingly
- [x] Verify no dark section has been introduced
- [x] Confirm full-width section backgrounds

## D. Visual refinement
- [x] Improve hero typography and composition
- [x] Add looping background video in hero section (gemini_generated_video_7403079d.mp4)
- [x] Expand hero background scale and spacing
- [x] Improve section spacing
- [x] Improve heading hierarchy
- [x] Reduce repetitive card layouts
- [x] Improve image sizes and cropping
- [x] Improve product and project layouts
- [x] Standardize button styling
- [x] Improve footer columns and spacing

## E. Responsive testing
- [x] Verify 360px
- [x] Verify 390px
- [x] Verify 768px
- [x] Verify 1024px
- [x] Verify 1440px
- [x] Verify 1920px
- [x] Verify 2560px
- [x] Check for horizontal overflow
- [x] Check navigation and footer on mobile

## G. Accenture Slider & USA Red & Blue Branding
- [x] Implement full-viewport height (`min-h-[calc(100vh-80px)]`) Accenture-style hero slider
- [x] Configure USA Red (`#C8101E`) and USA Navy Blue (`#0A2540`) corporate palette
- [x] Implement high-contrast USA action buttons (`btn-usa-red` and `btn-usa-blue`)
- [x] Integrate looping video background (`gemini_generated_video_7403079d.mp4`) behind light gradient overlay
- [x] Implement 4 bottom tabbed progress bars with synchronized animation
- [x] Implement interactive controls: slide counter (`01 / 04`), pause/play toggle, prev/next arrows, and keyboard support
- [x] Add USA industrial badges ("🇺🇸 USA OPERATIONS: ACTIVE", "PCI MNL-116", "100% DOMESTIC RAW MATERIALS")
## H. Spacing Reduction & Background Contrast Refinement
- [x] Tightened section vertical padding from 6.5rem to `clamp(3rem, 4.25vw, 4.5rem)` across all homepage sections
- [x] Reduced `SectionHeading` bottom margins from `mb-16` to `mb-8 lg:mb-10` to eliminate dead whitespace
- [x] Implemented distinctly contrasting light section surfaces: Pure White (`#FFFFFF`), Industrial Concrete Gray (`#EAEEF3`), and Architectural Steel (`#EEF3F8`)
- [x] Added crisp structural dividers (`border-y border-[#CBD5E1]`) between alternating sections
- [x] Elevated card contrast with 2px borders, white surfaces on gray/steel backgrounds, and high-impact USA Navy (`#0A2540`) & Red (`#C8101E`) typography
## I. Expansive Full-Width Layout & Distinct All-Section Backgrounds
- [x] Expanded layout width across wide screens (`--max-width-wide: 1800px; max-width: 1560px`) for edge-to-edge corporate feel
- [x] Eliminated all plain blank white sections; assigned distinct, rich architectural backgrounds to every section across the entire homepage:
  - Hero: Full-screen video & media background with light gradient wash
  - Company Intro: Industrial Concrete Gray (`#EAEEF3`)
  - Product Categories: Cool Architectural Slate Blue (`#EEF4FA`)
  - Applications & Sectors: Deep Architectural Steel (`#E8F0F8`)
  - Benefits of Precast: Warm Architectural Concrete (`#F1F3F6`)
  - Manufacturing: Plant Concrete Gray (`#EAEEF3`)
  - Engineering & BIM: Tech Blueprint Ice Blue (`#ECF3FA`)
  - Featured Projects: Project Steel Blue (`#E8F0F8`)
  - Project Gallery: Studio Architectural Steel (`#EEF4FA`)
  - Quality Assurance: Laboratory Heavy Concrete (`#EAEEF3`)
  - Process & Timeline: Precision Workflow Concrete (`#F1F3F6`)
  - Technical Resources: Blueprint Grid Tint (`#ECF3FA`)
  - Logistics & Fleet: Transportation Slate (`#E8F0F8`)
  - Contractor Trust: Field Verified Concrete (`#EAEEF3`)
  - Technical FAQ: Knowledge Base Slate Blue (`#EEF4FA`)
  - Resource Center: Technical Publication Slate (`#E8F0F8`)
  - About PRECASTPRO: Heritage Industrial Concrete (`#F1F3F6`)
  - Quote Conversion CTA: Estimating Desk Warm Red Tint (`#FFF0F0`)
  - Footer: Operations Deep Concrete (`#DEE4EB`)
- [x] Every section bounded with crisp horizontal dividers (`border-y border-[#CBD5E1]`)
- [x] Validated production build (`npm run build` code 0) and browser verified end-to-end

- [x] Record actual test results in docs/TESTING_LOG.md
