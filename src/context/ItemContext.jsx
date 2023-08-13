import { createContext, useState } from 'react';

const ItemContext = createContext();

export const ItemProvider = ({ children }) => {
  const [selectedParts, setSelectedParts] = useState([]);
  const [draggedItems, setDraggedItems] = useState([]);

  const togglePartSelection = (part) => {
    setSelectedParts((prevSelectedParts) =>
      prevSelectedParts.includes(part)
        ? prevSelectedParts.filter((p) => p !== part)
        : [...prevSelectedParts, part]
    );
  };

  const setDraggedItem = (item) => {
    setDraggedItems((prevItems) => [...prevItems, item]);
  };

  return (
    <ItemContext.Provider
      value={{
        selectedParts,
        togglePartSelection,
        draggedItems,
        setDraggedItem,
      }}
    >
      {children}
    </ItemContext.Provider>
  );
};

export default ItemContext;
