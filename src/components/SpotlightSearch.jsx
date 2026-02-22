import { useState } from "react";
import { useApp } from "../context/AppContext";

export default function SpotlightSearch() {
  const { showSearch, setShowSearch, items, setActiveItem } = useApp();
  const [query, setQuery] = useState("");

  if (!showSearch) return null;

  const filtered = items.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="modal">
      <input
        placeholder="Search notes and speeches..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <div style={{ marginTop: "10px" }}>
        {filtered.map((item) => (
          <div
            key={item.id}
            onClick={() => {
              setActiveItem(item);
              setShowSearch(false);
              setQuery("");
            }}
            style={{ cursor: "pointer", marginBottom: "8px" }}
          >
            {item.title}
          </div>
        ))}
      </div>

      <button onClick={() => setShowSearch(false)}>Close</button>
    </div>
  );
}
