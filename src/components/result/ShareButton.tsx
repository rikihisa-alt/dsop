"use client";

import { motion } from "framer-motion";
import type { PokerType } from "@/lib/types";
import { generateShareText, getShareUrl } from "@/lib/utils/share";

type ShareButtonProps = {
  typeData: PokerType;
};

export function ShareButton({ typeData }: ShareButtonProps) {
  const handleShare = () => {
    const baseUrl = typeof window !== "undefined" ? window.location.origin : "";
    const text = generateShareText(typeData, baseUrl);
    const url = getShareUrl(text);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      onClick={handleShare}
      className="inline-flex items-center gap-2 px-6 py-3 bg-card-white text-baize font-bold text-sm tracking-wide hover:bg-gold transition-colors"
    >
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
      結果をシェアする
    </motion.button>
  );
}
