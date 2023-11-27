import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isInitialLoad, setInitialLoad] = useState(false);
  // trying
  const [isStopHomeAnimation, setStopHomeAnimation] = useState(false);

  return (
    <AppContext.Provider value={{ isInitialLoad, setInitialLoad, isStopHomeAnimation, setStopHomeAnimation }}>
      {children}
    </AppContext.Provider>
  );
};