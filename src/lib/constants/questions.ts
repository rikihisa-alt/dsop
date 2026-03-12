import type { Question } from "@/lib/types";

export const QUESTIONS: Question[] = [
  // === UC軸（Unpredictable vs Controlled）===
  {
    id: 1,
    text: "スーテッドコネクター。ポジションは微妙。さて、どうする？",
    choices: [
      { label: "ポジション？関係ない。レイズで仕掛ける", scores: { UC: 3, AR: 1 } },
      { label: "ポジションが良ければ参加、悪ければ降りる", scores: { UC: -2, LH: 1 } },
      { label: "安く見れるならリンプで覗きに行く", scores: { UC: -1, AR: -2 } },
      { label: "周りのプレーヤーの雰囲気次第で変える", scores: { UC: 2, LH: -2 } },
    ],
  },
  {
    id: 2,
    text: "3回連続ブラフして2回成功。また良さそうなスポットが来た。",
    choices: [
      { label: "ノってるからもう1発いく", scores: { UC: 3, FD: 2 } },
      { label: "さすがに警戒されてるからバリューに切り替える", scores: { UC: -2, LH: 2 } },
      { label: "ここはおとなしくする。やりすぎは禁物", scores: { UC: -3, AR: -1 } },
      { label: "相手のリアクション見てから考える", scores: { UC: 0, FD: -2 } },
    ],
  },
  {
    id: 3,
    text: "対戦相手からどう見られたい？",
    choices: [
      { label: "「こいつ何してくるかわからん」", scores: { UC: 3, AR: 1 } },
      { label: "「堅い。つけ入る隙がない」", scores: { UC: -3, LH: 1 } },
      { label: "「つかみどころがない」", scores: { UC: 2, LH: -1 } },
      { label: "「いつも冷静で崩れない」", scores: { UC: -2, FD: -1 } },
    ],
  },
  {
    id: 4,
    text: "新しいテーブルに座った。最初の30分どうする？",
    choices: [
      { label: "最初からガンガン参加してペースを作る", scores: { UC: 2, AR: 2 } },
      { label: "全員のクセを見切ってから動く", scores: { UC: -2, FD: -2 } },
      { label: "いつも通りのスタイルで淡々とやる", scores: { UC: -1, LH: 1 } },
      { label: "弱そうなヤツを嗅ぎ分けて狙い撃つ", scores: { UC: 1, LH: -2 } },
    ],
  },
  {
    id: 5,
    text: "トーナメント中盤、平均の2倍チップ持ってる。どう立ち回る？",
    choices: [
      { label: "この優位を活かしてテーブルを支配する", scores: { UC: 2, AR: 3 } },
      { label: "無理せず、今のポジションを守りながら進む", scores: { UC: -3, FD: -1 } },
      { label: "状況に合わせて攻守を柔軟に切り替える", scores: { UC: 0, LH: -1 } },
      { label: "ショートスタックを狩りに行く", scores: { UC: 1, AR: 1 } },
    ],
  },
  {
    id: 6,
    text: "ポットに対してオーバーベット。あなたの使い方は？",
    choices: [
      { label: "効くと思ったら遠慮なくぶっ放す", scores: { UC: 3, AR: 2 } },
      { label: "限られた場面でのみ、計算して使う", scores: { UC: -1, LH: 2 } },
      { label: "基本使わない。リスクに見合わない", scores: { UC: -3, AR: -2 } },
      { label: "相手がビビってるのが見えたら使う", scores: { UC: 2, LH: -2 } },
    ],
  },
  {
    id: 7,
    text: "ベットサイズ、どうやって決めてる？",
    choices: [
      { label: "相手を見ながら毎回変える。パターン化はしない", scores: { UC: 2, LH: -1 } },
      { label: "ポット比率を基準にして、理由あるサイジングをする", scores: { UC: -2, LH: 2 } },
      { label: "感覚で「このサイズが一番嫌だろうな」を選ぶ", scores: { UC: 1, LH: -2 } },
      { label: "状況別にサイズは事前に決めてある", scores: { UC: -3, FD: -1 } },
    ],
  },
  // === AR軸（Aggressive vs Reserved）===
  {
    id: 8,
    text: "フロップでトップペアヒット。でもボードはフラッシュドロー含み。",
    choices: [
      { label: "でかく打ってドロー勢を追い出す", scores: { AR: 3, FD: 1 } },
      { label: "中くらいのベットでバリューとプロテクション両取り", scores: { AR: 0, LH: 1 } },
      { label: "チェックでターンの情報をもらう", scores: { AR: -3, FD: -1 } },
      { label: "相手のタイプによってアクションを変える", scores: { AR: -1, UC: 1 } },
    ],
  },
  {
    id: 9,
    text: "ファイナルテーブルのバブル。あなたのスタンスは？",
    choices: [
      { label: "バブルは稼ぎ時。全員にプレッシャーかける", scores: { AR: 3, UC: 2 } },
      { label: "まずインマネを確保。その後攻める", scores: { AR: -3, UC: -2 } },
      { label: "相手のスタックを見て攻め先を選ぶ", scores: { AR: 1, LH: 2 } },
      { label: "普段通りのプレーを崩さない", scores: { AR: 0, FD: -1 } },
    ],
  },
  {
    id: 10,
    text: "3ベット。どのくらいの頻度で使ってる？",
    choices: [
      { label: "かなり広いレンジで積極的に3ベットする", scores: { AR: 3, UC: 1 } },
      { label: "プレミアムメインで、たまにブラフ混ぜる", scores: { AR: 1, LH: 1 } },
      { label: "基本プレミアムのみ。レンジは絞ってる", scores: { AR: -2, UC: -1 } },
      { label: "相手のオープンレンジに合わせて調整してる", scores: { AR: 0, LH: 2 } },
    ],
  },
  {
    id: 11,
    text: "ヘッズアップ。相手がやたらタイトに打ってる。",
    choices: [
      { label: "全ハンドでレイズ。ひたすら圧をかける", scores: { AR: 3, UC: 2 } },
      { label: "レンジを広げつつもバリューは意識する", scores: { AR: 1, LH: 1 } },
      { label: "こっちもタイトに合わせてプレミアムで仕留める", scores: { AR: -2, UC: -2 } },
      { label: "相手がほころぶタイミングを待って仕掛ける", scores: { AR: 1, FD: -2 } },
    ],
  },
  {
    id: 12,
    text: "リバーでブラフキャッチの局面。相手のベットは大きい。",
    choices: [
      { label: "感覚的にブラフ臭い。コールする", scores: { AR: 1, LH: -2 } },
      { label: "ポットオッズとブラフ頻度を計算して判断する", scores: { AR: 0, LH: 3 } },
      { label: "厳しそうなら無理しない。次に切り替える", scores: { AR: -3, FD: 1 } },
      { label: "逆にレイズして圧力を返す", scores: { AR: 3, UC: 3 } },
    ],
  },
  {
    id: 13,
    text: "プリフロップでレイズしてコールされた。フロップは空振り。Cベットする？",
    choices: [
      { label: "ほぼ必ず打つ。アグレッションは最大の武器", scores: { AR: 3, UC: 1 } },
      { label: "ボードの種類で判断。打つ時と打たない時がある", scores: { AR: 1, LH: 2 } },
      { label: "基本ヒットした時だけ。無駄弾は使わない", scores: { AR: -3, UC: -2 } },
      { label: "相手のプレー傾向に応じて決める", scores: { AR: -1, FD: -1 } },
    ],
  },
  {
    id: 14,
    text: "マルチウェイポット（3人以上）での立ち回りは？",
    choices: [
      { label: "人数関係ない。打つべきと思ったら打つ", scores: { AR: 3, UC: 2 } },
      { label: "ハンドの強さに忠実にバリュー重視で打つ", scores: { AR: 1, LH: 2 } },
      { label: "チェックでポットを抑えて慎重に進める", scores: { AR: -2, FD: -1 } },
      { label: "他の人のアクションを全部見てから最後に判断する", scores: { AR: -1, LH: -1 } },
    ],
  },
  // === LH軸（Logical vs Holistic）===
  {
    id: 15,
    text: "大事なポットでの最終判断。一番頼りにするのは？",
    choices: [
      { label: "オッズとアウツの計算結果", scores: { LH: 3, FD: -1 } },
      { label: "相手の表情やベットのリズム", scores: { LH: -3, FD: 1 } },
      { label: "ここまでの相手のアクション履歴", scores: { LH: 1, FD: -1 } },
      { label: "「なんかこっちだな」という勘", scores: { LH: -2, FD: 2 } },
    ],
  },
  {
    id: 16,
    text: "ポーカーの上達法として一番大事にしてるのは？",
    choices: [
      { label: "ソルバーやGTOツールでの研究", scores: { LH: 3, FD: -2 } },
      { label: "とにかく実戦。場数が一番の教科書", scores: { LH: -1, FD: 2 } },
      { label: "上手い人のプレーを観て盗む", scores: { LH: -2, AR: 0 } },
      { label: "コーチング動画やトレーニングサイトで体系的に学ぶ", scores: { LH: 1, UC: -1 } },
    ],
  },
  {
    id: 17,
    text: "相手のハンドを読むとき、どうアプローチする？",
    choices: [
      { label: "プリフロップからのアクションでレンジを論理的に絞る", scores: { LH: 3, FD: -1 } },
      { label: "仕草や表情から読み取る", scores: { LH: -3, UC: 1 } },
      { label: "これまでのプレー傾向・クセから推測する", scores: { LH: 1, FD: -1 } },
      { label: "なんとなく「これ持ってるだろ」と感じ取る", scores: { LH: -2, FD: 2 } },
    ],
  },
  {
    id: 18,
    text: "セッション後の振り返り。何を一番チェックする？",
    choices: [
      { label: "EV計算やハンドヒストリーを数値ベースで見直す", scores: { LH: 3, FD: -2 } },
      { label: "「あそこでメンタルブレたな」という精神面の反省", scores: { LH: -2, UC: 0 } },
      { label: "キーハンドでの自分の思考プロセスを確認する", scores: { LH: 1, FD: -1 } },
      { label: "その日のテーブル全体の雰囲気や運の流れ", scores: { LH: -3, AR: 0 } },
    ],
  },
  {
    id: 19,
    text: "ドローを追うかどうか、何で決める？",
    choices: [
      { label: "インプライドオッズ込みで期待値計算する", scores: { LH: 3, AR: 0 } },
      { label: "「引ける気がする」かどうか", scores: { LH: -3, FD: 2 } },
      { label: "ポットオッズが合ってるかどうかだけ確認する", scores: { LH: 2, AR: -1 } },
      { label: "相手が何を持ってそうかで判断する", scores: { LH: -1, FD: -1 } },
    ],
  },
  {
    id: 20,
    text: "テーブルで一番目が行く情報は？",
    choices: [
      { label: "各プレーヤーのスタックサイズとポット額", scores: { LH: 3, AR: 0 } },
      { label: "相手の表情、手の動き、姿勢の変化", scores: { LH: -3, UC: 1 } },
      { label: "ベットサイズの傾向やタイミングのパターン", scores: { LH: 2, FD: -1 } },
      { label: "テーブル全体の温度感や空気", scores: { LH: -2, UC: 0 } },
    ],
  },
  {
    id: 21,
    text: "ブラフする時の一番の理由は？",
    choices: [
      { label: "フォールドエクイティが数字的に十分だから", scores: { LH: 3, AR: 1 } },
      { label: "相手が弱気な空気を出してるから", scores: { LH: -3, AR: 1 } },
      { label: "バランスを保つために一定頻度で混ぜてる", scores: { LH: 2, UC: 0 } },
      { label: "「今なら通る」って直感が来たから", scores: { LH: -2, FD: 2 } },
    ],
  },
  // === FD軸（Fast vs Deliberate）===
  {
    id: 22,
    text: "でかいポット。リバーで難しい判断。あなたの判断スピードは？",
    choices: [
      { label: "数秒で決める。長考はテルになる", scores: { FD: 3, UC: 1 } },
      { label: "じっくり時間かけて情報を整理する", scores: { FD: -3, LH: 1 } },
      { label: "答えが見えてたらすぐ。迷ったら時間使う", scores: { FD: 1, LH: -1 } },
      { label: "いつも同じテンポで打つようにしてる", scores: { FD: -1, UC: -1 } },
    ],
  },
  {
    id: 23,
    text: "タイムバンク、どう使ってる？",
    choices: [
      { label: "ほぼ使わない。考える前に手が動いてる", scores: { FD: 3, AR: 1 } },
      { label: "大事な場面では必ずフルに使う", scores: { FD: -3, LH: 1 } },
      { label: "演技目的で使うことがある", scores: { FD: 1, UC: 2 } },
      { label: "マジで悩んだ時だけ", scores: { FD: -1, LH: 0 } },
    ],
  },
  {
    id: 24,
    text: "プリフロップ。ハンド見てからレイズ判断までの速さは？",
    choices: [
      { label: "ハンド見た瞬間にもう決まってる", scores: { FD: 3, LH: -1 } },
      { label: "テーブル状況をざっと見てから判断する", scores: { FD: -1, LH: 1 } },
      { label: "ポジション・スタック・相手を毎回チェックしてから", scores: { FD: -3, LH: 2 } },
      { label: "だいたい即決だけど、たまに立ち止まって考える", scores: { FD: 1, LH: -1 } },
    ],
  },
  {
    id: 25,
    text: "マルチテーブル（多面打ち）についてどう思う？",
    choices: [
      { label: "得意。判断早いから何面でもいける", scores: { FD: 3, UC: 0 } },
      { label: "1〜2面でじっくり集中したい", scores: { FD: -3, LH: 1 } },
      { label: "慣れてるレートなら多面でも問題なし", scores: { FD: 1, UC: -1 } },
      { label: "多面だと読みの精度が落ちるから好きじゃない", scores: { FD: -1, LH: -2 } },
    ],
  },
  {
    id: 26,
    text: "新しい戦略を覚えた。実戦に投入するタイミングは？",
    choices: [
      { label: "即投入。実戦で試すのが一番早い", scores: { FD: 3, UC: 1 } },
      { label: "まず練習で十分に固めてから段階的に使う", scores: { FD: -3, LH: 1 } },
      { label: "使えそうな場面が来たら自然に使う", scores: { FD: 1, UC: 0 } },
      { label: "理論を完全に理解するまでは使わない", scores: { FD: -2, LH: 2 } },
    ],
  },
  {
    id: 27,
    text: "ショートスタックに追い込まれた。どう対応する？",
    choices: [
      { label: "即座にオールインのチャンスを探す", scores: { FD: 3, AR: 2 } },
      { label: "プッシュレンジを計算してから動く", scores: { FD: -2, LH: 2 } },
      { label: "弱い相手を選んでぶつけに行く", scores: { FD: 0, AR: 1 } },
      { label: "もう少し良いハンドが来るまで粘る", scores: { FD: -3, AR: -2 } },
    ],
  },
  {
    id: 28,
    text: "ポーカーにおける「運」。あなたの考えは？",
    choices: [
      { label: "短期は運ゲー、長期は実力。気にしても仕方ない", scores: { FD: 1, LH: 2 } },
      { label: "流れは確実にある。それを感じ取るのも実力", scores: { FD: -1, LH: -3 } },
      { label: "運は分散。サンプル数が増えれば収束する", scores: { FD: -1, LH: 3 } },
      { label: "ツイてない時はスタイル変えるべき", scores: { FD: 2, UC: 2 } },
    ],
  },
];
