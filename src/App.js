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
    console.log(key);
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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>

      {/* {[...Array(5)].map((n, index) => <Word key={index} index={index} />)} */}
    </div>
  );
}

export default App;
