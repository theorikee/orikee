import type { OrikeeIconName } from "@/lib/icons";

export type NavLink = {
  label: string;
  href: string;
};

export type ShopCategory = NavLink & {
  image: string;
};

/**
 * The homepage brief defines exactly four launch categories. The supplied
 * anklets artwork is intentionally not exposed until additional categories
 * are approved.
 */
export const shopCategories: ShopCategory[] = [
  {
    label: "Earrings",
    href: "/shop?category=earrings",
    image: "/images/category/earrings.png",
  },
  {
    label: "Necklaces",
    href: "/shop?category=necklaces",
    image: "/images/category/necklaces.png",
  },
  {
    label: "Bracelets",
    href: "/shop?category=bracelets",
    image: "/images/category/bracelets.png",
  },
  {
    label: "Rings",
    href: "/shop?category=rings",
    image: "/images/category/rings.png",
  },
];

export const primaryNav: NavLink[] = [
  { label: "Collections", href: "/collections" },
  { label: "About Orikee", href: "/about" },
];

export const utilityNav: Array<NavLink & { icon: OrikeeIconName }> = [
  { label: "Search", href: "/search", icon: "search" },
  { label: "Wishlist", href: "/wishlist", icon: "wishlist" },
  { label: "Account", href: "/account", icon: "account" },
  { label: "Bag", href: "/bag", icon: "bag" },
];
