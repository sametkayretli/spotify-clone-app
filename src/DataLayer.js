import React, { createContext, useContext, useReducer} from 'react';



// Preparing the data layer what is about to come
export const DataLayerContext = createContext();

// Create a data layer , actual data  layer
export const DataLayer = ({ initialState, reducer, children}) => (
   <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
      {children}
   </DataLayerContext.Provider>
);

export const useDataLayerValue = () => useContext(DataLayerContext);