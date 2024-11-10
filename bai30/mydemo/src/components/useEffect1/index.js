import React, { useEffect } from 'react';

function UseEffect1(props) {
    useEffect(() => {
        let listPay = document.querySelectorAll("li")
        console.log(listPay)
    })

    return (
        <>
            <ul>
                <li>Thanh toán 1</li>
                <li>Thanh toán 2</li>
                <li>Thanh toán 3</li>
            </ul>
        </>
    );
}

export default UseEffect1;