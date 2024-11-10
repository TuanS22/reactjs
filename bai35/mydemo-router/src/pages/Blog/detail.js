import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Goback from '../../Components/Goback';

function BlogDetail(props) {
    const params = useParams()
    const [dataProductDetail, setDataProductDetail] = useState([])

    useEffect(() => {
        const fetchApi = () => {
            fetch(`https://dummyjson.com/products/${params.id}`)
                .then(res => res.json())
                .then(data => {
                    setDataProductDetail(data)
                })
        }

        fetchApi()
    }, [params])

    return (
        <>
            <Goback />
            {dataProductDetail && (
                <div>
                    <img src={dataProductDetail.thumbnail} alt={dataProductDetail.title} />
                    <h4>{dataProductDetail.title}</h4>
                    <h6>{dataProductDetail.price}</h6>
                    <p>{dataProductDetail.description}</p>
                </div>
            )}
        </>
    );
}

export default BlogDetail;