import React from "react";
import { Row, Col } from "antd";
import styled from "styled-components";
import { Colors } from "../../../constant/theme/theme";

const SubHeading = styled.div`
  text-align: left;
  font-family: inter, sans-serif;
  font-size: 1.25rem;
  font-weight: 500;
  color: black;
  text-transform: capitalize;
`;

const Heading = styled.div`
  font-size: 4rem;
  font-weight: 900;
  font-family: inter;
  @media (max-width: 475px) {
    font-size: 3rem;
  }
`;
const Content = () => {
  return (
    <Row style={{ marginTop: "5vh", backgroundColor: "" }}>
      <Col span={24}>
        <Row justify={"center"}>
          <Col span={20}>
            <Row>
              <Col span={24}>
                <Heading>YOUR GATEWAY TO COMMERCE IN DUBAI & BEYOND</Heading>
                <SubHeading style={{ marginTop: "2rem" }}>
                  <b style={{ color: Colors?.primary, fontSize: "1.5rem" }}>
                    Hub.
                  </b>{" "}
                  Dubai City has emerged as a global city and a business hub.
                  Although Dubaiâ€™s economy was built on the oil industry, the
                  emirateâ€™s model of business drives its economy, with the
                  effect that its main revenues are now from tourism, real
                  estate, and financial services, similar to that of Western
                  countries. Dubai has recently attracted world attention
                  through many innovative large construction projects and sports
                  events. This increased attention has highlighted labour rights
                  and human rights issues concerning its largely South Asian
                  workforce. Almost half the population of Dubai comprises
                  Indians.
                </SubHeading>
                <br />
                <br />
                <SubHeading>
                  <b style={{ color: Colors?.primary, fontSize: "1.5rem" }}>
                    Region.
                  </b>{" "}
                  As a regional business base, Dubai is strategically located
                  midway between the Far East and Europe on the east-west
                  trading routes and between the former Soviet Union and Africa
                  on the north-south axis. Its airport, which ranks as one of
                  the worlds busiest in terms of transit passengers, is linked
                  to more than 130 destinations via some 86 airlines and Dubai
                  Ports Authority â€“ the operator of Port Rashid and Jebel Ali
                  Port â€“ is unrivalled throughout the region in terms of both
                  facilities and efficiency.
                </SubHeading>
                <br />
                <br />
                <SubHeading>
                  <b style={{ color: Colors?.primary, fontSize: "1.5rem" }}>
                    Free Zones.
                  </b>{" "}
                  Dubai has no taxes on profits or incomes; it offers complete
                  freedom of capital movement; it boasts a sophisticated
                  financial and services sector; its communications facilities
                  are excellent; and the cost structure for doing business is
                  highly competitive. Apart from its attractions as a regional
                  office location, Dubai also offers incoming companies
                  excellent facilities for establishing manufacturing and
                  distribution operations. In the Jebel Ali Free Zone and the
                  new Airport Free Zone, overseas companies are permitted to set
                  up wholly-owned ventures and can enjoy an array of incentives,
                  including exemption from import duties, in addition to the
                  favourable investment conditions which prevail elsewhere in
                  Dubai.
                </SubHeading>{" "}
                <br />
                <br />
                <SubHeading>
                  <b style={{ color: Colors?.primary, fontSize: "1.5rem" }}>
                    Financial City.
                  </b>{" "}
                  A City Mayors survey rated Dubai as 44th among the worldâ€™s
                  best financial cities in 2007, while another report by City
                  Mayors indicated that Dubai was the worldâ€™s 33rd richest
                  city in 2009, in terms of purchasing power parity (PPP).Dubai
                  is also an international financial centre and has been ranked
                  37th within the top 50 global financial cities as surveyed by
                  the Mastercard Worldwide Centres of Commerce Index (2007), and
                  1st within the Middle East.
                </SubHeading>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Content;
