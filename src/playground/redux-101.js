import { createStore } from 'redux'

// Action generators - func that returns action obj

const incrementCount = ({ incrementBy = 1 } = {}) => ({
	type : 'INCREMENT',
	incrementBy
})

const decrementCount = ({ decrementBy=1 } = {}) => ({
	type : 'DECREMENT',
	decrementBy
})

const setCount = ({count}) => ({
	type : 'SET',
	count
})

const resetCount = () => ({
	type : 'RESET'
})


// Reducers
// 1. Reducers are pure func
// 2. Never change state or action
const countReducer = ( state = {count: 0}, action ) => {
	switch (action.type) {
		case 'INCREMENT':
			return {
				count : state.count + action.incrementBy
			}
		case 'DECREMENT':
			return {
				count: state.count - action.decrementBy
			}
		case 'SET':
			return {
				count : action.count
			}
		case 'RESET':
			return {
				count : 0
			}
		default:
			return state
	}
}

const store = createStore(countReducer)

const unsubscribe = store.subscribe(() => {
	console.log(store.getState())
})

// increment action
store.dispatch(incrementCount({ incrementBy:5 }))

store.dispatch(incrementCount())

// decrement action
store.dispatch(decrementCount({ decrementBy:9 }))

store.dispatch(decrementCount())

// reset action
store.dispatch(resetCount())

// set action
store.dispatch(setCount({ count:101 }))


