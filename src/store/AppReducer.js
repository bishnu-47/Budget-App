export const ACTIONS = {
  ADD_TRANSACTION: "add-transaction",
  DELETE_TRANSACTION: "delete-transaction",
};

export const AppReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TRANSACTION:
      return {
        ...state,
        transactions: [...state.transactions, action.payload.newTransaction],
      };
    case ACTIONS.DELETE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.filter(
          (t) => t.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};
