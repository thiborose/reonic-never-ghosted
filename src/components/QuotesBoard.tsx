import { CalendarDays, Clock3, Edit3, MoreVertical, Search, WandSparkles } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import { api, formatMoney } from "../lib/api.js";
import { Avatar, Badge, ErrorState, IconButton, LoadingState, PageHeader } from "./ui.js";
import { LogActionDialog } from "./LogActionDialog.js";
import type { ActionRecord, BootstrapPayload, QuoteRecord } from "../../server/types.js";

export function QuotesBoard() {
  const [bootstrap, setBootstrap] = useState<BootstrapPayload>();
  const [quotes, setQuotes] = useState<QuoteRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>();
  const [logAction, setLogAction] = useState<ActionRecord>();
  const [logOpen, setLogOpen] = useState(false);
  const navigate = useNavigate();

  async function load() {
    setLoading(true);
    try {
      const [bootstrapData, quotesData] = await Promise.all([api.bootstrap(), api.quotes()]);
      setBootstrap(bootstrapData);
      setQuotes(quotesData.quotes);
      setError(undefined);
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "Could not load quotes");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    void load();
  }, []);

  const grouped = useMemo(() => {
    return new Map(
      bootstrap?.columns.map((column) => [
        column.id,
        quotes.filter((quote) => quote.columnId === column.id),
      ]) ?? [],
    );
  }, [bootstrap, quotes]);

  async function handleNext(quote: QuoteRecord) {
    if (quote.nextAction.kind === "log_call" || quote.nextAction.kind === "log_visit") {
      if (!quote.nextAction.actionId) {
        return;
      }
      const detail = await api.quote(quote.id);
      const action = detail.actions.find((item) => item.id === quote.nextAction.actionId);
      setLogAction(action);
      setLogOpen(true);
      return;
    }
    navigate(`/requests/${quote.id}/strategy`);
  }

  if (loading) {
    return <LoadingState label="Loading quotes" />;
  }
  if (error || !bootstrap) {
    return <ErrorState message={error ?? "Missing board data"} />;
  }

  return (
    <section className="page">
      <PageHeader title="Quotes" />
      <div className="top-search">
        <Search size={16} />
        <input placeholder="Search" />
      </div>
      <div className="kanban-board">
        {bootstrap.columns.map((column) => (
          <section className="kanban-column" key={column.id}>
            <div className="column-title">
              <h2>{column.title}</h2>
              <span className={`column-count column-count-${column.countTone}`}>
                {column.countLabel}
              </span>
            </div>
            <div className="quote-list">
              {(grouped.get(column.id) ?? []).map((quote) => (
                <QuoteCard quote={quote} key={quote.id} onNext={() => void handleNext(quote)} />
              ))}
            </div>
          </section>
        ))}
      </div>
      <LogActionDialog
        action={logAction}
        open={logOpen}
        onOpenChange={setLogOpen}
        onSaved={(detail) => {
          setQuotes((current) => current.map((quote) => (quote.id === detail.quote.id ? detail.quote : quote)));
          navigate(`/requests/${detail.quote.id}/strategy`);
        }}
      />
    </section>
  );
}

function QuoteCard({ quote, onNext }: { quote: QuoteRecord; onNext: () => void }) {
  const nextIcon =
    quote.nextAction.kind === "generate_strategy" ? (
      <WandSparkles size={14} />
    ) : quote.nextAction.kind.includes("schedule") ? (
      <CalendarDays size={14} />
    ) : (
      <Clock3 size={14} />
    );

  return (
    <article className="quote-card">
      <div className="quote-card-head">
        <button className="quote-title-button" type="button">
          {quote.title}
        </button>
        <div className="card-actions">
          <IconButton label="More">
            <MoreVertical size={15} />
          </IconButton>
          <IconButton label="Edit">
            <Edit3 size={14} />
          </IconButton>
        </div>
      </div>
      <div className="quote-contact">
        <span>{quote.contactLine}</span>
        <span>{quote.address}</span>
      </div>
      <div className="quote-meta-row">
        {quote.statusLabel ? (
          <Badge tone={quote.statusTone ?? "blue"}>{quote.statusLabel}</Badge>
        ) : null}
        {quote.nextAction.kind !== "none" ? (
          <button className={`next-chip next-${quote.nextAction.tone}`} type="button" onClick={onNext}>
            <span className="next-label">Next:</span>
            <span className="next-button">
              {nextIcon}
              {quote.nextAction.label}
            </span>
          </button>
        ) : null}
      </div>
      <div className="quote-footer">
        <div className="owner">
          <Avatar label={quote.ownerAvatar} tone={quote.ownerTone} size="xs" />
          <span>{quote.ownerName}</span>
        </div>
        <div className="quote-price">
          <Clock3 size={13} />
          <strong>{formatMoney(quote.value)}</strong>
        </div>
      </div>
    </article>
  );
}
