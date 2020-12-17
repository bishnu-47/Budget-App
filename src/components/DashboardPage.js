import React from 'react'
import { Link } from 'react-router-dom'

import ExpenseList from './ExpenseList'
import ExpenseListFilter from './ExpenseListFilter'

const DashboardPage = () => (
  <div>
  		<ExpenseListFilter />
        <ExpenseList />
  </div>
)


export default DashboardPage