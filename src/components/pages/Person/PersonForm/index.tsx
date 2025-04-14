'use client';
import { useEffect, useState } from 'react';
import { Form, Input, DatePicker, Checkbox, Button, Select } from 'antd';
import { Person, Address } from '@/types/types';
import dayjs from 'dayjs';

interface Props {
    initialValues?: Partial<Person>;
    onSubmit: (values: Partial<Person>) => void;
}

export default function PersonForm({ initialValues, onSubmit }: Props) {
    const [form] = Form.useForm();
    const [addresses, setAddresses] = useState<Address[]>([]);

    useEffect(() => {
        const fetchAddresses = async () => {
            const res = await fetch('/api/address');
            const data = await res.json();
            setAddresses(data);
        };
        fetchAddresses();
    }, []);

    const handleFinish = (values: any) => {
        const payload: Partial<Person> = {
            ...initialValues,
            ...values,
            birth_date: values.birth_date?.toISOString(),
            death_date: values.death_date?.toISOString(),
            addressId: values.addressId ?? null,
        };
        onSubmit(payload);
    };

    return (
        <Form
            form={form}
            layout="vertical"
            initialValues={{
                ...initialValues,
                birth_date: initialValues?.birth_date ? dayjs(initialValues.birth_date) : null,
                death_date: initialValues?.death_date ? dayjs(initialValues.death_date) : null,
                addressId: initialValues?.addressId ?? null,
            }}
            onFinish={handleFinish}
        >
            <Form.Item name="psn" label="psn" rules={[{ required: true }]}>
                <Input />
            </Form.Item>

            <Form.Item name="ssn" label="SSN">
                <Input />
            </Form.Item>

            <Form.Item name="isDead" valuePropName="checked">
                <Checkbox>Is Dead</Checkbox>
            </Form.Item>

            <Form.Item name="death_date" label="Death Date">
                <DatePicker style={{ width: '100%' }} />
            </Form.Item>

            <Form.Item name="first_name" label="First Name" rules={[{ required: true }]}>
                <Input />
            </Form.Item>

            <Form.Item name="last_name" label="Last Name" rules={[{ required: true }]}>
                <Input />
            </Form.Item>

            <Form.Item name="patronymic_name" label="Patronymic Name">
                <Input />
            </Form.Item>

            <Form.Item name="birth_date" label="Birth Date">
                <DatePicker style={{ width: '100%' }} />
            </Form.Item>

            <Form.Item name="genus" label="Genus">
                <Input />
            </Form.Item>

            <Form.Item name="addressId" label="Address">
                <Select
                    allowClear
                    placeholder="Select address"
                    options={addresses.map((addr) => ({
                        value: addr.id,
                        label: `${addr.region}, ${addr.street} ${addr.building}`,
                    }))}
                />
            </Form.Item>

            <Form.Item>
                <Button htmlType="submit" type="primary">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
}
