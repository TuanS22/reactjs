import React from 'react';
import { useSelector } from 'react-redux';
import './cartItem.scss';
import CartMini from './cartMini';

function CartItem(props) {
    const cart = useSelector(state => state.cartReducers)
    console.log(cart)
    
    return (
        <div className=''>
            {cart.map((item) => {
                return (
                    <CartMini item = {item} key={item.id} />
                )
            })}
        </div>
    );
}

export default CartItem;