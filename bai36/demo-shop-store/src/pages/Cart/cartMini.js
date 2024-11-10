import React, { useRef } from 'react';
import './cartItem.scss';
import { useDispatch } from 'react-redux';
import { deleteCart, updateQuantity } from '../../actions/cart';

function CartMini(props) {
    const { item } = props
    const inputRef = useRef()
    const dispatch = useDispatch()

    const handleDown = () => {
        if (item.quantity > 1) {
            dispatch(updateQuantity(item.id, -1))
            inputRef.current.value = parseInt(inputRef.current.value) - 1
        }
    }

    const handleUp = () => {
        dispatch(updateQuantity(item.id))
        inputRef.current.value = parseInt(inputRef.current.value) + 1
    }

    const handleDelete = () => {
        dispatch(deleteCart(item.id))
    }

    return (
        <>
            <div key={item.id} className='cart__item'>
                <div className='cart__item--img'><img src={item.info.image} alt={item.info.title} width={100} height={100} /></div>
                <div className='cart__item--description'>
                    <h4>{item.info.title}</h4>
                    <h5>{item.info.price} $</h5>
                </div>
                <div className=''>
                    <button onClick={handleDown}>-</button>
                    <input ref={inputRef} defaultValue={item.quantity} />
                    <button onClick={handleUp}>+</button>
                </div>
                <div>
                    <button onClick={handleDelete}>Xóa</button>
                </div>
            </div>
        </>
    );
}

export default CartMini;