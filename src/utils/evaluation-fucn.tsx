import { normalizeString } from "./normalize-string";

export const evaluationFunc = (word: string, userAnswer: string) => {
  const unequalIndices: number[] = [];
  const minLength = Math.max(word.length, userAnswer.length);

  const normWord = normalizeString(word);
  const normUserAnswer = normalizeString(userAnswer);

  for (let i = 0; i < minLength; i++) {
    if (normWord[i] !== normUserAnswer[i]) {
      unequalIndices.push(i);
    }
  }

  const areEqual = unequalIndices.length === 0;

  const answerLetters = userAnswer.split("");

  const EvaluatedAnswer = (
    <span>
      {answerLetters.map((letter, index) => {
        const unequal = unequalIndices.some((i) => index === i);
        return (
          <span
            key={index}
            style={{
              background: unequal
                ? "var(--negative-red)"
                : "var(--positive-green)",
              color: "white",
              borderRadius: "1px",
              padding: "0 0.5px",
            }}
          >
            {letter}
          </span>
        );
      })}
    </span>
  );

  return {
    areEqual,
    EvaluatedAnswer,
  };
};
