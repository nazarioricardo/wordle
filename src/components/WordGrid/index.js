import React from "react";
import Word from "../Word";
import { Div } from "./styles";
const WordGrid = ({ count, activeIndex, currentWord, guesses, results }) => {
  return (
    <Div>
      {[...Array(count)].map((n, index) => {
        const isActive = index === activeIndex;
        const isGuessed = index < activeIndex;
        const displayWord = () => {
          if (isActive && currentWord) {
            return currentWord;
          }

          if (isGuessed) {
            return guesses[index];
          }

          return "";
        };
        return (
          <Word
            key={index}
            index={index}
            word={displayWord()}
            result={results[index]}
            isActive={isActive}
            isGuessed={isGuessed}
          />
        );
      })}
    </Div>
  );
};

export default WordGrid;
