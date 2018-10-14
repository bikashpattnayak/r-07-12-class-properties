import React from 'react';
import { NavLink } from 'react-router-dom';

export default () => (
    <div>
        <NavLink activeClassName="test" exact ={true} to="/"> Home </NavLink>
        <NavLink activeClassName="test" to="/expenselist"> Expense List </NavLink>
        <NavLink activeClassName="test" to="/expensedetails"> Expense Details </NavLink>
        <NavLink activeClassName="test" to="/addexpense"> Add Expense </NavLink>
    </div>
)