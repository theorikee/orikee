import { cn } from "@/lib/cn";
import { orikeeIcons, type OrikeeIconName } from "@/lib/icons";

const ICON_SIZES = {
  xs: 14,
  sm: 16,
  md: 20,
  lg: 22,
  xl: 24,
  "2xl": 28,
} as const;

export type OrikeeIconSize = keyof typeof ICON_SIZES;

const ICON_STATES = {
  default: "text-brand-text",
  active: "text-brand-primary",
  muted: "text-brand-text/70",
  disabled: "text-brand-text/35",
  onDark: "text-brand-background",
  destructive: "text-error",
} as const;

export type OrikeeIconState = keyof typeof ICON_STATES;

type OrikeeIconProps = {
  name: OrikeeIconName;
  size?: OrikeeIconSize;
  state?: OrikeeIconState;
  /** Provide only when the icon carries meaning; omit for decorative icons. */
  label?: string;
  className?: string;
};

/**
 * Shared icon wrapper. Centralises size tokens, stroke and colour inheritance.
 * Colour follows the parent by default (currentColor) via the state token.
 */
export function OrikeeIcon({
  name,
  size = "md",
  state = "default",
  label,
  className,
}: OrikeeIconProps) {
  const Icon = orikeeIcons[name];
  const dimension = ICON_SIZES[size];

  return (
    <Icon
      width={dimension}
      height={dimension}
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn(ICON_STATES[state], className)}
      aria-hidden={label ? undefined : true}
      aria-label={label}
      role={label ? "img" : undefined}
      focusable="false"
    />
  );
}
