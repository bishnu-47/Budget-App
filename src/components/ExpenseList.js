import React from 'react'
import { connect } from 'react-redux'
import ExpenseListItem from './ExpenseListItem.js'
import expenseFilter from '../selectors/expenses'

const ExpenseList = (props) => (
  <div>
  	<h1>Expense List</h1>
  	{props.expenses.map(e => <ExpenseListItem expenses={e} key={e.id}/>)}

  </div>
)

const mapStateToProps = (state) => {
  return {
    expenses: expenseFilter(state.expenses, state.filters)
  }
}

export default connect(mapStateToProps)(ExpenseList)