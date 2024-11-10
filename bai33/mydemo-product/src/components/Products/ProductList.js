import React, { useEffect, useState } from 'react';
import EditProduct from './EditProduct';
import DeleteProduct from './DeleteProduct';
import { getProductService } from '../../services/productService';

function ProductList(props) {
    const [dataProduct, setDataProduct] = useState([])
    const { onReload } = props
    const [reloadEdit, setReloadEdit] = useState(false)

    useEffect(() => {
        const fetchApi = async () => {
            const resuft = await getProductService()
            setDataProduct(resuft.reverse())
        }
        fetchApi()
    }, [onReload, reloadEdit])

    const handleReloadEdit = () => {
        setReloadEdit(!reloadEdit)
    }

    return (
        <>
            <div className='product--list'>
                {dataProduct.map((item, index) => {
                    return (
                        <div key={index} className='product--item'>
                            <img className='product--img' src={item.image} alt={dataProduct.title} />
                            <h3>{item.title}</h3>
                            <h5>{item.price}</h5>
                            <p>{item.description}</p>
                            <EditProduct item={item} onReload={handleReloadEdit} />
                            <DeleteProduct item={item} onReload={handleReloadEdit} />
                        </div>
                    )
                })}
            </div>
        </>
    );
}

export default ProductList;