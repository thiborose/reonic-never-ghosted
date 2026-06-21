import { ChevronDown, ChevronUp, Clock3, Info, WandSparkles } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { api, formatMoney } from "../lib/api.js";
import type { ActionRecord, QuoteDetailPayload, StrategyStep } from "../../server/types.js";
import { LogActionDialog } from "./LogActionDialog.js";
import { AppIcon, Avatar, Badge, EmptyPanel, ErrorState, LoadingState, PageHeader } from "./ui.js";

export function StrategyPage() {
  const { quoteId } = useParams();
  const [detail, setDetail] = useState<QuoteDetailPayload>();
  const [loading, setLoading] = useState(true);
  const [working, setWorking] = useState(false);
  const [error, setError] = useState<string>();
  const [revision, setRevision] = useState("");
  const [logAction, setLogAction] = useState<ActionRecord>();
  const [logOpen, setLogOpen] = useState(false);
  const navigate = useNavigate();

  async function load() {
    if (!quoteId) {
      return;
    }
    setLoading(true);
    try {
      setDetail(await api.quote(quoteId));
      setError(undefined);
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "Could not load strategy");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    void load();
  }, [quoteId]);

  const activeStep = detail?.strategy?.steps.find((step) => step.status === "active");
  const activeAction = useMemo(() => {
    if (!detail?.quote.nextAction.actionId) {
      return undefined;
    }
    return detail.actions.find((action) => action.id === detail.quote.nextAction.actionId);
  }, [detail]);

  async function generate() {
    if (!quoteId) {
      return;
    }
    setWorking(true);
    try {
      setDetail(await api.generateStrategy(quoteId));
      setError(undefined);
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "Could not generate strategy");
    } finally {
      setWorking(false);
    }
  }

  async function revisePlan() {
    if (!quoteId || !revision.trim()) {
      return;
    }
    setWorking(true);
    try {
      setDetail(await api.reviseStrategy(quoteId, revision.trim()));
      setRevision("");
      setError(undefined);
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "Could not revise strategy");
    } finally {
      setWorking(false);
    }
  }

  async function schedule() {
    if (!activeAction) {
      return;
    }
    setWorking(true);
    try {
      const updated = await api.scheduleAction(
        activeAction.id,
        activeStep?.suggestedDateTime ? { slotStart: activeStep.suggestedDateTime } : {},
      );
      setDetail(updated);
      navigate(`/calendar?quote=${updated.quote.id}`);
    } finally {
      setWorking(false);
    }
  }

  async function complete() {
    if (!activeAction) {
      return;
    }
    setWorking(true);
    try {
      const updated = await api.completeAction(activeAction.id);
      setDetail(updated);
      navigate("/quotes");
    } finally {
      setWorking(false);
    }
  }

  function openLog() {
    if (activeAction) {
      setLogAction(activeAction);
      setLogOpen(true);
    }
  }

  if (loading) {
    return <LoadingState label="Loading strategy" />;
  }
  if (error || !detail) {
    return <ErrorState message={error ?? "Missing quote detail"} />;
  }

  return (
    <section className="page strategy-page">
      <PageHeader
        title="Closing Strategy"
        breadcrumbs={["Requests", detail.customer.name]}
      />
      <CustomerProfileCard detail={detail} />
      {detail.strategy ? (
        <>
          {detail.strategy.stale || detail.quote.strategyStale ? (
            <div className="warning-banner">
              <Info size={17} />
              <div>
                <strong>Strategy may be out of date</strong>
                <span>Master data changed after this strategy was generated.</span>
              </div>
              <button className="primary-button" type="button" onClick={() => void generate()}>
                Regenerate strategy
              </button>
            </div>
          ) : null}
          <section className="strategy-card">
            <div className="strategy-title">
              <AppIcon name="sparkles" size={20} />
              <h2>The play</h2>
              {detail.strategy.generation ? (
                <span className={`generation-pill generation-${detail.strategy.generation.mode}`}>
                  {detail.strategy.generation.mode === "llm" ? "GPT-5 mini" : "Fallback engine"}
                </span>
              ) : null}
            </div>
            <h3>{detail.strategy.headline}</h3>
            <p>{detail.strategy.summary}</p>
            <div className="strategy-steps">
              {detail.strategy.steps.map((step) => (
                <StrategyStepView
                  step={step}
                  key={step.id}
                  active={step.id === activeStep?.id}
                  working={working}
                  onSchedule={() => void schedule()}
                  onComplete={() => void complete()}
                  onLog={openLog}
                  nextKind={detail.quote.nextAction.kind}
                />
              ))}
            </div>
          </section>
          <section className="revision-card">
            <h2>Revise this strategy</h2>
            <p>Describe what's off in plain language. Your input is checked against this deal's data before any step is changed.</p>
            <textarea
              rows={5}
              value={revision}
              onChange={(event) => setRevision(event.target.value)}
              placeholder="e.g. Sabine already arranged her own financing — drop the financing step and prioritize the payback comparison."
            />
            <div className="review-note">
              Reviewed before applying — unsupported requests are flagged, not auto-applied.
            </div>
            <button
              className="primary-button"
              type="button"
              disabled={working || !revision.trim()}
              onClick={() => void revisePlan()}
            >
              <WandSparkles size={16} />
              {working ? "Reviewing..." : "Review & update plan"}
            </button>
          </section>
        </>
      ) : (
        <EmptyPanel
          icon="bot"
          title="No closing strategy yet"
          description={`Generate a data-backed play for ${detail.customer.name} based on her buyer profile, call notes, and similar past deals.`}
          action={
            <button className="primary-button" type="button" onClick={() => void generate()} disabled={working}>
              <WandSparkles size={16} />
              {working ? "Generating..." : "Generate strategy"}
            </button>
          }
        />
      )}
      <LogActionDialog
        action={logAction}
        open={logOpen}
        onOpenChange={setLogOpen}
        onSaved={(updated) => {
          setDetail(updated);
        }}
      />
    </section>
  );
}

function CustomerProfileCard({ detail }: { detail: QuoteDetailPayload }) {
  return (
    <section className="customer-profile-card">
      <div className="profile-header">
        <Avatar label={detail.customer.initials} tone="blue" size="sm" />
        <div>
          <div className="profile-title-line">
            <Link to={`/customers/${detail.customer.id}?quote=${detail.quote.id}`}>{detail.customer.name}</Link>
            {detail.customer.leadBadge ? (
              <Badge tone={detail.customer.leadBadgeTone ?? "yellow"}>{detail.customer.leadBadge}</Badge>
            ) : null}
          </div>
          <p>
            {detail.customer.address} · {formatMoney(detail.quote.value)} · {detail.customer.system}
          </p>
          <div className="profile-dates">
            <span>Quote sent {detail.quote.quoteAgeDays ?? 0} days ago</span>
            <span>Last action {detail.quote.daysSinceLastAction ?? 0} days ago</span>
          </div>
        </div>
      </div>
      <div className="card-divider" />
      <h2 className="section-eyebrow">Buyer profile</h2>
      <div className="buyer-signal-list">
        {detail.customer.buyerProfile.map((signal) => (
          <div className="buyer-signal" key={signal.id}>
            <div className={`signal-icon signal-${signal.tone}`}>
              <AppIcon name={signal.id === "environmentalist" ? "leaf" : "shield"} size={17} />
            </div>
            <div>
              <div className="signal-heading">
                <strong>{signal.name}</strong>
                <Badge tone={signal.tone === "green" ? "green" : "yellow"}>{signal.strength}</Badge>
              </div>
              <p>{signal.description}</p>
              <div className="evidence-row">
                {signal.evidence.map((item) => (
                  <span className="evidence-pill" key={item.label}>
                    <AppIcon name={item.icon ?? "sparkles"} size={13} />
                    {item.label}
                    <span>{item.source}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function StrategyStepView({
  step,
  active,
  working,
  nextKind,
  onSchedule,
  onComplete,
}: {
  step: StrategyStep;
  active: boolean;
  working: boolean;
  nextKind: string;
  onSchedule: () => void;
  onComplete: () => void;
  onLog: () => void;
}) {
  const [expanded, setExpanded] = useState(active);

  useEffect(() => {
    setExpanded(active);
  }, [active]);

  const canSchedule = active && (nextKind === "schedule_call" || nextKind === "schedule_visit");
  const canSend =
    active &&
    (nextKind === "send_final_recap" ||
      nextKind === "follow_up_signature" ||
      nextKind === "send_whatsapp_video" ||
      nextKind === "send_gift");

  return (
    <article className={`strategy-step ${active ? "active" : ""} ${step.status}`}>
      <div className="step-number">{step.number}</div>
      <div className="step-body">
        <button className="step-toggle" type="button" onClick={() => setExpanded((value) => !value)}>
          <span>
            <span className="step-phase">{step.phase}</span>
            <strong>{step.title}</strong>
            {!expanded ? <small>{step.subtitle}</small> : null}
          </span>
          {expanded ? <ChevronUp size={17} /> : <ChevronDown size={17} />}
        </button>
        {expanded ? (
          <div className="step-expanded">
            <div className="step-heading">
              <span className="step-icon">
                <AppIcon name={step.icon} size={24} />
              </span>
              <h3>{step.title}</h3>
            </div>
            <div className="script-block">
              <strong>
                <WandSparkles size={15} />
                {step.guideTitle}
              </strong>
              <ul>
                {step.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
            <div className="why-box">
              <span>
                <Info size={14} />
                Why this
              </span>
              <div className="why-chips">
                {step.whyChips.map((chip) => (
                  <span className="evidence-pill" key={chip.label}>
                    <AppIcon name={chip.icon ?? "sparkles"} size={13} />
                    {chip.label}
                    <span>{chip.source}</span>
                  </span>
                ))}
              </div>
            </div>
            {active ? (
              <div className="time-panel">
                <span className="time-icon">
                  <Clock3 size={18} />
                </span>
                <div>
                  <strong>Suggested time</strong>
                  <span>{step.suggestedTime}</span>
                  <small>
                    {new Intl.DateTimeFormat("en", {
                      hour: "numeric",
                      minute: "2-digit",
                    }).format(new Date(step.suggestedDateTime))}
                  </small>
                </div>
                <div className="time-actions">
                  {canSchedule ? (
                    <button className="primary-button" type="button" onClick={onSchedule} disabled={working}>
                      <AppIcon name={step.taskType === "Meeting in person" ? "calendar" : "phone"} size={15} />
                      {working ? "Scheduling..." : step.secondaryCta}
                    </button>
                  ) : null}
                  {canSend ? (
                    <button className="primary-button" type="button" onClick={onComplete} disabled={working}>
                      <AppIcon name="send" size={15} />
                      {working ? "Sending..." : step.primaryCta}
                    </button>
                  ) : null}
                  <button className="secondary-button" type="button">
                    {step.taskType === "Send Email" ? "Draft email" : step.primaryCta}
                  </button>
                </div>
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
    </article>
  );
}
