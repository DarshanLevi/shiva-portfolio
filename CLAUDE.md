# CLAUDE.md — shiva-portfolio

Single source of truth for this project: brief, rules, design decisions, progress — and the history needed to pick up exactly where the last session stopped.

> **Rule 0 (user, 2026-10-19): update this file at the end of every task.** Refresh **Now**, the **Task board**, **Decisions**, the **Changelog**, and any section the task touched. A task isn't done until this file reflects it.
>
> **Now:** Loader (ring) ✅ · Hero v2 ✅ (menu after `web.jpg.jpeg`, D26) · **Branding = the hall of doors ✅**, now framed exactly like the reference (D34): pitch black and wordless; doors, lights and floor line at the reference's measured positions; camera almost at floor level; rough mottled floor with long bright reflections; dark textured rock ceiling. Doors still grouped closer than in the reference (user's earlier request). Hover opens a door onto a placeholder brand; click zooms through into its page (`/branding/<slug>`, template). Not committed yet. **Next:** user review → commit; then real brands from `contents/`, and the other service pages.

---

## Start here (new session or new machine)

1. **Run it:** `npm install` (first time on a machine; needs Node ≥ 22.22) → `npm run dev` → open <http://localhost:4321>. The ring loader plays for ~4 s, then hands over to the hero (the ring draws itself round the portrait). Click **Branding** → `/branding`, the hall of doors: hover a door, click to walk through into a (placeholder) brand page.
2. **Read:** **Working with the user** → **Components** (what exists) → **Next up** → **Open questions**.
3. **Inputs:** `reference/` (the design images) is in git; `contents/` is still empty. The **Inputs inventory** describes each image.
4. **History:** **Session history** records what happened and why, with the user's own words for each spec.

## Working with the user

- **Plain language.** Explain tech by what it does for them, with everyday analogies. Keep framework jargon (islands, hydration, WAAPI, view transitions) out unless explained in passing. The user asked "what is Astro?" after it was picked, then asked again for an understandable version — the video-export analogy in **Tech in plain words** is what landed.
- **Ask before stack/tooling choices** that would be hard to undo; explain the options plainly, with a recommendation.
- **Section by section.** The user drops references for one section, we build it, then move on (Loader → Hero → …). Specs arrive as short, casual messages — capture them in the user's words (see **Session history**) and confirm interpretations that change the design.
- **Minimal base first; motion and cyberpunk accents last.**
- **Verify visually** before calling UI work done (see **Verification**).
- **Git:** commit or push only when asked. Input files are tracked too (user, 2026-10-19: "images too") — commit new `reference/` / `contents/` files along with the work that uses them, but flag anything that looks private (phone number, address, ID documents) first.
- **Rule 0:** update this file at the end of every task.

## Session protocol (Claude)

1. Read this file. Check **Now**, **Next up** and the **Task board**.
2. Compare `reference/` and `contents/` against the **Inputs inventory**. Analyze anything new before designing or building.
3. Treat `reference/` and `contents/` as read-only user inputs — never edit, move, or delete them. Derived notes go in this file.
4. **End of every task (Rule 0):** update **Now**, tick the **Task board**, log **Decisions**, add a **Changelog** line (date · what · why), refresh any section the task changed.
5. Commit or push only when the user asks.

## Next up

1. **User review of the Branding hall** (D28–D34): the reference framing (D34), the floor and ceiling textures, the doors' spacing (closer than the reference: keep, or match the reference's spacing too?), the hover, the walk-through zoom, the brand page template, phone behaviour.
2. **Content needed for Branding:** the real brands (name, key colour, logo/mark, story, facts, images) → `src/data/brands.ts` (+ images); how many doors (4 now, like the reference). Placeholders until then: Brand 01–04, invented colours and simple geometric marks.
3. **Still open (hero):** the real portrait (high-res, into `contents/`; swap `src/assets/hero-portrait-placeholder.jpg`); the name ("Shiva" in the header and hidden `h1`). Then pages for Graphic Design and Video Editing (add an `href` in `src/data/services.ts`): same door hall, or something of their own?

### Hero reference analysis (2026-10-19, session 2) — *set aside*

> Kept for history. Hero v1 followed ref 1 (D15); then the user said "forget references" and v2 is our own design (D16).

Positions are approximate, in pixels of the 1600-wide images, with % of width/height for the build.

**`2nd_ref_hero-page.jpeg` (1600×899): structured, editorial layout**

- **Frame:** hairline grey rectangle inset ≈24 px (1.5%) on all four sides.
- **Left rail:** a column from the frame to a full-height vertical hairline at x≈265 (≈16.5%). Three items at y≈165 / 380 / 595 (≈215 px pitch): a small number (`01`) with an outline line icon to its right (01 two overlapping squares · 02 two overlapping rings · 03 play triangle), a short hairline under it (x 84–208), then the label in small wide-tracked caps, wrapped (`GRAPHIC / DESIGN`, `BRANDING`, `VIDEO / EDITING`).
- **Content column** starts at x≈343 (≈21%):
  - a short 75 px hairline dash at y≈95, leading into the headline;
  - headline `Ideas / made / visible.` on 3 lines (y≈185–505): line pitch ≈105 px (≈6.6% of width), leading ≈0.85, semibold neo-grotesk, tight tracking, white;
  - subline `Branding · Design · Motion` at y≈534: light weight, mixed case, very wide tracking (≈0.2em), grey.
- **HUD marker:** a hairline runs from the rail divider (x 265) to a ≈64 px ring with a centre dot at (460, 643). It links the rail to the content and is the most "cyberpunk" detail in the refs.
- **Caption:** a short vertical bar (x 343, y 765–817) next to `TURNING IDEAS / INTO IMPACT`, tiny wide-tracked caps.
- **Portrait:** right half (x≈720–1570), cut by the bottom of the frame; B&W, rim-lit on black, subject looking up and right (away from the text), arms crossed.

**`1st_ref_hero-page.jpeg` (1600×900): stripped-back version**

- No frame and no headline: the service list *is* the hero. `GRAPHIC DESIGN / BRANDINGS / VIDEO EDITING`, large wide-tracked caps in a geometric sans (round G/C/O), each with a 2 px white vertical bar to its left (x≈180); items at y≈300 / 445 / 578, centred vertically.
- Portrait on the right (same person, blazer), bleeding off the right and bottom edges.

**Common ground:** black background, monochrome, same person (presumably the owner), portrait right / text left, the same three services (ref 1 says "Brandings"; ref 2 "Branding").

**Recommendation (to confirm with the user):** let ref 2 lead. It already contains ref 1's service list (as the rail) and adds a headline, the frame and the HUD marker, which supply the cyberpunk pinch. From ref 1, borrow the vertical-bar marker, e.g. as the hover/active state of rail items. Possible pinch, pick 1–2: mono numbers and caption · the HUD dot pulsing slowly · corner brackets on the frame · a one-time text scramble when the headline reveals.

**Phone (to design):** the rail can't stay a side column at 390 px. Likely options: the rail becomes a 3-item row or list under the headline; the portrait goes above the headline, or behind it fading into black.

## Project brief

- **What:** personal portfolio website.
- **Brief (user's words):** "most modern + minimalistic + pinch of cyberpunk" — across theme, design, alignment and structure.
- **Owner, goals, audience:** TBD → from `contents/`. References suggest a creative doing graphic design, branding and video editing (confirm).
- **Planned later (user, 2026-10-19):** directional navigation between the menu and projects; possibly 3D. See **Tech stack** for how Astro covers both.

### Working interpretation (hypothesis — validate against `reference/`)

- **Minimal is the base; cyberpunk is the seasoning.** Rough budget: ≤10% of visual weight. A cyberpunk detail that doesn't earn its place gets cut.
- **Modern:** strict grid, precise alignment, generous negative space, fluid type, dark-first, motion only where it adds meaning.
- **The pinch (pick a few, not all):** glow · one neon accent colour · monospace for labels/meta/HUD text · hairline grid lines and corner brackets · subtle glitch/text-scramble on hover or reveal · faint scanline/noise texture · terminal-flavored microcopy.
- **Avoid:** neon everywhere, chromatic aberration on everything, unreadable display fonts, effects that cost readability or performance.

## Inputs (user-provided)

| Folder | Purpose | Put in it |
| --- | --- | --- |
| `reference/` | Design inspiration | Screenshots of sites/UI you like, `links.md` for URLs, palettes, fonts. Add a line per item on *what* you like. For motion, give the live link + a one-line description — Claude can read images and PDFs, not video playback. |
| `contents/` | Content — the facts | Resume/CV, bio, projects (name, problem, your role, stack, outcome, links, images), experience, skills, socials/contact, hero photo, preferred tone of voice. |

### Rules for inputs

- References are inspiration, not a source: don't copy code, assets or copy from them; respect font/image licenses.
- Content comes only from `contents/` (or copy the user put in their own reference mockups, marked as placeholder). Never invent facts, metrics, employers, dates or links — mark gaps `TODO(content)` and list them in **Open questions**.

### Inputs inventory

| File | What it is | Takeaway | Used for | Analyzed |
| --- | --- | --- | --- | --- |
| `reference/Loading.jpeg` | Loader ref (400×300) | Minimal bulb: glowing open arc (the glass) + 2 grey threads + nub, near-black bg, soft room glow, faint vertical grain | Loader (geometry measured from pixels; now a full ring, D14) | 2026-10-19 |
| ~~`reference/1st_ref_hero-page.jpeg`~~ (deleted by the user in session 2; still in git history) | Hero ref (1600×900) | Black bg; B&W portrait on the right; left list "Graphic Design / Brandings / Video Editing" with vertical hairline markers; wide-tracked caps | Hero (next) | 2026-10-19 (full: see **Hero reference analysis**) |
| ~~`reference/2nd_ref_hero-page.jpeg`~~ (deleted by the user in session 2; still in git history) | Hero ref (1600×899) | Hairline inset frame + left rail (01–03 services, line icons, dividers); huge tight sans "Ideas made visible."; tracked subline "Branding · Design · Motion"; line-to-circle-dot HUD marker; caption "Turning ideas into impact"; B&W portrait right | Hero (next) | 2026-10-19 (full: see **Hero reference analysis**) |
| `reference/Four White Doors in the Endless Hall.png` | Branding page ref (1672×940) | Pitch-black hall: four identical white double doors. **Measured (D34):** door + casing 196×233 px (11.7% of the width, 24.8% of the height), casing top at y 338, foot of the wall at y 571 (60.7%); door centres ≈ 229 / 628 / 1031 / 1430 (spacing ≈ 2.05 door widths); light panels at y 251–258 (27%), ≈ 72 px wide (0.37 door widths), their side edges slanting towards a vanishing point at about the floor line (camera almost at floor level, level, frame shifted up); door details: stepped architrave (≈ 9% of the width), tall raised panels (top 7–73%, bottom 79–93.5% of the leaf), long dark steel pulls on posts (43–71%), small hinges. Floor brightness under a door centre ≈ 185 → 160 → 175 (y 590–700) → 224 peak at y≈820 (the light's reflection) → 87 at y 930; between doors ≈ 5–15. Ceiling: dark rough texture lit above each light (mean ≈ 15 above a light) | Branding hall (D28, D30, D34) | 2026-10-19 (measured in D34) |
| `reference/web.jpg.jpeg` | Menu/background ref (2600×1463) | Pure black with film dust (specks, denser top-left) and a few fine scratches; three items in small bold widely tracked caps (~0.3em) with a small square bullet, ~23% of the height apart, starting ~9% from the left, no lines; DIN-like squarish sans | Hero menu + background (D26) | 2026-10-19 |
| `contents/` | — | Doesn't exist in this copy (git doesn't keep empty folders); create it when adding content | — | — |

## Design language (D16: our own, references set aside)

- **Palette:** monochrome: near-black `#060606`, white type, mid-grey secondary. **The accent is light itself:** white glow (`--glow`), as in the loader. No colour accent.
- **Menu type (D26):** Geist 600, uppercase, `letter-spacing: 0.3em`, `clamp(0.95rem, 1.5vw, 1.75rem)`, with a small square bullet (0.28em, glows on hover).
- **Type:** Geist (sans) for names and titles: regular weight with tight negative tracking at display sizes. Geist Mono, small and uppercase, for labels (`← Index`, `Service`, `[ Template ]`). The home page has no mono labels any more (D19).
- **Signature motif: the ring.** Loader ring → hero ring (eclipse frame round the portrait) → the header's mini ring mark → the favicon. A light travels round it: the loader's sweep, the hero ring drawing itself, the dot that keeps orbiting.
- **Texture:** the home hero uses **film dust** (generated specks + scratches, D26) instead of the grain; the loader and inner pages keep the faint vertical grain (`--grain`). A low radial haze sits behind the ring.
- **Structure:** the services menu on the left (spaced caps with square bullets, no lines, D26), the ring stage on the right, a header in the corners (D18). Phones stack: ring above, menu below. Generous black space.
- **Interaction:** hovering a menu item turns its hairline into a **lifeline**: a flat trace with two tiny heartbeats (±3 px) that draws itself left → right in 1 s, with a **small rainbow-tinted head riding its tip** (white tip + short magenta → cyan trail, jittering ~1 px); **a matching rainbow band passes through the word below, in step with the head** (D24). Both fade out at the end. Then the line turns **rainbow, with the colours travelling left → right**, and a **minimal glitch** twitches it now and then (1–2 px jumps, faint ghosts, an odd rainbow slice) (D20). The haze brightens. Pages crossfade (view transitions); the header holds still. (The Branding menu item used to glide into the hall's title; the hall has no visible title since D32.)
- **Branding hall (D28, D30, D31):** a pitch-black hall: white doors grouped in the middle (dark space at both ends), each under a light set flat into a rough rock ceiling and shining down on it, standing on a rough polished floor that reflects the doors and lights in long streaky smears; no words at all (the page heading is for screen readers only, D32); framed like the reference: camera level and almost at floor level, the picture framed high so dark ceiling shows above the lights (D34). Each door hides a brand in its own coloured light, which reaches the floor and the ceiling when the door opens. Colour lives only behind the doors (and on brand pages), so the hall stays monochrome until a door opens. Walking through a door = zooming into its light, which becomes the brand page.
- **Copy seen in references** (placeholder until confirmed in `contents/`): services Graphic Design, Branding, Video Editing.

## Content map — *pending: `contents/` is empty*

## Design system — partial

Tokens live in `src/styles/tokens.css`.

| Token | Value | Notes |
| --- | --- | --- |
| `--color-bg` | `#060606` | site background |
| `--color-fg` | `#f2f2f2` | text |
| `--color-muted` | `#8c8c8c` | secondary text |
| `--color-line` | `rgb(255 255 255 / 0.12)` | hairlines |
| `--glow` | `0 0 0.75rem rgb(255 255 255 / 0.45)` | white glow (box-shadow): the site's accent |
| `--font-sans` | `"Geist Variable"` + system fallbacks | self-hosted via `@fontsource-variable/geist` (OFL), imported in `BaseLayout.astro` (D16) |
| `--font-mono` | `"Geist Mono Variable"` + system mono | `@fontsource-variable/geist-mono` (OFL); labels, indexes, meta |
| `--grain` | SVG feTurbulence data-URI | shared grain texture (loader, hero, tiles); use at ~5–6% opacity |
| `--gutter` | `clamp(1.25rem, 4vw, 3rem)` | page edge padding |
| `--ease-out` / `--ease-in-out` | `cubic-bezier(.22,1,.36,1)` / `cubic-bezier(.65,0,.35,1)` | motion |
| Type scale · radius | TBD | sizes are local to components for now; promote to tokens once patterns repeat |

## Components

### Loader — `src/components/Loader.astro` ✅

- **Look:** a full glowing ring (D14). Started from `reference/Loading.jpeg`; the bulb's screw base and the gap at the bottom were removed at the user's request. Geometry in viewBox units = reference pixels: ring radius 40, stroke 10, viewBox 120×120, on screen `clamp(120px, 20.8vmin, 184px)` (same scale as before). Glow = SVG blur filters. Room light = radial gradient calibrated to the reference's brightness at 1.5–4 ring radii. Room light rests at **8%** (was 35%; briefly 0): a barely-there haze, per the user. It rises to full with the moving light and falls back with it. Tune via `.ring__ambient` opacity. Grain = feTurbulence noise stretched vertically, 6% opacity.
- **Behaviour:** the light enters at the bottom of the ring and travels clockwise (up the left side, over the top, down the right) all the way round (fill), then drains out the same way, and loops. Once the page has loaded **and** `MIN_DURATION_MS` has passed, it stops on the next full fill → "lights on" bloom → fades out while the page rises in → removes itself.
- **Timeline (fast connection):** fill 0.1–1.6 s → drain → fill to ~3.8 s → lights on → fade 4.3–5.1 s.
- **Tuning knobs** (top of its `<script>`): `MIN_DURATION_MS` 3000 · `MAX_WAIT_MS` 8000 · `FILL_MS` 1500 · `DRAIN_MS` 750 · `LIT_MS` 450 · `LEAVE_MS` 800.
- **Plumbing:** pages opt in with `<BaseLayout loader>` (home only). Then an inline script in `BaseLayout.astro` adds `js-loading` to `<html>` before first paint (shows the loader, locks scroll), plus a 15 s failsafe that removes it. The loader adds `is-loaded` as it fades; components key their entrance off these classes (the `data-reveal` system in `global.css` is still available). `<main>` is `inert` while loading. No JS → no loader, page visible.
- **Reduced motion:** no sweep — the ring fades in fully lit, holds, then crossfades out.
- **When it plays (D17):** on a fresh visit and on reload. It is **skipped** when arriving from another page of this site (same-origin referrer) or via back/forward, so returning home from `/branding` doesn't replay it. In that case the bootstrap doesn't add `js-loading`, and the loader script just removes itself.

### Hero — `src/components/Hero.astro` ✅ v2 (placeholder content)

- **Our own design** (D16; user: "forget refernces make this into more modern and minimilstic and you can may use some stuff we did in loading"). v1 (ref 1 layout + Montserrat, D15) is replaced.
- **Stage (right column; centred on phones):** an SVG ring (`r=48` of a 100 viewBox, stroke 0.55, round caps, same blur glow as the loader, faint track under it) round a circular B&W portrait (inset 9%, radial vignette mask, `object-position: 46% 38%`, `scale: 1.12`), with a low radial haze behind. A small glowing dot orbits the ring (18 s per lap). Ring size `--ring`: `clamp(15rem, 52vmin, 34rem)`.
- **Services (D26, after `reference/web.jpg.jpeg`):** a `nav` menu in the left column (max 30rem, `margin-left: max(0px, 9vw - gutter)`, vertically centred, `row-gap: clamp(2rem, 16vh, 11rem)`; phones 1.25rem): Geist 600 uppercase, `letter-spacing: 0.3em`, `clamp(0.95rem, 1.5vw, 1.75rem)`, a square bullet (`.service__name::before`, 0.28em, currentColor, glows on hover). No hairlines at rest. All three items white; only Branding is a link (`<a>`), the others are `<div>`s. No numbers, arrows or "Soon" (D19).
- **Film dust (D26):** the shared `Dust` component (seed 7), replacing the hero's grain. Not used in the Branding hall since D30 (pitch black).
- **Menu hover (all three items; also keyboard focus on the live one), D19:** an SVG lifeline sits on the item's top hairline (`viewBox 0 0 480 12`, `preserveAspectRatio="none"`, baseline y=6; path built by `beat(x, r)` in the frontmatter: two tiny ECG complexes, ±3.2 and ±2.2 units). Layers: white main trace (glow filter `#trace-glow`, defined in the ring SVG's `<defs>`), drawn via `stroke-dashoffset` in 1000 ms (`--ease-in-out`). **Arrival (D23, D24):** `.service__head` (glow filter) = a white tip (`TIP` 0.012 of the line, 1.4 wide) plus a rainbow trail behind it (`TRAIL_COLORS` cyan → green → yellow → red → magenta, `TRAIL` 0.018 each, 1 wide, 75%), built by `dashRun()` in the frontmatter; each dash runs from offset L to L − 1 (`dash-run`, per-path `--from`/`--to`) with the same 1 s ease as the line, so it rides the drawing tip; the group jitters ±1 px (`head-jitter`, `steps(1)`) and fades out between 1.0 and 1.2 s. **Word scan (D24):** `.service__scan` = a copy of the name (`aria-hidden`), absolutely positioned over the whole row (`inset: 0`, `padding-block: inherit`, so the text lines up and the box is as wide as the line), `color: transparent` with a 4.5rem rainbow gradient shown only through the letters (`background-clip: text`); `scan-run` slides it from −4.5rem to 100% with the same 1 s ease, which keeps the band's right edge under the head's tip; 85%, ±1 px jitter, fades with the head. Full-line magenta/cyan ghosts and `.service__glitch` (rainbow gradient masked into 1 px scanlines, `mix-blend-mode: screen`) are now only used by the idle twitches. The earlier random slice burst and the RGB split on the word were removed (D23). **Then (D20):** the white trace dims to 0.2 (`main-handoff`) and `.service__rainbow` fades in (from 950 ms): six dashed copies of the line, one per colour (`RAINBOW` in the frontmatter; band 0.03 of the line, period 0.18, each copy offset by one band, so they tile seamlessly). `band-run` moves them left → right (1.4 s per period; per-band `--from`/`--to`). **Kept nearly invisible** (user: "minimal as possible so thin and slight unseeable"): stroke 0.8, group opacity 0.6 (raised from 0.6 / 0.35, D27), no glow. **All glitching is minimal too (D22):** ±1px offsets, hairline ghosts ≤40%, 6px slice strip of 1px scanlines ≤35%, word RGB split ±1px ≤45% alpha; idle twitches 1px, ghosts ≤30%, slices ≤20%. Idle glitch from 1.4 s (slices from 1.7 s): `idle-jitter` (whole SVG, 2.8 s cycle, twitches at 61% and 88%), `idle-ghost-*` (faint ghost flashes, same moments), `idle-slices` (3.6 s, at 40% and 78%); still otherwise. On leave: fade out in 250 ms, then reset. Reduced motion: no head, word scan, glitch or rainbow; the white lifeline just appears.
- **Header:** `SiteHeader` (name + mini ring mark; nothing on the right on the home page).
- **Entrance after the loader:** the ring draws itself from the bottom, clockwise (1.5 s, the loader's fill at hero size, via `stroke-dashoffset` with `pathLength=1`); the haze rises with it; the portrait fades/scales up inside (from 0.5 s); the orbiting dot appears where the ring closes and sets off (1.5 s); the header and services rise in (staggered, from 0.9 s). When the loader is skipped, everything is simply there. Reduced motion: fades only, no orbit.
- **Layouts (D18):** desktop/landscape = two-column grid, `minmax(0, 1fr) minmax(0, 1.2fr)`: menu left, ring centred in the right column; ring `min(clamp(15rem, 52vmin, 34rem), 44vw)`; top padding clears the header. Previously (D16) the ring was centred on the viewport with the services along the bottom. **Portrait-shaped screens** (`max-aspect-ratio: 4/5`: phones upright, upright tablets) = no columns: ring centred (absolute) and the menu pinned to the bottom; ring `min(76vw, 46svh, 30rem)`, lifted on short screens to clear the services (`top: min(50%, calc(100% - 13rem - var(--ring) / 2))`). **Short wide screens** (`max-height: 30rem`, e.g. a phone on its side) = ring `40svh` so everything fits on one screen.
- **Semantics:** visually hidden `h1` ("Shiva: graphic design, branding and video editing", TODO(content)); services in `nav aria-label="Services"`; the portrait has alt "Placeholder portrait".
- **Portrait:** `src/assets/hero-portrait-placeholder.jpg`, from Unsplash, photo by Hadi Basirat (<https://unsplash.com/photos/a-man-in-a-white-hoodie-looking-up-into-the-sky-yQfkbDoNAkU>, Unsplash License, free use), converted to B&W with extra contrast. `<Image>` serves WebP at 400–1200 px. **Placeholder: replace with the owner's photo.**

### Site header — `src/components/SiteHeader.astro` ✅

- Absolute top bar on every page: mini glowing ring mark + name (links home) on the left; with `back`, a mono back link on the right: `back` → "← Index" (home), or `back={{ href, label }}` (e.g. "← Branding" on brand pages, D28). The home page's "Portfolio — 2026" was removed (D19). `view-transition-name: site-header`, so it holds still while pages change.

### Film dust — `src/components/Dust.astro` ✅

- An SVG (viewBox 1600×900, `xMinYMin slice`) of ~280 specks (35% clustered top-left) + 14 fine curved scratches, generated at build time from a seeded RNG (`seed` prop; same every build), 55% opacity, filling its positioned parent. Used by the hero (seed 7). Extracted from the hero in D28; removed from the Branding hall in D30.

### Branding hall — `src/pages/branding/index.astro` ✅ (placeholder brands)

- After `reference/Four White Doors in the Endless Hall.png` (D28); replaces the old Branding template page. User: "when I click Branding only this door alignment should open, and hovering opens door smoothly shows the brand that's in the door and clicking them smoothly zooms in into the project and navigates me to that brand details page (use placeholder for now)".
- **Scene** (`.hall__scene`, the layer that zooms): **pitch black** (D30). **Camera and sizes on `.hall`, matched to the reference (D34)**: `--door-w: clamp(4.5rem, min(11.75vw, 20.85vh), 20rem)` (the reference's 24.8% of the height tall; 11.7% of the width on 16:9, so on wider screens there's more dark space at the ends), `--door-h: 1.18 × door-w`, `--eye: 59.7%` (the eye line on screen; the frame is shifted up like the reference), `--eye-h: 0.04` (eye height in door heights: almost at floor level, from the reference's light-panel perspective; history: 0.5 → 0.3 (D32) → 0.12 (D33) → 0.04), `--horizon: --eye + --eye-h × door-h` (foot of the wall, ≈ 60.7%), `--wall-h: 1.34 × door-h` (puts the lights at the reference's 27%), `--lens: 5 × door-w` (CSS perspective = focal length; 6 on phones), `--depth: 0.985 × lens` (floor/ceiling planes' reach; with the eye this low the floor plane must reach almost to the lens to cover the bottom of the screen), `--bay: 1.7 × door-w` (D31: doors closer than the reference's ≈ 2.05, grouped in the middle of a centred flex row, dark space at both ends). Each bay gets `--dx = (i − 1.5) × --bay`, its offset from the middle of the hall. At the reference's own size (1672×940) the door frames land at y 339–570 and the lights at y 251–258, matching the reference to the pixel.
- **Floor and ceiling surfaces (D31; textures re-tuned against the reference in D34):** `.hall__surfaces` (`perspective: var(--lens)`, `perspective-origin: 50% var(--eye)`, `mix-blend-mode: overlay`) holds `.hall__ceiling` (hinged at the ceiling line, `rotateX(-90deg)`, origin bottom, `--rough-rock`), `.hall__floor` (hinged at the foot of the wall, `rotateX(90deg)`, origin top, `--rough-floor`), both 300% wide and `--depth` deep, and `.hall__grit` (D34: flat on the screen from the foot of the wall down, `--floor-grit`, its own `mix-blend-mode: overlay` onto the floor texture, mask transparent 35% → full at 90%): the floor plane is magnified so much near the camera that its own texture goes soft there, so the near-floor grit is drawn in screen space. All three textures are inline SVG data-URIs made to average mid-grey for `overlay` (they change nothing on the black; they give material to the light that falls on them): **rock** = fractal noise (0.055, 5 octaves) as a height map for `feDiffuseLighting`, contrast slope 1.25 / intercept −0.38 (D34: 25% gentler, matching the reference's ceiling texture strength); **floor** = fractal noise `baseFrequency='0.06 0.02'`, 3 octaves, slope 2.8 / −0.9 (D34: blotchy patches stretched 3:1 along the floor's depth; turbulence ridges read as water at the grazing view); **grit** = fractal noise `0.045 0.16`, 4 octaves, slope 1.8 / −0.4, `background-size: 1.6 × door-w`. `background-size`: ceiling 3.4 × door-w; floor `13 × --eye-h × door-h` (sized from the eye height, since a lower eye magnifies the floor more). The floor's roughness fades in with distance from the wall (D34 mask: 4% at the wall → 15% at 0.9 × lens → 100% at 0.968 × lens: clean for ~10% of the screen height under the doors, full roughness by ~30%). `--scroll` pans all three with the sideways hall on phones. `#floor-smear` (`feGaussianBlur stdDeviation="0.8 10"`, vertical only) smears the doors' reflections. Matched numerically at 1672×940 (D34): ceiling texture strength 1.73 vs the reference's 1.64 (row-to-row difference), floor middle contrast 29.9 vs 30.8, floor bottom texture 12.5 vs 12.0 and brightness 101 vs 97.
- **Title (D32):** none visible; the page's `h1` "Branding" is `sr-only`. No guiding words either (D30). The visible title (in the home menu's style, the target of the menu item's view transition) was removed at the user's request; the menu item now just crossfades away.
- **Lights on (load):** each ceiling fixture flickers on (small area, two quick flickers, WCAG-safe), then its light on the ceiling, wall and floor and its door fade in, door by door (220 ms apart).
- **Walking through (D29, script):** click (plain left click; modified clicks and reduced motion just follow the link) → the door gets `.is-open` (if it wasn't open, e.g. keyboard, it swings open first, 650 ms), the hall gets `.is-entering` (title, hint, dust, names fade; the leaves swing fully open, ±88°) → the scene zooms with WAAPI about the doorway's centre while moving it to the screen centre, to 2.4× "doorway fills the screen" (past the leaves, so only the room's light is left), 1100 ms `cubic-bezier(0.6, 0, 0.85, 0.4)` → `location.assign(href)`. The brand page opens in that same light, and the cross-page fade hides the switch. `pageshow` (back/forward cache) resets a mid-zoom hall.
- **Narrow / portrait screens** (`max-aspect-ratio: 4/5` or `max-width: 40rem`; JS uses the same query): the row becomes a sideways scroll-snap hall (bay = 1.5 door widths, first door centred); each bay's `--dx = i × --bay − --scroll`, so the centred door's light shares the screen's vanishing point; an IntersectionObserver (central 16% band) adds `.is-centered` to the door in the middle, which opens by itself. **Short screens** (`max-height: 30rem`, e.g. a phone on its side): the shared camera (D34) already keeps the lights clear of the header (the door size floor is 4.5rem so short screens keep the reference proportions); only `min-height: 0` to fit the hall to the screen.

### Door — `src/components/Door.astro` ✅

- One bay (`.bay`, itself a 3D scene: `perspective: var(--lens)`, `perspective-origin: calc(50% − --dx) var(--eye)`, i.e. the hall's eye point): `.bay__ceiling`, a 5 × 4 door-w patch of ceiling hinged at the ceiling line and turned flat (`rotateX(-90deg)`), holding `.bay__glow` (the light it throws on the ceiling: a radial gradient that opens into a fan in perspective; `::after` = the same in the brand's colour, shown via `.bay:has(.door:is(:hover, …))` when the door is open) and `.bay__fixture` (a 0.37 × 0.12 door-w white panel by the wall (D34: the reference's width; thin as seen from the low camera): seen from below as a thin, slightly slanted panel facing down, with a small bloom in the ceiling plane, D31); the fan is `ellipse 16% 60%` (brand-coloured `::after` 19% 62%) so the lit rock reaches up towards the top of the screen as in the reference; `.bay__cone` (the wall below the light: a bright spot just under it and a wash down to the door, with rough wall grain masked to the lit area); on the floor (D34: tuned against the reference's brightness profile under a door) `.bay__pool` (a faint glow over the floor around the door: 3.4 door-w × 1.9 door-h, 0.1 → 0.045 → 0.025 white), `.bay__streak` (a continuous bright band down the floor: 0.95 door-w × 1.75 door-h, 0.32 → 0.42 (40–62%) → 0.3 → 0.15 white, centre-weighted, blurred) and `.bay__glint` (the light's reflection, peaking a little above its mirror position: 0.6 door-w × 1.55 door-h, centred at `--horizon + --wall-h − 0.225 door-h`, 0.7 → 0.3 → 0.08 white); and `a.door` → `/branding/<slug>` (accessible name: an `sr-only` brand name) containing `.door__body`, `.door__mirror` (an `aria-hidden` copy of the body flipped below the door at 85% (D34 mask: 100% → 70% at 22% → 30% at 45% → 0 at 70% of its 1.4 door-h), smeared down by `#floor-smear`, masked to fade down and feathered at the sides; its mark and name hidden) and `.door__spill` (the brand's light on the floor, a trapezoid, `mix-blend-mode: screen`).
- **Material (D30, after a close look at the reference door):** `.door__frame` = the architrave, 0.085 door-w wide all round (no head cap), lit from above (radial highlight + top-to-bottom falloff), a fine stepped line part-way across (`::before`), a soft shadow on the wall; `.door__opening::before` = a stop bead on the top and sides only. Leaves: lit from above (hotspot at the top, greyer towards the floor), shadowed under the head casing and at the hinge, a fine dark gap where they meet, faint paint grain (`::before`, multiply); raised panels in the reference's proportions (top 7–73%, bottom 79–93.5% of the leaf, 16% side margins) with fine mouldings (border lit on top, shaded below) and a soft shadow; two hinges per leaf on the outer edge (12% and 84%); steel bar pulls (43–71%, near the meeting stiles) on two posts with a shadow on the door; `.door__sheen` adds the top light / bottom shade over everything; `.door__edge` = the leaf's thickness (a strip turned 90° on the free edge, preserve-3d), visible only while swinging and **hidden during the zoom** (a strongly scaled 3D strip rendered out of place).
- **The room behind the door** (`.door__inside`): `radial-gradient(ellipse 80% 70% at 50% 45%, var(--brand), 45% brand + black, 12% brand + black)` (via `color-mix`), with the brand's mark (`BrandMark`) and name; `brightness(0.25)` while closed.
- **Open** (`:hover`, `:focus-visible`, `.is-open`, `.is-centered`): leaves swing **into the room** (`rotateY(±74deg)`, hinged at the outer edges, 1100 ms ease-out; closing 800 ms), darkening and catching the brand's colour; the room lights up; the casing glows faintly in the brand colour; the spill and the floor label fade in. Keyboard focus also shows an outline round the casing.
- **Reduced motion:** no flicker or fades on load; leaves fade out instead of swinging; no zoom (plain navigation).

### Brand mark — `src/components/BrandMark.astro` ✅ (placeholder)

- Simple geometric marks in `currentColor` (`ring`, `square`, `triangle`, `bars`) until real logos arrive. Size it with a wrapper (`… :global(svg) { width: 100% }`).

### Brand page — `src/pages/branding/[slug].astro` 🚧 template

- One per brand in `src/data/brands.ts` (`getStaticPaths`); placeholder content. Opening screen (100svh): the brand's light — the same gradient as its room, seen up close (`ellipse 140% 220% at 50% 32%`), plus grain and a fade into the page — with the mark, the name (big spaced caps) and "[ Template ] Placeholder project", rising in after the page change; "Scroll" cue. Below: facts (Client / Year / Scope = TBD), an intro placeholder, a gallery of 3 placeholder frames (tinted with the brand colour), and a "Next brand" link (wraps round). Header back link: "← Branding".

### Brands data — `src/data/brands.ts` (placeholder)

- `slug`, `name`, `tagline`, `color` (key colour: white text must stay readable on it), `mark`. Now Brand 01–04: magenta `#d6248f`/ring, blue `#2a5bd7`/square, teal `#0e8f86`/triangle, orange `#c2410c`/bars. TODO(content).

### Page transitions — `src/styles/global.css`

- `@view-transition { navigation: auto; }`: a native cross-page crossfade, no JS (Chrome/Edge, Safari 18.2+; other browsers just change page). Elements with matching `view-transition-name`s glide between pages. Groups 650 ms, root 450 ms; off with reduced motion. (For direction-aware navigation later, see **Tech stack**: `<ClientRouter />`.)

## Quality bar (non-negotiable)

- **Accessibility:** WCAG 2.2 AA — neon-on-dark contrast measured, not assumed; full keyboard nav with visible, on-theme focus; semantic HTML; alt text.
- **Motion safety:** honor `prefers-reduced-motion` (glitch/scramble/flicker become static); nothing flashes more than 3×/sec (WCAG 2.3.1).
- **Performance:** Lighthouse ≥95 in all four categories (mobile); LCP < 2.5s, CLS < 0.1, INP < 200ms. Animate `transform`/`opacity` only; lazy-load media; WebGL only if it's the centerpiece and justified.
- **Responsive:** 320px → 2560px+, no horizontal scroll, alignment holds at every breakpoint.
- **SEO/sharing:** one `h1`, logical headings, meta + Open Graph image, sitemap, favicons.

## Site structure — *draft, confirm from `contents/`*

0. **Loader** ✅
1. **Hero** ✅ v2 — ring + portrait, services (Branding live)
1b. **Service pages** — `/branding` = the hall of doors ✅ (D28), each door → `/branding/<slug>` brand page (template) 🚧; Graphic Design and Video Editing later
2. **Selected work** — 3–6 projects (case-study pages if the content supports it)
3. **About** — short bio, optional photo
4. **Experience & skills**
5. **Contact** — email + socials

Optional: writing/blog · resume download · terminal / command-palette easter egg (on-theme).

## Tech in plain words

How the stack was explained to the user — reuse this framing.

- **Astro builds the website.** Like a video project: you edit on a timeline, then export an MP4 that viewers watch without the editing software. Here we build the site from pieces (loader, hero, …) and `npm run build` exports plain web files; visitors never need Astro.
- **Why Astro:** fast for visitors (a lean export), organized (one file per piece, like Figma components), room to grow (page-to-page animations built in; 3D can be added only where needed), free to host.
- **Languages we write:** HTML = content and structure · CSS = the look (colours, fonts, layout, glow) · TypeScript = behaviour (e.g. the loader's timing; JavaScript with error checking). A `.astro` file holds all three for one piece of the site.
- **What Astro itself is made of:** TypeScript/JavaScript running on Node.js (hence Node and `npm`); in v7 the part that reads `.astro` files (its compiler) is written in Rust (`@astrojs/compiler-rs`).

## Tech stack — decided 2026-10-19, confirmed by the user

- **Astro 7.4** (static output) + **TypeScript (strict)** + **plain CSS** (tokens + Astro scoped styles). No UI framework, no Tailwind — add later with `npx astro add` only if it earns its place.
- **Heavier features expected later — how Astro covers them** (checked in the installed 7.4):
  - *Directional navigation* (menu ↔ projects): `<ClientRouter />` view transitions from `astro:transitions`. Direction-aware — `<html data-astro-transition="forward|back">` during navigation, and animations take `forwards`/`backwards` variants. `transition:name` morphs an element between pages (e.g. project tile → project header); `transition:persist` keeps the menu or a 3D canvas alive across pages; `fallback="animate"` covers browsers without native view transitions.
  - *3D:* Three.js directly in a component `<script>`, or React Three Fiber inside a React island (`npx astro add react` → `@astrojs/react` 7.x). React only where it's needed; the rest stays light.
  - *Escape hatch:* if the site turns into one continuous 3D app, mount it as one big React island, or port to Next.js — React components carry over.
- **npm** (switched from pnpm in session 2 — D13). TypeScript pinned to **^6**: `@astrojs/check` 0.9 doesn't support TS 7 yet (peer range `^5 || ^6`) — revisit when it does.
- Animation: Web Animations API (loader) + CSS transitions; native cross-document view transitions between pages (`@view-transition`). No library.
- Dev toolbar disabled in `astro.config.mjs` (it covered the loader/hero).
- Hosting: TBD (Vercel / Netlify / Cloudflare Pages / GitHub Pages).

## Commands

| Command | What |
| --- | --- |
| `npm install` | install dependencies (first run on a machine) |
| `npm run dev` | dev server → <http://localhost:4321> |
| `npm run build` | static build → `dist/` |
| `npm run preview` | serve `dist/` |
| `npm run check` | type-check `.astro` + TS — keep at 0 errors |

## Project structure

```text
CLAUDE.md                    this file — tracker + handoff
astro.config.mjs             Astro config (dev toolbar off)
package.json, package-lock.json dependencies (Astro; @astrojs/check + TypeScript 6 for `npm run check`)
tsconfig.json                strict TypeScript
src/
  layouts/BaseLayout.astro   html shell, meta, fonts; `loader` prop → loader + bootstrap script
  pages/index.astro          home: <BaseLayout loader> + <main> (Hero)
  pages/branding/index.astro Branding: the hall of doors (+ walk-through zoom script)
  pages/branding/[slug].astro  a brand's page (template), one per brand
  components/Loader.astro    ring loader
  components/Hero.astro      hero (v2: ring + portrait, services)
  components/SiteHeader.astro  top bar (name + ring mark; optional back link)
  components/Door.astro      one bay of the hall: light, door (opens onto the brand), reflection
  components/BrandMark.astro placeholder brand marks (ring / square / triangle / bars)
  components/Dust.astro      film dust (seeded specks + scratches), shared
  data/services.ts           services list (slug, name, optional href)
  data/brands.ts             brands behind the doors (placeholder: Brand 01–04)
  assets/hero-portrait-placeholder.jpg  placeholder portrait (Unsplash, B&W)
  styles/tokens.css          design tokens
  styles/global.css          reset, base, data-reveal entrance system, page transitions
public/favicon.svg           ring icon
reference/  contents/        user inputs (read-only; tracked in git)
```

## Verification

- `npm run check` and `npm run build`, then look at it.
- **Gotcha:** headless Chrome `--virtual-time-budget` screenshots don't advance Web Animations reliably (frames looked frozen) — don't trust them for loader timing.
- What works: drive the local Chrome (this machine: `C:\Program Files\Google\Chrome\Application\chrome.exe`; session 1's machine: `C:\Program Files (x86)\…`) in real time with `playwright-core`, sample `getComputedStyle` every 100 ms (dash offset, opacities, `<html>` classes), and screenshot at real timestamps. Check desktop 1440×900, phone 390×844, and `reducedMotion: 'reduce'`. Also walk the flow: home → hover Branding → click → `/branding` → "← Index" (loader must not replay) → back button → reload. And check 1280×720, 1920×1080, 320×568, landscape 844×390 / 667×375 (no overlap of ring and services, no horizontal scroll). (Scripts live in the session scratchpad — recreate as needed; `playwright-core` installs there with npm.)
- **Short hover effects:** real-time screenshots are too slow to catch moments under ~300 ms reliably. Instead, hover, then `el.getAnimations({ subtree: true })` → `pause()` + `currentTime = t` on every animation (CSS transitions included) and screenshot each frozen moment.
- **Zoom frames:** to inspect the walk-through, hover the door, click, immediately `pause()` the scene's zoom animation (leave the leaves' transitions running), wait ~1.2 s for the leaves to finish, then set `currentTime` and screenshot. Pausing everything in the subtree freezes the leaves half-open and misleads.
- **Texture design:** surface textures for `overlay` must average mid-grey (0.5) or they brighten/darken everything they cover; give SVG filters `color-interpolation-filters='sRGB'` (the default linearRGB shifts the greys). Noise laid on a floor in perspective compresses into horizontal ripples (reads as water) unless it's fine and crinkly (`type=turbulence`) and its strength fades in with distance from the wall.
- **Camera maths (hall):** `--lens` is the focal length in CSS px (perspective); moving the camera closer = bigger `--door-w` with the same px lens (so a smaller lens multiple). Lowering the eye keeps reflections where they are (a frontal wall mirrors about the floor line at any eye height) but magnifies the floor on screen (horizontal ×y/e at screen distance y below the eye line), so size the floor texture with the eye height. Planes towards the viewer must stay shorter than the lens (`--depth`), and must still reach the bottom of the screen: the floor plane ends at e/(1 − depth/lens) below the eye line.
- **Matching a reference image (D34):** render the page at the reference's own size (1672×940) and compare numbers, not just looks: element rectangles (doors, fixtures) against the reference's measured positions; brightness profiles across the floor reflection at several depths (blur both, sample every 20 px from the door centre); region statistics (mean, standard deviation, mean row-to-row difference as a texture-strength measure) for the ceiling and the floor. A vanishing point can be read from slanted edges (here the light panels' sides), which gives the camera height. (Scripts: `measure_ref*.cjs`, `streak_profile.cjs`, `region_stats.cjs`, `refsize.mjs` in the session scratchpad; recreate as needed with sharp + playwright-core.)
- **Gotcha:** `astro preview` binds to IPv6 `[::1]` only, and `TaskStop` on a backgrounded `astro preview` can leave the node process running. Free the port with `netstat -ano | grep :4400` → `taskkill //PID <pid> //F`.
- Image measurements: Python has no Pillow here — use .NET `System.Drawing` from PowerShell.

## Environment

- Windows 11 · VS Code · PowerShell 5.1 + Git Bash · project folder lives inside **OneDrive** (syncing `node_modules`/`dist` can be slow or lock files; consider pausing sync or excluding them if that bites)
- Session 1: Node v24.16.0 · pnpm 10.33.0. **Session 2 copy (fresh clone): Node v24.13.0 · pnpm 11.5.3**. pnpm 11 enforces a 1-day minimum package age by default — one reason we moved to npm (D13). npm 10.2.5 · git 2.42.0 (no yarn/bun) · Python 3.12 (no Pillow) · no `gh` CLI
- Git identity for this repo (set locally, session 2): **DarshanLevi <s2darshanrider@gmail.com>**. This machine's global identity is a work account (`darshanscodesoftwares`), so on a new clone run `git config user.name "DarshanLevi"` and `git config user.email "s2darshanrider@gmail.com"` before committing. Pushing uses a separate login (Windows Credential Manager, which defaults to the work account here), so `origin` names the user: `https://DarshanLevi@github.com/DarshanLevi/shiva-portfolio.git`. The first push asks you to log in as DarshanLevi in a browser.
- Git: branch `main`, pushed as DarshanLevi; in sync with `origin/main` (`7fc988b`) as of session 2 · `origin` → <https://github.com/DarshanLevi/shiva-portfolio.git> · `reference/` tracked; `contents/` not in git (empty folders aren't tracked)

## Roadmap

| Step | Status |
| --- | --- |
| Setup — tracker, stack, scaffold | ✅ 2026-10-19 |
| Loader | ✅ 2026-10-19 |
| Hero | ✅ v2 (own design, D16), awaiting review + real photo/copy |
| Service pages | ✅ `/branding` hall of doors (placeholder brands) · 🚧 brand pages (template) · ⏳ Graphic Design, Video Editing |
| Remaining sections (work, about, experience, contact) | ⏳ need references + `contents/` |
| Review & polish — a11y, perf, responsive, reduced motion, SEO, copy vs `contents/` | ⏳ |
| Ship — deploy, domain, OG images, README | ⏳ |

## Task board

- [x] Create `CLAUDE.md` tracker — 2026-10-19
- [x] **User:** create + fill `reference/` (loader + 2 hero refs) — 2026-10-19
- [ ] **User:** fill `contents/` (bio, services, projects, socials, hero photo)
- [x] Scaffold Astro 7 + TS, tokens, global CSS — 2026-10-19
- [x] Loader: bulb, looping curved light bar, min delay, lights-on exit, reduced motion — 2026-10-19
- [x] Hero template for the loader to reveal — 2026-10-19
- [x] Full handoff in `CLAUDE.md` + initial commit — 2026-10-19
- [x] Commit the reference images (user: "images too") — 2026-10-19
- [x] Analyze both hero refs in full — 2026-10-19 (session 2)
- [x] Install dependencies on this copy — user, via `npm i astro`, 2026-10-19
- [x] Pick one package manager: npm; removed `pnpm-lock.yaml` — 2026-10-19
- [x] Loader → full ring: base removed, gap closed, same glow/sweep logic; favicon to match — 2026-10-19
- [x] Hero v1 from ref 1: services + bars, placeholder B&W portrait, entrance motion, phone layout — 2026-10-19
- [x] Hero v2 (D16): ring + portrait stage, services row, Branding link, SiteHeader, Geist fonts — 2026-10-19
- [x] Branding template page + page transitions; loader skipped on return from inner pages (D17) — 2026-10-19
- [ ] Hero v2: user review; real portrait + copy ← next
- [x] Font: ~~Montserrat (D15)~~ → Geist + Geist Mono (D16) — 2026-10-19
- [ ] Lock type scale (when patterns repeat)
- [x] Branding hall of doors: hover opens onto the brand, click zooms through into the brand page; brand page template; phone sideways hall (D28–D29) — 2026-10-19
- [ ] **User:** real brands for the doors (name, colour, logo, story, images) into `contents/`
- [ ] Graphic Design + Video Editing pages
- [ ] Remaining sections
- [ ] Review & polish
- [ ] Ship

## Decisions log

| # | Date | Decision | Why |
| --- | --- | --- | --- |
| D1 | 2026-10-19 | Modern + minimal base; cyberpunk only as an accent | User brief |
| D2 | 2026-10-19 | `CLAUDE.md` is the single tracker (status, tasks, decisions, changelog) | User request |
| D3 | 2026-10-19 | No design/code until references are in | User request |
| D4 | 2026-10-19 | Stack: Astro 7 + TS strict + plain CSS tokens, pnpm | Static-first, near-zero JS; a bespoke design doesn't need Tailwind |
| D5 | 2026-10-19 | Build section by section from per-section references | How the user is driving the work |
| D6 | 2026-10-19 | Loader = reference bulb; the arc is the progress bar (fill → drain → loop); min 3 s; exits only on a full fill, then lights-on bloom + fade | User spec ("3–4 s", "slowly", "loops"); ending fully lit avoids cutting a sweep mid-way |
| D7 | 2026-10-19 | Loader animated with the Web Animations API, not CSS keyframes | Promise-based sequencing lets the loop stop exactly at full |
| D8 | 2026-10-19 | Pin TypeScript ^6 | `@astrojs/check` peer range |
| D9 | 2026-10-19 | Rule 0: update `CLAUDE.md` at the end of every task | User instruction |
| D10 | 2026-10-19 | Keep Astro even with directional navigation + possible 3D planned; add React islands / Three.js only when a feature needs them | User asked if Astro can handle heavier work; it can (view transitions, persistent islands, React/Three.js) without making the whole site heavy |
| D11 | 2026-10-19 | First commit leaves out `reference/` + `contents/` (superseded by D12) | They hold the owner's photo and a third-party image, and the repo has a GitHub remote; adding them later is easy, removing them after a push isn't |
| D12 | 2026-10-19 | Commit the reference images too | User: "images too" — so the project can be continued from anywhere |
| D13 | 2026-10-19 | Switch package manager pnpm → npm (supersedes the pnpm part of D4); `pnpm-lock.yaml` removed, `package-lock.json` kept | The user types npm by habit, and mixing the two made two lockfiles. It makes no difference to Astro or the built site. The user asked whether it affects Astro, then chose npm |
| D14 | 2026-10-19 | Loader becomes a full glowing ring: no screw base, no gap; the light starts at the bottom and goes clockwise all the way round; same glow, timing and fill → drain → lights-on logic. Favicon redrawn as a ring | User: "remove things at bottom that resembles the loading as bulb, and connect the loading fully making it a complete circle… same loading glow logic with circle logic". Starting at the bottom (where the gap was) keeps the old motion: up the left, over the top |
| D15 | 2026-10-19 | Hero follows ref 1 only (services list + bars, portrait right); placeholder stock portrait; Montserrat as the site font (self-hosted npm package, no Google request) | User: "only refer 1st and build… the person can be random". Montserrat is the closest free match to ref 1's geometric wide caps. Self-hosting keeps it fast and private. |
| D16 | 2026-10-19 | Hero v2, our own design (supersedes D15's layout and font): the loader's ring becomes an eclipse frame round a circular B&W portrait, centred where the loader was; services along the bottom with mono indexes; Geist + Geist Mono; a service with a page is a link (Branding → `/branding` template), the others show "Soon"; native cross-page view transitions | User: "forget refernces make this into more modern and minimilstic… use some stuff we did in loading… I want it be different, the fonts can be mordern and minimal and if clicked I go into thier pages, for now I want Branding to work". Reusing the ring and its travelling light ties the loader and the page into one idea; Geist is clean and modern and comes with a matching mono for the cyberpunk-ish labels |
| D17 | 2026-10-19 | The loader plays on a fresh visit or reload, but not when arriving from another page of the site or via back/forward; it is opt-in per page (`<BaseLayout loader>`) | With clickable pages, replaying ~4 s of loader on every return home would be tiresome. Reload still shows it, so it stays easy to review. The template page has no loader, so it never gets stuck behind one |
| D18 | 2026-10-19 | Hero arrangement: services menu on the left, ring + portrait on the right (desktop/landscape); nothing else changed. Phones keep the stacked layout | User: "now change nothing but just change the alignment order like before, menus to left and that image to right....just that". The ring no longer sits exactly where the loader ring was; it draws itself in its new place |
| D19 | 2026-10-19 | Menu hover = a minimal "lifeline" (flat line, two tiny heartbeats) drawn through a brief rainbow glitch, then a running pulse, on all three items. Removed the numbers, arrow, "Soon" and "Portfolio — 2026" (and the number on the Branding page's eyebrow, for consistency). Non-live items still aren't links | User: "Hover now creates a staright light, what I need now is small rainbow glicth+minimal small lifeline like....the ups downs should be so minimla though....(all 3 menus) plus remove those numbers arrow keys, soon, portfolio 2026" (refs: a red ECG line, a rainbow glitch screen). The rainbow is the first colour on the site and appears only during the glitch, so the base stays monochrome |
| D20 | 2026-10-19 | After the hover glitch, the lifeline stays rainbow with the colours travelling left → right, and glitches minimally now and then (replaces the white running pulse) | User: "hover glicthes now after hover there is lifeline good but I want that to glictch minamlly too with rainbow colours travelling". The idle glitch twitches only at two brief moments per ~3 s cycle, so it reads as alive without being noisy |
| D21 | 2026-10-19 | The travelling rainbow is a faint hairline: stroke 0.6, 35% opacity, no glow | User: "I wnat lines rainbow thing should be minimal as possible so thin and slight unseeable" |
| D22 | 2026-10-19 | Every glitch is minimal: ghost traces are 0.6 hairlines at ≤40% opacity moving ±1px; rainbow slices are a 6px strip of 1px scanlines at ≤35%; the word's RGB split is ±1px at ≤45% alpha; idle twitches are 1px with ghosts ≤30% and slices ≤20% | User: "every glicthing should also be minimal" |
| D23 | 2026-10-19 | The arrival glitch is one small glitching head that rides the tip of the lifeline as it draws (1 s) and fades out at the end; the scattered slice burst and the word's RGB split are gone | User: "first hover glicth should be clean, kind of off right now.....itshould glicth alnog the line for a sec and leave". The old burst flashed slices at random spots away from the drawing tip, which read as off |
| D24 | 2026-10-19 | The arrival head gets a rainbow tint (white tip + short rainbow trail) and passes through the word below: a rainbow band sweeps across the letters in step with the head | User: "I need the first hover to travel from start go through the words below it too...pass through them + it have rainbowic tint". Same timing for line, head and band keeps them locked together (verified by freezing the animation at fixed times) |
| D25 | 2026-10-19 | The arrival sweep is slower and smoother, and the word band stronger: 1.6 s (was 1 s) on a gentle sine ease `cubic-bezier(0.37, 0, 0.63, 1)` for line, head and band together; band 6rem wide at full strength with a soft white halo; no jitter on the band. Later steps shifted to match (rainbow from 1.55 s, idle twitches from 2 s) | User: "going through words can be little more visible + slighlty slower and smoother" |
| D26 | 2026-10-19 | Hero menu and background follow `reference/web.jpg.jpeg`, ring + portrait stay on the right: small bold widely tracked caps with square bullets, far apart, no hairlines, all items white; film dust (specks + scratches) instead of grain. Font stays Geist (closest match without adding a font; the reference looks DIN-like). Hover effects unchanged | User: "now I want you to do this for hero page now the image can be there at right but I want the rest to look like this" |
| D27 | 2026-10-19 | Travelling rainbow on the lifeline slightly stronger: stroke 0.6 → 0.8, opacity 0.35 → 0.6 | User: "slightly up the colour of the line now" |
| D28 | 2026-10-19 | `/branding` becomes a hall of four white double doors under ceiling lights on a glossy floor (after `reference/Four White Doors in the Endless Hall.png`), built in HTML/CSS (3D transforms, gradients, a flipped copy for the reflection), not from the image. Hover/focus swings a door open into a room lit in the brand's colour; each door links to `/branding/<slug>` (template brand pages, placeholder brands in `src/data/brands.ts`). Phones: sideways scroll-snap hall where the middle door opens by itself | User: "when I click Branding only this door alignment should open, and hovering opens door smoothly shows the brand thats in the door and clicking them smmothly zoomes in into the project and navigates me to that brand details page (use placeholder for now)". Building it lets each door open on its own (and avoids copying the reference image); colour only behind the doors keeps the hall monochrome; no 3D library needed (D10) |
| D29 | 2026-10-19 | Clicking a door walks through it: the hall zooms (WAAPI) into the doorway, past the fully opened leaves, until only the brand's light fills the screen; then the brand page opens in that same light, so the cross-page fade is seamless. Reduced motion and modified clicks just follow the link; back/forward cache resets the hall | "clicking them smoothly zooms in into the project and navigates me to that brand details page". Matching the last frame to the next page's first frame is what makes it feel like one move |
| D30 | 2026-10-19 | Branding hall closer to the reference: pitch-black scene (dust and wall gradient removed); no guiding words (hint and floor names removed; the title stays); a glass-tile floor (perspective plane, `overlay`-blended so tiles only show in the light) with each door reflected, each light reflected as a tall streak and a pool of light in front of each door; doors rebuilt for material depth from a close-up of the reference (stepped architrave without a head cap, tall raised panels with fine mouldings, hinges, steel pulls on posts, light falloff, paint grain, leaf thickness); doors sized so the light reflections stay on screen | User: "I don't want any guiding words + you see the refernce image … The eiere pitch black background and light and door refelction at each door + light in the floor, so the floor should be tile glass material looking. And the doors should have that material depth and shadows not plain looking..." |
| D31 | 2026-10-19 | Branding hall, second pass on the reference: (1) no square tiles: a rough polished floor (turbulence texture in perspective, overlay-blended, fading in with distance so reflections stay crisp at the doors) with reflections smeared vertically; (2) a real ceiling in perspective, rough rock texture, and the lights as flat panels set into it facing down (seen from below as thin slanted panels, light thrown down the wall and into a fan on the ceiling; the fan takes the brand's colour when a door opens); (3) doors grouped closer (1.7 door widths apart) with dark space at both ends. Each bay shares the hall's eye point (`--dx`), so every light converges to the same vanishing point, also while scrolling on phones | User: "I dont want you to do square titles, just a roughed up reflective tiles not a clean square tiles + you can there is cieling and lisht is set in cieling not facing us its facing the door below....so cielign reflection (relflecive rock material for cielings). Put the doors closer and leave space at both right and left ends". A first try at a ceiling reflection (a screen-aligned glow above each door) read as pillars of light and was dropped for the coloured fan |
| D32 | 2026-10-19 | The Branding hall has no visible title (`sr-only` `h1` only; no words left in the hall), and the camera is lower: level, eye at 30% of a door's height (was ~50%), its eye line at 47% of the screen. The floor is seen flatter (longer reflections) and the ceiling more steeply; the floor's roughness fades in over a longer run to match | User: "Great, now remove that branding and keep the camera a bit lower view." A lower eye in a real photo moves the eye line, not the scene; keeping the eye line near the middle keeps the doors framed while the floor/ceiling proportions change |
| D33 | 2026-10-19 | Camera closer and lower: doors ×1.2 (same lens, so `--lens` 6 → 5 door widths; width cap 11.5vw keeps dark space at both ends), eye at 12% of a door's height (was 30%); reflections a little longer (smear, streak, light reflection, door reflection fade); floor texture sized from the eye height and pre-stretched along the floor's depth, roughness fading in later from the wall | User: "GO a little closer and down more". At the lower eye the floor texture flattened into wave-like bands right under the doors (reads as water); keeping the first stretch of floor glossy and stretching the grain fixed it |
| D34 | 2026-10-19 | The Branding hall's view is matched to the reference by measurement: doors 24.8% of the screen height (11.7% of the width on 16:9) standing on a floor line at 60.7%, lights at 27%, camera level and almost at floor level (eye at 4% of a door's height, from the light panels' perspective) with the frame shifted up (eye line 59.7%); floor reflections, floor and ceiling textures tuned until their brightness and texture statistics match the reference at its own size. The doors keep the closer spacing from D31 (1.7 vs the reference's 2.05 door widths) | User: "can place the view as same as the refernce is". D32–D33 had lowered the eye but kept the eye line near the middle, which pushed the doors up the screen; the reference keeps the doors in the lower middle with dark ceiling above. Spacing is a layout choice the user made separately, so it was kept (offered to match it too) |

## Open questions

1. **Goal & audience** — jobs, freelance clients, or both? Which roles or industries?
2. **Theme** — dark only (all references are dark), or dark + light toggle?
3. **Shape** — one long page, or multi-page with per-project case studies?
4. **Hosting & domain** — already owned? Preference?
5. ~~**Git: inputs**~~ — resolved: reference images committed (D12).
6. **Extras** — blog/writing? resume PDF download? sound? terminal easter egg? hard don'ts? (Directional navigation and possible 3D are already planned — see Tech stack.)
7. **Loader** — now skipped when returning from inside the site (D17); plays on fresh visits and reloads. OK? Timing OK (≈4.3 s on screen + 0.8 s fade)?
8. **Hero** — the real portrait photo (high-res) and final copy/services.
9. ~~**Fonts**~~ — Geist + Geist Mono (D16); say if you'd prefer another.
10. **Git: repo visibility** — `main` is already pushed (found in session 2). Is the GitHub repo **private**? If it's public, the reference images (the owner's photo and a third-party loader image) are public too. Couldn't check: no `gh` CLI here.
11. ~~**npm or pnpm?**~~ — resolved: npm (D13).
12. **Hero v2 details** — ~~"Soon" / "Portfolio — 2026"~~ removed (D19). Still open: the name "Shiva" (from the project name; TODO(content)). Should Graphic Design / Video Editing stay grey until their pages exist?
13. **Branding hall** — how many brands/doors (4 now)? Keep the placeholder colours per brand, or each brand's real key colour? Should Graphic Design / Video Editing get the same hall idea or their own?

## Session history

### 2026-10-19 — session 1

1. **Brief:** "we are gonna create a portfolio on most modern + minimalistic + pinch of cyberpunk theme, design, alignments and structure." The user would create reference + context folders first and asked for this file "to track everything". → Created `CLAUDE.md`.
2. **Loader spec** (user added 3 images to `reference/` and created an empty `contents/`): "when the website opens we need manual 3-4 sec delay so we could see loading screen… it's shaped as minimal light bulb. The glowing light is gonna be our curved loading bar, which smoothly and slowly comes from start of curve left to end curve to the right and loops… put a template hero-section which it goes to after loading is completed (we will design hero next)." → Scaffolded Astro, built the loader (geometry measured from the image; glow and grain calibrated against it) and the hero template; verified in real time.
3. Mid-task: "update claude md at end too and write there to do this" → **Rule 0**.
4. "wait what is astro?" → explained; the user then said: "we may go heavier… directional navigation while navigating menu with projects… may go with some 3d too in future… do you think astro can handle this? if yes its ok" → confirmed it can (D10); user OK'd.
5. Asked again for an understandable explanation of why Astro and what language it's built in → **Tech in plain words**.
6. "put it all we done as update to claude.md and commit, so I can … continue this project with details filled in at start rather than a fresh start" → expanded this file into a full handoff; first commit on `main` (not pushed; `reference/` excluded — D11).
7. "images too" → committed the reference images as well (D12). Pushed to `origin/main` later, outside the session.

### 2026-10-19 — session 2

1. "read this projects claude.md + project overall analysis and wait, we can start next" → read the tracker and code, and analyzed both hero refs in full (**Hero reference analysis**). Found that this copy is a fresh clone: `main` is pushed, `contents/` and `node_modules` are missing, and the tools are newer (pnpm 11). `pnpm install --frozen-lockfile` is blocked by pnpm 11's 1-day package-age rule (postcss 8.5.31); nothing changed in the repo. Waiting for the user before building.
2. The user installed with `npm i astro` and got the dev server running. Asked "does it affect astro cause pnpm is good with astro": no, Astro and the built site are the same with either. → "npm" (D13).
3. Git identity set to DarshanLevi for this repo; pushing needed the git login switched too (`origin` now names DarshanLevi); the user logged in and pushed.
4. Loader change: "remove things at bottom that resembles the loading as bulb, and connect the loading fully making it a complete circle...smae loading glow logic with circle logic" → full ring (D14).
5. "There is a whitish glow even before the glow loading. I want it to be pitch black and only glow when the loading goes" → room light rests at 0.
6. "now add back the haze but so little and as visbleless as possibble" → resting haze 8%.
7. "(only refer 1st and build) now the hero page, build it mordern and minimal too and the person can be random" → hero v1 from ref 1 with a free Unsplash portrait (B&W) and Montserrat (D15).
8. "Now forget refernces make this into more modern and minimilstic and you can may use some stuff we did in loading to here. I want it be different, the fonts can be mordern and minimal and if clicked I go into thier pages, for now I want Branding to work if I click put me in template page for now" → hero v2 (D16): ring/eclipse portrait, Geist, services row with Branding live → `/branding` template, view transitions, loader skip on internal return (D17).
9. "now change nothing but just change the alignment order like before, menus to left and that image to right....just that" → menu left, ring right (D18); phones unchanged.
10. "Hover now creates a staright light, what I need now is small rainbow glicth+minimal small lifeline like....the ups downs should be so minimla though....(all 3 menus) plus remove those numbers arrow keys, soon, portfolio 2026..." (refs: ECG line, rainbow glitch) → lifeline + rainbow glitch hover on all three items; labels removed (D19).
11. "hover glicthes now after hover there is lifeline good but I want that to glictch minamlly too with rainbow colours travelling" → rainbow bands travel along the lifeline + minimal idle glitch (D20).
12. "I wnat lines rainbow thing should be minimal as possible so thin and slight unseeable" → rainbow thinned and faded (D21).
13. "every glicthing should also be minimal" → all glitch offsets, opacities and sizes cut down (D22).
14. "first hover glicth should be clean, kind of off right now.....itshould glicth alnog the line for a sec and leave" → a glitching head rides the line's tip for 1 s and fades out (D23).
15. "Ok I need the first hover to travel from start go through the words below it too...pass through them + it have rainbowic tint" → rainbow-tinted head + a rainbow band through the word, in step (D24).
16. "going through words can be little more visible + slighlty slower and smoother" → 1.6 s sine-eased sweep, stronger band with a halo, no band jitter (D25).
17. Added `reference/web.jpg.jpeg`: "now I want you to do this for hero page now the image can be there at right but I want the rest to look like this" → menu restyled (spaced caps, square bullets, no lines) + film-dust background (D26).
18. "slightly up the colour of the line now" → rainbow line a little stronger (D27).
19. Added `reference/Four White Doors in the Endless Hall.png` (and deleted the two old hero refs from `reference/`): "Now when I click Branding ony this should door alignment should open, and hovering opens door smoothly shows the brand thats in the door and clicking them smmothly zoomes in into the project and navigates me to that brand details page (use placeholder for now)" → the Branding hall of doors + walk-through zoom + brand page template (D28–D29); dust extracted into a shared component.
20. "I don't want any guiding words + you see the refernce image … The eiere pitch black background and light and door refelction at each door + light in the floor, so the floor should be tile glass material looking. And the doors should have that material depth and shadows not plain looking..." → pitch black, no hint or floor names, glass-tile floor with reflections, doors rebuilt for material depth (D30).
21. "I dont want you to do square titles, just a roughed up reflective tiles not a clean square tiles + you can there is cieling and lisht is set in cieling not facing us its facing the door below....so cielign reflection (relflecive rock material for cielings). Put the doors closer and leave space at both right and left ends" → rough polished floor with streaky reflections, rock ceiling with lights set in it facing down, doors grouped closer (D31).
22. "Great, now remove that branding and keep the camera a bit lower view." → visible title removed (screen-reader heading kept); camera lowered to 30% of a door's height (D32).
23. "GO a little closer and down more" → doors ×1.2 with the same lens, eye at 12% of a door's height, longer reflections, floor texture tuned for the flatter view (D33).
24. "can place the view as same as the refernce is" → camera, framing and floor/ceiling look matched to the reference by measurement (D34); door spacing kept closer.

## Changelog

- **2026-10-19** — Created `CLAUDE.md`. Repo empty (no commits); `origin` points to GitHub.
- **2026-10-19** — Scaffolded Astro 7.4 + TS (strict); tokens + global CSS; `BaseLayout` with loader bootstrap; **bulb loader** (geometry measured from `reference/Loading.jpeg`, glow/grain calibrated against it); **hero template**; bulb favicon. Verified in real time: desktop, phone, reduced motion, dev + production build. Added Rule 0 (user).
- **2026-10-19** — User confirmed Astro after asking whether it can handle heavier work; recorded the plan for directional navigation (view transitions) and future 3D (Three.js / React islands) — D10.
- **2026-10-19** — Expanded `CLAUDE.md` into a full handoff (Start here, Working with the user, Next up, Tech in plain words, Session history); initial commit on `main` with the code + this file (`reference/` excluded — D11).
- **2026-10-19** — Committed the reference images at the user's request (D12); this file updated to match.
- **2026-10-19** — Session 2: full analysis of both hero refs, with a recommendation (ref 2 leads); recorded the fresh-clone state (pushed, no `contents/`, Node 24.13 / pnpm 11.5.3) and the pnpm 11 install block; Open questions 10–11 updated. No code changes.
- **2026-10-19** — Session 2: user installed with npm (`npm i astro` → `package-lock.json`) and the dev server runs; user renamed `reference/hero-page.jpeg` → `reference/1st_ref_hero-page.jpeg` (identical file); references updated here.
- **2026-10-19** — Switched to npm (D13): removed `pnpm-lock.yaml`, commands in this file now use npm.
- **2026-10-19** — Committed (`58c1cea`); set this repo's git identity to DarshanLevi <s2darshanrider@gmail.com> (local only) and re-authored that unpushed commit.
- **2026-10-19** — Push was refused (the git login was the work account); `origin` now includes `DarshanLevi@` so git uses that account for this repo only. The user logged in and pushed; GitHub is up to date.
- **2026-10-19** — Loader → full ring (D14): removed the bulb's base and gap; the light now goes all the way round from the bottom, clockwise; favicon redrawn as a ring. Verified in Chrome in real time: desktop, phone, reduced motion, hand-off to the hero.
- **2026-10-19** — Loader: room light now rests at 0 instead of 35%, so the screen stays dark until the light moves (user: "I want it to be pitch black and only glow when the loading goes"). Verified in Chrome.
- **2026-10-19** — Loader: added the haze back at 8% at rest (user: "add back the haze but so little and as visbleless as possibble").
- **2026-10-19** — Hero v1 from ref 1 (D15): services with glowing bars, B&W placeholder portrait (Unsplash) fading into the background, staggered entrance after the loader, phone layout; Montserrat self-hosted as `--font-sans`. Verified in Chrome at 1600×900 (matches ref 1 placement), 1440×900, 1920×1080, upright tablet 820×1180, phones 390×844 and 320×568, and reduced motion; no horizontal scroll.
- **2026-10-19** — Hero v2 (D16): references set aside. The loader's ring becomes a glowing eclipse frame round a circular B&W portrait, draws itself after the loader, and a light keeps orbiting it. Services along the bottom (Branding live → `/branding`, others "Soon"). New `SiteHeader`, `src/data/services.ts`, the `/branding` template page, cross-page view transitions. Fonts Montserrat → Geist + Geist Mono. Shared tokens `--glow`, `--grain`, `--gutter`. Loader opt-in per page; skipped on return from inner pages (D17). Verified in Chrome: loader hand-off, hover, click-through, "← Index" (no loader replay), back/reload, at 1440×900, 1280×720, 1920×1080, 390×844, 320×568, 844×390, 667×375, 700×760, reduced motion; no overlaps, no horizontal scroll.
- **2026-10-19** — Hero arrangement (D18): services become a vertical menu on the left, ring + portrait on the right (two-column grid); styles, fonts, motion unchanged; phones keep the stacked layout. Verified in Chrome at 1920×1080, 1440×900, 1280×720, 1024×768, 820×1000, 844×390, 390×844: no overlap, no horizontal scroll.
- **2026-10-19** — Menu hover (D19): lifeline with two tiny heartbeats + brief rainbow glitch (ghost traces, scanline slices, RGB split on the word) + running pulse, on all three items; removed the numbers, arrow, "Soon" and "Portfolio — 2026"; services data now uses `slug`. Verified frame by frame in Chrome (70/180/330/750/1300 ms after hover), all three items, phone 390×844, Branding click-through.
- **2026-10-19** — Menu hover (D20): after the intro glitch, the lifeline turns rainbow with the colours travelling left → right (six dashed copies, one per colour), and a minimal idle glitch (1–2 px jitter, faint ghosts, occasional rainbow slice) twitches it every few seconds; the white running pulse is gone. Verified frame by frame in Chrome (rainbow moving between 1.1 s and 1.5 s; twitches at 2.6 s and 3.4 s).
- **2026-10-19** — Rainbow lifeline made nearly invisible (D21): stroke 1.3 → 0.6, opacity 1 → 0.35, glow removed. Verified in Chrome.
- **2026-10-19** — All glitches made minimal (D22): ±1px offsets, thinner and fainter ghosts and slices, softer RGB split on the word, 1px idle twitches. Verified frame by frame in Chrome.
- **2026-10-19** — Menu hover arrival (D23): replaced the scattered glitch burst (random slices, word RGB split) with a small glitching head that rides the drawing tip of the lifeline for 1 s and fades out at the end; rainbow and idle twitches now start after it. Verified frame by frame in Chrome (350 / 550 / 1000 / 1700 ms).
- **2026-10-19** — Menu hover arrival (D24): the head is now a white tip with a short rainbow trail, and a rainbow band passes through the word below in step with it (a `background-clip: text` copy of the word spanning the row). Verified by freezing the animations at 250 / 330 / 400 / 460 ms on Branding and Graphic Design: band always directly under the head.
- **2026-10-19** — Arrival sweep (D25): 1 s → 1.6 s with a gentler sine ease (line, head and word band stay in step); word band 4.5rem → 6rem, 85% → 100%, soft halo, jitter removed; rainbow and idle twitches start later to match. Verified with frozen frames.
- **2026-10-19** — Hero menu + background after `reference/web.jpg.jpeg` (D26): spaced bold caps with square bullets, far apart, no hairlines, all white; generated film dust replaces the grain; ring + portrait unchanged; hover effects kept (verified the word sweep still lines up). Verified in Chrome at 1920×1080, 1440×900, 1280×720, 844×390, 390×844: no overlap, no horizontal scroll.
- **2026-10-19** — Rainbow lifeline a little stronger (D27): stroke 0.8, opacity 0.6. Verified in Chrome.
- **2026-10-19** — Branding hall (D28–D29): `/branding` rebuilt as four white doors under flickering-on ceiling lights with floor reflections; hover/focus opens a door onto a placeholder brand in its own light (spill on the floor, name on the floor); click zooms through the doorway into the brand's light and opens `/branding/<slug>` (new template page per brand, `src/data/brands.ts`); phones get a sideways hall whose middle door opens by itself; short screens fit. New components `Door`, `BrandMark`, `Dust` (extracted from the hero); `SiteHeader` back link can point anywhere. Verified in Chrome: hall at 1440×900, 1280×720, 1920×1080, 1024×768, 844×390, 667×375, 820×1180, 390×844; hover; zoom frozen at 700/1090 ms (last frame = brand light only); arrival on the brand page; back button resets the hall; home → Branding; reduced motion; no errors, no horizontal scroll.
- **2026-10-19** — Branding hall closer to the reference (D30): pitch black (dust removed from the hall), no guiding words (hint and floor brand names gone), a glass-tile floor in perspective (overlay-blended joints, bevels and per-tile variation, panning with the phone scroll), reflections of each door and each ceiling light plus a pool of light; doors rebuilt for material depth (stepped architrave, reference panel proportions, fine mouldings, hinges, steel pulls on posts, light falloff, paint grain, leaf thickness hidden during the zoom); doors resized so the light reflections stay on screen. Verified in Chrome at 1920×855, 1920×1080, 1280×720, 844×390, 820×1180, 390×844; open door close-up; zoom frames at 250/450/650/850 ms (clean); arrival on the brand page; back button reset; reduced motion; no errors, no horizontal scroll.
- **2026-10-19** — Branding hall (D31): square glass tiles replaced by a rough polished floor (perspective turbulence texture, overlay-blended, fading in from the wall) with reflections smeared vertically (`#floor-smear`); a rough rock ceiling plane in perspective; the lights rebuilt as flat panels set into the ceiling facing down, each bay a 3D scene sharing the hall's vanishing point (`--dx`, also on phones while scrolling); the light's fan on the ceiling takes the brand's colour when a door opens; doors grouped 1.7 door widths apart with dark space at both ends. Verified in Chrome at 1920×855, 1280×720, 844×390, 820×1180, 390×844 (vanishing point measured after a swipe), door close-ups closed/open, zoom frames 250–850 ms (clean), reduced motion, home → Branding; no errors, no horizontal scroll.
- **2026-10-19** — Branding hall (D32): visible "Branding" title removed (`sr-only` `h1` kept), so the hall is wordless; camera lowered (eye at 30% of a door's height, eye line at 47% of the screen; short screens 62%), floor roughness fades in over a longer run to suit the flatter view. Verified in Chrome at 1920×855, 1280×720, 844×390, 820×1180, 390×844 (phone vanishing point still centred after a swipe), door close-up, zoom frames (clean), home → Branding, reduced motion; no errors, no horizontal scroll.
- **2026-10-19** — Branding hall camera (D33): closer (doors ×1.2 at ~1920×860, same lens: `--lens` = 5 door-w, `--depth` = 0.96 lens) and lower (eye at 12% of a door's height); longer smeared reflections; floor texture sized from the eye height, stretched along the floor's depth, roughness fading in later, so it doesn't read as water under the doors. Verified in Chrome at 1920×855, 2000×870, 1920×1080, 1280×720, 844×390, 820×1180, 390×844 (vanishing point centred after a swipe), door close-up, zoom frames, home → Branding, reduced motion; no errors, no horizontal scroll, dark space kept at both ends.
- **2026-10-19** — Branding hall view matched to the reference (D34): measured the reference (doors 196×233 at y 338–571 of 940, lights at y 251–258, vanishing point at about the floor line); set the camera to it (door-w 20.85vh / 11.75vw, eye line 59.7%, eye at 4% of a door's height, wall 1.34 door heights, floor plane depth 0.985 × lens) — at 1672×940 the doors and lights land on the reference's pixels; reflections re-tuned to the reference's brightness profile (brighter, continuous streak; light reflection peaking near y≈820), floor texture blotchy (fractal 0.06/0.02, 3 octaves) plus a screen-space grit near the camera, ceiling rock 25% gentler, thinner light panels (0.37 × 0.12 door-w), wider ceiling fans; door size floor 4.5rem so sideways phones keep the proportions. Verified at 1672×940, 2000×870, 1920×1080, 1280×720, 844×390, 667×375, 820×1180, 390×844; zoom, hover, reduced motion, home → Branding; no errors.
