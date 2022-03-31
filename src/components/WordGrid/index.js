import React from "react";
import Word from "../Word";

const WordGrid = ({ count, activeIndex, currentWord, guesses, results }) => {
  return (
    <div>
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
    </div>
  );
};

export default WordGrid;
