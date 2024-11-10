import React, { useState } from 'react';
import { Button, Checkbox, Col, DatePicker, Input, Row, Space, Radio, Select, notification } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { postCrush } from '../../services/crushService';

function Crush(props) {
    const [data, setData] = useState({
        number: '1',
        time: '1 giờ'
    })

    const handleOnChangeInput = (e) => {
        const object = {
            ...data,
            [e.target.name]: e.target.value
        }

        setData(object)
    }

    // Checkbox
    const handleOnChangeCheckbox = (e) => {
        const object = {
            ...data,
            services: e
        }

        setData(object)
    }

    // Radio
    const handleOnChangeRadio = (e) => {
        const object = {
            ...data,
            radio: e.target.value
        }

        setData(object)
    };

    // Select
    const optionNumber = []
    const optionTime = []

    for (let i = 1; i <= 10; i++) {
        optionNumber.push({
            value: i > 9 ? `${i} lần` : `0${i} lần`,
            label: i > 9 ? `${i} lần` : `0${i} lần`
        })
    }

    for (let i = 1; i <= 24; i++) {
        optionTime.push({
            value: i > 9 ? `${i} giờ` : `0${i} giờ`,
            label: i > 9 ? `${i} giờ` : `0${i} giờ`
        })
    }

    const handleChangeSelect = (e) => {
        const object = {
            ...data,
            number: e
        }

        setData(object)
    }

    const handleChangeSelectTime = (e) => {
        const object = {
            ...data,
            time: e
        }

        setData(object)
    }

    // Date
    const handleOnChangeDatePicker = (_, dateString) => {
        const object = {
            ...data,
            date: dateString
        }

        setData(object)
    }

    // Hiển thị thông báo
    const [api, contextHolder] = notification.useNotification();
    // Submit
    const handleSubmit = async (placement) => {
        const response = await postCrush(data)
        if (response) {
            api.info({
                message: `Thông báo`,
                description:
                    'Bạn đã đăng ký dịch vụ thành công. Cảm ơn!',
                placement,
            });
        }

    }

    return (
        <>
            {contextHolder}
            <Row gutter={[10, 20]}>
                <Col xxl={24} xl={24} lg={24} md={24} sm={24} xs={24}>
                    <h1>Thông tin đăng ký thuê người yêu</h1>
                </Col>
                <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
                    <p>Họ và tên?</p>
                    <Input name='name' prefix={<UserOutlined />} placeholder='Le Anh A' onChange={handleOnChangeInput} />
                </Col>
                <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
                    <p>Tuổi?</p>
                    <Input name='age' placeholder='22' onChange={handleOnChangeInput} />
                </Col>
                <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
                    <p>Số điện thoại?</p>
                    <Input name='phone' prefix={<UserOutlined />} placeholder='0123456789' onChange={handleOnChangeInput} />
                </Col>
                <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
                    <p>Email?</p>
                    <Input name='email' prefix={<UserOutlined />} placeholder='leanha@gmail.com' onChange={handleOnChangeInput} />
                </Col>

                <Col span={24}>
                    <Space.Compact direction="vertical">
                        <Checkbox.Group onChange={handleOnChangeCheckbox}>
                            <Checkbox value="thue-nguoi-yeu">Thuê người yêu</Checkbox>
                            <Checkbox value="thue-nha">Thuê nhà</Checkbox>
                            <Checkbox value="thue-xe-may">Thuê xe máy</Checkbox>
                        </Checkbox.Group>
                    </Space.Compact>
                </Col>

                <Col span={24}>
                    <Radio.Group onChange={handleOnChangeRadio} >
                        <Radio value='quan-dai'>Quần dài</Radio>
                        <Radio value='ao-so-mi'>Áo sơ mi</Radio>
                        <Radio value='mu-bao-hiem'>Mũ bảo hiểm</Radio>
                        <Radio value='nuoc-hoa-nam'>Nước hoa nam</Radio>
                    </Radio.Group>
                </Col>

                <Col span={12}>
                    <p>Thuê mấy lần</p>
                    <Select
                        defaultValue={data.number}
                        style={{
                            width: 120,
                        }}
                        onChange={handleChangeSelect}
                        options={optionNumber}
                    />
                </Col>

                <Col span={12}>
                    <p>Thuê trong bao lâu</p>
                    <Select
                        defaultValue={data.time}
                        style={{
                            width: 120,
                        }}
                        onChange={handleChangeSelectTime}
                        options={optionTime}
                    />
                </Col>

                <Col span={24}>
                    <Space direction="vertical" size={12}>
                        <DatePicker
                            format={'DD/MM/YYYY HH:mm:ss'}
                            showTime
                            placeholder='Nhập ngày'
                            onChange={handleOnChangeDatePicker}
                        />
                    </Space>
                </Col>

                <Col>
                    <Button type='primary' onClick={() => handleSubmit('top')}>Đăng ký</Button>
                </Col>
            </Row>
        </>
    );
}

export default Crush;