# Orikee — Project Context

> Purpose: factual project context for AI agents. This file is not a page design brief.
> Update it when business scope or confirmed implementation facts change.

## 1. Product identity

- Brand: ORIKEE
- Domain: `orikee.com`
- Business: global-intent direct-to-consumer (D2C) ecommerce brand.
- Product category: artificial fashion jewellery only.
- Brand direction: minimalist luxury / quiet luxury; modern, understated, editorial and product-first.
- Inspiration may be drawn from luxury ecommerce design principles, but no proprietary brand assets or distinctive designs may be copied.

## 2. V1 business scope

- V1 is single-vendor: Orikee is the only seller.
- Initial catalogue target: approximately 100–500 products.
- Inventory is owned and managed by Orikee.
- Operating base: India; intended audience is global, subject to actual serviceability.
- Admin: one administrator initially.
- A future marketplace may be considered, but marketplace features are out of scope for V1.

## 3. Confirmed integrations / constraints from the supplied global design

- Payment provider: Razorpay, subject to merchant activation and supported currencies.
- Shipping: shipping aggregator; provider is not yet specified in the supplied design document.
- Display currency and payment/charge currency are separate.
- Checkout may offer only currencies and payment methods actually enabled by the provider.
- International shipping, duties, taxes, returns and country availability must be configured and verified. Never promise worldwide service by default.
- Customer experience target: responsive website and installable PWA.

## 4. Product and content guardrails

- Do not add hair accessories, apparel, bags, home décor, fine jewellery or precious jewellery.
- Do not invent material composition, gold/silver/gemstone claims, certifications, sustainability claims, sourcing claims or manufacturing claims.
- Do not invent prices, discounts, inventory, ratings, reviews, delivery dates or country coverage.
- Use actual catalogue data when available. Otherwise use clearly identified placeholders.
- Use supplied Orikee logo and favicon assets only; do not recreate or distort them.

## 5. Brand system pointer

Read `docs/orikee/global-design.md` for:
- Official palette and typography.
- Type scale and spacing scale.
- Responsive foundations.
- Shared component language.
- Lucide icon registry and no-emoji rule.
- Photography direction.
- Interaction, accessibility, PWA and theme-management rules.

## 6. Known items that still require confirmation

Do not guess these. Inspect the repository or ask the project owner:
- Current production-ready page list and route structure.
- Actual product catalogue schema and source.
- Final shipping aggregator and supported destinations.
- Razorpay merchant activation, enabled currencies and payment methods.
- Returns/refunds policy, tax/duty handling and legal copy.
- Final numeric values not specified in the global design (e.g. exact breakpoints, grid gutters, button heights, radii, shadows and z-index scale).
- Which supplied assets are present in the repository and their exact paths.
- Whether existing checkout, account, wishlist and cart flows are functional or visual-only.

## 7. Important scope distinction

This document describes product/business context. It does not define the exact homepage section order or the content/layout of collection, product detail, cart, checkout, account or admin screens. Those require approved screen-specific briefs under `docs/screens/`.
