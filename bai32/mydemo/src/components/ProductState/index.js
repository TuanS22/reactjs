import React, { useEffect, useState } from 'react';
import "./ProductState.css";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function ProductState(props) {
    const [dataProduct, setDataProduct] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchApi = () => {
            fetch(`https://dummyjson.com/products`)
                .then(res => res.json())
                .then(data => {
                    setDataProduct(data.products)
                    setLoading(false)
                })
        }

        setTimeout(() => {
            fetchApi()
        }, 3000)

    }, [])

    console.log(loading)
    console.log(dataProduct)

    return (
        <>
            {loading ? (
                <div className='product--list'>
                    {[...Array(30).keys()].map((item) => {
                        return (
                            <div className='product--item' key={item}>
                                <Skeleton className='product--img' />
                                <Skeleton count={3} />
                            </div>
                        )
                    })}
                </div>
            ) : (
                <>
                    <div className='product--list'>
                        {dataProduct.map((item) => {
                            return (
                                <div key={item.id} className='product--item'>
                                    <img src={item.thumbnail} alt={item.title} className='product--img' />
                                    <h3>{item.title}</h3>
                                    <h5>{item.price}</h5>
                                    <p>{item.description}</p>
                                </div>
                            )
                        })}
                    </div>
                </>
            )}
        </>
    );
}

export default ProductState;