import React, { useEffect, useState } from 'react';

function ProductState(props) {
    const [dataProduct, setDataProduct] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchApi = () => fetch(`https://dummyjson.com/products`)
            .then(res => res.json())
            .then(data => {
                setDataProduct(data.products)
                setLoading(false)
            })
    
            setTimeout(() => {
                fetchApi()
            }, 3000)

    })
    return (
        <>
            {loading ? (
                <div>Đang tải dữ liệu ...</div>
            ) : (
                <div>
                    {dataProduct.map((item) => {
                        return (
                            <div key={item.id} style={{ borderBottom: "1px solid gray" }}>
                                <h4>{item.title}</h4>
                                <p>{item.description}</p>
                            </div>
                        )
                    })}
                </div>
            )}
        </>
    );
}

export default ProductState;