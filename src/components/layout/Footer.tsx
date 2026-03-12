import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-gold/10 bg-baize">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div>
            <p className="font-display text-2xl tracking-[0.2em] text-gold font-bold">DSOP</p>
            <p className="text-card-white/40 text-sm mt-2">
              Decision Style & Orientation of Poker
            </p>
          </div>
          <nav className="flex flex-col gap-2 text-sm text-card-white/50">
            <Link href="/terms" className="hover:text-card-white transition-colors">
              利用規約
            </Link>
            <Link href="/privacy" className="hover:text-card-white transition-colors">
              プライバシーポリシー
            </Link>
            <Link href="/tokusho" className="hover:text-card-white transition-colors">
              特定商取引法に基づく表記
            </Link>
          </nav>
        </div>
        <div className="mt-8 pt-8 border-t border-gold/5 text-center text-card-white/30 text-xs">
          &copy; 2024 DSOP. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
