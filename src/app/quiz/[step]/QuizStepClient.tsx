"use client";

import { useState, useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";
import { QUESTIONS } from "@/lib/constants/questions";
import { createEmptyScore, addChoiceToScore, calculateTypeCode } from "@/features/quiz/scorer";
import { getTypeByCode } from "@/lib/constants/types";
import { ProgressBar } from "@/components/quiz/ProgressBar";
import { QuestionCard } from "@/components/quiz/QuestionCard";
import type { Choice, Score } from "@/lib/types";

type QuizStepClientProps = {
  initialStep: number;
};

export function QuizStepClient({ initialStep }: QuizStepClientProps) {
  const router = useRouter();
  const safeInitial = Number.isFinite(initialStep) && initialStep >= 1 ? initialStep : 1;
  const [currentStep, setCurrentStep] = useState(safeInitial);
  const [score, setScore] = useState<Score>(createEmptyScore);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const question = QUESTIONS[currentStep - 1];
  const isLastQuestion = currentStep === QUESTIONS.length;

  // 範囲外の場合は診断開始ページへリダイレクト
  useEffect(() => {
    if (!question && !isTransitioning) {
      router.replace("/quiz/start");
    }
  }, [question, isTransitioning, router]);

  const handleSelect = useCallback(
    (choice: Choice) => {
      if (isTransitioning) return;

      const choiceIndex = question.choices.indexOf(choice);
      setSelectedIndex(choiceIndex);

      const newScore = addChoiceToScore(score, choice);
      setScore(newScore);

      setTimeout(() => {
        if (isLastQuestion) {
          setIsTransitioning(true);
          const typeCode = calculateTypeCode(newScore);
          const typeData = getTypeByCode(typeCode);
          if (typeof window !== "undefined") {
            sessionStorage.setItem("dsop_score", JSON.stringify(newScore));
            sessionStorage.setItem("dsop_type", typeCode);
          }
          const slug = typeData
            ? typeData.nameEn.toLowerCase()
            : "strategist";
          router.push(`/result/${slug}`);
        } else {
          setCurrentStep((prev) => prev + 1);
          setSelectedIndex(null);
        }
      }, 400);
    },
    [score, isLastQuestion, question, router, isTransitioning]
  );

  if (!question) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-6 h-6 border-2 border-gold/30 border-t-gold animate-spin rounded-full" />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col px-4 md:px-6 py-6 md:py-8">
      <div className="max-w-2xl mx-auto w-full pt-8 md:pt-12">
        <ProgressBar current={currentStep} total={QUESTIONS.length} />
        <p className="text-right mt-1.5 font-mono text-[10px] text-card-white/20 tracking-wider">
          Q{currentStep} / {QUESTIONS.length}
        </p>
      </div>

      <div className="flex-1 flex items-center justify-center py-6 md:py-12">
        <QuestionCard
          question={question}
          onSelect={handleSelect}
          selectedIndex={selectedIndex}
        />
      </div>

      <div className="text-center pb-6 md:pb-8">
        <p className="text-[10px] md:text-[11px] font-mono text-card-white/15 tracking-wider">
          直感で答えてください
        </p>
      </div>
    </div>
  );
}
