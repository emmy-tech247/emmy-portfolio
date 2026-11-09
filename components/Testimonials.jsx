"use client";
import { useState } from "react";

const testimonials = [
  {
    quote: "Emmanuel is an exceptional developer. He delivered our project ahead of schedule with outstanding quality. I highly recommend him for any web development role.",
    name: "Sarah Mitchell",
    role: "Product Manager, TechNova",
    photo: "/projects/sarah.jpg",
  },
  {
    quote: "Clean code, clear communication and great attention to detail. A pleasure to work with.",
    name: "Client Name",
    role: "Founder, SiteTech",
    photo: "/projects/Daniel.jpg",
  },
  {
    quote: "He turned our rough idea into a polished, fast product. We will work together again.",
    name: "Client Name",
    role: "CEO, TechnoSite",
    photo: "/projects/Steven.jpg",
  },
];

export default function Testimonials() {
  const [i, setI] = useState(0);
  const t = testimonials[i];

  return (
    <section id="testimonials" className="border-b border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 lg:flex-row lg:items-center">
        <div className="lg:w-1/3">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-400">
            <span className="h-0.5 w-4 bg-sky-400" /> Testimonials
          </div>
          <h2 className="mt-2 text-3xl font-bold">What Clients Say</h2>
          <p className="mt-2 text-sm text-slate-300">Trusted by clients and employers worldwide.</p>
        </div>

        <figure className="panel flex flex-1 items-center gap-5 rounded-xl border border-line bg-slate-900/40 p-5">
          <img src={t.photo} alt={t.name} className="h-14 w-14 shrink-0 rounded-full bg-slate-700 object-cover" />
          <div>
            <blockquote className="text-xs leading-relaxed text-slate-200">“{t.quote}”</blockquote>
            <figcaption className="mt-3 text-xs">
              <span className="font-semibold text-white">— {t.name}</span>
              <span className="block text-slate-400">{t.role}</span>
            </figcaption>
          </div>
        </figure>

        <div className="flex justify-center gap-2 lg:flex-col">
          {testimonials.map((_, n) => (
            <button
              key={n}
              onClick={() => setI(n)}
              aria-label={`Show testimonial ${n + 1}`}
              aria-pressed={n === i}
              className={`h-2 w-2 rounded-full transition-all ${n === i ? "bg-sky-400 w-4" : "bg-slate-700"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}