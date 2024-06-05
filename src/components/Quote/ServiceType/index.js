import React, { useState } from "react";
import { Row, Col, Grid, Modal } from "antd";
import {
  Heading,
  SubHeading,
  StyledCard,
  StyledTag,
  Bluebox,
  GreyImg,
  GreyPicture,
  WhitePicture,
  Seprator,
  ContentContainer,
  CardDescription,
  CardButton,
  ServiceTypeDiv,
  MiniHeading,
  Wrapper,
  HeroHeading,
} from "../../../common/globalStyle";

import { useDispatch, useSelector } from "react-redux";
import { updateData } from "../../../redux/DataRedux";
import { tags, dropdownOptions } from "../../../Data/Quote";
const { useBreakpoint } = Grid;

const ServiceType = ({ setCurrent }) => {
  const InitialData = useSelector((state) => state.data.data);
  const dispatch = useDispatch();
  const screens = useBreakpoint();
  const [selectedTag, setSelectedTag] = useState(1);
  const [show, setShow] = useState(false);
  const [serviceTypeOpt, setServiceTypeOpt] = useState(""); // State to store the selected dropdown value

  const [modalVisible, setModalVisible] = useState(false);
  const handleTagClick = (tag) => {
    setShow(false);
    setServiceTypeOpt(null);
    setSelectedTag(tag);
    dispatch(updateData({ serviceType: tag }));
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };

  const handleSubmit = async (optionValue, index) => {
    if (optionValue === null) {
      Modal.error({
        title: "Error",
        content: "Please Select Service Type",
      });
    } else {
      try {
        // const payload = {
        //   tradeType: InitialData?.tradeType,
        //   serviceType: selectedTag,
        //   serviceTypeOpt: 2,
        //   userId: 123,
        // };
        // console.log(payload);

        // const response = await apiRequest(process.env.REACT_APP_CALCULATOR, {
        //   url: "/trade/stepOne",
        //   method: "post",
        //   data: payload,
        //   headers: { "Content-Type": "application/json" },
        // });
        // console.log("heheoo", response);
        dispatch(
          updateData({
            serviceType: selectedTag,
            serviceTypeOpt: optionValue,
          })
        );

        // Navigting to nect page on the basis of seslected tag and option
        if (selectedTag == 1) {
          index == 1 ? setCurrent(1) : setCurrent(2);
        } else if (selectedTag == 2) {
          setCurrent(2);
        } else if (selectedTag == 3) {
          index == 1 ? setCurrent(1) : setCurrent(2);
        } else {
          console.log("Selected Option Not Found");
          Modal.error({
            title: "Error",
            content: "Selected Option Not Found",
            onOk: handleModalClose,
          });
        }
      } catch (err) {
        Modal.error({
          title: "Error",
          content: err,
          onOk: handleModalClose,
        });
      }
    }
  };
  console.log(InitialData);

  return (
    <>
      <Wrapper
        style={{
          // padding-top: "6vh";
          marginLeft: screens?.lg ? "90px" : "0px",
          backgroundColor: "#F0F0F0",
        }}
        justify={"center"}
      >
        <Row justify={"center"}>
          <Col span={24}>
            <Row
              style={{
                backgroundColor: "white",
                padding: "40px",
              }}
              justify={"center"}
            >
              <Col
                span={24}
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Heading style={{ textAlign: "center" }}>
                  <ServiceTypeDiv>Select your Service</ServiceTypeDiv>
                </Heading>
              </Col>

              <Col span={24} style={{ marginTop: "15px" }}>
                <Row justify="center">
                  {tags.map((tag) => (
                    <StyledTag
                      key={tag.id}
                      selected={selectedTag === tag?.id}
                      onClick={() => handleTagClick(tag?.id)}
                      style={{ marginRight: "5px" }}
                    >
                      {tag.title}
                    </StyledTag>
                  ))}
                </Row>
              </Col>
              <Col span={24}>
                <Row justify="center" style={{ display: show ? "none" : "" }}>
                  <Col
                    span={24}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      paddingLeft: "25px",
                      paddingRight: "25px",
                    }}
                  >
                    {selectedTag == 3 ? (
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          flexDirection: "column",
                          padding: "18px",
                        }}
                      >
                        <div class="">
                          <img
                            decoding="async"
                            fetchpriority="high"
                            width={screens.md ? "600" : "440"}
                            height={screens.md ? "300" : "240"}
                            src="https://wichitawebsitedesign.com/wp-content/uploads/2021/01/website-maintenance-gif.gif"
                            class="attachment-full size-full wp-image-608"
                            alt="wichita website maintenance"
                          />
                        </div>
                        <h1 style={{ fontSize: "26px" }}>
                          Good Things are on the Way
                        </h1>
                      </div>
                    ) : (
                      <Bluebox
                        style={{
                          maxWidth: "90vw",
                          minWidth: "250px",
                          height: "max-content",
                        }}
                      >
                        <Row justify={"center"} align={"center"}>
                          {dropdownOptions
                            .find((option) => option.tagId === selectedTag)
                            ?.options.map((option, index) => {
                              return (
                                <React.Fragment key={option.value}>
                                  {" "}
                                  {/* Add a unique key */}
                                  <StyledCard
                                    isSelected={serviceTypeOpt === option.value}
                                    style={{ gap: "400px" }}
                                  >
                                    <ContentContainer>
                                      <Col span={24}>
                                        <Row>
                                          <Col span={24}>
                                            <Row justify={"center"}>
                                              <GreyPicture>
                                                <GreyImg
                                                  src={option?.imgPath1}
                                                />
                                              </GreyPicture>

                                              <WhitePicture>
                                                <GreyImg
                                                  src={option?.imgPath2}
                                                />
                                              </WhitePicture>
                                            </Row>
                                          </Col>
                                          <Col span={24}>
                                            <SubHeading
                                              style={{
                                                marginTop: "8rem",
                                                textAlign: "center",
                                              }}
                                            >
                                              {option?.label}
                                            </SubHeading>
                                            <MiniHeading
                                              style={{
                                                textAlign: "center",
                                                marginTop: "10px",
                                              }}
                                            >
                                              {option?.label2}
                                            </MiniHeading>
                                            <CardDescription>
                                              {option?.desc}
                                            </CardDescription>
                                          </Col>
                                        </Row>
                                      </Col>
                                      <CardButton
                                        onClick={() => {
                                          handleSubmit(option?.value, index);
                                        }}
                                      >
                                        Book Now
                                      </CardButton>
                                    </ContentContainer>
                                  </StyledCard>
                                  {index <
                                    dropdownOptions.find(
                                      (option) => option.tagId === selectedTag
                                    )?.options.length -
                                      1 && <Seprator />}
                                </React.Fragment>
                              );
                            })}
                        </Row>
                      </Bluebox>
                    )}
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Wrapper>
    </>
  );
};

export default ServiceType;
