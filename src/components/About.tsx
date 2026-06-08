import { motion } from "framer-motion";
import {
  GraduationCap,
  MapPin,
  Briefcase,
  Code2,
} from "lucide-react";

import ScrollReveal from "./ScrollReveal";
import { about } from "../data/content";

export default function About() {
  return (
    <section id="about" className="relative px-4 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <ScrollReveal>
          <div className="mb-16 flex items-end justify-between gap-6">
            <div>
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-violet-400">
                01 · À PROPOS
              </p>

              <h2 className="font-serif text-5xl leading-[0.95] tracking-tight text-white md:text-7xl">
                Développeur
                <br />
                <span className="italic text-violet-300">
                  Full-Stack en devenir
                </span>
              </h2>
            </div>

            <div className="hidden h-px flex-1 translate-y-[-1rem] bg-gradient-to-r from-white/20 to-transparent md:block" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* Présentation */}
        <ScrollReveal className="lg:col-span-8">
            <div className="glass glass-hover relative h-full overflow-hidden rounded-3xl p-8 md:p-10">
            <div className="relative z-10">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-300">
                <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                Présentation
                </div>

                <div className="space-y-5 text-lg leading-relaxed text-zinc-300 md:text-xl">
                {about.paragraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
                </div>

                <div className="mt-8 flex items-center gap-3 text-sm text-zinc-400">
                <GraduationCap size={16} className="text-violet-400" />
                <span>
                    Arovy University · Licence 3 Informatique &
                    Génie Logiciel
                </span>
                </div>
            </div>

            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-violet-500/10 blur-3xl" />
            </div>
        </ScrollReveal>

        {/* Formation */}
        <ScrollReveal delay={0.1} className="lg:col-span-4 lg:self-start">
            <div className="glass glass-hover rounded-3xl p-8">
                <GraduationCap
                className="mb-6 text-cyan-400"
                size={28}
                />

                <p className="text-sm text-zinc-400">
                Niveau d'études
                </p>

                <p className="mt-2 font-serif text-6xl text-white">
                L3
                </p>

                <p className="mt-2 text-zinc-400">
                Informatique & Génie Logiciel
                </p>

                <div className="mt-8 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="font-serif text-2xl text-white">
                    3+
                    </p>
                    <p className="mt-1 text-xs text-zinc-500">
                    Années d'études
                    </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="font-serif text-2xl text-white">
                    10+
                    </p>
                    <p className="mt-1 text-xs text-zinc-500">
                    Technologies
                    </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="font-serif text-2xl text-white">
                    3+
                    </p>
                    <p className="mt-1 text-xs text-zinc-500">
                    Projets
                    </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="font-serif text-2xl text-white">
                    2026
                    </p>
                    <p className="mt-1 text-xs text-zinc-500">
                    Licence
                    </p>
                </div>
                </div>

                <div className="mt-6 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-4">
                <p className="text-xs uppercase tracking-wider text-cyan-400">
                    Objectif
                </p>

                <p className="mt-2 text-sm text-zinc-300">
                    Obtenir une première expérience professionnelle
                    en développement logiciel à travers un stage.
                </p>
                </div>
            </div>
        </ScrollReveal>

        {/* Localisation */}
        <ScrollReveal delay={0.15} className="lg:col-span-4">
            <div className="glass glass-hover h-full rounded-3xl p-8">
            <MapPin
                className="mb-6 text-fuchsia-400"
                size={28}
            />

            <p className="text-sm text-zinc-400">
                Localisation
            </p>

            <p className="mt-2 font-serif text-4xl text-white">
                Antananarivo
            </p>

            <p className="text-zinc-500">
                Madagascar
            </p>

            <div className="mt-6 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <span className="text-sm text-zinc-300">
                Disponible pour stage
                </span>
            </div>
            </div>
        </ScrollReveal>

        {/* Technologies */}
        <ScrollReveal delay={0.2} className="lg:col-span-4">
            <div className="glass glass-hover h-full rounded-3xl p-8">
            <Code2
                className="mb-6 text-emerald-400"
                size={28}
            />

            <p className="mb-5 text-sm text-zinc-400">
                Technologies principales
            </p>

            <div className="space-y-4">
                {[
                "React.js",
                "Django",
                "Node.js",
                "PostgreSQL",
                "Laravel",
                ].map((tech) => (
                <div
                    key={tech}
                    className="flex items-center gap-3"
                >
                    <span className="h-2 w-2 rounded-full bg-violet-400" />
                    <span className="text-zinc-300">
                    {tech}
                    </span>
                </div>
                ))}
            </div>
            </div>
        </ScrollReveal>

        {/* Disponibilité */}
        <ScrollReveal delay={0.25} className="lg:col-span-4">
            <div className="glass glass-hover h-full rounded-3xl p-8">
            <Briefcase
                size={28}
                className="mb-6 text-emerald-400"
            />

            <p className="text-sm text-zinc-400">
                Disponibilité
            </p>

            <p className="mt-2 font-serif text-4xl text-white">
                Stage 3 mois
            </p>

            <p className="mt-4 text-zinc-400">
                Disponible immédiatement pour intégrer
                une équipe de développement et acquérir
                une expérience professionnelle.
            </p>

            <div className="mt-6 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <span className="text-sm text-zinc-300">
                Disponible
                </span>
            </div>
            </div>
        </ScrollReveal>

        {/* Objectif */}
        <ScrollReveal delay={0.3} className="lg:col-span-12">
            <div className="glass glass-hover rounded-3xl p-10">
            <p className="mb-4 font-mono text-xs uppercase tracking-wider text-violet-400">
                OBJECTIF PROFESSIONNEL
            </p>

            <h3 className="max-w-4xl font-serif text-3xl leading-tight text-white md:text-5xl">
                Développer des applications web modernes,
                performantes et évolutives tout en
                approfondissant mes compétences en
                ingénierie logicielle.
            </h3>

            <p className="mt-6 text-zinc-500">
                — Manoa RAJAONAH
            </p>
            </div>
        </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
