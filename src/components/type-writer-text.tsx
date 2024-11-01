"use client";
import { TypeWriterTexts } from "@/config/site";
import { useEffect, useState } from "react";

interface TypewriterTextProps {
  typingSpeed?: number;
  texts: TypeWriterTexts;
}

export default function TypewriterText({
  typingSpeed = 150,
  texts,
}: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    let currentIndex = 0;
    let isDeleting = false;
    const currentText = texts[textIndex];

    const intervalId = setInterval(() => {
      if (!isDeleting && currentIndex <= currentText.length) {
        setDisplayText(currentText.slice(0, currentIndex));
        currentIndex++;
        if (currentIndex > currentText.length) {
          setTimeout(() => {
            isDeleting = true;
          }, 1000); // Pause at the end
        }
      } else if (isDeleting && currentIndex >= 0) {
        setDisplayText(currentText.slice(0, currentIndex));
        currentIndex--;
        if (currentIndex < 0) {
          isDeleting = false;
          currentIndex = 0;
          setTextIndex((prev) => (prev + 1) % texts.length);
          setTimeout(() => {}, 500); // Pause before next text
        }
      }
    }, typingSpeed);

    return () => clearInterval(intervalId);
  }, [textIndex, typingSpeed, texts]);

  return (
    <h2 className="animate__animated animate__backInDown flex items-center space-x-2 text-3xl font-semibold text-secondary">
      <span>{displayText}</span>
      <div className="h-8 w-px bg-secondary"></div>
    </h2>
  );
}
