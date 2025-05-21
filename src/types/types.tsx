export type QuestionType = {
  question: string;
  options: string[];
  correctOption: number;
  points: number;
};

export type State = {
  questions: QuestionType[];
  status: "loading" | "error" | "ready" | "active" | "finished";
  index: number;
  answer: number | null;
  points: number;
  highScore: number;
  remainingSeconds: number | null;
};

export type Action =
  | { type: "dataReceived"; payload: QuestionType[] }
  | { type: "dataFailed" }
  | { type: "start" }
  | { type: "newAnswer"; payload: number }
  | { type: "nextQuestion" }
  | { type: "finish" }
  | { type: "restart" }
  | { type: "tick" };

export type NextButtonProps = {
  dispatch: React.Dispatch<Action>;
  answer: number | null;
  index: number;
  numOfQuestions: number;
};

export type OptionsProps = {
  question: QuestionType;
  dispatch: React.Dispatch<Action>;
  answer: number | null;
};

export type ProgressProps = {
  index: number;
  numOfQuestions: number;
  points: number;
  maxPoints: number;
  answer: number | null;
};

export type QuestionProps = {
  question: QuestionType;
  dispatch: React.Dispatch<Action>;
  answer: number | null;
};

export type StartScreenProps = {
  numOfQuestions: number;
  dispatch: React.Dispatch<Action>;
};

export type TimerProps = {
  dispatch: React.Dispatch<Action>;
  remainingSeconds: number;
};
