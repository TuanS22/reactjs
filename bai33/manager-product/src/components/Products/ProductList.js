import React, { useEffect, useState } from 'react';
import EditProduct from './EditProduct';
import DeleteProduct from './DeleteProduct';
import { getProductList } from '../../services/productService';

function ProductList(props) {
    const [dataProduct, setDataProduct] = useState([])
    const [loading, setLoading] = useState(true)
    const { reload } = props
    const [editReload, setEditReload] = useState(false)

    useEffect(() => {
        const fecthAPI = async () => {
            setLoading(false)
            const result = await getProductList()
            setDataProduct(result.reverse())
        }
        setTimeout(() => {
            fecthAPI()
        }, 3000)

    }, [reload, editReload])

    

    const handleEditReload = () => {
        setEditReload(!editReload)
    }

    return (
        <>
            {loading && (
                <div>Đang tải dữ liệu...</div>
            )}
            <div className='product--list'>
                {dataProduct.map((item) => {
                    return (
                        <div key={item.id} className='product--item'>
                            <img src={item.image} alt={item.title} className='product--img' />
                            <h3>{item.title}</h3>
                            <h5>{item.price}</h5>
                            <p>{item.description}</p>
                            <EditProduct item={item} onReload={handleEditReload} />
                            <DeleteProduct item={item} onReload={handleEditReload} />
                        </div>
                    )
                })}
            </div>
        </>
    );
}

export default ProductList;