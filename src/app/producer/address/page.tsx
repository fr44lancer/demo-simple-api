'use client';

import { useEffect, useState } from 'react';
import { Button, Modal } from 'antd';
import { Address } from '@/types/types';
import AddressTable from '@/components/pages/Address/AddressTable';
import AddressForm from '@/components/pages/Address/AddressForm';

export default function AddressCrudPage() {
    const [addresses, setAddresses] = useState<Address[]>([]);
    const [editing, setEditing] = useState<Partial<Address> | null>(null);

    const fetchData = async () => {
        const res = await fetch('/api/address');
        const data = await res.json();
        setAddresses(data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleSubmit = async (values: Partial<Address>) => {
        const method = values.id ? 'PUT' : 'POST';
        await fetch('/api/address', {
            method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values),
        });
        setEditing(null);
        fetchData();
    };

    const handleDelete = async (id: number) => {
        await fetch(`/api/address?id=${id}`, { method: 'DELETE' });
        fetchData();
    };

    return (
        <div className="p-6 max-w-5xl">
            <div className="flex justify-between mb-4">
                <h1 className="text-xl font-bold">All Addresses</h1>
                <Button type="primary" onClick={() => setEditing({})}>
                    Add Address
                </Button>
            </div>

            <AddressTable data={addresses} onEdit={setEditing} onDelete={handleDelete} />

            <Modal
                open={!!editing}
                onCancel={() => setEditing(null)}
                title={editing?.id ? 'Edit Address' : 'Add Address'}
                footer={null}
            >
                <AddressForm initialValues={editing ?? undefined} onSubmit={handleSubmit} />
            </Modal>
        </div>
    );
}
