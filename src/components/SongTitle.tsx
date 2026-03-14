import { ChevronDown, Music2 } from "lucide-react";
import { useSongsStore, selectCurrentSong } from "@/stores/songs";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function SongTitle() {
  const songs = useSongsStore((state) => state.songs);
  const selectSongById = useSongsStore((state) => state.selectSongById);
  const currentSong = useSongsStore(selectCurrentSong);

  const currentSongTitle = currentSong?.title ?? "Wybierz piosenkę";

  return (
    <div className="flex items-center justify-center py-4">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="text-2xl font-bold gap-2 h-auto py-2 px-4"
          >
            <Music2 className="size-6 shrink-0" />
            {currentSongTitle}
            <ChevronDown className="size-5 shrink-0 opacity-60" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="center" className="w-64">
          {songs.map((song) => (
            <DropdownMenuItem
              key={song.id}
              onSelect={() => selectSongById(song.id)}
              data-current={song.id === currentSong?.id}
              className="text-base cursor-pointer data-[current=true]:font-semibold"
            >
              {song.title}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
