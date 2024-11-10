import React, { useEffect, useState } from 'react';
import "./User.css"

function Comment(props) {
    const [data, setData] = useState([])
    const [quantityPage, setQuantityPage] = useState(0)
    const [pageActive, setPageActive] = useState(0)
    const limit = 30

    useEffect(() => {
        fetch(`https://dummyjson.com/comment?limit=${limit}&skip=${pageActive * limit}`)
            .then(res => res.json())
            .then(data => {
                setData(data.comments)
                setQuantityPage(Math.ceil(data.total / limit))
            })
    }, [pageActive])

    // console.log(data)

    const handleClick = (e) => {
        setPageActive(e)
    }

    const numberPage = [...Array(quantityPage)]

    return (
        <>
            <div className='comment--list'>
                {data.map((item, index) => {
                    return (
                        <div className='comment--item' key={item.id}>
                            <ul>
                                <li className='comment--body'>
                                    <p>{item.postId}</p>
                                    <span>{item.body}</span>
                                    <p>{item.likes}</p>
                                    <div>{item.user.id}</div>
                                    <div>{item.user.fullName}</div>
                                </li>
                            </ul>
                        </div>
                    )
                })}
            </div>
            <ul>
                {numberPage.map((_, index) => {
                    return (
                        <li key={index} onClick={() => handleClick(index)}>{index + 1}</li>
                    )
                })}
            </ul>
        </>
    );
}

export default Comment;