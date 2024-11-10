import React from 'react';
import { product } from "../Data/product"
import ProductItem from '../ProductItem';

function ProductList(props) {
    console.log(product)
    return (
        <>
            <ul>
                {product.map((item) => {
                    return (
                        <ProductItem item={item} key={item.id} />
                    )
                })}
            </ul>
        </>
    );
}

export default ProductList;