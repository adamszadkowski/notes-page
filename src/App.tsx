import { useState, useEffect } from "react";
import { Music2 } from "lucide-react";
import { Sidebar } from "./components/Sidebar";
import { AppHeader } from "./components/AppHeader";
import { NotesPage } from "./components/NotesPage";
import { useSongsStore, selectCurrentSong } from "./stores/songs";
import styles from "./App.module.css";

export function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const currentSong = useSongsStore(selectCurrentSong);
  const selectSongById = useSongsStore((state) => state.selectSongById);

  useEffect(() => {
    const base = import.meta.env.BASE_URL;
    const path = window.location.pathname;
    const rel = path.startsWith(base) ? path.slice(base.length) : path.slice(1);
    const match = rel.match(/^song\/(.+)$/);
    if (match) {
      try {
        selectSongById(match[1]);
      } catch {
        // unknown song id — ignore
      }
    }
  }, []);

  useEffect(() => {
    const base = import.meta.env.BASE_URL;
    const newPath = currentSong ? `${base}song/${currentSong.id}` : base;
    history.replaceState(null, "", newPath);
  }, [currentSong?.id]);

  return (
    <div className={styles.layout}>
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <div className={styles.main}>
        <AppHeader
          onMenuClick={() => setSidebarOpen(true)}
          songTitle={currentSong?.title}
        />

        <div className={styles.content}>
          {currentSong != null ? (
            <>
              <h1 className={styles.songTitle}>{currentSong.title}</h1>
              <NotesPage song={currentSong} />
            </>
          ) : (
            <div className={styles.empty}>
              <Music2 size={48} className={styles.emptyIcon} />
              <p>Wybierz piosenkę z menu po lewej stronie</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
