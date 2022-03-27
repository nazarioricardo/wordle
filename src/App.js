import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addLetter, removeLetter } from "./store/wordSlice";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Word from "./components/Word";
import { isBackspace, isLetter } from "./utils";

function App() {
  const dispatch = useDispatch();
  const onKeyPressed = (event) => {
    const { key } = event;
    if (isLetter(key)) {
      dispatch(addLetter(key));
    }

    if (isBackspace(key)) {
      dispatch(removeLetter());
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", onKeyPressed);

    return () => {
      document.removeEventListener("keydown", onKeyPressed);
    };
  }, []);

  return (
    <div className="App">
      {[...Array(5)].map((n, index) => (
        <Word key={index} />
      ))}
    </div>
  );
}

export default App;
