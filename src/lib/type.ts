export type Partition = {
  size: number;
  isEmpty: boolean;
};

// export type Cell = Partition[];

export type Cell = Partial<{
  p1: WordMap;
  p2: WordMap;
  p3: WordMap;
  p4: WordMap;
  p5: WordMap;
}>;

export type WordMap = {
  [K in Word["id"]]: Word;
};

export type Word = {
  id: number;
  spelling: string;
  phonetic: string;
  translation: string;
  difficulty: number;
  free_dictionary_api: unknown;
};

export type PaginatedWordsData = {
  words: Word[];
  nextPage: number | null;
  prevPage: number | null;
};

export type Progress = {
  active_cell: CellNumber;
  selected_word_index: number;
  current_word_index: number;
};

export type PartitionCounts = {
  name: string;
  count: number;
};

export type CellCounts = {
  total: number;
  partitions: PartitionCounts[];
};

export type CellsCounts = {
  c1: CellCounts;
  c2: CellCounts;
  c3: CellCounts;
  c4: CellCounts;
  c5: CellCounts;
};

export type WordsCount = {
  entered: number;
  cells: CellsCounts;
  removed: number;
};

export type CustomElementProps<T extends keyof JSX.IntrinsicElements> =
  React.ComponentPropsWithoutRef<T> & {
    children?: React.ReactNode;
  };

export type CellNumber = 0 | 1 | 2 | 3 | 4 | 5;

export type ReviewMutateType = "AnswerIsTrue" | "AnswerIsNotTrue" | "FillArray";

// export type WordsObject = {
//   [key: number]: Word;
// };
