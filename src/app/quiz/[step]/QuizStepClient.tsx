"use client";

import { useState, useCallback } from "react";
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
  const [currentStep, setCurrentStep] = useState(initialStep);
  const [score, setScore] = useState<Score>(createEmptyScore);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const question = QUESTIONS[currentStep - 1];
  const isLastQuestion = currentStep === QUESTIONS.length;

  const handleSelect = useCallback(
    (choice: Choice) => {
      const choiceIndex = question.choices.indexOf(choice);
      setSelectedIndex(choiceIndex);

      const newScore = addChoiceToScore(score, choice);
      setScore(newScore);

      setTimeout(() => {
        if (isLastQuestion) {
          const typeCode = calculateTypeCode(newScore);
          const typeData = getTypeByCode(typeCode);
          if (typeData) {
            if (typeof window !== "undefined") {
              sessionStorage.setItem("dsop_score", JSON.stringify(newScore));
              sessionStorage.setItem("dsop_type", typeCode);
            }
            router.push(`/result/${typeData.nameEn.toLowerCase()}`);
          }
        } else {
          setCurrentStep((prev) => prev + 1);
          setSelectedIndex(null);
        }
      }, 400);
    },
    [score, isLastQuestion, question, router]
  );

  if (!question) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-card-white/50">設問が見つかりません</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col px-6 py-8">
      <div className="max-w-2xl mx-auto w-full pt-12">
        <ProgressBar current={currentStep} total={QUESTIONS.length} />
        <p className="text-right mt-2 font-mono text-[10px] text-card-white/20 tracking-wider">
          Q{currentStep} / {QUESTIONS.length}
        </p>
      </div>

      <div className="flex-1 flex items-center justify-center py-12">
        <QuestionCard
          question={question}
          onSelect={handleSelect}
          selectedIndex={selectedIndex}
        />
      </div>

      <div className="text-center pb-8">
        <p className="text-[11px] font-mono text-card-white/15 tracking-wider">
          直感で答えてください
        </p>
      </div>
    </div>
  );
}
