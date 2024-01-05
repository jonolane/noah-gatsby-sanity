import React, { createContext, useState } from 'react';

// global state workaround
// import { isModalOpen as initialIsModalOpen, setModalOpen as updateModalOpen } from './globalState';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isInitialLoad, setInitialLoad] = useState(false);
  const [isStopHomeAnimation, setStopHomeAnimation] = useState(false);

  // global state workaround
  /*
  const [isModalOpen, _setModalOpen] = useState(initialIsModalOpen);
  
  const setModalOpen = (value) => {
    _setModalOpen(value);
    updateModalOpen(value);
  };
  */

  // add isModalOpen and setModalOpen here to refactor to global state variable instead of Navbar.js state
  return (
    <AppContext.Provider value={{ isInitialLoad, setInitialLoad, isStopHomeAnimation, setStopHomeAnimation }}>
      {children}
    </AppContext.Provider>
  );
};