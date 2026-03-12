import Link from "next/link";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-baize/80 border-b border-gold/10">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="font-display text-xl tracking-[0.2em] text-gold font-bold">
          DSOP
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link href="/quiz/start" className="text-card-white/70 hover:text-gold transition-colors">
            診断する
          </Link>
        </nav>
      </div>
    </header>
  );
}
