import { createFileRoute } from "@tanstack/react-router";
import { useState, useCallback, useRef } from "react";
import { flushSync } from "react-dom";
import DefaultHome from "@/components/default-home";
import Design01 from "@/components/designs/design-01";
import Design02 from "@/components/designs/design-02";
import Design03 from "@/components/designs/design-03";
import Design04 from "@/components/designs/design-04";
import Design05 from "@/components/designs/design-05";
import Design06 from "@/components/designs/design-06";
import Design07 from "@/components/designs/design-07";
import Design08 from "@/components/designs/design-08";
import Design09 from "@/components/designs/design-09";
import Design10 from "@/components/designs/design-10";
import Design11 from "@/components/designs/design-11";
import Design12 from "@/components/designs/design-12";
import Design13 from "@/components/designs/design-13";
import Design14 from "@/components/designs/design-14";
import Design15 from "@/components/designs/design-15";
import Design16 from "@/components/designs/design-16";
import Design17 from "@/components/designs/design-17";
import Design18 from "@/components/designs/design-18";
import Design19 from "@/components/designs/design-19";
import Design20 from "@/components/designs/design-20";
import Design21 from "@/components/designs/design-21";
import Design22 from "@/components/designs/design-22";
import Design23 from "@/components/designs/design-23";
import Design24 from "@/components/designs/design-24";
import Design25 from "@/components/designs/design-25";
import Design26 from "@/components/designs/design-26";
import Design27 from "@/components/designs/design-27";
import Design28 from "@/components/designs/design-28";
import Design29 from "@/components/designs/design-29";
import Design30 from "@/components/designs/design-30";
import Design31 from "@/components/designs/design-31";
import Design32 from "@/components/designs/design-32";
import Design33 from "@/components/designs/design-33";
import Design34 from "@/components/designs/design-34";
import Design35 from "@/components/designs/design-35";
import DesignPicker from "@/components/design-picker";
import FloatingControls from "@/components/floating-controls";
import Preloader from "@/components/preloader";
import Cursor from "@/components/cursor";
import { designsMeta } from "@/config/designs";

const designs = [
  Design01, Design02, Design03, Design04, Design05,
  Design06, Design07, Design08, Design09, Design10,
  Design11, Design12, Design13, Design14, Design15,
  Design16, Design17, Design18, Design19, Design20,
  Design21, Design22, Design23, Design24, Design25,
  Design26, Design27, Design28, Design29, Design30,
  Design31, Design32, Design33, Design34, Design35,
];

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const [view, setView] = useState<"default" | number>("default");
  const [pickerOpen, setPickerOpen] = useState(false);
  const [showPreloader, setShowPreloader] = useState(true);
  const mainViewRef = useRef<HTMLDivElement>(null);
  const transitioning = useRef(false);

  const handlePreloaderComplete = useCallback(() => {
    setShowPreloader(false);
  }, []);

  const handleShuffle = useCallback(() => {
    let nextId: number;
    do {
      nextId = Math.floor(Math.random() * designs.length) + 1;
    } while (nextId === view);
    setView(nextId);
  }, [view]);

  const handleSelect = useCallback((id: number | "default") => {
    if (id === "default") {
      setView("default");
    } else {
      setView(id);
    }
  }, []);

  const handleStartTransition = useCallback((id: number | "default") => {
    if (transitioning.current) return;
    transitioning.current = true;

    const vtName = "design-view";
    const thumbnail = document.querySelector(
      `[data-design-thumb="${id}"]`
    ) as HTMLElement | null;

    if (thumbnail) thumbnail.style.viewTransitionName = vtName;

    if (!document.startViewTransition) {
      handleSelect(id);
      setPickerOpen(false);
      transitioning.current = false;
      return;
    }

    const transition = document.startViewTransition(() => {
      flushSync(() => {
        handleSelect(id);
        setPickerOpen(false);
      });
      if (mainViewRef.current) {
        mainViewRef.current.style.viewTransitionName = vtName;
      }
    });

    transition.finished
      .catch(() => {})
      .finally(() => {
        if (thumbnail && thumbnail.isConnected) thumbnail.style.viewTransitionName = "";
        if (mainViewRef.current) mainViewRef.current.style.viewTransitionName = "";
        transitioning.current = false;
      });
  }, [handleSelect]);

  const CurrentView = view === "default" ? DefaultHome : designs[view - 1];
  const currentMeta = view === "default" ? null : designsMeta[view - 1];

  return (
    <>
      {showPreloader && <Preloader onComplete={handlePreloaderComplete} />}
      {currentMeta ? (
        <Cursor dotColor={currentMeta.primary} outlineColor={currentMeta.text} />
      ) : (
        <Cursor />
      )}
      <div
        ref={mainViewRef}
        key={view === "default" ? "default" : `design-${view}`}
      >
        <CurrentView />
      </div>
      <FloatingControls
        onOpenPicker={() => setPickerOpen(true)}
        onShuffle={handleShuffle}
      />
      <DesignPicker
        isOpen={pickerOpen}
        onClose={() => setPickerOpen(false)}
        onStartTransition={handleStartTransition}
      />
    </>
  );
}