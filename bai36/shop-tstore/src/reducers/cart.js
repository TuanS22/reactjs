export const cartReducers = (state = [], action) => {
    console.log(state, action)
    const newState = [...state]

    switch (action.type) {
        case 'ADD_TO_CART':
            return [
                ...state,
                {
                    id: action.id,
                    info: action.info,
                    quantity: 1
                }
            ]
        case 'UPDATE_QUANTITY':
            const update = newState.find(item => item.id === action.id)
            update.quantity += action.quantity
            return newState

        case 'DELETE_CART':
            const deleteCart = newState.filter(item => item.id !== action.id)
            return deleteCart
        case 'DELETE_ALL_CART':            
            return []
        default:
            return state
    }
}