import { profile } from "../data/content";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 px-4 py-10">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          
          {/* Informations */}
          <div className="text-center md:text-left">
            <h3 className="font-serif text-xl text-white">
              RAJAONAH Manoa
            </h3>

            <p className="mt-1 text-sm text-zinc-500">
              Étudiant en Licence 3 Informatique &
              Génie Logiciel
            </p>

            <p className="mt-3 text-sm text-zinc-400">
              © {new Date().getFullYear()} Portfolio personnel
            </p>
          </div>

          {/* Contact */}
          <div className="text-center">
            <a
              href={`mailto:${profile.email}`}
              className="block text-sm text-zinc-400 transition-colors hover:text-white"
            >
              {profile.email}
            </a>

            <a
              href={`tel:${profile.phone}`}
              className="mt-1 block text-sm text-zinc-500 transition-colors hover:text-white"
            >
              {profile.phone}
            </a>
          </div>

          {/* Localisation & Stack */}
          <div className="text-center md:text-right">
            <p className="text-sm text-zinc-400">
              Antananarivo, Madagascar
            </p>

            <p className="mt-1 text-xs font-mono text-zinc-500">
              React · Vite · Tailwind CSS
            </p>

            <p className="mt-2 text-xs text-zinc-600">
              Disponible pour un stage développeur
            </p>
          </div>
        </div>

        {/* Ligne de séparation */}
        <div className="mt-8 border-t border-white/5 pt-6 text-center">
          <p className="text-xs text-zinc-600">
            Conçu et développé par RAJAONAH Manoa
          </p>
        </div>
      </div>
    </footer>
  );
}
