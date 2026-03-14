import { useState } from "react";
import { useParams } from "react-router-dom";
import { Music2, PanelLeftOpen } from "lucide-react";
import { Sidebar } from "./components/Sidebar";
import { AppHeader } from "./components/AppHeader";
import { NotesPage } from "./components/NotesPage";
import { useSongsStore } from "./stores/songs";
import { Button } from "./components/ui/button";

export function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [desktopSidebarVisible, setDesktopSidebarVisible] = useState(true);
  const { id } = useParams<{ id?: string }>();
  const songs = useSongsStore((state) => state.songs);
  const currentSong = id ? (songs.find((s) => s.id === id) ?? null) : null;

  return (
    <div className="flex min-h-screen print:min-h-0 print:h-auto">
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        desktopVisible={desktopSidebarVisible}
        onDesktopToggle={() => setDesktopSidebarVisible((v) => !v)}
      />

      <div className={`flex-1 flex flex-col min-w-0 transition-[margin] duration-300 ease-in-out print:ml-0 ${desktopSidebarVisible ? "md:ml-[260px]" : "md:ml-0"}`}>
        <AppHeader
          onMenuClick={() => setSidebarOpen(true)}
          songTitle={currentSong?.title}
        />

        {!desktopSidebarVisible && (
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setDesktopSidebarVisible(true)}
            aria-label="Otwórz sidebar"
            className="hidden md:flex print:hidden fixed top-3 left-3 z-50 text-slate-500 hover:bg-slate-100"
          >
            <PanelLeftOpen size={20} />
          </Button>
        )}

        <div className="p-8 w-full max-w-[900px] mx-auto md:p-8 max-md:px-4 max-md:py-5 print:max-w-none print:p-0">
          {currentSong != null ? (
            <>
              <h1 className="text-[1.75rem] font-bold mb-7 text-slate-900 max-md:text-[1.4rem] max-md:mb-5 text-center">
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
