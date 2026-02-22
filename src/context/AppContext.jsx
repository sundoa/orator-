import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem("orator-data");
    return saved ? JSON.parse(saved) : [];
  });

  const [activeItem, setActiveItem] = useState(null);
  const [theme, setTheme] = useState(
    localStorage.getItem("orator-theme") || "light"
  );
  const [showQuick, setShowQuick] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    localStorage.setItem("orator-data", JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    localStorage.setItem("orator-theme", theme);
    document.body.className = theme;
  }, [theme]);

  const createItem = (type) => {
    const newItem = {
      id: Date.now(),
      type,
      title: type === "speech" ? "New Speech" : "New Note",
      content: "",
      createdAt: Date.now(),
    };
    setItems([newItem, ...items]);
    setActiveItem(newItem);
  };

  return (
    <AppContext.Provider
      value={{
        items,
        setItems,
        activeItem,
        setActiveItem,
        createItem,
        theme,
        setTheme,
        showQuick,
        setShowQuick,
        showSearch,
        setShowSearch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
