'use client';
import { useEffect, useState } from 'react';
import { Form, Input, Button, Select } from 'antd';
import { Document,Person } from '@/types/types';

interface Props {
    initialValues?: Partial<Document>;
    onSubmit: (values: Partial<Document>) => void;
}

export default function DocumentForm({ initialValues, onSubmit }: Props) {
    const [form] = Form.useForm();
    const [people, setPeople] = useState<Person[]>([]);

    useEffect(() => {
        fetch('/api/person')
            .then(res => res.json())
            .then(data => setPeople(data));
    }, []);

    const handleFinish = (values: any) => {
        const payload = {
            ...initialValues,
            ...values,
        };
        onSubmit(payload);
    };

    return (
        <Form
            form={form}
            layout="vertical"
            initialValues={initialValues}
            onFinish={handleFinish}
        >
            <Form.Item name="document_type" label="Document Type" rules={[{ required: true }]}>
                <Input />
            </Form.Item>
            <Form.Item name="document_number" label="Document Number">
                <Input />
            </Form.Item>
            <Form.Item name="document_status" label="Document Status">
                <Input />
            </Form.Item>
            <Form.Item name="document_department" label="Document Department">
                <Input />
            </Form.Item>

            <Form.Item name="personId" label="Person">
                <Select placeholder="Select person">
                    {people.map((p) => (
                        <Select.Option key={p.id} value={p.id}>
                            {p.first_name} {p.last_name} ({p.psn})
                        </Select.Option>
                    ))}
                </Select>
            </Form.Item>

            <Form.Item>
                <Button htmlType="submit" type="primary">Save Document</Button>
            </Form.Item>
        </Form>
    );
}
