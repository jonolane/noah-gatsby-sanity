import React from 'react';
import { AppProvider } from './src/utils/AppContext';

export const wrapRootElement = ({ element }) => {
  return <AppProvider>{element}</AppProvider>;
};