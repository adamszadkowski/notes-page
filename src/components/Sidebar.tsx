import { Music2, PanelLeftClose, Printer, X } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { useSongsStore } from "@/stores/songs";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  desktopVisible?: boolean;
  onDesktopToggle?: () => void;
}

export function Sidebar({ isOpen, onClose, desktopVisible = true, onDesktopToggle }: Props) {
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
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[99] md:hidden print:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      <aside
        className={cn(
          "fixed top-0 left-0 w-[260px] h-screen bg-slate-900 flex flex-col z-[100] transition-transform duration-300 ease-in-out print:hidden",
          isOpen ? "translate-x-0 shadow-[8px_0_30px_rgba(0,0,0,0.3)]" : "-translate-x-full",
          !isOpen && desktopVisible && "md:translate-x-0",
          !isOpen && !desktopVisible && "md:-translate-x-full"
        )}
        aria-label="Menu piosenek"
      >
        <div className="flex items-center justify-between px-4 pt-5 pb-4 border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <Music2 size={20} className="text-indigo-300" />
            <span className="text-[1.05rem] font-bold text-slate-100 tracking-tight">
              Nuty
            </span>
          </div>
          <Button
            variant="ghost"
            size="icon-sm"
            onClick={onClose}
            aria-label="Zamknij menu"
            className="md:hidden text-slate-500 hover:bg-slate-800 hover:text-slate-400"
          >
            <X size={18} />
          </Button>
          <Button
            variant="ghost"
            size="icon-sm"
            onClick={onDesktopToggle}
            aria-label="Ukryj sidebar"
            className="hidden md:flex text-slate-500 hover:bg-slate-800 hover:text-slate-400"
          >
            <PanelLeftClose size={18} />
          </Button>
        </div>

        <nav className="flex-1 overflow-y-auto py-3 px-2">
          <p className="text-[0.7rem] font-semibold uppercase tracking-widest text-slate-500 px-2 mb-1.5">
            Piosenki
          </p>
          <ul className="list-none m-0 p-0">
            {songs.map((song) => (
              <li key={song.id}>
                <button
                  className={cn(
                    "block w-full px-3 py-2 text-left text-sm text-slate-400 rounded-md transition-colors duration-150",
                    "hover:bg-slate-800 hover:text-slate-200",
                    song.id === currentId &&
                      "bg-indigo-950 text-indigo-300 font-semibold hover:bg-indigo-950 hover:text-indigo-200"
                  )}
                  onClick={() => handleSelect(song.id)}
                  aria-current={song.id === currentId ? "true" : undefined}
                >
                  {song.title}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="px-3 py-3 border-t border-slate-800 shrink-0">
          <Button
            variant="ghost"
            className="w-full justify-start gap-2 text-slate-400 hover:bg-slate-800 hover:text-slate-200"
            onClick={() => window.print()}
          >
            <Printer size={16} />
            <span className="text-sm">Drukuj</span>
          </Button>
        </div>
      </aside>
    </>
  );
}
