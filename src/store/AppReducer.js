export const ACTIONS = {
  ADD_EXPENSE: "add-expense",
};

export const AppReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_EXPENSE:
      return state;
  }
};
