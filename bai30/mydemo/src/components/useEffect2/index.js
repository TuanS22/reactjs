import React, { useEffect, useState } from 'react';
import "./Product.css";

function UseEffect2(props) {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('https://dummyjson.com/product')
      .then(res => res.json())
      .then(data => {
        // console.log(data.products)
        setData(data.products)
      })
  }, [])

  return (
    <>
      <div className='product--list'>
        {data.map((item) => {
          return (
            <div className='product--item' key={item.id}>
            <div>
              <img src={item.thumbnail} alt={item.title} className='product--img'/>
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
    </>
  );
}

export default UseEffect2;