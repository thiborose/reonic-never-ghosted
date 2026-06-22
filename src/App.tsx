import { Navigate, Route, Routes } from "react-router-dom";

import { AppShell } from "./components/AppShell.js";
import { CalendarPage } from "./components/CalendarPage.js";
import { CustomerPage } from "./components/CustomerPage.js";
import { QuotesBoard } from "./components/QuotesBoard.js";
import { StrategyPage } from "./components/StrategyPage.js";

export function App() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route path="/" element={<Navigate to="/quotes" replace />} />
        <Route path="/quotes" element={<QuotesBoard />} />
        <Route path="/requests/:quoteId/strategy" element={<StrategyPage />} />
        <Route path="/customers/:customerId" element={<CustomerPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="*" element={<Navigate to="/quotes" replace />} />
      </Route>
    </Routes>
  );
}
