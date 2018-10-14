import React from 'react';
import { removeExpenseGenerator } from '../actions/expenses'
import { connect } from 'react-redux';

const ExpenseListItem = ({id,note,description,amount,date, dispatch}) => (
    <tr key={id}>
        <td>{id}</td>
        <td>{note}</td>
        <td>{description}</td>
        <td>{Math.floor(amount)}</td>
        <td>{Math.floor(date)}</td>
        <button onClick={(e)=>{
            dispatch(removeExpenseGenerator(id))
        }}> Remove</button>
    </tr>
)

export default connect((state) => {
    return state;
})(ExpenseListItem);