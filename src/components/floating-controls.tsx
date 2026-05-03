
import { IconLayoutGrid, IconArrowsShuffle } from "@tabler/icons-react";

interface FloatingControlsProps {
  onOpenPicker: () => void;
  onShuffle: () => void;
}

export default function FloatingControls({
  onOpenPicker,
  onShuffle,
}: FloatingControlsProps) {
  return (
    <div className="fixed bottom-4 right-4 z-40 flex items-center gap-2 md:bottom-6 md:right-6">
      <button
        onClick={onShuffle}
        className="flex h-11 w-11 items-center justify-center rounded-full bg-black/80 text-white shadow-lg backdrop-blur-md transition-all hover:scale-110 hover:bg-black active:scale-95 md:h-14 md:w-14"
        title="Shuffle to random design"
        aria-label="Shuffle to random design"
      >
        <IconArrowsShuffle size={20} className="md:h-[22px] md:w-[22px]" />
      </button>

      <button
        onClick={onOpenPicker}
        className="flex h-11 items-center gap-2 rounded-full bg-black/80 px-4 text-white shadow-lg backdrop-blur-md transition-all hover:bg-black active:scale-95 md:h-14 md:px-5"
        title="Browse all designs"
        aria-label="Browse all designs"
      >
        <IconLayoutGrid size={18} className="md:h-5 md:w-5" />
        <span className="text-xs font-semibold md:text-sm">Designs</span>
      </button>
    </div>
  );
}
