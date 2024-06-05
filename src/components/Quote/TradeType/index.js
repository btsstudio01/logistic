import React, { useState } from "react";
import { Row, Col, Grid, Modal } from "antd";
import {
  SubHeading,
  StyledCard,
  MWButtonTwo,
  CardDescription,
  Seprator,
  CardButton,
  ContentContainer,
  Bluebox,
  GreyPicture,
  WhitePicture,
  GreyImg,
  Wrapper,
} from "../../../common/globalStyle";
import { AiOutlineArrowLeft } from "react-icons/ai";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { updateData } from "../../../redux/DataRedux";
import { tradetag } from "../../../Data/Quote";

const { useBreakpoint } = Grid;

// styled Compoenent
const TradeTypeDiv = styled.div`
  color: white;
  width: 297px;
  font-family: Inter;
  height: 60px;
  border-radius: 15px;
  background: #E30022;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TradeType = ({ setCurrent }) => {
  const screens = useBreakpoint();
  const dispatch = useDispatch();
  const InitialData = useSelector((state) => state.data.data);
  const [selectedTradeTag, setSelectedTradeTag] = useState(1);
  // const InitialData = useSelector((state) => state.data).data;

  const handleTradeTagClick = async (tag) => {
    try {
      setSelectedTradeTag(tag);
      dispatch(
        updateData({
          tradeType: tag,
          shipmentDetails: {
            ...InitialData.shipmentDetails,
            pickup: tag === 2 ? "United Arab Emirates" : null,
            dropoff: tag === 1 ? "United Arab Emirates" : null,
          },
        })
      );
      // const payload = {
      //   tradeType: tag,
      //   serviceType: InitialData.serviceType,
      //   serviceTypeOpt: InitialData.serviceTypeOpt,
      //   userId: 123,
      // };

      // const response = await apiRequest(process.env.REACT_APP_CALCULATOR, {
      //   url: "/trade/stepOne",
      //   method: "post",
      //   data: payload,
      //   headers: { "Content-Type": "application/json" },
      // });
      // dispatch(updateData({ tradeId: response?.data?.tradeId }));
      setCurrent(2);
    } catch (err) {
      Modal.error({
        title: "Error",
        content: "Please Select Trade Type",
      });
    }
  };

  return (
    <>
      <Wrapper
        style={{
          marginLeft: screens?.lg ? "90px" : "0px",
          backgroundColor: "#F0F0F0",
        }}
      >
        <Row style={{ width: "100%" }} justify={"center"}>
          <Col span={22}>
            <Row
              align={"middle"}
              justify={"center"}
              style={{
                padding: "40px",
                marginTop: "1vh",
                backgroundColor: "white",
                paddingBottom: "5vh",
              }}
            >
              <Col span={24}>
                <Row justify={"center"}>
                  <Col
                    span={24}
                    md={20}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <TradeTypeDiv style={{ textAlign: "center" }}>
                      <SubHeading style={{ textAlign: "center" }}>
                        Trade type ?
                      </SubHeading>
                    </TradeTypeDiv>
                  </Col>
                  <Col span={24}>
                    <Row justify={"center"}>
                      <Col span={22}>
                        <Row justify={"start"}>
                          <MWButtonTwo
                            onClick={() => {
                              setCurrent(0);
                              dispatch(
                                updateData({
                                  serviceType: 1, // Air land
                                  serviceTypeOpt: null,
                                })
                              );
                            }}
                          >
                            <AiOutlineArrowLeft style={{ margin: "2px" }} />
                            Go back
                          </MWButtonTwo>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                  <Col
                    span={20}
                    style={{
                      marginTop: "1vh",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Bluebox
                      style={{
                        maxWidth: "90vw",
                        minWidth: "250px",
                        height: "max-content",
                      }}
                    >
                      <Row justify="center" align={"center"}>
                        {tradetag.map((tag, index) => (
                          <React.Fragment key={tag.id}>
                            <StyledCard
                              isSelected={selectedTradeTag === tag?.id}
                              style={{ gap: "400px" }}
                            >
                              <ContentContainer>
                                <Col span={24}>
                                  <Row>
                                    <Col span={24}>
                                      <Row justify={"center"}>
                                        <GreyPicture>
                                          <GreyImg src={tag?.imgPath1} />
                                        </GreyPicture>

                                        <WhitePicture>
                                          <GreyImg src={tag?.imgPath2} />
                                        </WhitePicture>
                                      </Row>
                                    </Col>
                                    <Col span={24}>
                                      <SubHeading
                                        style={{
                                          marginTop: "5rem",
                                          textAlign: "center",
                                        }}
                                      >
                                        {tag.title}
                                      </SubHeading>

                                      <CardDescription>
                                        {tag.desc}
                                      </CardDescription>
                                    </Col>
                                  </Row>
                                </Col>
                                <CardButton
                                  onClick={() => handleTradeTagClick(tag.id)}
                                  isSelected={selectedTradeTag === tag?.id}
                                >
                                  Book Now
                                </CardButton>
                              </ContentContainer>
                            </StyledCard>
                            {index !== tradetag.length - 1 && <Seprator />}
                          </React.Fragment>
                        ))}
                      </Row>
                    </Bluebox>
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

export default TradeType;
