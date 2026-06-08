import { techMarquee } from "../data/content";

export default function Marquee() {
  const items = [...techMarquee, ...techMarquee];
  return (
    <div className="relative overflow-hidden border-y border-white/5 bg-black/40 py-6">
      <div className="flex w-max animate-marquee gap-12 whitespace-nowrap">
        {items.map((tech, i) => (
          <div
            key={i}
            className="flex items-center gap-4 text-2xl font-semibold tracking-tight text-white/30 md:text-4xl"
          >
            <span className="font-serif italic text-violet-400/60">{tech}</span>
            <span className="text-white/20">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
