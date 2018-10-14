import { createStore, combineReducers } from 'redux';
import expenseReducer from '../reducers/expenseReducer'
import filterReducer from '../reducers/filterReducer'

export default () => {
    const store = createStore(combineReducers({expenses:expenseReducer,filter:filterReducer}));
    return store;
}

// store.subscribe(() => {
//     console.log(store.getState());
// })

// const action = store.dispatch(addExpenseGenerator({type:"ADD_EXPENSE",amount:500,description:'white board'}));
// const value = store.dispatch(addExpenseGenerator({type:"ADD_EXPENSE",amount:40,description:'white board Duster'}));
// store.dispatch(removeExpenseGenerator(value.payload.id));
// store.dispatch(editExpenseGenerator({id:action.payload.id,param: {amount:599}}));
// store.dispatch(editExpenseGenerator({id:action.payload.id,param: {note:'purchased whiteboard'}}));
// store.dispatch(setTextFilter('white'));
// store.dispatch(setTextFilter());
// store.dispatch(setSortByFilter('amount'));
// store.dispatch(setSortByFilter('date'))


