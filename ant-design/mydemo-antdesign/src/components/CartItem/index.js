import React from 'react';
import './cartItem.css';

function CartItemm(props) {
    const { title, style } = props
    return (
        <>
            <div className='cart-item' style={style}>
                {title && <h2>{title}</h2>}
            </div>
        </>
    );
}

export default CartItemm;