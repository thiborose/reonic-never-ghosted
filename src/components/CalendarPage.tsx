import {
  CalendarPlus,
  ChevronLeft,
  ChevronRight,
  RefreshCw,
  Settings,
  SlidersHorizontal,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import type { CalendarEventRecord } from "../../server/types.js";
import { api, formatTime } from "../lib/api.js";
import { Avatar, ErrorState, LoadingState } from "./ui.js";

const days = [
  { label: "Mon, 22 Jun", day: 22 },
  { label: "Tue, 23 Jun", day: 23 },
  { label: "Wed, 24 Jun", day: 24 },
  { label: "Thu, 25 Jun", day: 25 },
  { label: "Fri, 26 Jun", day: 26 },
];

const rows: Array<{ id: CalendarEventRecord["row"]; label: string; icon?: string }> = [
  { id: "tasks", label: "Aufgaben" },
  { id: "personal", label: "Persönlicher Kalender" },
  { id: "theo", label: "Theo Tiral" },
];

export function CalendarPage() {
  const [events, setEvents] = useState<CalendarEventRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>();
  const [params] = useSearchParams();
  const highlightedQuote = params.get("quote");

  async function load() {
    setLoading(true);
    try {
      const data = await api.calendar();
      setEvents(data.events);
      setError(undefined);
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "Could not load calendar");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    void load();
  }, []);

  if (loading) {
    return <LoadingState label="Loading calendar" />;
  }
  if (error) {
    return <ErrorState message={error} />;
  }

  return (
    <section className="calendar-page">
      <header className="calendar-toolbar">
        <div className="calendar-left">
          <button className="secondary-button">Today</button>
          <button className="icon-button" aria-label="Previous week">
            <ChevronLeft size={16} />
          </button>
          <button className="icon-button" aria-label="Next week">
            <ChevronRight size={16} />
          </button>
          <h1>22. June - 26. June 2026</h1>
        </div>
        <div className="calendar-actions">
          <button className="secondary-button">
            <CalendarPlus size={16} />
            New event
          </button>
          <button className="icon-button" aria-label="Refresh" onClick={() => void load()}>
            <RefreshCw size={16} />
          </button>
          <button className="icon-button" aria-label="View settings">
            <SlidersHorizontal size={16} />
          </button>
          <button className="icon-button" aria-label="Settings">
            <Settings size={16} />
          </button>
        </div>
      </header>
      <div className="calendar-subbar">
        <span>8 Kalender</span>
        <a>Aufgaben, Persönlicher Kalender und 1 weiterer</a>
        <span>Planungsmodus</span>
        <strong>Ein</strong>
        <div className="segmented">
          <button>Month</button>
          <button className="active">Week</button>
          <button>Day</button>
          <button>Agenda</button>
        </div>
      </div>
      <div className="resource-calendar">
        <div className="calendar-corner">Kalender</div>
        <div className="calendar-days">
          {days.map((day) => (
            <div className="day-head" key={day.label}>
              <strong>{day.label}</strong>
              <span>6</span>
              <span>9</span>
              <span>12</span>
              <span>15</span>
            </div>
          ))}
        </div>
        {rows.map((row) => (
          <div className="calendar-row" key={row.id}>
            <div className="row-label">
              {row.id === "theo" ? <Avatar label="TT" tone="green" size="xs" /> : null}
              <span>{row.label}</span>
            </div>
            <div className="row-track">
              {events
                .filter((event) => event.row === row.id)
                .map((event) => (
                  <CalendarEventPill
                    event={event}
                    highlighted={Boolean(highlightedQuote && event.quoteId === highlightedQuote)}
                    key={event.id}
                  />
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CalendarEventPill({
  event,
  highlighted,
}: {
  event: CalendarEventRecord;
  highlighted: boolean;
}) {
  const position = positionEvent(event);
  return (
    <div
      className={`calendar-event calendar-event-${event.color} ${highlighted ? "highlighted" : ""}`}
      style={{ left: `${position.left}%`, width: `${position.width}%` }}
      title={`${event.title} ${formatTime(event.start)}-${formatTime(event.end)}`}
    >
      {event.title}
    </div>
  );
}

function positionEvent(event: CalendarEventRecord) {
  const start = new Date(event.start);
  const end = new Date(event.end);
  const dayIndex = Math.max(0, Math.min(4, start.getUTCDate() - 22));
  const startHour = start.getUTCHours() + start.getUTCMinutes() / 60;
  const endHour = end.getUTCHours() + end.getUTCMinutes() / 60;
  const dayWidth = 20;
  const visibleStart = 6;
  const visibleHours = 11;
  const left = dayIndex * dayWidth + ((startHour - visibleStart) / visibleHours) * dayWidth;
  const width = Math.max(4, ((endHour - startHour) / visibleHours) * dayWidth);
  return { left, width };
}
