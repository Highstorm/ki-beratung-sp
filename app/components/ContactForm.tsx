"use client";

import { useActionState } from "react";
import { submitContactForm, type FormState } from "../actions";
import { Send, CheckCircle2, Loader2 } from "lucide-react";

const initialState: FormState = { success: false, message: "" };

const inputClass =
  "w-full bg-card-bg border border-accent-border rounded-[12px] px-4 py-3 font-body text-sm text-black placeholder:text-text3 focus:border-accent-border2 focus:outline-none transition-colors";

export function ContactForm({ reasons }: { reasons: string[] }) {
  const [state, formAction, pending] = useActionState(submitContactForm, initialState);

  if (state.success) {
    return (
      <div className="bg-[rgba(163,230,53,0.08)] border border-accent-border2 rounded-[16px] p-8 text-center">
        <CheckCircle2 className="w-10 h-10 text-accent2 mx-auto mb-4" strokeWidth={1.5} />
        <p className="font-heading text-lg font-bold text-black mb-2">Nachricht gesendet!</p>
        <p className="font-body text-sm text-text2">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-4 text-left">
      {/* Honeypot */}
      <div className="absolute opacity-0 h-0 overflow-hidden" aria-hidden="true">
        <input type="text" name="website_url" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <label htmlFor="name" className="block font-heading text-sm font-semibold text-black mb-1.5">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Ihr Name"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="email" className="block font-heading text-sm font-semibold text-black mb-1.5">
          E-Mail
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="ihre@email.de"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="anliegen" className="block font-heading text-sm font-semibold text-black mb-1.5">
          Anliegen
        </label>
        <select
          id="anliegen"
          name="anliegen"
          required
          defaultValue=""
          className={inputClass}
        >
          <option value="" disabled>
            Bitte wählen...
          </option>
          {reasons.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="nachricht" className="block font-heading text-sm font-semibold text-black mb-1.5">
          Nachricht
        </label>
        <textarea
          id="nachricht"
          name="nachricht"
          required
          rows={4}
          placeholder="Ihre Nachricht..."
          className={`${inputClass} resize-none`}
        />
      </div>

      {state.message && !state.success && (
        <p className="font-body text-sm text-red-600">{state.message}</p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="w-full inline-flex items-center justify-center gap-2 font-heading text-sm font-bold bg-accent text-black px-8 py-4 rounded-lg hover:bg-accent-hover hover:shadow-[0_4px_30px_rgba(163,230,53,0.4)] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {pending ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" strokeWidth={2} />
            Wird gesendet…
          </>
        ) : (
          <>
            <Send className="w-4 h-4" strokeWidth={2} />
            Nachricht senden
          </>
        )}
      </button>
    </form>
  );
}
