'use client';
import { Table, Button, Popconfirm } from 'antd';
import Link from 'next/link';
import { Person } from '@/types/types';
import MockDataGenerator from "@/components/shared/Data/DataGenerator";

interface Props {
    data: Person[];
    onEdit: (person: Person) => void;
    onDelete: (id: number) => void;
}

export default function PersonTable({ data, onEdit, onDelete }: Props) {
    const columns = [
        { title: 'First Name', dataIndex: 'first_name' },
        { title: 'Last Name', dataIndex: 'last_name' },
        { title: 'psn', dataIndex: 'psn' },
        {
            title: 'Address',
            render: (_: any, record: Person) => <Link href={`/producer/person/${record.id}/address`}>View</Link>,
        },
        {
            title: 'Documents',
            render: (_: any, record: Person) => <Link href={`/producer/person/${record.id}/documents`}>View</Link>,
        },
        {
            title: 'Actions',
            render: (_: any, record: Person) => (
                <>
                    <Button type="link" onClick={() => onEdit(record)}>Edit</Button>
                    <Popconfirm title="Sure to delete?" onConfirm={() => onDelete(record.id)}>
                        <Button type="link" danger>Delete</Button>
                    </Popconfirm>
                </>
            ),
        },
    ];

    return (<><Table rowKey="id" dataSource={data} columns={columns} /><MockDataGenerator /></>);
}
