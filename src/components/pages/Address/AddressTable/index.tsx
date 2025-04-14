'use client';
import { Table, Button, Popconfirm } from 'antd';
import { Address } from '@/types/types';

interface Props {
    data: Address[];
    onEdit: (address: Address) => void;
    onDelete: (id: number) => void;
}

export default function AddressTable({ data, onEdit, onDelete }: Props) {
    const columns = [
        { title: 'Region', dataIndex: 'region' },
        { title: 'Community', dataIndex: 'community' },
        { title: 'Street', dataIndex: 'street' },
        { title: 'Building', dataIndex: 'building' },
        { title: 'Apartment', dataIndex: 'apartment' },
        { title: 'Postal Index', dataIndex: 'postal_Index' },
        {
            title: 'Actions',
            render: (_: any, record: Address) => (
                <>
                    <Button type="link" onClick={() => onEdit(record)}>Edit</Button>
                    <Popconfirm title="Delete this address?" onConfirm={() => onDelete(record.id)}>
                        <Button type="link" danger>Delete</Button>
                    </Popconfirm>
                </>
            ),
        },
    ];

    return <Table rowKey="id" dataSource={data} columns={columns} />;
}
