"use client";

import React from "react";
import { Avatar } from "@/ui/components/Avatar";
import { Badge } from "@/ui/components/Badge";
import { Button } from "@/ui/components/Button";
import { IconButton } from "@/ui/components/IconButton";
import { TaskComponent } from "@/ui/components/TaskComponent";
import { TextArea } from "@/ui/components/TextArea";
import { TextField } from "@/ui/components/TextField";
import { FeatherActivity } from "@subframe/core";
import { FeatherArrowUpRight } from "@subframe/core";
import { FeatherBarChart2 } from "@subframe/core";
import { FeatherCalendar } from "@subframe/core";
import { FeatherCalendarClock } from "@subframe/core";
import { FeatherChevronDown } from "@subframe/core";
import { FeatherChevronRight } from "@subframe/core";
import { FeatherChevronsUpDown } from "@subframe/core";
import { FeatherChevronUp } from "@subframe/core";
import { FeatherClipboardList } from "@subframe/core";
import { FeatherClock } from "@subframe/core";
import { FeatherContact } from "@subframe/core";
import { FeatherCreditCard } from "@subframe/core";
import { FeatherDatabase } from "@subframe/core";
import { FeatherDot } from "@subframe/core";
import { FeatherFileSearch } from "@subframe/core";
import { FeatherFileText } from "@subframe/core";
import { FeatherHardHat } from "@subframe/core";
import { FeatherInbox } from "@subframe/core";
import { FeatherLayoutDashboard } from "@subframe/core";
import { FeatherLeaf } from "@subframe/core";
import { FeatherGift } from "@subframe/core";
import { FeatherMail } from "@subframe/core";
import { FeatherMessageSquare } from "@subframe/core";
import { FeatherMousePointerClick } from "@subframe/core";
import { FeatherPhone } from "@subframe/core";
import { FeatherPiggyBank } from "@subframe/core";
import { FeatherRoute } from "@subframe/core";
import { FeatherSearch } from "@subframe/core";
import { FeatherSend } from "@subframe/core";
import { FeatherShieldCheck } from "@subframe/core";
import { FeatherSparkles } from "@subframe/core";
import { FeatherTrendingUp } from "@subframe/core";
import { FeatherUsers } from "@subframe/core";
import { FeatherWallet } from "@subframe/core";
import { FeatherWand } from "@subframe/core";
import { FeatherWrench } from "@subframe/core";
import { useRouter, useParams } from "next/navigation";
import { generateStrategy, draftStep, reviseStep, getDeal } from "@/lib/api";
import type { StrategyResult, RevisionResult } from "@/lib/types";

const GOAL_LABEL: Record<string, string> = {
  build_trust: "BUILD TRUST",
  establish_value: "ESTABLISH VALUE",
  create_urgency: "CREATE URGENCY",
  close_gap: "CLOSE GAP",
  handle_objection: "HANDLE OBJECTION",
  ask_for_commitment: "ASK FOR COMMITMENT",
};

// Per-task action: the channel the engine assigns (email/call/sms/gift/wait) drives
// the button label + icon. `null` = no action (e.g. a wait step).
const CHANNEL_ACTION: Record<
  string,
  { label: string; icon: React.ReactNode } | null
> = {
  email: { label: "Draft email", icon: <FeatherMail /> },
  call: { label: "Draft call script", icon: <FeatherPhone /> },
  sms: { label: "Draft SMS", icon: <FeatherMessageSquare /> },
  gift: { label: "Arrange gift", icon: <FeatherGift /> },
  wait: null,
};

export default function StrategyPage() {
  const router = useRouter();
  const params = useParams();
  const dealId = Number(params.id);

  const [strategy, setStrategy] = React.useState<StrategyResult | null>(null);
  const [error, setError] = React.useState<string>("");
  const [loading, setLoading] = React.useState(true);
  const [instruction, setInstruction] = React.useState("");
  const [revision, setRevision] = React.useState<RevisionResult | null>(null);
  const [revising, setRevising] = React.useState(false);
  const [drafts, setDrafts] = React.useState<Record<number, string>>({});
  const [customerName, setCustomerName] = React.useState<string>("");

  React.useEffect(() => {
    setLoading(true);
    generateStrategy(dealId)
      .then(setStrategy)
      .catch((e) => setError(String(e)))
      .finally(() => setLoading(false));
  }, [dealId]);

  React.useEffect(() => {
    getDeal(dealId)
      .then((d) => setCustomerName(d.customer.name))
      .catch(() => {});
  }, [dealId]);

  async function onDraft(order: number) {
    try {
      const { message } = await draftStep(dealId, order);
      setDrafts((d) => ({ ...d, [order]: message }));
    } catch (e) {
      setDrafts((d) => ({ ...d, [order]: `Draft failed: ${String(e)}` }));
    }
  }

  async function onRevise() {
    if (!instruction.trim()) return;
    setRevising(true);
    try {
      setRevision(await reviseStep(dealId, 1, instruction));
    } catch (e) {
      setError(String(e));
    } finally {
      setRevising(false);
    }
  }

  return (
    <div className="flex h-full w-full items-start bg-default-background">
      <div className="flex w-60 flex-none flex-col items-start self-stretch border-r border-solid border-neutral-border bg-default-background mobile:hidden">
        <div className="flex w-full items-center gap-2 px-4 py-4">
          <Avatar className="bg-success-600" size="small" image="">
            TT
          </Avatar>
          <div className="flex grow shrink-0 basis-0 flex-col items-start">
            <span className="text-body-bold font-body-bold text-default-font">
              Theo Tiral
            </span>
            <span className="text-caption font-caption text-subtext-color">
              Onboarding Demo Kunde
            </span>
          </div>
          <FeatherChevronsUpDown className="text-body font-body text-subtext-color" />
        </div>
        <div className="flex w-full flex-col items-start gap-2 px-3 pb-2">
          <TextField
            className="h-auto w-full flex-none"
            variant="filled"
            label=""
            helpText=""
            icon={<FeatherSearch />}
          >
            <TextField.Input
              placeholder="Search"
              value=""
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
            />
          </TextField>
        </div>
        <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-1 px-3 py-2 overflow-auto">
          <div className="flex w-full items-center gap-2 rounded-md px-3 py-2">
            <FeatherLayoutDashboard className="text-body font-body text-subtext-color" />
            <span className="text-body font-body text-default-font">
              Dashboard
            </span>
          </div>
          <div className="flex w-full items-center gap-2 rounded-md px-3 py-2">
            <FeatherContact className="text-body font-body text-subtext-color" />
            <span className="text-body font-body text-default-font">
              Contacts
            </span>
          </div>
          <div className="flex w-full items-center gap-2 rounded-md px-3 py-2">
            <FeatherClipboardList className="text-body font-body text-subtext-color" />
            <span className="text-body font-body text-default-font">Tasks</span>
          </div>
          <div className="flex w-full items-center gap-2 rounded-md bg-brand-50 px-3 py-2">
            <FeatherInbox className="text-body font-body text-brand-700" />
            <span className="text-body-bold font-body-bold text-brand-700">
              Requests
            </span>
          </div>
          <div className="flex w-full flex-col items-start pl-9">
            <span className="w-full text-body font-body text-subtext-color flex py-1.5">
              Residential
            </span>
            <span className="w-full text-body font-body text-subtext-color flex py-1.5">
              Commercial
            </span>
          </div>
          <div className="flex w-full items-center gap-2 rounded-md px-3 py-2">
            <FeatherFileText className="text-body font-body text-subtext-color" />
            <span className="text-body font-body text-default-font">
              Offers
            </span>
          </div>
          <div className="flex w-full items-center gap-2 rounded-md px-3 py-2">
            <FeatherHardHat className="text-body font-body text-subtext-color" />
            <span className="text-body font-body text-default-font">
              Installations
            </span>
          </div>
          <div className="flex w-full items-center gap-2 rounded-md px-3 py-2">
            <FeatherWrench className="text-body font-body text-subtext-color" />
            <span className="text-body font-body text-default-font">
              Services
            </span>
          </div>
        </div>
        <div className="flex w-full flex-col items-start gap-2 border-t border-solid border-neutral-border px-5 py-4">
          <div className="flex w-full items-center justify-between">
            <span className="text-caption-bold font-caption-bold text-subtext-color">
              AGENDA
            </span>
            <div className="flex items-center gap-1">
              <span className="text-caption font-caption text-subtext-color">
                Open
              </span>
              <FeatherArrowUpRight className="text-caption font-caption text-subtext-color" />
            </div>
          </div>
          <span className="text-caption font-caption text-subtext-color">
            All done for today.
          </span>
        </div>
      </div>
      <div className="flex grow shrink-0 basis-0 flex-col items-start self-stretch overflow-auto">
        <div className="flex w-full flex-wrap items-center gap-4 border-b border-solid border-neutral-border px-8 py-4 mobile:px-4">
          <div className="flex grow shrink-0 basis-0 items-center gap-2">
            <span
              className="text-body font-body text-subtext-color cursor-pointer hover:text-default-font"
              onClick={() => router.push("/quotes")}
            >
              Requests
            </span>
            <FeatherChevronRight className="text-body font-body text-subtext-color" />
            <span
              className="text-body font-body text-subtext-color cursor-pointer hover:text-default-font"
              onClick={() => router.push(`/requests/${dealId}`)}
            >
              {customerName || `Deal #${dealId}`}
            </span>
            <FeatherChevronRight className="text-body font-body text-subtext-color" />
            <span className="text-heading-3 font-heading-3 text-default-font">
              Closing Strategy
            </span>
          </div>
        </div>
        <div className="flex w-full flex-col items-start gap-6 px-8 py-8 mobile:px-4 mobile:py-6">
          {loading && (
            <span className="text-body font-body text-subtext-color">
              Generating strategy…
            </span>
          )}
          {error && !loading && (
            <span className="text-body font-body text-error-600">
              Failed to generate strategy: {error}
            </span>
          )}
          {strategy && (
            <>
              {/* Buyer profile + personas */}
              <div className="flex w-full flex-col items-start gap-4 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-5 shadow-sm">
                <div className="flex w-full items-center gap-2">
                  <FeatherUsers className="text-heading-3 font-heading-3 text-brand-600" />
                  <span className="grow shrink-0 basis-0 text-heading-3 font-heading-3 text-default-font">
                    Buyer profile
                  </span>
                  <Badge variant="warning">
                    Goal: {GOAL_LABEL[strategy.current_goal] ?? strategy.current_goal}
                  </Badge>
                </div>
                {strategy.buyer_profile?.summary && (
                  <span className="w-full text-body font-body text-subtext-color">
                    {strategy.buyer_profile.summary}
                  </span>
                )}
                {strategy.persona_scores.length > 0 && (
                  <div className="flex w-full flex-col items-start gap-3 border-t border-solid border-neutral-border pt-4">
                    <span className="text-caption-bold font-caption-bold text-subtext-color">
                      PERSONAS
                    </span>
                    {strategy.persona_scores.map((p) => (
                      <div key={p.persona} className="flex w-full items-center gap-3">
                        <FeatherLeaf className="text-body font-body text-success-600" />
                        <span className="grow shrink-0 basis-0 text-body-bold font-body-bold text-default-font">
                          {p.persona}
                        </span>
                        <Badge variant="success">{p.strength}</Badge>
                        <span className="text-caption font-caption text-subtext-color">
                          {Math.round(p.weight * 100)}%
                        </span>
                      </div>
                    ))}
                  </div>
                )}
                {(strategy.top_motivations.length > 0 ||
                  strategy.objections.length > 0) && (
                  <div className="flex w-full flex-wrap items-start gap-6 border-t border-solid border-neutral-border pt-4">
                    {strategy.top_motivations.length > 0 && (
                      <div className="flex flex-col items-start gap-1">
                        <span className="text-caption-bold font-caption-bold text-subtext-color">
                          TOP MOTIVATIONS
                        </span>
                        <span className="text-body font-body text-default-font">
                          {strategy.top_motivations.join(", ")}
                        </span>
                      </div>
                    )}
                    {strategy.objections.length > 0 && (
                      <div className="flex flex-col items-start gap-1">
                        <span className="text-caption-bold font-caption-bold text-subtext-color">
                          OBJECTIONS
                        </span>
                        <span className="text-body font-body text-default-font">
                          {strategy.objections.join(", ")}
                        </span>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* The play — steps */}
              <div className="flex w-full flex-col items-start gap-4 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-5 shadow-sm">
                <div className="flex w-full items-center gap-2">
                  <FeatherRoute className="text-heading-3 font-heading-3 text-brand-600" />
                  <span className="grow shrink-0 basis-0 text-heading-3 font-heading-3 text-default-font">
                    The play
                  </span>
                </div>
                {strategy.steps.map((step) => (
                  <div
                    key={step.order}
                    className="flex w-full items-start gap-4 border-t border-solid border-neutral-border pt-4"
                  >
                    <div className="flex h-8 w-8 flex-none items-center justify-center rounded-full border border-solid border-brand-200 bg-default-background">
                      <span className="text-body-bold font-body-bold text-brand-600">
                        {step.order}
                      </span>
                    </div>
                    <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <Badge variant="brand">
                          {GOAL_LABEL[step.goal] ?? step.goal}
                        </Badge>
                        <Badge variant="neutral">{step.lever}</Badge>
                        <Badge variant="neutral">{step.channel}</Badge>
                      </div>
                      <span className="w-full text-body font-body text-default-font">
                        {step.rationale}
                      </span>
                      <div className="flex w-full flex-wrap items-center gap-2">
                        {step.evidence_chips.map((chip, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-1 rounded-full border border-solid border-neutral-border bg-default-background px-3 py-1"
                          >
                            <FeatherDatabase className="text-caption font-caption text-brand-600" />
                            <span className="text-caption font-caption text-default-font">
                              {chip.text}
                            </span>
                            <div className="flex items-center gap-0.5 border-l border-solid border-neutral-border pl-2 ml-1">
                              <span className="whitespace-nowrap text-caption-bold font-caption-bold text-subtext-color">
                                {chip.kind}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                      {(() => {
                        const action =
                          step.channel in CHANNEL_ACTION
                            ? CHANNEL_ACTION[step.channel]
                            : { label: "Draft message", icon: <FeatherMail /> };
                        if (!action) return null;
                        return (
                          <div className="flex w-full flex-wrap items-center gap-2">
                            <Button
                              variant="neutral-secondary"
                              icon={action.icon}
                              onClick={() => onDraft(step.order)}
                            >
                              {action.label}
                            </Button>
                          </div>
                        );
                      })()}
                      {drafts[step.order] && (
                        <div className="flex w-full flex-col items-start gap-1 rounded-md bg-neutral-50 px-4 py-3">
                          <div className="flex items-center gap-2">
                            <FeatherSparkles className="text-caption font-caption text-brand-600" />
                            <span className="text-caption-bold font-caption-bold text-brand-700">
                              Suggested draft
                            </span>
                          </div>
                          <span className="w-full text-body font-body text-default-font whitespace-pre-wrap">
                            {drafts[step.order]}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Revise */}
              <div className="flex w-full flex-col items-start gap-3 rounded-lg border border-solid border-neutral-border bg-neutral-50 px-6 py-5">
                <div className="flex flex-col items-start gap-1">
                  <span className="text-body-bold font-body-bold text-default-font">
                    Revise this strategy
                  </span>
                  <span className="text-caption font-caption text-subtext-color">
                    Describe what&#39;s off in plain language. Your input is checked
                    against this deal&#39;s data before any step is changed.
                  </span>
                </div>
                <TextArea className="h-auto w-full flex-none" label="" helpText="">
                  <TextArea.Input
                    className="h-24 w-full flex-none"
                    placeholder="e.g. Sabine already arranged her own financing — drop the financing step and prioritize the payback comparison."
                    value={instruction}
                    onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
                      setInstruction(event.target.value)
                    }
                  />
                </TextArea>
                {revision && (
                  <div className="flex w-full items-center gap-2 rounded-md bg-default-background px-4 py-3">
                    <FeatherShieldCheck
                      className={`text-body font-body ${revision.applied ? "text-success-600" : "text-warning-600"}`}
                    />
                    <span className="text-body font-body text-default-font">
                      {revision.applied ? "Applied: " : "Not applied: "}
                      {revision.reason}
                    </span>
                  </div>
                )}
                <div className="flex w-full flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-1">
                    <FeatherShieldCheck className="text-caption font-caption text-subtext-color" />
                    <span className="text-caption font-caption text-subtext-color">
                      Reviewed before applying — unsupported requests are flagged,
                      not auto-applied.
                    </span>
                  </div>
                  <Button
                    icon={<FeatherWand />}
                    loading={revising}
                    onClick={onRevise}
                  >
                    Review &amp; update plan
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
