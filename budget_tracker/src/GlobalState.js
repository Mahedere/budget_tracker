import React, { createContext, useReducer } from 'react';

// Initial state
const initialState = {
  transactions: []
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    // reducer logic
  }, initialState);

  return (
    <GlobalContext.Provider value={{ transactions: state.transactions, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};