'use client';
import {Button, Col, Row, Space} from 'antd';
import {DownloadOutlined} from '@ant-design/icons';

export default function DownloadSpecButton() {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/apiSpec.json'; // Assumes file is in public/
        link.download = 'apiSpec.json';
        link.click();
    };

    return (
        <Row>
            <Col xs={24} className={'my-4'}>
                <Space>
                    <Button
                        href="https://editor.swagger.io/"
                        target="_blank"
                    >
                        Open Swagger Editor
                    </Button>
                    <Button icon={<DownloadOutlined/>} onClick={handleDownload}>
                        Download API Spec
                    </Button>
                </Space>
            </Col>

        </Row>

    );
}
