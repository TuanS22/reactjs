import React from 'react';
import { Button, Dropdown, Space } from 'antd';
import { BellOutlined } from '@ant-design/icons';
import './Notify.scss';

// Danh sách dropdown
const items = [
    {
        label:
            <div className='item__notify'>
                <div>
                    <div className='item__notify--icon'>
                        <BellOutlined />
                    </div>
                    <div></div>
                </div>
                <div>
                    <div className='item__notify--title'>
                        Đã có 5 người bình luận
                    </div>
                    <div className='item__notify--time'>
                        6 phút trước
                    </div>
                </div>
            </div>,
        key: '0',
    },
    {
        label:
            <div className='item__notify'>
                <div>
                    <div className='item__notify--icon'>
                        <BellOutlined />
                    </div>
                    <div></div>
                </div>
                <div>
                    <div className='item__notify--title'>
                        Đã có 5 người bình luận
                    </div>
                    <div className='item__notify--time'>
                        6 phút trước
                    </div>
                </div>
            </div>,
        key: '1',
    },
    {
        label:
            <div className='item__notify'>
                <div>
                    <div className='item__notify--icon'>
                        <BellOutlined />
                    </div>
                    <div></div>
                </div>
                <div>
                    <div className='item__notify--title'>
                        Đã có 2 người chia sẽ
                    </div>
                    <div className='item__notify--time'>
                        7 phút trước
                    </div>
                </div>
            </div>,
        key: '2',
    },
    {
        label:
            <div className='item__notify'>
                <div>
                    <div className='item__notify--icon'>
                        <BellOutlined />
                    </div>
                    <div></div>
                </div>
                <div>
                    <div className='item__notify--title'>
                        Đã có 10 người thích
                    </div>
                    <div className='item__notify--time'>
                        8 phút trước
                    </div>
                </div>
            </div>,
        key: '3',
    },
    {
        label:
            <div className='item__notify'>
                <div>
                    <div className='item__notify--icon'>
                        <BellOutlined />
                    </div>
                    <div></div>
                </div>
                <div>
                    <div className='item__notify--title'>
                        Đã có 320 người xem
                    </div>
                    <div className='item__notify--time'>
                        10 phút trước
                    </div>
                </div>
            </div>,
        key: '4',
    },
];

function Notify(props) {
    return (
        <>
            <Dropdown trigger={['click']}
                menu={{
                    items,
                }}
                dropdownRender={(menu) => {
                    return (
                        <>
                            <div className='notify'>
                                <div className='notify__top'>
                                    <div className='notify__top--left'>
                                        <div><BellOutlined /></div>
                                        <div>Notification</div>
                                    </div>
                                    <div className='notify__top--right'>
                                        <Button type='link'>View All</Button>
                                    </div>
                                </div>
                                <div className='notify__bottom'>
                                    {menu}
                                </div>
                            </div>
                        </>
                    )
                }}
            >
                <a href='/' onClick={(e) => e.preventDefault()}>
                    <Space>
                        <BellOutlined />
                    </Space>
                </a>
            </Dropdown>
        </>
    );
}

export default Notify;