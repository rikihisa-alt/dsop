import type { Axis, Score, Choice } from "@/lib/types";

export function createEmptyScore(): Score {
  return { UC: 0, AR: 0, LH: 0, FD: 0 };
}

export function addChoiceToScore(current: Score, choice: Choice): Score {
  const next = { ...current };
  const axes: Axis[] = ["UC", "AR", "LH", "FD"];
  for (const axis of axes) {
    if (choice.scores[axis] !== undefined) {
      next[axis] += choice.scores[axis]!;
    }
  }
  return next;
}

export function calculateTypeCode(score: Score): string {
  const u_or_c = score.UC >= 0 ? "U" : "C";
  const a_or_r = score.AR >= 0 ? "A" : "R";
  const l_or_h = score.LH >= 0 ? "L" : "H";
  const f_or_d = score.FD >= 0 ? "F" : "D";
  return `${u_or_c}${a_or_r}${l_or_h}${f_or_d}`;
}

export function getAxisLabel(axis: Axis, score: number): { label: string; direction: string } {
  const map: Record<Axis, [string, string]> = {
    UC: ["Unpredictable", "Controlled"],
    AR: ["Aggressive", "Reserved"],
    LH: ["Logical", "Holistic"],
    FD: ["Fast", "Deliberate"],
  };
  const [positive, negative] = map[axis];
  return {
    label: score >= 0 ? positive : negative,
    direction: score >= 0 ? "positive" : "negative",
  };
}

export function normalizeScore(score: Score): Record<Axis, number> {
  const maxPossible = 21;
  const axes: Axis[] = ["UC", "AR", "LH", "FD"];
  const normalized: Partial<Record<Axis, number>> = {};
  for (const axis of axes) {
    normalized[axis] = Math.max(-100, Math.min(100, (score[axis] / maxPossible) * 100));
  }
  return normalized as Record<Axis, number>;
}
