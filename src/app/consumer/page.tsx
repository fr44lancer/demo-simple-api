import {Col, Row} from "antd";
import ApiConsumerPanel from "@/components/pages/Consumer/Forms";

export default function Home() {
  return (
      <div className={'p-10'}>
        <Row>
            <Col span={24} >

                <p className="text-lg">This is the consumer page where you can retrieve data from API.</p>
            </Col>
            <Col xs={24}>
                <ApiConsumerPanel />
            </Col>
        </Row>
      </div>
  );
}
