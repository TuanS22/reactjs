import React from 'react';
import { useNavigate } from 'react-router-dom';

function Goback(props) {
    const navigate = useNavigate()

    const handleGoback = () => {
        navigate(-1)
    }

    return (
        <>
            <button onClick={handleGoback}>Quay lại</button>
        </>
    );
}

export default Goback;