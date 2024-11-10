import React, { useState } from 'react';

function Cart(props) {
    // const Quantity = 4
    const price = 12000
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
                        <th>Tên</th>
                        <th>Số lượng</th>
                        <th>Giá</th>
                        <th>Tổng tiền</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Bánh bao</td>
                        <td>
                            <input onChange={handleChange} type='number' min={1} defaultValue={1} />
                        </td>
                        <td>{price}</td>
                        <td>{price * quantity}</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}

export default Cart;