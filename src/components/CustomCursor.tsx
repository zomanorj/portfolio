import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -500, y: -500 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    // Only show on desktop
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (
        t.closest("a, button, [data-cursor='pointer'], input, textarea")
      ) {
        setHovering(true);
      } else {
        setHovering(false);
      }
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, []);

  return (
    <>
      <div
        className="cursor-glow hidden md:block"
        style={{ left: pos.x, top: pos.y }}
      />
      <div
        className="pointer-events-none fixed z-[200] hidden md:block transition-transform duration-150 ease-out"
        style={{
          left: pos.x,
          top: pos.y,
          transform: `translate(-50%, -50%) scale(${hovering ? 2.2 : 1})`,
        }}
      >
        <div
          className="rounded-full border transition-all duration-200"
          style={{
            width: 12,
            height: 12,
            borderColor: hovering ? "rgba(168,85,247,0.9)" : "rgba(255,255,255,0.5)",
            background: hovering ? "rgba(168,85,247,0.15)" : "transparent",
          }}
        />
      </div>
    </>
  );
}
