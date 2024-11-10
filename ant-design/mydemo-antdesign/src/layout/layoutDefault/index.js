import React, { useState } from 'react';
import { Badge, Button, Layout } from 'antd';
import './layoutDefault.scss';
import { MenuFoldOutlined, MenuUnfoldOutlined, SearchOutlined, AppstoreAddOutlined } from '@ant-design/icons';
import Notify from '../../components/Notify';
import logo from '../../image/logo.png';
import logoFold from '../../image/logo-fold.png';
import MenuSider from '../../components/Menu';
import { Outlet } from 'react-router-dom';

const { Header, Footer, Sider, Content } = Layout;

function LayoutDefault(props) {
    // collapsed sider
    const [collapsed, setCollapsed] = useState(false);
    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    return (
        <>
            <Layout>
                <Header className='header'>
                    <div className={collapsed ? 'collapsed' : 'header__left'}>
                        <img src={collapsed ? logoFold : logo} alt='Logo' />
                    </div>
                    <div className='header__right'>
                        <div className='header__right--search'>
                            <div >
                                <Button
                                    type="primary"
                                    onClick={toggleCollapsed}
                                    style={{
                                        marginBottom: 16,
                                    }}
                                >
                                    {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                                </Button>
                            </div>
                            <div className='header__icon--search'>
                                <SearchOutlined />
                            </div>
                        </div>
                        <div className='header__right--bell'>
                            <div>
                                <Badge dot>
                                    <Notify />
                                </Badge>
                            </div>
                            <div>
                                Avatar
                            </div>
                            <div>
                                <AppstoreAddOutlined />
                            </div>
                        </div>
                    </div>
                </Header>
                <Layout>
                    <Sider width='20%' collapsed={collapsed} className='sider'>
                        <MenuSider />
                    </Sider>
                    <Content>
                        <Outlet />
                    </Content>
                </Layout>
                <Footer>Footer</Footer>
            </Layout>
        </>
    );
}

export default LayoutDefault;