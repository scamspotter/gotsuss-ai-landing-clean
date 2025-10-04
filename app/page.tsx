"use client";
import { useState, useEffect } from "react";

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Replace these with your real links
const SUBMIT_URL = "https://tally.so/r/mBWBJA"; // Tally/Airtable/Typeform
const EMAIL_CAPTURE_URL = "mailto:submit@gotsuss.ai?subject=Join%20the%20community"; // or a signup URL
const PRESS_KIT_URL = "#"; // Notion/Drive link (optional)
const PRIVACY_URL = "#"; // Notion doc is fine for now
const TERMS_URL = "#";   // Notion doc is fine for now
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

export default function Page() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <main className="min-h-dvh bg-white text-neutral-900">
      {/* Sticky Nav */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <a href="#home" className="font-serif lowercase tracking-tight text-2xl font-semibold">suss<span className="align-top">.</span></a>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#how" className="hover:opacity-80">how it works</a>
            <a href="#features" className="hover:opacity-80">features</a>
            <a href="#faq" className="hover:opacity-80">faq</a>
            <a href={PRESS_KIT_URL} target="_blank" rel="noopener noreferrer" className="hover:opacity-80">press</a>
          </nav>
          <div className="hidden md:flex items-center gap-2">
            <button onClick={() => setOpen(true)} className="inline-flex items-center rounded-2xl bg-[#fc1f1e] px-3.5 py-2 text-sm font-semibold text-white hover:opacity-90 transition">submit something suss</button>
            <a href={EMAIL_CAPTURE_URL} className="inline-flex items-center rounded-2xl border border-neutral-900 px-3.5 py-2 text-sm font-medium hover:bg-neutral-900 hover:text-white transition">get updates</a>
          </div>
          <div className="md:hidden">
            <button onClick={() => setOpen(true)} className="inline-flex items-center rounded-xl bg-[#fc1f1e] px-3 py-2 text-sm font-semibold text-white">submit</button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-x-0 -top-40 -z-10 h-[380px] bg-[#fc1f1e]/10 blur-[60px]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div>
              <p className="mb-3 inline-flex items-center rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700 border border-neutral-200">early access</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight">crowdsource your gut feeling.</h1>
              <p className="mt-4 text-base sm:text-lg text-neutral-700 max-w-prose">suss. helps you spot scams before they get you. submit screenshots, links, or listings and get a community-driven read—fast.</p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button onClick={() => setOpen(true)} className="inline-flex justify-center rounded-2xl bg-[#fc1f1e] px-5 py-3 text-base font-semibold text-white shadow-sm hover:opacity-90">submit something suss</button>
                <a href={EMAIL_CAPTURE_URL} className="inline-flex justify-center rounded-2xl border border-neutral-900 px-5 py-3 text-base font-medium hover:bg-neutral-900 hover:text-white transition">get updates / join</a>
              </div>
              <div className="mt-6 flex items-center gap-4 text-xs text-neutral-500">
                <span>free • no account needed</span>
                <span className="hidden sm:inline">|</span>
                <span>works on mobile & desktop</span>
              </div>
            </div>
            {/* Social proof / stats card */}
            <div className="rounded-3xl border border-neutral-200 bg-white shadow-sm p-6 lg:p-8 grid gap-6">
              <div className="grid grid-cols-3 gap-4 text-center">
                <Stat value="1.2k+" label="submissions" />
                <Stat value="7m" label="avg. response" />
                <Stat value="92%" label="agreement" />
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 opacity-80">
                <Logo text="Facebook" />
                <Logo text="Craigslist" />
                <Logo text="Instagram" />
                <Logo text="OfferUp" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature grid */}
      <section id="features" className="bg-neutral-50 border-y border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold">why it matters</h2>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <Feature title="community votes" desc="quick legit vs suss read with context, not just a score." icon="👍" />
            <Feature title="evidence first" desc="screenshots, links, and seller history—organized for fast judgment." icon="📎" />
            <Feature title="pattern signals" desc="recurring names, emails, and phrases flagged across platforms." icon="🔎" />
            <Feature title="privacy-minded" desc="redact personal info; sensitive details hidden from public." icon="🕵️" />
            <Feature title="fast by design" desc="mobile-first flow that takes seconds, not minutes." icon="⚡" />
            <Feature title="built for schools" desc="templates for campus marketplaces and student safety teams." icon="🎓" />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid lg:grid-cols-3 gap-6">
            <Step n={1} title="upload a screenshot or link" desc="no account required. redact personal info if needed." />
            <Step n={2} title="get a read" desc="the community votes legit / suss and shares quick context." />
            <Step n={3} title="help the next person" desc="vote on a few recent submissions to pay it forward." />
          </div>
          <div className="mt-8">
            <button onClick={() => setOpen(true)} className="inline-flex rounded-2xl bg-neutral-900 px-5 py-3 text-white font-semibold hover:bg-neutral-800">start a submission</button>
          </div>
        </div>
      </section>

      {/* Testimonials (light) */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            <Testimonial quote="Caught a fake listing in 30 seconds. Saved me $800." name="Maya S." />
            <Testimonial quote="Love that people explain *why* it’s suss." name="Jamal R." />
            <Testimonial quote="We’ll pilot this for our campus marketplace." name="Dean T., Student Affairs" />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-neutral-50 border-t border-neutral-200">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold">faq</h2>
          <div className="mt-6 divide-y divide-neutral-200">
            <Faq q="is it free?" a="yes. suss. is free while we’re in early access." />
            <Faq q="do i need an account?" a="no. you can submit without an account. we’ll add profiles later for saved history & follow features." />
            <Faq q="how fast do i get a read?" a="usually within minutes to hours, depending on traffic." />
            <Faq q="privacy?" a="please redact personal info before uploading. sensitive details are removed from public views." />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <div className="font-serif lowercase text-xl font-semibold">suss<span className="align-top">.</span></div>
              <p className="mt-1 text-sm text-neutral-600">crowdsource your gut feeling.</p>
            </div>
            <div className="flex items-center gap-5 text-sm">
              <a href={PRIVACY_URL} className="hover:opacity-80">privacy</a>
              <a href={TERMS_URL} className="hover:opacity-80">terms</a>
              <a href={PRESS_KIT_URL} target="_blank" rel="noopener noreferrer" className="hover:opacity-80">press kit</a>
              <a href={EMAIL_CAPTURE_URL} className="inline-flex items-center rounded-xl border border-neutral-900 px-3 py-1.5 font-medium hover:bg-neutral-900 hover:text-white">contact</a>
            </div>
          </div>
          <p className="mt-6 text-xs text-neutral-500">© {new Date().getFullYear()} suss. all rights reserved.</p>
        </div>
      </footer>

      {/* Minimal modal with Tally/Airtable embed */}
      {mounted && open && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4" role="dialog" aria-modal>
          <div className="relative w-full max-w-3xl rounded-2xl bg-white shadow-xl">
            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full border border-neutral-200 hover:bg-neutral-50"
            >×</button>
            <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden">
              <iframe
                src={SUBMIT_URL + (SUBMIT_URL.includes("tally.so") ? "?transparentBackground=1&hideTitle=1" : "")}
                className="h-full w-full"
                frameBorder="0"
                title="suss submission form"
                allow="clipboard-write; fullscreen"
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-neutral-200 p-4">
      <div className="text-2xl font-bold">{value}</div>
      <div className="text-xs text-neutral-600">{label}</div>
    </div>
  );
}

function Logo({ text }: { text: string }) {
  return (
    <div className="rounded-xl border border-neutral-200 p-3 text-xs text-neutral-600 bg-white">
      {text}
    </div>
  );
}

function Feature({ title, desc, icon }: { title: string; desc: string; icon: string }) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
      <div className="text-2xl">{icon}</div>
      <h3 className="mt-2 font-semibold lowercase">{title}</h3>
      <p className="mt-1 text-sm text-neutral-600">{desc}</p>
    </div>
  );
}

function Step({ n, title, desc }: { n: number; title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-neutral-200 p-5">
      <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-neutral-900 text-white text-sm font-semibold">{n}</div>
      <h3 className="mt-3 font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-neutral-600">{desc}</p>
    </div>
  );
}

function Testimonial({ quote, name }: { quote: string; name: string }) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-5">
      <p className="text-sm leading-relaxed">“{quote}”</p>
      <div className="mt-3 text-xs text-neutral-600">— {name}</div>
    </div>
  );
}
function Faq({ q, a }: { q: string; a: string }) {
  return (
    <details className="group py-5">
      <summary className="flex cursor-pointer list-none items-center justify-between text-base font-medium">
        <span className="lowercase">{q}</span>
        <span className="transition group-open:rotate-45">+</span>
      </summary>
      <p className="mt-2 text-sm text-neutral-600">{a}</p>
    </details>
  );
}
