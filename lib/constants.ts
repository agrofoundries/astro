// Brand: Precast Engineers
// Tagline: "Empowering Precasters"
// Target: United States of America

export const COMPANY = {
  name: "Precast Engineers",
  tagline: "Empowering Precasters",
  phone: "(800) PRECAST",
  phoneDisplay: "Direct RFQ Desk",
  email: "contact@precastengineers.com",
  inquiriesEmail: "rfq@precastengineers.com",
  hours: "Monday – Friday: 7:00 AM – 5:00 PM CST",
  location: "United States of America",
  address: {
    street: "Precast Engineering Technical Center",
    city: "Chicago",
    state: "IL",
    zip: "60606",
  },
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/#hero" },
  { label: "Products & Basins", href: "/#products" },
  { label: "Engineering Services", href: "/#services" },
  { label: "About Us", href: "/#company-intro" },
  { label: "Blog", href: "/#blog" },
  { label: "Contact", href: "/#contact" },
] as const;

// Legacy export compatibility
export const FAQ_ITEMS: { question: string; answer: string }[] = [];
