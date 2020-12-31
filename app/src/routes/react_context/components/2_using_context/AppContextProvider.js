import React, { createContext, useState } from 'react';

export const AppContext = createContext();

const colorsArr = ['black', 'red', 'blue', 'green', 'purple', 'cyan'];

export default function AppContextProvider({ children }) {
  const [count, setCount] = useState(0);
  const [currentColor, setCurrentColor] = useState(colorsArr[0]);
  const changeColor = () => {
    const index = colorsArr.indexOf(currentColor);
    const nextColor = index < colorsArr.length - 1 ? index + 1 : 0;
    setCurrentColor(colorsArr[nextColor]);
  };

  return (
    <AppContext.Provider
      value={{
        setCount,
        changeColor,
        count,
        currentColor
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
