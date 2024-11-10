import React, { useEffect, useState } from 'react';
import "./Tabs.css";
import logo from "./mew2.png";
import '../useEffect2/Product.css';

function Tab(props) {
    // lưu data
    const [data, setData] = useState([])
    // chuyển tab
    const [tabPage, setTabPage] = useState("products")
    // số lượng page của từng tab
    const [quantityPage, setQuantityPage] = useState(0)
    // phân trang(Pagination)
    const [pageActive, setPageActive] = useState(0)
    // số sản phẩm/page
    let limit = 30
    // call api
    useEffect(() => {
        fetch(`https://dummyjson.com/${tabPage}?limit=${limit}&skip=${pageActive * limit}`)
            .then(res => res.json())
            .then(data => {
                setData(data[tabPage])
                setQuantityPage(Math.ceil(data.total / limit))

            })
    }, [tabPage, pageActive, limit])

    const handleClick = (tab) => {
        setTabPage(tab)
        setPageActive(0);
    }

    const handlePagination = (page) => {
        setPageActive(page)
    }

    // thêm .keys() để chuyển sang mảng có giá trị
    // nếu k .keys() thì mảng là undefined
    const numberPage = [...Array(quantityPage).keys()]

    return (
        <>
            <div className='header'>
                <div className='flex w-1170'>
                    <div>
                        <img className='img-menu' src={logo} alt='Mew mew' width={50} height={50} />
                    </div>
                    <div>
                        <ul className='flex'>
                            <li style={{ border: "none", marginLeft: "0" }} onClick={() => handleClick("products")}>Products</li>
                            <li style={{ border: "none", marginLeft: "0" }} onClick={() => handleClick("users")}>Users</li>
                            <li style={{ border: "none", marginLeft: "0" }} onClick={() => handleClick("comments")}>Comments</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='product--list'>
                {data.map((item) => {
                    return (
                        <div className='product--item' key={item.id}>
                            <div>
                                {tabPage !== "comments" ? (
                                    <img src={item.thumbnail || item.image} alt={item.title || item.maidenName} className='product--img' />
                                ) : (
                                    ""
                                )}
                            </div>
                            <div>
                                <h4>{item.title || item.firstName || item.user.username}</h4>
                                <h6>{item.price || item.age || item.user.id}</h6>
                                <p>{item.description || item.email || item.body}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div style={{width: "1410px", margin: "auto"}}>
                <ul style={{ display: "flex", listStyle: "none", flexWrap: "wrap" }}>
                    {numberPage.map((item) => {
                        return (
                            <li className={pageActive === item ? 'page--active' : ""} key={item} onClick={() => handlePagination(item)}>{item + 1}</li>
                        )
                    })}
                </ul>
            </div>
        </>
    );
}

export default Tab;