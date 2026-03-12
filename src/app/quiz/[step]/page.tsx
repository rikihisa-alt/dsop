import { QuizStepClient } from "./QuizStepClient";

export const metadata = {
  title: "診断中 — DSOP",
};

export default async function QuizStepPage({
  params,
}: {
  params: Promise<{ step: string }>;
}) {
  const { step } = await params;
  return <QuizStepClient initialStep={parseInt(step, 10)} />;
}
