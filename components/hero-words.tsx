"use client";

import { useEffect, useState } from "react";

type HeroWordsProps = {
  words: string[];
  className?: string;
};

export function HeroWords({ words, className = "" }: HeroWordsProps) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setVisible(true);
      }, 300);
    }, 2200);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <span
      className={className}
      style={{
        display: "inline-block",
        transition: "opacity 0.3s ease, transform 0.3s ease",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(-10px)",
      }}
    >
      {words[index]}
    </span>
  );
}
