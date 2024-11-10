import React, { useEffect, useState } from 'react';
import './productItem.scss';
import { getProductService } from '../../services/productService';
import ProductItem from './productItem';
// sử dụng khung xương
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function ProductAll(props) {
    const [dataProduct, setDataProduct] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchAPI = async () => {
            const result = await getProductService()
            setDataProduct(result)
            setLoading(false)
        }

        setTimeout(() => {
            fetchAPI()
        }, 2000)

    }, [])

    return (
        <>
            {loading ? (
                <div>
                    <Skeleton height={150} />
                    <Skeleton count={3} />
                </div>
            ) : (
                <div>
                    {dataProduct && (
                        <div>
                            {dataProduct ? (
                                <div className='product'>
                                    {dataProduct.map((item) => {
                                        return (
                                            <ProductItem item={item} key={item.id} />
                                        )
                                    })}
                                </div>
                            ) : (
                                <div>No data</div>
                            )}
                        </div>
                    )}
                </div>
            )}
        </>
    );
}

export default ProductAll;