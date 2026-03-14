import { useState } from "react";
import { useParams } from "react-router-dom";
import { Music2 } from "lucide-react";
import { Sidebar } from "./components/Sidebar";
import { AppHeader } from "./components/AppHeader";
import { NotesPage } from "./components/NotesPage";
import { useSongsStore } from "./stores/songs";
import styles from "./App.module.css";

export function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { id } = useParams<{ id?: string }>();
  const songs = useSongsStore((state) => state.songs);
  const currentSong = id ? (songs.find((s) => s.id === id) ?? null) : null;

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
