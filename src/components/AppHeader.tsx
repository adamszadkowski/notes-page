import { Menu, Music2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props {
  onMenuClick: () => void;
  songTitle?: string;
}

export function AppHeader({ onMenuClick, songTitle }: Props) {
  return (
    <header className="flex md:hidden print:hidden items-center px-1 h-14 bg-background border-b shadow-xs sticky top-0 z-50 shrink-0">
      <Button
        variant="ghost"
        size="icon"
        onClick={onMenuClick}
        aria-label="Otwórz menu"
      >
        <Menu size={22} />
      </Button>
      <div className="flex items-center gap-2 min-w-0">
        <Music2 size={18} className="text-indigo-500 shrink-0" />
        <span className="text-base font-semibold text-foreground truncate">
          {songTitle ?? "Nuty"}
        </span>
      </div>
    </header>
  );
}
