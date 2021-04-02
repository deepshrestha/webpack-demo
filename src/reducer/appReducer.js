import { FETCH_DATA, FILTER, DELETE, ADD} from './config'

const onFetchData = (payloadData) => {
    return payloadData
}

const onFilter = (payloadData) => {

    let value = payloadData.searchItem
    let search = RegExp(value, 'ig')

    const result = payloadData.data.filter(item => {
        return search.test(item.itemName)
    })

    return result
}

/* const onDelete = (state, payloadData) => {
    const result = state.filter(item => {
        return item.id !== payloadData.id
    })
    return result
} */

const onAdd = (state, payloadData) => {    
    return [
        ...state,
        payloadData
    ]
}

const reducer = (state, action) => {
    switch(action.type){
        case FETCH_DATA:
            return onFetchData(action.payload)
        case FILTER:
            return onFilter(action.payload)
        case DELETE:
            const result = state.filter(item => {
                return item.id !== action.payload.id
            })
            return result
        case ADD:
            return onAdd(state, action.payload)
        default:
            return state
    }
}

export default reducer