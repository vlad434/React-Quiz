import { useEffect, useReducer } from "react";
import Header from "./Header";
import MainSection from "./MainSection";

const initialState = {
  questions: [],
  // 'loading' , 'error' , 'ready' , 'active' , 'finished'
  status: "loading",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFailed":
      return { ...state, status: "error" };
    default:
      throw new Error("Action unknown");
  }
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { questions, status } = state;

  useEffect(() => {
    fetch("http://localhost:8000/questions")
      .then((response) => response.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch(() => dispatch({ type: "dataFailed" }));
  });

  return (
    <div className="app">
      <Header />

      <MainSection>
        <p>1/15</p>
        <p>Question?</p>
      </MainSection>
    </div>
  );
}
