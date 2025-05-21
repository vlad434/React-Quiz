import React from "react";
import { ProgressProps } from "../types/types";

const Progress: React.FC<ProgressProps> = ({
  index,
  numOfQuestions,
  points,
  maxPoints,
  answer,
}) => {
  return (
    <header className="progress">
      <progress max={numOfQuestions} value={index + Number(answer !== null)} />

      <p>
        Question <strong>{index + 1}</strong> / {numOfQuestions}
      </p>

      <p>
        <strong>{points}</strong> / {maxPoints}
      </p>
    </header>
  );
};

export default Progress;
