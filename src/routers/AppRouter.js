import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../components/ExpenseApp';
import AddExpense from '../components/AddExpesne';
import ExpenseDetails from '../components/ExpenseDetails';
import ExpenseList from '../components/ExpenseList';
import Header from '../components/Header';


const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path='/' component={HomePage} exact={true}/> 
                <Route path='/addexpense' component={AddExpense} /> 
                <Route path='/expensedetails' component={ExpenseDetails} exact={true}/> 
                <Route path='/expenselist' component={ExpenseList} /> 
   
            </Switch>
        </div>
        
    </BrowserRouter>
)

export default AppRouter;
