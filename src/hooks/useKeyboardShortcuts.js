import { useEffect } from "react";
import { useApp } from "../context/AppContext";

export default function useKeyboardShortcuts() {
  const { setShowQuick, setShowSearch, createItem, theme, setTheme } = useApp();

  useEffect(() => {
    const handler = (e) => {
      if (!e.ctrlKey) return;

      if (e.key === "q") {
        e.preventDefault();
        setShowQuick(true);
      }

      if (e.key === "k") {
        e.preventDefault();
        setShowSearch(true);
      }

      if (e.key === "n") {
        e.preventDefault();
        createItem("note");
      }

      if (e.key === "s" && e.shiftKey) {
        e.preventDefault();
        createItem("speech");
      }

      if (e.key === "d") {
        e.preventDefault();
        setTheme(theme === "light" ? "dark" : "light");
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [theme]);
}
