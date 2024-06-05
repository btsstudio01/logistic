import React from "react";

import {
  Row,
  Col,
  Image,
  Collapse,
  Tabs,
  Form,
  Input,
  Button,
  Grid,
  Divider,
} from "antd";
import { Colors } from "../../../constant/theme/theme";
import styled from "styled-components";
import {
  HeroHeading,
  HeroSubHeading,
  Wrapper,
} from "../../../common/globalStyle";
import {
  CiCircleFilled,
  MinusCircleFilled,
  PlusCircleFilled,
} from "@ant-design/icons";
import { FaCircle, FaCirclePlus } from "react-icons/fa6";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { useState } from "react";
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
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const items = [
  {
    key: "1",
    label: "This is panel header 1",
    children: <p>{text}</p>,
  },
  {
    key: "2",
    label: "This is panel header 2",
    children: <p>{text}</p>,
  },
  {
    key: "3",
    label: "This is panel header 3",
    children: <p>{text}</p>,
  },
];
const FAQSection = ({ title, desc, Data }) => {
  const { Panel } = Collapse;
  const [form] = Form.useForm();
  const screens = useBreakpoint();
  const [mode, setMode] = useState("top");
  const onFinish = () => {};

  const customExpandIcon = ({ isActive }) => {
    return isActive ? (
      <MinusCircleFilled color={"#E30022"} style={{ fontSize: "20px" }} />
    ) : (
      <FaCirclePlus
        color={"#E30022"}
        style={{
          fontSize: "20px",
          // backgroundColor: Colors.main,
        }}
      />
    );
  };
  const onChange = (key) => {
    console.log(key);
  };
  return (
    <Wrapper
      style={{
        marginLeft: screens?.lg ? "90px" : "0px",
        marginTop: "5vh",
        flexDirection: "column",
      }}
    >
      <Row justify={"start"} style={{ paddingLeft: "15px" }}>
        <Col>
          <Row justify={"start"}>
            <HeroHeading>{title}</HeroHeading>
          </Row>
        </Col>
      </Row>
      <br />
      <Row justify={"start"} style={{ marginTop: "2rem", paddingLeft: "15px" }}>
        <Col>
          <Tabs responsive={{ md: "dropdown" }} type="card" onChange={onChange}>
            {Data?.map((val) => (
              <Tabs.TabPane key={val.id} tab={`${val.title}`}>
                <Row>
                  <Col style={{ width: "90vw", marginTop: "20px" }}>
                    <Collapse
                      size="large"
                      accordion
                      expandIconPosition="right"
                      expandIcon={customExpandIcon}
                      defaultActiveKey={["1"]}
                      bordered={false}
                      onChange={onChange}
                      style={{
                        backgroundColor: "white",
                        width: "100%",
                        display: "grid",

                        gridTemplateColumns: screens.lg ? "1fr 1fr" : "1fr",
                        gap: "20px",
                      }}
                    >
                      {val?.data.map((e, i) => (
                        <Panel
                          header={
                            <div
                              style={{
                                fontSize: "18px",
                                fontWeight: 500,
                              }}
                            >
                              <FaCircle
                                size={10}
                                style={{ marginRight: "15px" }}
                              />
                              {e?.question}
                            </div>
                          }
                          key={e?.id}
                        >
                          <p>{e?.answer}</p>
                        </Panel>
                      ))}
                    </Collapse>
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
export default FAQSection;
