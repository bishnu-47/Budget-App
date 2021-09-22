export const ACTIONS = {
  GET_TRANSACTIONS: "get-transactions",
  ADD_TRANSACTION: "add-transaction",
  DELETE_TRANSACTION: "delete-transaction",
  SET_ERROR: "set-error",
};

export const AppReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.GET_TRANSACTIONS:
      return {
        ...state,
        loading: false,
        transactions: action.payload.transactions,
      };
    case ACTIONS.ADD_TRANSACTION:
      return {
        ...state,
        transactions: [...state.transactions, action.payload.newTransaction],
      };
    case ACTIONS.DELETE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.filter(
          (t) => t._id !== action.payload.id
        ),
      };
    case ACTIONS.SET_ERROR:
      return {
        ...state,
        error: action.payload.error,
      };
    default:
      return state;
  }
};
