import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { DownOutlined, EditOutlined } from "@ant-design/icons";
import {
  Button,
  Col,
  Input,
  Form,
  message,
  Row,
  Tooltip,
  notification,
  Avatar,
} from "antd";
import { AiOutlineDown } from "react-icons/ai";
import { BiEditAlt } from "react-icons/bi";
import {
  StyledUserDashBox,
  StyledPara,
  RequestQuoteBox,
  RequestButton,
  SimpleButton,
  MapBg,
  MapCenterBox,
  Box,
} from "../../../common/globalStyle";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { Upload } from "antd";
import { useSelector } from "react-redux";
import axios, { Axios } from "axios";
import { Colors } from "../../../constant/theme/theme";
import { UploadOutlined } from "@ant-design/icons";
// import { Upload } from "antd";
// import type { UploadFile } from "antd";

export const MoreDetailBox = styled(Form)`
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 100%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 5px 30px 5px 20px;
  box-sizing: border-box;
  @media (max-width: 768px) {
    justify-content: center;
    padding-bottom: 20px;
  }
`;
const MainContent = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  & > h2 {
    padding: 0;
    margin: 0;
    font-size: 20px;
  }
`;
const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
};

const CustomInput = styled(Input)`
  border: ${({ border }) => border} !important;
  background-color: transparent !important;
  color: black !important;
  width: 300px;
  margin-left: 20px;
  @media (max-width: 413px) {
    width: 150px;
  }
  @media (min-width: 414px) and (max-width: 560px) {
    width: 100%;
  }
`;
const Profile = ({ setRefetch, refetch }) => {
  const [profileForm] = Form.useForm();
  const [Data, setData] = useState({});
  const urlData = useSelector((state) => state.counter.credentials);
  const [companyForm] = Form.useForm();
  const [adminForm] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [editProfileInfo, setEditProfileInfo] = useState(false);
  const [editCompanyInfo, setEditCompanyInfo] = useState(false);
  const [editAdminInfo, setEditAdminInfo] = useState(false);
  const [imageUrl, setImageUrl] = useState();
  const [tradeCertificate, setTradeCertificate] = useState(null);
  const [profileData, setProfileData] = useState([]);
  const [comapnyData, setCompanyData] = useState([
    {
      id: 1,
      label: "Comapany Name",
      name: "Comapany Name",
      value: Data?.companyname,
    },
    {
      id: 2,
      label: "Address",
      name: "Address",
      value: Data?.companyaddress,
    },
    // { id: 3, label: "Corprate-Email", name: "Corprate-Email", value: "xyzc@gmail.com" },
    // { id: 4, label: "Account Type", name: "Account Type", value: "Shipper" },
    // { id: 5, label: "Phone", name: "Company Phone", value: "+342 33657551312" },
  ]);
  const [adminData, setAdminData] = useState([
    {
      id: 1,
      label: "Old Password",
      name: "old",
      value: "",
      placeholder: "Enter Old Password Here",
    },
    {
      id: 2,
      label: "New Password",
      name: "new",
      value: "",
      placeholder: "Enter New Password Here",
    },
    {
      id: 3,
      label: "Confirm Password",
      name: "confirm",
      value: "",
      placeholder: "Enter New Password Again",
    },
  ]);
  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };
  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );
  const fetchData = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_CALCULATOR}userDashboard/GetProfileInfo/${urlData._id}`
    );
    if (response?.data?.data) {
      console.log(response.data.data, "rep");
      setData(response.data.data);
      setProfileData([
        {
          id: 1,
          label: "User Name",
          name: "username",
          value: response.data.data?.username,
        },
        {
          id: 2,
          label: "Email",
          name: "email",
          value: response.data.data?.email,
        },
        {
          id: 3,
          label: "Phone",
          name: "phonenumber",
          value: response.data.data?.phonenumber,
        },
        { id: 4, label: "City", name: "city", value: response.data.data?.city },
        {
          id: 4,
          label: "Country",
          name: "country",
          value: response.data.data?.country,
        },
      ]);
      setCompanyData([
        {
          id: 1,
          label: "Comapany Name",
          name: "companyname",
          value: response.data.data?.companyname,
        },
        {
          id: 2,
          label: "Address",
          name: "companyaddress",
          value: response.data.data?.companyaddress,
        },
      ]);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const onFinish = async (values) => {
    let modal = {};
    for (let [f, k] of Object.entries(values)) {
      console.log(f, k);
      if (k != undefined && f != "email") {
        modal[f] = k;
      }
    }
    console.log(modal);
    const response = await axios.patch(
      `${process.env.REACT_APP_CALCULATOR}userDashboard/UpdateProfileInfo`,
      {
        userId: urlData._id,
        updatedData: modal,
      }
    );
    if (response) {
      setEditProfileInfo(false);
      setEditCompanyInfo(false);
      setRefetch(!refetch);
      fetchData();
    }
  };

  const ChangePassword = async (values) => {
    try {
      if (!values.old || !values.new || !values.confirm) {
        return notification.error({
          message: "Invalid",
          description: "Please Fill all Fields.",
        });
      }
      if (
        values.old.length < 8 ||
        values.new.length < 8 ||
        values.confirm.length < 8
      ) {
        return notification.error({
          message: "Invalid",
          description: "THere Should at least 8 charcters in password",
        });
      }
      console.log("first");
      const response = await axios.patch(
        `${process.env.REACT_APP_CALCULATOR}userDashboard/ChangePassword`,
        {
          email: urlData.email,
          oldPass: values.old,
          newPass: values.new,
          confirmPass: values.confirm,
        }
      );

      if (response) {
        setEditAdminInfo(false);
        setRefetch(!refetch);
        adminForm.setFieldsValue({
          new: "",
          old: "",
          confirm: "",
        });
        setAdminData((prevData) =>
          prevData.map((item) => ({ ...item, value: null }))
        );
        return notification.success({
          message: "Successs",
          description: "Password Updated Successfully",
        });
      }
    } catch (error) {
      return notification.error({
        message: "Invalid",
        description: error.response.data.error,
      });
    }
  };
  const uploadFile = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("tradeCerticate", tradeCertificate);
      formData.append("email", profileData[1].value);

      const options = {
        method: "POST",
        body: formData,
      };

      const response = await fetch(
        `${process.env.REACT_APP_CALCULATOR}userDashboard/uploadTradeCertificate`,
        options
      );
      fetchData();

      if (!response.ok) {
        const res = await response.json();
        console.log("ss", res);
        return notification.error({
          message: "Upload failed ",
          description: res.error,
        });
      }
    } catch (error) {
      return notification.error({
        message: "Upload failed ",
        description: error?.message,
      });
    }
  };
  const ReUploadFile = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_CALCULATOR}userDashboard/ReUploadTradeCertificate`,
        { email: profileData[1].value, certificate: Data.trade_certificate }
      );
      fetchData();
    } catch (error) {
      return notification.error({
        message: "Upload failed ",
        description: error?.message,
      });
    }
  };

  const handleFile = (e) => {
    setTradeCertificate(e.target.files[0]);
  };
  return (
    <div style={{ padding: "30px" }}>
      <StyledUserDashBox
        gutter={[0, 0]}
        style={{
          padding: "20px 0px",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <div>
          <Avatar
            style={{
              backgroundColor: Colors.main,
              verticalAlign: "middle",
              fontSize: "20px",
            }}
            size={80}
            // gap={20}
          >
            {Data?.username && Data?.username[0]?.toUpperCase()}
          </Avatar>
        </div>
        <Col>
          <h1>{Data?.username?.replace(/([A-Z])/g, " $1")}</h1>
          <h3>{Data?.companyname}</h3>
        </Col>
      </StyledUserDashBox>
      <MoreDetailBox
        gutter={[20, 20]}
        form={profileForm}
        onFinish={onFinish}
        style={{
          marginTop: "30px",
          paddingTop: "30px",
          paddingBottom: "30px",
          justifyContent: "center",
        }}
      >
        <MainContent>
          <h2>Profile Information</h2>
          {/* <BiEditAlt size={30} /> */}
          {editProfileInfo ? (
            <div style={{ display: "flex", gap: "10px" }}>
              <Button
                onClick={() => {
                  setEditProfileInfo(false);
                  profileForm.setFieldsValue({
                    username: profileData[0].value,
                    email: profileData[1].value,
                    phonenumber: profileData[2].value,
                    city: profileData[3].value,
                    country: profileData[4].value,
                  });
                }}
              >
                Cancel
              </Button>
              <Button type="primary" htmlType="submit">
                Save
              </Button>
            </div>
          ) : (
            <Button style={{ border: "none" }}>
              <BiEditAlt size={30} onClick={() => setEditProfileInfo(true)} />
            </Button>
          )}
        </MainContent>

        <div style={{ width: "100%" }}>
          <hr style={{ margin: "20px 0px", borderColor: "#A0A0A0" }} />
          <div>
            {profileData.map((e, i) => (
              <Row key={e.id} gutter={[0, 10]}>
                <Col span={8} md={6} xl={4} xxl={3}>
                  <label style={{ fontWeight: "bold", width: "600px" }}>
                    {e.label} :{" "}
                  </label>
                </Col>
                <Col>
                  <Form.Item
                    key={e.id}
                    name={e.name}
                    rules={[
                      {
                        message: `Please input your ${e.label}!`,
                      },
                    ]}
                  >
                    <CustomInput
                      border={
                        !(e.label == "Email") && editProfileInfo
                          ? "1px solid #A0A0A0"
                          : "none"
                      }
                      defaultValue={e.value}
                      disabled={
                        !(e.label == "Email") && editProfileInfo ? false : true
                      }
                    />
                  </Form.Item>
                </Col>
              </Row>
            ))}

            {/* </Form> */}
          </div>
        </div>
      </MoreDetailBox>
      <MoreDetailBox
        gutter={[20, 20]}
        form={companyForm}
        onFinish={onFinish}
        style={{
          marginTop: "30px",
          paddingTop: "30px",
          paddingBottom: "30px",
          justifyContent: "center",
        }}
      >
        <MainContent>
          <h2>Company Information</h2>
          {/* <BiEditAlt size={30} /> */}
          {editCompanyInfo ? (
            <div style={{ display: "flex", gap: "10px" }}>
              <Button
                onClick={() => {
                  setEditCompanyInfo(false);
                  console.log(comapnyData);
                  companyForm.setFieldsValue({
                    companyname: comapnyData[0].value,
                    companyaddress: comapnyData[1].value,
                  });
                }}
              >
                Cancel
              </Button>
              <Button type="primary" htmlType="submit">
                Save
              </Button>
            </div>
          ) : (
            <Button style={{ border: "none" }}>
              <BiEditAlt size={30} onClick={() => setEditCompanyInfo(true)} />
            </Button>
          )}
        </MainContent>

        <div style={{ width: "100%" }}>
          <hr style={{ margin: "20px 0px", borderColor: "#A0A0A0" }} />
          <div>
            {comapnyData.map((e, i) => (
              <Row key={e.id} gutter={[0, 10]}>
                <Col span={8} md={6} xl={4} xxl={3}>
                  <label style={{ fontWeight: "bold", width: "600px" }}>
                    {e.label} :{" "}
                  </label>
                </Col>
                <Col>
                  <Form.Item
                    key={e.id}
                    name={e.name}
                    rules={[
                      {
                        message: `Please input your ${e.label}!`,
                      },
                    ]}
                  >
                    <CustomInput
                      border={editCompanyInfo ? "1px solid #A0A0A0" : "none"}
                      defaultValue={e.value}
                      disabled={editCompanyInfo ? false : true}
                    />
                  </Form.Item>
                </Col>
              </Row>
            ))}

            {/* </Form> */}
          </div>
        </div>
      </MoreDetailBox>
      <MoreDetailBox
        gutter={[20, 20]}
        form={adminForm}
        onFinish={ChangePassword}
        style={{
          marginTop: "30px",
          paddingTop: "30px",
          paddingBottom: "30px",
          justifyContent: "center",
        }}
      >
        <MainContent>
          <h2>Profile Administration</h2>
          {/* <BiEditAlt size={30} /> */}
          {editAdminInfo ? (
            <div style={{ display: "flex", gap: "10px" }}>
              <Button
                onClick={() => {
                  setEditAdminInfo(false);
                  adminForm.setFieldsValue({
                    new: "",
                    old: "",
                    confirm: "",
                  });
                  setAdminData((prevData) =>
                    prevData.map((item) => ({ ...item, value: null }))
                  );
                }}
              >
                Cancel
              </Button>
              <Button type="primary" htmlType="submit">
                Save
              </Button>
            </div>
          ) : (
            <Button style={{ border: "none" }}>
              <BiEditAlt size={30} onClick={() => setEditAdminInfo(true)} />
            </Button>
          )}
        </MainContent>

        <div style={{ width: "100%" }}>
          <hr style={{ margin: "20px 0px", borderColor: "#A0A0A0" }} />
          <div>
            {adminData.map((e, i) => (
              <Row key={e.id} gutter={[0, 10]}>
                <Col span={8} md={6} xl={4} xxl={3}>
                  <label style={{ fontWeight: "bold", width: "600px" }}>
                    {e.label} :{" "}
                  </label>
                </Col>
                <Col>
                  <Form.Item
                    key={e.id}
                    name={e.name}
                    rules={[
                      {
                        message: `Please input your ${e.label}!`,
                      },
                    ]}
                  >
                    {console.log(e.value)}
                    <CustomInput
                      border={editAdminInfo ? "1px solid #A0A0A0" : "none"}
                      defaultValue={e.value}
                      value={e.value}
                      min={8}
                      disabled={editAdminInfo ? false : true}
                      placeholder={e.placeholder}
                    />
                  </Form.Item>
                </Col>
              </Row>
            ))}

            {/* </Form> */}
          </div>
        </div>
      </MoreDetailBox>
      <MoreDetailBox
        gutter={[20, 20]}
        style={{
          marginTop: "30px",
          paddingTop: "30px",
          paddingBottom: "30px",
          justifyContent: "center",
        }}
      >
        <MainContent>
          <h2>Upload Commercial Trade Certificate</h2>
        </MainContent>

        <div style={{ width: "100%" }}>
          <hr style={{ margin: "20px 0px", borderColor: "#A0A0A0" }} />
          {Data?.trade_certificate ? (
            <>
              <h3>
                Your certificate is uploaded{" "}
                <a
                  target="_blank"
                  href={`${process.env.REACT_APP_CALCULATOR}trade-certificates/${Data?.trade_certificate}`}
                >
                  Click here to see
                </a>
              </h3>
              <button onClick={ReUploadFile}>Re Upload</button>
            </>
          ) : (
            <form>
              <input
                type="file"
                name="file"
                accept=".pdf"
                onChange={handleFile}
              />
              <button onClick={uploadFile}>Upload</button>
            </form>
          )}
        </div>
      </MoreDetailBox>
    </div>
  );
};

export default Profile;
