const filterReducer = (state = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}, action) => {

    switch(action.type) {
        case 'TEXT':
          return {
              ... state,
              text: action.text
          }
        case 'SORT_BY':
          return {
              ... state,
              sortBy: action.sortBy
          }
        default:
          return state;

    }

}

export default filterReducer;