'use client';

import { useEffect, useState } from 'react';
import { Button, Modal } from 'antd';
import { Person } from '@/types/types';
import PersonTable from '@/components/pages/Person/PersonTable';
import PersonForm from '@/components/pages/Person/PersonForm';

export default function PersonPage() {
    const [persons, setPersons] = useState<Person[]>([]);
    const [editingPerson, setEditingPerson] = useState<Person | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const loadPersons = async () => {
        const res = await fetch('/api/person');
        const data = await res.json();
        setPersons(data);
    };

    useEffect(() => {
        loadPersons();
    }, []);

    const handleCreate = async (person: Partial<Person>) => {
        await fetch('/api/person', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(person),
        });
        setIsModalOpen(false);
        loadPersons();
    };

    const handleUpdate = async (person: Partial<Person>) => {
        await fetch('/api/person', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(person),
        });
        setEditingPerson(null);
        loadPersons();
    };

    const handleDelete = async (id: number) => {
        await fetch(`/api/person?id=${id}`, { method: 'DELETE' });
        loadPersons();
    };

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-xl font-bold">Person Registry</h1>
                <Button type="primary" onClick={() => setIsModalOpen(true)}>
                    Add Person
                </Button>
            </div>

            <PersonTable
                data={persons}
                onEdit={(person: Person) => setEditingPerson(person)}
                onDelete={handleDelete}
            />

            <Modal
                open={isModalOpen || editingPerson !== null}
                onCancel={() => {
                    setIsModalOpen(false);
                    setEditingPerson(null);
                }}
                footer={null}
                title={editingPerson ? 'Edit Person' : 'Add Person'}
            >
                <PersonForm
                    initialValues={editingPerson ?? undefined}
                    onSubmit={editingPerson ? handleUpdate : handleCreate}
                />
            </Modal>
        </div>
    );
}
