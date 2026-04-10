"use client";

import { useState, FormEvent } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="py-8 text-center">
        <p className="font-serif text-xl text-heading">
          Thank you! Your message has been received.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
          className="w-full px-4 py-3 bg-bg-elevated border border-[#333] rounded-sm text-heading font-sans text-sm font-light transition-colors focus:outline-none focus:border-accent"
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
          className="w-full px-4 py-3 bg-bg-elevated border border-[#333] rounded-sm text-heading font-sans text-sm font-light transition-colors focus:outline-none focus:border-accent"
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
          className="w-full px-4 py-3 bg-bg-elevated border border-[#333] rounded-sm text-heading font-sans text-sm font-light transition-colors focus:outline-none focus:border-accent resize-y min-h-[120px]"
        />
      </div>
      <div className="md:col-span-2">
        <button
          type="submit"
          className="w-full py-4 px-8 bg-accent border border-accent text-bg font-sans text-[0.7rem] font-medium tracking-[0.2em] uppercase rounded-sm cursor-pointer transition-opacity hover:opacity-85"
        >
          Send Message
        </button>
      </div>
    </form>
  );
}
