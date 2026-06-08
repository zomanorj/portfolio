import { motion } from "framer-motion";
import { ArrowDown, MapPin, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-4 pt-24"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-20 top-20 h-96 w-96 rounded-full bg-violet-600/20 blur-[140px]" />
        <div className="absolute right-20 bottom-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-2">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />

            <span className="text-sm text-zinc-300">
              Disponible immédiatement pour un stage
            </span>

            <span className="text-zinc-600">•</span>

            <div className="flex items-center gap-1 text-zinc-400">
              <MapPin size={14} />
              Antananarivo
            </div>
          </div>

          {/* Nom */}
          <h1 className="font-serif text-6xl leading-none text-white md:text-8xl">
            Manoa
          </h1>

          {/* Titre */}
          <h2 className="mt-4 text-2xl font-light text-zinc-300 md:text-4xl">
            Développeur Full-Stack
          </h2>

          {/* Description */}
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-zinc-400">
            Étudiant en Licence 3 Informatique & Génie Logiciel.
            Je développe des applications web modernes avec React,
            Django, Node.js et PostgreSQL, en mettant l'accent sur
            la performance, l'expérience utilisateur et la qualité du code.
          </p>

          {/* Tech Stack */}
          <div className="mt-8 flex flex-wrap gap-3">
            {[
              "React",
              "Django",
              "Node.js",
              "PostgreSQL",
              "Laravel",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-black transition hover:scale-105"
            >
              <Sparkles size={16} />
              Voir mes projets
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Me contacter
            </a>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >
          {/* Glow */}
          <div className="absolute h-[420px] w-[420px] rounded-full bg-violet-500/20 blur-[120px]" />

          {/* Photo */}
          <div className="relative">
            <img
              src="/profile.jpg"
              alt="Manoa RAJAONAH"
              className="h-[420px] w-[420px] rounded-full border border-white/10 object-cover  shadow-2xl"
            />

            {/* Badge Niveau */}
            <div className="absolute -left-10 top-12 rounded-2xl border border-white/10 bg-zinc-950/80 px-5 py-4 backdrop-blur-xl">
              <p className="text-xs uppercase tracking-wider text-zinc-500">
                Niveau
              </p>

              <p className="mt-1 text-lg font-semibold text-white">
                L3 Informatique
              </p>
            </div>

            {/* Badge Stack */}
            <div className="absolute -right-10 bottom-12 rounded-2xl border border-white/10 bg-zinc-950/80 px-5 py-4 backdrop-blur-xl">
              <p className="text-xs uppercase tracking-wider text-zinc-500">
                Stack
              </p>

              <p className="mt-1 text-lg font-semibold text-white">
                React • Django
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-500"
      >
        <ArrowDown size={18} />
      </motion.div>
    </section>
  );
}