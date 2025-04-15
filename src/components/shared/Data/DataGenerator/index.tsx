'use client';
import {useState} from 'react';
import {Button, Form, InputNumber, message, Modal} from 'antd';

export default function MockDataGenerator() {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [form] = Form.useForm();

    const handleGenerate = async (values: any) => {
        setLoading(true);
        try {
            const res = await fetch('/api/generate', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(values),
            });

            const data = await res.json();
            if (res.ok) {
                message.success(`✅ ${data.count.persons} persons and ${data.count.addresses} addresses generated.`);
                setOpen(false);
                form.resetFields();
                location.reload()
            } else {
                message.error(data.error || 'Failed to generate mock data');
            }
        } catch (err) {
            message.error('Server error while generating mock data');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Button onClick={() => setOpen(true)}>Generate Mock Data</Button>

            <Modal
                title="Generate Mock Armenian Data"
                open={open}
                onCancel={() => setOpen(false)}
                onOk={() => form.submit()}
                confirmLoading={loading}
                okText="Generate"
            >
                <Form
                    form={form}
                    layout="vertical"
                    initialValues={{persons: 10, addresses: 5}}
                    onFinish={handleGenerate}
                >
                    <Form.Item name="addresses" label="Number of Addresses" rules={[{required: true}]}>
                        <InputNumber min={1} max={500} style={{width: '100%'}}/>
                    </Form.Item>
                    <Form.Item name="persons" label="Number of Persons" rules={[{required: true}]}>
                        <InputNumber min={1} max={1000} style={{width: '100%'}}/>
                    </Form.Item>
                    <Form.Item name="documents" label="Number of Documents" rules={[{required: true}]}>
                        <InputNumber min={1} max={1000} style={{width: '100%'}}/>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
}
