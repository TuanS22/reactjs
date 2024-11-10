import { Badge, Table, Tag } from 'antd';
import React from 'react';
import DeleteItem from './deleteItem';
import Column from 'antd/es/table/Column';

function TableList(props) {
    const { data, onReload } = props

    /* 
    const columns = [
        {
            title: 'Tên',
            dataIndex: 'username',
            key: 'username',
        },
        {
            title: 'Hạng',
            dataIndex: 'optionVip',
            key: 'optionVip',
            render: (_, { optionVip }) => (
                <>
                    {optionVip.map((ov) => {
                        let color;
                        switch (ov) {
                            case "1":
                                color = 'default'
                                break
                            case "2":
                                color = 'green'
                                break
                            case "3":
                                color = 'purple'
                                break
                            case "4":
                                color = 'gold'
                                break
                            case "5":
                                color = 'red'
                                break
                            default:
                                color = 'default'
                        }
                        return (
                            <Tag color={color} key={ov}>
                                {ov.toUpperCase()}
                            </Tag>
                        );
                    })}
                </>
            )
        },
        {
            title: 'Ngày đăng ký',
            dataIndex: 'signup',
            key: 'signup',
        },
        {
            title: 'Trạng thái',
            dataIndex: 'status',
            key: 'status',
            render: (_, record) => {
                return (
                    <>
                        {record.status ? (
                            <Badge status="success" text="Công khai" />
                        ) : (
                            <Badge status="error" text="Riêng tư" />
                        )}
                    </>
                )
            }
        },
        {
            title: 'Hành động',
            key: 'action',
            render: (_, record) => {
                return (
                    <>
                        <DeleteItem record={record} onReload={onReload} />
                    </>
                )
            }
        }
    ];
    */

    return (
        <>
            <Table dataSource={data} rowKey={"id"}>
                {data.map(i => {
                    return (
                        <>
                            {i.status ? (
                                <div key={i.id}>
                                    <Column title="Tên" dataIndex="username" key="username" />
                                    <Column title="Ngày đăng ký" dataIndex="signup" key="signup" />
                                    <Column
                                        title="Hạng"
                                        dataIndex="optionVip"
                                        key="optionVip"
                                        render={(optionVip) => (
                                            <>
                                                {optionVip.map((ov) => {
                                                    let color;
                                                    switch (ov) {
                                                        case "1":
                                                            color = 'default'
                                                            break
                                                        case "2":
                                                            color = 'green'
                                                            break
                                                        case "3":
                                                            color = 'purple'
                                                            break
                                                        case "4":
                                                            color = 'gold'
                                                            break
                                                        case "5":
                                                            color = 'red'
                                                            break
                                                        default:
                                                            color = 'default'
                                                    }
                                                    return (
                                                        <Tag color={color} key={ov}>
                                                            {ov.toUpperCase()}
                                                        </Tag>
                                                    );
                                                })}
                                            </>
                                        )}
                                    />
                                </div>
                            ) : (
                                <div>
                                    False
                                </div>
                            )}
                        </>
                    )
                })}
                <Column
                    title="Hoạt động"
                    dataIndex="action"
                    key="action"
                    render={(_, record) => (
                        <>
                            <DeleteItem record={record} onReload={onReload} />
                        </>
                    )
                    }
                />
            </Table>
        </>
    );
}

export default TableList;