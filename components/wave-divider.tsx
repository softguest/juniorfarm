"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface WaveDividerProps {
  variant?: "top" | "bottom";
  className?: string;
  flip?: boolean;
}

export function WaveDivider({ variant = "bottom", className, flip = false }: WaveDividerProps) {
  return (
    <div
      className={cn(
        "absolute left-0 right-0 w-full overflow-hidden pointer-events-none",
        variant === "top" ? "top-0" : "bottom-0",
        flip && "rotate-180",
        className
      )}
    >
      <motion.svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="w-full h-16 md:h-24"
        initial={{ x: 0 }}
        animate={{ x: [0, -50, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      >
        <path
          d="M0,0 C150,100 350,0 500,50 C650,100 850,0 1000,50 C1150,100 1200,50 1200,50 L1200,120 L0,120 Z"
          className="fill-background"
        />
      </motion.svg>
    </div>
  );
}
