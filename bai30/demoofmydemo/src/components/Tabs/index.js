import React, { useEffect, useState } from 'react';
import logo from './mew2.png'
import "./Tabs.css"
import "./Product.css"

function Tabs(props) {
    // lưu data
    const [data, setData] = useState([])
    // chuyển tab
    const [tabActive, setTabActive] = useState("posts")
    // số prodct/page
    const limit = 30
    // 
    const [pageActive, setPageActive] = useState(0)
    // tính số lượng page
    const [quantity, setQuantity] = useState(0)
    // call api
    useEffect(() => {
        fetch(`https://dummyjson.com/${tabActive}?limit=${limit}&skip=${pageActive * limit}`)
            .then(res => res.json())
            .then(data => {
                setData(data[tabActive])
                setQuantity(Math.ceil(data.total / limit))
            })
    }, [tabActive, pageActive])

    // lấy giá trị truyền về tabActive
    const handleTab = (e) => {
        setTabActive(e)
        // chuyển tab thì reset page về trang 1
        setPageActive(0)
    }

    // lấy giá trị truyền về pageActive
    const handlePagination = (e) => {
        setPageActive(e)
    }

    // chuyển biến quantity từ number to array
    // .keys() để tạo mảng có giá trị
    const numberPage = [...Array(quantity).keys()]

    return (
        <>
            <div className='header'>
                <div className='flex w-1170'>
                    <div>
                        <img className='img-menu' src={logo} width={50} height={50} alt='' />
                    </div>
                    <div>
                        <ul className='flex'>
                            <li style={{ border: "none", marginLeft: "0" }} onClick={() => handleTab("posts")}>Posts</li>
                            <li style={{ border: "none", marginLeft: "0" }} onClick={() => handleTab("todos")}>Todos</li>
                            <li style={{ border: "none", marginLeft: "0" }} onClick={() => handleTab("recipes")}>Recipes</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='product--list'>
                {data.map((item, index) => {
                    return (
                        <div className='product--item' key={item.id}>
                            <div>
                                {tabActive === "recipes" ? (
                                    <img src={item.image} className='product--img' alt={item.name} />
                                ) : (
                                    ""
                                )}
                            </div>
                            <div>
                                <h5>{item.userId}</h5>
                                <h4>{item.title || item.todo || item.name}</h4>
                                <p>{item.reactions?.likes || (item.completed)?.toString() || item.reviewCount}</p>
                                <p>{item.reactions?.dislikes || "" || item.rating}</p>
                                <p>{item.views || ""}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div style={{ width: "1410px", margin: "auto" }}>
                <ul style={{ display: "flex", listStyle: "none", flexWrap: "wrap" }}>
                    {numberPage.map((item) => {
                        return (
                            <li className={pageActive === item ? "page--active" : ""} key={item} onClick={() => handlePagination(item)}>{item + 1}</li>
                        )
                    })}
                </ul>
            </div>
        </>
    );
}

export default Tabs;