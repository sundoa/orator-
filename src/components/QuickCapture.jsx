import { useState } from "react";
import { useApp } from "../context/AppContext";

export default function QuickCapture() {
  const { showQuick, setShowQuick, setItems, items } = useApp();
  const [text, setText] = useState("");

  if (!showQuick) return null;

  const saveQuickNote = () => {
    const newItem = {
      id: Date.now(),
      type: "note",
      title: "Quick Note",
      content: text,
      createdAt: Date.now(),
    };

    setItems([newItem, ...items]);
    setText("");
    setShowQuick(false);
  };

  return (
    <div className="modal">
      <h3>Quick Note</h3>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write something quickly..."
      />
      <button onClick={saveQuickNote}>Save</button>
    </div>
  );
}
