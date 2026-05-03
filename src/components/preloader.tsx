import { useState, useEffect, useRef } from "react";
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

const designs = [
  Design01,
  Design02,
  Design03,
  Design04,
  Design05,
  Design06,
  Design07,
  Design08,
  Design09,
  Design10,
  Design11,
  Design12,
  Design13,
  Design14,
  Design15,
  Design16,
  Design17,
  Design18,
  Design19,
  Design20,
  Design21,
  Design22,
  Design23,
  Design24,
  Design25,
  Design26,
  Design27,
  Design28,
  Design29,
  Design30,
  Design31,
  Design32,
  Design33,
  Design34,
  Design35,
];

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [mounted, setMounted] = useState(false);
  const [frame, setFrame] = useState(0);
  const [exiting, setExiting] = useState(false);
  const sequenceRef = useRef<number[]>([]);

  useEffect(() => {
    const ids = Array.from({ length: designs.length }, (_, i) => i);
    const shuffled = [...ids].sort(() => Math.random() - 0.5);
    sequenceRef.current = shuffled.slice(0, 7);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || sequenceRef.current.length === 0) return;

    const sequence = sequenceRef.current;
    const timers: ReturnType<typeof setTimeout>[] = [];

    for (let i = 1; i < sequence.length; i++) {
      timers.push(setTimeout(() => setFrame(i), i * 120));
    }

    timers.push(setTimeout(() => setExiting(true), sequence.length * 120));
    timers.push(setTimeout(() => onComplete(), sequence.length * 120 + 500));

    return () => timers.forEach(clearTimeout);
  }, [mounted, onComplete]);

  if (!mounted) {
    return <div className="fixed inset-0 z-[100] bg-black" />;
  }

  const CurrentDesign = designs[sequenceRef.current[frame]];

  return (
    <div
      className={`fixed inset-0 z-[100] transition-opacity duration-500 ${
        exiting ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <div className="no-animations">
        <CurrentDesign />
      </div>
    </div>
  );
}
