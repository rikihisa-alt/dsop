"use client";

import { motion } from "framer-motion";
import type { Score, Axis } from "@/lib/types";
import { normalizeScore } from "@/features/quiz/scorer";

type AxisChartProps = {
  score: Score;
};

const AXIS_LABELS: Record<Axis, [string, string]> = {
  UC: ["Controlled", "Unpredictable"],
  AR: ["Reserved", "Aggressive"],
  LH: ["Holistic", "Logical"],
  FD: ["Deliberate", "Fast"],
};

export function AxisChart({ score }: AxisChartProps) {
  const normalized = normalizeScore(score);
  const axes: Axis[] = ["UC", "AR", "LH", "FD"];

  return (
    <div className="space-y-6">
      {axes.map((axis, i) => {
        const [negLabel, posLabel] = AXIS_LABELS[axis];
        const value = normalized[axis];

        return (
          <motion.div
            key={axis}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.8 + i * 0.1 }}
          >
            <div className="flex justify-between text-xs font-mono text-card-white/50 mb-2">
              <span>{negLabel}</span>
              <span>{posLabel}</span>
            </div>
            <div className="relative h-2 bg-felt-light rounded-full overflow-hidden">
              <div className="absolute left-1/2 top-0 w-px h-full bg-card-white/20" />
              <motion.div
                className="absolute top-0 h-full bg-gold rounded-full"
                initial={{ width: 0, left: "50%" }}
                animate={{
                  width: `${Math.abs(value) / 2}%`,
                  left: value >= 0 ? "50%" : `${50 - Math.abs(value) / 2}%`,
                }}
                transition={{ duration: 0.6, delay: 1 + i * 0.1 }}
              />
            </div>
            <div className="text-center mt-1">
              <span className="text-xs font-mono text-gold/70">
                {value > 0 ? "+" : ""}
                {Math.round(value)}
              </span>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
