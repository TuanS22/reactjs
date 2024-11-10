import React, { useState } from 'react';

function Cart(props) {
    const Price = 10000;
    const [ quantity, setQuantity ] = useState(1)

    const handleChange = (e) => {
        const updateQuantity = parseInt(e.target.value)
        setQuantity(updateQuantity)
    }

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>PriceAll</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Nước lọc</td>
                        <td>
                            <input onChange={handleChange} type='number' min={1} defaultValue={1} />
                        </td>
                        <td>{Price}</td>
                        <td>{Price * quantity}</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}

export default Cart;