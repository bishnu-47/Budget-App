import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './routers/AppRouter'
import { Provider } from 'react-redux'

import configureStore from './store/configureStore.js'
import { addExpense } from './actions/expenses.js'
import { setTextFilter } from './actions/filters.js'
import getVisibleExpenses from './selectors/expenses.js'

import 'normalize.css/normalize.css'
import './styles/styles.scss'

const store = configureStore()

store.dispatch(addExpense({
  description: "water bill",
  amount: 500
}))
store.dispatch(addExpense({
  description: "gas bill",
  amount: 1000
}))

store.dispatch(setTextFilter("bill"))

const state = store.getState()
const visibleExpense = getVisibleExpenses(state.expenses, state.filters)
// console.log(visibleExpense)

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
</Provider>, document.getElementById('root'))