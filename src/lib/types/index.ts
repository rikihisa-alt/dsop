export type Axis = "UC" | "AR" | "LH" | "FD";

export type Score = Record<Axis, number>;

export type Choice = {
  label: string;
  scores: Partial<Score>;
};

export type Question = {
  id: number;
  text: string;
  choices: Choice[];
};

export type PokerType = {
  code: string;
  nameEn: string;
  nameJa: string;
  tagline: string;
  description: string;
  strengths: string[];
  weaknesses: string[];
  paidDescription?: string;
  paidStrategies?: string[];
  paidCompatibility?: string[];
};

export type QuizResult = {
  id?: string;
  userId?: string;
  score: Score;
  typeCode: string;
  createdAt?: string;
};

export type User = {
  id: string;
  email: string;
  name: string;
  image?: string;
  isPurchased: boolean;
  results: QuizResult[];
};
