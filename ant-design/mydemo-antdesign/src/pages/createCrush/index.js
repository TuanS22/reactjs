import { Button, Col, DatePicker, Form, Input, notification, Row, Select, Switch } from 'antd';
import { Option } from 'antd/es/mentions';
import { postCreateCrush } from '../../services/createCrushService';
import { useState } from 'react';

const rules = [
    {
        required: true,
        message: "Bắt buộc!",
    },
]

function CreateCrush(props) {
    // Lấy ra time
    const [dataTime, setDataTime] = useState('')
    // Reset Fields 
    const [form] = Form.useForm()

    const handleOnChangeTime = (_, dateString) => {
        setDataTime(dateString)
    };

    console.log(dataTime)

    // Hiển thị thông báo
    const [api, contextHolder] = notification.useNotification();
    
    const handleSubmit = async (value) => {
        const formattedValues = {
            ...value,
            signup: dataTime
        };

        const response = await postCreateCrush(formattedValues)
        console.log(response)

        if (response) {
            // resetFields về form trắng
            form.resetFields()
            // hiển thị thông báo thành công
            api.info({
                message: `Thông báo`,
                description:
                    'Bạn đã đăng ký thành công. Cảm ơn!',
                value,
            });
        }
    };

    return (
        <>
            {contextHolder}
            <h2>Thêm Crush mới</h2>
            <Form onFinish={handleSubmit} form={form}>
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={rules}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            label="Password"
                            name="password"
                            rules={rules}
                        >
                            <Input.Password />
                        </Form.Item>
                    </Col>

                    <Col span={12}>
                        <Form.Item
                            valuePropName='checked'
                            label="Công khai"
                            name="status"
                        >
                            <Switch checkedChildren="开启" unCheckedChildren="关闭" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            label="Hạng Vip"
                            name="optionVip"
                        >
                            <Select
                                mode='multiple'
                                placeholder='Chọn hạng Vip'
                                allowClear

                            >
                                <Option value='1'>Hạng 1</Option>
                                <Option value='2'>Hạng 2</Option>
                                <Option value='3'>Hạng 3</Option>
                                <Option value='4'>Hạng 4</Option>
                                <Option value='5'>Hạng 5</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            label="Ngày đăng ký"
                            name="signup"
                            rules={rules}
                        >
                            <DatePicker
                                showTime
                                format="DD/MM/YYYY HH:mm:ss"
                                style={{ width: "100%" }}
                                onChange={handleOnChangeTime}
                            />
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Gửi
                            </Button>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </>
    );
}

export default CreateCrush;