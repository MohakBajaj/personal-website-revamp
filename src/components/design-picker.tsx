import { useEffect, useCallback } from "react";
import { IconX } from "@tabler/icons-react";
import { designsMeta } from "@/config/designs";
import DesignThumbnail from "@/components/design-thumbnail";

interface DesignPickerProps {
  isOpen: boolean;
  onClose: () => void;
  onStartTransition: (id: number | "default") => void;
}

export default function DesignPicker({
  isOpen,
  onClose,
  onStartTransition,
}: DesignPickerProps) {
  const handleEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleEscape]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 md:p-6"
      style={{ viewTransitionName: "none" }}
    >
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        role="dialog"
        aria-modal="true"
        className="relative z-10 flex max-h-[92vh] w-full max-w-5xl flex-col rounded-2xl bg-[#0a0a0a] shadow-2xl"
      >
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 md:px-6 md:py-4">
          <h2 className="text-sm font-bold tracking-wider text-white md:text-base">
            Select a Design
          </h2>
          <button
            onClick={onClose}
            className="rounded-full p-2 text-white/60 transition-colors hover:bg-white/10 hover:text-white"
            aria-label="Close picker"
          >
            <IconX size={20} />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-2 overflow-y-auto p-2 md:gap-3 md:p-4">
          <button
            onClick={() => onStartTransition("default")}
            className="group rounded-xl border-2 border-white/10 p-0 transition-all hover:border-white/30 hover:bg-white/10"
            data-design-thumb="default"
          >
            <div className="aspect-video w-full overflow-hidden rounded-[10px]">
              <DesignThumbnail designId="default" className="h-full w-full" />
            </div>
          </button>

          {designsMeta.map((d) => (
            <button
              key={d.id}
              onClick={() => onStartTransition(d.id)}
              className="group rounded-xl border-2 border-white/10 p-0 transition-all hover:scale-[1.02] hover:border-white/30 hover:bg-white/10"
              data-design-thumb={`${d.id}`}
            >
              <div className="aspect-video w-full overflow-hidden rounded-[10px]">
                <DesignThumbnail designId={d.id} className="h-full w-full" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
