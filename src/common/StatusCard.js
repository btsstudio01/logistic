import { Card, Col, Row, Avatar } from "antd";
import React from "react";
import plane from "../assets/StatuscardPlane.png";
import ship from "../assets/StatusCardShip.png";
import countryFrom from "../assets/StatusCardFrom.png";
import countryTo from "../assets/StatusCardTo.png";

const { Meta } = Card;

const StatusCard = (props) => {
  return (
    <Row gutter={24} justify={"center"}>
      <Col span={12}>
        <Card title={"Muhammad Anas"}>
          <Row gutter={24} justify={"start"}>
            <Meta
              avatar={<Avatar src={plane} />}
              title="Service"
              description="This is the description"
            />
            <Meta
              avatar={
                <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
              }
              title="Card title"
              description="This is the description"
            />
            <Meta
              avatar={<Avatar src={countryFrom} />}
              title="From"
              description="This is the description"
            />
            <Meta
              avatar={<Avatar src={countryTo} />}
              title="To"
              description="This is the description"
            />
          </Row>
        </Card>
      </Col>
    </Row>
  );
};

export default StatusCard;
