"use client";

import React from "react";
import { Alert } from "@/ui/components/Alert";
import { Button } from "@/ui/components/Button";
import { Select } from "@/ui/components/Select";
import { TextField } from "@/ui/components/TextField";
import { FeatherAlertTriangle, FeatherChevronLeft, FeatherPlus } from "@subframe/core";
import { useRouter } from "next/navigation";
import { createLead } from "@/lib/api";

const PRODUCTS = ["solar_pv", "heat_pump", "battery", "ev_charger"];

export default function NewLeadPage() {
  const router = useRouter();
  const [form, setForm] = React.useState({
    name: "",
    region: "",
    channel_preference: "",
    property_type: "",
    product: "heat_pump",
    total_price: "",
  });
  const [saving, setSaving] = React.useState(false);
  const [error, setError] = React.useState("");

  const set =
    (k: keyof typeof form) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setForm((f) => ({ ...f, [k]: event.target.value }));
    };

  const valid = form.name.trim() && form.region.trim() && Number(form.total_price) > 0;

  async function submit() {
    setSaving(true);
    setError("");
    try {
      const lead = await createLead({
        customer: {
          name: form.name,
          region: form.region,
          channel_preference: form.channel_preference || null,
          property_type: form.property_type || null,
        },
        quote: {
          products: [{ type: form.product, qty: 1 }],
          total_price: Number(form.total_price),
        },
      });
      router.push(`/requests/${lead.deal_id}`);
    } catch (e) {
      setError(String(e));
      setSaving(false);
    }
  }

  return (
    <div className="flex h-full w-full flex-col items-center bg-neutral-50 py-12">
      <div className="flex w-full max-w-[640px] flex-col items-start gap-6 px-6">
        <div className="flex w-full items-center gap-2">
          <Button
            variant="neutral-tertiary"
            icon={<FeatherChevronLeft />}
            onClick={() => router.push("/quotes")}
          >
            Back
          </Button>
          <span className="text-heading-2 font-heading-2 text-default-font">New lead</span>
        </div>

        {error && (
          <Alert
            variant="error"
            icon={<FeatherAlertTriangle />}
            title="Could not create lead"
            description={error}
          />
        )}

        <div className="flex w-full flex-col items-start gap-4 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-5 shadow-sm">
          <div className="flex w-full flex-wrap items-start gap-4">
            <TextField className="h-auto min-w-[240px] grow shrink-0 basis-0" label="Name *" helpText="">
              <TextField.Input placeholder="Customer name" value={form.name} onChange={set("name")} />
            </TextField>
            <TextField className="h-auto min-w-[240px] grow shrink-0 basis-0" label="Region *" helpText="">
              <TextField.Input placeholder="e.g. Köln" value={form.region} onChange={set("region")} />
            </TextField>
          </div>
          <div className="flex w-full flex-wrap items-start gap-4">
            <TextField className="h-auto min-w-[240px] grow shrink-0 basis-0" label="Property type" helpText="">
              <TextField.Input placeholder="detached / semi / apartment" value={form.property_type} onChange={set("property_type")} />
            </TextField>
            <TextField className="h-auto min-w-[240px] grow shrink-0 basis-0" label="Preferred channel" helpText="">
              <TextField.Input placeholder="email / call / sms" value={form.channel_preference} onChange={set("channel_preference")} />
            </TextField>
          </div>
          <div className="flex w-full flex-wrap items-start gap-4">
            <Select
              className="h-auto min-w-[240px] grow shrink-0 basis-0"
              label="Product"
              value={form.product}
              onValueChange={(value: string) => setForm((f) => ({ ...f, product: value }))}
            >
              {PRODUCTS.map((p) => (
                <Select.Item key={p} value={p}>
                  {p}
                </Select.Item>
              ))}
            </Select>
            <TextField className="h-auto min-w-[240px] grow shrink-0 basis-0" label="Quote value (EUR) *" helpText="">
              <TextField.Input type="number" placeholder="18000" value={form.total_price} onChange={set("total_price")} />
            </TextField>
          </div>
        </div>

        <Button icon={<FeatherPlus />} loading={saving} disabled={!valid} onClick={submit}>
          Create lead
        </Button>
      </div>
    </div>
  );
}
