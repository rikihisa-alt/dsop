"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { PokerType } from "@/lib/types";

type DetailPageClientProps = {
  typeData: PokerType;
};

export function DetailPageClient({ typeData }: DetailPageClientProps) {
  // In production, check purchase status via API
  const isPurchased = false;

  if (!isPurchased) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md text-center"
        >
          <p className="font-mono text-xs tracking-[0.3em] text-gold/50 mb-4">
            PREMIUM REPORT
          </p>
          <h1 className="font-display text-2xl md:text-3xl font-bold mb-2">
            {typeData.nameEn}
          </h1>
          <p className="text-card-white/50 text-sm mb-8">
            {typeData.nameJa}の詳細レポート
          </p>

          <div className="space-y-4 text-left text-sm text-card-white/60 mb-12">
            <div className="flex items-start gap-3">
              <span className="text-gold shrink-0">01</span>
              <span>あなたのタイプの詳細な解説と行動パターン分析</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-gold shrink-0">02</span>
              <span>各軸の詳細スコアに基づく改善ポイント</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-gold shrink-0">03</span>
              <span>他タイプとの相性と対策</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-gold shrink-0">04</span>
              <span>あなた専用の上達ロードマップ</span>
            </div>
          </div>

          <button
            onClick={() => {
              // In production, integrate with Stripe checkout
              alert("Stripe決済連携は環境変数設定後に有効になります");
            }}
            className="inline-block px-10 py-4 bg-gold text-baize font-bold tracking-wide hover:bg-gold-light transition-colors"
          >
            詳細レポートを購入する
          </button>

          <p className="mt-4 text-xs text-card-white/30">
            ¥980（税込）/ 買い切り
          </p>

          <div className="mt-8">
            <Link
              href={`/result/${typeData.nameEn.toLowerCase()}`}
              className="text-xs text-card-white/30 hover:text-card-white/50 transition-colors"
            >
              無料結果に戻る
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  return null;
}
