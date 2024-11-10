import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import './blog.scss';

function Product(props) {
    const [dataProduct, setDataProduct] = useState([])
    useEffect(() => {
        const fetchApi = () => {
            fetch(`https://dummyjson.com/products`)
                .then(res => res.json())
                .then(data => {
                    setDataProduct(data.products)
                })
        }

        fetchApi()
    }, [])
    return (
        <>
            <h4>Products</h4>
            <div className='product__list'>
                {dataProduct.map((item) => (
                    <div key={item.id} className='product__list--item'>
                        <Link to={'/blog/' + item.id}>
                            <img src={item.thumbnail} alt={item.availabilityStatus} />
                        </Link>
                        <h4>{item.price}</h4>
                        <p>{item.rating}</p>
                    </div>
                )
                )}
            </div>
        </>
    );
}

export default Product;