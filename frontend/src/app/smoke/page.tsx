"use client";

// Throwaway FE<->BE connectivity check. Not part of the product UI.
// Run backend on :8000, then open http://localhost:3000/smoke.
import React from "react";

const API = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000";

export default function SmokePage() {
  const [out, setOut] = React.useState<string>("(nothing yet)");
  const [err, setErr] = React.useState<string>("");

  async function call(method: "GET" | "POST", path: string) {
    setErr("");
    try {
      const res = await fetch(`${API}${path}`, { method });
      const body = await res.json();
      setOut(`${method} ${path} -> ${res.status}\n\n${JSON.stringify(body, null, 2)}`);
    } catch (e) {
      setErr(`fetch failed: ${String(e)} (is the backend up on ${API}? CORS?)`);
    }
  }

  return (
    <div style={{ padding: 24, fontFamily: "monospace" }}>
      <h1>FE↔BE smoke test</h1>
      <p>API base: {API}</p>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 16 }}>
        <button onClick={() => call("POST", "/admin/seed")}>POST /admin/seed</button>
        <button onClick={() => call("GET", "/installers/1/leads")}>GET leads</button>
        <button onClick={() => call("GET", "/deals/1")}>GET /deals/1</button>
        <button onClick={() => call("POST", "/deals/1/strategy")}>POST /deals/1/strategy</button>
        <button onClick={() => call("GET", "/orgs/1/benchmarks")}>GET benchmarks</button>
      </div>
      {err && <pre style={{ color: "red" }}>{err}</pre>}
      <pre style={{ background: "#f4f4f4", padding: 16, whiteSpace: "pre-wrap" }}>{out}</pre>
    </div>
  );
}
