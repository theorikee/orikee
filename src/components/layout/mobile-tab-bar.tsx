"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { OrikeeIcon } from "@/components/ui/orikee-icon";

const items = [
  { label: "Home", href: "/", icon: "home" as const },
  { label: "Shop", href: "/shop", icon: "shop" as const },
  { label: "Wishlist", href: "/wishlist", icon: "wishlist" as const },
  { label: "Orders", href: "/orders", icon: "orders" as const },
  { label: "Account", href: "/account", icon: "account" as const },
];

/**
 * Installed-PWA tab bar from the supplied design. It only appears when the
 * site is launched in standalone display mode; the browser layout uses the
 * header navigation instead.
 */
export function MobileTabBar() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="App"
      className="fixed inset-x-0 bottom-0 z-[35] hidden border-t border-line bg-brand-background pb-[env(safe-area-inset-bottom)] [@media(display-mode:standalone)]:flex"
    >
      {items.map((item) => {
        const current =
          item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

        return (
          <Link
            key={item.label}
            href={item.href}
            aria-current={current ? "page" : undefined}
            className="flex min-h-16 flex-1 flex-col items-center justify-center gap-1 text-[12px] aria-[current=page]:text-brand-primary"
          >
            <OrikeeIcon name={item.icon} size="xl" />
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
