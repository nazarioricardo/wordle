import { getWordResults } from "../getWordResults";
import { LetterStatus } from "../constants";
const WORD = ["d", "e", "p", "o", "t"];
const ALL_CORRECT = [
  LetterStatus.CORRECT,
  LetterStatus.CORRECT,
  LetterStatus.CORRECT,
  LetterStatus.CORRECT,
  LetterStatus.CORRECT,
];
describe("getWordResults", () => {
  it("should get correct word", () => {
    const results = getWordResults(WORD, WORD);

    expect(results).toEqual(ALL_CORRECT);
  });
});
