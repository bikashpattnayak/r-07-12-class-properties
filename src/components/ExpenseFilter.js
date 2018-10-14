import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter } from '../actions/filter'

const ExpenseFilter = (props) => {
    return (
        <div>
            <input type='text' value={props.filter.text} onChange={(e)=> {
                props.dispatch(setTextFilter(e.target.value))}} />
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        filter: state.filter
    } 
    
}
export default connect(mapStateToProps)(ExpenseFilter);
