const expenseReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [
        ...state,
        action.expense
      ]

    case "REMOVE_EXPENSE":
      return state.filter((expense) => expense.id !== action.id)

    case "EDIT_EXPENSE":
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.expense,
            id: expense.id
          }
        } else {
          return expense
        }
      })

    default:
      return state
  }
}

export default expenseReducer