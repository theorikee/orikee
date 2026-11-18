import Image from "next/image";
import Link from "next/link";

import { FooterLinkGroup } from "@/components/layout/footer-link-group";
import { NewsletterSignup } from "@/components/layout/newsletter-signup";
import { RegionSelector } from "@/components/layout/region-selector";
import { SocialIcon } from "@/components/ui/social-icon";
import {
  contact,
  demoCategories,
  demoPolicyLinks,
  socialLinks,
} from "@/lib/orikee-demo";

const shopLinks = [
  ...demoCategories.map((category) => ({
    label: category.label,
    href: category.href,
  })),
  { label: "Collections", href: "/collections" },
];

const customerCareLinks = [
  { label: "Contact us", href: `mailto:${contact.email}` },
  { label: "WhatsApp", href: contact.whatsapp },
  ...demoPolicyLinks.slice(0, 3),
];

const legalLinks = demoPolicyLinks.slice(3);

function FooterLinkList({
  links,
}: {
  links: Array<{ label: string; href: string }>;
}) {
  return (
    <ul className="space-y-[7px]">
      {links.map((link) => (
        <li key={link.label} className="text-[11px] leading-[1.35]">
          <Link
            href={link.href}
            className="hover:underline hover:underline-offset-2"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-surface-sand pt-[34px]">
      <div className="mx-auto w-full max-w-content px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-4 sm:grid-cols-2 lg:grid-cols-5 lg:gap-x-[18px]">
          <FooterLinkGroup heading="Shop">
            <FooterLinkList links={shopLinks} />
          </FooterLinkGroup>

          <FooterLinkGroup heading="About">
            <FooterLinkList links={[{ label: "Our Story", href: "/about" }]} />
          </FooterLinkGroup>

          <FooterLinkGroup heading="Customer care">
            <FooterLinkList links={customerCareLinks} />
          </FooterLinkGroup>

          <FooterLinkGroup heading="Legal">
            <FooterLinkList links={legalLinks} />
          </FooterLinkGroup>

          <div className="pt-6 sm:col-span-2 sm:pt-2 lg:col-span-1 lg:pt-0">
            <h2 className="mb-3 text-[10px] leading-[1.2] font-medium tracking-[0.08em] uppercase">
              Newsletter
            </h2>
            <p className="text-[14px] leading-[1.5]">
              Receive our newsletter and discover new arrivals and curated
              collections.
            </p>
            <NewsletterSignup />

            <h2 className="mt-8 mb-3 text-[10px] leading-[1.2] font-medium tracking-[0.08em] uppercase">
              Follow us
            </h2>
            <nav aria-label="Social media" className="flex flex-wrap">
              {socialLinks.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="grid size-11 place-items-center transition-opacity hover:opacity-70 lg:size-[30px]"
                >
                  <SocialIcon name={social.icon} />
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-7 flex flex-col items-start gap-4 border-t border-line py-3 text-[11px] sm:flex-row sm:items-center sm:justify-between">
          <RegionSelector />
          <span>&copy; 2026 Orikee. All rights reserved.</span>
        </div>
      </div>

      <div className="grid place-items-center px-4 pt-[42px] pb-12">
        <Image
          src="/images/logo.png"
          alt="Orikee"
          width={1600}
          height={545}
          className="h-[38px] w-auto"
        />
      </div>
    </footer>
  );
}
