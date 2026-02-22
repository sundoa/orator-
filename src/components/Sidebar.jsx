import { useApp } from "../context/AppContext";

export default function Sidebar() {
  const { items, setActiveItem, createItem } = useApp();

  return (
    <div className="sidebar">
      <h2>Orator</h2>

      <button onClick={() => createItem("note")}>+ New Note</button>
      <button onClick={() => createItem("speech")}>+ New Speech</button>

      <hr />

      {items.map((item) => (
        <div
          key={item.id}
          onClick={() => setActiveItem(item)}
          style={{ cursor: "pointer", marginBottom: "10px" }}
        >
          <strong>{item.title}</strong>
          <div style={{ fontSize: "12px", opacity: 0.6 }}>{item.type}</div>
        </div>
      ))}
    </div>
  );
}
