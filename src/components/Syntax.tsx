"use client";

import cn from "@/utils/cn";
import generateProgrammingSyntax from "@/utils/generateProgrammingSyntax";
import throttle from "@/utils/throttle";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { HTMLAttributes, PointerEvent, useEffect, useRef } from "react";

type SyntaxProps = HTMLAttributes<HTMLDivElement>;

export default function Syntax({ children, className, ...props }: SyntaxProps) {
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {});

  const contentThrottle = throttle(() => {
    if (ref.current) ref.current.innerText = generateProgrammingSyntax(1000);
  }, 200);

  const handlePointerMove = ({
    clientX,
    clientY,
    currentTarget,
  }: PointerEvent) => {
    const { left, top } = currentTarget.getBoundingClientRect();
    pointerX.set(clientX - left);
    pointerY.set(clientY - top);
    contentThrottle();
  };

  return (
    <div
      className={cn("group relative", className)}
      onPointerMove={handlePointerMove}
      {...props}
    >
      <motion.div
        className="pointer-events-none absolute -inset-[2px] opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`radial-gradient(300px circle at ${pointerX}px ${pointerY}px, rgb(59 130 246 / 0.05),transparent)`,
        }}
      />
      <motion.div
        ref={ref}
        suppressHydrationWarning
        className="pointer-events-none absolute inset-0 -z-50 select-none overflow-hidden break-all font-mono tracking-widest text-slate-700"
        style={{
          WebkitMaskImage: useMotionTemplate`linear-gradient(to bottom, transparent, rgb(255 255 255 / 0.7))
          ,radial-gradient(300px circle at ${pointerX}px ${pointerY}px,rgb(255 255 255 / 1), transparent)`,
        }}
      >
        {generateProgrammingSyntax(1000)}
      </motion.div>
      {children}
    </div>
  );
}
