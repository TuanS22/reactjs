import React from 'react';

function ProductItem(props) {
    const { item } = props
    const { name, img, price } = item
    
    return (
        <div className='product--item'>
            <div>
                <img src={img} alt={name} style={{width: "200px"}} />
            </div>
            <div>{name}</div>
            <div>{price}</div>
        </div>
    );
}

export default ProductItem;