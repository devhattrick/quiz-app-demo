import React, { createContext, useState, ReactNode } from 'react';
import { Question } from '../data/types';
import questions from '../data/questions';

interface QuizContextType {
  score: number;
  setScore: (score: number) => void;
  currentQuestionIndex: number;
  setCurrentQuestionIndex: (index: number) => void;
  questions: Question[];
}

const defaultContextValue: QuizContextType = {
  score: 0,
  setScore: () => {},
  currentQuestionIndex: 0,
  setCurrentQuestionIndex: () => {},
  questions,
};

export const QuizContext = createContext<QuizContextType>(defaultContextValue);

export const QuizProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [score, setScore] = useState<number>(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);

  return (
    <QuizContext.Provider
      value={{
        score,
        setScore,
        currentQuestionIndex,
        setCurrentQuestionIndex,
        questions,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};
