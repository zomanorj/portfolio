import { Briefcase, GraduationCap } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { experience } from "../data/content";

export default function Experience() {
  return (
    <section id="experience" className="relative px-4 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <div className="mb-16">
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-emerald-400">
              04 · Parcours
            </p>
            <h2 className="font-serif text-5xl leading-[0.95] tracking-tight text-white md:text-7xl">
              Chemin <span className="italic text-emerald-300">parcouru</span>.
            </h2>
          </div>
        </ScrollReveal>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-violet-500/60 via-white/10 to-transparent md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-10">
            {experience.map((e, i) => {
              const isFormation = e.type === "Formation";
              const Icon = isFormation ? GraduationCap : Briefcase;
              const align = i % 2 === 0 ? "md:text-right" : "";

              return (
                <ScrollReveal
                  key={i}
                  delay={i * 0.1}
                  direction={i % 2 === 0 ? "right" : "left"}
                >
                  <div className="relative grid grid-cols-[30px_1fr] gap-5 md:grid-cols-2 md:gap-10">
                    {/* Dot */}
                    <div className="absolute left-[9px] top-1 z-10 h-3 w-3 rounded-full bg-gradient-to-br from-violet-400 to-cyan-400 ring-4 ring-zinc-950 md:left-1/2 md:-translate-x-1/2" />

                    {/* Left col (desktop) */}
                    <div
                      className={`hidden md:block ${
                        i % 2 === 0 ? "" : "order-2 md:pl-10"
                      } ${i % 2 === 0 ? "md:pr-10" : ""}`}
                    >
                      {i % 2 === 0 && (
                        <div className="text-right">
                          <p className="font-mono text-sm text-violet-400">
                            {e.period}
                          </p>
                          <p className="mt-2 inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-400">
                            {e.type}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Right col (desktop) / main (mobile) */}
                    <div
                      className={`${i % 2 === 0 ? "" : "md:order-1 md:text-right md:pr-10"} ${
                        i % 2 === 1 ? "md:pl-10" : ""
                      } col-span-2 md:col-span-1`}
                    >
                      <div className={`glass rounded-2xl p-6 ${align}`}>
                        <div
                          className={`mb-3 flex items-center gap-2 text-xs text-zinc-500 md:hidden`}
                        >
                          <span className="font-mono text-violet-400">{e.period}</span>
                          <span>·</span>
                          <span>{e.type}</span>
                        </div>
                        <div
                          className={`mb-3 flex items-center gap-2 ${
                            i % 2 === 1 ? "md:justify-end" : ""
                          }`}
                        >
                          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10">
                            <Icon size={14} className="text-white" />
                          </div>
                          <span className="text-sm text-zinc-400">{e.org}</span>
                        </div>
                        <h3 className="font-serif text-xl text-white md:text-2xl">
                          {e.title}
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                          {e.description}
                        </p>
                      </div>
                    </div>

                    {/* Empty col for mobile layout consistency */}
                    {i % 2 === 1 && <div className="hidden md:block" />}
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
