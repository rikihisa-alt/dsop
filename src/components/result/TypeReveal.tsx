"use client";

import { motion } from "framer-motion";

type TypeRevealProps = {
  nameEn: string;
  nameJa: string;
  code: string;
};

export function TypeReveal({ nameEn, nameJa, code }: TypeRevealProps) {
  return (
    <div className="text-center">
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="font-mono text-sm tracking-[0.3em] text-gold/60 mb-4"
      >
        YOUR TYPE IS
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, scale: 0.8, filter: "blur(16px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="font-display text-5xl md:text-7xl lg:text-8xl font-black tracking-wider text-card-white"
      >
        {nameEn}
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-4 flex items-center justify-center gap-4"
      >
        <span className="font-mono text-xs tracking-[0.2em] px-3 py-1 border border-gold/30 text-gold">
          {code}
        </span>
        <span className="text-xl text-card-white/80">{nameJa}</span>
      </motion.div>
    </div>
  );
}
