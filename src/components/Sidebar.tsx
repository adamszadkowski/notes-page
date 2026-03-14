import { Music2, X } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { useSongsStore } from "@/stores/songs";
import styles from "./Sidebar.module.css";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: Props) {
  const songs = useSongsStore((state) => state.songs);
  const navigate = useNavigate();
  const { id: currentId } = useParams<{ id?: string }>();

  const handleSelect = (id: string) => {
    navigate(`/song/${id}`);
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div
          className={styles.overlay}
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      <aside
        className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}
        aria-label="Menu piosenek"
      >
        <div className={styles.sidebarHeader}>
          <div className={styles.logo}>
            <Music2 className={styles.logoIcon} size={20} />
            <span className={styles.logoText}>Nuty</span>
          </div>
          <button
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Zamknij menu"
          >
            <X size={18} />
          </button>
        </div>

        <nav className={styles.nav}>
          <p className={styles.navLabel}>Piosenki</p>
          <ul className={styles.songList}>
            {songs.map((song) => (
              <li key={song.id}>
                <button
                  className={`${styles.songItem} ${song.id === currentId ? styles.active : ""}`}
                  onClick={() => handleSelect(song.id)}
                  aria-current={song.id === currentId ? "true" : undefined}
                >
                  {song.title}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
}
