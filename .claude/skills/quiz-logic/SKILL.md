---
name: quiz-logic
description: DSOPの診断ロジック・スコア計算・タイプ判定・設問設計に関する作業をするときに使う。「診断ロジックを作って」「スコア計算を実装して」「タイプ判定を直して」「設問を追加して」と言ったときに使う。
---

# Quiz Logic — DSOP

## 4軸の定義

| 軸 | プラス方向 | マイナス方向 | 意味 |
|----|-----------|-------------|------|
| UC | U (Unpredictable) | C (Controlled) | 予測不能 vs 制御的 |
| AR | A (Aggressive)    | R (Reserved)   | 攻撃的 vs 慎重 |
| LH | L (Logical)       | H (Holistic)   | 論理的 vs 直感的 |
| FD | F (Fast)          | D (Deliberate) | 即断 vs 熟考 |

## タイプ判定ルール

各軸のスコアの正負でタイプコードを生成する。

UC >= 0 → U, UC < 0 → C
AR >= 0 → A, AR < 0 → R
LH >= 0 → L, LH < 0 → H
FD >= 0 → F, FD < 0 → D

同点（スコア0）の場合はデフォルト値（U/A/L/F）を採用する。
将来的に僅差処理・ウェイト調整ができる構造にしておくこと。

## 設問データの管理ルール
- src/lib/constants/questions.ts に全設問を集約する
- 各設問は id / text / choices を持つ
- 各選択肢は複数軸に同時加点できる
- 設問の追加・修正はこのファイルだけで完結できること

## スコア計算の実装場所
src/features/quiz/scorer.ts にすべて集約する。
UIコンポーネントの中にロジックを書かない。
ロジックはピュアな関数として実装し、テストを書く。
