const { chromium } = require("../.review/browser/node_modules/playwright");
const AxeBuilder =
  require("../.review/browser/node_modules/@axe-core/playwright").default;
const fs = require("node:fs");
const assert = require("node:assert/strict");

(async () => {
  const browser = await chromium.launch({
    executablePath:
      process.env.CHROME_PATH ||
      "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    headless: true,
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  const failures = [];
  page.on("pageerror", (e) => failures.push(e.message));
  page.on("console", (m) => {
    if (m.type() === "error") failures.push(m.text());
  });
  const results = [];
  for (const width of [320, 390, 768, 1440]) {
    await page.setViewportSize({ width, height: width === 1440 ? 1000 : 844 });
    await page.goto("http://127.0.0.1:8000/", { waitUntil: "networkidle" });
    for (const img of await page.locator('img').all()) {
      await img.scrollIntoViewIfNeeded();
      await img.evaluate(element => element.decode());
    }
    await page.evaluate(() => scrollTo(0, 0));
    const layout = await page.evaluate(() => ({
      width: innerWidth,
      scrollWidth: document.documentElement.scrollWidth,
      images: [...document.images].every(
        (i) => i.complete && i.naturalWidth > 0,
      ),
      anchors: [...document.querySelectorAll('a[href^="#"]')].every((a) =>
        document.querySelector(a.getAttribute("href")),
      ),
    }));
    assert.equal(layout.width, width);
    assert.ok(layout.scrollWidth <= width, `Overflow at ${width}`);
    assert.ok(layout.images && layout.anchors);
    const a11y = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"])
      .analyze();
    results.push({
      width,
      layout,
      violations: a11y.violations.map((v) => ({
        id: v.id,
        impact: v.impact,
        nodes: v.nodes.map((n) => n.target),
      })),
    });
    await page.screenshot({
      path: `docs/review/width-${width}.png`,
      fullPage: true,
    });
    if (width === 1440) {
      await page.screenshot({ path: "docs/review/desktop-top.png" });
      await page
        .locator("#work")
        .screenshot({ path: "docs/review/selected-work.png" });
    }
    if (width === 390)
      await page.screenshot({ path: "docs/review/mobile-top.png" });
  }
  await page.goto("http://127.0.0.1:8000/");
  await page.keyboard.press("Tab");
  assert.equal(await page.locator(":focus").innerText(), "Skip to content");
  const focus = await page
    .locator(":focus")
    .evaluate((e) => ({
      outline: getComputedStyle(e).outlineStyle,
      top: e.getBoundingClientRect().top,
    }));
  assert.notEqual(focus.outline, "none");
  assert.ok(focus.top >= 0);
  await page.keyboard.press("Enter");
  assert.equal(await page.locator(":focus").getAttribute("id"), "main");
  await page.keyboard.press("Tab");
  assert.equal(await page.locator(":focus").innerText(), "Explore my work");
  await page.getByRole("link", { name: "Contact", exact: true }).click();
  assert.ok((await page.locator("#contact").boundingBox()).y >= 0);
  await page.emulateMedia({ reducedMotion: "reduce" });
  assert.equal(
    await page.evaluate(
      () => matchMedia("(prefers-reduced-motion: reduce)").matches,
    ),
    true,
  );
  assert.equal(await page.evaluate(() => document.getAnimations().length), 0);
  await page.setViewportSize({ width: 640, height: 900 });
  await page.evaluate(() => (document.documentElement.style.fontSize = "200%"));
  const zoom = await page.evaluate(() => ({
    width: innerWidth,
    scrollWidth: document.documentElement.scrollWidth,
  }));
  assert.ok(zoom.scrollWidth <= zoom.width, "200% text overflow");
  const nojs = await browser.newContext({
    javaScriptEnabled: false,
    viewport: { width: 390, height: 844 },
  });
  const nojsPage = await nojs.newPage();
  await nojsPage.goto("http://127.0.0.1:8000/");
  assert.ok(
    await nojsPage
      .getByRole("heading", { name: "Selected work", exact: true })
      .isVisible(),
  );
  await nojsPage.getByRole("link", { name: "Work", exact: true }).click();
  assert.ok(nojsPage.url().endsWith("#work"));
  const resources = [];
  for (const resource of [
    "styles.css",
    "script.js",
    "assets/portrait.webp",
    "assets/favicon.svg",
    "assets/Abdikarim-Mohamed-Resume.pdf",
    "assets/social-preview.png",
  ]) {
    const response = await page.request.get(
      `http://127.0.0.1:8000/${resource}`,
    );
    resources.push({ resource, status: response.status() });
  }
  const report = {
    results,
    consoleErrors: failures,
    keyboard: "passed",
    reducedMotion: "passed",
    textZoom: zoom,
    noJavaScript: "passed",
    resources,
  };
  fs.writeFileSync("docs/review/results.json", JSON.stringify(report, null, 2));
  console.log(JSON.stringify(report, null, 2));
  await browser.close();
  assert.equal(failures.length, 0);
  assert.ok(
    results.every((r) => r.violations.length === 0),
    "Accessibility findings",
  );
  assert.ok(
    resources.every((r) => r.status === 200),
    "Missing resource",
  );
})();
