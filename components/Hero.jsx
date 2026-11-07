
import { Send, Download } from "lucide-react";
import Image from "next/image";

const stats = [
  ["3–5+", "Years Experience"],
  ["10+", "Projects Completed"],
  ["100%", "Client Satisfaction"],
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden border-b border-line bg-[radial-gradient(ellipse_at_80%_40%,rgba(29,140,255,0.35),transparent_60%)]"
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute -right-10 top-24 h-24 w-2/3 -skew-x-[30deg] bg-gradient-to-r from-transparent to-blue-600/40" />

      <div className="pointer-events-none absolute right-0 top-56 h-28 w-1/2 -skew-x-[30deg] bg-gradient-to-r from-transparent to-blue-500/50" />

      {/* Main Hero Container */}
      <div className="relative mx-auto grid min-h-[650px] max-w-7xl grid-cols-1 items-center gap-8 px-6 pt-28 md:grid-cols-2 md:gap-4 lg:px-10">

        {/* LEFT SIDE - CONTENT */}
        <div className="relative z-10 max-w-2xl pb-10 md:py-16">

          {/* Availability Badge */}
          <span className="inline-flex items-center gap-2 rounded-md border border-green-500/30 bg-green-500/10 px-3 py-1 text-xs text-green-400">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
            Available for Remote Work
          </span>

          {/* Heading */}
          <h1 className="mt-6 leading-tight">
            <span className="block text-3xl font-medium text-slate-300 sm:text-4xl lg:text-5xl">
              Hi, I'm{" "}
              <span className="font-bold text-brand">
                Emmanuel Alao
              </span>
            </span>

            <span className="mt-3 block text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Full Stack{" "}
              <span className="text-brand">
                Web Developer
              </span>
            </span>
          </h1>

          {/* Introduction */}
          <p className="mt-6 max-w-lg text-base leading-relaxed text-slate-300 sm:text-lg">
            I build fast, scalable and user-friendly web applications
            using React, Next.js and modern technologies. I turn ideas
            into powerful digital solutions.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">

            <a
              href="mailto:alaoemmanuel1978@gmail.com"
              className="btn-primary flex shrink-0 items-center gap-2 text-xs font-semibold sm:text-sm"
            >
              <Send size={16} />
              Hire Me Now
            </a>

            <a
              href="/projects/Emmanuel-Alao-CV.pdf"
              download
              className="btn-outline flex items-center gap-2"
            >
              <Download size={16} />
              Download CV
            </a>

          </div>

          {/* Statistics */}
          <dl className="mt-10 flex flex-wrap items-center gap-5 sm:gap-6">

            {stats.map(([number, label], index) => (
              <div
                key={label}
                className={
                  index > 0
                    ? "border-l border-line pl-5 sm:pl-6"
                    : ""
                }
              >
                <dt className="text-2xl font-bold text-white sm:text-3xl">
                  {number}
                </dt>

                <dd className="mt-1 text-xs text-slate-300 sm:text-sm">
                  {label}
                </dd>
              </div>
            ))}

          </dl>
        </div>

        {/* RIGHT SIDE - TRANSPARENT PROFILE IMAGE */}
        <div className="relative flex h-[420px] items-end justify-center md:h-[580px] md:justify-end">

          <Image
            src="/projects/emmanuel-transparent.png"
            alt="Emmanuel Alao - Full Stack Web Developer"
            width={650}
            height={800}
            priority
            quality={95}
            className="h-full w-auto max-w-full object-contain object-bottom"
            sizes="(max-width: 768px) 100vw, 50vw"
          />

        </div>

      </div>
    </section>
  );
}
