import { FaLinkedin, FaGithub, FaTwitter, FaYoutube } from "react-icons/fa";
import Logo from "./Logo";

const socials = [
  ["LinkedIn", FaLinkedin, "https://linkedin.com"],
  ["GitHub", FaGithub, "https://github.com"],
  ["Twitter", FaTwitter, "https://twitter.com"],
  ["YouTube", FaYoutube, "https://youtube.com"],
];

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-5 text-xs sm:flex-row">
        <span className="flex items-center gap-3 font-medium"><Logo /> Emmanuel Alao</span>
        <ul className="flex gap-6">
          {socials.map(([label, Icon, href]) => (
            <li key={label}><a href={href} aria-label={label} className="text-white hover:text-sky-400"><Icon size={20} /></a></li>
          ))}
        </ul>
        <span className="text-slate-300">Build • Innovate • Grow</span>
      </div>
    </footer>
  );
}
