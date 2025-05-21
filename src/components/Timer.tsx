import { useEffect } from "react";
import { TimerProps } from "../types/types";

const Timer: React.FC<TimerProps> = ({ dispatch, remainingSeconds }) => {
  const mins = Math.floor(remainingSeconds / 60);
  const seconds = remainingSeconds % 60;
  useEffect(() => {
    const timer = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [dispatch]);

  return (
    <div className="timer">
      {mins < 10 && "0"}
      {mins}:{seconds < 10 && "0"}
      {seconds}
    </div>
  );
};

export default Timer;
