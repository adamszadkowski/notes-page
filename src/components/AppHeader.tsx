import { Menu, Music2 } from "lucide-react";
import styles from "./AppHeader.module.css";

interface Props {
  onMenuClick: () => void;
  songTitle?: string;
}

export function AppHeader({ onMenuClick, songTitle }: Props) {
  return (
    <header className={styles.header}>
      <button
        className={styles.menuButton}
        onClick={onMenuClick}
        aria-label="Otwórz menu"
      >
        <Menu size={22} />
      </button>
      <div className={styles.titleArea}>
        <Music2 size={18} className={styles.icon} />
        <span className={styles.title}>{songTitle ?? "Nuty"}</span>
      </div>
    </header>
  );
}
