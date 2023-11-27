import './src/styles/global.css'

// trying to set global variable to true when initial load occurs
import React from 'react';
import { AppProvider } from './src/utils/AppContext';

export const wrapRootElement = ({ element }) => {
  return <AppProvider>{element}</AppProvider>;
};

// Polyfill for Buffer. not sure if necessary 
global.Buffer = global.Buffer || require('buffer').Buffer;