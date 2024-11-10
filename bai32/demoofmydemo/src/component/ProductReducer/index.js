import React, { useEffect, useReducer } from 'react';

const init = ({
    dataProduct: [],
    loading: true
})

const reducer = (state, action) => {
    console.log(action)
    if (action.type === "success") {
        return ({
            dataProduct: action.dataProduct,
            loading: false
        })
    }else {
        return state
    }
}

function ProductReducer(props) {
    const [data, dispatch] = useReducer(reducer, init)

    useEffect(() => {
        const fetchApi = () => fetch(`https://dummyjson.com/products`)
            .then(res => res.json())
            .then(data => {
                dispatch({
                    type: "success",
                    dataProduct: data.products
                })
            })

            
            setTimeout(() => {
                fetchApi()
            }, 3000)

    }, [])

    console.log(data)

    return (
        <>
            {data.loading ? (
                <div>Đang tải dữ liệu ...</div>
            ) : (
                <div>
                    {data.dataProduct.map((item) => {
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

export default ProductReducer;