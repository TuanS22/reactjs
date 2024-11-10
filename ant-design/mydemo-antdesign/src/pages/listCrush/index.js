import React, { useEffect, useState } from 'react';
import { Switch } from 'antd';
import { getCreateCrush } from '../../services/createCrushService';
import GirdList from './girdList';
import TableList from './tableList';

function ListCrush(props) {
    const [data, setData] = useState([])
    const [ isTable, setIsTable ] = useState(false)

    const fetchApi = async () => {
        const result = await getCreateCrush("create-crush")
        setData(result)
    }

    useEffect(() => {
        fetchApi()
    }, [])

    //console.log(data)

    // Hàm xử lý switch chuyển đổi qua lại Gird Table
    const handleGirdTable = () => {
        setIsTable(!isTable)
    }

    // Sau khi xóa reload lại danh sách
    const handleOnReload = () => {
        fetchApi()
    }

    return (
        <>
            <Switch checkedChildren="Gird" unCheckedChildren="Table" defaultValue={isTable} onClick={handleGirdTable} />
            {isTable ? (
                <TableList data={data} onReload={handleOnReload} />
            ) : (
                <GirdList data={data} />
            )}
        </>
    );
}

export default ListCrush;