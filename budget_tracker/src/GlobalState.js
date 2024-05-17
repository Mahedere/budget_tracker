import React, { createContext, useReducer } from 'react';

// Initial state
const initialState = {
  transactions: []
};

// Create context
export const GlobalContext = createContext(initialState);

// Reducer function
const AppReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TRANSACTION':
      return {
        ...state,
        transactions: [action.payload, ...state.transactions]
      };
    default:
      return state;
  }
};

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <GlobalContext.Provider value={{ transactions: state.transactions, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};