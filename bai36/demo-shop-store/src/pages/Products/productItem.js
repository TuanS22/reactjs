import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './productItem.scss';
import { addToCart, updateQuantity } from '../../actions/cart';

function ProductItem(props) {
    const { item } = props
    const dispatch = useDispatch()
    const checkQuantity = useSelector(state => state.cartReducers)
    // console.log(checkQuantity)

    const handleAddToCart = () => {
        if(checkQuantity.some(quantity => quantity.id === item.id)) {
            dispatch(updateQuantity(item.id))
        } else {
            dispatch(addToCart(item.id, item))
        }
    }

    return (
        <>
            <div key={item.id} className='product__item'>
                <div className='product__item--img'>
                    <img src={item.image} alt={item.title} width={100} height={100} />
                </div>
                <div className='product__item--description'>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                    <h5>{item.price} $</h5>
                </div>
                <button onClick={handleAddToCart} className='product__item--btnCart'>Add to cart</button>
            </div>
        </>
    );
}

export default ProductItem;