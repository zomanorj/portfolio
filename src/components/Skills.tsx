import { motion } from "framer-motion";
import { Palette, Server, Wrench, Heart } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { skills } from "../data/content";

const iconMap: Record<string, React.ElementType> = {
  palette: Palette,
  server: Server,
  wrench: Wrench,
  heart: Heart,
};

export default function Skills() {
  const categories = Object.values(skills);
  return (
    <section id="skills" className="relative px-4 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="mb-16 flex items-end justify-between gap-6">
            <div>
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-cyan-400">
                02 · Compétences
              </p>
              <h2 className="font-serif text-5xl leading-[0.95] tracking-tight text-white md:text-7xl">
                Stack <span className="italic text-cyan-300">& outils</span>.
              </h2>
            </div>
            <div className="hidden h-px flex-1 translate-y-[-1rem] bg-gradient-to-r from-white/20 to-transparent md:block" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {categories.map((cat, ci) => {
            const Icon = iconMap[cat.icon] || Wrench;
            return (
              <ScrollReveal key={cat.title} delay={ci * 0.08}>
                <div className="glass group relative h-full overflow-hidden rounded-3xl p-7 transition-all hover:border-white/20">
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 ring-1 ring-white/10">
                        <Icon size={20} className="text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">{cat.title}</h3>
                        <p className="text-xs text-zinc-500">
                          {cat.items.length} compétences
                        </p>
                      </div>
                    </div>
                    <span className="font-mono text-xs text-zinc-600">
                      0{ci + 1}
                    </span>
                  </div>

                  <div className="space-y-3.5">
                    {cat.items.map((s, i) => (
                      <div key={s.name}>
                        <div className="mb-1.5 flex items-center justify-between text-sm">
                          <span className="text-zinc-300">{s.name}</span>
                          <span className="font-mono text-xs text-zinc-500">
                            {s.level}%
                          </span>
                        </div>
                        <div className="h-1 overflow-hidden rounded-full bg-white/5">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${s.level}%` }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{
                              duration: 1.2,
                              delay: i * 0.08,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                            className="h-full rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
