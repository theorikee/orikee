"use client";

import { useEffect, useRef, type ReactNode } from "react";

import { OrikeeIcon } from "@/components/ui/orikee-icon";
import { cn } from "@/lib/cn";

type DrawerProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  titleId: string;
  children: ReactNode;
  widthClass?: string;
};

/**
 * Right-hand drawer shell shared by the newsletter and region panels.
 * Content components handle focus, scroll locking and validation.
 */
export function Drawer({
  open,
  onClose,
  title,
  titleId,
  children,
  widthClass = "w-[min(100vw,560px)]",
}: DrawerProps) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (open) {
      closeRef.current?.focus();
    }
  }, [open]);

  return (
    <>
      {open ? (
        <div
          aria-hidden="true"
          onClick={onClose}
          className="fixed inset-0 z-[55] bg-brand-text/45"
        />
      ) : null}

      <aside
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-hidden={!open}
        className={cn(
          "fixed inset-y-0 right-0 z-[60] overflow-y-auto bg-white px-6 pt-6 pb-10 text-brand-text transition-[transform,visibility] duration-300",
          widthClass,
          open ? "visible translate-x-0" : "invisible translate-x-full",
        )}
      >
        <div className="flex items-center justify-between">
          <h2
            id={titleId}
            className="text-[12px] font-medium tracking-[0.1em] uppercase"
          >
            {title}
          </h2>
          <button
            ref={closeRef}
            type="button"
            aria-label={`Close ${title.toLowerCase()}`}
            onClick={onClose}
            className="grid size-[30px] place-items-center"
          >
            <OrikeeIcon name="close" size="lg" />
          </button>
        </div>

        {children}
      </aside>
    </>
  );
}
