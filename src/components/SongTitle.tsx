import { useState } from "react";
import { useSongsStore, selectCurrentSong } from "@/stores/songs";
import styles from "./SongTitle.module.css";

export function SongTitle() {
  const [isVisible, setIsVisible] = useState(false);
  const songs = useSongsStore((state) => state.songs);
  const selectSongById = useSongsStore((state) => state.selectSongById);
  const currentSong = useSongsStore(selectCurrentSong);

  const currentSongTitle = currentSong?.title ?? "Wybierz piosenkę";

  function handleSelect(id: string) {
    selectSongById(id);
    setIsVisible(false);
  }

  return (
    <section className={styles.songTitle}>
      <h1 className={styles.header}>
        <a
          className={styles.link}
          onClick={() => setIsVisible((v) => !v)}
          role="button"
        >
          {currentSongTitle}&nbsp;
        </a>
      </h1>
      {isVisible && (
        <div className={styles.dropdown}>
          <ul>
            {songs.map((song) => (
              <li key={song.id} onClick={() => handleSelect(song.id)}>
                {song.title}
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
