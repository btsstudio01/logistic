import React,{useState} from 'react'
import {Form,Input ,Button,Upload,message,Row,Col} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import emailjs from 'emailjs-com';
import styled from 'styled-components';
const BoldSmallHeading = styled.div`
  font-size: 2rem;
  font-weight: 600;
  font-family: inter;
  color:black;
  margin-top:1rem;
  

 
`;
const CareerForm =()=>{
    const [form]=Form.useForm()
    function onFinish(values){
        const {name,email,phone,position,cv}=values;
        emailjs.sendForm('service id','temp id','#myForm','user id').then(
            (result)=>{
                console.log(result?.text)
                message.success('Your application has been submitted successfully!');

            },(error)=>{
                console.log(error.text);
        message.error('Something went wrong. Please try again later.');
            }
        )
        form.resetFields()
    }
    function onFinishFailed(errorInfo) {
        console.log('Failed:', errorInfo);
      }

      function beforeUpload(file){
        const isPdf = file.type==='application/pdf';
        if(!isPdf){
            message.error('You can only upload PDF files!');

        }
        const isLt10M=file.size/1024/1024<10;
        if (!isLt10M) {
            message.error('File must be smaller than 10MB!');
          }
          return isPdf && isLt10M;
      }
    return(
        <>
         <Row justify={"center"}>
        <Col span={22}>
        <BoldSmallHeading>Apply for a position</BoldSmallHeading>
      <Form
        id="myForm"
        form={form}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        layout="vertical"
        style={{marginTop:'2rem'}}
      >
        <Row gutter={[20,20]}>
            <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
            <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Please enter your name!' }]}
        >
          <Input />
        </Form.Item>

       
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
            <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: 'Please enter your email!' },
            { type: 'email', message: 'Please enter a valid email!' },
          ]}
        >
          <Input />
        </Form.Item>
</Col>
        </Row>

        <Form.Item
          label="Phone"
          name="phone"
          rules={[{ required: true, message: 'Please enter your phone number!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Position"
          name="position"
          rules={[{ required: true, message: 'Please enter the position you are applying for!' }]}
        >
          <Input />
        </Form.Item>

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
          rules={[{ required: true, message: 'Please upload your CV!' }]}
        >
          <Upload beforeUpload={beforeUpload}>
            <Button icon={<UploadOutlined />}>Upload</Button>
          </Upload>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">Submit</Button>
        </Form.Item>
      </Form>
        </Col>
         </Row>
         <Row justify={"center"} style={{marginTop:'2rem'}}>
            <Col span={22}>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3611.8347346839823!2d55.241595517443855!3d25.141277599999988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69738cd21491%3A0x167ebe5b3489ad82!2sMAC%20World%20Logistic%20LLC!5e0!3m2!1sen!2s!4v1683242566832!5m2!1sen!2s"
                width={"100%"}
                height="350"
                style={{ border: "none" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </Col>
         </Row>
        </>
    )
}
export default CareerForm
