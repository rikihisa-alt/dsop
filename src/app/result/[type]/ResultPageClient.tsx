"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import type { PokerType, Score } from "@/lib/types";
import { createEmptyScore } from "@/features/quiz/scorer";
import { TypeReveal } from "@/components/result/TypeReveal";
import { AxisChart } from "@/components/result/AxisChart";
import { ShareButton } from "@/components/result/ShareButton";

type ResultPageClientProps = {
  typeData: PokerType;
};

export function ResultPageClient({ typeData }: ResultPageClientProps) {
  const [score, setScore] = useState<Score>(createEmptyScore());

  useEffect(() => {
    const stored = sessionStorage.getItem("dsop_score");
    if (stored) {
      setScore(JSON.parse(stored) as Score);
    }
  }, []);

  return (
    <div className="min-h-screen">
      {/* タイプ名の大きな登場 */}
      <section className="min-h-[70vh] flex items-center justify-center px-6 pt-16">
        <TypeReveal
          nameEn={typeData.nameEn}
          nameJa={typeData.nameJa}
          code={typeData.code}
        />
      </section>

      {/* タグラインとスタイル説明 */}
      <section className="px-6 pb-16">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <blockquote className="text-xl md:text-2xl font-display text-gold italic border-l-2 border-gold/30 pl-6 mb-8">
              {typeData.tagline}
            </blockquote>
            <p className="text-base text-card-white/70 leading-relaxed">
              {typeData.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* 4軸の可視化 */}
      <section className="px-6 py-16 border-t border-gold/5">
        <div className="max-w-lg mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <p className="font-mono text-xs tracking-[0.3em] text-gold/50 mb-8">
              YOUR AXES
            </p>
            <AxisChart score={score} />
          </motion.div>
        </div>
      </section>

      {/* 良いところ & 注意点 */}
      <section className="px-6 py-16 border-t border-gold/5">
        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-[1fr,1px,1fr] gap-12 md:gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <p className="font-mono text-xs tracking-[0.3em] text-emerald-400/70 mb-6">
                STRENGTHS
              </p>
              <ul className="space-y-3">
                {typeData.strengths.map((s, i) => (
                  <li key={i} className="flex items-start gap-3 text-card-white/70">
                    <span className="text-emerald-400 mt-0.5 shrink-0">+</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <div className="hidden md:block bg-gold/10" />

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <p className="font-mono text-xs tracking-[0.3em] text-chip-red/70 mb-6">
                WATCH OUT
              </p>
              <ul className="space-y-3">
                {typeData.weaknesses.map((w, i) => (
                  <li key={i} className="flex items-start gap-3 text-card-white/70">
                    <span className="text-chip-red mt-0.5 shrink-0">!</span>
                    <span>{w}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* シェア & 有料誘導 */}
      <section className="px-6 py-24 border-t border-gold/5">
        <div className="max-w-lg mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <ShareButton typeData={typeData} />

            <div className="pt-8 border-t border-gold/10">
              <p className="text-sm text-card-white/40 mb-4">
                さらに詳しい分析を見る
              </p>
              <Link
                href={`/result/${typeData.nameEn.toLowerCase()}/detail`}
                className="inline-block px-8 py-3 border border-gold/30 text-gold text-sm tracking-wide hover:bg-gold/10 transition-colors"
              >
                詳細レポートを見る（有料）
              </Link>
            </div>

            <div className="pt-4">
              <Link
                href="/quiz/start"
                className="text-xs text-card-white/30 hover:text-card-white/50 transition-colors"
              >
                もう一度診断する
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
