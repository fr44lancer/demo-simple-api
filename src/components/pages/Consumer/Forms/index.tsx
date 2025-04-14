// components/docs/ApiConsumerPanel.tsx
'use client';

import {useState} from 'react';
import {Alert, Button, Input, Tabs, Typography} from 'antd';
import DownloadSpecButton from "@/components/pages/Consumer/DownloadSpecButton";

const {TextArea} = Input;
const {Title, Paragraph} = Typography;

const tabs = [
    {
        key: 'get-person-by-psn',
        label: 'Search by psn',
        endpoint: '/api/v1/get-person-by-psn?psn=XXXX',
        method: 'GET',
        form: ({onSubmit}: { onSubmit: (psn: string) => void }) => (
            <Input.Search
                placeholder="Enter psn"
                enterButton="Search"
                onSearch={onSubmit}
            />
        ),
    },
    {
        key: 'persons',
        label: 'All Persons',
        endpoint: '/api/v1/persons',
        method: 'GET',
        form: ({onSubmit}: { onSubmit: () => void }) => (
            <Button onClick={onSubmit}>Fetch Persons</Button>
        ),
    },
    {
        key: 'addresses',
        label: 'All Addresses',
        endpoint: '/api/v1/addresses',
        method: 'GET',
        form: ({onSubmit}: { onSubmit: () => void }) => (
            <Button onClick={onSubmit}>Fetch Addresses</Button>
        ),
    },
];

export default function ApiConsumerPanel() {
    const [activeTab, setActiveTab] = useState('get-person-by-psn');
    const [result, setResult] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (param?: string) => {
        const current = tabs.find(t => t.key === activeTab);
        if (!current) return;

        const url =
            activeTab === 'get-person-by-psn'
                ? `/api/v1/get-person-by-psn?psn=${param}`
                : current.endpoint;

        setLoading(true);
        setError(null);
        try {
            const res = await fetch(url);
            const data = await res.json();
            setResult(data);
        } catch (err) {
            setError('Failed to fetch API');
            setResult(null);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-4 border rounded-md bg-white p-10 mt-10">
            <Title level={4}>Try API Endpoints</Title>
            <DownloadSpecButton/>
            <Tabs
                defaultActiveKey={activeTab}
                onChange={setActiveTab}
                items={tabs.map(tab => ({
                    key: tab.key,
                    label: tab.label,
                    children: (
                        <div className="space-y-4">
                            <Paragraph className="text-sm text-gray-600">
                                <strong>Endpoint:</strong> <code>{tab.endpoint}</code>
                                <br/>
                                <strong>Method:</strong> {tab.method}
                            </Paragraph>
                            {tab.form({onSubmit: handleSubmit})}

                            {error && <Alert type="error" message={error} showIcon/>}

                            {result && (
                                <div>
                                    <p className="font-medium">Response:</p>
                                    <TextArea
                                        value={JSON.stringify(result, null, 2)}
                                        rows={50}
                                        readOnly
                                        className="bg-gray-100 text-sm"
                                    />
                                </div>
                            )}
                        </div>
                    ),
                }))}
            />
        </div>
    );
}
