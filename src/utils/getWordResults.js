import { LetterStatus } from "./constants";

/**
 *  https://github.com/dgvai/wordle-algorithm/blob/master/wordle.js
 */

export const getWordResults = (target, guess) => {
  const targetCharsTaken = target.map((_) => false);

  const statuses = Array.from(Array(guess.length));

  /*
   Correct Cases
  */

  guess.forEach((letter, i) => {
    if (letter === target[i]) {
      statuses[i] = LetterStatus.CORRECT;
      targetCharsTaken[i] = true;
      return;
    }
  });

  /*
   Absent Cases
  */

  guess.forEach((letter, i) => {
    if (statuses[i]) return;

    if (!target.includes(letter)) {
      statuses[i] = LetterStatus.ABSENT;
      return;
    }

    /*
    Present Cases
    */

    const indexOfPresentChar = target.findIndex(
      (x, index) => x === letter && !targetCharsTaken[index]
    );

    if (indexOfPresentChar > -1) {
      statuses[i] = LetterStatus.PRESENT;
      targetCharsTaken[indexOfPresentChar] = true;
      return;
    } else {
      statuses[i] = LetterStatus.ABSENT;
      return;
    }
  });

  return statuses;
};
