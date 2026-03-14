import { BaseNote } from "./BaseNote";
import styles from "./SingleNote.module.css";

interface Props {
  note: string;
  syllable: string;
  isPartial: boolean;
}

const UP_PATH =
  "M128.4,189.3L233.4,89c5.8-6,13.7-9,22.4-9c8.7,0,16.5,3,22.4,9l105.4,100.3c12.5,11.9,12.5,31.3,0,43.2 c-12.5,11.9-32.7,11.9-45.2,0L288,184.4v217c0,16.9-14.3,30.6-32,30.6c-17.7,0-32-13.7-32-30.6v-217l-50.4,48.2  c-12.5,11.9-32.7,11.9-45.2,0C115.9,220.6,115.9,201.3,128.4,189.3z";

const DOWN_PATH =
  "M383.6,322.7L278.6,423c-5.8,6-13.7,9-22.4,9c-8.7,0-16.5-3-22.4-9L128.4,322.7c-12.5-11.9-12.5-31.3,0-43.2 c12.5-11.9,32.7-11.9,45.2,0l50.4,48.2v-217c0-16.9,14.3-30.6,32-30.6c17.7,0,32,13.7,32,30.6v217l50.4-48.2  c12.5-11.9,32.7-11.9,45.2,0C396.1,291.4,396.1,310.7,383.6,322.7z";

export function SingleNote({ note, syllable, isPartial }: Props) {
  const hasOctave = note.endsWith("+") || note.endsWith("-");
  const strippedNote = hasOctave ? note.slice(0, -1) : note;

  const arrow = hasOctave ? (
    <div className={styles.arrow}>
      <svg viewBox="0 0 512 512">
        <path d={note.endsWith("+") ? UP_PATH : DOWN_PATH} />
      </svg>
    </div>
  ) : undefined;

  return (
    <div>
      <BaseNote
        note={strippedNote}
        isPartial={isPartial}
        arrow={arrow}
        syllable={syllable}
      />
    </div>
  );
}
