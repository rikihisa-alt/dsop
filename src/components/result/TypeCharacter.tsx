"use client";

import { motion } from "framer-motion";

type TypeCharacterProps = {
  typeCode: string;
  className?: string;
};

const BODY = "#2e2822";
const SKIN = "#3d3530";

type Colors = { primary: string; glow: string };

const TYPE_COLORS: Record<string, Colors> = {
  UALF: { primary: "#D4A853", glow: "#D4A85330" },
  UALD: { primary: "#6B9FBB", glow: "#6B9FBB30" },
  UAHF: { primary: "#E74C3C", glow: "#E74C3C30" },
  UAHD: { primary: "#9B59B6", glow: "#9B59B630" },
  URLF: { primary: "#2ECC71", glow: "#2ECC7130" },
  URLD: { primary: "#4FC3F7", glow: "#4FC3F730" },
  URHF: { primary: "#AB6FCF", glow: "#AB6FCF30" },
  URHD: { primary: "#43B87A", glow: "#43B87A30" },
  CALF: { primary: "#F0A832", glow: "#F0A83230" },
  CALD: { primary: "#A0AEB8", glow: "#A0AEB830" },
  CAHF: { primary: "#2E86C1", glow: "#2E86C130" },
  CAHD: { primary: "#CD7F32", glow: "#CD7F3230" },
  CRLF: { primary: "#78909C", glow: "#78909C30" },
  CRLD: { primary: "#C4886A", glow: "#C4886A30" },
  CRHF: { primary: "#1ABC9C", glow: "#1ABC9C30" },
  CRHD: { primary: "#5D7B93", glow: "#5D7B9330" },
};

/* ── Character SVG fragments ── */

function Strategist({ c }: { c: string }) {
  return (
    <>
      <path d="M 25 200 Q 40 150 80 140 Q 120 150 135 200" fill={BODY} />
      <path d="M 70 142 L 80 158 L 90 142" fill={c} opacity="0.5" />
      <ellipse cx="80" cy="82" rx="30" ry="36" fill={SKIN} />
      <ellipse cx="80" cy="50" rx="40" ry="7" fill={c} />
      <path d="M 52 50 Q 58 24 80 22 Q 102 24 108 50" fill={c} />
      <rect x="50" y="46" width="60" height="4" rx="2" fill={c} opacity="0.7" />
      <path d="M 62 78 L 75 75 L 75 82 Z" fill={c} />
      <path d="M 98 78 L 85 75 L 85 82 Z" fill={c} />
      <path d="M 72 97 Q 82 103 93 96" stroke={c} strokeWidth="1.5" fill="none" strokeLinecap="round" />
    </>
  );
}

function Architect({ c }: { c: string }) {
  return (
    <>
      <path d="M 25 200 Q 40 150 80 140 Q 120 150 135 200" fill={BODY} />
      <path d="M 70 142 L 80 160 L 90 142" fill={c} opacity="0.5" />
      <ellipse cx="80" cy="82" rx="28" ry="35" fill={SKIN} />
      <path d="M 55 52 Q 80 46 105 52 L 105 58 Q 80 54 55 58 Z" fill={SKIN} />
      <rect x="60" y="74" width="15" height="11" rx="2" stroke={c} strokeWidth="1.5" fill="none" />
      <rect x="85" y="74" width="15" height="11" rx="2" stroke={c} strokeWidth="1.5" fill="none" />
      <line x1="75" y1="80" x2="85" y2="80" stroke={c} strokeWidth="1" />
      <circle cx="67" cy="79" r="2.5" fill={c} opacity="0.5" />
      <circle cx="93" cy="79" r="2.5" fill={c} opacity="0.5" />
      <line x1="73" y1="97" x2="87" y2="97" stroke={c} strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
    </>
  );
}

function Instinctor({ c }: { c: string }) {
  return (
    <>
      <path d="M 25 200 Q 40 150 80 140 Q 120 150 135 200" fill={BODY} />
      <ellipse cx="80" cy="86" rx="30" ry="34" fill={SKIN} />
      <path d="M 52 62 L 62 30 L 70 56" fill={c} />
      <path d="M 66 56 L 80 18 L 92 52" fill={c} />
      <path d="M 88 56 L 100 28 L 110 60" fill={c} />
      <circle cx="68" cy="80" r="5" fill={c} />
      <circle cx="92" cy="80" r="5" fill={c} />
      <circle cx="68" cy="80" r="2" fill={SKIN} />
      <circle cx="92" cy="80" r="2" fill={SKIN} />
      <path d="M 65 98 Q 72 106 80 100 Q 88 106 95 98" stroke={c} strokeWidth="1.5" fill="none" strokeLinecap="round" />
    </>
  );
}

function Predator({ c }: { c: string }) {
  return (
    <>
      <path d="M 25 200 Q 40 148 80 138 Q 120 148 135 200" fill={BODY} />
      <ellipse cx="80" cy="85" rx="30" ry="36" fill={SKIN} />
      <path d="M 38 155 Q 40 50 80 35 Q 120 50 122 155" fill={BODY} />
      <path d="M 60 80 L 74 77 L 74 84 Z" fill={c} />
      <path d="M 100 80 L 86 77 L 86 84 Z" fill={c} />
      <circle cx="67" cy="81" r="2" fill={c} opacity="0.8" />
      <circle cx="93" cy="81" r="2" fill={c} opacity="0.8" />
    </>
  );
}

function Exploiter({ c }: { c: string }) {
  return (
    <>
      <path d="M 25 200 Q 40 148 80 138 Q 120 148 135 200" fill={BODY} />
      <path d="M 52 152 Q 52 138 80 135 Q 108 138 108 152" fill={c} opacity="0.2" />
      <ellipse cx="80" cy="82" rx="28" ry="35" fill={SKIN} />
      <path d="M 54 54 Q 80 48 106 54 L 108 58 Q 80 54 52 58 Z" fill={SKIN} />
      <rect x="56" y="74" width="22" height="10" rx="5" fill={c} />
      <rect x="82" y="74" width="22" height="10" rx="5" fill={c} />
      <line x1="78" y1="79" x2="82" y2="79" stroke={c} strokeWidth="1.5" />
      <line x1="73" y1="97" x2="87" y2="97" stroke={c} strokeWidth="1" strokeLinecap="round" opacity="0.4" />
    </>
  );
}

function Analyzer({ c }: { c: string }) {
  return (
    <>
      <path d="M 25 200 Q 40 150 80 140 Q 120 150 135 200" fill={BODY} />
      <ellipse cx="80" cy="82" rx="28" ry="35" fill={SKIN} />
      <path d="M 56 52 Q 80 46 104 52 L 104 58 Q 80 54 56 58 Z" fill={SKIN} />
      <line x1="80" y1="47" x2="80" y2="56" stroke="#2a2318" strokeWidth="1" />
      <circle cx="68" cy="79" r="10" stroke={c} strokeWidth="2" fill="none" />
      <circle cx="92" cy="79" r="10" stroke={c} strokeWidth="2" fill="none" />
      <line x1="78" y1="79" x2="82" y2="79" stroke={c} strokeWidth="1.5" />
      <circle cx="68" cy="79" r="3" fill={c} opacity="0.5" />
      <circle cx="92" cy="79" r="3" fill={c} opacity="0.5" />
      <line x1="73" y1="98" x2="87" y2="98" stroke={c} strokeWidth="1" strokeLinecap="round" opacity="0.3" />
    </>
  );
}

function Reader({ c }: { c: string }) {
  return (
    <>
      <path d="M 25 200 Q 40 150 80 140 Q 120 150 135 200" fill={BODY} />
      <ellipse cx="80" cy="82" rx="28" ry="35" fill={SKIN} />
      <rect x="50" y="56" width="60" height="6" rx="3" fill={c} />
      <circle cx="80" cy="59" r="4" fill={c} opacity="0.5" />
      <path d="M 62 80 Q 68 76 74 80" stroke={c} strokeWidth="1.8" fill="none" strokeLinecap="round" />
      <path d="M 86 80 Q 92 76 98 80" stroke={c} strokeWidth="1.8" fill="none" strokeLinecap="round" />
      <path d="M 75 97 Q 80 100 85 97" stroke={c} strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.5" />
    </>
  );
}

function Tracker({ c }: { c: string }) {
  return (
    <>
      <path d="M 25 200 Q 40 150 80 140 Q 120 150 135 200" fill={BODY} />
      <ellipse cx="80" cy="86" rx="28" ry="33" fill={SKIN} />
      <path d="M 48 68 Q 80 55 112 68 L 112 60 Q 80 48 48 60 Z" fill={c} />
      <ellipse cx="80" cy="58" rx="34" ry="9" fill={c} opacity="0.8" />
      <line x1="62" y1="82" x2="74" y2="79" stroke={c} strokeWidth="2" strokeLinecap="round" />
      <line x1="86" y1="79" x2="98" y2="82" stroke={c} strokeWidth="2" strokeLinecap="round" />
      <path d="M 73 99 Q 80 97 87 99" stroke={c} strokeWidth="1" fill="none" strokeLinecap="round" />
    </>
  );
}

function Controller({ c }: { c: string }) {
  return (
    <>
      <path d="M 22 200 Q 36 148 80 138 Q 124 148 138 200" fill={BODY} />
      <ellipse cx="80" cy="86" rx="32" ry="36" fill={SKIN} />
      <path d="M 58 56 L 62 38 L 70 48 L 80 30 L 90 48 L 98 38 L 102 56" fill={c} />
      <rect x="56" y="53" width="48" height="5" rx="2" fill={c} opacity="0.8" />
      <line x1="64" y1="82" x2="76" y2="82" stroke={c} strokeWidth="2.5" strokeLinecap="round" />
      <line x1="84" y1="82" x2="96" y2="82" stroke={c} strokeWidth="2.5" strokeLinecap="round" />
      <line x1="72" y1="100" x2="88" y2="100" stroke={c} strokeWidth="2" strokeLinecap="round" />
    </>
  );
}

function Manager({ c }: { c: string }) {
  return (
    <>
      <path d="M 25 200 Q 40 150 80 140 Q 120 150 135 200" fill={BODY} />
      <path d="M 72 142 L 80 162 L 88 142" fill={c} />
      <line x1="80" y1="162" x2="80" y2="182" stroke={c} strokeWidth="2" />
      <ellipse cx="80" cy="82" rx="26" ry="34" fill={SKIN} />
      <path d="M 56 54 Q 80 48 104 54 L 104 60 Q 80 54 56 60 Z" fill={SKIN} />
      <rect x="60" y="76" width="16" height="8" rx="4" stroke={c} strokeWidth="1.5" fill="none" />
      <rect x="84" y="76" width="16" height="8" rx="4" stroke={c} strokeWidth="1.5" fill="none" />
      <line x1="76" y1="80" x2="84" y2="80" stroke={c} strokeWidth="1" />
      <line x1="74" y1="98" x2="86" y2="98" stroke={c} strokeWidth="1" strokeLinecap="round" opacity="0.4" />
    </>
  );
}

function Navigator({ c }: { c: string }) {
  return (
    <>
      <path d="M 25 200 Q 40 150 80 140 Q 120 150 135 200" fill={BODY} />
      <ellipse cx="80" cy="86" rx="28" ry="34" fill={SKIN} />
      <rect x="55" y="48" width="50" height="18" rx="3" fill={c} />
      <rect x="50" y="64" width="60" height="4" rx="2" fill={c} opacity="0.9" />
      <circle cx="80" cy="55" r="5" stroke={c} fill="none" strokeWidth="1.5" />
      <circle cx="80" cy="55" r="2" fill={c} />
      <circle cx="68" cy="82" r="4" fill={c} opacity="0.4" />
      <circle cx="92" cy="82" r="4" fill={c} opacity="0.4" />
      <path d="M 73 98 Q 80 101 87 98" stroke={c} strokeWidth="1" fill="none" strokeLinecap="round" />
    </>
  );
}

function Sentinel({ c }: { c: string }) {
  return (
    <>
      <path d="M 20 200 Q 34 148 80 138 Q 126 148 140 200" fill={BODY} />
      <ellipse cx="80" cy="86" rx="32" ry="36" fill={SKIN} />
      <path d="M 48 76 Q 48 34 80 28 Q 112 34 112 76" fill={c} opacity="0.7" />
      <rect x="48" y="73" width="64" height="5" rx="2" fill={c} />
      <line x1="62" y1="86" x2="76" y2="86" stroke={c} strokeWidth="2.5" strokeLinecap="round" />
      <line x1="84" y1="86" x2="98" y2="86" stroke={c} strokeWidth="2.5" strokeLinecap="round" />
      <line x1="74" y1="102" x2="86" y2="102" stroke={c} strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
    </>
  );
}

function Tactician({ c }: { c: string }) {
  return (
    <>
      <path d="M 25 200 Q 40 150 80 140 Q 120 150 135 200" fill={BODY} />
      <ellipse cx="80" cy="86" rx="28" ry="34" fill={SKIN} />
      <ellipse cx="82" cy="56" rx="35" ry="10" fill={c} />
      <path d="M 50 56 Q 62 40 82 38 Q 102 40 114 56" fill={c} />
      <line x1="62" y1="82" x2="74" y2="80" stroke={c} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="86" y1="80" x2="98" y2="82" stroke={c} strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="68" cy="80" r="2" fill={c} />
      <circle cx="92" cy="80" r="2" fill={c} />
      <line x1="72" y1="99" x2="88" y2="99" stroke={c} strokeWidth="1.5" strokeLinecap="round" />
    </>
  );
}

function Custodian({ c }: { c: string }) {
  return (
    <>
      <path d="M 25 200 Q 40 150 80 140 Q 120 150 135 200" fill={BODY} />
      <ellipse cx="80" cy="86" rx="30" ry="36" fill={SKIN} />
      <ellipse cx="80" cy="52" rx="38" ry="6" fill={c} />
      <path d="M 58 52 Q 58 28 80 26 Q 102 28 102 52" fill={c} />
      <circle cx="68" cy="82" r="5" stroke={c} strokeWidth="1.5" fill="none" />
      <circle cx="92" cy="82" r="5" stroke={c} strokeWidth="1.5" fill="none" />
      <circle cx="68" cy="82" r="2" fill={c} opacity="0.5" />
      <circle cx="92" cy="82" r="2" fill={c} opacity="0.5" />
      <path d="M 72 100 Q 80 97 88 100" stroke={c} strokeWidth="1" fill="none" strokeLinecap="round" />
    </>
  );
}

function Opportunist({ c }: { c: string }) {
  return (
    <>
      <path d="M 25 200 Q 40 150 80 140 Q 120 150 135 200" fill={BODY} />
      <ellipse cx="80" cy="82" rx="28" ry="35" fill={SKIN} />
      <path d="M 52 56 Q 80 48 108 56 L 108 62 Q 80 56 52 62 Z" fill={SKIN} />
      <path d="M 48 88 Q 50 86 80 92 Q 110 86 112 88 L 112 112 Q 80 118 48 112 Z" fill={c} opacity="0.5" />
      <circle cx="68" cy="78" r="5" fill={c} />
      <circle cx="92" cy="78" r="5" fill={c} />
      <circle cx="68" cy="78" r="2" fill={SKIN} />
      <circle cx="92" cy="78" r="2" fill={SKIN} />
    </>
  );
}

function Watcher({ c }: { c: string }) {
  return (
    <>
      <path d="M 25 200 Q 40 148 80 138 Q 120 148 135 200" fill={BODY} />
      <path d="M 45 200 Q 48 105 80 100 Q 112 105 115 200" fill={BODY} />
      <ellipse cx="80" cy="82" rx="28" ry="35" fill={SKIN} />
      <path d="M 50 94 Q 80 102 110 94 L 110 118 Q 80 124 50 118 Z" fill={c} opacity="0.3" />
      <ellipse cx="68" cy="78" rx="8" ry="6" stroke={c} strokeWidth="1.5" fill="none" />
      <ellipse cx="92" cy="78" rx="8" ry="6" stroke={c} strokeWidth="1.5" fill="none" />
      <circle cx="68" cy="78" r="3" fill={c} opacity="0.6" />
      <circle cx="92" cy="78" r="3" fill={c} opacity="0.6" />
    </>
  );
}

const CHARACTER_MAP: Record<string, React.ComponentType<{ c: string }>> = {
  UALF: Strategist,
  UALD: Architect,
  UAHF: Instinctor,
  UAHD: Predator,
  URLF: Exploiter,
  URLD: Analyzer,
  URHF: Reader,
  URHD: Tracker,
  CALF: Controller,
  CALD: Manager,
  CAHF: Navigator,
  CAHD: Sentinel,
  CRLF: Tactician,
  CRLD: Custodian,
  CRHF: Opportunist,
  CRHD: Watcher,
};

export function TypeCharacter({ typeCode, className = "" }: TypeCharacterProps) {
  const colors = TYPE_COLORS[typeCode] || TYPE_COLORS.UALF;
  const CharacterSvg = CHARACTER_MAP[typeCode] || Strategist;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      <svg
        viewBox="0 0 160 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Background glow */}
        <circle cx="80" cy="90" r="70" fill={colors.glow} />
        <circle cx="80" cy="90" r="50" fill={`${colors.primary}18`} />

        {/* Character */}
        <CharacterSvg c={colors.primary} />

        {/* Base accent line */}
        <line
          x1="35"
          y1="198"
          x2="125"
          y2="198"
          stroke={colors.primary}
          strokeWidth="1"
          opacity="0.25"
        />
      </svg>
    </motion.div>
  );
}
