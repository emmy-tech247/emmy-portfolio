import {
  ArrowRight,
  ExternalLink,
  Github,
  Home,
  LayoutDashboard,
  ShoppingCart,
} from "lucide-react";

const projects = [
  {
    title: "Real Estate Platform",
    Icon: Home,
    img: "/projects/real-estate.PNG",
    live: "https://real-estate-using-nextjs.vercel.app/",
    code: "https://github.com/emmy-tech247/real-estate-using-next.js",
    desc: "A modern real estate website with advanced search, filtering and booking features.",
    tags: ["Next.js", "React", "Tailwind CSS"],
  },
  {
    title: "Portfolio",
    Icon: LayoutDashboard,
    img: "/projects/portfolio.png",
    live: "https://emmanuel-alao-portfolio.vercel.app/",
    code: "https://github.com/emmy-tech247/emmanuel-alao-portfolio",
    desc: "A modern and responsive portfolio website designed to showcase proffessional skills, featured projects and a compelling online presence.",
    tags: ["React", "Next.js", "TypeScript"],
  },
  {
    title: "Loan Management Platform Using PHP",
    Icon: Home,
    img: "/projects/dcg.PNG",
    live: "https://dcgcoop.com.ng/",
    code: "https://github.com/emmy-tech247/Loan-Management-System",
    desc: "A loan management system designed to streamline loan applications, member records, approvals, repayments, transactions, and administrative workflows through a digital platform.",
    tags: ["PHP", "HTML", "CSS", "MYSQL"],
  },

 
  {
    title: "Crestwood International School ",
    Icon: Home,
    img: "/projects/school.jpg",
    live: "https://school-delta-jade.vercel.app/ ",
    code: "https://github.com/emmy-tech247/school",
    desc: "A modern school platform featuring student enrollment, online admissions, academic management, attendance tracking, fee payments, results processing, parent portals, and administrative dashboards.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL"],
  },

   {
    title: "Portfolio Website",
    Icon: LayoutDashboard,
    img: "/projects/emmy-portfolio.PNG",
    live: "https://emmy-portfolio-cyan.vercel.app/",
    code: "https://github.com/emmy-tech247/emmy-portfolio#deploy-to-azure-static-web-apps",
    desc: "A modern, responsive portfolio showcasing professional skills, innovative projects, technical expertise, services, and a distinctive personal brand.",
    tags: ["React", "Next.js", "TypeScript"],
  },


   {
    title: "Loan Management Platform Using Next.js",
    Icon: Home,
    img: "/projects/home-page.png",
    live: "#",
    code: "https://github.com/emmy-tech247/real-estate-using-next.js",
    desc: "A business-focused loan management platform designed to manage members, loan applications, repayments, staff workflows, financial records, and administrative operations.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS","MYSQL"],
  },
  
  
];

export default function Projects() {
  return (
    <section id="projects" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-400">
              <span className="h-0.5 w-4 bg-sky-400" /> My Projects
            </div>
            <h2 className="mt-2 text-3xl font-bold">Featured Projects</h2>
            <p className="mt-2 text-sm text-slate-300">
              Real-world projects that solve real problems.
            </p>
          </div>

          <a href="#" className="btn-outline flex items-center gap-2 text-xs font-semibold">
            View All Projects <ArrowRight size={14} />
          </a>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {projects.map(({ title, Icon, img, live, code, desc, tags }) => (
            <article key={title} className="panel overflow-hidden p-3 rounded-xl border border-line bg-slate-900/40">
              <div className="aspect-[16/10] overflow-hidden rounded-lg bg-slate-950">
                <img
                  src={img}
                  alt={`${title} preview`}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="px-2 pb-2 pt-4">
                <h3 className="flex items-center gap-2 text-sm font-semibold text-white">
                  <Icon size={16} className="text-sky-400" />
                  {title}
                </h3>

                <p className="mt-2 text-xs leading-relaxed text-slate-300">
                  {desc}
                </p>

                <ul className="mt-3 flex flex-wrap gap-2">
                  {tags.map((t) => (
                    <li
                      key={t}
                      className="rounded bg-slate-800/80 px-2 py-0.5 text-[11px] text-slate-300"
                    >
                      {t}
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex items-center gap-5 text-xs">
                  <a
                    href={live}
                    className="flex items-center gap-1.5 text-sky-400 hover:underline"
                  >
                    <ExternalLink size={13} />
                    Live Demo ↗
                  </a>

                  <a
                    href={code}
                    className="flex items-center gap-1.5 text-slate-300 hover:underline"
                  >
                    <Github size={13} />
                    View Code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}