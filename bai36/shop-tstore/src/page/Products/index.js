import React from 'react';
import { Outlet } from 'react-router-dom';

function Products(props) {
    return (
        <>
            <Outlet />
        </>
    );
}

export default Products;