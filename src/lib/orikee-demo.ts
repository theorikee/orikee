/**
 * DEMO CONTENT — ported from the supplied index.html design.
 *
 * Product names, prices, shipping/returns statements and social handles have
 * NOT been verified against the real catalogue or policies. Replace with
 * approved business data before production.
 */

import type { OrikeeIconName } from "@/lib/icons";

export type DemoCategory = {
  label: string;
  slug: string;
  href: string;
  image: string;
};

export type DemoProduct = {
  name: string;
  price: number;
  image: string;
  href: string;
};

export type DemoMegaGroup = {
  heading: string;
  links: Array<{ label: string; href: string }>;
};

export const demoCategories: DemoCategory[] = [
  {
    label: "Earrings",
    slug: "earrings",
    href: "/shop?category=earrings",
    image: "/images/category/earrings.png",
  },
  {
    label: "Necklaces",
    slug: "necklaces",
    href: "/shop?category=necklaces",
    image: "/images/category/necklaces.png",
  },
  {
    label: "Bracelets",
    slug: "bracelets",
    href: "/shop?category=bracelets",
    image: "/images/category/bracelets.png",
  },
  {
    label: "Rings",
    slug: "rings",
    href: "/shop?category=rings",
    image: "/images/category/rings.png",
  },
  {
    label: "Anklets",
    slug: "anklets",
    href: "/shop?category=anklets",
    image: "/images/category/anklets.png",
  },
];

export const demoOccasions = [
  { label: "Everyday Wear", slug: "everyday" },
  { label: "Office Wear", slug: "office" },
  { label: "Party Wear", slug: "party" },
  { label: "Festive Collection", slug: "festive" },
];

/** Quick search terms offered while the header search box is open. */
export const demoSuggestedSearches = demoCategories.map((category) => ({
  label: category.label,
  href: category.href,
}));

const occasionLinks = demoOccasions.map((occasion) => ({
  label: occasion.label,
  href: `/shop?occasion=${occasion.slug}`,
}));

const braceletImages = {
  charm: "/images/products/bracelets/polished-gold-floral-ruby-bangle.png",
  pearl: "/images/products/bracelets/colorful-gold-leaf-gemstone-bangle.png",
  cuff: "/images/products/bracelets/gold-tennis-bracelet-on-light-background.png",
  kada: "/images/products/bracelets/elegant-gold-infinity-and-gemstone-bracelets.png",
};

function product(
  category: DemoCategory,
  name: string,
  price: number,
  image: string,
): DemoProduct {
  return {
    name,
    price,
    image,
    href: category.href,
  };
}

export const demoProducts: Record<string, DemoProduct[]> = {
  earrings: [
    product(demoCategories[0], "Pearl Drop Earrings", 799, demoCategories[0].image),
    product(demoCategories[0], "Gold Jhumka Earrings", 999, demoCategories[0].image),
    product(demoCategories[0], "Crystal Stud Set", 699, demoCategories[0].image),
    product(demoCategories[0], "Classic Chandbali", 1199, demoCategories[0].image),
  ],
  necklaces: [
    product(demoCategories[1], "Pearl Layer Necklace", 1499, demoCategories[1].image),
    product(demoCategories[1], "Kundan Choker", 2499, demoCategories[1].image),
    product(demoCategories[1], "Gold Pendant Chain", 999, demoCategories[1].image),
    product(demoCategories[1], "Heart Charm Necklace", 899, demoCategories[1].image),
  ],
  bracelets: [
    product(demoCategories[2], "Gold Charm Bracelet", 999, braceletImages.charm),
    product(demoCategories[2], "Pearl Bead Bracelet", 799, braceletImages.pearl),
    product(demoCategories[2], "Gold Cuff Bracelet", 1299, braceletImages.cuff),
    product(demoCategories[2], "Classic Kada Bracelet", 1599, braceletImages.kada),
  ],
  rings: [
    product(demoCategories[3], "Solitaire Ring", 699, demoCategories[3].image),
    product(demoCategories[3], "Stackable Ring Set", 999, demoCategories[3].image),
    product(demoCategories[3], "Gold Statement Ring", 1199, demoCategories[3].image),
    product(demoCategories[3], "Pearl Cocktail Ring", 899, demoCategories[3].image),
  ],
  anklets: [
    product(demoCategories[4], "Ghungroo Anklet", 899, demoCategories[4].image),
    product(demoCategories[4], "Layered Chain Anklet", 999, demoCategories[4].image),
    product(demoCategories[4], "Pearl Bead Anklet", 799, demoCategories[4].image),
    product(demoCategories[4], "Charm Pearl Anklet", 1099, demoCategories[4].image),
  ],
};

/** Header navigation, preserving the supplied design's category-led order. */
export const demoPrimaryNav = [
  ...demoCategories.map((category) => ({
    label: category.label,
    href: category.href,
    menu: category.label,
  })),
  { label: "Collections", href: "/collections", menu: "Collections" },
  { label: "Our Story", href: "/about", menu: "Our Story" },
];

export const demoMegaMenu: Record<string, DemoMegaGroup[]> = {
  ...Object.fromEntries(
    demoCategories.map((category) => [
      category.label,
      [
        {
          heading: `Shop ${category.label}`,
          links: [
            { label: "View all", href: category.href },
            {
              label: "New arrivals",
              href: `${category.href}&sort=new`,
            },
          ],
        },
        { heading: "Occasions", links: occasionLinks },
      ],
    ]),
  ),
  Collections: [
    {
      heading: "Collections",
      links: [
        { label: "The Orikee Edit", href: "/collections" },
        { label: "New arrivals", href: "/shop?sort=new" },
      ],
    },
    { heading: "Occasions", links: occasionLinks },
  ],
  "Our Story": [
    {
      heading: "About",
      links: [
        { label: "Our Story", href: "/about" },
        { label: "Contact us", href: "mailto:hello@orikee.com" },
      ],
    },
  ],
};

export const contact = {
  email: "hello@orikee.com",
  whatsapp: "https://wa.me/918595319332",
  whatsappDisplay: "+91 85953 19332",
};

export const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/theorikee",
    icon: "instagram" as const,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/theorikee",
    icon: "facebook" as const,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@theorikee",
    icon: "youtube" as const,
  },
];

export type DemoServicePromise = {
  icon: OrikeeIconName;
  title: string;
  body: string;
  href?: string;
};

export const demoServicePromises: DemoServicePromise[] = [
  {
    icon: "email",
    title: "Customer service",
    body: contact.email,
    href: `mailto:${contact.email}`,
  },
  {
    icon: "phone",
    title: "WhatsApp",
    body: contact.whatsappDisplay,
    href: contact.whatsapp,
  },
  {
    icon: "shipping",
    title: "Shipping",
    body: "Free shipping above ₹999. Delivered in 3–7 working days across India. Cash on Delivery available.",
  },
  {
    icon: "refresh",
    title: "Returns",
    body: "7-day returns on eligible, unworn pieces in original packaging.",
  },
];

export const demoPolicyLinks = [
  { label: "Shipping policy", href: "/policies#shipping" },
  { label: "Returns & exchange", href: "/policies#returns" },
  { label: "Jewellery care guide", href: "/policies#care" },
  { label: "Terms and conditions", href: "/policies#terms" },
  { label: "Privacy policy", href: "/policies#privacy" },
];

export function formatInr(value: number): string {
  return `₹${value.toLocaleString("en-IN")}`;
}
