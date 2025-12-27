
export interface QuizItem {
  id: number;
  question: string;
  answer: string;
  category?: string;
}

export interface EssayTheme {
  id: number;
  title: string;
}

export interface GlossaryItem {
  term: string;
  english: string;
  definition: string;
}

export type View = 'home' | 'quiz' | 'essays' | 'glossary';
