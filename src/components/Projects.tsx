import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, FolderGit2 } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { projects } from "../data/content";

function TiltCard({ project, featured }: { project: (typeof projects)[0]; featured?: boolean }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(my, [0, 1], [6, -6]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(mx, [0, 1], [-6, 6]), { stiffness: 200, damping: 20 });
  const glowX = useTransform(mx, [0, 1], ["0%", "100%"]);
  const glowY = useTransform(my, [0, 1], ["0%", "100%"]);

  const handleMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  };

  const handleLeave = () => {
    mx.set(0.5);
    my.set(0.5);
  };

  return (
    <motion.a
      ref={ref}
      href={project.link}
      target="_blank"
      rel="noreferrer"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`group relative flex min-h-[400px] h-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all hover:border-white/20 hover:bg-white/10 ${
        featured ? "md:col-span-1 md:row-span-1" : ""
        }`}
    >
      {/* Glow effect au survol */}
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: useTransform(
            [glowX, glowY],
            ([x, y]) =>
              `radial-gradient(circle 300px at ${x} ${y}, ${
                project.accent === "from-blue-500 to-cyan-400"
                  ? "rgba(59, 130, 246, 0.2)"
                  : project.accent === "from-purple-500 to-pink-400"
                  ? "rgba(168, 85, 247, 0.2)"
                  : "rgba(16, 185, 129, 0.2)"
              }, transparent 70%)`
          ),
        }}
      />

      <div className={`relative z-10 p-6 ${featured ? "md:p-8" : ""}`}>
        {/* Header */}
        <div className="mb-6 flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div
            className={`flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${project.accent} text-2xl shadow-lg`}
            >
                {project.icon}
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider text-zinc-500">
                {project.category}
              </span>
              <p className="font-mono text-xs text-zinc-600">{project.year}</p>
            </div>
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:border-white/30 group-hover:bg-white/10">
            <ArrowUpRight size={16} />
          </div>
        </div>

        {/* Titre */}
        <h3
          className={`mb-3 font-serif text-white ${
            featured ? "text-3xl md:text-4xl" : "text-2xl"
          }`}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p className={`mb-6 text-zinc-300 leading-relaxed ${featured ? "text-base" : "text-sm"}`}>
          {project.description}
        </p>

        {/* Tags technologiques */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((t) => (
            <span
              key={t}
              className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-300 hover:bg-white/10 transition-colors"
            >
              {t}
            </span>
          ))}
        </div>

        {/* GitHub link */}
        <div className="flex items-center gap-2 text-xs text-zinc-500 group-hover:text-zinc-300 transition-colors">
          <FolderGit2 size={16} />
          <span>Code source sur GitHub</span>
        </div>
      </div>

      {/* Accent gradient corner */}
      <div
        className={`absolute -bottom-24 -right-24 h-48 w-48 rounded-full bg-gradient-to-br ${project.accent} opacity-10 blur-3xl transition-opacity duration-500 group-hover:opacity-20`}
      />
    </motion.a>
  );
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative px-4 py-24 md:py-32 bg-gradient-to-b from-black via-black to-zinc-900/50">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="mb-16">
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-amber-400">
              03 · Mes Projets
            </p>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <h2 className="font-serif text-5xl md:text-7xl leading-[0.95] tracking-tight text-white max-w-2xl">
                Travail <span className="italic bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">sélectionné</span>
              </h2>
              <p className="text-zinc-400 text-sm md:text-base max-w-xs">
                    Des projets concrets réalisés pour mettre en pratique
                    mes compétences en développement Full-Stack.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => (
            <ScrollReveal key={p.title} delay={i * 0.1} className="lg:col-span-1">
              <TiltCard project={p} featured />
            </ScrollReveal>
          ))}
          {others.map((p, i) => (
            <ScrollReveal key={p.title} delay={featured.length * 0.1 + i * 0.1}>
              <TiltCard project={p} />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4}>
        <div className="mt-12 text-center">
            <a
            href="https://github.com/zomanorj"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm text-zinc-300 transition-all hover:border-white/20 hover:bg-white/10 hover:text-white"
            >
            <FolderGit2 size={16} />
            Voir tous les projets sur GitHub
            <ArrowUpRight size={14} />
            </a>
        </div>
        </ScrollReveal>
      </div>
    </section>
  );
}