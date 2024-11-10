import React from 'react';
import { Badge, Card, Col, Row } from 'antd';

function GirdList(props) {
    const { data } = props
    const show = true

    return (
        <>
            {data && (
                <Row gutter={20} style={{margin: '0'}}>
                    {data.map((item) => {
                        return (
                            <Col span={6} key={item.id} style={{ marginTop: '20px' }}>
                                {item.status ? (
                                    <Badge.Ribbon text="Công khai" color="#52c41a">
                                        <Badge
                                            className="site-badge-count-109"
                                            count={show && (" ")}
                                            style={{
                                                backgroundColor: '#52c41a',
                                            }}
                                        />
                                        <Card title={item.username} bordered={false} style={{ height: '250px' }}>
                                            {item.optionVip.map((i, v) => {
                                                return (
                                                    <p key={v}>Hạng: <strong>{i}</strong></p>
                                                )
                                            })}
                                            <p>Ngày đăng ký: <strong>{item.signup}</strong></p>
                                        </Card>
                                    </Badge.Ribbon>
                                ) : (
                                    <Badge.Ribbon text="Riêng tư" color='#f5222d'>
                                        <Badge
                                            className="site-badge-count-109"
                                            count={show && (" ")}
                                            style={{
                                                backgroundColor: '#f5222d',
                                            }}
                                        />
                                        <Card title={item.username} bordered={false} style={{ height: '250px' }}>
                                            {item.optionVip.map((_, v) => {
                                                return (
                                                    <p key={v}>Thông tin người dùng không được phép công khai!</p>
                                                )
                                            })}
                                        </Card>
                                    </Badge.Ribbon>
                                )}
                            </Col>
                        )
                    })}
                </Row>
            )}
        </>
    );
}

export default GirdList;