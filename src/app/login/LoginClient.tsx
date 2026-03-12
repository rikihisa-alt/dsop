"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function LoginClient() {
  const handleGoogleLogin = () => {
    // In production, use NextAuth signIn
    alert("Google認証は環境変数設定後に有効になります");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-sm w-full text-center"
      >
        <p className="font-display text-3xl tracking-[0.15em] text-gold font-bold mb-2">
          DSOP
        </p>
        <p className="text-sm text-card-white/40 mb-12">
          ログインして診断結果を保存
        </p>

        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-card-white text-baize font-bold text-sm hover:bg-card-white/90 transition-colors"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          Googleアカウントでログイン
        </button>

        <p className="mt-6 text-xs text-card-white/30">
          ログインしなくても診断は利用できます
        </p>

        <div className="mt-8">
          <Link
            href="/quiz/start"
            className="text-sm text-gold/60 hover:text-gold transition-colors"
          >
            ログインせずに診断する →
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
