import React from 'react'
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'

const now = moment()
console.log(now.format("MMM Do, YYYY"))

export default class ExpenseForm extends React.Component {

  state = {
    description: "",
    note: "",
    amount: "",
    createdAt: moment(),
    calenderFocused: false,
  }

  onDescriptionChange = (e) => {
    let description = e.target.value
    this.setState(() => ({ description }))
  }

  onNoteChange = (e) => {
    let note = e.target.value
    this.setState(() => ({ note }))
  }

  onAmountChange = (e) => {
    let amount = e.target.value
    if (amount.match(/^\d*(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }))
    }
  }

  onDateChange = (createdAt) => {
    this.setState(() => ({ createdAt }))
  }

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calenderFocused: focused }))
  }

  render() {
    return (
      <div>
				<form >
					<input
						type="text"
						placeholder="Description"
						autoFocus
						value={this.state.description}
						onChange={this.onDescriptionChange}
					/>
					<input
						type="text"
						placeholder="Amount"
						value={this.state.amount}
						onChange={this.onAmountChange}
					/>
					<SingleDatePicker
						date={this.state.createdAt}
						onDateChange={this.onDateChange}
						focused={this.calenderFocused}
						onFocusChange={this.onFocusChange}
					/>
					<textarea
						cols="30" rows="10"
						placeholder="A note for your Expense(optional)"
						value={this.state.note}
						onChange={this.onNoteChange}
					></textarea>
					<button>
						Add Expense
					</button>
				</form>
			</div>
    )
  }
}