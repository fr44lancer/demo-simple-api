'use client';
import { Table, Button, Popconfirm } from 'antd';
import { Document } from '@/types/types';

interface Props {
    data: Document[];
    onEdit: (doc: Document) => void;
    onDelete: (id: number) => void;
}

export default function DocumentTable({ data, onEdit, onDelete }: Props) {
    const columns = [
        { title: 'Type', dataIndex: 'document_type' },
        { title: 'Number', dataIndex: 'document_number' },
        { title: 'Status', dataIndex: 'document_status' },
        { title: 'Department', dataIndex: 'document_department' },
        {
            title: 'Actions',
            render: (_: any, record: Document) => (
                <>
                    <Button type="link" onClick={() => onEdit(record)}>Edit</Button>
                    <Popconfirm title="Delete this document?" onConfirm={() => onDelete(record.id)}>
                        <Button type="link" danger>Delete</Button>
                    </Popconfirm>
                </>
            ),
        },
    ];

    return <Table rowKey="id" dataSource={data} columns={columns} />;
}
