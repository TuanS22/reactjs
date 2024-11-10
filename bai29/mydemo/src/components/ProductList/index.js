import React from 'react';
import { productList } from '../Data/product';
import ProductItem from '../ProductItem';

function ProductList(props) {
    console.log(productList)

    return (
        <>
            <div className='product--list'>
                {productList.map((item, index) => (
                    <ProductItem item={item} key={item.id} />
                ))}
            </div>
        </>
    );
}

export default ProductList;