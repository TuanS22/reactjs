import React, { useEffect, useReducer } from 'react';

const init = ({
    product: [],
    loading: true
})

const reducer = (state, action) => {
    if (action.type === "success") {
        return ({
            product: action.product,
            loading: false
        })
    }
    else {
        return state
    }
}

function ProductReducer(props) {
    const [dataProduct, dispatch] = useReducer(reducer, init)
 
    useEffect(() => {
        const fetchApi = () => {
            fetch(`https://dummyjson.com/products`)
                .then(res => res.json())
                .then(data => {
                    dispatch({
                        type: "success",
                        product: data.products
                    })
                })
        }

        setTimeout(() => {
            fetchApi()
        }, 3000)

    }, [])

    // console.log(loading)
    console.log(dataProduct)

    return (
        <>
            {dataProduct.loading ? (
                <div>Đang tải dữ liệu...</div>
            ) : (
                <>
                    <div>
                        {dataProduct.product.map((item) => {
                            return (
                                <div key={item.id} style={{ borderBottom: "1px solid gray" }}>
                                    <h3>{item.title}</h3>
                                    <h4>{item.category}</h4>
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

export default ProductReducer;