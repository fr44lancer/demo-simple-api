import {Button, Col, Row} from "antd";
import Link from "next/link";
import {getPublicRegistryOpenApi} from "@/utils/openapi";

export default function Home() {
    return (
        <div className={'p-10'}>
            <Row>
                <Col span={24}>
                    <p className="text-lg mb-4">This is the producer page where you can manage your data.</p>
                    <p className="text-lg mb-2">Producer API OpenApi spec</p>
                    <pre>
                        {JSON.stringify(getPublicRegistryOpenApi(), null, 2)}
                    </pre>
                </Col>
                <Col xs={8}>
                    <Link href="/producer/person">
                        <Button type="primary" className="mt-4">Manage Persons</Button>
                    </Link>
                </Col>
            </Row>
        </div>
    );
}
