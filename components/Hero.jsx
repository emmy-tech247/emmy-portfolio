import { Send, Download } from "lucide-react";

const stats = [
  ["3–5+", "Years Experience"],
  ["10+", "Projects Completed"],
  ["100%", "Client Satisfaction"],
];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden border-b border-line bg-[radial-gradient(ellipse_at_80%_40%,rgba(29,140,255,0.35),transparent_60%)]">
      <div className="pointer-events-none absolute -right-10 top-24 h-24 w-2/3 -skew-x-[30deg] bg-gradient-to-r from-transparent to-blue-600/40" />
      <div className="pointer-events-none absolute right-0 top-56 h-28 w-1/2 -skew-x-[30deg] bg-gradient-to-r from-transparent to-blue-500/50" />

      <div className="relative mx-auto grid max-w-6xl items-end gap-8 px-6 pt-32 md:grid-cols-2">
        <div className="pb-14">
          <span className="inline-flex items-center gap-2 rounded-md border border-green-500/30 bg-green-500/10 px-3 py-1 text-xs text-green-400">
            <span className="h-2 w-2 rounded-full bg-green-400" /> Available for Remote Work
          </span>
          
<h1 className="mt-6 leading-tight">
  <span className="block text-3xl font-medium text-slate-300 sm:text-4xl lg:text-5xl">
    Hi, I’m{" "}
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

          <p className="mt-6 max-w-md text-base leading-relaxed text-slate-300">
            I build fast, scalable and user-friendly web applications using React, Next.js and modern technologies. I turn ideas into powerful digital solutions.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="mailto:alaoemmanuel1978@gmail.com" className="btn-primary shrink-0 flex items-center gap-2 text-xs font-semibold"><Send size={16} /> Hire Me Now</a>
            <a href="/projects/Emmanuel-Alao-CV.pdf" download className="btn-outline"><Download size={16} /> Download CV</a>
          </div>
          <dl className="mt-10 flex items-center gap-6">
            {stats.map(([n, l], i) => (
              <div key={l} className={i > 0 ? "border-l border-line pl-6" : ""}>
                <dt className="text-2xl font-bold">{n}</dt>
                <dd className="text-xs text-slate-300">{l}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="flex justify-center md:justify-end">
          <img src="/emmanuel.png" alt="Emmanuel Alao" className="h-[420px] w-auto max-w-full object-contain object-bottom md:h-[520px]" />
        </div>
      </div>
    </section>
  );
}
