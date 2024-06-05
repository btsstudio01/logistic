import React from "react";
import { Row, Col, Button, Input, Form, Select ,Radio} from "antd";
import { Colors } from "../../../constant/theme/theme";
import styled from "styled-components";
const { Option } = Select;

const CustInput = styled(Input)`
  height: 45px;
  border: 1px solid #939393;
  width: 100%;

  border-radius: 5px;
  width: 100%;
  &::placeholder {
    color: #01497c; /* Change this to the desired placeholder color */
  }
`;
const CustSelect = styled(Select)`
  height: 45px !important;
  border: 1px solid #939393;
  width: 100%;
  border-radius: 5px;
  display: flex;
  align-items: center;
  & .ant-select-selector {
    height: 100%;
    border: none !important;
    border-radius: 5px;
    background-color: transparent;
  }

  & .ant-select-selection-placeholder {
    color: #01497c;
    border: none !important;
  }
`;
const MWButton = styled(Button)`
  && {
    background-color: ${Colors?.secondry};
    border: 0;
    color: white;
    height: 40px;

    &:hover {
      color: white;
    }
  }
`;
const Heading = styled.span`
  margin-top: 2rem;
  font-size: 3rem;
  font-weight: 600;
  color: #1e455d;
  padding-inline: 0.5rem;
  font-family: inter;
  @media (max-width: 1278px) {
    font-size: 2rem;
  }
`;
const SubHeading = styled.div`
  font-size: 1.15rem;
  font-weight: 500;
  font-family: inter;
  margin-bottom: 1rem;
  margin-top: 1rem;
  padding-inline: 0.5rem;

  @media (max-width: 1278px) {
    font-size: 1rem;
  }
`;
const Register = () => {
  const [form] = Form.useForm();
  const onFinish = () => {};

  return (
    <Row justify={"center"} style={{ marginLeft: "90px" }}>
      <Col span={22}>
        <Row>
          <Col span={24}>
            <Heading>Register Account</Heading>
          </Col>
          <Col span={24}>
            <Form
              form={form}
              name="basic"
              onFinish={onFinish}
              autoComplete="off"
            >
              <Row gutter={[20, 20]}>
                <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                  <Form.Item
                    name="firstname"
                    rules={[
                      {
                        required: true,
                        message: "Please input your First Name",
                      },
                    ]}
                  >
                    <CustInput placeholder="First Name" />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                  <Form.Item
                    name="lastname"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Last Name",
                      },
                    ]}
                  >
                    <CustInput placeholder="Last Name" />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={[20, 20]}>
                <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                  <Form.Item
                    name="phone"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Phone Number",
                      },
                    ]}
                  >
                    <CustInput placeholder="Phone Number" />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                  <Form.Item
                    name="companyname"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Company Name",
                      },
                    ]}
                  >
                    <CustInput placeholder="Company Name" />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={[20, 20]}>
                <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                  <Form.Item
                    name="streetaddress"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Steet Address",
                      },
                    ]}
                  >
                    <CustInput placeholder="Street Address / Number" />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                  <Form.Item
                    name="city"
                    rules={[
                      {
                        required: true,
                        message: "Please input your City Name",
                      },
                    ]}
                  >
                    <CustInput placeholder="City " />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={[20, 20]}>
                <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                  <Form.Item
                    name="postalcode"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Postal Code",
                      },
                    ]}
                  >
                    <CustInput placeholder="Postal / ZIP Code" />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                  <Form.Item
                    name="country"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Country Name",
                      },
                    ]}
                  >
                    <CustSelect placeholder="Select a country">
                      <Select.Option value="USA">United States</Select.Option>
                      <Select.Option value="UK">United Kingdom</Select.Option>
                      <Select.Option value="Canada">Canada</Select.Option>
                      {/* Add more countries as needed */}
                    </CustSelect>
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <MWButton>Continue</MWButton>
              </Row>

              {/* //second form */}
              <Row gutter={[20, 20]} style={{marginTop:'1rem'}}>
                <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                  <Form.Item
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Email",
                      },
                    ]}
                  >
                    <CustInput placeholder="Email Address" />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                  <Form.Item
                    name="vcode"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Verification Code",
                      },
                    ]}
                  >
                    <CustInput placeholder="Verification Code" />
                  </Form.Item>
                </Col>
              </Row>
              <SubHeading>Account Type</SubHeading>

              <Row style={{marginBottom:'1rem'}}>
              <Radio.Group
                options={[
                  { label: "Customer of MAC", value: 1 },
                  { label: "Vendor of MAC", value: 2 },
                ]}
                // onChange={(e) => setPref(e.target.value)}
                // value={pref}
              />
              </Row>
              <Row gutter={[20, 20]}>
                <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                  <Form.Item
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Password",
                      },
                    ]}
                  >
                    <CustInput placeholder="Password" />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                  <Form.Item
                    name="cpassword"
                    rules={[
                      {
                        required: true,
                        message: "Please input your confirm password",
                      },
                    ]}
                  >
                    <CustInput placeholder="Confirm Password" />
                  </Form.Item>
                </Col>
              </Row>
              <Row>
            
              </Row>
                    <Row>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                  <Form.Item
                    name="userrole"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Role",
                      },
                    ]}
                  >
                    <CustSelect placeholder="User Role">
                      <Select.Option value="USA">United States</Select.Option>
                      <Select.Option value="UK">United Kingdom</Select.Option>
                      <Select.Option value="Canada">Canada</Select.Option>
                      {/* Add more countries as needed */}
                    </CustSelect>
                  </Form.Item>
                </Col>
                    </Row>
              

            <Row>
            <Radio.Group
                options={[
                  { label: "I have read and agree to the Privacy Terms and Terms of Use of the website.", value: 1 },
               
                ]}
                // onChange={(e) => setPref(e.target.value)}
                // value={pref}
              />
             
            </Row>
            <Row>
            <Radio.Group
                options={[
                  { label: "Yes, I would like to receive communication from Hapag-Lloyd (including product, rate and service updates).", value: 1 },
               
                ]}
                // onChange={(e) => setPref(e.target.value)}
                // value={pref}
              />
            </Row>
            <Row>
                <MWButton>Continue</MWButton>
                <MWButton style={{backgroundColor:'white',color:'black'}}>Cancel</MWButton>

              </Row>
             
            </Form>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Register;
