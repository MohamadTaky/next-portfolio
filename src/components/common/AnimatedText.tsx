import { motion } from "framer-motion";
import { HTMLAttributes, ReactNode } from "react";

const variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

type AnimatedTextProps = {
  text: string;
  className?: string;
};

export function AnimatedText({ text, className }: AnimatedTextProps) {
  return (
    <span className={className}>
      {text.split("").map((char, i) => (
        <motion.span key={i} variants={variants}>
          {char}
        </motion.span>
      ))}
    </span>
  );
}

export function AnimatedTextContainer({ children }: { children: ReactNode }) {
  const MotionWrapper = motion("");
  return (
    <motion.span variants={variants} initial="hidden" animate="visible">
      {children}
    </motion.span>
  );
}
