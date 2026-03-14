import { SongTitle } from "./components/SongTitle";
import { NotesPage } from "./components/NotesPage";
import { useSongsStore, selectCurrentSong } from "./stores/songs";
import styles from "./App.module.css";

export function App() {
  const currentSong = useSongsStore(selectCurrentSong);

  return (
    <main className={styles.main}>
      <section className={styles.song}>
        <SongTitle />
        {currentSong != null && <NotesPage song={currentSong} />}
      </section>
    </main>
  );
}
