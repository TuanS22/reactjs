import React from 'react';

function ProductItem(props) {
    const { item } = props
    const { name } = item
    
    return (
        <>
            <li>{name}</li>
        </>
    );
}

export default ProductItem;