"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState, type FormEvent } from "react";

import { OrikeeIcon } from "@/components/ui/orikee-icon";
import { cn } from "@/lib/cn";
import {
  demoCategories,
  demoMegaMenu,
  demoProducts,
  demoPrimaryNav,
} from "@/lib/orikee-demo";

const utilityLinks = [
  { label: "Wishlist", href: "/wishlist", icon: "wishlist" as const },
  { label: "Account", href: "/account", icon: "account" as const },
  { label: "Bag", href: "/bag", icon: "bag" as const },
];

const iconButtonClass =
  "grid size-11 place-items-center transition-opacity hover:opacity-70 min-[1001px]:size-[30px]";

/**
 * Header heights are TBD — requires design-system decision. The values below
 * are conservative temporary implementations based on the supplied design.
 *
 * The header is fixed and transparent over the homepage hero, then becomes
 * solid on scroll, hover, or while a menu is open. Every other route starts
 * solid so the logo and controls remain legible.
 */
export function SiteHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const headerRef = useRef<HTMLElement>(null);
  const mobileTriggerRef = useRef<HTMLButtonElement>(null);
  const mobileCloseRef = useRef<HTMLButtonElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const mobileSearchInputRef = useRef<HTMLInputElement>(null);

  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  const isHome = pathname === "/";
  const solid =
    !isHome ||
    scrolled ||
    hovered ||
    openMenu !== null ||
    searchOpen ||
    mobileOpen ||
    mobileSearchOpen;

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 10);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!mobileOpen && !mobileSearchOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileOpen, mobileSearchOpen]);

  useEffect(() => {
    if (searchOpen) {
      searchInputRef.current?.focus();
    }
  }, [searchOpen]);

  useEffect(() => {
    if (mobileSearchOpen) {
      mobileSearchInputRef.current?.focus();
    }
  }, [mobileSearchOpen]);

  useEffect(() => {
    if (mobileOpen) {
      mobileCloseRef.current?.focus();
    }
  }, [mobileOpen]);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") {
        return;
      }

      setOpenMenu(null);
      setSearchOpen(false);

      if (mobileOpen) {
        setMobileOpen(false);
        mobileTriggerRef.current?.focus();
      }

      setMobileSearchOpen(false);
    }

    function handlePointerDown(event: MouseEvent) {
      if (!headerRef.current?.contains(event.target as Node)) {
        setOpenMenu(null);
        setSearchOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handlePointerDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handlePointerDown);
    };
  }, [mobileOpen]);

  function closeMenus() {
    setOpenMenu(null);
    setSearchOpen(false);
    setMobileOpen(false);
    setMobileSearchOpen(false);
  }

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const value = query.trim();

    if (!value) {
      return;
    }

    closeMenus();
    router.push(`/search?q=${encodeURIComponent(value)}`);
  }

  const mobileSuggestions = query.trim()
    ? [
        ...demoCategories
          .filter((category) =>
            category.label
              .toLowerCase()
              .includes(query.trim().toLowerCase()),
          )
          .map((category) => ({
            label: `${category.label} in ${category.label} collection`,
            href: category.href,
          })),
        ...Object.values(demoProducts)
          .flat()
          .filter((product) =>
            product.name.toLowerCase().includes(query.trim().toLowerCase()),
          )
          .slice(0, 4)
          .map((product) => ({
            label: product.name,
            href: product.href,
          })),
      ].slice(0, 5)
    : [];

  const logo = (
    <Image
      src="/images/logo.png"
      alt="Orikee"
      width={1600}
      height={545}
      priority
      className={cn(
        "h-[24px] w-auto transition-[filter] duration-300 max-[1000px]:h-[22px]",
        !solid && "brightness-0 invert",
      )}
    />
  );

  return (
    <header
      ref={headerRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        setOpenMenu(null);
      }}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node)) {
          setOpenMenu(null);
          setSearchOpen(false);
        }
      }}
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-colors duration-300",
        solid
          ? "border-b border-line bg-brand-background text-brand-text"
          : "text-brand-background",
      )}
    >
      {!solid ? (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[calc(100%+48px)] bg-gradient-to-b from-brand-text/55 to-transparent"
        />
      ) : null}

      <div className="relative mx-auto w-full px-4 min-[1001px]:px-[2vw]">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center py-[7px] max-[1000px]:py-1.5">
          <div className="flex items-center justify-self-start">
            <button
              ref={mobileTriggerRef}
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              onClick={() => {
                setSearchOpen(false);
                setMobileOpen((open) => !open);
              }}
              className={cn(iconButtonClass, "min-[1001px]:hidden")}
            >
              <OrikeeIcon
                name={mobileOpen ? "close" : "menu"}
                size="lg"
                state={solid ? "default" : "onDark"}
              />
            </button>

            <button
              type="button"
              aria-label="Search"
              onClick={() => {
                setMobileOpen(false);
                setMobileSearchOpen(true);
              }}
              className={cn(iconButtonClass, "min-[1001px]:hidden")}
            >
              <OrikeeIcon
                name="search"
                size="lg"
                state={solid ? "default" : "onDark"}
              />
            </button>

            <div
              id="desktop-search-control"
              className="hidden items-center gap-2 min-[1001px]:flex"
            >
              {!searchOpen ? (
                <>
                  <button
                    type="button"
                    aria-label="Search"
                    aria-expanded={searchOpen}
                    aria-controls="desktop-search-control"
                    onClick={() => {
                      setOpenMenu(null);
                      setSearchOpen(true);
                    }}
                    className={iconButtonClass}
                  >
                    <OrikeeIcon
                      name="search"
                      size="lg"
                      state={solid ? "default" : "onDark"}
                    />
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setOpenMenu(null);
                      setSearchOpen(true);
                    }}
                    className="min-h-7 border-b border-current pb-0.5 text-left text-[10px] tracking-[0.08em] uppercase"
                  >
                    Search
                  </button>
                </>
              ) : (
                <form
                  onSubmit={handleSearch}
                  role="search"
                  className="flex items-center gap-2"
                >
                  <button
                    type="submit"
                    aria-label="Submit search"
                    className={iconButtonClass}
                  >
                    <OrikeeIcon
                      name="search"
                      size="lg"
                      state={solid ? "default" : "onDark"}
                    />
                  </button>
                  <input
                    ref={searchInputRef}
                    type="search"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Search Orikee"
                    aria-label="Search Orikee"
                    className="h-9 w-60 border-0 border-b border-current bg-transparent text-[14px] text-current outline-none placeholder:text-current/70"
                  />
                </form>
              )}

            </div>
          </div>

          <Link
            href="/"
            aria-label="Orikee home"
            className="justify-self-center"
            onClick={closeMenus}
          >
            {logo}
          </Link>

          <div className="flex items-center justify-self-end gap-0.5">
            {utilityLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenus}
                className={cn(
                  iconButtonClass,
                  item.label === "Account" && "hidden min-[1001px]:grid",
                )}
              >
                <OrikeeIcon
                  name={item.icon}
                  size="lg"
                  state={solid ? "default" : "onDark"}
                />
                <span className="sr-only">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>

        <nav
          aria-label="Primary"
          className="hidden justify-center gap-[clamp(9px,1.75vw,25px)] pt-[5px] pb-[9px] text-[11px] font-medium tracking-[0.075em] uppercase min-[1001px]:flex"
        >
          {demoPrimaryNav.map((item) => (
            <Link
              key={item.menu}
              href={item.href}
              onMouseEnter={() => setOpenMenu(item.menu)}
              onFocus={() => setOpenMenu(item.menu)}
              onClick={closeMenus}
              className={cn(
                "border-b border-transparent py-[5px] whitespace-nowrap hover:border-current",
                openMenu === item.menu && "border-current",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {openMenu ? (
        <div
          className="absolute inset-x-0 top-full hidden border-b border-line bg-brand-background text-brand-text min-[1001px]:block"
          onMouseLeave={() => setOpenMenu(null)}
        >
          <div className="flex gap-16 py-10 pr-[4vw] pb-14 pl-[18%]">
            {demoMegaMenu[openMenu].map((group) => (
              <div key={group.heading}>
                <h2 className="mb-5 text-[12px] font-medium tracking-[0.1em] uppercase">
                  {group.heading}
                </h2>
                <ul>
                  {group.links.map((link) => (
                    <li
                      key={`${group.heading}-${link.label}`}
                      className="mb-3 text-[14px]"
                    >
                      <Link
                        href={link.href}
                        onClick={closeMenus}
                        className="text-brand-text/70 transition-colors hover:text-brand-text hover:underline"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ) : null}

      {searchOpen ? (
        <div className="absolute inset-x-0 top-full hidden border-b border-line bg-brand-background text-brand-text min-[1001px]:block">
          <div className="flex gap-16 py-10 pr-[4vw] pb-14 pl-[18%]">
            <div>
              <h2 className="mb-5 text-[12px] font-medium tracking-[0.1em] uppercase">
                Browse
              </h2>
              <ul>
                {demoCategories.map((category) => (
                  <li key={category.href} className="mb-3 text-[14px]">
                    <Link
                      href={category.href}
                      onClick={closeMenus}
                      className="text-brand-text/70 transition-colors hover:text-brand-text hover:underline"
                    >
                      {category.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ) : null}

      {mobileOpen ? (
        <>
          <div
            aria-hidden="true"
            onClick={() => {
              setMobileOpen(false);
              mobileTriggerRef.current?.focus();
            }}
            className="fixed inset-0 z-50 bg-brand-text/45 min-[1001px]:hidden"
          />
          <aside
            id="mobile-menu"
            aria-label="Menu"
            className="fixed inset-y-0 left-0 z-[60] w-[min(86vw,340px)] overflow-y-auto bg-brand-background px-6 py-4 text-brand-text min-[1001px]:hidden"
          >
            <button
              ref={mobileCloseRef}
              type="button"
              aria-label="Close menu"
              onClick={() => {
                setMobileOpen(false);
                mobileTriggerRef.current?.focus();
              }}
              className={iconButtonClass}
            >
              <OrikeeIcon name="close" size="lg" />
            </button>

            <nav aria-label="Mobile" className="mt-2">
              {demoPrimaryNav.map((item) => (
                <Link
                  key={item.menu}
                  href={item.href}
                  onClick={closeMenus}
                  className="block border-b border-line py-4 font-display text-[24px] font-medium"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mt-8">
              {utilityLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenus}
                  className="flex min-h-11 items-center gap-3 text-small"
                >
                  <OrikeeIcon name={item.icon} size="md" />
                  {item.label}
                </Link>
              ))}
            </div>
          </aside>
        </>
      ) : null}

      {mobileSearchOpen ? (
        <div className="fixed inset-x-0 top-0 z-[60] border-b border-line bg-brand-background px-6 py-4 text-brand-text min-[1001px]:hidden">
          <form
            onSubmit={handleSearch}
            role="search"
            className="flex items-center gap-3"
          >
            <button
              type="submit"
              aria-label="Submit search"
              className="grid size-6 shrink-0 place-items-center"
            >
              <OrikeeIcon name="search" size="md" />
            </button>
            <div className="relative min-w-0 flex-1 border-b border-brand-text">
              <input
                ref={mobileSearchInputRef}
                type="text"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search Orikee"
                aria-label="Search Orikee"
                className="h-10 w-full border-0 bg-transparent px-0 pr-8 text-[14px] text-brand-text outline-none ring-0 placeholder:text-brand-text/65"
              />
              {query ? (
                <button
                  type="button"
                  aria-label="Clear search"
                  onClick={() => {
                    setQuery("");
                    mobileSearchInputRef.current?.focus();
                  }}
                  className="absolute right-0 top-1/2 grid size-6 -translate-y-1/2 place-items-center"
                >
                  <OrikeeIcon name="close" size="md" />
                </button>
              ) : null}
            </div>
          </form>

          {query.trim() ? (
            <div className="mt-7 pl-9">
              <h2 className="mb-6 text-[10px] font-medium tracking-[0.12em] uppercase text-brand-text/70">
                Suggested searches
              </h2>
              <ul className="space-y-5">
                {mobileSuggestions.length ? (
                  mobileSuggestions.map((suggestion) => (
                    <li key={`${suggestion.href}-${suggestion.label}`}>
                      <Link
                        href={suggestion.href}
                        onClick={closeMenus}
                        className="text-[13px] leading-[1.35] text-brand-text"
                      >
                        {suggestion.label}
                      </Link>
                    </li>
                  ))
                ) : (
                  <li className="text-[13px] text-brand-text/70">
                    Press Enter to search for “{query.trim()}”
                  </li>
                )}
              </ul>
            </div>
          ) : null}
        </div>
      ) : null}
    </header>
  );
}
