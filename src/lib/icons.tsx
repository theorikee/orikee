import {
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  ArrowUpDown,
  BarChart3,
  Bell,
  Boxes,
  CalendarDays,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CircleHelp,
  ClipboardList,
  CreditCard,
  Download,
  Ellipsis,
  ExternalLink,
  Eye,
  EyeOff,
  FileText,
  Globe2,
  Grid2X2,
  Heart,
  House,
  Images,
  LayoutDashboard,
  LogOut,
  Mail,
  MapPin,
  Megaphone,
  Menu,
  Minus,
  Package,
  Palette,
  Pencil,
  Phone,
  Plus,
  RefreshCw,
  Search,
  Settings,
  ShieldCheck,
  SlidersHorizontal,
  Tags,
  Trash2,
  Truck,
  Upload,
  UserRound,
  Users,
  X,
  type LucideIcon,
} from "lucide-react";

/**
 * Cart icon matching the supplied Hermès-style mark (trapezoid bag with
 * handle). Kept as a single inline SVG so it can live in the Lucide registry
 * without pulling in a second icon library.
 */
function HermesCartIcon(props: {
  width?: number | string;
  height?: number | string;
  strokeWidth?: number;
  className?: string;
}) {
  return (
    <svg
      width={props.width ?? 24}
      height={props.height ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={props.strokeWidth ?? 1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={props.className}
      aria-hidden="true"
      focusable="false"
    >
      <path d="M5.5 8h13l1 13h-15l1-13Z" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" />
    </svg>
  );
}

/**
 * Central Orikee icon registry.
 * Semantic keys follow the approved mapping in docs/orikee/global-design.md §7.
 * Do not add icons from any other library and do not import icons ad hoc.
 */
export const orikeeIcons = {
  home: House,
  shop: Grid2X2,
  search: Search,
  wishlist: Heart,
  bag: HermesCartIcon as unknown as LucideIcon,
  account: UserRound,
  orders: Package,
  menu: Menu,
  close: X,
  back: ArrowLeft,
  forward: ArrowRight,
  expand: ChevronDown,
  previous: ChevronLeft,
  next: ChevronRight,
  add: Plus,
  remove: Minus,
  delete: Trash2,
  edit: Pencil,
  view: Eye,
  hide: EyeOff,
  filter: SlidersHorizontal,
  sort: ArrowUpDown,
  location: MapPin,
  country: Globe2,
  calendar: CalendarDays,
  upload: Upload,
  download: Download,
  more: Ellipsis,
  help: CircleHelp,
  notifications: Bell,
  signOut: LogOut,
  dashboard: LayoutDashboard,
  products: Package,
  categories: Tags,
  inventory: Boxes,
  customers: Users,
  promotions: Megaphone,
  content: FileText,
  ordersManagement: ClipboardList,
  shipping: Truck,
  payments: CreditCard,
  analytics: BarChart3,
  appearance: Palette,
  media: Images,
  email: Mail,
  security: ShieldCheck,
  settings: Settings,
  success: Check,
  warning: AlertCircle,
  refresh: RefreshCw,
  externalLink: ExternalLink,
  phone: Phone,
} satisfies Record<string, LucideIcon>;

export type OrikeeIconName = keyof typeof orikeeIcons;
