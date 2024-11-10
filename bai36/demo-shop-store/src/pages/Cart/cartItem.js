import React from 'react';
import { useSelector } from 'react-redux';
import CartMini from './cartMini';

function CartItem(props) {
    const cartItem = useSelector(state => state.cartReducers)
    return (
        <>
            {cartItem.map((item) => {
                return (
                    <CartMini item={item} key={item.id} />
                )
            })}
        </>
    );
}

export default CartItem;