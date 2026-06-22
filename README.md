# Reonic Marketing Assistant Demo

This repo is a working demo of a Reonic-style sales assistant for the post-quote phase.

It has two parts:

- A React + Express + SQLite mock of the Reonic platform.
- A VoltAgent service that reads the quote/customer/calendar context and recommends the next best action using the local knowledgebase and OpenRouter `openai/gpt-5-mini`.

The browser talks only to the web app. The web app calls the local VoltAgent service on the server side.

## First-Time Setup

From the repo root:

```bash
npm install
cd agent
npm install
cd ..
```

The root `.env` must contain:

```bash
OPENROUTER_API_KEY=...
```

Do not commit the real key.

## Run The Demo

Use two terminals.

Terminal 1, start the agent:

```bash
npm run agent:start
```

Agent runs on:

```text
http://localhost:3141
```

Terminal 2, start the Reonic app:

```bash
REONIC_AGENT_STRICT=true npm run dev
```

App runs on:

```text
http://localhost:5173
```

`REONIC_AGENT_STRICT=true` is intentional for the demo. If the live agent call breaks, the app fails loudly instead of silently using the deterministic fallback.

## Reset Demo Data

When the app server is running, reset through the app API:

```bash
curl -X POST http://localhost:5173/api/demo/reset \
  -H "content-type: application/json" \
  -d "{}"
```

This puts the demo back at the starting state:

- Sabine Mueller is a fresh quote.
- Her next action is `Generate strategy`.
- No generated strategy exists for her yet.
- The board is ready to start from `/quotes`.

If servers are stopped, you can reset the SQLite file with:

```bash
npm run db:reset
```

Prefer the API reset while the app is running.

## Stage Happy Path

Start here:

```text
http://localhost:5173/quotes
```

Use Sabine Mueller for the demo.

1. On the Quotes board, click Sabine's `Generate strategy` action.
2. On the strategy page, click `Generate strategy`.
3. Wait for the agent. This can take 30-60 seconds because it is a real OpenRouter call.
4. The page should show:
   - `GPT-5 mini` badge
   - next action: phone call
   - suggested time from Theo's calendar
5. Click `Schedule call`.
6. The calendar opens with `Call Sabine` highlighted.
7. Go back to `Requests`.
8. Sabine now shows `Log call`.
9. Click `Log call`.
10. Leave the prefilled note as-is and click `Save & update strategy`.
11. The assistant reruns and recommends an in-person visit.
12. Click `Schedule visit`.
13. The calendar opens with the visit highlighted.
14. Go back to `Requests`.
15. Sabine now shows `Log visit`.
16. Click `Log visit`.
17. Leave the prefilled note as-is and click `Save & update strategy`.
18. The assistant reruns and recommends the final recap/signature email.
19. Click `Send recap`.
20. The board returns with Sabine in `Completed` as `Signed`.

Expected final board counts after the happy path:

- Waiting for response: `6x`
- Completed: `3x`

Before going on stage again, run the reset command above.

## Quick Checks

Agent live check:

```bash
npm run agent:smoke
```

This calls VoltAgent and requires a real `generation.mode: "llm"` response from OpenRouter.

Full browser check:

```bash
npm run ui:smoke
```

This drives the whole happy path in Playwright and saves screenshots to `.tmp-ui/`.

Important: `ui:smoke` ends with Sabine signed. Reset demo data after running it.

Regular checks:

```bash
npm run typecheck
npm test
npm run build

cd agent
npm run typecheck
npm test
```

## If Something Looks Wrong

If strategy generation fails:

1. Check the agent terminal first.
2. Run `npm run agent:smoke`.
3. Confirm `.env` has `OPENROUTER_API_KEY`.
4. Confirm the agent is running on `3141`.
5. Confirm the app is running on `5173`.

If the board is already mid-demo or Sabine is signed, reset:

```bash
curl -X POST http://localhost:5173/api/demo/reset \
  -H "content-type: application/json" \
  -d "{}"
```

## What The Demo Proves

The assistant is not just drafting an email. It reads the current quote, customer profile, installer notes, past actions, and Theo's calendar, then chooses the next best task.

For Sabine, the live path is:

```text
fresh quote -> schedule call -> log call -> schedule visit -> log visit -> send final recap -> signed
```

The recommendation updates because the state changes, not because the UI is hardcoded to one fixed sequence.
