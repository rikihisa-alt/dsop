# DSOP — Decision Style & Orientation of Poker

## Purpose
ポーカーにおける意思決定傾向を可視化し、ユーザーを16タイプに分類する体験型診断アプリ。
「遊びたくなる→答えたくなる→結果を見たくなる→共有したくなる→深掘りしたくなる」
という感情の流れを壊さないことを最優先とする。
LPではなく、診断体験そのものが主役のプロダクト。

## Stack
- Next.js 14（App Router） + TypeScript
- Tailwind CSS（スタイリング）
- Framer Motion（アニメーション）
- Supabase（DB・認証）
- NextAuth.js（Googleログイン）
- Stripe（決済）
- Vercel（デプロイ）

## Repo Map
src/
├── app/                   ルーティング
│   ├── (auth)/            認証関連ページ
│   ├── (quiz)/            診断フロー
│   ├── result/[type]/     結果ページ（16タイプ）
│   ├── mypage/            マイページ
│   └── api/               API Routes
├── components/
│   ├── ui/                汎用UIパーツ
│   ├── quiz/              診断専用コンポーネント
│   ├── result/            結果画面専用コンポーネント
│   └── layout/            Header, Footer
├── features/
│   ├── auth/              認証ロジック
│   ├── quiz/              診断ロジック・スコア計算
│   ├── result/            結果判定・表示
│   └── payment/           Stripe決済
├── lib/
│   ├── constants/         定数（タイプ定義・設問・相性）
│   ├── types/             型定義
│   └── utils/             ユーティリティ
└── styles/                グローバルCSS

## Pages
/ トップ（診断体験の入口。LPではない）
/login Googleログイン導線
/quiz/start 診断開始画面
/quiz/[step] 設問回答画面（28問）
/result/[type] 診断結果画面（無料）
/result/[type]/detail 有料詳細閲覧画面
/mypage マイページ
/terms 利用規約
/privacy プライバシーポリシー
/tokusho 特定商取引法表記

## 診断ロジック
4軸でスコアを加算し16タイプを判定する。

軸定義:
- U/C: Unpredictable / Controlled（予測不能 vs 制御的）
- A/R: Aggressive / Reserved（攻撃的 vs 慎重）
- L/H: Logical / Holistic（論理的 vs 直感的）
- F/D: Fast / Deliberate（即断 vs 熟考）

16タイプ:
STRATEGIST(UALF) ARCHITECT(UALD) INSTINCTOR(UAHF) PREDATOR(UAHD)
EXPLOITER(URLF) ANALYZER(URLD) READER(URHF)    TRACKER(URHD)
CONTROLLER(CALF) MANAGER(CALD) NAVIGATOR(CAHF) SENTINEL(CAHD)
TACTICIAN(CRLF) CUSTODIAN(CRLD) OPPORTUNIST(CRHF) WATCHER(CRHD)

## Design Rules

### 禁止事項（絶対に守ること）
- Hero→Features→Cards→FAQ→CTAの典型LP構成
- 同一見た目のカードを3列・4列に均等配置
- 均等グリッドだけで全画面を構成
- 丸角カード+影+グラデーションのテンプレ量産
- 抽象的コピー（革新的・新しい価値・未来を変える等）
- fade/slideのみの単純アニメーション多用
- Inter・Roboto・Arial などテンプレ感の強いフォント

### デザインコンセプト
- ポーカーの世界観を感じるビジュアル
- 診断前・診断中・結果発表後でUIの空気感を変える
- セクションごとに情報密度・余白・文字サイズを意図的に変える
- 左右対称レイアウトを多用しない
- スクリーンショット共有に適した結果画面

### アニメーション（採用してよいもののみ）
- スクロールに応じた軽いモーション（Framer Motion whileInView）
- ボタン・選択肢に対するフィードバック
- カードをめくる・伏せる・置くようなポーカー文脈の動き
- 結果発表時の意味ある演出（タイプ名の登場など）
- 装飾目的のアニメーションは禁止

## Coding Rules
- any禁止。型は必ず明示する
- Server ComponentとClient Componentを明確に分ける
- "use client"はインタラクション・Framer Motion・フォームが必要なものだけ
- 画像はnext/imageを使う
- リンクはnext/linkを使う
- 診断ロジックはsrc/features/quiz/に集約し、UIから分離する
- 設問・タイプ定義・相性データはsrc/lib/constants/に集約する
- 有料/無料の切り分けはフラグで管理し、後から変更しやすくする
- コンポーネントは1ファイル200行を目安に分割する

## Commands
- dev:      npm run dev
- build:    npm run build
- lint:     npm run lint
- type:     npm run typecheck

## Important
- 決済情報は自前保持しない（Stripeに委譲）
- Google認証情報はNextAuth.js経由で安全に扱う
- 診断結果・購入状態・個人情報はSupabaseで適切に保護する
- 設問・文言はsrc/lib/constants/に集約し、コード変更なしで調整できる設計にする
- 不明点は推測で実装せず、先に確認する
