import { ArrowRight, CheckCircle2, Trophy } from "lucide-react";

const timeline = [
  {
    role: "Full Stack Developer (Remote)",
    meta: "Freelancing | 2024 – Present",
    text: "Build and maintain scalable web applications using Next.js and TypeScript.",
  },
  {
    role: "Full Stack Developer",
    meta: "Astute | 2020 – 2024",
    text: "Tutored and Developed responsive web apps and improved user experience.",
  },
  {
    role: "MSc. Computer Engineering",
    meta: "Ahmadu Bello University, Zaria",
    text: "Still in Progess.",
  },
];

const achievements = [
  "Delivered 10+ production-ready web applications",
  "Improved application performance by 60%",
  "Recognized for excellence in software development",
];

export default function Experience() {
  return (
    <section id="experience" className="border-b border-line">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 lg:grid-cols-[1fr_1.3fr_1fr]">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-400">
            <span className="h-0.5 w-4 bg-sky-400" /> Experience & Achievements
          </div>
          <h2 className="mt-2 text-3xl font-bold leading-tight">
            A Track Record<br />of Impact
          </h2>
          <p className="mt-4 max-w-xs text-sm text-slate-300">
            I have contributed to impactful projects, worked with great teams, and continuously improved my skills.
          </p>
          <a href="/Projects/Emmanuel-Alao-CV.pdf" className="btn-outline mt-6 inline-flex items-center gap-2 text-xs font-semibold">
            View My CV <ArrowRight size={14} />
          </a>
        </div>

        <ol className="relative ml-2 space-y-6 border-l border-blue-500/60 pl-8">
          {timeline.map((t) => (
            <li key={t.role} className="relative">
              <span className="absolute -left-[37px] top-1 h-2.5 w-2.5 rounded-full bg-blue-500 ring-4 ring-slate-950" />
              <h3 className="text-sm font-semibold text-white">{t.role}</h3>
              <p className="mt-0.5 text-xs text-slate-400">{t.meta}</p>
              <p className="mt-1 text-xs text-slate-300">{t.text}</p>
            </li>
          ))}
        </ol>

        <div className="panel h-fit rounded-xl border border-line bg-slate-900/40 p-6">
          <h3 className="flex items-center gap-2 text-sm font-semibold text-white">
            <Trophy size={18} className="text-yellow-400" /> Key Achievements
          </h3>
          <ul className="mt-5 space-y-4">
            {achievements.map((a) => (
              <li key={a} className="flex items-start gap-3 text-xs text-slate-300">
                <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-green-400" /> {a}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}