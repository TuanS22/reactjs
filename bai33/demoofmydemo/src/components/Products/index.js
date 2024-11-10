import React, { useState } from 'react';
import ProductList from './ProductList';
import "./Product.css"
import CreateProduct from './CreateProduct';

function Products(props) {
    const [reload, setReload] = useState(false)

    const handleReload = () => {
        setReload(!reload)
    }

    return (
        <>
            <h1 className='product--title'>Danh sách sản phẩm</h1>
            <CreateProduct onReload={handleReload} />
            <ProductList reload={reload} />
        </>
    );
}

export default Products;