"use client";

import { useId, useState, type ReactNode } from "react";

import { OrikeeIcon } from "@/components/ui/orikee-icon";
import { cn } from "@/lib/cn";

type FooterLinkGroupProps = {
  heading: string;
  children: ReactNode;
};

/**
 * Footer link column that becomes a compact accordion below the desktop
 * breakpoint, following the mobile pattern used by the reference sites.
 * Desktop always shows the full column.
 */
export function FooterLinkGroup({ heading, children }: FooterLinkGroupProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <div className="border-b border-line lg:border-0">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
        className="flex min-h-12 w-full items-center justify-between text-left lg:hidden"
      >
        <span className="text-[11px] font-medium tracking-[0.08em] uppercase">
          {heading}
        </span>
        <OrikeeIcon name={open ? "remove" : "add"} size="sm" />
      </button>

      <h2 className="hidden text-[10px] leading-[1.2] font-medium tracking-[0.08em] uppercase lg:block">
        {heading}
      </h2>

      <div
        id={panelId}
        className={cn(
          "pb-4 lg:mt-3 lg:block lg:pb-0",
          open ? "block" : "hidden",
        )}
      >
        {children}
      </div>
    </div>
  );
}
