import { createStore,combineReducers } from 'redux';

console.log('redux-test');


const defaultData = {
    expense: [
        {
            id: '42342343242df',
            description: '',
            amount: 0,
            date: 0
        }
    ],
    filterBy: {
        text: '',
        startDate: undefined,
        endDate: undefined
    }
}
//reducer
const expenseReducer = (state = [], action) => {
    switch(action.type) {
        case "TEST":
            console.log(action);
            return state.concat(action.expense);
        default:
            return state;

    }
}; 

const expenseGenerator = () => {}

const filterByReducer = (state={},action) => {
    switch(action.type) {
        default:
            return state;

    }
}; 
const store = createStore(combineReducers({expense:expenseReducer,filterBy:filterByReducer}));


const addExpenseGenerator = ({ description='' , amount=0,  date=0 }={}) => ({
    type: "TEST",
    expense: {
        id: 'sfsdfs',
        description,
        amount,
        date
    }
    

})
// console.log(store.getState())

// console.log(store.getState())
store.subscribe(() => {
    console.log(store.getState())
});

store.dispatch(addExpenseGenerator({description:'rent',amount:100,date:1}));



