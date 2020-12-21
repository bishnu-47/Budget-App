import React from 'react'
import { Link } from 'react-router-dom'

import ExpenseForm from './ExpenseForm.js'

const AddExpensePage = () => (
  <div>
        <h1>Add Expense</h1>
        <ExpenseForm />
    </div>
)

export default AddExpensePage