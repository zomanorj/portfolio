import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader({
  onDone,
}: {
  onDone: () => void;
}) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const start = Date.now();
    const duration = 1800;

    const tick = () => {
      const p = Math.min(
        100,
        ((Date.now() - start) / duration) * 100
      );

      setProgress(p);

      if (p < 100) {
        requestAnimationFrame(tick);
      } else {
        setTimeout(onDone, 300);
      }
    };

    requestAnimationFrame(tick);
  }, [onDone]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.02,
      }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-zinc-950"
    >
      <div className="flex flex-col items-center">
        {/* Logo */}
        <div className="relative mb-8">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
            className="h-20 w-20 rounded-full border border-white/10 border-t-violet-500 border-r-cyan-400"
          />

          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-serif text-3xl text-white">
              M
            </span>
          </div>
        </div>

        {/* Name */}
        <motion.h2
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="font-serif text-3xl text-white"
        >
          Manoa RAJAONAH
        </motion.h2>

        <p className="mt-2 text-sm text-zinc-500">
          Développeur Full-Stack
        </p>

        {/* Progress */}
        <div className="mt-10 w-64">
          <div className="mb-2 flex justify-between text-xs text-zinc-500">
            <span>Chargement</span>

            <span>
              {Math.floor(progress)}%
            </span>
          </div>

          <div className="h-1 overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full bg-gradient-to-r from-violet-500 to-cyan-400"
              style={{
                width: `${progress}%`,
              }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
