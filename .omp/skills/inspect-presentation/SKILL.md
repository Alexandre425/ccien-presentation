---
name: inspect-presentation
description: Inspect this Slidev presentation in a headless browser, navigate slides, exercise controls, and review screenshots.
---

# Inspect the presentation

Use browser inspection and user feedback to assess the presentation. Do not add Playwright or another browser test dependency to the project.

1. For a visual change, run `corepack pnpm build`. Start the development server with `corepack pnpm dev` as a named service. Wait for port 3030. Do not pass `--host`: this version of Slidev rejects that option.
2. Read `xd://eval/browser` for the current browser API. Use the eval browser to open `http://localhost:3030/` with `headed: false` and `app: { relay: false, tern: false }`. Use a 1280 × 720 viewport unless the change requires another size. This uses the browser tool, not a project dependency.
3. Wait for the relevant slide or control to appear before inspecting it. Initial navigation can show a blank frame while the app loads. Do not assume `.slidev-layout` exists: the opening slide uses `[data-slidev-no="1"]` instead. Use `observe()` or `ariaSnapshot()` to find controls and check the current page.
4. Navigate with `tab.press('ArrowRight')` or open the relevant slide URL. Check the URL with `tab.url()` and inspect the visible slide. A `waitForUrl('**/2')` call timed out even though navigation reached `/2`; do not rely on that pattern. Test affected controls and keyboard access, including relevant initial, changed, paused, and reset states.
5. Use `tab.screenshot()` and inspect the image, not just the page text. Wait for the relevant state and animations to settle before assessing their final appearance. Inspect each affected slide and state. For visual changes, check layouts at the presentation sizes relevant to the change. Save requested screenshots under `artifacts/`; do not commit generated images.
6. Close the tab and stop the service started for the inspection. Report the slides, interactions, and visual states actually checked. State any problems or limits. User feedback complements inspection; do not claim feedback that was not received.

For example, slide 6 has the `Revelar a escala` button. After activating it, the question `Qual faz mais somas por segundo?` appears. Use this as a navigation and interaction example, not as a substitute for checking the change under review.
