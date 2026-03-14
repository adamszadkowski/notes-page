import type { Song } from "@/models/song";
import { SingleNote } from "./SingleNote";
import styles from "./NotesPage.module.css";

interface Props {
  song: Song;
}

export function NotesPage({ song }: Props) {
  const notes = song.notes.map((n) => {
    if (n == null) return null;
    return {
      note: n.note,
      syllable: n.syllable.replace(/-$/, ""),
      isPartial: n.syllable.endsWith("-"),
    };
  });

  return (
    <section
      className={styles.notesPage}
      style={{ gridTemplateColumns: `repeat(${song.notesInRow}, 1fr)` }}
    >
      {notes.map((note, index) =>
        note != null ? (
          <SingleNote
            key={index}
            note={note.note}
            syllable={note.syllable}
            isPartial={note.isPartial}
          />
        ) : (
          <div key={index} />
        )
      )}
    </section>
  );
}
