// Design catalog — each design has images[] (2–3 photos for 3D card + detail page)

export const DESIGNS = [
  // ── Wedding Cards ──────────────────────────────
  {
    id: "WED-101",
    title: "Royal Ivory Elegance",
    category: "wedding",
    tag: "Trending",
    image:
      "https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=800&q=85",
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=85",
      "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=85",
    ],
    description:
      "Classic ivory card with gold foil detailing and intricate border patterns. Perfect for royal Tamil weddings.",
    details: {
      finish: "Gold Foil + Matte",
      size: '5.5" × 4.25"',
      minQty: "100 pcs",
      delivery: "3–5 days",
    },
  },
  {
    id: "WED-102",
    title: "Marigold Bloom",
    category: "wedding",
    tag: "Featured",
    image:
      "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=85",
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=85",
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=85",
    ],
    description:
      "Vibrant floral design inspired by traditional Tamil wedding motifs with marigold and jasmine patterns.",
    details: {
      finish: "Glossy UV",
      size: '5.5" × 4.25"',
      minQty: "50 pcs",
      delivery: "3–5 days",
    },
  },
  {
    id: "WED-103",
    title: "Velvet Crimson",
    category: "wedding",
    tag: "Premium",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=85",
      "https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=800&q=85",
      "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=800&q=85",
    ],
    description:
      "Deep crimson luxury card with gold embossing and silk texture. For those who demand the finest.",
    details: {
      finish: "Velvet Laminate + Emboss",
      size: '6" × 4"',
      minQty: "100 pcs",
      delivery: "5–7 days",
    },
  },
  {
    id: "WED-104",
    title: "Lotus Garden",
    category: "wedding",
    tag: "",
    image:
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=85",
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=85",
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=85",
    ],
    description:
      "Serene lotus motif design in pastel pink and gold. A timeless choice for elegant Tamil ceremonies.",
    details: {
      finish: "Soft Matte",
      size: '5.5" × 4.25"',
      minQty: "50 pcs",
      delivery: "3–5 days",
    },
  },
  {
    id: "WED-105",
    title: "Arch Mandap Gold",
    category: "wedding",
    tag: "New",
    image:
      "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=800&q=85",
      "https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=800&q=85",
      "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=85",
    ],
    description:
      "Temple arch inspired design with intricate kolam patterns and traditional Carnatic motifs.",
    details: {
      finish: "Spot UV + Gold Foil",
      size: '6" × 4.5"',
      minQty: "100 pcs",
      delivery: "5–7 days",
    },
  },
  {
    id: "WED-106",
    title: "Midnight Jasmine",
    category: "wedding",
    tag: "Popular",
    image:
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=85",
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=85",
      "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=800&q=85",
    ],
    description:
      "Elegant dark background with white jasmine and gold accents. Night wedding favourite.",
    details: {
      finish: "Matte Black + Gold",
      size: '5.5" × 4.25"',
      minQty: "100 pcs",
      delivery: "3–5 days",
    },
  },

  // ── Visiting Cards ──────────────────────────────
  {
    id: "VIS-201",
    title: "Executive Black",
    category: "visiting",
    tag: "Trending",
    image:
      "https://images.unsplash.com/photo-1616628188542-b8499b679093?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1616628188542-b8499b679093?w=800&q=85",
      "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=800&q=85",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=85",
    ],
    description:
      "Premium matte black finish with gold UV spot printing. Make an unforgettable first impression.",
    details: {
      finish: "Matte + Spot UV Gold",
      size: '3.5" × 2"',
      minQty: "100 pcs",
      delivery: "1–2 days",
    },
  },
  {
    id: "VIS-202",
    title: "Modern Minimal",
    category: "visiting",
    tag: "",
    image:
      "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=800&q=85",
      "https://images.unsplash.com/photo-1616628188542-b8499b679093?w=800&q=85",
      "https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?w=800&q=85",
    ],
    description:
      "Clean minimalist design with subtle geometric elements for the modern professional.",
    details: {
      finish: "Silk Laminate",
      size: '3.5" × 2"',
      minQty: "100 pcs",
      delivery: "1–2 days",
    },
  },
  {
    id: "VIS-203",
    title: "Corporate Blue",
    category: "visiting",
    tag: "Popular",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=85",
      "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=800&q=85",
      "https://images.unsplash.com/photo-1616628188542-b8499b679093?w=800&q=85",
    ],
    description:
      "Professional navy with silver foil accents. Trusted by 500+ businesses in Virudhunagar.",
    details: {
      finish: "Glossy + Silver Foil",
      size: '3.5" × 2"',
      minQty: "250 pcs",
      delivery: "1–2 days",
    },
  },
  {
    id: "VIS-204",
    title: "Rose Gold Luxury",
    category: "visiting",
    tag: "New",
    image:
      "https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?w=800&q=85",
      "https://images.unsplash.com/photo-1616628188542-b8499b679093?w=800&q=85",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=85",
    ],
    description:
      "Feminine rose gold with embossed texture. Perfect for beauty, fashion & wellness professionals.",
    details: {
      finish: "Rose Gold Foil + Emboss",
      size: '3.5" × 2"',
      minQty: "100 pcs",
      delivery: "2–3 days",
    },
  },

  // ── Banners ──────────────────────────────
  {
    id: "BAN-301",
    title: "Shop Grand Opening",
    category: "banner",
    tag: "Trending",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=85",
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=85",
      "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?w=800&q=85",
    ],
    description:
      "6×3 ft flex banner for retail store openings with bold typography and brand colours.",
    details: {
      finish: "HD Flex Print",
      size: "Any custom size",
      minQty: "1 pc",
      delivery: "Same day",
    },
  },
  {
    id: "BAN-302",
    title: "Birthday Celebration",
    category: "banner",
    tag: "Popular",
    image:
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=85",
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=85",
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=85",
    ],
    description:
      "Colorful celebration banner with balloon and confetti design. Comes in all sizes.",
    details: {
      finish: "Glossy Flex",
      size: "4×3 ft to 10×5 ft",
      minQty: "1 pc",
      delivery: "Same day",
    },
  },
  {
    id: "BAN-303",
    title: "Political Campaign",
    category: "banner",
    tag: "",
    image:
      "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?w=800&q=85",
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=85",
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=85",
    ],
    description:
      "High-visibility outdoor flex banner for political campaigns. Weather-resistant, vibrant inks.",
    details: {
      finish: "Outdoor Flex",
      size: "Any size",
      minQty: "1 pc",
      delivery: "Same day",
    },
  },
  {
    id: "BAN-304",
    title: "Temple Festival",
    category: "banner",
    tag: "Featured",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=85",
      "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?w=800&q=85",
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=85",
    ],
    description:
      "Traditional festival banner with kolam and deity artwork. Temple committee favourite.",
    details: {
      finish: "HD Flex + Laminate",
      size: "Custom",
      minQty: "1 pc",
      delivery: "1 day",
    },
  },
];

export const CATEGORIES = [
  { id: "all", label: "All Designs" },
  { id: "wedding", label: "Wedding Cards" },
  { id: "visiting", label: "Visiting Cards" },
  { id: "banner", label: "Banners & Flex" },
];

export const SERVICES = [
  {
    icon: "💍",
    title: "Wedding Cards",
    description:
      "Exquisite wedding invitations with traditional and modern designs. Foil printing, embossing, and premium finishes.",
    highlight: "From ₹5/card",
  },
  {
    icon: "🪪",
    title: "Visiting Cards",
    description:
      "Premium business cards with UV, matte, glossy, and spot finishes. Make your first impression unforgettable.",
    highlight: "100 cards min order",
  },
  {
    icon: "🖼️",
    title: "Flex & Banners",
    description:
      "High-resolution outdoor and indoor banners. Weather-resistant flex printing for all occasions.",
    highlight: "Any size available",
  },
  {
    icon: "🎨",
    title: "Custom Design",
    description:
      "Our in-house designers create custom artwork tailored to your vision. Logos, brochures, flyers & more.",
    highlight: "Free consultation",
  },
];

export const WHATSAPP_NUMBER = "919751135325";
export const SHOP_PHONE = "+91 98765 43210";
export const SHOP_ADDRESS =
  "Om Sakthi Printers, Main Bazaar, Sattur - 626 203, Tamil Nadu";

export const TRANSLATIONS = {
  en: {
    hero_title: "Where Every Design",
    hero_title2: "Tells Your Story",
    hero_sub: "Premium Digital Printing in Sattur, Tamil Nadu",
    hero_cta: "Explore Designs",
    hero_whatsapp: "WhatsApp Us",
    nav_home: "Home",
    nav_gallery: "Gallery",
    nav_services: "Services",
    nav_about: "About",
    nav_contact: "Contact",
    order_btn: "Order This Design",
    enquire_btn: "Enquire Now",
  },
  ta: {
    hero_title: "ஒவ்வொரு வடிவமும்",
    hero_title2: "உங்கள் கதை சொல்கிறது",
    hero_sub: "சத்தூரில் சிறந்த டிஜிட்டல் அச்சகம்",
    hero_cta: "வடிவங்களை காண்க",
    hero_whatsapp: "வாட்ஸ்அப் செய்",
    nav_home: "முகப்பு",
    nav_gallery: "கேலரி",
    nav_services: "சேவைகள்",
    nav_about: "பற்றி",
    nav_contact: "தொடர்பு",
    order_btn: "இந்த வடிவம் ஆர்டர்",
    enquire_btn: "விசாரிக்கவும்",
  },
};
