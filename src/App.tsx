import { useState } from "react";
import { useParams } from "react-router-dom";
import { Music2 } from "lucide-react";
import { Sidebar } from "./components/Sidebar";
import { AppHeader } from "./components/AppHeader";
import { NotesPage } from "./components/NotesPage";
import { useSongsStore } from "./stores/songs";

export function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { id } = useParams<{ id?: string }>();
  const songs = useSongsStore((state) => state.songs);
  const currentSong = id ? (songs.find((s) => s.id === id) ?? null) : null;

  return (
    <div className="flex min-h-screen">
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <div className="flex-1 flex flex-col min-w-0 md:ml-[260px]">
        <AppHeader
          onMenuClick={() => setSidebarOpen(true)}
          songTitle={currentSong?.title}
        />

        <div className="flex-1 p-8 max-w-[900px] md:p-8 max-md:px-4 max-md:py-5">
          {currentSong != null ? (
            <>
              <h1 className="text-[1.75rem] font-bold mb-7 text-slate-900 max-md:text-[1.4rem] max-md:mb-5">
                {currentSong.title}
              </h1>
              <NotesPage song={currentSong} />
            </>
          ) : (
            <div className="flex flex-col items-center justify-center h-[60vh] gap-4 text-slate-500 text-[0.95rem]">
              <Music2 size={48} className="text-slate-300" />
              <p>Wybierz piosenkę z menu po lewej stronie</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
