import { Col, Row } from 'antd';
import React from 'react';
import './Gird.css';
import CartItemm from '../CartItem';

function Gird(props) {
    return (
        <>
            <Row gutter={[10, 15]} className={'mt-20'}>
                <Col xxl={6} xl={6} lg={6} md={12} sm={24} xs={24}>
                    <CartItemm title="Box 1" />
                </Col>
                <Col xxl={6} xl={6} lg={6} md={12} sm={24} xs={24}>
                    <CartItemm title="Box 2" />
                </Col>
                <Col xxl={6} xl={6} lg={6} md={12} sm={24} xs={24}>
                    <CartItemm title="Box 3" />
                </Col>
                <Col xxl={6} xl={6} lg={6} md={12} sm={24} xs={24}>
                    <CartItemm title="Box 4" />
                </Col>
            </Row>

            <Row gutter={[10, 15]} className={'mt-20'}>
                <Col xxl={16} xl={16} lg={16} md={24} sm={24} xs={24}>
                    <CartItemm title="Box 5" style={{ height: '300px' }} />
                </Col>
                <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
                    <CartItemm title="Box 6" style={{ height: '300px' }} />
                </Col>
            </Row>

            <Row gutter={[10, 15]} className={'mt-20'}>
                <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
                    <CartItemm title="Box 7" style={{ height: '300px' }} />
                </Col>
                <Col xxl={16} xl={16} lg={16} md={24} sm={24} xs={24}>
                    <CartItemm title="Box 8" style={{ height: '300px' }} />
                </Col>
            </Row>

            <Row gutter={[10, 15]} className={'mt-20'}>
                <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
                    <CartItemm title="Box 9" style={{ height: '400px'}} />
                </Col>
                <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
                    <CartItemm title="Box 10" style={{ height: '400px'}} />
                </Col>
                <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
                    <CartItemm title="Box 11" style={{ height: '400px'}} />
                </Col>
            </Row>
        </>
    );
}

export default Gird;