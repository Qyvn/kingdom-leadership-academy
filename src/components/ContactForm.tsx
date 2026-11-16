"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!name || !email || !message) {
      setStatus("error");
      return;
    }

    await new Promise((resolve) => setTimeout(resolve, 700));
    form.reset();
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className="border border-kla-line bg-kla-mist px-6 py-10 text-center">
        <p className="text-xs font-semibold tracking-[0.2em] text-kla-red uppercase">
          Message received
        </p>
        <h2 className="mt-3 text-2xl font-bold text-kla-charcoal">Thank you for getting in touch</h2>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-kla-muted">
          We have received your enquiry and will respond as soon as possible.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 bg-kla-red px-5 py-3 text-xs font-semibold tracking-[0.16em] text-white uppercase transition-colors hover:bg-kla-red-dark"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div>
        <label htmlFor="name" className="block text-xs font-semibold tracking-[0.16em] text-kla-charcoal uppercase">
          Full name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="mt-2 w-full border border-kla-line bg-white px-4 py-3 text-sm outline-none transition focus:border-kla-red"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-xs font-semibold tracking-[0.16em] text-kla-charcoal uppercase">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="mt-2 w-full border border-kla-line bg-white px-4 py-3 text-sm outline-none transition focus:border-kla-red"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label htmlFor="interest" className="block text-xs font-semibold tracking-[0.16em] text-kla-charcoal uppercase">
          Interest
        </label>
        <select
          id="interest"
          name="interest"
          className="mt-2 w-full border border-kla-line bg-white px-4 py-3 text-sm outline-none transition focus:border-kla-red"
          defaultValue="Leadership Education"
        >
          <option>Leadership Education</option>
          <option>Coaching</option>
          <option>Training</option>
          <option>General enquiry</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-semibold tracking-[0.16em] text-kla-charcoal uppercase">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-2 w-full resize-y border border-kla-line bg-white px-4 py-3 text-sm outline-none transition focus:border-kla-red"
          placeholder="Tell us how we can help"
        />
      </div>

      {status === "error" ? (
        <p className="text-sm text-kla-red" role="alert">
          Please complete all required fields.
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "sending"}
        className="bg-kla-red px-6 py-3.5 text-xs font-semibold tracking-[0.18em] text-white uppercase transition-colors hover:bg-kla-red-dark disabled:cursor-wait disabled:opacity-70"
      >
        {status === "sending" ? "Sending…" : "Send enquiry"}
      </button>
    </form>
  );
}
