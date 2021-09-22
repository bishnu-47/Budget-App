import React, { createContext, useReducer } from "react";
import axios from "axios";
import { AppReducer, ACTIONS } from "./AppReducer";

// initial state
const initState = {
  transactions: [],
  loading: true,
  error: null,
};

export const GlobalContext = createContext(initState);

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initState);

  // Actions
  async function getTransactions() {
    try {
      const res = await axios.get("/api/v1/transactions");

      dispatch({
        type: ACTIONS.GET_TRANSACTIONS,
        payload: { transactions: res.data.data },
      });
    } catch (err) {
      dispatch({
        type: ACTIONS.SET_ERROR,
        payload: { error: err.response.data.error },
      });
    }
  }

  async function deleteTransaction(id) {
    try {
      await axios.delete(`/api/v1/transactions/${id}`);

      dispatch({
        type: ACTIONS.DELETE_TRANSACTION,
        payload: { id: id },
      });
    } catch (err) {
      dispatch({
        type: ACTIONS.SET_ERROR,
        payload: { error: err.response.data.error },
      });
    }
  }

  async function addTransaction(newTransaction) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post(
        "/api/v1/transactions",
        newTransaction,
        config
      );
      dispatch({
        type: ACTIONS.ADD_TRANSACTION,
        payload: { newTransaction: res.data.data },
      });
    } catch (err) {
      dispatch({
        type: ACTIONS.SET_ERROR,
        payload: { error: err.response.data.error },
      });
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        loading: state.loading,
        error: state.error,
        getTransactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
