
import { ArrowRight } from "lucide-react";
import Logo from "./Logo";

const links = ["Home", "About", "Projects", "Experience", "Testimonials", "Contact"];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-slate-950 border-b border-slate-800 shadow-lg">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a href="#home" className="flex items-center gap-3 text-sm font-semibold">
          <Logo /> Emmanuel Alao
        </a>

        <ul className="hidden gap-8 text-sm md:flex">
          {links.map((l, i) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                className={`pb-2 transition hover:text-sky-400 ${
                  i === 0
                    ? "border-b-2 border-brand text-sky-400"
                    : "text-slate-200"
                }`}
              >
                {l}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="mailto:alaoemmanuel1978@gmail.com" className="btn-primary shrink-0 flex items-center gap-2 text-xs font-semibold
          inline-flex items-center gap-2 rounded-md bg-brand px-5 py-2.5 text-sm font-semibold hover:brightness-110"
        >
          Hire Me <ArrowRight size={14} />
        </a>
      </nav>
    </header>
  );
}
