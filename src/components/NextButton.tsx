import { NextButtonProps } from "../types/types";
import React from "react";

const NextButton: React.FC<NextButtonProps> = ({
  dispatch,
  answer,
  index,
  numOfQuestions,
}) => {
  if (answer === null) return null;

  if (index < numOfQuestions - 1) {
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );
  }

  if (index === numOfQuestions - 1) {
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finish" })}
      >
        Finish
      </button>
    );
  }

  return null;
};

export default NextButton;
