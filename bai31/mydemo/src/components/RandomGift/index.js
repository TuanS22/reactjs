import React, { useRef, useState } from 'react';

function RandomGift(props) {
    const gifts = ["Laptop", "Smartphone", "Book", "Car", "Moto"]
    const [result, setResult] = useState("")
    // lưu trữ giá trị và không render lại component
    const click = useRef(1)

    const handleRandom = () => {
        if(click.current < 3) {
            const random = Math.floor(Math.random()*gifts.length)
            setResult(gifts[random])
            click.current = click.current + 1
            // console.log(click.current)
            // console.log(random)
        }else {
            alert("Quá 2 lần")
        }
    }


    return (
        <>
            <div>
                Bạn nhận được: {result}
            </div>
            <div>
                <button onClick={handleRandom}>Quay thưởng</button>
            </div>
        </>
    );
}

export default RandomGift;