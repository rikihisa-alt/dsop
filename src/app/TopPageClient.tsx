"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function TopPageClient() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero */}
      <section className="flex-1 flex items-center justify-center px-6 pt-20">
        <div className="max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p className="font-mono text-[10px] tracking-[0.5em] text-gold/40 mb-3 uppercase">
              Decision Style & Orientation of Poker
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none">
              <span className="text-card-white/90">ポーカースタイル診断</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-lg md:text-xl text-card-white/50 font-display tracking-wide"
          >
            あなたのポーカーの<span className="text-gold/80">型</span>は？
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-6 text-sm text-card-white/35 max-w-md mx-auto leading-relaxed"
          >
            56の問いから、あなたの意思決定を4つの軸で分析。
            <br />
            16タイプの中から、あなただけのポーカースタイルを導き出す。
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12"
          >
            <Link
              href="/quiz/start"
              className="group relative inline-flex items-center gap-3 px-10 py-4 bg-gold text-baize font-bold text-base tracking-wide hover:bg-gold-light transition-all duration-300"
            >
              <span>診断をはじめる</span>
              <span className="inline-block transition-transform group-hover:translate-x-1">
                &rarr;
              </span>
            </Link>
            <p className="mt-4 text-[11px] text-card-white/20 tracking-wider">
              約12分 / 56問 / 無料
            </p>
          </motion.div>
        </div>
      </section>

      {/* 16 Types Teaser */}
      <section className="px-6 py-28">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <p className="font-mono text-[10px] tracking-[0.5em] text-gold/30 mb-3">
              16 TYPES
            </p>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-card-white/80">
              あなたは、どのタイプか。
            </h2>
          </motion.div>

          <div className="grid grid-cols-4 md:grid-cols-8 gap-[1px] bg-gold/5 rounded-sm overflow-hidden">
            {[
              "STRATEGIST", "ARCHITECT", "INSTINCTOR", "PREDATOR",
              "EXPLOITER", "ANALYZER", "READER", "TRACKER",
              "CONTROLLER", "MANAGER", "NAVIGATOR", "SENTINEL",
              "TACTICIAN", "CUSTODIAN", "OPPORTUNIST", "WATCHER",
            ].map((name, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.02 }}
                className="aspect-square flex items-center justify-center bg-baize hover:bg-felt-dark/80 transition-all duration-500 group cursor-default"
              >
                <span className="text-[7px] md:text-[9px] font-mono tracking-widest text-card-white/15 group-hover:text-gold/50 transition-colors duration-500">
                  {name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 Axes */}
      <section className="px-6 py-28 border-t border-gold/5">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <p className="font-mono text-[10px] tracking-[0.5em] text-gold/30 mb-3">
              4 AXES
            </p>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-card-white/80">
              4つの軸で、スタイルを読む。
            </h2>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                code: "U / C",
                left: "Unpredictable",
                right: "Controlled",
                leftJa: "予測不能",
                rightJa: "制御的",
              },
              {
                code: "A / R",
                left: "Aggressive",
                right: "Reserved",
                leftJa: "攻撃的",
                rightJa: "慎重",
              },
              {
                code: "L / H",
                left: "Logical",
                right: "Holistic",
                leftJa: "論理型",
                rightJa: "直感型",
              },
              {
                code: "F / D",
                left: "Fast",
                right: "Deliberate",
                leftJa: "即断型",
                rightJa: "熟考型",
              },
            ].map((item, i) => (
              <motion.div
                key={item.code}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="relative flex items-center gap-4 px-6 py-5 rounded-sm border border-gold/5 hover:border-gold/15 transition-all duration-500 group bg-felt-dark/20"
              >
                <span className="font-mono text-xl md:text-2xl font-bold text-gold/25 group-hover:text-gold/60 transition-colors duration-500 shrink-0 w-16 text-center whitespace-nowrap">
                  {item.code}
                </span>
                <div className="flex-1 flex items-center justify-between text-sm">
                  <div className="text-left">
                    <span className="font-mono text-[10px] text-card-white/30 block">{item.left}</span>
                    <span className="text-card-white/50 text-xs">{item.leftJa}</span>
                  </div>
                  <div className="flex-1 mx-4 h-px bg-gradient-to-r from-gold/10 via-gold/20 to-gold/10" />
                  <div className="text-right">
                    <span className="font-mono text-[10px] text-card-white/30 block">{item.right}</span>
                    <span className="text-card-white/50 text-xs">{item.rightJa}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
