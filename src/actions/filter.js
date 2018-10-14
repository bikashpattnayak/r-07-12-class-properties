const setTextFilter = (text='') => {
    return {
        type: 'TEXT',
        text
    }

}
const setSortByFilter = (type)=> ({type: 'SORT_BY', sortBy:type});

export {setTextFilter,setSortByFilter};