import * as Dialog from "@radix-ui/react-dialog";
import { AlertTriangle, Download, FileText, Mic, Pencil, Play, Plus, User, WandSparkles, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

import type { CustomerFileRecord, CustomerRecord, NoteRecord, QuoteDetailPayload } from "../../server/types.js";
import { api, formatMoney } from "../lib/api.js";
import { Avatar, ErrorState, LoadingState, PageHeader } from "./ui.js";

export function CustomerPage() {
  const { customerId } = useParams();
  const [params] = useSearchParams();
  const quoteId = params.get("quote");
  const [detail, setDetail] = useState<QuoteDetailPayload>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>();
  const [editOpen, setEditOpen] = useState(false);
  const [noteOpen, setNoteOpen] = useState(false);
  const navigate = useNavigate();

  async function load() {
    setLoading(true);
    try {
      if (quoteId) {
        setDetail(await api.quote(quoteId));
      } else {
        const quotes = await api.quotes();
        const quote = quotes.quotes.find((item) => item.customerId === customerId);
        if (!quote) {
          throw new Error("No quote found for this customer");
        }
        setDetail(await api.quote(quote.id));
      }
      setError(undefined);
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "Could not load customer");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    void load();
  }, [customerId, quoteId]);

  if (loading) {
    return <LoadingState label="Loading master data" />;
  }
  if (error || !detail) {
    return <ErrorState message={error ?? "Missing customer detail"} />;
  }

  return (
    <section className="page master-page">
      <PageHeader
        title="Master Data"
        breadcrumbs={[
          { label: "Requests", to: "/quotes" },
          { label: detail.customer.name },
        ]}
      />
      {detail.quote.strategyStale ? (
        <div className="warning-banner">
          <AlertTriangle size={18} />
          <div>
            <strong>Master data has changed</strong>
            <span>The closing strategy was generated before your latest edits and may be out of date.</span>
          </div>
          <button
            className="primary-button"
            type="button"
            onClick={() => {
              navigate(`/requests/${detail.quote.id}/strategy?regenerate=1`);
            }}
          >
            <WandSparkles size={16} />
            Regenerate strategy
          </button>
        </div>
      ) : null}
      <section className="master-card">
        <div className="master-card-heading">
          <div>
            <h2>
              <User size={18} />
              Prospect information
            </h2>
            <p>Used to personalize the closing strategy</p>
          </div>
          <button className="secondary-button" type="button" onClick={() => setEditOpen(true)}>
            <Pencil size={15} />
            Edit
          </button>
        </div>
        <div className="form-grid readonly-grid">
          <ReadOnlyField label="Name" value={detail.customer.name} />
          <ReadOnlyField label="Email" value={detail.customer.email} />
          <ReadOnlyField label="Address" value={detail.customer.address} />
          <ReadOnlyField label="Phone" value={detail.customer.phone} />
          <ReadOnlyField label="System" value={detail.customer.system} />
          <ReadOnlyField label="Quote value" value={formatMoney(detail.customer.quoteValue)} />
          <ReadOnlyField label="Preferred channel" value={detail.customer.communicationPreference} />
          <ReadOnlyField label="Decision note" value={detail.customer.decisionNote} />
          <ReadOnlyField label="Property note" value={detail.customer.householdNote} />
          <ReadOnlyField label="Quote status" value={detail.quote.statusLabel ?? detail.quote.nextAction.label} />
        </div>
      </section>
      <section className="master-card">
        <div className="master-card-heading">
          <div>
            <h2>
              <WandSparkles size={18} />
              Buyer signals
            </h2>
            <p>Current profile used by the assistant</p>
          </div>
        </div>
        <div className="master-signal-grid">
          {detail.customer.buyerProfile.map((signal) => (
            <article className="master-signal" key={signal.id}>
              <strong>{signal.name}</strong>
              <span>{signal.strength}</span>
              <p>{signal.description}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="master-card notes-card">
        <div className="master-card-heading">
          <div>
            <h2>
              <FileText size={18} />
              Installer notes <span className="count-badge">{detail.notes.length}</span>
            </h2>
            <p>Insights here shape the recommended plays</p>
          </div>
        </div>
        <div className="notes-list">
          {detail.notes.map((note) => (
            <NoteCard note={note} key={note.id} />
          ))}
        </div>
        <div className="notes-actions">
          <button className="secondary-button" type="button" onClick={() => setNoteOpen(true)}>
            <Plus size={15} />
            Add note
          </button>
          <button className="ghost-button" type="button" onClick={() => setNoteOpen(true)}>
            <Mic size={15} />
            Record voice
          </button>
        </div>
      </section>
      <section className="master-card files-card">
        <div className="master-card-heading">
          <div>
            <h2>
              <FileText size={18} />
              Files <span className="count-badge">{detail.files.length}</span>
            </h2>
            <p>Documents parsed as context in the strategy</p>
          </div>
        </div>
        <div className="files-list">
          {detail.files.map((file) => (
            <FileCard file={file} key={file.id} />
          ))}
        </div>
      </section>
      <EditCustomerDialog
        customer={detail.customer}
        open={editOpen}
        onOpenChange={setEditOpen}
        onSaved={() => void load()}
      />
      <AddNoteDialog
        customerId={detail.customer.id}
        open={noteOpen}
        onOpenChange={setNoteOpen}
        onSaved={() => void load()}
      />
    </section>
  );
}

function ReadOnlyField({ label, value }: { label: string; value: string }) {
  return (
    <label className="field-stack">
      <span>{label}</span>
      <input value={value} readOnly />
    </label>
  );
}

function NoteCard({ note }: { note: NoteRecord }) {
  return (
    <article className="note-card">
      {note.type === "audio" ? (
        <div className="audio-row">
          <button className="play-button" aria-label="Play audio">
            <Play size={17} />
          </button>
          <div className="waveform" />
          <span>{note.duration}</span>
        </div>
      ) : null}
      <div className="note-body">
        <div className="note-title-row">
          <h3>
            <FileText size={15} />
            {note.title}
          </h3>
          {note.transcriptStatus ? <span className="transcribed">{note.transcriptStatus}</span> : null}
        </div>
        <p>{note.body}</p>
      </div>
      <footer className="note-footer">
        <span>
          <Avatar label={note.authorAvatar} tone={note.authorAvatar === "JK" ? "yellow" : "green"} size="xs" />
          {note.authorName}
        </span>
        <span>
          {new Intl.DateTimeFormat("en", {
            month: "short",
            day: "numeric",
            hour: "numeric",
            minute: "2-digit",
          }).format(new Date(note.createdAt))}
        </span>
      </footer>
    </article>
  );
}

function FileCard({ file }: { file: CustomerFileRecord }) {
  return (
    <article className="file-row">
      <span className={`file-type file-${file.type}`}>{file.type}</span>
      <div>
        <strong>{file.name}</strong>
        <p>{file.summary}</p>
        <small>
          {file.sizeLabel} · Uploaded by {file.uploadedBy} ·{" "}
          {new Intl.DateTimeFormat("en", {
            month: "short",
            day: "numeric",
          }).format(new Date(file.uploadedAt))}
        </small>
      </div>
      <button className="icon-button" type="button" aria-label={`Download ${file.name}`}>
        <Download size={15} />
      </button>
    </article>
  );
}

function EditCustomerDialog({
  customer,
  open,
  onOpenChange,
  onSaved,
}: {
  customer: CustomerRecord;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSaved: () => void;
}) {
  const [form, setForm] = useState(customer);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    setForm(customer);
  }, [customer]);

  async function save() {
    setSaving(true);
    try {
      await api.updateCustomer(customer.id, {
        name: form.name,
        email: form.email,
        phone: form.phone,
        address: form.address,
        system: form.system,
        quoteValue: Number(form.quoteValue),
      });
      onSaved();
      onOpenChange(false);
    } finally {
      setSaving(false);
    }
  }

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="dialog-overlay" />
        <Dialog.Content className="dialog-content wide-dialog">
          <div className="dialog-heading">
            <div>
              <Dialog.Title>Edit prospect information</Dialog.Title>
              <Dialog.Description>Changes mark the current strategy as stale.</Dialog.Description>
            </div>
            <Dialog.Close className="icon-button" aria-label="Close">
              <X size={16} />
            </Dialog.Close>
          </div>
          <div className="form-grid">
            {(["name", "email", "address", "phone", "system"] as const).map((field) => (
              <label className="field-stack" key={field}>
                <span>{field.charAt(0).toUpperCase() + field.slice(1)}</span>
                <input
                  value={form[field]}
                  onChange={(event) => setForm((current) => ({ ...current, [field]: event.target.value }))}
                />
              </label>
            ))}
            <label className="field-stack">
              <span>Quote value</span>
              <input
                type="number"
                value={form.quoteValue}
                onChange={(event) =>
                  setForm((current) => ({ ...current, quoteValue: Number(event.target.value) }))
                }
              />
            </label>
          </div>
          <div className="dialog-actions">
            <Dialog.Close className="secondary-button">Cancel</Dialog.Close>
            <button className="primary-button" type="button" onClick={() => void save()} disabled={saving}>
              {saving ? "Saving..." : "Save changes"}
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

function AddNoteDialog({
  customerId,
  open,
  onOpenChange,
  onSaved,
}: {
  customerId: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSaved: () => void;
}) {
  const [title, setTitle] = useState("New installer note");
  const [body, setBody] = useState("");
  const [saving, setSaving] = useState(false);

  async function save() {
    setSaving(true);
    try {
      await api.addNote(customerId, {
        type: "text",
        title,
        body,
      });
      setBody("");
      onSaved();
      onOpenChange(false);
    } finally {
      setSaving(false);
    }
  }

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="dialog-overlay" />
        <Dialog.Content className="dialog-content">
          <div className="dialog-heading">
            <div>
              <Dialog.Title>Add installer note</Dialog.Title>
              <Dialog.Description>Notes become part of the strategy context.</Dialog.Description>
            </div>
            <Dialog.Close className="icon-button" aria-label="Close">
              <X size={16} />
            </Dialog.Close>
          </div>
          <label className="field-stack">
            <span>Title</span>
            <input value={title} onChange={(event) => setTitle(event.target.value)} />
          </label>
          <label className="field-stack">
            <span>Note</span>
            <textarea
              rows={6}
              value={body}
              onChange={(event) => setBody(event.target.value)}
              placeholder="Add a customer concern, observation, or next commitment."
            />
          </label>
          <div className="dialog-actions">
            <Dialog.Close className="secondary-button">Cancel</Dialog.Close>
            <button className="primary-button" type="button" onClick={() => void save()} disabled={saving}>
              {saving ? "Saving..." : "Add note"}
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
