import React, { useState } from 'react';

function Lamp(props) {
    // let isOn = false
    const [ isOn, setIsOn ] = useState(false)
    const handleClick = (e) => {
        setIsOn(!isOn)
    }

    return (
        <>
            <div>
                {isOn ? ("Đèn đang bật") : ("Đèn đã tắt")} <br />
                <button onClick={handleClick}>{isOn ? ("Tắt đèn") : ("Bật đèn")}</button>
            </div>
        </>
    );
}

export default Lamp;