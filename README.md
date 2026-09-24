# Dayone

A working, responsive first version of a guided online-business launch website. People can begin with no idea, bring an idea of their own, or pick up an existing idea at the stage where they are now.

## Run locally

```bash
npm install
npm run dev
```

Open the address printed by Vite. To check a production bundle, run `npm run build` and then `npm run preview`.

For deployment, host the contents of `dist/` on any static host configured to fall back to `index.html` for app routes.

## What works

- Responsive marketing site with routes for every starting point, a path library, and FAQs.
- Multi-step onboarding covering skills, experience, time, spending room, interests, location, and goals.
- Explainable recommendations from 12 starter paths. Matching uses chosen skills, simple keywords in optional experience text, interests, time, and spending room. It does **not** predict income or use an AI service.
- Path pages with a first offer example, a validation move, honest caveats, and a six-stage roadmap.
- A customizable plan for someone's own idea, including a way to begin at a later stage if they have already started.
- A launch workspace with 18 actionable tasks, guidance, reusable prompts, individual notes, editable business drafts, progress tracking, multiple saved plans, and Markdown export.
- Progress and drafts persist between visits in the **same browser** using `localStorage`. Questionnaire answers in progress use `sessionStorage` until submitted.

## Product boundaries

This is a fully usable **browser-saved MVP**, not a hosted account service. It does not include sign-in, cross-device synchronization, email, payment processing, live opportunity research, AI-generated advice, or legal/tax advice. Starter paths are examples to investigate, not verified opportunities or promises of income. Users should check local laws, payments, professional rules, and demand before spending money.

## Structure

- `src/Landing.jsx` — public-facing experience
- `src/Onboarding.jsx` — three starting routes and profile questions
- `src/Explore.jsx` — matches, path library, and path detail
- `src/Workspace.jsx` — stages, tasks, drafts, saved progress, and export
- `src/data.js` — starter paths and transparent matching heuristic
- `src/plan.js` — stage/task content and working-draft prompts
- `src/state.jsx` — browser persistence and project actions
- `src/styles.css` — responsive visual system
- `public/` — locally served hero art, favicon, and font

The design uses the user's supplied airy, sky-and-meadow visual direction, but the branding, copy, path library, illustrations, and interactive app are original.
