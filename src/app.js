import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/store'
import {addExpenseGenerator } from './actions/expenses';
import { Provider } from 'react-redux';
import {setTextFilter} from './actions/filter'

const store = configureStore();


store.dispatch(addExpenseGenerator({note:'Electricity Bill', description: 'last month electricity bill', amount:977}))
store.dispatch(addExpenseGenerator({note:'Rishav school fee', description: 'School fee', amount:16000}))
// setTimeout(()=> {
//     store.dispatch(addExpenseGenerator({note:'Rishav school fee', description: 'School fee', amount:16000}))
// },5000);
store.dispatch(setTextFilter('white'));
// store.dispatch(addExpenseGenerator({note:'Rishav school fee', description: 'School fee', amount:16000}))
console.log(store.getState());
store.subscribe(()=>{
    console.log(store.getState());
})

ReactDOM.render(<Provider store={store}><AppRouter /></Provider>, document.getElementById('app'));
