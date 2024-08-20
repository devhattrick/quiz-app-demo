export type Option = {
    text: string;
    isCorrect: boolean;
  };
  
  export type Question = {
    question: string;
    options: Option[];
  };
  
  export type RootStackParamList = {
    Quiz: undefined;
    Result: { score: number };
  };
  