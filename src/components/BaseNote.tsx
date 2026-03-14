import type { ReactNode } from "react";
import { getNoteColors } from "@/utils/colorMapping";
import styles from "./BaseNote.module.css";

interface Props {
  note: string;
  isPartial: boolean;
  arrow?: ReactNode;
  syllable: string;
}

export function BaseNote({ note, isPartial, arrow, syllable }: Props) {
  const colors = getNoteColors(note);
  const colorStyle =
    colors.length === 1
      ? { backgroundColor: colors[0] }
      : {
          background: `linear-gradient(to right, ${colors[0]} 0%, ${colors[0]} 50%, ${colors[1]} 50%, ${colors[1]} 100%)`,
        };

  return (
    <div className={styles.note}>
      <div className={styles.icon} style={colorStyle}>
        {arrow}
      </div>
      <div
        className={`${styles.syllable}${isPartial ? ` ${styles.syllablePartial}` : ""}`}
      >
        {syllable}
      </div>
    </div>
  );
}
