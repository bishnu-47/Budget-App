import React, { createContext, useReducer } from "react";
import { AppReducer, ACTIONS } from "./AppReducer";

// initial state
const initState = {
  transactions: [],
};

export const GlobalContext = createContext(initState);

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initState);

  // Actions
  function deleteTransaction(id) {
    dispatch({
      type: ACTIONS.DELETE_TRANSACTION,
      payload: { id: id },
    });
  }

  function addTransaction(newTransaction) {
    dispatch({
      type: ACTIONS.ADD_TRANSACTION,
      payload: { newTransaction: newTransaction },
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
