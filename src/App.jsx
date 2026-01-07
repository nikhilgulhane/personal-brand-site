// VP‑LEVEL PERSONAL BRAND WEBSITE — PRODUCTION SAFE
// Pure React + Tailwind (Vite compatible)
// Opinionated Product Thinker | Name visible but subtle

import React, { useState } from "react";

export default function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      <Header onNavigate={setPage} />

      <main className="max-w-5xl mx-auto px-6 py-20">
        {page === "home" && <Home />}
        {page === "profile" && <Profile />}
        {page === "writing" && <Writing />}
        {page === "contact" && <Contact />}
      </main>

      <Footer />
    </div>
  );
}

// ==============================
// HEADER
// ==============================

function Header({ onNavigate }) {
  return (
    <header className="border-b border-slate-800">
      <div className="max-w-5xl mx-auto px-6 py-6 flex justify-between items-center">
        <span className="text-xs tracking-wide text-slate-400">
          Nikhil Gulhane
        </span>
        <nav className="space-x-6 text-sm">
          <NavButton label="Home" onClick={() => onNavigate("home")} />
          <NavButton label="Profile" onClick={() => onNavigate("profile")} />
          <NavButton label="Writing" onClick={() => onNavigate("writing")} />
          <NavButton label="Contact" onClick={() => onNavigate("contact")} />
        </nav>
      </div>
    </header>
  );
}

function NavButton({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="text-slate-300 hover:text-white transition"
    >
      {label}
    </button>
  );
}

// ==============================
// FOOTER
// ==============================

function Footer() {
  return (
    <footer className="border-t border-slate-800">
      <div className="max-w-5xl mx-auto px-6 py-10 text-xs text-slate-500">
        © {new Date().getFullYear()} Nikhil Gulhane
      </div>
    </footer>
  );
}

// ==============================
// HOME
// ==============================

function Home() {
  return (
    <section>
      <h1 className="text-5xl font-semibold leading-tight mb-6">
        Product & Platform Leader
      </h1>
      <p className="text-xl text-slate-300 max-w-3xl mb-10">
        VP‑level leadership building AI platforms, payments systems, and
        enterprise products where scale, trust, and long‑term leverage matter.
      </p>

      <div className="flex gap-4">
        <span className="px-4 py-2 border border-slate-700 text-sm rounded">
          15+ Years
        </span>
        <span className="px-4 py-2 border border-slate-700 text-sm rounded">
          AI / ML
        </span>
        <span className="px-4 py-2 border border-slate-700 text-sm rounded">
          Payments
        </span>
        <span className="px-4 py-2 border border-slate-700 text-sm rounded">
          Platforms
        </span>
      </div>
    </section>
  );
}

// ==============================
// PROFILE
// ==============================

function Profile() {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-semibold">Leadership Profile</h2>
      <p className="text-slate-300 max-w-3xl">
        I specialize in building durable product platforms where reliability,
        judgment, and strategic sequencing outperform short‑term velocity.
      </p>

      <div className="border-l border-slate-700 pl-6">
        <h3 className="font-semibold">Amazon — Senior Product Leader</h3>
        <ul className="list-disc ml-5 mt-2 text-slate-300 space-y-1">
          <li>Scaled AI/ML systems to billions of daily evaluations</li>
          <li>Owned multi‑year platform roadmaps</li>
          <li>Led PM, Eng, DS alignment across geographies</li>
        </ul>
      </div>
    </section>
  );
}

// ==============================
// WRITING
// ==============================

function Writing() {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-semibold">Writing</h2>
      <ul className="space-y-4 text-slate-300">
        <li>
          <h4 className="font-medium">Platforms Compound Faster Than Teams</h4>
          <p className="text-sm text-slate-400">
            Why abstraction quality determines long‑term velocity.
          </p>
        </li>
        <li>
          <h4 className="font-medium">Product Judgment Is a Leadership Skill</h4>
          <p className="text-sm text-slate-400">
            At scale, decisions matter more than experimentation volume.
          </p>
        </li>
      </ul>
    </section>
  );
}

// ==============================
// CONTACT
// ==============================

function Contact() {
  return (
    <section className="space-y-6 max-w-xl">
      <h2 className="text-3xl font-semibold">Contact</h2>
      <p className="text-slate-300">
        Reach out for leadership roles, advisory conversations, or speaking
        opportunities.
      </p>

      <form
        className="space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          alert("Form submitted. Connect backend to enable email.");
        }}
      >
        <input
          className="w-full bg-slate-900 border border-slate-700 px-4 py-2 rounded"
          placeholder="Name"
          required
        />
        <input
          className="w-full bg-slate-900 border border-slate-700 px-4 py-2 rounded"
          placeholder="Email"
          type="email"
          required
        />
        <textarea
          className="w-full bg-slate-900 border border-slate-700 px-4 py-2 rounded"
          placeholder="Message"
          rows={4}
          required
        />
        <button className="px-6 py-2 bg-white text-slate-900 rounded text-sm">
          Send
        </button>
      </form>

      <p className="text-sm text-slate-400">
        Or connect on <a className="underline" href="https://linkedin.com">LinkedIn</a>
      </p>
    </section>
  );
}
