import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "outline" | "inverse" | "text";

const BASE_CLASSES =
  "inline-flex h-12 items-center justify-center gap-2 px-8 text-button font-medium uppercase tracking-[0.14em] transition-colors";

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-text text-brand-background hover:bg-brand-text/90 disabled:bg-brand-text/35",
  outline:
    "border border-brand-text text-brand-text hover:bg-brand-text hover:text-brand-background",
  inverse:
    "border border-brand-background/80 text-brand-background hover:bg-brand-background hover:text-brand-text",
  text: "h-auto px-0 text-brand-text underline-offset-4 hover:text-brand-primary hover:underline",
};

export function buttonClasses(
  variant: ButtonVariant = "primary",
  className?: string,
) {
  return cn(BASE_CLASSES, VARIANT_CLASSES[variant], className);
}

type ButtonLinkProps = ComponentProps<typeof Link> & {
  variant?: ButtonVariant;
  children: ReactNode;
};

export function ButtonLink({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <Link className={buttonClasses(variant, className)} {...props}>
      {children}
    </Link>
  );
}

type ButtonProps = ComponentProps<"button"> & {
  variant?: ButtonVariant;
};

export function Button({
  variant = "primary",
  className,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={buttonClasses(variant, className)}
      {...props}
    />
  );
}
