const uniqid = require('uniqid');
const unixTimestamp = require("unix-timestamp")

const addExpenseGenerator = ({amount = 0, note = '' , description = '', date = unixTimestamp.now()}={}) => {
    return {
        type: "ADD_EXPENSE",
        payload: {
            id: uniqid(),
            amount,
            note,
            description,
            date
        }
       
    }
}

const removeExpenseGenerator = (id) => {
    console.log(id);
    return {
        type: 'REMOVE_EXPENSE',
        id
    }

}

const editExpenseGenerator = ({id,param}) => {
    return {
        type: 'EDIT_EXPENSE',
        id,
        param
    }

}

export { addExpenseGenerator, removeExpenseGenerator, editExpenseGenerator};