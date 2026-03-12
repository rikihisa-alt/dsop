"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function TopPageClient() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero - 診断体験の入口 */}
      <section className="flex-1 flex items-center justify-center px-6 pt-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p className="font-mono text-xs tracking-[0.4em] text-gold/60 mb-6">
              DECISION STYLE & ORIENTATION OF POKER
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight"
          >
            あなたのポーカーは、
            <br />
            <span className="text-gold">どんな型</span>をしているか。
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-8 text-base md:text-lg text-card-white/60 max-w-xl leading-relaxed"
          >
            28の問いに答えるだけで、あなたの意思決定スタイルを4軸で分析。
            16タイプの中から、あなただけのポーカータイプを導き出します。
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-12"
          >
            <Link
              href="/quiz/start"
              className="inline-block px-10 py-4 bg-gold text-baize font-bold text-base tracking-wide hover:bg-gold-light transition-colors"
            >
              診断をはじめる
            </Link>
            <p className="mt-4 text-xs text-card-white/30">
              所要時間 約5分 / 無料
            </p>
          </motion.div>
        </div>
      </section>

      {/* Teaser - 16タイプの存在を匂わせる */}
      <section className="px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-mono text-xs tracking-[0.3em] text-gold/50 mb-4">
              16 TYPES
            </p>
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-12">
              あなたは、どのタイプか。
            </h2>
          </motion.div>

          <div className="grid grid-cols-4 md:grid-cols-8 gap-px">
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
                transition={{ duration: 0.3, delay: i * 0.03 }}
                className="aspect-square flex items-center justify-center border border-gold/5 hover:border-gold/20 hover:bg-felt-light/20 transition-all group"
              >
                <span className="text-[8px] md:text-[10px] font-mono tracking-wider text-card-white/20 group-hover:text-gold/60 transition-colors">
                  {name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="px-6 py-24 border-t border-gold/5">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-mono text-xs tracking-[0.3em] text-gold/50 mb-4">
              4 AXES
            </p>
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-12">
              4つの軸で、あなたを読む。
            </h2>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                axis: "U / C",
                title: "Unpredictable vs Controlled",
                desc: "あなたのプレーは予測不能か、それとも制御的か。",
              },
              {
                axis: "A / R",
                title: "Aggressive vs Reserved",
                desc: "攻撃的に仕掛けるか、慎重に見極めるか。",
              },
              {
                axis: "L / H",
                title: "Logical vs Holistic",
                desc: "論理で判断するか、直感で感じ取るか。",
              },
              {
                axis: "F / D",
                title: "Fast vs Deliberate",
                desc: "即座に決断するか、じっくり熟考するか。",
              },
            ].map((item, i) => (
              <motion.div
                key={item.axis}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-start gap-6 group"
              >
                <span className="font-mono text-2xl md:text-3xl font-bold text-gold/30 group-hover:text-gold transition-colors shrink-0 w-16 text-right">
                  {item.axis}
                </span>
                <div className="border-l border-gold/10 pl-6">
                  <p className="font-mono text-xs text-card-white/40 mb-1">
                    {item.title}
                  </p>
                  <p className="text-card-white/70">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
