import React from 'react';
import { Menu } from 'antd';
import {
    ContainerOutlined,
    DesktopOutlined,
    MailOutlined,
    PieChartOutlined,
    ShoppingCartOutlined
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import './Menu.scss';

const items = [
    {
        key: '1',
        icon: <PieChartOutlined />,
        label: <Link to='/'>Gird</Link>,
    },
    {
        key: '2',
        icon: <DesktopOutlined />,
        label: <Link to='/chart'>ChartJS</Link>,
    },
    {
        key: '3',
        icon: <ContainerOutlined />,
        label: 'Option 3',
    },
    {
        key: 'sub1',
        label: 'Navigation One',
        icon: <MailOutlined />,
        children: [
            {
                key: '5',
                label: 'Option 5',
            },
            {
                key: '6',
                label: 'Option 6',
            },
            {
                key: '7',
                label: 'Option 7',
            },
            {
                key: '8',
                label: 'Option 8',
            },
        ],
    },
    {
        key: '9',
        icon: <ShoppingCartOutlined />,
        label: <Link to='/crush'>Crush</Link>
    },
    {
        key: '10',
        icon: <ShoppingCartOutlined />,
        label: <Link to='/create-crush'>CreateCrush</Link>
    },
    {
        key: '11',
        icon: <ShoppingCartOutlined />,
        label: <Link to='/list-crush'>ListCrush</Link>
    }
];

function MenuSider(props) {
    return (
        <>
            <Menu
                mode="inline"
                items={items}
            />
        </>
    );
}

export default MenuSider;