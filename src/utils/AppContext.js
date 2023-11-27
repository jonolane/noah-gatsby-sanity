import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isInitialLoad, setInitialLoad] = useState(false);

  return (
    <AppContext.Provider value={{ isInitialLoad, setInitialLoad }}>
      {children}
    </AppContext.Provider>
  );
};