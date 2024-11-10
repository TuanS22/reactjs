import { Button, FloatButton, Switch } from 'antd';
import { useState } from 'react';
import { CommentOutlined, CustomerServiceOutlined, FullscreenOutlined } from '@ant-design/icons';

function LearnButton(props) {
    const [loading, setLoading] = useState(false)
    const [open, setOpen] = useState(true);

    const handleClick = () => {
        setLoading(true)
        setTimeout(() => {
            const result = {
                code: 200,
                info: 'Thành công'
            }
            if (result.code === 200) {
                setLoading(false)
            }
        }, 2000)
    }

    return (
        <>
            <Button type='primary'
                loading={loading} size='large'
                disabled={loading}
                onClick={handleClick}
                icon={<FullscreenOutlined rotate={65} spin={true} />}
                style={{
                    margin: '2% 50%'
                }}
            >
                Gửi
            </Button>

            <Switch
                onChange={setOpen}
                checked={open}
                style={{
                    margin: 20,
                    width: '2%',
                }}
            />
            <FloatButton.Group
                open={open}
                shape="square"
                trigger="click"
                style={{
                    insetInlineEnd: 88,
                }}
                icon={<CustomerServiceOutlined />}
            >
                <FloatButton />
                <FloatButton />
                <FloatButton icon={<CommentOutlined />} />
            </FloatButton.Group>
        </>
    );
}

export default LearnButton;