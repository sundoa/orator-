import { useApp } from "../context/AppContext";

export default function Editor() {
  const { activeItem, items, setItems } = useApp();

  if (!activeItem) {
    return (
      <div className="editor">
        <h2>Select or Create a Note</h2>
      </div>
    );
  }

  const updateItem = (field, value) => {
    const updated = items.map((item) =>
      item.id === activeItem.id ? { ...item, [field]: value } : item
    );
    setItems(updated);
  };

  return (
    <div className="editor">
      <input
        value={activeItem.title}
        onChange={(e) => updateItem("title", e.target.value)}
        style={{ fontSize: "1.5rem", fontWeight: "bold" }}
      />

      <textarea
        value={activeItem.content}
        onChange={(e) => updateItem("content", e.target.value)}
        placeholder="Start writing your speech or notes..."
      />
    </div>
  );
}
