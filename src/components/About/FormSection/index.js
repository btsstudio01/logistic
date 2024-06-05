import React from "react";
import { Row, Col, Image, Form, Input,Button } from "antd";
import AboutLogo from "../../../assets/aboutlogo.png";
import AboutLogoTwo from "../../../assets/aboutlogotwo.jpg";
import { Colors } from "../../../constant/theme/theme";
import styled from "styled-components";
const Heading = styled.div`
  font-size: 3rem;
  font-weight: 900;
  font-family: inter;
  @media (max-width: 475px) {
    font-size: 3rem;
  }
`;
const SubHeading = styled.div`
  text-align: left;
  font-family: inter;
  font-size: 1.25rem;
  font-weight: 500;
  color: black;
  text-transform: capitalize;
`;
const MWButton = styled(Button)`
  && {
    background-color: ${Colors?.secondry};
    border: 0;
    color: white;
    margin-inline: 1rem;
    height: 40px;

    &:hover {
      color: white;
    }
  }
`;

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
const CustInputTextArea = styled(Input.TextArea)`
  height: 100px !important;
  border: 1px solid #939393;

  border-radius: 5px;
  width: 100%;
  padding: 1rem;
  &::placeholder {
    color: #01497c; /* Change this to the desired placeholder color */
  }
`;
const FormSection = () => {
  const [form] = Form.useForm();
  const onFinish = () => {};

  return (
    <Row style={{ marginTop: "5vh" }}>
      <Col span={24}>
        <Row justify={"center"}>
          <Col span={20}>
            <Heading>About Us</Heading>
            <SubHeading>
              MAC is a comprehensive logistical provider catering to small and
              large, commercial and non-commercial entities from almost any
              sector of industry, in the UAE and around the world. We make our
              self available to customers 24/7, 365 days a year. We are the
              customers’ quality service source for cargo transportation,
              commercial warehousing, storage, distribution, movers and packers
              and all logistics related project-management services. Whether
              their needs are global, regional or local, MAC delivers solutions.
            </SubHeading>
            <br/>
            <Image src={AboutLogo} preview={false} width={250} height={60} />
            <SubHeading>
              By offering a diversified group of logistics services, we focus on
              continuous, profitable growth and stress-free operations. As a
              company, we believe in growing and progressing on the foundations
              of our customers’ satisfaction and trust in the high quality and
              streamlined service that we provide. We operate in an honest and
              ethical manner with our employees, clients, suppliers and
              partners.
            </SubHeading>     <br/>
            <SubHeading>
              Our company supersedes its contemporaries on the basis of our
              highly competitive rates; well-established global connections;
              availability; proven operational performance; integrated
              Technology; seasoned logisticians’ team; active customer care and
              ethical conduct. We provide best-in-class logistics and
              transportation related services, allowing our clients to focus on
              their business goals instead of managing transportation and
              supply-chain details. We also use technology that provides our
              customers with real time data and full visibility into each and
              every one of their shipments.
            </SubHeading>
            <br/>
            <SubHeading>
              We offer comprehensive freight management and freight broker
              related services including LTL/FTL shipments in UAE, GCC & Middle
              East.
            </SubHeading>     <br/>
            <SubHeading>
              We have experience of handling a complete range of goods from
              Textile /Spare parts / House Hold / Industrial & Medical Equipment
              to Electronic Product. Our major growth markets over recent years,
              in the commercial sectors have included retailers and importers -
              both quarters benefiting from our integrated services approach to
              storage, reworking and onward distribution. Our non-commercial
              markets have included relocation candidates with requirements to
              pack and move furniture, household items and personal articles.
            </SubHeading>     <br/>
          </Col>
          <Col span={20}>
          <Heading>ONLINE ENQUIRY</Heading>
          <SubHeading>Welcome to our online enquiry form. If you have any questions about our logistics services or want to request a quote, please fill out the form below and one of our representatives will get back to you as soon as possible. We look forward to hearing from you!</SubHeading>
           <Row justify={"center"} style={{marginTop:'2rem'}}>
            <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
            <Form
              form={form}
              name="basic"
              onFinish={onFinish}
              autoComplete="off"
            >
              <Form.Item
                name="fullName"
                rules={[
                  {
                    required: true,
                    message: "Please input your Full Name",
                  },
                ]}
              >
                <CustInput placeholder="Full Name" />
              </Form.Item>
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your Email Address",
                  },
                ]}
              >
                <CustInput placeholder="Email Address" />
              </Form.Item>
              <Form.Item
                name="phonenumber"
                rules={[
                  {
                    required: true,
                    message: "Please input your Phone Number",
                  },
                ]}
              >
                <CustInput placeholder="Phone Number" />
              </Form.Item>
              <Form.Item
                name="comment"
                rules={[
                  {
                    required: true,
                    message: "Please input your Message",
                  },
                ]}
              >
                <CustInputTextArea placeholder="Comment" />
              </Form.Item>
            
            </Form>
            <Row justify={"end"}>
       <MWButton>Submit</MWButton>
       </Row>
            </Col>
           </Row>
      
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default FormSection;
