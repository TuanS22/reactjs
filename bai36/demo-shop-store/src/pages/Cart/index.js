import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './index.scss';
import CartItem from './cartItem';
import { deleteAllCart } from '../../actions/cart';

function Cart(props) {
    const cart = useSelector(state => state.cartReducers)
    const dispatch = useDispatch()
    console.log(cart)

    const totalPrice = cart.reduce((sum, item) => {
        return sum + item.info.price * item.quantity
    }, 0)

    console.log(totalPrice)

    const handleDeleteAll = () => {
        dispatch(deleteAllCart())
    }

    return (
        <>
            {cart && (
                <div className=''>
                    {cart ? (
                        <div>
                            {cart.length > 0 ? (
                                <div className='index__item'>
                                    <div className='index__item--header'>
                                        <h2>Giỏ hàng</h2>
                                        <div>
                                            <button onClick={handleDeleteAll}>Xóa tất cả</button>
                                        </div>
                                    </div>
                                    <CartItem />
                                    <div className='index__item--total'>
                                        <h4>Tổng tiền: <span>{totalPrice.toFixed(2)} $</span></h4>
                                    </div>
                                </div>
                            ) : (
                                <div>Giỏ hàng không có sản phẩm</div>
                            )}
                        </div>
                    ) : (
                        <div>Không có dữ liệu</div>
                    )}
                </div>
            )}
        </>
    );
}

export default Cart;