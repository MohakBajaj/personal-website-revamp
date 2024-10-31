"use client";
import { useEffect, useRef, useCallback } from "react";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const outlineRef = useRef<HTMLDivElement>(null);

  const toggleCursorSize = useCallback((enlarged: boolean) => {
    const dot = dotRef.current;
    const outline = outlineRef.current;
    if (!dot || !outline) return;

    dot.style.transform = `translate(-50%, -50%) scale(${enlarged ? 0.75 : 1})`;
    outline.style.transform = `translate(-50%, -50%) scale(${enlarged ? 1.5 : 1})`;
  }, []);

  const toggleCursorVisibility = useCallback((visible: boolean) => {
    const dot = dotRef.current;
    const outline = outlineRef.current;
    if (!dot || !outline) return;

    const opacity = visible ? "1" : "0";
    dot.style.opacity = opacity;
    outline.style.opacity = opacity;
  }, []);

  useEffect(() => {
    const dot = dotRef.current;
    const outline = outlineRef.current;

    if (!dot || !outline) return;

    let endX = window.innerWidth / 2;
    let endY = window.innerHeight / 2;
    let _x = 0;
    let _y = 0;
    const delay = 8;

    const animateDotOutline = () => {
      _x += (endX - _x) / delay;
      _y += (endY - _y) / delay;
      outline.style.top = _y + "px";
      outline.style.left = _x + "px";

      requestAnimationFrame(animateDotOutline);
    };

    // Event Listeners
    const mouseOverHandler = () => toggleCursorSize(true);
    const mouseOutHandler = () => toggleCursorSize(false);
    const mouseDownHandler = () => toggleCursorSize(true);
    const mouseUpHandler = () => toggleCursorSize(false);

    const mouseMoveHandler = (e: MouseEvent) => {
      toggleCursorVisibility(true);
      endX = e.pageX;
      endY = e.pageY;
      dot.style.top = endY + "px";
      dot.style.left = endX + "px";
    };

    const mouseEnterHandler = () => toggleCursorVisibility(true);
    const mouseLeaveHandler = () => toggleCursorVisibility(false);

    // Add event listeners
    const interactiveElements = document.querySelectorAll(
      "a, button, input, [role='button']"
    );
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseover", mouseOverHandler);
      el.addEventListener("mouseout", mouseOutHandler);
    });

    document.addEventListener("mousedown", mouseDownHandler);
    document.addEventListener("mouseup", mouseUpHandler);
    document.addEventListener("mousemove", mouseMoveHandler);
    document.addEventListener("mouseenter", mouseEnterHandler);
    document.addEventListener("mouseleave", mouseLeaveHandler);

    // Start animation
    const animationFrame = requestAnimationFrame(animateDotOutline);

    // Cleanup
    return () => {
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseover", mouseOverHandler);
        el.removeEventListener("mouseout", mouseOutHandler);
      });

      document.removeEventListener("mousedown", mouseDownHandler);
      document.removeEventListener("mouseup", mouseUpHandler);
      document.removeEventListener("mousemove", mouseMoveHandler);
      document.removeEventListener("mouseenter", mouseEnterHandler);
      document.removeEventListener("mouseleave", mouseLeaveHandler);

      cancelAnimationFrame(animationFrame);
    };
  }, [toggleCursorSize, toggleCursorVisibility]);

  return (
    <>
      <div
        ref={outlineRef}
        className="cursor-dot-outline pointer-events-none fixed z-50 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d4b88c] opacity-0 transition-[opacity,transform] duration-300 ease-in-out will-change-[transform,opacity]"
      />
      <div
        ref={dotRef}
        className="cursor-dot pointer-events-none fixed z-50 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#dca54c] opacity-0 transition-[opacity,transform] duration-300 ease-in-out will-change-[transform,opacity]"
      />
    </>
  );
}
