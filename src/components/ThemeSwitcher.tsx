"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MdLightMode } from "react-icons/md";
import { BsFillMoonFill } from "react-icons/bs";
import { CiStar } from "react-icons/ci";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className={`cursor-pointer ${!mounted ? "pointer-events-none opacity-50" : ""}`}>
      {mounted ? (
        currentTheme === "dark" ? (
          <MdLightMode
            className="text-lg text-inherit hover:text-gray-400"
            onClick={() => setTheme("light")}
          />
        ) : (
          <BsFillMoonFill
            className="text-lg text-inherit hover:text-gray-400"
            onClick={() => setTheme("dark")}
          />
        )
      ) : (
        <CiStar className="text-lg text-inherit hover:text-gray-500" /> // Placeholder for loading state
      )}
    </div>
  );
}
