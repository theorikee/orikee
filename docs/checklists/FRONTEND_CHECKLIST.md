# Orikee — Frontend Delivery Checklist

> Use this checklist for each frontend milestone. Do not tick an item unless it has been verified.
> Status values: `Not started` / `In progress` / `Blocked` / `Done`.
> This is a working checklist, not permission to invent missing requirements.

## 0. Task setup and safety

- [ ] Confirm the exact task, target route/component and acceptance criteria.
- [ ] Read root `AGENTS.md`.
- [ ] Read `docs/PROJECT_CONTEXT.md`.
- [ ] Read `docs/orikee/global-design.md`.
- [ ] Read the relevant approved screen brief.
- [ ] Inspect existing implementation before editing.
- [ ] Check `git status`; preserve all uncommitted user work.
- [ ] Identify affected routes, shared components, integrations and data contracts.
- [ ] Record ambiguities, missing assets and TBD values before implementation.
- [ ] Confirm no conflicting instructions exist; escalate conflicts instead of guessing.

## 1. Repository and architecture audit

- [ ] Confirm framework, package manager and installed versions from repository files.
- [ ] Inspect `package.json` scripts and dependencies.
- [ ] Identify app/router structure and existing routes.
- [ ] Identify global CSS, Tailwind configuration and font loading.
- [ ] Identify design tokens and duplicate hard-coded values.
- [ ] Identify shared layout and UI components.
- [ ] Identify existing API calls, server actions and data models.
- [ ] Identify current image assets, logo, favicon and product photography.
- [ ] Identify existing functionality that must not regress.
- [ ] Produce a short audit and implementation plan before broad changes.

## 2. Global design-system implementation

- [ ] Use only supplied Orikee logo assets and preserve their proportions.
- [ ] Implement official brand palette from `global-design.md`.
- [ ] Implement Cormorant Garamond for editorial/display headings.
- [ ] Implement Inter for UI, body and transactional information.
- [ ] Implement the documented typography scale and responsive hierarchy.
- [ ] Implement the documented 4px spacing scale.
- [ ] Establish a single shared content container/grid implementation.
- [ ] Define responsive breakpoints only after verifying/approving project values.
- [ ] Centralise design tokens in one source (CSS variables or typed theme module).
- [ ] Ensure components consume tokens rather than duplicating literal values.
- [ ] Mark unspecified values as `TBD — requires design-system decision`.
- [ ] Check contrast and keyboard focus states.
- [ ] Update global design documentation if any approved token changes.

## 3. Shared components

- [ ] Header / desktop navigation.
- [ ] Mobile navigation / menu.
- [ ] Footer.
- [ ] Primary, secondary, outline, text and icon buttons.
- [ ] Inputs, selects, checkboxes, radios and quantity controls.
- [ ] Product card.
- [ ] Collection/category card.
- [ ] Price display and stock indicator.
- [ ] Wishlist control.
- [ ] Cart item.
- [ ] Search, filter, sort and pagination/load-more patterns where required.
- [ ] Modal, drawer and bottom-sheet patterns where required.
- [ ] Toast, confirmation, loading, empty, error and success states.
- [ ] Newsletter/editorial modules only when required by a screen brief.
- [ ] Verify all shared components use the same tokens and variants.

## 4. Iconography and content rules

- [ ] Use `lucide-react` only.
- [ ] Use the central Orikee icon registry; do not import ad hoc icon packs.
- [ ] Follow the approved semantic icon mapping.
- [ ] Follow icon size tokens and 1.75px default stroke.
- [ ] Use `currentColor` / semantic colour tokens; no arbitrary per-icon colours.
- [ ] Icon-only controls have accessible names.
- [ ] No emojis in Orikee-authored UI, sample content or generated states.
- [ ] Do not use emoji as icons, status indicators or decoration.
- [ ] Product examples relate only to artificial fashion jewellery.
- [ ] Do not invent material, certification, price, stock, rating or review claims.

## 5. Screen implementation — complete per screen brief

For each screen, confirm:

- [ ] Screen purpose, audience and primary action are clear.
- [ ] Section order and content hierarchy match the approved brief.
- [ ] Required components are reused.
- [ ] Global visual rules are not redefined locally.
- [ ] Required assets exist; placeholders are explicitly identified.
- [ ] All links, buttons and controls have defined behaviour.
- [ ] Loading state is defined where data loads.
- [ ] Empty state is defined where data may be absent.
- [ ] Error and success states are defined where actions can fail/succeed.
- [ ] Disabled and validation states are defined where relevant.
- [ ] Desktop layout is checked at the 1440px reference width.
- [ ] Mobile layout is checked at the 390px reference width.
- [ ] Tablet behaviour is checked between mobile and desktop.
- [ ] PWA safe areas / standalone behaviour are checked where relevant.
- [ ] No horizontal overflow or clipped content.
- [ ] No invented shipping, payment, currency or global-availability claims.

## 6. Commerce and business-rule checks

- [ ] V1 remains single-vendor.
- [ ] No seller portal, vendor onboarding or commission workflow appears.
- [ ] Product catalogue and variants use verified data structures.
- [ ] Cart quantity and price calculations use real application logic.
- [ ] Display currency is not confused with charge currency.
- [ ] Only enabled payment methods/currencies are shown.
- [ ] Shipping destinations and rates are shown only when configured.
- [ ] Taxes, duties, returns and delivery promises are not invented.
- [ ] Existing checkout/payment/shipping integrations are preserved unless explicitly changed.

## 7. Visual QA

- [ ] Compare browser output against the approved reference/screen brief.
- [ ] Typography family, size, weight and line-height are consistent.
- [ ] Heading wraps and text measure are intentional.
- [ ] Spacing, alignment and section rhythm follow tokens.
- [ ] Container widths and grid alignment are consistent.
- [ ] Buttons have consistent height, padding, radius and states.
- [ ] Cards have consistent image ratio, padding, borders and typography.
- [ ] Product image crop and ratio are correct.
- [ ] Logo size, clear space and aspect ratio are correct.
- [ ] Icons use the shared registry, size, stroke and colour rules.
- [ ] Hover, focus, pressed, selected, disabled and loading states are checked.
- [ ] Mobile touch targets are practical (aim for 44×44px where appropriate).
- [ ] Reduced-motion preference is respected.
- [ ] Colour contrast and focus visibility are checked.
- [ ] No accidental emoji or unapproved decorative effects.

## 8. Functional and technical QA

- [ ] Run the relevant lint script if present.
- [ ] Run typecheck if present.
- [ ] Run unit/component tests if present.
- [ ] Run relevant end-to-end tests if present.
- [ ] Run production build.
- [ ] Test affected routes in a real browser.
- [ ] Check browser console for errors.
- [ ] Check network failures and missing assets.
- [ ] Check keyboard navigation and form labels.
- [ ] Check responsive layouts at desktop/tablet/mobile sizes.
- [ ] Confirm existing unrelated routes and flows still work.
- [ ] Do not report checks as passed unless they were actually run.

## 9. Git and handoff

- [ ] Review the final diff.
- [ ] Confirm no secrets, `.env` files, API keys or credentials are committed.
- [ ] Confirm no accidental generated files or unrelated formatting changes.
- [ ] Update relevant screen brief / global design docs if decisions changed.
- [ ] Update this checklist accurately.
- [ ] Create a descriptive Git commit after approval.
- [ ] Report files changed and why.
- [ ] Report commands/tests actually run and their results.
- [ ] List remaining issues, blocked items and assumptions.

---

## Milestone acceptance gates

### Gate A — Design system
- [ ] Tokens and shared foundations implemented once.
- [ ] Typography, palette, spacing and icons verified.
- [ ] No page-specific conflicting global styles.

### Gate B — Screen complete
- [ ] Screen matches its approved brief.
- [ ] Shared components reused.
- [ ] Desktop, tablet and mobile reviewed.
- [ ] Interactions and states verified.

### Gate C — Frontend release candidate
- [ ] All in-scope screens implemented.
- [ ] Cross-page consistency checked.
- [ ] Existing functionality regression-tested.
- [ ] Production build passes.
- [ ] Known limitations documented.

## Current sprint record

- Project/milestone:
- Target routes:
- Start date:
- Owner:
- Current status:
- Approved reference links/files:
- Open decisions:
- Blockers:
- Last verified build/test:
- Git commit:
