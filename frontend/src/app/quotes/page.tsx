"use client";

import React from "react";
import { Avatar } from "@/ui/components/Avatar";
import { Badge } from "@/ui/components/Badge";
import { Button } from "@/ui/components/Button";
import { IconButton } from "@/ui/components/IconButton";
import { TextField } from "@/ui/components/TextField";
import { ToggleGroup } from "@/ui/components/ToggleGroup";
import { FeatherArchive } from "@subframe/core";
import { FeatherCalendar } from "@subframe/core";
import { FeatherChevronsUpDown } from "@subframe/core";
import { FeatherClipboardList } from "@subframe/core";
import { FeatherClock } from "@subframe/core";
import { FeatherContact } from "@subframe/core";
import { FeatherEdit2 } from "@subframe/core";
import { FeatherFileText } from "@subframe/core";
import { FeatherFilter } from "@subframe/core";
import { FeatherHardHat } from "@subframe/core";
import { FeatherHelpCircle } from "@subframe/core";
import { FeatherHome } from "@subframe/core";
import { FeatherLayoutDashboard } from "@subframe/core";
import { FeatherMessageSquare } from "@subframe/core";
import { FeatherMoreVertical } from "@subframe/core";
import { FeatherPenTool } from "@subframe/core";
import { FeatherPhone } from "@subframe/core";
import { FeatherPlus } from "@subframe/core";
import { FeatherReceipt } from "@subframe/core";
import { FeatherSearch } from "@subframe/core";
import { FeatherSettings } from "@subframe/core";
import { FeatherWand2 } from "@subframe/core";
import { FeatherWrench } from "@subframe/core";
import { useRouter } from "next/navigation";
import { getLeads } from "@/lib/api";
import type { Lead } from "@/lib/types";

// stage → column label + badge variant. Stages not listed fall into "Other".
const STAGE_META: Record<string, { label: string; variant: "error" | "warning" | "neutral" | "success" | "brand" }> = {
  quote_sent: { label: "Quote sent", variant: "error" },
  engaged: { label: "Engaged", variant: "warning" },
  negotiating: { label: "Negotiating", variant: "warning" },
  verbal_commit: { label: "Verbal commit", variant: "brand" },
  won: { label: "Won", variant: "success" },
  lost: { label: "Lost", variant: "neutral" },
  ghosted: { label: "Ghosted", variant: "neutral" },
};
const STAGE_ORDER = ["quote_sent", "engaged", "negotiating", "verbal_commit", "won", "lost", "ghosted"];

function fmtPrice(v: number, currency: string) {
  return new Intl.NumberFormat("de-DE", { style: "currency", currency, maximumFractionDigits: 0 }).format(v);
}

export default function QuotesPage() {
  const router = useRouter();
  const [leads, setLeads] = React.useState<Lead[] | null>(null);
  const [error, setError] = React.useState<string>("");

  React.useEffect(() => {
    getLeads(1).then(setLeads).catch((e) => setError(String(e)));
  }, []);

  const byStage = (leads ?? []).reduce<Record<string, Lead[]>>((acc, l) => {
    (acc[l.stage] ??= []).push(l);
    return acc;
  }, {});
  const columns = STAGE_ORDER.filter((s) => byStage[s]?.length).concat(
    Object.keys(byStage).filter((s) => !STAGE_ORDER.includes(s))
  );

  return (
    <div className="flex h-full w-full items-start bg-default-background">
      <div className="flex w-60 flex-none flex-col items-start self-stretch border-r border-solid border-neutral-border bg-default-background mobile:hidden">
        <div className="flex w-full items-center gap-2 border-b border-solid border-neutral-border px-4 py-3">
          <span className="text-body-bold font-body-bold text-default-font">
            Reonic
          </span>
        </div>
        <div className="flex w-full items-center gap-2 border-b border-solid border-neutral-border px-4 py-3">
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
        <div className="flex w-full flex-col items-start gap-2 px-3 py-3">
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
        <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-1 px-3 py-1 overflow-auto">
          <div className="flex w-full items-center gap-3 rounded-md px-3 py-2">
            <FeatherHome className="text-body font-body text-subtext-color" />
            <span className="text-body font-body text-default-font">Home</span>
          </div>
          <div className="flex w-full items-center gap-3 rounded-md px-3 py-2">
            <FeatherLayoutDashboard className="text-body font-body text-subtext-color" />
            <span className="text-body font-body text-default-font">
              Dashboard
            </span>
          </div>
          <div className="flex w-full items-center gap-3 rounded-md px-3 py-2">
            <FeatherContact className="text-body font-body text-subtext-color" />
            <span className="text-body font-body text-default-font">
              Contacts
            </span>
          </div>
          <div className="flex w-full items-center gap-3 rounded-md px-3 py-2">
            <FeatherClipboardList className="text-body font-body text-subtext-color" />
            <span className="text-body font-body text-default-font">Tasks</span>
          </div>
          <div className="flex h-2 w-full flex-none flex-col items-start" />
          <div className="flex w-full items-center gap-3 rounded-md px-3 py-2">
            <FeatherMessageSquare className="text-body font-body text-subtext-color" />
            <span className="text-body font-body text-default-font">
              Requests
            </span>
          </div>
          <div className="flex w-full items-center gap-3 rounded-md bg-brand-50 px-3 py-2">
            <FeatherFileText className="text-body font-body text-brand-700" />
            <span className="text-body-bold font-body-bold text-brand-700">
              Quotes
            </span>
          </div>
          <div className="flex w-full items-center gap-3 rounded-md px-3 py-2">
            <FeatherHardHat className="text-body font-body text-subtext-color" />
            <span className="text-body font-body text-default-font">
              Installations
            </span>
          </div>
          <div className="flex w-full items-center gap-3 rounded-md px-3 py-2">
            <FeatherWrench className="text-body font-body text-subtext-color" />
            <span className="text-body font-body text-default-font">
              Services
            </span>
          </div>
          <div className="flex w-full items-center gap-3 rounded-md px-3 py-2">
            <FeatherReceipt className="text-body font-body text-subtext-color" />
            <span className="text-body font-body text-default-font">
              Invoices
            </span>
          </div>
        </div>
        <div className="flex w-full flex-col items-start border-t border-solid border-neutral-border px-3 py-3">
          <div className="flex w-full items-center gap-3 rounded-md px-3 py-2">
            <FeatherSettings className="text-body font-body text-subtext-color" />
            <span className="text-body font-body text-default-font">
              Settings
            </span>
          </div>
          <div className="flex w-full items-center gap-3 rounded-md px-3 py-2">
            <FeatherHelpCircle className="text-body font-body text-subtext-color" />
            <span className="text-body font-body text-default-font">Help</span>
          </div>
        </div>
      </div>
      <div className="flex grow shrink-0 basis-0 flex-col items-start self-stretch overflow-hidden">
        <div className="flex w-full flex-wrap items-center gap-3 border-b border-solid border-neutral-border px-6 py-4 mobile:px-4">
          <span className="grow shrink-0 basis-0 text-heading-2 font-heading-2 text-default-font">
            Quotes
          </span>
          <Button
            icon={<FeatherPlus />}
            onClick={() => router.push("/requests/new")}
          >
            New lead
          </Button>
          <ToggleGroup value="kanban" onValueChange={(value: string) => {}}>
            <ToggleGroup.Item icon={null} value="25013662">
              List
            </ToggleGroup.Item>
            <ToggleGroup.Item icon={null} value="274ac0b3">
              Kanban
            </ToggleGroup.Item>
          </ToggleGroup>
        </div>
        <div className="flex w-full flex-wrap items-center gap-4 border-b border-solid border-neutral-border px-6 py-3 mobile:px-4">
          <TextField
            className="h-auto grow shrink-0 basis-0"
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
          <Button
            variant="neutral-tertiary"
            icon={<FeatherFilter />}
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            User
          </Button>
          <Button
            variant="neutral-tertiary"
            icon={<FeatherArchive />}
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Show archived
          </Button>
        </div>
        <div className="flex w-full grow shrink-0 basis-0 items-start gap-4 bg-neutral-50 px-6 py-6 overflow-auto mobile:px-4">
          {error && (
            <span className="text-body font-body text-error-600">
              Failed to load leads: {error}
            </span>
          )}
          {!leads && !error && (
            <span className="text-body font-body text-subtext-color">Loading…</span>
          )}
          {leads &&
            columns.map((stage) => {
              const meta = STAGE_META[stage] ?? { label: stage, variant: "neutral" as const };
              const items = byStage[stage] ?? [];
              return (
                <div
                  key={stage}
                  className="flex w-80 flex-none flex-col items-start self-stretch rounded-md border border-solid border-neutral-border bg-neutral-50"
                >
                  <div className="flex w-full items-center gap-2 px-4 py-3">
                    <span className="grow shrink-0 basis-0 text-body-bold font-body-bold text-default-font">
                      {meta.label}
                    </span>
                    <Badge variant={meta.variant}>{items.length}×</Badge>
                  </div>
                  <div className="flex w-full flex-col items-start gap-3 px-3 pb-4 overflow-auto">
                    {items.map((lead) => (
                      <div
                        key={lead.deal_id}
                        className="flex w-full flex-col items-start gap-3 rounded-md border border-solid border-neutral-border bg-default-background px-4 py-3 shadow-sm cursor-pointer hover:shadow-md transition-shadow"
                        onClick={() => router.push(`/requests/${lead.deal_id}`)}
                      >
                        <div className="flex w-full items-start gap-2">
                          <span className="grow shrink-0 basis-0 text-body-bold font-body-bold text-default-font">
                            {lead.customer_name}
                          </span>
                          <IconButton
                            size="small"
                            icon={<FeatherMoreVertical />}
                            onClick={(event: React.MouseEvent<HTMLButtonElement>) => { event.stopPropagation(); }}
                          />
                          <IconButton
                            variant="neutral-secondary"
                            size="small"
                            icon={<FeatherEdit2 />}
                            onClick={(event: React.MouseEvent<HTMLButtonElement>) => { event.stopPropagation(); }}
                          />
                        </div>
                        <div className="flex w-full flex-col items-start">
                          <span className="text-caption font-caption text-subtext-color">
                            {lead.region}
                          </span>
                          <span className="text-caption font-caption text-subtext-color">
                            {lead.products.join(" + ")}
                          </span>
                        </div>
                        <Button
                          variant="brand-secondary"
                          size="small"
                          icon={<FeatherWand2 />}
                          onClick={(event: React.MouseEvent<HTMLButtonElement>) => { event.stopPropagation(); router.push(`/requests/${lead.deal_id}/strategy`); }}
                        >
                          See strategy
                        </Button>
                        <div className="flex w-full items-center gap-2 border-t border-solid border-neutral-border pt-3">
                          <FeatherClock className="text-caption font-caption text-subtext-color grow shrink-0 basis-0" />
                          <span className="text-body-bold font-body-bold text-default-font">
                            {fmtPrice(lead.total_price, lead.currency)}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
