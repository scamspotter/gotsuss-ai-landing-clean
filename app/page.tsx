"use client";
import { useEffect, useState } from "react";

// ====== Wire these up to your real links ======
const SUBMIT_URL = "https://tally.so/r/mBWBJA"; // e.g. https://tally.so/r/mBWBJA
const EMAIL_CAPTURE_URL = "mailto:submit@gotsuss.ai?subject=Join%20the%20community"; // or a signup URL
const PRESS_KIT_URL = "#"; // Notion/Drive link ok
const PRIVACY_URL = "#"; // Notion link ok
const TERMS_URL = "#";   // Notion link ok
// ==============================================

export default function Page() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <main className="min-h-dvh text-neutral-100 bg-neutral-950">
      {/* AURORA BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[52rem] w-[52rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(252,31,30,0.25),transparent_60%)] blur-3xl" />
        <div className="absolute -bottom-40 -left-32 h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)] blur-3xl" />
        <div className="absolute top-1/4 -right-20 h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(70,70,255,0.18),transparent_60%)] blur-3xl" />
      </div>

      {/* Sticky Nav */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-neutral-950/70 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <a href="#home" className="font-serif lowercase tracking-tight text-2xl font-semibold">suss<span className="text-[#fc1f1e] align-top">.</span></a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-300">
            <a href="#how" className="hover:text-white">how it works</a>
            <a href="#features" className="hover:text-white">features</a>
            <a href="#security" className="hover:text-white">security</a>
            <a href="#faq" className="hover:text-white">faq</a>
            <a href={PRESS_KIT_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white">press</a>
          </nav>
          <div className="hidden md:flex items-center gap-2">
            <button onClick={() => setOpen(true)} className="inline-flex items-center rounded-2xl bg-[#fc1f1e] px-4 py-2 text-sm font-semibold text-white hover:opacity-90 transition">submit something suss</button>
            <a href={EMAIL_CAPTURE_URL} className="inline-flex items-center rounded-2xl border border-white/20 px-4 py-2 text-sm font-medium text-neutral-100 hover:bg-white/10 transition">get updates</a>
          </div>
          <div className="md:hidden">
            <button onClick={() => setOpen(true)} className="inline-flex items-center rounded-xl bg-[#fc1f1e] px-3 py-2 text-sm font-semibold text-white">submit</button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* Left: copy + CTAs */}
            <div>
              <p className="mb-3 inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-neutral-300 border border-white/10">early access</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-white">crowdsource your gut feeling.</h1>
              <p className="mt-4 text-base sm:text-lg text-neutral-300 max-w-prose">suss. helps you spot scams before they get you. submit screenshots, links, or listings and get a community-driven read—fast.</p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button onClick={() => setOpen(true)} className="inline-flex justify-center rounded-2xl bg-[#fc1f1e] px-5 py-3 text-base font-semibold text-white shadow-sm hover:opacity-90">submit something suss</button>
                <a href={EMAIL_CAPTURE_URL} className="inline-flex justify-center rounded-2xl border border-white/15 px-5 py-3 text-base font-medium text-neutral-100 hover:bg-white/10 transition">get updates / join</a>
              </div>
              <div className="mt-6 flex items-center gap-4 text-xs text-neutral-400">
                <span>free • no account needed</span>
                <span className="hidden sm:inline">|</span>
                <span>mobile & desktop</span>
              </div>
              {/* Trust strip */}
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 opacity-80">
                <Logo text="facebook marketplace" />
                <Logo text="craigslist" />
                <Logo text="instagram" />
                <Logo text="offerup" />
              </div>
            </div>

            {/* Right: Glass preview card */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/40 backdrop-blur-xl p-6 lg:p-8 grid gap-6">
              <div className="grid grid-cols-3 gap-4 text-center">
                <Stat value="1.2k+" label="submissions" />
                <Stat value="7m" label="avg. response" />
                <Stat value="92%" label="agreement" />
              </div>
              <div className="space-y-3">
                <SubmissionCard title="is this zelle request legit?" votes="suss 78%" />
                <SubmissionCard title="$400 macbook pro on campus" votes="suss 65%" />
                <SubmissionCard title="apartment deposit via gift cards" votes="suss 91%" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="border-y border-white/10 bg-neutral-950/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">why it matters</h2>
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

      {/* HOW IT WORKS */}
      <section id="how">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid lg:grid-cols-3 gap-6">
            <Step n={1} title="upload a screenshot or link" desc="no account required. redact personal info if needed." />
            <Step n={2} title="get a read" desc="the community votes legit / suss and shares quick context." />
            <Step n={3} title="help the next person" desc="vote on a few recent submissions to pay it forward." />
          </div>
          <div className="mt-8">
            <button onClick={() => setOpen(true)} className="inline-flex rounded-2xl bg-white px-5 py-3 text-neutral-900 font-semibold hover:bg-neutral-200">start a submission</button>
          </div>
        </div>
      </section>

      {/* SECURITY / ENTERPRISE */}
      <section id="security" className="border-t border-white/10 bg-neutral-950/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid lg:grid-cols-2 gap-6 items-start">
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <h3 className="text-white text-xl font-semibold">security & privacy</h3>
              <ul className="mt-4 space-y-3 text-sm text-neutral-300">
                <li className="flex gap-3"><span>✓</span><span>uploads are sanitized; personal data should be redacted before submission</span></li>
                <li className="flex gap-3"><span>✓</span><span>removal requests honored—contact via footer</span></li>
                <li className="flex gap-3"><span>✓</span><span>community guidelines enforced to prevent doxxing/harassment</span></li>
              </ul>
            </div>
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-transparent p-6">
              <h3 className="text-white text-xl font-semibold">for campuses & marketplaces</h3>
              <p className="mt-2 text-sm text-neutral-300">pilot suss. for your student marketplace or safety program.</p>
              <div className="mt-4 flex gap-3">
                <a href={EMAIL_CAPTURE_URL} className="inline-flex rounded-xl bg-[#fc1f1e] px-4 py-2 text-white font-semibold">request a pilot</a>
                <a href={PRESS_KIT_URL} className="inline-flex rounded-xl border border-white/15 px-4 py-2 text-neutral-100 hover:bg-white/10">download one‑pager</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            <Testimonial quote="Caught a fake listing in 30 seconds. Saved me $800." name="Maya S." />
            <Testimonial quote="Love that people explain *why* it’s suss." name="Jamal R." />
            <Testimonial quote="We’ll pilot this for our campus marketplace." name="Dean T., Student Affairs" />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-t border-white/10 bg-neutral-950/60">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">faq</h2>
          <div className="mt-6 divide-y divide-white/10">
            <Faq q="is it free?" a="yes. suss. is free while we’re in early access." />
            <Faq q="do i need an account?" a="no. you can submit without an account. we’ll add profiles later for saved history & follow features." />
            <Faq q="how fast do i get a read?" a="usually within minutes to hours, depending on traffic." />
            <Faq q="privacy?" a="please redact personal info before uploading. sensitive details are removed from public views." />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <div className="font-serif lowercase text-xl font-semibold text-white">suss<span className="text-[#fc1f1e] align-top">.</span></div>
              <p className="mt-1 text-sm text-neutral-400">crowdsource your gut feeling.</p>
            </div>
            <div className="flex items-center gap-5 text-sm text-neutral-300">
              <a href={PRIVACY_URL} className="hover:text-white">privacy</a>
              <a href={TERMS_URL} className="hover:text-white">terms</a>
              <a href={PRESS_KIT_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white">press kit</a>
              <a href={EMAIL_CAPTURE_URL} className="inline-flex items-center rounded-xl border border-white/15 px-3 py-1.5 font-medium hover:bg-white/10">contact</a>
            </div>
          </div>
          <p className="mt-6 text-xs text-neutral-500">© {new Date().getFullYear()} suss. all rights reserved.</p>
        </div>
      </footer>

      {/* Modal w/ embedded intake form */}
      {mounted && open && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4" role="dialog" aria-modal>
          <div className="relative w-full max-w-3xl rounded-2xl bg-neutral-950 border border-white/10 shadow-2xl">
            <button onClick={() => setOpen(false)} aria-label="Close" className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-white hover:bg-white/10">×</button>
            <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden">
              <iframe
                src={SUBMIT_URL + (SUBMIT_URL.includes("tally.so") ? "?transparentBackground=1&hideTitle=1" : "")}
                className="h-full w-full"
                frameBorder={0}
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

/* ---------- tiny helper components ---------- */
function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-white/10 p-4 bg-white/[0.03]">
      <div className="text-2xl font-bold text-white">{value}</div>
      <div className="text-xs text-neutral-300">{label}</div>
    </div>
  );
}

function Logo({ text }: { text: string }) {
  return (
    <div className="rounded-xl border border-white/10 p-3 text-xs text-neutral-300 bg-white/[0.03]">
      {text}
    </div>
  );
}

function Feature({ title, desc, icon }: { title: string; desc: string; icon: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 shadow-sm">
      <div className="text-2xl">{icon}</div>
      <h3 className="mt-2 font-semibold lowercase text-white">{title}</h3>
      <p className="mt-1 text-sm text-neutral-300">{desc}</p>
    </div>
  );
}

function Step({ n, title, desc }: { n: number; title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-white/10 p-5 bg-white/[0.03]">
      <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-neutral-900 text-sm font-semibold">{n}</div>
      <h3 className="mt-3 font-semibold text-white">{title}</h3>
      <p className="mt-1 text-sm text-neutral-300">{desc}</p>
    </div>
  );
}

function Testimonial({ quote, name }: { quote: string; name: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
      <p className="text-sm leading-relaxed text-neutral-200">“{quote}”</p>
      <div className="mt-3 text-xs text-neutral-400">— {name}</div>
    </div>
  );
}

function SubmissionCard({ title, votes }: { title: string; votes: string }) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] p-4">
      <div className="text-sm text-neutral-200">{title}</div>
      <div className="text-xs rounded-full bg-[#fc1f1e]/20 text-[#fc1f1e] px-2 py-1 border border-[#fc1f1e]/40">{votes}</div>
    </div>
  );
}

function Faq({ q, a }: { q: string; a: string }) {
  return (
    <details className="group py-5">
      <summary className="flex cursor-pointer list-none items-center justify-between text-base font-medium text-neutral-200">
        <span className="lowercase">{q}</span>
        <span className="transition group-open:rotate-45">+</span>
      </summary>
      <p className="mt-2 text-sm text-neutral-400">{a}</p>
    </details>
  );
}
