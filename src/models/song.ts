export interface Song {
  title: string;
  notesInRow: number;
  notes: Array<Note>;
}

export interface Note {
  note: string;
  syllable: string;
}
