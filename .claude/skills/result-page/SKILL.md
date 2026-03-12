---
name: result-page
description: DSOPの結果画面を実装・改善するときに使う。「結果ページを作って」「タイプ名の演出を改善して」「シェアボタンを追加して」「OGPを設定して」と言ったときに使う。結果画面はこのサービスの最重要画面。
---

# Result Page — DSOP

## 結果画面の優先順位
結果画面はDSOPの最重要画面。以下の順で品質を担保する。

1. 第一印象でタイプが伝わること（タイプ名を大きく・印象的に）
2. スクリーンショットで魅力が伝わること
3. 読み進めると納得感が増す構成
4. 無料範囲だけで満足感があること
5. 有料詳細を見たくなる余白を残すこと

## 必須表示要素（無料）
- タイプ英語名（大きく・印象的に）
- タイプ日本語名
- 4文字コード（UALF など）
- 一言コピー
- スタイル説明
- 良いところ（箇条書き）
- 注意点（箇条書き）
- 4軸の可視化（バー or レーダーチャート）
- X共有ボタン
- 有料詳細への誘導

## タイプ名登場演出のルール
- タイプ名はページ内で最も大きいテキスト
- ロード直後に blur→clear + scale up で登場させる
- 日本語名はタイプ英語名の直後にフェードイン
- 演出時間は合計1.2秒以内に収める（長すぎない）

## OGP設定パターン
```typescript
// src/app/result/[type]/page.tsx
export async function generateMetadata({ params }: { params: { type: string } }) {
  const typeData = getTypeData(params.type)
  return {
    title: `私のポーカータイプは ${typeData.nameEn} — DSOP`,
    description: typeData.tagline,
    openGraph: {
      title: `私のポーカータイプは ${typeData.nameEn}`,
      description: typeData.tagline,
      images: [`/api/og?type=${params.type}`],
    },
    twitter: {
      card: "summary_large_image",
    }
  }
}
```

## X共有テキストのパターン
```typescript
export function generateShareText(type: PokerType): string {
  return `私のポーカー意思決定タイプは「${type.nameEn}（${type.nameJa}）」でした！\n\n${type.tagline}\n\n#DSOP #ポーカー診断\nhttps://dsop.example.com/result/${type.code}`
}
```

## やってはいけないこと
- タイプ名を小さく・控えめに表示する
- 有料コンテンツのテキストをDOMに含めてCSSで隠す（セキュリティNG）
- 均等カードグリッドで結果要素を並べる
- 装飾アニメーションだけ豪華にして内容が薄い画面を作る
