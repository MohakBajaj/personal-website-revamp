
import { type ReactNode, useState } from "react";

type TooltipProps = {
  children: ReactNode;
  content: string;
  className?: string;
};

export default function Tooltip({ children, content, className }: TooltipProps) {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className={`relative inline-block ${className || ""}`}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onFocus={() => setVisible(true)}
      onBlur={() => setVisible(false)}
    >
      {children}
      {visible && (
        <div className="absolute left-1/2 top-full z-50 mt-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-black/80 px-3 py-1.5 text-xs text-white shadow-lg backdrop-blur-sm">
          {content}
          <div className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-black/80" />
        </div>
      )}
    </div>
  );
}
