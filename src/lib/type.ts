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
