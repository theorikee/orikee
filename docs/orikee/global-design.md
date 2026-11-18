<!--
Canonical location: docs/orikee/global-design.md
Source: user-provided global-design(2).md
This document's design rules are preserved from the supplied source.
-->
# ORIKEE — Global Design System

> **Document:** Global Design System
> **Recommended filename:** `global-design.md`
> **Status:** Working draft — actively being refined; not final or locked.
> **Scope:** Shared visual and interaction standards for all Orikee surfaces.


**Document:** `design.md`  
**Project:** Orikee V1 — Single-Vendor Global E-commerce  
**Document role:** Global visual and interaction source of truth for all Orikee screens  
**Applies to:** Storefront, customer account, checkout, installable PWA, and admin interface  
**Status:** Global design direction and foundational tokens

---

## 1. Purpose and scope

This document defines the visual identity, reusable design rules, foundational components, responsive behaviour, accessibility expectations, strict shared iconography registry, and brand guardrails that must remain consistent across the Orikee digital experience.

**This is a global design-system document, not a page-by-page screen specification.** It does not prescribe the exact section order or content of the homepage, product listing, product detail, cart, checkout, account, or admin screens. Each screen must have its own screen-specific brief.

When a screen-specific brief and this document appear to conflict:
- Follow this document for brand identity, colours, typography, spacing principles, component styling, accessibility, and shared interaction patterns.
- Follow the screen-specific brief for that screen's information architecture, section order, content hierarchy, and page-specific interactions.
- Do not silently change either source. Flag genuine conflicts for resolution.

## 2. Product and business context

Orikee is a global direct-to-consumer (D2C) brand focused exclusively on **artificial fashion jewellery**.

### V1 business constraints

- Single-vendor ecommerce: Orikee is the only seller.
- Initial catalogue: approximately 100–500 products.
- Inventory: owned and managed by Orikee.
- Operating base: India; intended audience is global.
- Domain: `orikee.com`.
- Payments: Razorpay, subject to merchant activation and supported payment currencies.
- Shipping: a shipping aggregator, provider to be selected.
- Currency: display currency and checkout/charge currency are separate. Checkout must use only currencies actually supported and enabled by the payment provider.
- Customer experience: responsive website and installable PWA.
- Admin: one administrator initially.
- Future possibility: the architecture may later expand to a multi-vendor marketplace, but V1 must remain single-vendor. Do not expose seller portals, vendor onboarding, commissions, or marketplace workflows in V1.

International selling, payment acceptance, shipping, customs, duties, taxes, returns, and country availability must be configured only for countries Orikee can actually serve. Never imply worldwide shipping or universal payment availability.

### Product-scope guardrail

Every product, category, product image, campaign, filter, and merchandising example must relate to **artificial fashion jewellery only**. Do not introduce hair accessories, apparel, bags, home décor, general lifestyle goods, fine jewellery, or precious jewellery. Do not imply gold, silver, gemstones, precious materials, certifications, or product properties unless confirmed by actual product data.

Customer-facing wording may use natural market-appropriate terms such as “fashion jewellery” where accurate. Keep the brand internationally relevant without implying unverified country coverage.

## 3. Brand identity — locked direction

### Brand name and logo

- Brand name: **ORIKEE**.
- Use the supplied Orikee logo artwork as the only source of truth.
- Do not recreate, retype, distort, stretch, recolour, or approximate the logo with a font.
- Preserve the supplied artwork's original proportions and clear space.
- Use the full logo where it remains legible; use a compact/icon treatment only if a supplied brand asset supports it.
- Do not invent a new symbol or tagline.

### Brand personality

- Minimal and refined.
- Quietly luxurious.
- Modern feminine without being overly sweet.
- Confident and understated.
- Product-first and editorial.
- Premium, calm, and globally relevant.

### Visual direction

The design direction is **Minimalist Luxury / Quiet Luxury**. Take broad inspiration from the restraint, spaciousness, editorial confidence, and product-first presentation of established luxury ecommerce experiences such as Hermès.

This is inspiration at the level of design principles only. Do not copy any other brand's logo, distinctive layout, exact colour system, typography, photography, copy, components, or proprietary assets. Orikee must retain its own identity.

The product photography, composition, typography, and whitespace should create the premium feeling. The interface must not rely on decorative effects or visual noise.

Avoid:
- Bright pink-heavy styling, neon colours, glitter effects, and generic luxury clichés.
- Heavy gradients, glassmorphism, floating decorative shapes, and unnecessary shadows.
- Excessive animation or motion that distracts from shopping.
- Oversized rounded cards, excessive pill buttons, and card-on-card layouts.
- Loud discount graphics, busy promotional banners, and clutter.
- Unnecessary section decoration or repeated coloured panels.

## 4. Official colour system

Use these exact brand colours as the foundational design tokens:

| Token | Brand colour | HEX | Primary use |
|---|---|---|---|
| `brand-primary` | Rosewood | `#B98286` | Restrained brand accents, selected states, occasional secondary actions |
| `brand-text` | Deep Cocoa | `#49332D` | Primary text, headings, and preferred high-contrast CTA background |
| `brand-background` | Warm Ivory | `#FAF5EF` | Main page background and warm surfaces |
| `brand-secondary` | Muted Sage | `#A7A98A` | Very sparing secondary accents and subtle highlights |
| `brand-accent` | Rose Gold | `#C69A8B` | Small accents and highlights only |

### Colour application rules

- Warm Ivory is the default page background. White or near-white surfaces may be used where appropriate.
- Deep Cocoa is the primary text colour and preferred dark CTA surface.
- Rosewood is a restrained accent; do not make the entire interface pink.
- Muted Sage should be used sparingly.
- Rose Gold must not be used for large text blocks or large CTA surfaces.
- White may be used for clean content surfaces and product image backgrounds.
- Do not introduce unrelated colours or bright/neon colours.
- Define neutral border, divider, disabled, and surface treatments as supporting UI tokens derived from the approved palette and neutral white/grey values. These must not become a competing brand palette.
- Derived warm surface tokens currently in use: `--surface` `#FFFFFF` (clean content), `--surface-linen` `#F1E7DD` (soft product backgrounds), `--surface-sand` `#F5EFE8` (footer background). They are derived from Warm Ivory and must remain subdued.
- Maintain accessible contrast. If a brand-colour pairing fails contrast requirements, change the foreground/background pairing rather than altering the official brand HEX values.
- Functional status colours (success, warning, error, information) must remain clear and accessible. Do not force them to use brand accent colours when that would reduce clarity.

## 5. Typography system

Use a two-font system consistently across storefront, PWA, customer account, checkout, and admin.

### Display and editorial font — Cormorant Garamond

Use for:
- Hero and campaign headlines.
- Editorial section headings.
- Collection titles.
- Brand-story headings.
- Large brand statements.

Suggested weights: 400 Regular, 500 Medium, 600 SemiBold, 700 Bold.

### UI and functional font — Inter

Use for:
- Navigation and labels.
- Product names and metadata.
- Prices and transactional information.
- Buttons, forms, filters, and sorting.
- Customer account and checkout.
- Admin dashboards, tables, metrics, and status indicators.

Suggested weights: 400 Regular, 500 Medium, 600 SemiBold, 700 Bold.

### Typography rules

- Do not use Cormorant Garamond for dense UI, tables, forms, or small metadata.
- Use Inter for all functional and transactional information.
- Keep heading line lengths controlled and editorial.
- Avoid excessive letter spacing in body text.
- Uppercase, letter-spaced labels may be used sparingly for small section eyebrows.
- Do not add a third font family unless there is a documented accessibility or localization requirement.
- Ensure font fallbacks are defined and text remains readable if a web font fails to load.

### Initial type scale

| Style | Desktop | Mobile | Font |
|---|---:|---:|---|
| Hero display | 64 px | 40 px | Cormorant Garamond |
| H1 | 52 px | 36 px | Cormorant Garamond |
| H2 | 40 px | 30 px | Cormorant Garamond |
| H3 | 30 px | 26 px | Cormorant Garamond |
| H4 | 22 px | 20 px | Inter |
| Body large | 18 px | 17 px | Inter |
| Body | 16 px | 16 px | Inter |
| Small | 14 px | 14 px | Inter |
| Caption | 12 px | 12 px | Inter |
| Button | 14 px | 14 px | Inter, 500–600 |

These are starting tokens. Refine line-height and responsive scaling during design review while preserving the hierarchy.

## 6. Layout, spacing, and responsive foundations

### Reference frames and grid

- Desktop reference frame: 1440 px wide.
- Mobile reference frame: 390 px wide.
- Tablet behaviour must be designed and checked between these sizes.
- Use a centred content container with a maximum width around 1280 px.
- Desktop grid: 12 columns.
- Mobile grid: 4 columns.
- Use generous whitespace and consistent alignment.
- Product imagery should be visually dominant.
- Prefer clean edges, thin dividers, restrained corner radii, and simple rectangular controls.
- Avoid horizontal overflow at every breakpoint.

### Spacing scale

Use a consistent 4 px base scale:

`4, 8, 12, 16, 24, 32, 40, 48, 64, 80, 96`

Use this scale consistently for gaps, padding, section spacing, and component rhythm. Large editorial layouts may use larger whitespace, but spacing should remain systematic.

### Responsive principles

- Preserve the same brand identity and content hierarchy across desktop, tablet, and mobile.
- Adapt layouts rather than merely shrinking desktop elements.
- Prioritise touch-friendly interactions on mobile.
- Use clear responsive navigation patterns.
- Product grids should remain readable and image-led.
- Avoid hover-only interactions; all essential actions must work with touch and keyboard.
- Keep mobile content concise and avoid unnecessarily long stacked UI.
- Respect device safe areas where relevant to the PWA.

## 7. Shared component language

Create reusable components with consistent states and variants. Screen-specific briefs determine which components appear on each screen.

### Core component families

- Buttons: primary, secondary, outline, text, and icon.
- Form controls: text, email, password, select, checkbox, radio, and quantity controls.
- Navigation: desktop header, mobile header, navigation menu, breadcrumbs, and footer.
- Commerce: product card, category/collection card, price display, variant selector, stock indicator, wishlist action, and cart item.
- Discovery: search overlay, filter, sort, and pagination/load-more patterns.
- Feedback: modal, drawer, bottom sheet, toast, confirmation, empty, loading, error, and success states.
- Content: newsletter form, editorial image/text module, and promotional module where required by a screen brief.

### Component styling rules

- Buttons should be clean, readable, and purposeful. Avoid excessive pill shapes.
- Use Deep Cocoa for primary high-contrast actions where appropriate.
- Use Rosewood for restrained secondary emphasis and selected states.
- Inputs should have clear labels, borders, focus states, validation states, and error messages.
- Product cards should prioritise product imagery, clear product names, and legible prices. Avoid unnecessary boxes, shadows, or decorative badges.
- Category and collection cards should use consistent image treatment and simple labels.
- Dividers should be subtle and consistent.
- Use restrained corner radii; do not make every surface rounded.
- Ensure component states are designed, not just their default appearance.
- Reuse the same component patterns across screens unless a documented usability need requires a variation.

### Iconography — strict global standard

Iconography is a shared design-system primitive, not a screen-level styling choice. The same icon library, registry, dimensions, stroke treatment, and colour tokens must be used across the public storefront, customer account, checkout, installed PWA, and admin/back-office interface.

#### Approved library and source

- **Only approved icon library:** Lucide.
- **React package:** `lucide-react` (use the official package and icon catalogue).
- **Official source of truth:** https://lucide.dev/icons/
- Use official Lucide React component exports. Do not download random SVGs from search results or copy icons from other websites.
- Hermès is a visual reference for restraint, clarity, proportion, and understated luxury only. Its proprietary icons/assets must not be copied, and do not claim that Hermès uses Lucide or any other specific icon library unless independently verified.
- Do not mix Lucide with Heroicons, Font Awesome, Bootstrap Icons, Material Icons, Apple SF Symbols, emoji, icon fonts, or arbitrary third-party icon packs.
- Custom SVG icons are not permitted by default. If Lucide has no suitable semantic equivalent, propose the missing icon for review; only an approved, documented custom SVG may be added to the central registry.

#### Visual character

- Use clean, understated, minimal outline icons with balanced geometry and generous negative space.
- Prefer familiar, immediately recognisable symbols over decorative or abstract illustrations.
- Use rounded line caps and joins where supported.
- Default to outline icons. Do not mix outline and filled styles arbitrarily.
- Avoid heavy strokes, cartoon-like shapes, 3D effects, gradients, shadows, multi-colour icons, and icons inside decorative circles or tiles unless a screen-specific interaction clearly requires a control container.
- Icons must support the interface, never compete with product photography or editorial content.

#### Strict no-emoji policy

- **Do not use emojis anywhere in Orikee-designed interface content or visual design.** This applies to the storefront, mobile browser, installed PWA, customer account, checkout, admin/back-office, dashboards, notifications, empty states, banners, buttons, labels, headings, helper text, and generated placeholder content.
- Never use emojis as substitutes for proper interface icons, status indicators, bullets, category illustrations, product decorations, trust signals, or calls to action.
- Never invent decorative emoji strings or insert emojis to make a screen appear friendly, playful, or visually engaging.
- Use the approved Lucide icon registry for interface actions and navigation. For statuses, use the approved semantic icon plus a text label and accessible state; do not use emoji symbols.
- Use real product photography, approved brand assets, or a deliberately designed visual component where an illustration is genuinely required. Do not use emoji artwork.
- AI-generated screen designs, copy, sample data, and implementation output must follow this rule. If a generated result contains an emoji, replace it with the correct approved icon or remove it.
- This restriction governs Orikee-authored UI and generated design output. Customer-submitted review text or other user-generated content may be displayed as submitted where appropriate, but the interface must not add emojis to it or rely on emojis to communicate meaning.

#### Exact dimensions and rendering

All icon components must use the following shared scale. The SVG viewBox remains 24 × 24; the rendered width and height must be equal.

| Token | SVG size | Intended use |
|---|---:|---|
| `icon-xs` | 14 × 14 px | Dense metadata only; avoid for primary actions |
| `icon-sm` | 16 × 16 px | Inline utility and compact table actions |
| `icon-md` | 20 × 20 px | Default buttons, header utilities, form controls |
| `icon-lg` | 22 × 22 px | Storefront header and prominent utility controls |
| `icon-xl` | 24 × 24 px | Mobile PWA bottom navigation and major navigation |
| `icon-2xl` | 28 × 28 px | Empty states or large illustrative status only |

- Default stroke width: **1.75 px**.
- Use `strokeLinecap="round"` and `strokeLinejoin="round"` where exposed by the icon component.
- Preserve the icon's natural proportions; never stretch width and height independently.
- Do not change individual icon dimensions ad hoc. Use the shared size tokens.
- The clickable/tappable control is larger than the SVG: target at least **44 × 44 px** where practical. Do not enlarge the SVG merely to create a larger hit area.
- Keep optical alignment consistent in headers, navigation rows, buttons, tables, and form fields.

#### Icon colour tokens and state rules

Use the existing official Orikee palette. Do not introduce new icon colours.

| State | Token / value | Rule |
|---|---|---|
| Default | `brand-text` / Deep Cocoa `#49332D` | Standard icon colour |
| Active / selected | `brand-primary` / Rosewood `#B98286` | Current navigation item or selected control |
| Muted / secondary | Deep Cocoa at 70% opacity | Supporting, non-primary actions |
| Disabled | Deep Cocoa at 35% opacity | Disabled controls only |
| On dark surface | `brand-background` / Warm Ivory `#FAF5EF` | Ensure adequate contrast |
| Destructive | Accessible semantic error token | Destructive actions only; never use as decoration |

- Prefer `currentColor` so icon colour inherits from the parent component's semantic state.
- Do not hard-code hex values inside individual icon instances.
- Do not use Rose Gold or Muted Sage as default icon colours.
- Hover, focus, pressed, selected, and disabled states must use shared component tokens.
- A selected wishlist heart may use a restrained filled Rosewood state; all other filled states require a documented interaction reason.
- Never communicate state by colour alone; pair it with an accessible label and/or other visible state cue.

#### Central icon registry — approved semantic mapping

Use these exact Lucide icon names for the corresponding actions throughout the application. Import aliases may be used in code, but the semantic mapping must not change from screen to screen.

| Semantic action | Lucide React icon | Usage |
|---|---|---|
| Home | `House` | Home navigation |
| Shop / catalogue | `Grid2X2` | Shop and product catalogue navigation |
| Search | `Search` | Search entry and search actions |
| Wishlist | `Heart` | Saved products |
| Shopping bag / cart | `ShoppingBag` | Bag, cart, header utility |
| Account / profile | `UserRound` | Customer account and profile |
| Orders | `Package` | Customer order history and order navigation |
| Menu | `Menu` | Mobile browser menu trigger |
| Close / dismiss | `X` | Close dialogs, drawers, overlays |
| Back | `ArrowLeft` | Back navigation |
| Forward / open | `ArrowRight` | Forward navigation where needed |
| Expand / dropdown | `ChevronDown` | Selects and disclosure controls |
| Previous | `ChevronLeft` | Previous item or step |
| Next | `ChevronRight` | Next item or step |
| Add | `Plus` | Add quantity or create item |
| Remove / decrease | `Minus` | Decrease quantity |
| Delete | `Trash2` | Remove or delete |
| Edit | `Pencil` | Edit content or record |
| View | `Eye` | Show or preview |
| Hide | `EyeOff` | Hide or conceal |
| Filter | `SlidersHorizontal` | Product and data filters |
| Sort | `ArrowUpDown` | Sorting |
| Location | `MapPin` | Address and location |
| Country / region | `Globe2` | Country or region selector |
| Calendar | `CalendarDays` | Date selection |
| Upload | `Upload` | Upload asset or file |
| Download | `Download` | Download or export |
| More actions | `Ellipsis` | Secondary action menu |
| Help | `CircleHelp` | Help and support |
| Notifications | `Bell` | Notifications |
| Sign out | `LogOut` | Customer/admin sign out |
| Dashboard | `LayoutDashboard` | Admin dashboard |
| Products | `Package` | Admin product management |
| Categories / collections | `Tags` | Category and collection management |
| Inventory | `Boxes` | Stock and inventory |
| Customers | `Users` | Customer management |
| Promotions / campaigns | `Megaphone` | Campaign and announcement management |
| Content / pages | `FileText` | CMS pages and content |
| Orders management | `ClipboardList` | Admin order management |
| Shipping | `Truck` | Shipping and fulfilment |
| Payments | `CreditCard` | Payment records and settings |
| Analytics / reports | `BarChart3` | Reports and analytics |
| Appearance / theme | `Palette` | Theme and brand appearance |
| Media library | `Images` | Image and media assets |
| Email / newsletter | `Mail` | Newsletter and email settings |
| Security | `ShieldCheck` | Security and permissions |
| Settings | `Settings` | Application settings |
| Success | `Check` | Successful completion |
| Warning / error | `AlertCircle` | Validation and system feedback |
| Refresh | `RefreshCw` | Refresh or retry |
| External link | `ExternalLink` | Opens an external destination |

If a listed icon export is renamed or unavailable in the installed Lucide version, verify the current official Lucide catalogue and update this registry once. Do not silently substitute a different icon on an individual screen.

#### Shared React implementation pattern

Implement a central wrapper and registry rather than styling raw icons separately in every feature. Example implementation pattern (adapt file paths to the project structure):

```tsx
// components/ui/orikee-icon.tsx
import {
  House,
  Grid2X2,
  Search,
  Heart,
  ShoppingBag,
  UserRound,
  Package,
  Menu,
  X,
  SlidersHorizontal,
  type LucideIcon,
} from "lucide-react";

export const orikeeIcons = {
  home: House,
  shop: Grid2X2,
  search: Search,
  wishlist: Heart,
  bag: ShoppingBag,
  account: UserRound,
  orders: Package,
  menu: Menu,
  close: X,
  filters: SlidersHorizontal,
} satisfies Record<string, LucideIcon>;
```

The production wrapper must:
- Accept a semantic registry key, approved size token, and semantic state.
- Resolve the icon from the central registry.
- Apply the shared 1.75 px stroke and equal width/height.
- Inherit colour through `currentColor` and global design tokens.
- Keep decorative and interactive accessibility behaviour explicit.
- Avoid arbitrary per-instance colour, stroke, or size overrides.

Do not duplicate the registry in separate storefront and admin folders. Both surfaces must consume the same shared icon package/module.

#### Implementation and governance

- Create one shared `OrikeeIcon` wrapper and one central icon registry in the application.
- All screens must request icons by semantic key from this registry; avoid importing and styling icons independently throughout feature components.
- Centralise size, stroke width, colour inheritance, and accessible defaults in the wrapper.
- Icon-only buttons must have a meaningful accessible name (`aria-label` or equivalent); decorative icons must be hidden from assistive technology.
- Do not use an icon as a substitute for a clear text label when the meaning may be ambiguous.
- The same semantic action must always use the same icon across storefront, PWA, customer account, checkout, and admin.
- Screen-specific briefs may specify icon placement and size token, but may not introduce a different icon library, stroke system, or colour system.
- Any registry change must be made in this global design system first, then applied consistently across the application.

## 8. Photography and image direction

Artificial fashion jewellery photography is the most important visual asset.

- Prefer high-quality product photography with warm natural light and accurate product colour.
- Use editorial fashion imagery featuring artificial fashion jewellery in a modern, globally relevant style.
- Show jewellery being worn as well as clean product-only photography where appropriate.
- Use warm ivory, muted rose, cocoa, and natural neutral environments.
- Keep image treatments, crops, and aspect ratios consistent within the same component type.
- Ensure product images show the actual product accurately; do not substitute unrelated jewellery.
- Do not use generic stock imagery that misrepresents Orikee products.
- Avoid imagery of hair accessories, apparel, bags, home décor, fine jewellery, or precious jewellery.
- Do not imply precious materials, certifications, sourcing, sustainability, or manufacturing claims through imagery or copy unless verified.
- If actual product photography is unavailable, use clearly identified visual placeholders. Do not present generated concept imagery as actual catalogue products.

## 9. Shared interaction and behaviour principles

- Interactions must be predictable, clear, and consistent across screens.
- Provide visible focus, hover, pressed, disabled, loading, success, and error states where relevant.
- Do not rely on colour alone to communicate state.
- Provide clear feedback after actions such as adding to cart, saving a wishlist item, submitting a form, or changing preferences.
- Avoid unnecessary animation. Respect reduced-motion preferences.
- Do not use auto-playing motion or carousels that distract from product discovery.
- Essential functionality must not depend on hover.
- Use confirmation for consequential actions where appropriate.
- Keep forms concise and explain validation errors in plain language.

## 10. Global shopping, country, and location principles

- Country detection may suggest a country and display currency based on approximate IP location.
- Always allow manual country and currency selection.
- Do not request GPS permission on initial page load.
- Ask for location permission only after an explicit customer action such as “Use my current location”.
- If location permission is denied or unavailable, provide manual country, postal-code, and address entry.
- Display currency and payment/charge currency are separate concepts. Do not imply every displayed currency can be charged.
- Shipping availability, rates, duties, taxes, and delivery estimates must be presented only when configured and must not be described as guarantees unless confirmed.
- Do not show unsupported payment methods, country flags, shipping destinations, or delivery promises as active options.

## 11. PWA and cross-surface consistency

- The PWA must use the same visual identity, typography, colour tokens, and component language as the website.
- Provide install-friendly app icon and splash-screen direction using supplied brand assets.
- Design for standalone display and device safe areas.
- Do not create a separate visual brand for the PWA.
- Navigation and key actions must work without hover.
- Offline states must clearly explain which functions require a connection.
- Customer account, checkout, and admin screens must use the same global design tokens while retaining the information density and functional clarity appropriate to their tasks.

## 12. Centralized theme management

The brand theme must be configurable from one admin area.

**Admin location:** `Admin → Settings → Appearance & Branding`

### Editable settings

- Brand colour tokens: primary, text, background, secondary, accent, plus approved surface and border tokens.
- Typography: heading font from an approved font registry; body/UI font from an approved font registry; available weights; preset heading scale.
- Brand assets: logo and favicon.
- Shape/layout presets: button radius, card radius, and content width.

### Theme workflow

- Draft theme.
- Preview desktop and mobile.
- Validate colour contrast and font availability.
- Publish.
- Version history.
- Roll back to a previous version.

### Guardrails

- Do not allow arbitrary CSS or JavaScript editing.
- Do not allow unapproved font URLs.
- Do not let theme settings override functional status colours in ways that reduce clarity.
- Keep admin tables and transactional screens highly readable.
- Theme changes should update storefront and PWA consistently.
- Admin chrome may use shared brand tokens, while functional admin states retain accessible semantic colours.
- Preserve the supplied logo artwork and its proportions.

## 13. Accessibility and usability

- Maintain readable colour contrast.
- Do not communicate status using colour alone.
- Provide visible keyboard focus states.
- Ensure logical keyboard navigation.
- Use descriptive form labels and useful error messages.
- Make interactive controls comfortably touch-friendly; aim for at least 44 × 44 px touch targets where practical.
- Respect reduced-motion preferences.
- Provide meaningful alt text for product and editorial images.
- Ensure text remains legible over photography; use suitable placement or overlays only when necessary.
- Avoid tiny text and low-contrast muted text.
- Preserve semantic heading hierarchy and accessible names for icon-only controls.

## 14. Design-system governance and consistency

- Treat this file as the global source of truth for Orikee's visual identity and shared design rules.
- Do not redefine brand colours, fonts, spacing foundations, logo treatment, or component styles independently in individual screen prompts.
- Screen-specific briefs may define page structure, content, section order, data requirements, and unique interactions.
- If a new component is needed, derive it from the existing design language and document any reusable addition.
- If a screen requires an exception, explain why and keep the exception limited to that screen.
- Do not introduce a new visual direction during later screen generation.
- When generating multiple screens in Stitch, include this global document as a reference each time, together with the relevant screen-specific brief.

## 15. Google Stitch usage instructions

Use this document as the **global design-system reference** when generating any Orikee screen.

For each generation:
1. Attach this `design.md`.
2. Attach the relevant screen-specific brief (for example, `homepage.md` or `product-detail.md`).
3. Attach the supplied logo and favicon when the screen requires brand assets.
4. Follow the screen-specific brief for the exact page structure and this document for all global visual and interaction rules.
5. Do not invent missing business facts, catalogue data, product claims, prices, reviews, ratings, certifications, shipping coverage, or payment availability.
6. Keep all generated screens visually consistent with the same Orikee identity.

This global file intentionally does not define the exact homepage section order or the detailed structure of other individual screens. Those belong in separate screen-specific specifications.


## 16. AI output restrictions and no-emoji compliance

These rules apply whenever this document is attached to Google Stitch or supplied to any AI design/code-generation workflow.

- Treat this document as the global source of truth for Orikee's visual system.
- Do not invent a new visual style, colour, font, icon family, component variant, spacing scale, or interaction pattern when an approved rule already exists.
- Do not insert emojis anywhere in AI-generated Orikee screens, copy, mock data, navigation, buttons, banners, status labels, empty states, or decorative elements.
- Use only the approved Lucide icon registry for interface icons. If an exact icon is missing, select the closest semantically correct icon already in the registry or flag it for approval; do not substitute an emoji.
- Preserve the distinction between global design rules and screen-specific content. The screen brief controls page structure and content; this global document controls the shared visual language.
- If a screen brief conflicts with this document, do not silently invent a compromise. Identify the conflict and request a decision, unless the brief explicitly states that it is an approved exception.
- Before presenting a generated screen, run a visual consistency check: logo, palette, typography, icon family, icon size/stroke/colour, spacing, component styles, image ratios, responsive behaviour, and **zero AI-added emojis**.
- Never interpret the use of emoji in external references or competitor websites as permission to use emoji in Orikee.

## 17. Design tokens and specification status

- Use the exact values explicitly defined in this document as the approved global tokens.
- Do not invent or independently redefine missing numeric values for breakpoints, container widths, grid gutters, component heights, border radii, shadows, z-index layers, animation durations, or easing curves.
- Where a value is not yet specified, mark it as **TBD — requires design-system decision** and use a conservative, consistent implementation only for temporary exploration. Do not present a temporary value as approved.
- Keep a single source of truth for tokens in implementation (for example, CSS variables or a typed theme/token module); do not duplicate literal values across unrelated components.
- When a token is approved or changed, update this global document and the implementation token source together.

## 18. Screen-specific specification contract

Every screen-specific design brief must:
- State its purpose, audience, primary action, and page/section hierarchy.
- Identify which shared components and icon registry keys it uses.
- Specify only screen-specific layout and content decisions; it must not redefine global colours, fonts, iconography, or component foundations.
- Describe desktop, tablet, mobile-browser, and installed-PWA behaviour where relevant.
- Include interaction, loading, empty, error, success, and disabled states where applicable.
- Identify required assets and distinguish confirmed assets/content from placeholders.
- State any intentional exception to this global system explicitly for approval.

