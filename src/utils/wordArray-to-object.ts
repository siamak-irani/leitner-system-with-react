import { Word } from "../lib/type";

export const wordArraToObject = (wordArr: Word[]) => {
  let wordObj = {};
  wordArr.forEach((word) => {
    wordObj = { ...wordObj, [word.id]: word };
  });
  return wordObj;
};
