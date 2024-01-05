import './src/styles/global.css'
import React from 'react';
import { AppProvider } from './src/utils/AppContext';

// global state workaround
// import { isModalOpen, setModalOpen } from './src/utils/globalState';

export const wrapRootElement = ({ element }) => {
  return <AppProvider>{element}</AppProvider>;
};

// attempt to setModalOpen here
/*
export const onRouteUpdate = ({ location, prevLocation }) => {
  if (prevLocation && prevLocation.pathname === '/' && (location.pathname === '/discography' || location.pathname === '/contact')) {
    setModalOpen(!isModalOpen);
  }
};
*/

// Polyfill for Buffer. not sure if necessary 
global.Buffer = global.Buffer || require('buffer').Buffer;