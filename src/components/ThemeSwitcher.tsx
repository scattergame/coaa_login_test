"use client";

import {useTheme} from "next-themes";
import { useEffect, useState } from "react";
import { MdLightMode } from "react-icons/md";
import { BsFillMoonFill } from "react-icons/bs";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === "system" ? systemTheme : theme;  

  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted) return null

  return (
    <div className="cursor-pointer">
        {currentTheme === "dark" ? (
            <MdLightMode
              className="text-lg text-inherit hover:text-gray-800"
              onClick={() => setTheme("light")}
            />
        ) : (
            <BsFillMoonFill
              className="text-lg text-inherit hover:text-gray-800"
              onClick={() => setTheme("dark")}
            />
        )}
    </div>
  )
};