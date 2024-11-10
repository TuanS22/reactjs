import React, { useEffect, useState } from 'react';
import "./User.css";

function Users(props) {
    // lưu data
    const [ data, setData ] = useState([])
    // số user/page
    let limit = 20
    // số lượng page
    const [ quantityPage, setQuantityPage ] = useState(0)
    // thay đổi page
    const [ pageActive, setPageActive ] = useState(0)

    // call api
    useEffect(() => {
        fetch(`https://dummyjson.com/users?limit=${limit}&skip=${pageActive * limit}`)
            .then(res => res.json())
            .then(data => {
                setData(data.users)
                setQuantityPage(Math.ceil(data.total / limit))
            })
    }, [pageActive])

    // hàm click chuyển page
    const handleClick = (e) => {
        setPageActive(e)
    }
    
    // chuyển number to array
    const numberPage = [...Array(quantityPage)]

    return (
        <>
            <div className='user--list'>
                {data.map((item) => {
                    return (
                        <div className='user--item' key={item.id}>
                            <div className='user--name'>{item.id}</div>

                            <div className='user--img'>
                                <img src={item.image} alt={item.maidenName} />
                            </div>
                            <div className='user--info'>
                                <div className='user--name'>{item.firstName} {item.lastName}</div>
                                <div className='user--age'>{item.age}</div>
                                <div className='user--address'>{item.address.address} {item.address.city}</div>
                                <div className='user--email'>{item.email}</div>
                                <div className='user--phone'>{item.phone}</div>
                                <div className='user--bank'>{item.bank.cardNumber}</div>
                                <div className='user--role'>{item.role}</div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <ul>
                {numberPage.map((item, index) => (
                    <li key={index} onClick={() => handleClick(index)}>{index + 1}</li>
                ))}
            </ul>
        </>
    );
}

export default Users;