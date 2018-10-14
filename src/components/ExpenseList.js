import React from 'react';
import { connect } from 'react-redux';
import ExpenseFilter from '../components/ExpenseFilter';
import ExpenseListItem from '../components/ExpenesListItem';

const ExpenseList = (props) => (
    <div>
        <h2>Expense List Page  </h2>
        <ExpenseFilter />
        <table>
        <tr>
            <th>Id</th>
            <th>Note</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Date</th>
        </tr>
        <tbody>
        {props.expenses.map((expense) => {
            return (
                <ExpenseListItem key= {expense.id} {...expense} />
            )
        })}</tbody></table>
        
    </div>
)
export default connect((state)=>{
    return state
})(ExpenseList);