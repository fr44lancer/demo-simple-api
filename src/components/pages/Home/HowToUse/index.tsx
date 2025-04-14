// components/docs/InstallDocsSection.tsx
'use client';

import {Tabs, Typography} from 'antd';

const {Title, Paragraph} = Typography;

const items = [
    {
        key: 'overview',
        label: 'App Overview',
        children: (
            <div className={'p-4'}>
                <Paragraph>
                    This demo application allows you to simulate both producing and consuming registry data through a
                    real REST API.
                </Paragraph>
                <Paragraph>
                    You can:
                    <ul className="list-disc ml-6 mt-2">
                        <li>Create and manage Armenian persons, addresses, and documents</li>
                        <li>Explore the REST API via tools like Redoc or the built-in consumer panel</li>
                        <li>Generate mock citizen data with one click</li>
                    </ul>
                </Paragraph>
            </div>
        ),
    },
    {
        key: 'usage',
        label: 'How to Use the App',
        children: (
            <div className={'p-4'}>

                <Paragraph>
                    <strong>1. API Producer:</strong>{'  '}
                    Navigate to the <code>/producer</code> page to manage data.
                    <strong>1. Mock Data:</strong>{'  '}
                    Use the <code>Generate Mock Data</code> button to quickly populate fake Armenian registry entries.
                </Paragraph>

                <Paragraph>
                    <strong>3. API Consumer:</strong>{'  '}
                    Navigate to the <code>/consumer</code> page to consume api data.
                </Paragraph>

                <Paragraph>
                    <strong>4. Public Endpoints:</strong><br/>
                    - <code>/api/v1/get-person-by-psn?psn=XXXX</code> — search person by PSN<br/>
                    - <code>/api/v1/persons</code> — list persons<br/>
                    - <code>/api/v1/addresses</code> — list addresses
                </Paragraph>

            </div>
        ),
    },
    {
        key: 'install',
        label: 'Installation (GitHub)',
        children: (
            <Paragraph className={'p-4'}>
                Please refer to the full installation guide in the
                {' '}<a href="https://github.com/fr44lancer/demo-simple-api" target="_blank"
                        className="text-blue-600 underline">README on GitHub</a>.
            </Paragraph>
        ),
    }
];

export default function HowToUse() {
    return (
        <div className="mt-10 p-4 bg-white">
            <Title level={3}>How to Use the App</Title>
            <Tabs defaultActiveKey="overview" items={items} className="bg-white rounded  p-10"/>
        </div>
    );
}
