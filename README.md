
# Orikee

Global artificial fashion jewellery e-commerce platform.

Orikee is a modern e-commerce platform focused on artificial fashion jewellery and accessories, delivering a minimalist luxury shopping experience.

## Technology Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Node.js

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## Project Structure

```text
orikee/
├── AGENTS.md
├── docs/
│   ├── PROJECT_CONTEXT.md
│   ├── orikee/
│   │   └── global-design.md
│   ├── checklists/
│   │   └── FRONTEND_CHECKLIST.md
│   └── templates/
│       └── SCREEN_BRIEF_TEMPLATE.md
├── public/
│   ├── images/
│   └── videos/
└── src/
    ├── app/
    ├── components/
    └── lib/
```

## Development Guidelines

- Follow the project's AGENTS.md instructions.
- Preserve the approved Orikee design system.
- Use reusable components.
- Maintain responsive layouts.
- Verify UI changes in the browser before completing tasks.
- Never guess missing product or business requirements.

## AI Development Workflow

This repository supports OpenCode, Codex and other coding agents.

Before starting development, read:

1. `AGENTS.md`
2. `docs/PROJECT_CONTEXT.md`
3. `docs/orikee/global-design.md`
4. `docs/checklists/FRONTEND_CHECKLIST.md`

Start with a read-only repository audit before modifying existing code.

## AI Project Kit Documentation

- `AGENTS.md`: Mandatory instructions for coding agents.
- `docs/PROJECT_CONTEXT.md`: Confirmed business and product context.
- `docs/orikee/global-design.md`: Global design source of truth.
- `docs/checklists/FRONTEND_CHECKLIST.md`: Implementation and QA checklist.
- `docs/templates/SCREEN_BRIEF_TEMPLATE.md`: Reusable page-level design brief.

## Deployment

The project is intended to be deployed on Vercel with GitHub integration.

- `main`: Production deployment.
- `develop`: Development Preview deployment.

## First Development Audit

Ask the coding agent to:

1. Inspect the existing architecture and routes.
2. Identify design tokens and shared components.
3. Audit the implementation against the global design.
4. Report checklist status with evidence.
5. Identify missing requirements and blockers.
6. Propose a phased implementation plan.

Do not begin redesigning without approval.

## Important

The checklist is a quality gate, not a requirement to build every possible e-commerce feature.

Only implement features that are included in an approved task or screen brief.

## License

All rights reserved. Orikee.
