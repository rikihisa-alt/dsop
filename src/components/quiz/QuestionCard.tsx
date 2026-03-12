"use client";

import { motion, AnimatePresence } from "framer-motion";
import type { Question, Choice } from "@/lib/types";

type QuestionCardProps = {
  question: Question;
  onSelect: (choice: Choice) => void;
  selectedIndex: number | null;
};

export function QuestionCard({ question, onSelect, selectedIndex }: QuestionCardProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={question.id}
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -30 }}
        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        className="w-full max-w-2xl mx-auto"
      >
        <p className="text-base md:text-lg text-card-white/90 mb-10 leading-relaxed">
          {question.text}
        </p>

        <div className="flex flex-col gap-3">
          {question.choices.map((choice, index) => (
            <motion.button
              key={index}
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onSelect(choice)}
              className={`
                text-left px-5 py-4 rounded-sm border transition-all duration-200 text-sm
                ${
                  selectedIndex === index
                    ? "border-gold/60 bg-gold/10 text-gold"
                    : "border-card-white/5 bg-felt-dark/40 text-card-white/70 hover:border-card-white/15 hover:bg-felt-dark/60"
                }
              `}
            >
              <span className="inline-block w-6 text-[10px] font-mono text-card-white/20">
                {String.fromCharCode(65 + index)}.
              </span>
              {choice.label}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
