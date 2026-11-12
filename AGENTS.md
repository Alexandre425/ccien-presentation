 # Agent guidelines

## Scope and maintenance

- The final presentation is for 8th-grade students aged 13–14. It should last 30 minutes and contain 18 slides.
- The goal is to spark curiosity about the computers people use every day. Show why speed matters and how research can improve performance and efficiency.
- The main message goes beyond games: better computers help us understand the world and solve real problems. End with the idea “do more with less”.
- The project currently contains a test slide about waiting for data. Do not confuse this prototype’s scope with the goal of the final presentation.
- Use European Portuguese for all text shown to the audience.
- Keep slide content in `slides.md`. Keep reusable visual behavior in Vue components.
- Preserve the visual theme on future slides. Avoid unnecessary dependencies.
- Keep all presentation resources local so the presentation works offline. Do not add CDN dependencies or remote resources.

## Teaching guidance

- Ask questions before explaining concepts. Include the short activities in the plan.
- Present one clear idea per slide. Prefer images, readable numbers, and little text.
- Explain computing through familiar examples, science, and real problems. Relate large numbers to comparisons people recognize.
- Avoid being too technical, and do not require extreme accuracy. It is better to be slightly inaccurate (e.g. pretend 1 GHz means 1 billion sums per second) than to add disclaimers that distract from the main idea.
- Present personal research as a response to performance and energy limits. Avoid unnecessary technical detail in the main presentation.
- Check figures, sources, and licenses before the presentation. Prepare an alternative that does not need video or Internet access.

## Component and interaction

- `components/MemoryBottleneck.vue` contains this slide’s content and controls.
- Use Vue with TypeScript and SVG for the visualization. Keep the diagram clear. Make interactions keyboard-accessible and give them stable accessible names.
- The animation is an explanatory analogy, not a benchmark or a quantitative simulation. Keep its progression deterministic. Pause, resume, and restart must work predictably. Restart must restore the initial state.
- Always use engaging animation techniques, such as easing and bounce effects.
- Preserve the controls’ accessible names. Check interactions by inspection and with user feedback.

## Verification and artifacts

- Use pnpm through Corepack and follow the lockfile: `pnpm install --frozen-lockfile`.
- Check changes in a browser and collect user feedback. Also test keyboard navigation and the affected interactive states.
- For headless inspection, start `corepack pnpm dev` and use the headless browser tool. Navigate through the slides and test the affected controls.
- Capture and inspect images with the browser tool. Wait until the slide and required states are visible before capturing.
- Do not install a browser testing tool in the project for these checks. User feedback complements inspection.
- For every visual change, build the project, open it in a browser, capture images, inspect them, and fix any problems.
- Run `pnpm build` when relevant. Save captures in `artifacts/`.
- Do not commit generated captures or other build artifacts unless explicitly requested.
- The static build must work when served locally for a presentation without Internet access. Check that required resources do not depend on the network.
- If you create commits, keep each commit small and limited to one coherent change.

## Style rules

- Do not use serif fonts.
- Use a limited color palette.
- Use a white background, black or dark-gray text, and blue `#009ee0` for highlights. Use only `#d82168` and `#fbd20a` for additional contrast, if needed.
- Use one key idea per slide.
- Avoid paragraphs. Communicate ideas with images; the rest is explained aloud.