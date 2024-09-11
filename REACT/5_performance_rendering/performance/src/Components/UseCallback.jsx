import React, { useCallback, useState } from 'react';

const UseCallback = () => {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);

//   By using useCallback, we ensure that the removeItem function reference remains stable, avoiding unnecessary re-renders and improving the overall performance of the component.
  const removeItem = useCallback((itemToRemove) => {
    setItems((prevItems) => prevItems.filter((item) => item !== itemToRemove));
  },[]);

  return (
    <div>
      {items.map((item) => (
        <div key={item}>
          {item} 
          <button onClick={() => removeItem(item)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default UseCallback