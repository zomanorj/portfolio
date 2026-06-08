import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { profile } from "../data/content";

const GithubIcon = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" {...p}>
    <path d="M12 .5C5.73.5.67 5.56.67 11.83c0 5.02 3.24 9.27 7.74 10.77.57.1.78-.25.78-.55 0-.27-.01-.99-.02-1.95-3.15.68-3.81-1.52-3.81-1.52-.51-1.31-1.26-1.66-1.26-1.66-1.03-.7.08-.69.08-.69 1.14.08 1.74 1.17 1.74 1.17 1.01 1.74 2.66 1.24 3.31.95.1-.74.4-1.24.72-1.52-2.51-.29-5.15-1.26-5.15-5.59 0-1.23.44-2.24 1.16-3.03-.12-.29-.5-1.43.11-2.99 0 0 .95-.3 3.11 1.16.9-.25 1.87-.38 2.83-.38.96 0 1.93.13 2.83.38 2.16-1.46 3.11-1.16 3.11-1.16.61 1.56.23 2.7.11 2.99.72.79 1.16 1.8 1.16 3.03 0 4.34-2.64 5.3-5.17 5.58.41.35.77 1.04.77 2.1 0 1.52-.01 2.74-.01 3.11 0 .3.2.66.79.55 4.5-1.5 7.73-5.75 7.73-10.77C23.33 5.56 18.27.5 12 .5z" />
  </svg>
);
const LinkedinIcon = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" {...p}>
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
  </svg>
);
const TwitterIcon = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" {...p}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const iconMap: Record<string, React.ElementType> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  twitter: TwitterIcon,
  mail: Mail,
};

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="relative px-4 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-pink-400">
              05 · Contact
            </p>
            <h2 className="mx-auto max-w-3xl font-serif text-5xl leading-[0.95] tracking-tight text-white md:text-7xl">
              Travaillons <span className="italic text-pink-300">ensemble</span>.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-zinc-400">
              Une idée de projet, une opportunité de stage, ou juste envie de discuter café et code ? Ma boîte mail est ouverte.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-5">
          {/* Left — CTA big */}
          <ScrollReveal className="md:col-span-2">
            <div className="glass relative h-full overflow-hidden rounded-3xl p-8 md:p-10">
              <div className="relative z-10">
                <div className="mb-8 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-violet-600">
                  <Mail className="text-white" size={24} />
                </div>
                <p className="mb-2 text-sm text-zinc-400">Écrivez-moi à</p>
                <a
                  href={`mailto:${profile.email}`}
                  className="block font-serif text-2xl text-white transition-colors hover:text-violet-300 md:text-3xl"
                >
                  {profile.email}
                </a>
                <p className="mt-6 text-sm text-zinc-500">{profile.phone}</p>

                <div className="mt-10 flex gap-3">
                  {profile.socials.map((s) => {
                    const Icon = iconMap[s.icon] || Mail;
                    return (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={s.label}
                        className="group flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-400 transition-all hover:-translate-y-0.5 hover:border-white/30 hover:bg-white hover:text-black"
                      >
                        <Icon size={16} />
                      </a>
                    );
                  })}
                </div>
              </div>

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute -right-20 -top-20 h-60 w-60 rounded-full border border-white/5"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute -right-10 -top-10 h-40 w-40 rounded-full border border-violet-500/20"
              />
            </div>
          </ScrollReveal>

          {/* Right — Form */}
          <ScrollReveal delay={0.1} className="md:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="glass relative h-full overflow-hidden rounded-3xl p-8 md:p-10"
            >
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <Field label="Nom" placeholder="Votre nom" />
                <Field label="Email" type="email" placeholder="vous@email.com" />
                <div className="md:col-span-2">
                  <Field label="Sujet" placeholder="Stage, freelance, café..." />
                </div>
                <div className="md:col-span-2">
                  <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-zinc-400">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Parlez-moi de votre projet..."
                    className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:border-violet-400/50 focus:bg-white/10 focus:outline-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={sent}
                className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:shadow-[0_0_40px_rgba(168,85,247,0.4)] disabled:opacity-70 md:w-auto"
              >
                {sent ? (
                  <>✓ Message envoyé</>
                ) : (
                  <>
                    Envoyer le message
                    <Send
                      size={14}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </>
                )}
              </button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  type = "text",
  placeholder,
}: {
  label: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-zinc-400">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:border-violet-400/50 focus:bg-white/10 focus:outline-none"
      />
    </div>
  );
}
