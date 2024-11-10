import React, { useState } from 'react';
import ProductList from './ProductList';
import "./Product.css";
import CreateProduct from './CreateProduct';

function Products(props) {
    const [reload, setReload] = useState(false)

    const handleReload = () => {
        setReload(!reload)
    }

    return (
        <>
            <h2 className='product--title'>Danh sách sản phẩm</h2>
            <CreateProduct onReload={handleReload} />
            <ProductList onReload={handleReload} />
        </>
    );
}

export default Products;