import React, { useEffect, useState } from 'react';
import "../useEffect2/Product.css";

function UseEffect3(props) {
  let limit = 30
  // lưu data
  const [data, setData] = useState([])
  // tính số lượng page
  const [quantityPage, setQuantityPage] = useState(0)
  // thay đổi page
  const [pageActive, setPageActive] = useState(0)
  // Từ number to array cho hàm map() duyệt
  const numberArray = ([...Array(quantityPage)])
  // console.log(numberArray)

  useEffect(() => {
    fetch(`https://dummyjson.com/product?limit=${limit}&skip=${pageActive * limit}`)
      .then(res => res.json())
      .then(data => {
        // console.log(data.products)
        setData(data.products)
        setQuantityPage(Math.ceil(data.total / limit))
      })
  }, [pageActive])
  // console.log(quantityPage)

  const handleClick = (e) => {
    setPageActive(e)
    // console.log(e)
  }

  return (
    <>
      <div className='product--list'>
        {data.map((item) => {
          return (
            <div className='product--item' key={item.id}>
              <div>
                <img src={item.thumbnail} alt={item.title} className='product--img' />
              </div>
              <div>
                <h4>{item.title}</h4>
                <h6>{item.price}</h6>
                <p>{item.description}</p>
              </div>
            </div>
          )
        })}
      </div>
      <ul style={{ display: "flex", listStyle: "none" }}>
        {numberArray.map((_, index) => (
          <li key={index} onClick={() => handleClick(index)}>{index + 1}</li>
        ))}
      </ul>
    </>
  );
}

export default UseEffect3;