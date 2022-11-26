export interface Song {
  id: string;
  title: string;
  notesInRow: number;
  notes: Array<Note>;
}

export interface Note {
  note: string;
  syllable: string;
}
