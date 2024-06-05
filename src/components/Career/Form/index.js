import React, { useState } from "react";
import { Form, Input, Button, Upload, message, Row, Col, Grid } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import emailjs from "emailjs-com";
import styled from "styled-components";
import {
  HeroHeading,
  HeroSubHeading,
  Wrapper,
} from "../../../common/globalStyle";
import { Colors } from "../../../constant/theme/theme";
const { useBreakpoint } = Grid;

const BoldSmallHeading = styled.div`
  font-size: 2rem;
  font-weight: 600;
  font-family: inter;
  color: black;
  margin-top: 1rem;
`;
const CareerForm = ({ bgColor }) => {
  const screens = useBreakpoint();

  const [form] = Form.useForm();
  function onFinish(values) {
    const { name, email, phone, position, cv } = values;
    console.log(values);
    emailjs.sendForm("service id", "temp id", "#myForm", "user id").then(
      (result) => {
        console.log(result?.text);
        message.success("Your application has been submitted successfully!");
      },
      (error) => {
        console.log(error.text);
        message.error("Something went wrong. Please try again later.");
      }
    );
    form.resetFields();
  }
  function onFinishFailed(errorInfo) {
    console.log("Failed:", errorInfo);
  }
  const StyledCol = styled(Col)`
  margin-top: 4rem;
        padding-left: screens?.lg ? 0px : 20px;
        padding-right: screens?.lg ? 0px : 20px
  `;
  function beforeUpload(file) {
    const isPdf = file.type === "application/pdf";
    if (!isPdf) {
      message.error("You can only upload PDF files!");
    }
    const isLt10M = file.size / 1024 / 1024 < 10;
    if (!isLt10M) {
      message.error("File must be smaller than 10MB!");
    }
    return isPdf && isLt10M;
  }
  return (
    <Wrapper
      screens={screens}
      style={{
        paddingRight: !screens?.lg && "20px",
        paddingLeft: !screens?.lg && "20px",
        backgroundColor: bgColor,
      }}
      justify={"center"}
    >
      <Row justify={"start"}>
        <StyledCol span={24}>
          <HeroHeading>WORKING WITH US ISN'T A JOB</HeroHeading>
          <HeroSubHeading>
            It’s the transition towards a rewarding career with unlimited
            possibilities for growth. Surround yourself with dedicated and
            motivated people like yourself who work together not just as
            colleagues and a team, but as a family - as the Salsoft family.
            Browse through our current openings and get in touch now. If you
            don't find ant listed opening relevant to your profile, feel free to
            reach out anyway, and tell us why you might be a good fit.
          </HeroSubHeading>
        </StyledCol>
        <StyledCol span={24}>
          <HeroHeading>Apply for a position</HeroHeading>
          <Form
            id="myForm"
            form={form}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            layout="vertical"
            style={{ marginTop: "2rem", marginLeft: "10px" }}
            size={"large"}
          >
            <Row gutter={[20, 0]}>
              <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                <Form.Item
                  label="Name"
                  name="name"
                  rules={[
                    { required: true, message: "Please enter your name!" },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                <Form.Item
                  label="Phone"
                  name="phone"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your phone number!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={[20, 0]}>
              <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    { required: true, message: "Please enter your email!" },
                    { type: "email", message: "Please enter a valid email!" },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                <Form.Item
                  label="Position"
                  name="position"
                  rules={[
                    {
                      required: true,
                      message:
                        "Please enter the position you are applying for!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            <Row justify={"center"}>
              <Form.Item
                label="CV"
                name="cv"
                valuePropName="fileList"
                getValueFromEvent={(event) => {
                  if (Array.isArray(event)) {
                    return event;
                  }
                  return event && event.fileList;
                }}
                rules={[{ required: true, message: "Please upload your CV!" }]}
              >
                <Upload beforeUpload={beforeUpload}>
                  <Button icon={<UploadOutlined />}>Upload</Button>
                </Upload>
              </Form.Item>
            </Row>
            <Row justify={"center"}>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{
                    backgroundColor: Colors.main,
                    width: "150px",
                  }}
                  size={"large"}
                >
                  Submit
                </Button>
              </Form.Item>
            </Row>
          </Form>
        </StyledCol>
      </Row>
    </Wrapper>
  );
};
export default CareerForm;
