
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiPython,
  SiTailwindcss,
  SiGithub,
  SiAngular,
} from "react-icons/si";

const skills = [
  { name: "React", Icon: SiReact, color: "#61dafb" },
  { name: "Next.js", Icon: SiNextdotjs, color: "#ffffff" },
  { name: "Angular", Icon: SiAngular, color: "#dd0031" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178c6" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#68a063" },
  { name: "Python", Icon: SiPython, color: "#3776ab" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#38bdf8" },
  { name: "GitHub", Icon: SiGithub, color: "#ffffff" },
];

export default function Skills() {
  return (
    <section id="skills" className="border-b border-line py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-400">
          <span className="h-0.5 w-4 bg-sky-400" /> My Skills
        </div>

        <h2 className="mt-2 text-3xl font-bold">
          Technologies I Work With
        </h2>

        <p className="mt-2 text-sm text-slate-300">
          Modern tools and frameworks to build exceptional web experiences.
        </p>

        <div className="mt-8 flex flex-wrap justify-between gap-6">
          {skills.map(({ name, Icon, color }) => (
            <div key={name} className="flex flex-col items-center gap-3">
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-slate-900/60 border border-slate-800">
                <Icon size={32} style={{ color }} />
              </div>

              <span className="text-xs font-medium text-slate-300">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
