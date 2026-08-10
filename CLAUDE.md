# CLAUDE.md

Context and working rules for this repository.

## What this is

The personal site for **Matthew Mulenga** (mattmulenga.com). Its single job is to convince a
hiring manager or recruiter, in about thirty seconds, that Matt is a strong mid-to-senior backend
engineer. Every decision should be judged against that.

Matt is **not** a career changer. He is a working software developer with six years of production
ownership at the University of Saskatchewan, moving from university systems into industry. Copy
should never frame him as junior, transitioning, or aspiring.

## Stack

- React 18 + Vite + **TypeScript** (strict). Config in `tsconfig.json`; there is no separate
  `tsconfig.node.json` — one config covers `src`, `vite.config.ts` and `scripts/`
- Tailwind CSS v4, configured **in CSS** via `@theme` — there is no `tailwind.config.js`
- No router, no state management, no backend — this is a single static page
- **Pre-rendered at build time.** `npm run build` renders the page to static HTML, so the site
  works with JavaScript disabled. Deploys as static files from `dist/`

```bash
npm install
npm run dev        # localhost:5173
npm run typecheck  # tsc --noEmit
npm run build      # typecheck -> client bundle -> SSR bundle -> pre-render -> dist/
```

`build` runs `tsc --noEmit` first, so a type error fails the build.

## Architecture

```
src/
  main.tsx                 client entry — hydrates in prod, plain render in dev
  entry-server.tsx         SSR entry used by the pre-render step
  App.tsx                  page composition — section order lives here
  data/content.ts          ALL copy, plus the types describing it. Single source of truth.
  styles/main.css          @theme tokens -> base layer -> component classes
  components/              presentational only, no copy hardcoded
scripts/
  prerender.js             injects the SSR output into dist/index.html (plain JS, type-checked)
```

### Rules

1. **All text lives in `src/data/content.ts`.** Components take data as props or import from it.
   If you're about to type a sentence of user-facing copy into a `.tsx` file, stop and put it in
   `content.ts` instead.
2. **Content types live next to the content.** `content.ts` exports both the data and its
   interfaces (`Profile`, `Featured`, `Fact`, `Project`, …). Components import those types rather
   than redeclaring prop shapes — `ProjectCard` takes `Project` directly, which is what keeps
   `projects` and `ownership` interchangeable.
3. **Colours and fonts come from the `@theme` block at the top of `main.css`.** Declaring
   `--color-sig` there is what makes `bg-sig` / `text-sig` / `border-sig` exist. Do not introduce
   new hex values in components — add a token instead. Arbitrary values like `text-[15.5px]` are
   fine for one-off sizing; arbitrary *colours* are not.
4. **Utilities go in the JSX.** Only extract a class into `@layer components` when the pattern
   repeats across files or needs a descendant/pseudo selector — that's why `.mm-card`,
   `.mm-chip`, `.mm-kicker`, `.mm-node` and `.mm-connector` exist and nothing else does.
5. **No UI library.** No Bootstrap, no MUI, no shadcn, no daisyUI. Tailwind and hand-written
   components only.
6. Keep components small and single-purpose. One section per file.

### Design system

| Token | Value | Utility | Use |
| --- | --- | --- | --- |
| `--color-mist` | `#EEF1F4` | `bg-mist` | page background |
| `--color-paper` | `#FFFFFF` | `bg-paper` | cards and surfaces |
| `--color-ink` | `#10141A` | `text-ink` | text, dark contact panel |
| `--color-sig` | `#2B59FF` | `text-sig` | links, primary buttons, highlighted metrics |
| `--color-sig-deep` | `#1E42CC` | `hover:bg-sig-deep` | accent hover |
| `--color-flag` | `#FF5A47` | `bg-flag` | contact CTA button, highlighted diagram node |
| `--color-ash` | `#5C6673` | `text-ash` | secondary text |
| `--color-copy` | `#4E5763` | `text-copy` | body copy inside cards |
| `--color-line` | `#DDE2E8` | `border-line` | hairlines and borders |
| `--color-go` | `#0B8A55` | `text-go` | availability dot |
| `--container-page` | `1160px` | `max-w-page` | page width |

Type: `font-display` (**Archivo**, 800/900) for headings, `font-sans` (**Inter**) for body,
`font-mono` (**JetBrains Mono**) for labels, tags and data. Loaded via Google Fonts in
`index.html`.

Page shell is `mx-auto w-full max-w-page px-7` — reuse it, don't invent a new wrapper.

## Page order (don't reshuffle without a reason)

1. Nav — name, three anchors, résumé download
2. Hero — kicker, headline, subline, four stat chips
3. Featured case study — the credential network integration, with CSS architecture diagram
4. Selected work — three project cards, then two ownership cards
5. The facts — scannable table for recruiters
6. How I work — four cards
7. Contact — dark panel, email, links

## Open TODOs

Search the codebase for `TODO` — they're all in `content.ts` and `index.html`.

- [x] Add `public/matthew-mulenga-resume.pdf`.
- [x] Add `public/matthew-mulenga.jpg` (portrait, roughly 4:5).
- [ ] Real GitHub URL in `profile.github`, or remove the link from `ContactPanel` and `content.ts`.
      Currently points at `github.com/mmulenga` — confirm that account exists and is worth showing.
- [ ] Write the case study page the featured "Read the full case study" link points at.
- [ ] Matt to rewrite the "What made it hard" answer in `featured.qa` in his own words.
- [ ] Confirm the availability wording — it currently says "interviewing now", which is loud if
      he's searching quietly while employed.
- [ ] Confirm the work authorization line.
- [ ] Add `public/og-image.png` (1200×630), then uncomment the `og:image` meta tag **and** the
      `twitter:image` TODO next to it in `index.html`.
- [ ] `index.html` carries a hand-written JSON-LD `Person` block that duplicates `profile` from
      `content.ts`. It can't import JS, so the two drift silently — update both together.
- [x] Delete `components/EditorNote.jsx` and its usage in `App.jsx` before launch.

## Things to be careful about

- **Nothing confidential.** The systems described are internal to the University. The architecture
  diagram is deliberately drawn in CSS with generic node labels. Don't add screenshots, schemas,
  vendor names or internal URLs without Matt confirming they're cleared.
- **The site must work without JavaScript executing successfully.** This is now handled: the
  build renders `App` to HTML via `src/entry-server.tsx` and `scripts/prerender.js` injects it
  into `dist/index.html`. Don't regress it — if you add a component that needs `window` or
  `document` at module scope, the SSR bundle will fail to build. Verify with
  `curl localhost:4173 | grep "Six years"` against `npm run preview`, not with a browser.
- **`main.tsx` hydrates in production and plain-renders in dev**, branching on whether `#root`
  already has children. Dev serves an empty shell, so an unconditional `hydrateRoot` breaks dev,
  and an unconditional `createRoot` silently throws away the pre-rendered DOM in prod — with no
  console warning either way. Leave that conditional alone.
- **Tailwind v4 scans raw source text for class-name candidates — including identifiers and
  comments.** Naming a local `container` emits the unused `.container` utility into the CSS
  bundle. If the CSS size moves for no visible reason, look for a variable or comment that
  collides with a utility name.
- **Accessibility isn't optional here** — a broken site is a bad first impression to the exact
  audience this page exists for. Keep the skip link, keep focus-visible outlines, keep the facts
  table as a real `<table>` with `<th scope="row">`.
- Respect `prefers-reduced-motion` — already handled in the base layer of `main.css`.

## Definition of done for any change

- `npm run build` succeeds with no warnings you introduced (this includes `tsc --noEmit`)
- No `any`, no `@ts-expect-error`, no non-null `!` assertions added to get it passing
- The built page still renders with JS disabled — check `dist/index.html` has real markup
  inside `<div id="root">`, not an empty shell
- Checked at 375px, 768px and 1440px
- Keyboard-navigable, visible focus rings intact
- No new hardcoded colours (add a `@theme` token) and no copy outside `content.ts`
- No `tailwind.config.js` — v4 config belongs in `main.css`
