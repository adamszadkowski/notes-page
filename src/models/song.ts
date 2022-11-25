export interface Song {
  title: string;
  notes: Array<Note>;
}

export interface Note {
  note: string;
  syllable: string;
}
