# CallPilot AI — Implementation Plan

## Product scope
A responsive premium B2B SaaS marketing website for CallPilot AI, outsourced AI-assisted customer support for small and medium-sized US HVAC and plumbing businesses. The site uses the supplied MP4 as the hero visual foundation and presents the exact approved content: missed-call problem, call workflow, six services, AI-assisted conversation, four-step process, demo dashboard, benefits, custom-pricing plans, final CTA, and footer.

## Design direction
- **Design movement:** Cinematic enterprise SaaS / dark interface editorialism.
- **Core principles:** Reliability before novelty; restrained technology cues; human warmth inside precise systems; information hierarchy over decoration.
- **Color philosophy:** Near-black navy and graphite create trust and depth; a cool cyan accent signals live routing and AI assistance; warm amber marks urgency and human attention. Gradients stay atmospheric and low contrast so the supplied video remains the hero.
- **Layout paradigm:** Narrative “signal path” layout: asymmetric hero composition, offset workflow rails, editorial section labels, and dashboard surfaces that feel like instruments rather than generic cards.
- **Signature elements:** Cyan live-status pulses, hairline grid/scanline dividers, and translucent graphite panels that reveal the moving background or ambient glow.
- **Interaction philosophy:** CTAs and navigation should feel like controlled handoffs; hover states lift borders and reveal signal color, while content enters with quiet directional motion.
- **Animation:** Use slow ambient glows, viewport reveal transitions, pulsing live indicators, and a subtle marquee/scanline feel. Respect `prefers-reduced-motion` by reducing movement.
- **Typography system:** Inter for UI/body and Space Grotesk for display headings. Tight display tracking, compact uppercase metadata, generous line-height in explanatory copy.
- **Brand essence:** The always-on customer-call layer for trade businesses that cannot afford to lose the next job. Personality: dependable, composed, intelligent.
- **Brand voice:** Direct, operational, human. Example lines: “Your customers call. We answer.” and “AI assists. Humans care.”
- **Wordmark & logo:** CALLPILOT in a custom-feeling tracked wordmark with a cyan square signal mark and a small AI CUSTOMER SUPPORT lockup.
- **Signature brand color:** Signal cyan `#7DE7E1`, used sparingly for live state, links, and key accents.

## Implementation approach
- Vite + React + TypeScript with Tailwind CSS and a small custom CSS layer for the cinematic system.
- Single-page semantic layout with section IDs for navigation and CTA anchors. No backend or database is required for this marketing experience.
- Hero uses the exact supplied MP4 with `autoPlay`, `muted`, `loop`, `playsInline`, and `object-cover`; the video is purely a background layer.
- Dashboard and analytics are composed from reusable React data arrays and CSS/SVG chart primitives; all figures are explicitly labeled demo data and no testimonials, companies, or unsupported claims are introduced.
- Motion uses IntersectionObserver-driven reveal classes and CSS keyframes; responsive behavior collapses grids, preserves legibility, and provides a compact mobile nav.

## Project structure
- `src/main.tsx` — Vite entry point.
- `src/App.tsx` — page sections, content data, navigation state, and UI composition.
- `src/index.css` — Tailwind directives plus brand tokens, background treatments, responsive and motion styles.
- `public/manus-routes.json` — route manifest for the single `/` page.
- `app.config.ts` — project logo metadata.
- `package.json`, `vite.config.ts`, `tsconfig*.json`, `tailwind.config.js`, `postcss.config.js` — toolchain.
