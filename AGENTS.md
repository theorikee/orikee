# Orikee — AI Agent Instructions

This file is the entry point for every AI coding agent working in this repository
(OpenCode, Codex, Claude Code, or another compatible agent).

## 1. Read these documents before making changes

Read in this order:

1. `docs/PROJECT_CONTEXT.md` — product and business facts for Orikee V1.
2. `docs/orikee/global-design.md` — global visual, interaction, brand, icon and accessibility rules.
3. `docs/checklists/FRONTEND_CHECKLIST.md` — implementation and QA gates.
4. The relevant screen brief in `docs/screens/` if one exists.
5. The relevant source files and existing implementation.

If any referenced file is missing, report that fact. Do not invent its contents.

## 2. Source-of-truth hierarchy

- Product/business constraints: `docs/PROJECT_CONTEXT.md`.
- Global visual and interaction rules: `docs/orikee/global-design.md`.
- Page structure, content hierarchy and page-specific interactions: that page's approved screen brief.
- Existing application behaviour and data contracts: the current codebase and verified project documentation.
- This `AGENTS.md`: working procedure and agent behaviour.

If two sources conflict:
1. Do not silently choose one.
2. Identify the exact conflict and its impact.
3. Ask for a decision before implementing the conflicting part.
4. A screen brief may override a global rule only when it explicitly records an approved exception.

## 3. Non-negotiable Orikee constraints

- Orikee V1 is a single-vendor D2C store for artificial fashion jewellery only.
- Do not add hair accessories, apparel, bags, home décor, fine jewellery or precious jewellery.
- Do not invent product facts, prices, stock, ratings, reviews, certifications, material claims, shipping coverage, tax/duty promises or payment availability.
- Do not introduce seller onboarding, vendor portals, commissions or marketplace workflows in V1.
- Preserve existing working functionality and integrations unless the task explicitly asks to change them.
- Do not invent logo artwork, brand symbols or taglines. Use supplied assets only.
- No emojis in Orikee-authored UI, generated sample data, labels, buttons, banners, statuses or empty states.
- Use the approved Lucide registry and `lucide-react` rules in the global design system. Do not mix icon libraries.
- Do not copy another brand's proprietary layout, assets, copy, logo or distinctive design.

## 4. Required workflow for every task

### Before editing
- Confirm the task, target page/component and expected outcome.
- Inspect the relevant files and existing patterns.
- Check Git status. Never overwrite uncommitted user work.
- Read the applicable checklist and screen brief.
- Identify dependencies, routes, data contracts and affected screens.
- If requirements are ambiguous or contradictory, ask before guessing.

### During implementation
- Make the smallest coherent change that solves the task.
- Reuse existing components and tokens.
- Do not duplicate global values in component-level CSS.
- Do not rewrite unrelated pages or refactor unrelated code.
- Do not add dependencies without explaining why and getting approval when the dependency changes project scope.
- Do not replace real data or integrations with mock data without clearly marking it and obtaining approval.
- Keep responsive behaviour and accessibility in scope.
- Do not claim a task is complete merely because code was generated.

### After implementation
- Run relevant lint, typecheck, tests and production build scripts that actually exist in `package.json`.
- Test the affected route in the browser when possible.
- Check desktop, tablet and mobile layouts where the task affects UI.
- Report commands run, results, files changed, known limitations and remaining checklist items.
- Do not claim a test passed if it was not run.

## 5. Design-system rules

- Treat `docs/orikee/global-design.md` as the global design source.
- Use its exact defined brand colours and typography.
- Use the defined type scale and 4px spacing scale.
- Where a value is not specified, mark it as `TBD — requires design-system decision`; do not present an arbitrary value as approved.
- Keep one implementation source of truth for tokens (CSS variables or a typed theme module).
- When an approved global token changes, update both the global design document and implementation tokens in the same task.
- Screen-specific briefs control page order and content; they do not redefine global brand rules.
- Keep product photography truthful and product-first; use clearly labelled placeholders when real product assets are unavailable.

## 6. Change control

For a small local change, implement only the requested component or section.

For a global change affecting fonts, colours, spacing, radii, iconography, navigation, shared components or responsive foundations:
1. Explain why the change is needed.
2. List all affected screens/components.
3. Propose the exact token/component change.
4. Wait for approval.
5. Update documentation and implementation together.
6. Run cross-page regression checks.

Never silently "improve" an approved design.

## 7. Definition of done

A task is complete only when:
- The requested behaviour/design is implemented.
- Existing unrelated functionality remains intact.
- Relevant checks have been run and their results reported.
- Responsive and accessibility implications have been checked.
- The relevant checklist is updated accurately.
- Documentation is updated if a source-of-truth decision changed.

## 8. Communication format

At the start, briefly state:
- What you inspected.
- What you plan to change.
- Any ambiguity or risk.

At the end, report:
- Implemented.
- Files changed.
- Checks run and actual results.
- Remaining issues / assumptions.
- Checklist items completed or still open.

Do not dump large files into chat when you can edit the repository directly.

## 9. Visual development and self-correction

When a reference screenshot is provided, treat it as the visual source of truth.

Before coding:
- Inspect the existing project structure, `package.json`, project instructions, design system, and reusable components.
- Preserve working components and approved design decisions; do not rewrite unrelated code.

During implementation:
- Analyse the reference for layout, typography, colours, spacing, padding, margins, borders, shadows, dimensions, cropping, and responsive behaviour.
- Implement the reference as closely as possible without inventing an alternative design.

Mandatory browser verification:
- Start the development server.
- Open the actual route with OpenCode browser tools.
- Use the reference viewport dimensions where available.
- Wait for fonts, images, videos, and layout to load.
- Capture an implementation screenshot and compare it with the reference.

Automatic visual correction:
- Check container dimensions, alignment, typography, spacing, controls, colours, media cropping, responsive behaviour, overflow, and missing elements.
- Fix discrepancies in source code and repeat the cycle: `IMPLEMENT → RUN → SCREENSHOT → COMPARE → FIX`.
- Perform up to five correction iterations when needed.

Functional verification:
- Check browser console errors and failed network requests.
- Check broken images, videos, and fonts.
- Verify responsive layouts and run the available typecheck, lint, test, and build commands.
- Fix errors caused by the changes.

Do not claim visual perfection without browser verification. Do not ask the user to repeat requirements already provided. Do not replace real assets with placeholders. If blocked, report the exact blocker.

Final reports must include:
1. Files modified.
2. Changes implemented.
3. Visual checks performed.
4. Errors found and fixed.
5. Remaining differences, if any.
6. Final screenshot evidence.
