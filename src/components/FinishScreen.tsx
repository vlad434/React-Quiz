import { Action } from "../types/types";

type FinishScreenProps = {
  points: number;
  maxPoints: number;
  highScore: number;
  dispatch: React.Dispatch<Action>;
};

const FinishScreen: React.FC<FinishScreenProps> = ({
  points,
  maxPoints,
  highScore,
  dispatch,
}) => {
  const percentage = (points / maxPoints) * 100;

  let emoji: string | undefined;
  if (percentage === 100) emoji = "🥳";
  if (percentage >= 80 && percentage < 100) emoji = "😎";
  if (percentage >= 50 && percentage < 80) emoji = "😐";
  if (percentage >= 0 && percentage < 50) emoji = "😐";
  if (percentage === 0) emoji = "😢";

  return (
    <>
      <p className="result">
        <span>{emoji}</span>
        You scored <strong>{points}</strong> out of {maxPoints} (
        {Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(Highscore: {highScore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart quiz
      </button>
    </>
  );
};

export default FinishScreen;
