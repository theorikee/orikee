"use client";

import { useEffect, useRef, useState } from "react";

import { Drawer } from "@/components/ui/drawer";
import { OrikeeIcon } from "@/components/ui/orikee-icon";
import { cn } from "@/lib/cn";

const regions = ["Europe", "Middle East", "Asia", "Oceania", "Americas"];

/**
 * Country/currency drawer. Only India (INR) is configured; every other region
 * explicitly reports that no destination is available yet. No currency
 * conversion or checkout pricing is implemented.
 */
export function RegionSelector() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [shippingTo, setShippingTo] = useState("India (INR)");
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        close();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  function close() {
    setOpen(false);
    triggerRef.current?.focus({ preventScroll: true });
  }

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        aria-haspopup="dialog"
        onClick={() => setOpen(true)}
        className="flex min-h-11 items-center gap-2 text-[12px] font-medium tracking-[0.1em] uppercase"
      >
        <OrikeeIcon name="country" size="md" />
        <span>Ship to: {shippingTo}</span>
      </button>

      <Drawer
        open={open}
        onClose={close}
        title="Location"
        titleId="location-title"
        widthClass="w-[min(100vw,400px)]"
      >
        <p className="mt-6 mb-4 text-[14px] text-brand-text/70">
          Choose your region. The currency shown on the site may differ from
          the currency charged at checkout.
        </p>

        <div>
          {regions.map((region) => {
            const isExpanded = expanded === region;
            const panelId = `region-${region.replace(/\s+/g, "-").toLowerCase()}`;

            return (
              <div key={region} className="border-b border-line">
                <button
                  type="button"
                  aria-expanded={isExpanded}
                  aria-controls={panelId}
                  onClick={() => setExpanded(isExpanded ? null : region)}
                  className="flex min-h-12 w-full items-center justify-between text-left text-[14px]"
                >
                  <span>{region}</span>
                  <OrikeeIcon name={isExpanded ? "remove" : "add"} size="sm" />
                </button>

                <div
                  id={panelId}
                  hidden={!isExpanded}
                  className="pb-3 text-[14px]"
                >
                  {region === "Asia" ? (
                    <button
                      type="button"
                      onClick={() => {
                        setShippingTo("India (INR)");
                        close();
                      }}
                      className={cn(
                        "py-2 underline underline-offset-2",
                        shippingTo === "India (INR)" && "text-brand-primary",
                      )}
                    >
                      India (INR)
                    </button>
                  ) : (
                    <span className="text-brand-text/70">
                      No destinations available yet.
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </Drawer>
    </>
  );
}
