import React, { createContext, useState } from 'react';

export const AppContext = createContext();

const initialState = {
  childValidState: 'unvalidated'
};
export default function AppContextProvider({ children }) {
  const [sharedState, setSharedState] = useState(initialState);
  const [shouldValidate, setShouldValidate] = useState(false);
  const updateSharedState = obj => {
    setSharedState({ ...sharedState, ...obj });
  };

  return (
    <AppContext.Provider
      value={{
        sharedState,
        updateSharedState,
        shouldValidate,
        setShouldValidate
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
