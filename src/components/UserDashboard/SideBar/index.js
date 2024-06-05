import React from "react";
import { AiOutlineDashboard } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Col, Row, Avatar, Grid } from "antd";
import { StyledOption, StyledOptionRow } from "../../../common/globalStyle";
import useScreenWidth from "../../../hooks/useScreenWidth";

import {
  MdArrowDropDown,
  MdArrowDropUp,
  MdOutlineCancel,
} from "react-icons/md";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/DashboardAssets/logo.png";
import { TbBrandBooking } from "react-icons/tb";
import { GrCompliance } from "react-icons/gr";
import { MdAvTimer } from "react-icons/md";
import { CiViewTimeline } from "react-icons/ci";
import { Colors } from "../../../constant/theme/theme";
const { useBreakpoint } = Grid;
const SideBar = ({ selectedOption, setSelectedOption, userName, userId }) => {
  const { screenWidth } = useScreenWidth();
  const IconColor = "#DCDCDC";
  const IconSize = 25;
  const PrimColor = "#041c5c";
  const [showSubList, setShowSubList] = useState(false);
  const screens = useBreakpoint();
  const [ShowMobileView, setShowMobileView] = useState(false);
  console.log(userName);
  const optionDetails = [
    { title: "Dashboard", icon: AiOutlineDashboard, id: 1, href: "dashboard" },
    { title: "Profile", icon: CgProfile, id: 2, href: "profile" },

    {
      title: "Pending Requests",
      icon: TbBrandBooking,
      id: 3,
      SubList: [
        { title: "Air", href: "airrequests" },
        { title: "Sea", href: "searequests" },
        // { title: "Land", href: "landrequests" },
      ],
    },

    {
      title: "Completed Requests",
      icon: CiViewTimeline,
      id: 4,
      href: "completed-requests",
    },
    {
      title: "Cancel Requests",
      icon: MdOutlineCancel,
      id: 5,
      href: "cancel-requests",
    },
    {
      title: "Transaction History",
      icon: MdAvTimer,
      id: 6,
      href: "transactions",
    },
  ];
  const navigate = useNavigate();
  const HandleClick = (value) => {
    if (value.title == "Pending Requests") {
      setShowSubList(!showSubList);
      setSelectedOption("Air");
      navigate(`/user/${userId}/airrequests`);

      // setSelectedOption(value.title)
    } else {
      setSelectedOption(value.title);
      navigate(`/user/${userId}/${value.href}`);
    }
  };
  const HandleMobileClick = (value) => {
    if (value.title == "Pending Requests") {
      setShowSubList(!showSubList);
      setSelectedOption("Air");
      navigate(`/user/${userId}/airrequests`);
      // setSelectedOption(value.title)
    } else {
      setSelectedOption(value.title);
      navigate(`/user/${userId}/${value.href}`);
      setShowMobileView(false);
    }
  };
  return (
    <>
      {screens.lg ? (
        <Col
          xxl={4}
          xl={5}
          lg={7}
          style={{
            backgroundColor: Colors.main,
            paddingTop: "40px",
            display: "flex",
            flexDirection: "column",
            gap: "60px",
          }}>
          <Row justify={"center"}>
            <a href="/">
              <img src={logo} />
            </a>
          </Row>
          <Row justify="center" gutter={[0, 40]}>
            <Row
              gutter={[15]}
              style={{
                width: "85%",
                display: "flex",
                alignItems: "center",
              }}>
              <Col>
                <Avatar
                  style={{
                    backgroundColor: "orange",
                    verticalAlign: "middle",
                  }}
                  size="large"
                  gap={10}>
                  {userName && userName[0]?.toUpperCase()}
                </Avatar>
              </Col>
              <Col>
                <p
                  style={{
                    fontSize: "18px",
                    padding: "0px",
                    margin: "0px",
                    color: "white",
                  }}>
                  {userName?.split(" ")[0]}
                </p>
              </Col>
            </Row>
            <Row
              style={{
                backgroundColor: "",
                width: "85%",
                display: "flex",
                flexDirection: "column",
              }}
              gutter={[0, 20]}>
              <Row>
                <p
                  style={{
                    fontSize: screenWidth > 1278 ? "1.5rem" : "1rem",
                    padding: "0px",
                    margin: "0px",
                    color: IconColor,
                  }}>
                  OVERVIEW
                </p>
              </Row>
              <Row gutter={[0, 10]} style={{ paddingLeft: "20px" }}>
                {optionDetails.map((e, i) => {
                  return (
                    <>
                      <StyledOptionRow
                        style={{
                          backgroundColor: selectedOption == e.title && "white",
                        }}
                        key={e.id}
                        gutter={[20]}
                        onClick={() => HandleClick(e)}>
                        <Row
                          gutter={[20]}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            padding: "7px 9px",
                          }}>
                          <Col>
                            <e.icon
                              color={
                                selectedOption == e.title
                                  ? PrimColor
                                  : IconColor
                              }
                              size={IconSize}
                            />
                          </Col>
                          <StyledOption
                            style={{
                              color: selectedOption == e.title && PrimColor,
                            }}>
                            {e.title}
                          </StyledOption>
                        </Row>
                        {e.title == "Pending Requests" && (
                          <Col>
                            {showSubList ? (
                              <MdArrowDropUp
                                color={
                                  selectedOption == e.title
                                    ? PrimColor
                                    : IconColor
                                }
                                size={IconSize}
                              />
                            ) : (
                              <MdArrowDropDown
                                color={
                                  selectedOption == e.title
                                    ? PrimColor
                                    : IconColor
                                }
                                size={IconSize}
                              />
                            )}
                          </Col>
                        )}
                      </StyledOptionRow>
                      <ul
                        style={{
                          margin: 0,
                          padding: "0px 0px 0px 30px",
                          width: "80%",
                          listStylePosition: "inside",
                        }}>
                        {showSubList &&
                          e.SubList &&
                          e.SubList.map((a, j) => {
                            return (
                              <StyledOptionRow
                                style={{
                                  backgroundColor:
                                    selectedOption == a.title && "white",
                                  width: "100%",
                                  padding: "5px",
                                }}
                                onClick={() => HandleClick(a)}>
                                <StyledOption
                                  style={{
                                    color:
                                      selectedOption == a.title && PrimColor,
                                  }}>
                                  <li>{a.title}</li>
                                </StyledOption>
                              </StyledOptionRow>
                            );
                          })}
                      </ul>
                    </>
                  );
                })}
              </Row>
            </Row>
          </Row>
        </Col>
      ) : ShowMobileView ? (
        <Col
          md={10}
          sm={14}
          xs={24}
          style={{
            height: "100vh",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 10,
            backgroundColor: PrimColor,
            paddingTop: "40px",
            display: "flex",
            flexDirection: "column",
            gap: "60px",
          }}>
          <Row
            style={{
              display: "flex",
              justifyContent: "flex-end",
              height: "30px",
              width: "85%",
            }}>
            <RxCross2
              size={IconSize}
              color={IconColor}
              onClick={() => setShowMobileView(!ShowMobileView)}
            />
          </Row>
          <Row justify={"center"}>
            <a href="/">
              <img src={logo} />
            </a>
          </Row>
          <Row justify="center" gutter={[0, 40]} style={{}}>
            <Row
              gutter={[15]}
              style={{
                width: "85%",
                display: "flex",
                alignItems: "center",
              }}
              justify="center">
              <Col>
                <Avatar
                  style={{
                    backgroundColor: "orange",
                    verticalAlign: "middle",
                  }}
                  size="large"
                  gap={10}>
                  {userName && userName[0]?.toUpperCase()}
                </Avatar>
              </Col>
              <Col>
                <p
                  style={{
                    fontSize: "18px",
                    padding: "0px",
                    margin: "0px",
                    color: "white",
                  }}>
                  {userName?.split(" ")[0]}
                </p>
              </Col>
            </Row>
            <Row
              style={{
                backgroundColor: "",
                width: "85%",
                display: "flex",
                flexDirection: "column",
              }}
              gutter={[0, 20]}>
              <Row>
                <p
                  style={{
                    fontSize: "14px",
                    padding: "0px",
                    margin: "0px",
                    color: IconColor,
                  }}>
                  OVERVIEW
                </p>
              </Row>
              <Row gutter={[0, 10]} style={{ paddingLeft: "20px" }}>
                {optionDetails.map((e, i) => {
                  return (
                    <>
                      <StyledOptionRow
                        style={{
                          backgroundColor: selectedOption == e.title && "white",
                        }}
                        key={e.id}
                        gutter={[20]}
                        onClick={() => HandleMobileClick(e)}>
                        <Row
                          gutter={[20]}
                          style={{ display: "flex", alignItems: "center" }}>
                          <Col>
                            <e.icon
                              color={
                                selectedOption == e.title
                                  ? PrimColor
                                  : IconColor
                              }
                              size={IconSize}
                            />
                          </Col>
                          <StyledOption
                            style={{
                              color: selectedOption == e.title && PrimColor,
                            }}>
                            {e.title}
                          </StyledOption>
                        </Row>
                        {e.title == "Pending Requests" && (
                          <Col>
                            {showSubList ? (
                              <MdArrowDropUp
                                color={
                                  selectedOption == e.title
                                    ? PrimColor
                                    : IconColor
                                }
                                size={IconSize}
                              />
                            ) : (
                              <MdArrowDropDown
                                color={
                                  selectedOption == e.title
                                    ? PrimColor
                                    : IconColor
                                }
                                size={IconSize}
                              />
                            )}
                          </Col>
                        )}
                      </StyledOptionRow>
                      <ul
                        style={{
                          margin: 0,
                          padding: "0px 0px 0px 30px",
                          width: "80%",
                          listStylePosition: "inside",
                        }}>
                        {showSubList &&
                          e.SubList &&
                          e.SubList.map((a, j) => {
                            return (
                              <StyledOptionRow
                                style={{
                                  backgroundColor:
                                    selectedOption == a.title && "white",
                                  width: "100%",
                                  padding: "5px",
                                }}
                                onClick={() => HandleMobileClick(a)}>
                                <StyledOption
                                  style={{
                                    color:
                                      selectedOption == a.title && PrimColor,
                                  }}>
                                  <li>{a.title}</li>
                                </StyledOption>
                              </StyledOptionRow>
                            );
                          })}
                      </ul>
                    </>
                  );
                })}
              </Row>
            </Row>
          </Row>
        </Col>
      ) : (
        <GiHamburgerMenu
          size={IconSize}
          color={"gray"}
          onClick={() => setShowMobileView(!ShowMobileView)}
        />
      )}
    </>
  );
};

export default SideBar;
