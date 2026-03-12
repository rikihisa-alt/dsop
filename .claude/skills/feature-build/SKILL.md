---
name: feature-build
description: DSOPの機能・画面・コンポーネントを実装する。「〇〇画面を作って」「診断ロジックを実装して」「結果ページを作って」「Stripeを繋いで」「認証を実装して」と言ったときに使う。Next.js + TypeScript + Supabase + Stripe 前提。
---

# Feature Build — DSOP

## 実装前に必ずやること
1. CLAUDE.md のDesign Rules・Coding Rulesを確認する
2. src/lib/constants/ に既存の定数（タイプ・設問・相性）がないか確認する
3. 既存の類似コンポーネントがsrc/components/にないか確認する
4. 実装方針を説明してから着手する（推測で作り始めない）

## 診断ロジックの実装パターン

### スコア計算（src/features/quiz/scorer.ts）
```typescript
type Axis = "UC" | "AR" | "LH" | "FD"
type Score = Record<Axis, number>

export function calculateType(score: Score): string {
  const u_or_c = score.UC >= 0 ? "U" : "C"
  const a_or_r = score.AR >= 0 ? "A" : "R"
  const l_or_h = score.LH >= 0 ? "L" : "H"
  const f_or_d = score.FD >= 0 ? "F" : "D"
  return `${u_or_c}${a_or_r}${l_or_h}${f_or_d}`
}
```

### 設問データ構造（src/lib/constants/questions.ts）
```typescript
export type Question = {
  id: number
  text: string
  choices: {
    label: string
    scores: Partial<Record<Axis, number>>
  }[]
}
```

### タイプ定義構造（src/lib/constants/types.ts）
```typescript
export type PokerType = {
  code: string          // "UALF"
  nameEn: string        // "STRATEGIST"
  nameJa: string        // 日本語名
  tagline: string       // 一言コピー
  description: string   // スタイル説明
  strengths: string[]   // 良いところ
  weaknesses: string[]  // 注意点
}
```

## アニメーション実装パターン

### 結果タイプ名の登場演出
```tsx
"use client"
import { motion } from "framer-motion"

export function TypeReveal({ nameEn }: { nameEn: string }) {
  return (
    <motion.h1
      initial={{ opacity: 0, scale: 0.8, filter: "blur(12px)" }}
      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="text-6xl font-bold tracking-widest"
    >
      {nameEn}
    </motion.h1>
  )
}
```

### 設問の切り替えアニメーション
```tsx
<AnimatePresence mode="wait">
  <motion.div
    key={currentQuestion.id}
    initial={{ opacity: 0, x: 24 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -24 }}
    transition={{ duration: 0.25 }}
  >
    {/* 設問コンテンツ */}
  </motion.div>
</AnimatePresence>
```

### 選択肢のフィードバック
```tsx
<motion.button
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.97 }}
  onClick={() => handleSelect(choice)}
  className={isSelected ? "ring-2 ring-accent" : ""}
>
  {choice.label}
</motion.button>
```

### スクロールトリガー
```tsx
<motion.div
  initial={{ opacity: 0, y: 32 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-60px" }}
  transition={{ duration: 0.5, ease: "easeOut" }}
>
  コンテンツ
</motion.div>
```

## 有料/無料の切り分けパターン
```typescript
// src/lib/utils/access.ts
export function canAccessDetail(
  isPurchased: boolean,
  isFreeSection: boolean
): boolean {
  return isFreeSection || isPurchased
}
```

```tsx
// 結果詳細ページでの使い方
{canAccessDetail(user.isPurchased, false) ? (
  <PaidContent />
) : (
  <PaywallPrompt />
)}
```

## Stripe決済の実装パターン
```typescript
// src/app/api/checkout/route.ts
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export async function POST(req: Request) {
  const { userId, typeCode } = await req.json()
  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: [{ price: process.env.STRIPE_PRICE_ID!, quantity: 1 }],
    success_url: `${process.env.NEXT_PUBLIC_URL}/result/${typeCode}/detail?success=true`,
    cancel_url: `${process.env.NEXT_PUBLIC_URL}/result/${typeCode}`,
    metadata: { userId, typeCode }
  })
  return Response.json({ url: session.url })
}
```

## 実装後に必ずやること
1. npm run typecheck で型エラーがないか確認
2. npm run lint を通す
3. モバイル（375px）とデスクトップ（1280px）で表示確認
4. 診断ロジックのユニットテストを書く（src/features/quiz/scorer.test.ts）
5. 有料コンテンツが未購入ユーザーに見えていないか確認

## やってはいけないこと
- any型を使う
- 診断ロジックをUIコンポーネントの中に書く
- 設問・タイプ定義をコンポーネントにハードコードする
- 有料/無料の切り分けをフロントだけで判定する（サーバーサイドでも確認）
- 典型LP構成・均等カードグリッドでUIを作る
- Inter・Roboto・Arialを使う
- 装飾目的だけのアニメーションを入れる
