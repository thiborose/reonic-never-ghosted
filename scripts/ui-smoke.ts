import { mkdirSync } from "node:fs";
import { chromium, type Page } from "playwright";

const baseUrl = process.env.REONIC_WEB_URL ?? "http://localhost:5173";
const timeout = 140_000;

mkdirSync(".tmp-ui", { recursive: true });

await fetch(`${baseUrl}/api/demo/reset`, {
  method: "POST",
  headers: { "content-type": "application/json" },
  body: "{}",
});

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 960 } });
page.setDefaultTimeout(timeout);

try {
  await page.goto(`${baseUrl}/requests/quote_sabine/strategy`, { waitUntil: "networkidle" });
  await clickAndWait(page, /Generate strategy/i, "/api/quotes/quote_sabine/generate-strategy");
  await requireText(page, "GPT-5 mini");
  await requireText(page, "Phone Call");
  await page.screenshot({ path: ".tmp-ui/strategy-generated.png", fullPage: true });

  await clickAndWait(page, /Schedule call/i, "/api/actions/", "/schedule");
  await page.waitForURL(/\/calendar\?quote=quote_sabine/);
  await requireHighlightedEvent(page);
  await page.screenshot({ path: ".tmp-ui/calendar-call.png", fullPage: true });

  await page.goto(`${baseUrl}/quotes`, { waitUntil: "networkidle" });
  await quoteCard(page, "Sabine Müller").getByRole("button", { name: /Log call/i }).click();
  await clickAndWait(page, /Save & update strategy/i, "/api/actions/", "/log");
  await page.waitForURL(/\/requests\/quote_sabine\/strategy/);
  await requireText(page, "Meeting in person");
  await page.screenshot({ path: ".tmp-ui/strategy-visit.png", fullPage: true });

  await clickAndWait(page, /Schedule visit/i, "/api/actions/", "/schedule");
  await page.waitForURL(/\/calendar\?quote=quote_sabine/);
  await requireHighlightedEvent(page);

  await page.goto(`${baseUrl}/quotes`, { waitUntil: "networkidle" });
  await quoteCard(page, "Sabine Müller").getByRole("button", { name: /Log visit/i }).click();
  await clickAndWait(page, /Save & update strategy/i, "/api/actions/", "/log");
  await page.waitForURL(/\/requests\/quote_sabine\/strategy/);
  await requireText(page, "Send Email");
  await requireText(page, "GPT-5 mini");
  await page.screenshot({ path: ".tmp-ui/strategy-final-recap.png", fullPage: true });

  await clickAndWait(page, /Send recap/i, "/api/actions/", "/complete");
  await page.waitForURL(/\/quotes/);
  await requireText(page, "Signed");
  await page.screenshot({ path: ".tmp-ui/final-signed.png", fullPage: true });

  console.log(
    JSON.stringify(
      {
        ok: true,
        screenshots: [
          ".tmp-ui/strategy-generated.png",
          ".tmp-ui/calendar-call.png",
          ".tmp-ui/strategy-visit.png",
          ".tmp-ui/strategy-final-recap.png",
          ".tmp-ui/final-signed.png",
        ],
      },
      null,
      2,
    ),
  );
} finally {
  await browser.close();
}

function quoteCard(page: Page, customerName: string) {
  return page.locator(".quote-card").filter({ hasText: customerName }).first();
}

async function clickAndWait(page: Page, buttonName: RegExp, ...urlParts: string[]) {
  const button = page.getByRole("button", { name: buttonName }).first();
  await Promise.all([
    page.waitForResponse(
      (response) =>
        response.ok() && urlParts.every((part) => response.url().includes(part)),
      { timeout },
    ),
    button.click(),
  ]);
}

async function requireText(page: Page, text: string) {
  await page.getByText(text, { exact: false }).first().waitFor({ state: "visible", timeout });
}

async function requireHighlightedEvent(page: Page) {
  await page.locator(".calendar-event.highlighted").first().waitFor({ state: "visible", timeout });
}
