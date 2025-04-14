'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { Address } from '@/types/types';
import AddressForm from '@/components/pages/Address/AddressForm';

export default function AddressPage() {
    const { id } = useParams<{ id: string }>();
    const [address, setAddress] = useState<Partial<Address> | null>(null);

    useEffect(() => {
        const fetchAddress = async () => {
            const res = await fetch(`/api/address`);
            const all = await res.json();
            const match = all.find((a: Address) => a.personId === Number(id));
            setAddress(match || null);
        };
        fetchAddress();
    }, [id]);

    const handleSave = async (data: Partial<Address>) => {
        if (address?.id) {
            await fetch('/api/address', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...data, id: address.id, personId: Number(id) }),
            });
        } else {
            await fetch('/api/address', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...data, personId: Number(id) }),
            });
        }
    };

    return (
        <div className="p-6 max-w-3xl">
            <h1 className="text-xl font-bold mb-4">Address for Person #{id}</h1>
            <AddressForm initialValues={address ?? {}} onSubmit={handleSave} />
        </div>
    );
}
