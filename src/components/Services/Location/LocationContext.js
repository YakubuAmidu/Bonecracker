import React, { useState, useEffect, createContext } from 'react';

// imported custom components
import { LocationRequest, LocationTransform } from './LocationMock';

// LocationContext
const LocationContext = createContext()

// LocationContextProvider function
export const LocationContextProvider = ({ children }) => {

  return <LocationContext.Provider
  value={{
    isLoading,
    error,
    location,
    search: () => null,
    keyword
  }}
  >{children}</LocationContext.Provider>
};