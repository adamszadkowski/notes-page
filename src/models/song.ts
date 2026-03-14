export interface Song {
  id: string;
  title: string;
  notesInRow: number;
  notes: Array<Note | null>;
}

export interface Note {
  note: string;
  syllable: string;
}
