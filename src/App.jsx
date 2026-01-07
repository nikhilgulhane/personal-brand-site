import React, { useState } from "react";

export default function App() {
  const [page, setPage] = useState("home");

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      <header className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center">
        <span className="text-sm tracking-wide text-slate-400">
          Nikhil Gulhane
        </span>
        <nav className="space-x-6 text-sm">
          {["home", "profile", "writing", "contact"].map(p => (
            <button
              key={p}
              onClick={() => setPage(p)}
              className="hover:text-white"
            >
              {p.charAt(0).toUpperCase() + p.slice(1)}
            </button>
          ))}
        </nav>
      </header>

      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20">
        {page === "home" && <Home />}
        {page === "profile" && <Profile />}
        {page === "writing" && <Writing />}
        {page === "contact" && <Contact />}
      </section>
    </main>
  );
}

function Home() {
  return (
    <>
      <h1 className="text-5xl font-semibold mb-6">
        Product & Platform Leader
      </h1>
      <p className="text-xl text-slate-300 max-w-2xl">
        VP-level leadership across AI platforms, payments systems,
        procurement, and enterprise software at global scale.
      </p>
    </>
  );
}

function Profile() {
  return (
    <>
      <h2 className="text-3xl font-semibold mb-4">Leadership Profile</h2>
      <p className="text-slate-300">
        15+ years building durable platforms where reliability, leverage,
        and long-term strategy matter more than short-term velocity.
      </p>
    </>
  );
}

function Writing() {
  return (
    <>
      <h2 className="text-3xl font-semibold mb-4">Writing</h2>
      <ul className="space-y-3 text-slate-300">
        <li>• Platforms Compound Faster Than Teams</li>
        <li>• Product Judgment Is a Leadership Skill</li>
      </ul>
    </>
  );
}

function Contact() {
  return (
    <>
      <h2 className="text-3xl font-semibold mb-4">Contact</h2>
      <p className="text-slate-300">
        Reach out via LinkedIn for leadership, advisory, or speaking.
      </p>
    </>
  );
}
