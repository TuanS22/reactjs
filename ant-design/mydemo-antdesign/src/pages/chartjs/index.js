import React, { useEffect, useState } from 'react';
import { Line } from "@ant-design/plots";

function ChartJS(props) {
    const [dataBasicLine, setDataBasicLine] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3002/basic-line`)
            .then(res => res.json())
            .then(data => {
                setDataBasicLine(data)
            }
            )

    }, [])

    const config = {
        dataBasicLine,
        xField: 'data',
        yField: 'quantity',
    };

    return (
        <>
            <Line {...config} />
        </>
    );
}

export default ChartJS;