import React from 'react';
import { connect } from 'react-redux';

const AddExpense = (props) => (
    <div>
        <h2>Add Expense</h2>
        <form>
           note: <input type="text"  /> <br />
           description:<input type="text" /> <br />
           amount: <input type="text" /> <br />
        </form>
    </div>
)
export default connect((state) => {
    return {
        expenses: state.expenses
    }
})(AddExpense);