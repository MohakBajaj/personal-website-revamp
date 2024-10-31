"use client";

import Tippy from "@tippyjs/react";
import { type ReactNode } from "react";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
import { cn } from "@/lib/utils";

type TooltipProps = {
  children: ReactNode;
  content: string;
  className?: string;
};

export default function Tooltip({
  children,
  content,
  className = "inline-block",
}: TooltipProps) {
  return (
    <Tippy
      content={content}
      arrow
      placement="bottom"
      animation="scale"
      theme="translucent"
      className={cn(className)}
    >
      <div>{children}</div>
    </Tippy>
  );
}
