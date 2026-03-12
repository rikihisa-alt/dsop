import { QuizStartClient } from "./QuizStartClient";

export const metadata = {
  title: "診断をはじめる — DSOP",
  description: "28問の質問に答えて、あなたのポーカー意思決定タイプを診断します。",
};

export default function QuizStartPage() {
  return <QuizStartClient />;
}
