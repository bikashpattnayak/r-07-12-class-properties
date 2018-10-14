//Reducer
export default (state = [],action) => {
    switch(action.type) {
        case "ADD_EXPENSE":
            return [... state, action.payload]
        case "REMOVE_EXPENSE":
            console.log("Removed");
            return state.filter(({id}) => {
                console.log("checked " + id)
                return !(id == action.id)
            })
        case "EDIT_EXPENSE":
           return state.map((val) => {
               if(val.id == action.id) {
                   return {
                       ...val,
                       ... action.param
                   }
               }
               return val;
           })
        default:
            return state;
    }

}
