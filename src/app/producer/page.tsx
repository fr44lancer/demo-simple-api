import Image from "next/image";
import HomePage from "@/components/pages/Home";
import {Button, Col, Row} from "antd";
import Link from "next/link";

export default function Home() {
  return (
      <div className={'p-10'}>
        <Row>
            <Col span={24} >
                <p className="text-lg">This is the producer page where you can manage your data.</p>
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
