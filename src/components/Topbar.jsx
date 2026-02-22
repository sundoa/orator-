import { useApp } from "../context/AppContext";
import useKeyboardShortcuts from "../hooks/useKeyboardShortcuts";

export default function Topbar() {
  const { theme, setTheme } = useApp();

  useKeyboardShortcuts();

  return (
    <div
      style={{
        padding: "10px 20px",
        borderBottom: "1px solid rgba(0,0,0,0.1)",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div>Debate Workspace</div>

      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </button>
    </div>
  );
}
