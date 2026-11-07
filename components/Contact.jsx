import { Mail, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-8">
      <div className="flex flex-col items-start gap-5 rounded-xl border border-blue-500/30 bg-blue-950/30 p-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-5">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white">
            <Mail size={22} />
          </span>
          <div>
            <h2 className="text-lg font-bold text-white">Let’s Work Together!</h2>
            <p className="text-xs text-slate-300">Have a project in mind or want to discuss an opportunity? I’d love to hear from you.</p>
          </div>
        </div>
        <a href="mailto:alaoemmanuel1978@gmail.com" className="btn-primary shrink-0 flex items-center gap-2 text-xs font-semibold">
          <Send size={14} /> Contact Me →
        </a>
      </div>
    </section>
  );
}