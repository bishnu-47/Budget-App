import { createStore, combineReducers } from 'redux'
import { v4 as uuidv4 } from 'uuid';


// Action generators

// expense
const addExpense = (
	{
		description = '',
		note = '',
		amount = 0,
		createdAt = 0,	
	} = {}) => ({
	type : 'ADD_EXPENSE',
	expense : {
		id :  uuidv4(),
		description,
		note,
		amount,
		createdAt,
	}
})

const removeExpense = (id) => ({
	type : 'REMOVE_EXPENSE',
	id 
})

const editExpense = (id, expense) => ({
	type : 'EDIT_EXPENSE',
	id,
	expense
})

// filter
const setTextFilter = (filterBy = '') => ({
	type : 'SET_TEXT_FILTER',
	filterBy
})

const sortByAmount = () => ({
	type : 'SORT_BY_AMOUNT',
})

const sortByDate = () => ({
	type : 'SORT_BY_DATE',
})

const setStartDate = (date = undefined) => ({
	type : 'SET_START_DATE',
	date
})

const setEndDate = (date = undefined) => ({
	type : 'SET_END_DATE',
	date
})


// expenses reducer
const expenseReducer = (state = [], action) => {
	switch(action.type) {
		case "ADD_EXPENSE":
			return [
				...state,
				action.expense
			]

		case "REMOVE_EXPENSE":
			return state.filter((expense) => expense.id !== action.id)

		case "EDIT_EXPENSE":
			return state.map((expense) => {
				if(expense.id === action.id) {
					return {
						...expense,
						...action.expense,
						id : expense.id
					}
				}
				else {
					return expense
				}
			}) 	

		default:
			return state
	}
}


// filters reducer
const defaultFiltersState = {
	text : '',
	sortBy : 'date', // amount or date
	startDate : undefined,
	endDate : undefined,
}

const filtersReducer = ( state = defaultFiltersState, action) => {
	switch(action.type) {
		case "SET_TEXT_FILTER":
			return {
				...state,
				text : action.filterBy
			}

		case "SORT_BY_AMOUNT":
			return {
				...state,
				sortBy : 'amount'
			}

		case "SORT_BY_DATE":
			return {
				...state,
				sortBy : 'date'
			}

		case "SET_START_DATE":
			return {
				...state,
				startDate : action.date
			}

		case "SET_END_DATE":
			return {
				...state,
				endDate : action.date
			}

		default:
			return state
	}
}


// store creation
const store = createStore(
	combineReducers({
		expenses : expenseReducer,
		filters : filtersReducer,
	})
)

// Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
		return expenses.filter((expense) => {
		const startDateMatch = typeof(startDate) !== 'number' || startDate <= expense.createdAt 
		const endDateMatch = typeof(endDate) !== 'number' || endDate >= expense.createdAt 
		const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())

		return startDateMatch && endDateMatch && textMatch
	}).sort((a, b) => {
		if(sortBy === 'date') {
			return a.createdAt < b.createdAt ? 1 : -1
		}
		if(sortBy === 'amount') {
			return a.amount < b.amount ? 1 : -1
		}
	})
}


const unsubscribe = store.subscribe(() => {
	const state = store.getState()
	const visibleExpense = getVisibleExpenses(state.expenses, state.filters)
	console.log(visibleExpense)
})


const expenseOne = store.dispatch(addExpense({
	description : 'rent',
	amount : 4000,
	createdAt : 2000
}))
const expenseTwo = store.dispatch(addExpense({
	description : 'food',
	amount : 2000,
	createdAt : -5000
}))
const expenseThree = store.dispatch(addExpense({
	description : 'studies',
	amount : 8000,
	createdAt : 3000
}))

// store.dispatch(removeExpense(expenseOne.expense.id))
// store.dispatch(editExpense(expenseTwo.expense.id, { amount:2500 }))

// store.dispatch(setTextFilter('o'))
// store.dispatch(setTextFilter())

store.dispatch(sortByAmount())
// store.dispatch(sortByDate())

// store.dispatch(setStartDate(-6000))
// store.dispatch(setStartDate())
// store.dispatch(setEndDate(25))

const demoState = {
	expenses : [{
		id : 'w4235wsrf',
		description : 'jan rent',
		note : 'paid the rent of jan',
		amount : 3000,
		createdAt : 0,
	}],
	filters : {
		text : 'rent',
		sortby : 'amount', // amount or date
		startDate : null,
		endDate : null,
	}
}
