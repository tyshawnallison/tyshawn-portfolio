"use client";

import { useState, FormEvent } from "react";

type FormState = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: data.get("name") as string,
      email: data.get("email") as string,
      message: data.get("message") as string,
      _honeypot: data.get("_honeypot") as string,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setState("success");
      } else {
        const json = await res.json().catch(() => ({}));
        setErrorMsg(json.error || "Something went wrong. Please try again.");
        setState("error");
      }
    } catch {
      setErrorMsg("Network error. Please check your connection and try again.");
      setState("error");
    }
  };

  if (state === "success") {
    return (
      <div className="py-8 text-center">
        <p className="font-serif text-xl text-heading">
          Thank you! Your message has been sent.
        </p>
        <p className="mt-3 text-sm text-text">
          I&apos;ll get back to you as soon as I can.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Honeypot — hidden from users, caught by bots */}
      <div className="absolute opacity-0 pointer-events-none" aria-hidden="true">
        <input type="text" name="_honeypot" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <label
          htmlFor="name"
          className="block text-[0.65rem] font-medium tracking-[0.15em] uppercase text-muted mb-2"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          autoComplete="name"
          disabled={state === "sending"}
          className="w-full px-4 py-3 bg-bg-elevated border border-[#333] rounded-sm text-heading font-sans text-sm font-light transition-colors focus:outline-none focus:border-accent disabled:opacity-50"
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-[0.65rem] font-medium tracking-[0.15em] uppercase text-muted mb-2"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          autoComplete="email"
          disabled={state === "sending"}
          className="w-full px-4 py-3 bg-bg-elevated border border-[#333] rounded-sm text-heading font-sans text-sm font-light transition-colors focus:outline-none focus:border-accent disabled:opacity-50"
        />
      </div>
      <div className="md:col-span-2">
        <label
          htmlFor="message"
          className="block text-[0.65rem] font-medium tracking-[0.15em] uppercase text-muted mb-2"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          disabled={state === "sending"}
          className="w-full px-4 py-3 bg-bg-elevated border border-[#333] rounded-sm text-heading font-sans text-sm font-light transition-colors focus:outline-none focus:border-accent resize-y min-h-[120px] disabled:opacity-50"
        />
      </div>

      {state === "error" && (
        <div className="md:col-span-2">
          <p className="text-sm text-red-400">{errorMsg}</p>
        </div>
      )}

      <div className="md:col-span-2">
        <button
          type="submit"
          disabled={state === "sending"}
          className="w-full py-4 px-8 bg-accent border border-accent text-bg font-sans text-[0.7rem] font-medium tracking-[0.2em] uppercase rounded-sm cursor-pointer transition-opacity hover:opacity-85 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {state === "sending" ? "Sending\u2026" : "Send Message"}
        </button>
      </div>
    </form>
  );
}
