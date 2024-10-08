"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Logo = () => {
  const LINES = [
    "is Reading 아주 희미한 빛으로도",
    "is Obsessed with Jujutsu Kaisen, now",
    "is Obsessed with 헤어질 결심, now",
    "is Watching ",
    "is Concerning ",
    "is Studying ",
  ];

  const router = useRouter();

  const [status, setStatus] = useState(LINES[0]);
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseOver = () => {
    if (!isVisible) {
      setStatus((prev) => {
        const currentIndex = LINES.indexOf(prev);
        const nextIndex = (currentIndex + 1) % LINES.length;
        return LINES[nextIndex];
      });

      setIsVisible(true);

      setTimeout(() => {
        setIsVisible(false);
      }, 2000);
    }
  };

  return (
    <div
      className="flex w-fit cursor-pointer items-center gap-2"
      onMouseOver={handleMouseOver}
    >
      <Link
        href="/"
        onClick={() => router.push("/")}
        className="font-semibold text-white"
      >
        Bumang
      </Link>
      {isVisible && (
        <span className="translate-y-0.5 text-12 text-white">{status}</span>
      )}
    </div>
  );
};

export default Logo;
