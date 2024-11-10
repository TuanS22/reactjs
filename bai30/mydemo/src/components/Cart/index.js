import React, { useEffect, useState } from 'react';

function Cart(props) {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('https://dummyjson.com/carts')
      .then(res => res.json())
      .then(data => {
        console.log(data.carts)
        setData(data.carts)
      })
  }, [])

  return (
    <>
      <div className='cart--list'>
        <ul>
          {data.map(itemCart => {
            return (
              <li>
                <span>{itemCart.total}</span>
                {itemCart.products.map(itemProduct => {
                  return (
                    <div className='cart--item'>
                      <div>
                        <h4>{itemProduct.title}</h4>
                        <h6>{itemProduct.price}</h6>
                      </div>
                    </div>
                  )
                })}
              </li>
            )
          })}
        </ul>
      </div>
    </>
  );
}

export default Cart;