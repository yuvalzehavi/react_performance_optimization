import React, { createContext, useState } from "react";

export const AppContext = createContext();

export default ({ children }) => {
  const [componentName, setComponentName] = useState();
  const onComponentSelected = (name) => {
    console.log('yep!', name)
    setComponentName(name);
  };

  return (
    <AppContext.Provider
      value={{
        onComponentSelected,
        componentName,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
