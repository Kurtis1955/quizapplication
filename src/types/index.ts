export interface AppContextProviderProps {
    children: React.ReactNode;
}

export type QuizDataProps = {
  icon: string,
  questions: {
    answer: string,
    options: ["string", "string", "string", "string"],
    question: string,
  }[],
  title: string;
}[]


export type AppContextType =  {
  isSelected: boolean;
  setIsSelected: React.Dispatch<React.SetStateAction<boolean>>;
  quiz: QuizDataProps;
}
