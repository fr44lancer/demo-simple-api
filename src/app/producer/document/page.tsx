
'use client';

import { useEffect, useState } from 'react';
import { Button, Modal } from 'antd';
import { Document } from '@/types/types';
import DocumentTable from '@/components/pages/Document/DocumentTable';
import DocumentForm from '@/components/pages/Document/DocumentForm';

export default function DocumentCrudPage() {
    const [documents, setDocuments] = useState<Document[]>([]);
    const [editing, setEditing] = useState<Partial<Document> | null>(null);

    const fetchData = async () => {
        const res = await fetch('/api/document');
        const data = await res.json();
        setDocuments(data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleSubmit = async (values: Partial<Document>) => {
        const method = values.id ? 'PUT' : 'POST';
        await fetch('/api/document', {
            method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values),
        });
        setEditing(null);
        fetchData();
    };

    const handleDelete = async (id: number) => {
        await fetch(`/api/document?id=${id}`, { method: 'DELETE' });
        fetchData();
    };

    return (
        <div className="p-6 max-w-5xl">
            <div className="flex justify-between mb-4">
                <h1 className="text-xl font-bold">All Documents</h1>
                <Button type="primary" onClick={() => setEditing({})}>
                    Add Document
                </Button>
            </div>

            <DocumentTable data={documents} onEdit={setEditing} onDelete={handleDelete} />

            <Modal
                open={!!editing}
                onCancel={() => setEditing(null)}
                title={editing?.id ? 'Edit Document' : 'Add Document'}
                footer={null}
            >
                <DocumentForm initialValues={editing ?? undefined} onSubmit={handleSubmit} />
            </Modal>
        </div>
    );
}
