"use client";

import { motion } from "framer-motion";

type TypeRevealProps = {
  nameEn: string;
  nameJa: string;
  code: string;
};

const LETTER_READING: Record<string, string> = {
  U: "アンプレディクタブル",
  C: "コントロールド",
  A: "アグレッシブ",
  R: "リザーブド",
  L: "ロジカル",
  H: "ホリスティック",
  F: "ファスト",
  D: "デリバレイト",
};

export function TypeReveal({ nameEn, nameJa, code }: TypeRevealProps) {
  const letters = code.split("");

  return (
    <div className="text-center">
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="font-mono text-[10px] tracking-[0.5em] text-gold/40 mb-6"
      >
        YOUR PK STYLE
      </motion.p>

      {/* 4文字コード - 大きく表示 */}
      <div className="flex items-start justify-center gap-3 md:gap-5 mb-4">
        {letters.map((letter, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 + i * 0.12 }}
            className="flex flex-col items-center"
          >
            <span className="font-display text-5xl md:text-7xl lg:text-8xl font-black text-gold leading-none">
              {letter}
            </span>
            <span className="text-[8px] md:text-[10px] font-mono text-card-white/30 mt-2 tracking-wide">
              {LETTER_READING[letter]}
            </span>
          </motion.div>
        ))}
      </div>

      {/* 英語タイプ名 */}
      <motion.h1
        initial={{ opacity: 0, filter: "blur(12px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-widest text-card-white/90 mt-6"
      >
        {nameEn}
      </motion.h1>

      {/* 日本語名 */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.0 }}
        className="text-lg md:text-xl text-card-white/60 mt-3 tracking-wider"
      >
        &mdash; {nameJa} &mdash;
      </motion.p>
    </div>
  );
}
