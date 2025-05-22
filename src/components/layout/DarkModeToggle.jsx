import { Button } from "../ui/button";
import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(
    () => localStorage.theme === "dark" || false
  );

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <Button
      className="px-4 py-2 text-sm border rounded dark:bg-gray-800 dark:text-white"
      onClick={() => setIsDark(!isDark)}
    >
      {isDark ? "☀️ " : "🌙 "}
    </Button>
  );
}
