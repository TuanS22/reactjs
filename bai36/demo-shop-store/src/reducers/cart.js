export const cartReducers = (state = [], action) => {
    // console.log(state, action)
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
            const updateQuantity = newState.find(quantity => quantity.id === action.id)
            updateQuantity.quantity += action.quantity
            return newState
        case 'DELETE_CART':
            const deleteCart = newState.filter(quantity => quantity.id !== action.id)
            return deleteCart
        case 'DELETE_ALL_CART':
            return []
        default:
            return state
    }
}