import React from 'react'
import { connect } from 'react-redux'

import { removeExpense } from '../actions/expenses'

const ExpenseListItem = (props) => {
  return (
    <div>
    	<h3>{props.expenses.description}</h3>
    	<p>
    		{props.expenses.amount} <br/>
    		{props.expenses.createdAt} <br/>
		</p>
		<button onClick={() => {
			props.dispatch(removeExpense(props.expenses.id))
		}}>Remove</button>
	</div>
  )
}

export default connect()(ExpenseListItem)