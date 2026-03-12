"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function QuizStartClient() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-lg text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-xs tracking-[0.3em] text-gold/50 mb-6">
            POKER TYPE DIAGNOSIS
          </p>

          <h1 className="font-display text-3xl md:text-4xl font-bold mb-6">
            あなたの意思決定スタイルを
            <br />
            解き明かす。
          </h1>

          <div className="text-sm text-card-white/50 space-y-3 mb-12">
            <p>全56問のシチュエーション問題に回答してください。</p>
            <p>正解・不正解はありません。直感で答えてください。</p>
            <p className="font-mono text-xs text-card-white/30">
              所要時間：約12分
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-center gap-8 text-xs font-mono text-card-white/30 mb-8">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 border border-gold/30" />
                <span>4軸分析</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 border border-gold/30" />
                <span>16タイプ</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 border border-gold/30" />
                <span>56問</span>
              </div>
            </div>

            <Link
              href="/quiz/1"
              className="inline-block px-12 py-4 bg-gold text-baize font-bold tracking-wide text-base hover:bg-gold-light transition-colors"
            >
              診断を開始する
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
