'use client';
import { Form, Input, Button } from 'antd';
import { Address } from '@/types/types';

interface Props {
    initialValues?: Partial<Address>;
    onSubmit: (values: Partial<Address>) => void;
}

export default function AddressForm({ initialValues, onSubmit }: Props) {
    const [form] = Form.useForm();

    const handleFinish = (values: any) => {
        const payload = { ...initialValues, ...values };
        onSubmit(payload);
    };

    return (
        <Form
            form={form}
            layout="vertical"
            initialValues={initialValues}
            onFinish={handleFinish}
        >
            <Form.Item name="region" label="Region" rules={[{ required: true }]}>
                <Input />
            </Form.Item>
            <Form.Item name="community" label="Community">
                <Input />
            </Form.Item>
            <Form.Item name="street" label="Street">
                <Input />
            </Form.Item>
            <Form.Item name="building" label="Building">
                <Input />
            </Form.Item>
            <Form.Item name="apartment" label="Apartment">
                <Input />
            </Form.Item>
            <Form.Item name="postal_Index" label="Postal Index">
                <Input />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">Save Address</Button>
            </Form.Item>
        </Form>
    );
}
