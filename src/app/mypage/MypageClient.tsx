"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function MypageClient() {
  // In production, check auth status and fetch user data
  const isLoggedIn = false;

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-card-white/50 mb-6">
            マイページを利用するにはログインが必要です
          </p>
          <Link
            href="/login"
            className="inline-block px-8 py-3 bg-gold text-baize font-bold text-sm tracking-wide hover:bg-gold-light transition-colors"
          >
            ログインする
          </Link>
        </motion.div>
      </div>
    );
  }

  return null;
}
