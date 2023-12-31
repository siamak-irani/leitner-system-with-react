export type Partition = {
  size: number;
  isEmpty: boolean;
};

export type Cell = Partition[];

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
  active_cell?: number;
  selected_word_index?: number;
  current_word_index?: number;
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
