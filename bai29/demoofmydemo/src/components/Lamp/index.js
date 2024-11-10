import React, { useState } from 'react';

function Lamp(props) {
    // let status = false
    const [ status, setStatus ] = useState(false)
    const handleClick = () => {
        // status = !status
        setStatus(!status)
        console.log(status)
    }


    return (
        <>
            <div style={{display: "flex"}}>
                {status ? ("Đèn đang bật") : ("Đèn đã tắt")}
            </div>
            <button onClick={handleClick}>{status ? ("Tắt đèn") : ("Bật đèn")}</button>
        </>
    );
}

export default Lamp;