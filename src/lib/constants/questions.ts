import type { Question } from "@/lib/types";

export const QUESTIONS: Question[] = [
  // === UC軸（Unpredictable vs Controlled）メイン ===
  {
    id: 1,
    text: "プリフロップでスーテッドコネクターを持っています。あなたの傾向は？",
    choices: [
      { label: "ポジション関係なくレイズして仕掛ける", scores: { UC: 3, AR: 1 } },
      { label: "ポジションが良ければレイズ、悪ければフォールド", scores: { UC: -1, LH: 1 } },
      { label: "リンプインしてフロップを安く見る", scores: { UC: -2, AR: -1 } },
      { label: "テーブルの雰囲気を見てその場で決める", scores: { UC: 1, LH: -2 } },
    ],
  },
  {
    id: 2,
    text: "同じ相手に3連続でブラフを仕掛けて2回成功しました。次のハンドでも機会が来たら？",
    choices: [
      { label: "流れに乗ってもう一発ブラフを打つ", scores: { UC: 3, FD: 2 } },
      { label: "相手が警戒しているはずなので今度はバリューを狙う", scores: { UC: -2, LH: 2 } },
      { label: "一旦落ち着いてタイトにプレーする", scores: { UC: -3, AR: -1 } },
      { label: "相手の反応を観察してからアクションを決める", scores: { UC: 0, FD: -2 } },
    ],
  },
  {
    id: 3,
    text: "あなたのプレーを一言で表すと？",
    choices: [
      { label: "何をしてくるか分からない、と思われたい", scores: { UC: 3, AR: 1 } },
      { label: "堅実で隙がない、と思われたい", scores: { UC: -3, LH: 1 } },
      { label: "読めない、と思われたい", scores: { UC: 2, LH: -1 } },
      { label: "いつも冷静、と思われたい", scores: { UC: -2, FD: -1 } },
    ],
  },
  {
    id: 4,
    text: "新しいテーブルに座った最初の30分。あなたは？",
    choices: [
      { label: "積極的に参加してテーブルのダイナミクスを作る", scores: { UC: 2, AR: 2 } },
      { label: "まず全員のプレースタイルを把握してから動く", scores: { UC: -2, FD: -2 } },
      { label: "いつも通りの自分のスタイルで淡々とプレー", scores: { UC: -1, LH: 1 } },
      { label: "直感で弱そうな相手を見つけて仕掛ける", scores: { UC: 1, LH: -2 } },
    ],
  },
  {
    id: 5,
    text: "トーナメント中盤、平均スタックの2倍を持っています。戦略は？",
    choices: [
      { label: "チップリーダーとしてテーブルを支配する", scores: { UC: 2, AR: 3 } },
      { label: "現在のポジションを維持しつつ確実に進める", scores: { UC: -3, FD: -1 } },
      { label: "状況に応じて攻守を切り替える", scores: { UC: 0, LH: -1 } },
      { label: "弱い相手を狙い撃ちにする", scores: { UC: 1, AR: 1 } },
    ],
  },
  {
    id: 6,
    text: "オーバーベットをする頻度は？",
    choices: [
      { label: "効果的だと思えば頻繁に使う", scores: { UC: 3, AR: 2 } },
      { label: "特定のシチュエーションでのみ使う", scores: { UC: -1, LH: 2 } },
      { label: "ほとんど使わない。リスクが大きすぎる", scores: { UC: -3, AR: -2 } },
      { label: "相手が嫌がっている感じがしたら使う", scores: { UC: 1, LH: -2 } },
    ],
  },
  {
    id: 7,
    text: "あなたのベットサイズの選び方は？",
    choices: [
      { label: "相手の反応を見ながら毎回変える", scores: { UC: 2, LH: -1 } },
      { label: "ポットサイズに対する一定比率を基本にする", scores: { UC: -2, LH: 2 } },
      { label: "直感でその場の最適サイズを選ぶ", scores: { UC: 1, LH: -2 } },
      { label: "事前にシチュエーション別にサイズを決めている", scores: { UC: -3, FD: -1 } },
    ],
  },
  // === AR軸（Aggressive vs Reserved）メイン ===
  {
    id: 8,
    text: "フロップでトップペアを持っていますが、ボードにフラッシュドローがあります。",
    choices: [
      { label: "大きくベットしてドローを追い出す", scores: { AR: 3, FD: 1 } },
      { label: "中程度のベットでバリューを取りつつポットコントロール", scores: { AR: 0, LH: 1 } },
      { label: "チェックしてターンの情報を待つ", scores: { AR: -3, FD: -1 } },
      { label: "相手次第でアクションを決める", scores: { AR: -1, LH: -1 } },
    ],
  },
  {
    id: 9,
    text: "ファイナルテーブルのバブル。あなたのスタンスは？",
    choices: [
      { label: "バブルファクターを利用して全員にプレッシャーをかける", scores: { AR: 3, UC: 2 } },
      { label: "確実にインマネーしてからギアを上げる", scores: { AR: -3, UC: -2 } },
      { label: "相手のスタックサイズに応じて攻め分ける", scores: { AR: 1, LH: 2 } },
      { label: "流れを見てその場で判断する", scores: { AR: 0, LH: -1 } },
    ],
  },
  {
    id: 10,
    text: "3ベットの頻度について、あなたに近いのは？",
    choices: [
      { label: "広いレンジで頻繁に3ベットする", scores: { AR: 3, UC: 1 } },
      { label: "プレミアムハンドとたまにブラフ3ベット", scores: { AR: 1, LH: 1 } },
      { label: "基本的にプレミアムハンドのみ", scores: { AR: -2, UC: -1 } },
      { label: "相手の傾向を見て3ベット頻度を変える", scores: { AR: 0, LH: -1 } },
    ],
  },
  {
    id: 11,
    text: "ヘッズアップで相手がタイトにプレーしています。あなたは？",
    choices: [
      { label: "あらゆるハンドでレイズしてプレッシャーをかけ続ける", scores: { AR: 3, UC: 2 } },
      { label: "少しレンジを広げつつバリューを重視する", scores: { AR: 1, LH: 1 } },
      { label: "自分もタイトに対応してプレミアムを待つ", scores: { AR: -2, UC: -2 } },
      { label: "相手のタイミングテルを探しながら仕掛ける", scores: { AR: 1, LH: -2 } },
    ],
  },
  {
    id: 12,
    text: "リバーでブラフキャッチの場面。あなたの傾向は？",
    choices: [
      { label: "相手がブラフしていると感じたらコールする", scores: { AR: 1, LH: -2 } },
      { label: "ポットオッズと相手のブラフ頻度を計算してから決める", scores: { AR: 0, LH: 3 } },
      { label: "基本的にフォールドして次のハンドに集中する", scores: { AR: -3, FD: 1 } },
      { label: "レイズしてブラフを返す", scores: { AR: 3, UC: 3 } },
    ],
  },
  {
    id: 13,
    text: "ポストフロップでのCベット（継続ベット）について。",
    choices: [
      { label: "ほぼ100%の頻度でCベットする", scores: { AR: 3, UC: 1 } },
      { label: "ボードテクスチャに応じて頻度を変える", scores: { AR: 1, LH: 2 } },
      { label: "ヒットした時だけベットすることが多い", scores: { AR: -3, UC: -2 } },
      { label: "相手のリアクションを見てから決める", scores: { AR: -1, FD: -1 } },
    ],
  },
  {
    id: 14,
    text: "マルチウェイポットでの戦い方は？",
    choices: [
      { label: "それでも積極的にベットしてフォールドエクイティを取る", scores: { AR: 3, UC: 2 } },
      { label: "ハンドの強さに応じてバリュー重視で打つ", scores: { AR: 1, LH: 2 } },
      { label: "基本的にチェックしてポットをコントロールする", scores: { AR: -2, FD: -1 } },
      { label: "他のプレーヤーの動きを見てからアクションを決める", scores: { AR: -1, LH: -1 } },
    ],
  },
  // === LH軸（Logical vs Holistic）メイン ===
  {
    id: 15,
    text: "大きな判断を下す時、最も頼りにするのは？",
    choices: [
      { label: "確率計算とポットオッズ", scores: { LH: 3, FD: -1 } },
      { label: "相手の表情やベットのタイミング", scores: { LH: -3, FD: 1 } },
      { label: "これまでの相手のプレーパターン", scores: { LH: 1, FD: -1 } },
      { label: "その場の直感と経験則", scores: { LH: -2, FD: 2 } },
    ],
  },
  {
    id: 16,
    text: "ポーカーの勉強方法として最も重視するのは？",
    choices: [
      { label: "ソルバーやGTOツールでの分析", scores: { LH: 3, FD: -2 } },
      { label: "実践での経験と振り返り", scores: { LH: -1, FD: 1 } },
      { label: "上手いプレーヤーのプレーを観察する", scores: { LH: -2, AR: 0 } },
      { label: "コーチングやトレーニングサイト", scores: { LH: 1, UC: -1 } },
    ],
  },
  {
    id: 17,
    text: "相手のハンドを読む時のアプローチは？",
    choices: [
      { label: "レンジを論理的に絞り込んでいく", scores: { LH: 3, FD: -1 } },
      { label: "相手の雰囲気やテルから推測する", scores: { LH: -3, UC: 1 } },
      { label: "過去のプレーパターンから推測する", scores: { LH: 1, FD: -1 } },
      { label: "何となくこのハンドだろうと感じる", scores: { LH: -2, FD: 2 } },
    ],
  },
  {
    id: 18,
    text: "セッション後の振り返りでは何を重視する？",
    choices: [
      { label: "EV計算やハンドヒストリーの数値分析", scores: { LH: 3, FD: -2 } },
      { label: "自分の精神状態や感情の変化", scores: { LH: -2, UC: 0 } },
      { label: "キーハンドでの判断プロセス", scores: { LH: 1, FD: -1 } },
      { label: "テーブル全体の雰囲気や流れ", scores: { LH: -3, AR: 0 } },
    ],
  },
  {
    id: 19,
    text: "ドローを追う判断基準は？",
    choices: [
      { label: "インプライドオッズを含めた期待値計算", scores: { LH: 3, AR: 0 } },
      { label: "来そうな感じがするかどうか", scores: { LH: -3, FD: 2 } },
      { label: "ポットオッズが合っているかだけ見る", scores: { LH: 2, AR: -1 } },
      { label: "相手が何を持っているかの読みで判断する", scores: { LH: -1, FD: -1 } },
    ],
  },
  {
    id: 20,
    text: "テーブルで最も注目する情報は？",
    choices: [
      { label: "スタックサイズとポットオッズ", scores: { LH: 3, AR: 0 } },
      { label: "相手の表情・仕草・雰囲気", scores: { LH: -3, UC: 1 } },
      { label: "ベットサイジングのパターン", scores: { LH: 2, FD: -1 } },
      { label: "テーブル全体の空気感と流れ", scores: { LH: -2, UC: 0 } },
    ],
  },
  {
    id: 21,
    text: "ブラフをする理由として最も当てはまるのは？",
    choices: [
      { label: "計算上フォールドエクイティが十分にあるから", scores: { LH: 3, AR: 1 } },
      { label: "相手が弱気に見えたから", scores: { LH: -3, AR: 1 } },
      { label: "バランスのために一定頻度でブラフを混ぜている", scores: { LH: 2, UC: 0 } },
      { label: "今なら通る気がしたから", scores: { LH: -2, FD: 2 } },
    ],
  },
  // === FD軸（Fast vs Deliberate）メイン ===
  {
    id: 22,
    text: "大きなポットでのリバーの判断。あなたのスタイルは？",
    choices: [
      { label: "数秒で決断する。考えすぎはテルになる", scores: { FD: 3, UC: 1 } },
      { label: "十分な時間を取って全ての情報を整理する", scores: { FD: -3, LH: 1 } },
      { label: "直感的に答えが出ていれば即座に、迷ったら時間をかける", scores: { FD: 1, LH: -1 } },
      { label: "常に一定のペースで判断するようにしている", scores: { FD: -1, UC: -1 } },
    ],
  },
  {
    id: 23,
    text: "タイムバンクの使い方は？",
    choices: [
      { label: "ほとんど使わない。即断即決が信条", scores: { FD: 3, AR: 1 } },
      { label: "重要な場面では必ず使い切る", scores: { FD: -3, LH: 1 } },
      { label: "演技として使うことがある", scores: { FD: 1, UC: 2 } },
      { label: "本当に悩んだ時だけ使う", scores: { FD: -1, LH: 0 } },
    ],
  },
  {
    id: 24,
    text: "プリフロップのオープンレイズの判断速度は？",
    choices: [
      { label: "ハンドを見た瞬間にアクションが決まっている", scores: { FD: 3, LH: -1 } },
      { label: "テーブル状況を確認してから判断する", scores: { FD: -2, LH: 1 } },
      { label: "ポジション・スタック・相手を毎回チェックする", scores: { FD: -3, LH: 2 } },
      { label: "感覚的にすぐ決まるが、たまに深く考える", scores: { FD: 1, LH: -1 } },
    ],
  },
  {
    id: 25,
    text: "マルチテーブルでのプレーについて。",
    choices: [
      { label: "多面打ちが得意。判断が速いから問題ない", scores: { FD: 3, UC: 0 } },
      { label: "1〜2テーブルでじっくり集中したい", scores: { FD: -3, LH: 1 } },
      { label: "慣れたステークスなら多面でも大丈夫", scores: { FD: 1, UC: -1 } },
      { label: "多面だと直感が鈍る気がする", scores: { FD: -1, LH: -2 } },
    ],
  },
  {
    id: 26,
    text: "新しい戦略やコンセプトを学んだ時、実戦に取り入れるタイミングは？",
    choices: [
      { label: "すぐに試す。実戦で覚えるのが一番", scores: { FD: 3, UC: 1 } },
      { label: "練習してから段階的に取り入れる", scores: { FD: -3, LH: 1 } },
      { label: "状況が来たら使ってみる", scores: { FD: 1, UC: 0 } },
      { label: "完全に理解してから使いたい", scores: { FD: -2, LH: 2 } },
    ],
  },
  {
    id: 27,
    text: "ショートスタックになった時の対応は？",
    choices: [
      { label: "すぐにオールインの機会を探す", scores: { FD: 3, AR: 2 } },
      { label: "最適なオールインレンジを計算してから動く", scores: { FD: -2, LH: 2 } },
      { label: "相手を選んでプッシュする", scores: { FD: 0, AR: 1 } },
      { label: "もう少し良いスポットが来るまで待つ", scores: { FD: -3, AR: -2 } },
    ],
  },
  {
    id: 28,
    text: "ポーカーにおける「運」についてのあなたの考えは？",
    choices: [
      { label: "短期的には運、長期的には実力。運は気にしない", scores: { FD: 1, LH: 2 } },
      { label: "流れや勢いは確実にある。それを感じ取ることが大事", scores: { FD: -1, LH: -3 } },
      { label: "運は分散。十分なサンプルがあれば収束する", scores: { FD: -1, LH: 3 } },
      { label: "運が悪い時はスタイルを変えるべき", scores: { FD: 2, UC: 2 } },
    ],
  },
];
