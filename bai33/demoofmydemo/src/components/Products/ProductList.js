import React, { useEffect, useState } from 'react';
import EditProduct from './EditProduct';
import DeleteProduct from './DeleteProduct';
import { getProductService } from '../../services/productList';

function ProductList(props) {
    const [dataProduct, setDataProduct] = useState([])
    const { reload } = props
    const [editReload, setRditReload] = useState(false)

    useEffect(() => {
        const fecthApi = async () => {
            const result = await getProductService()
            setDataProduct(result.reverse())
        }
        fecthApi()
    }, [reload, editReload])

    const handleEditReload = () => {
        setRditReload(!editReload)
    }

    return (
        <>
            <div className='product--list'>
                {dataProduct.map((item) => {
                    return (
                        <div className='product--item' key={item.id}>
                            <img className='product--img' src={item.image} alt={item.title} />
                            <h3>{item.title} </h3>
                            <h5>{item.price} </h5>
                            <p>{item.description} </p>
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