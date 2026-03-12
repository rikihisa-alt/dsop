"use client";

import { motion } from "framer-motion";
import type { Score, Axis } from "@/lib/types";
import { normalizeScore } from "@/features/quiz/scorer";

type AxisChartProps = {
  score: Score;
};

const AXIS_CONFIG: Record<Axis, { neg: string; pos: string; negJa: string; posJa: string }> = {
  UC: { neg: "Controlled", pos: "Unpredictable", negJa: "コントロールド", posJa: "アンプレディクタブル" },
  AR: { neg: "Reserved", pos: "Aggressive", negJa: "リザーブド", posJa: "アグレッシブ" },
  LH: { neg: "Holistic", pos: "Logical", negJa: "ホリスティック", posJa: "ロジカル" },
  FD: { neg: "Deliberate", pos: "Fast", negJa: "デリバレイト", posJa: "ファスト" },
};

export function AxisChart({ score }: AxisChartProps) {
  const normalized = normalizeScore(score);
  const axes: Axis[] = ["UC", "AR", "LH", "FD"];

  return (
    <div className="space-y-8">
      {axes.map((axis, i) => {
        const config = AXIS_CONFIG[axis];
        const value = normalized[axis]; // -100 to 100
        const negPct = Math.round(50 - value / 2);
        const posPct = Math.round(50 + value / 2);
        const dominant = posPct >= negPct ? "pos" : "neg";

        return (
          <motion.div
            key={axis}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.8 + i * 0.12 }}
          >
            {/* ラベル行 */}
            <div className="flex items-end justify-between mb-3">
              <div className="flex items-baseline gap-2">
                <span className={`text-2xl font-display font-bold tabular-nums ${dominant === "neg" ? "text-gold" : "text-card-white/25"}`}>
                  {negPct}
                </span>
                <div>
                  <span className="text-[10px] font-mono text-card-white/40 block leading-none">
                    {config.neg}
                  </span>
                  <span className="text-[9px] text-card-white/25 block leading-tight">
                    {config.negJa}
                  </span>
                </div>
              </div>
              <div className="flex items-baseline gap-2 text-right">
                <div>
                  <span className="text-[10px] font-mono text-card-white/40 block leading-none">
                    {config.pos}
                  </span>
                  <span className="text-[9px] text-card-white/25 block leading-tight">
                    {config.posJa}
                  </span>
                </div>
                <span className={`text-2xl font-display font-bold tabular-nums ${dominant === "pos" ? "text-gold" : "text-card-white/25"}`}>
                  {posPct}
                </span>
              </div>
            </div>

            {/* バー */}
            <div className="relative h-[6px] bg-felt-light/60 rounded-full overflow-hidden">
              {dominant === "pos" ? (
                <motion.div
                  className="absolute top-0 right-0 h-full bg-gradient-to-r from-gold/60 to-gold rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${posPct}%` }}
                  transition={{ duration: 0.7, delay: 1.0 + i * 0.12 }}
                />
              ) : (
                <motion.div
                  className="absolute top-0 left-0 h-full bg-gradient-to-l from-gold/60 to-gold rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${negPct}%` }}
                  transition={{ duration: 0.7, delay: 1.0 + i * 0.12 }}
                />
              )}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
