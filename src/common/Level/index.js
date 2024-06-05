import React from "react";
import { Row, Col, Image, Tabs, Form, Input, Button, Grid } from "antd";
import { Colors } from "../../constant/theme/theme";
import styled from "styled-components";
import Arrow from "../../assets/arrow.png";
import { HeroHeading, HeroSubHeading, Wrapper } from "../globalStyle";
const { useBreakpoint } = Grid;

const LocPara = styled.div`
  font-size: 0.8rem;
  font-weight: 500;
  color: ${Colors?.primary};
  font-family: inter;
  text-align: left;
`;
const CustInput = styled(Input)`
  padding: 0.8rem;
`;
const CustTextArea = styled(Input.TextArea)`
  padding: 0.8rem;
`;
const StyledTabPane = styled(Tabs.TabPane)`
  background-color: ${({ id }) => (id === 1 ? "red" : "blue")};
  /* Add other desired styles */
`;

const BusinessText = styled.div`
  font-size: 1.7rem;
  font-weight: 600;
  font-family: inter;
  color: black;
  margin-inline: 1rem;
  margin-bottom: 0.8rem;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;
const BusinessSubText = styled.div`
  font-size: 1rem;
  font-weight: 600;
  font-family: inter;
  color: ${Colors?.primary};
  margin-inline: 1rem;
  margin-bottom: 0.25rem;
`;
const BusinessDescText = styled.div`
  font-size: 1rem;
  font-weight: 600;
  font-family: inter;
  color: black;
  margin-inline: 1rem;
  margin-bottom: 0.25rem;
`;
const BusinessDescRow = styled(Row)`
  display: flex;
  align-items: center;
`;
const Level = ({ title, desc, Data, setSelected }) => {
  const [form] = Form.useForm();
  const screens = useBreakpoint();

  const onFinish = () => {};

  const onChange = (key) => {
    setSelected && setSelected(key);
  };
  return (
    <Wrapper
      style={{ marginLeft: screens?.lg ? "90px" : "0px", marginTop: "5vh" }}
    >
      <Row justify={"start"} style={{ paddingLeft: "15px" }}>
        <Col span={24}>
          <Row justify={"start"}>
            <HeroHeading>{title}</HeroHeading>
          </Row>
        </Col>
        <Col span={24}>
          <Row justify={"start"}>
            <HeroSubHeading>{desc}</HeroSubHeading>{" "}
          </Row>
        </Col>
      </Row>

      <Row justify={"start"} style={{ marginTop: "2rem", paddingLeft: "15px" }}>
        <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
          <Tabs type="card" onChange={onChange}>
            {Data?.map((val) => (
              <Tabs.TabPane key={val.id} tab={`${val.title}`}>
                <Row>
                  <Col span={24}>
                    <BusinessText>{val?.title}</BusinessText>
                    <BusinessSubText>{val?.sub}</BusinessSubText>
                    <Row>
                      <BusinessDescText style={{ fontWeight: "normal" }}>
                        {val?.desc}
                      </BusinessDescText>
                    </Row>
                    {val?.img && (
                      <Row>
                        <Image preview={false} src={val?.img} />
                      </Row>
                    )}
                  </Col>
                </Row>
              </Tabs.TabPane>
            ))}
          </Tabs>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default Level;
