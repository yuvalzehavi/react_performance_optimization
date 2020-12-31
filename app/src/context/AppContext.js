import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [componentName, setComponentName] = useState();
  const [moduleDescription, setModuleDescription] = useState();
  const onComponentSelected = name => {
    setComponentName(name);
  };

  return (
    <AppContext.Provider
      value={{
        onComponentSelected,
        setModuleDescription,
        componentName,
        moduleDescription
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
