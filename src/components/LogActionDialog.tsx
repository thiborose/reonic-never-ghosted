import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { useEffect, useState } from "react";

import { api } from "../lib/api.js";
import type { ActionRecord, QuoteDetailPayload } from "../../server/types.js";

export function LogActionDialog({
  action,
  open,
  onOpenChange,
  onSaved,
}: {
  action: ActionRecord | undefined;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSaved: (detail: QuoteDetailPayload) => void;
}) {
  const [notes, setNotes] = useState("");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    setNotes(action?.defaultLogText ?? "");
  }, [action]);

  async function submit() {
    if (!action) {
      return;
    }
    setSaving(true);
    try {
      const detail = await api.logAction(action.id, { notes });
      onSaved(detail);
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
              <Dialog.Title>{action?.logPromptTitle ?? "Log outcome"}</Dialog.Title>
              <Dialog.Description>
                Add what happened. The assistant updates the next best action from this note.
              </Dialog.Description>
            </div>
            <Dialog.Close className="icon-button" aria-label="Close">
              <X size={16} />
            </Dialog.Close>
          </div>
          <label className="field-stack">
            <span>Outcome notes</span>
            <textarea
              value={notes}
              onChange={(event) => setNotes(event.target.value)}
              rows={7}
              placeholder="What did the customer say? Which concern changed?"
            />
          </label>
          <div className="dialog-actions">
            <Dialog.Close className="secondary-button">Cancel</Dialog.Close>
            <button className="primary-button" type="button" onClick={submit} disabled={saving}>
              {saving ? "Saving..." : "Save & update strategy"}
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
