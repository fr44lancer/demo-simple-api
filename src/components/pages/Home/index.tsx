// app/page.tsx
'use client';

import {Button, Card, Col, Row, Typography} from 'antd';
import Link from 'next/link';
import HowToUse from "@/components/pages/Home/HowToUse";

const {Title, Paragraph} = Typography;

const items = [
    {
        key: 'ubuntu',
        label: 'Ubuntu',
        children: (
            <>
                <Paragraph>
                    <strong>1. Install Node.js & npm:</strong>
                    <pre className="bg-gray-100 p-3 rounded text-sm mt-2 whitespace-pre-wrap">
                            sudo apt update
                            sudo apt install nodejs npm
                            </pre>
                </Paragraph>

                <Paragraph>
                    <strong>2. Clone the project:</strong>
                    <pre className="bg-gray-100 p-3 rounded text-sm whitespace-pre-wrap">
                            git clone https://github.com/your/project.git
                            cd project
                            </pre>
                </Paragraph>

                <Paragraph>
                    <strong>3. Install dependencies:</strong>
                    <pre className="bg-gray-100 p-3 rounded text-sm">npm install</pre>
                </Paragraph>

                <Paragraph>
                    <strong>4. Setup DB:</strong>
                    <pre className="bg-gray-100 p-3 rounded text-sm">cp .env.example .env.local</pre>
                    Then set your MySQL <code>DATABASE_URL</code> in <code>.env.local</code>.
                </Paragraph>

                <Paragraph>
                    <strong>5. Run migrations:</strong>
                    <pre className="bg-gray-100 p-3 rounded text-sm">npx prisma migrate dev --name init</pre>
                </Paragraph>

                <Paragraph>
                    <strong>6. Start the dev server:</strong>
                    <pre className="bg-gray-100 p-3 rounded text-sm">npm run dev</pre>
                </Paragraph>

                <Paragraph>
                    <strong>7. Generate mock data (optional):</strong>
                    Use the <code>Generate Mock Data</code> button in the UI to simulate Armenian data.
                </Paragraph>
            </>
        ),
    },
    {
        key: 'macos',
        label: 'macOS',
        children: (
            <>
                <Paragraph>
                    <strong>1. Install Node.js:</strong>
                    <pre className="bg-gray-100 p-3 rounded text-sm mt-2 whitespace-pre-wrap">
                            brew install node
                            </pre>
                    If you don’t have Homebrew, install it from <a className="underline" href="https://brew.sh"
                                                                   target="_blank">https://brew.sh</a>
                </Paragraph>

                <Paragraph>
                    <strong>2. Clone the project:</strong>
                    <pre className="bg-gray-100 p-3 rounded text-sm whitespace-pre-wrap">
                            git clone https://github.com/your/project.git
                            cd project
                            </pre>
                </Paragraph>

                <Paragraph>

                    <strong>3. Install dependencies:</strong>
                    <pre className="bg-gray-100 p-3 rounded text-sm">npm install</pre>
                </Paragraph>

                <Paragraph>
                    <strong>4. Setup DB & env:</strong>
                    <pre className="bg-gray-100 p-3 rounded text-sm">cp .env.example .env.local</pre>
                    Update <code>.env.local</code> with your MySQL <code>DATABASE_URL</code>.
                </Paragraph>

                <Paragraph>
                    <strong>5. Migrate DB:</strong>
                    <pre className="bg-gray-100 p-3 rounded text-sm">npx prisma migrate dev --name init</pre>
                </Paragraph>

                <Paragraph>
                    <strong>6. Start the server:</strong>
                    <pre className="bg-gray-100 p-3 rounded text-sm">npm run dev</pre>
                </Paragraph>

                <Paragraph>
                    <strong>7. Generate mock data (optional):</strong>
                    Use the mock button in the UI to generate Armenian citizens, addresses, and documents.
                </Paragraph>
            </>
        ),
    },
    {
        key: 'windows',
        label: 'Windows',
        children: (
            <>
                <Paragraph>
                    <strong>1. Install Node.js:</strong><br/>
                    Download from <a href="https://nodejs.org" target="_blank"
                                     className="underline">https://nodejs.org</a> and run the installer.
                </Paragraph>

                <Paragraph>
                    <strong>2. Clone the project:</strong>
                    <pre className="bg-gray-100 p-3 rounded text-sm whitespace-pre-wrap">
                            git clone https://github.com/your/project.git
                            cd project
                            </pre>
                </Paragraph>

                <Paragraph>
                    <strong>3. Install dependencies:</strong>
                    <pre className="bg-gray-100 p-3 rounded text-sm">npm install</pre>
                </Paragraph>

                <Paragraph>
                    <strong>4. Create env config:</strong>
                    <pre className="bg-gray-100 p-3 rounded text-sm">copy .env.example .env.local</pre>
                    Set your <code>DATABASE_URL</code> for MySQL in <code>.env.local</code>.
                </Paragraph>

                <Paragraph>
                    <strong>5. Run DB migration:</strong>
                    <pre className="bg-gray-100 p-3 rounded text-sm">npx prisma migrate dev --name init</pre>
                </Paragraph>

                <Paragraph>
                    <strong>6. Launch the app:</strong>
                    <pre className="bg-gray-100 p-3 rounded text-sm">npm run dev</pre>
                </Paragraph>

                <Paragraph>
                    <strong>7. (Optional) Generate mock data:</strong><br/>
                    Click the <code>Generate Mock Data</code> button to simulate data.
                </Paragraph>
            </>
        ),
    },
];
export default function HomePage() {
    return (
        <div className="min-h-screen bg-gray-50 p-10">
            <div className="max-w-5xl mx-auto space-y-10">

                {/* Section: Hero */}
                <div className="text-center">
                    <Title level={2}>Welcome to the Public Registry API producer/consumer Demo</Title>
                    <Paragraph className="text-gray-600">
                        This platform allows you to simulate producing and consuming registry APIs with mock Armenian
                        citizen and address data.
                    </Paragraph>
                </div>

                {/* Section: Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Card title="📡 API Producer" className="shadow-md">
                        <p>Create mock people, addresses, and documents to simulate registry APIs.</p>
                        <Link href="/producer">
                            <Button type="primary" className="mt-4">Browse producer app</Button>
                        </Link>
                    </Card>

                    <Card title="🧑‍💻 API Consumer" className="shadow-md">
                        <p>Test the v1 API endpoints and consume registry data programmatically.</p>
                        <Link href="/consumer">
                            <Button type="primary" className="mt-4">Browse consumer app</Button>
                        </Link>
                    </Card>
                </div>

                <Row>
                    <Col xs={24}>

                        <HowToUse/>

                    </Col>

                </Row>

            </div>
        </div>
    );
}