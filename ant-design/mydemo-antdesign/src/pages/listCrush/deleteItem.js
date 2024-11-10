import { Button, Popconfirm } from 'antd';
import React from 'react';
import { deleteCrush } from '../../services/createCrushService';

function DeleteItem(props) {
    const { record, onReload } = props

    // Hiển thị thông báo
    //const [api, contextHolder] = notification.useNotification();
    //{contextHolder}
    const handleDeleteItem = async () => {
        const response = await deleteCrush(record.id)
        if (response) {
            onReload()
            /*
            api.info({
                message: `Thông báo`,
                description:
                    'Bạn đã xóa khách hàng thành công.',
            });
            */
        }
    }

    return (
        <>
            <Popconfirm title="Chắc chắn xóa?" onConfirm={handleDeleteItem}>
                <Button>Xóa</Button>
            </Popconfirm>
        </>
    );
}

export default DeleteItem;