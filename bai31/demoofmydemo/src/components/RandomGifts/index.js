import React, { useRef, useState } from 'react';

function RandomGift(props) {
    const gifts = ["Book", "Pen", "Notebook", "Smartphone", "Laptop"]
    const [result, setResult]= useState("")   
    const numberRandom = useRef(0)

    const handleRandom = () => {
        if(numberRandom.current < 2) {
            const random = Math.floor(Math.random()*gifts.length)
            setResult(gifts[random])
            numberRandom.current = numberRandom.current + 1
        }else {
            alert("Bạn đã quay thưởng quá 2 lần cho phép!")
        }
    }

    return (
        <>
            <div>
                Bạn đã trúng phần thưởng là: {result}
            </div>
            <button onClick={handleRandom}>Quay thưởng</button>
        </>
    );
}

export default RandomGift;