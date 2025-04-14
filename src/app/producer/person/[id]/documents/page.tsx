// app/person/[id]/documents/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { Document } from '@/types/types';
import DocumentTable from '@/components/pages/Document/DocumentTable';
import DocumentForm from '@/components/pages/Document/DocumentForm';
import { Button, Modal } from 'antd';

export default function DocumentPage() {
    const { id } = useParams<{ id: string }>();
    const [documents, setDocuments] = useState<Document[]>([]);
    const [editing, setEditing] = useState<Partial<Document> | null>(null);

    const loadDocs = async () => {
        const res = await fetch('/api/document');
        const data = await res.json();
        setDocuments(data.filter((d: Document) => d.personId === Number(id)));
    };

    useEffect(() => {
        loadDocs();
    }, [id]);

    const handleSave = async (doc: Partial<Document>) => {
        const method = doc.id ? 'PUT' : 'POST';
        const url = '/api/document';
        const payload = { ...doc, personId: Number(id) };

        await fetch(url, {
            method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
        });

        setEditing(null);
        loadDocs();
    };

    const handleDelete = async (docId: number) => {
        await fetch(`/api/document?id=${docId}`, { method: 'DELETE' });
        loadDocs();
    };

    return (
        <div className="p-6 max-w-4xl">
            <h1 className="text-xl font-bold mb-4">Documents for Person #{id}</h1>

            <Button type="primary" onClick={() => setEditing({})} className="mb-4">
                Add Document
            </Button>

            <DocumentTable data={documents} onEdit={setEditing} onDelete={handleDelete} />

            <Modal
                open={!!editing}
                onCancel={() => setEditing(null)}
                footer={null}
                title={editing?.id ? 'Edit Document' : 'Add Document'}
            >
                <DocumentForm initialValues={editing ?? undefined} onSubmit={handleSave} />
            </Modal>
        </div>
    );
}
