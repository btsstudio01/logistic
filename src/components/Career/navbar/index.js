import React, { useState, useEffect } from 'react';
import { Menu, Row, Col, Button } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const StyledNavbar = styled.div`
  background-color: white;
  position: relative;
  border-bottom : .1px solid lightgray;
  border-top : 1px solid gray;
 
  @media (min-width: 1024px)
  {
    margin-left: 90px;
 }
`;

const StyledMenuItem = styled(Menu.Item)`
  width: 25rem;
  text-align: center;
  &&& {
    &:hover {
      box-shadow: none; /* Remove the box shadow */
    }
  }
`;

const StyledDropdown = styled.div`
  position: absolute;
  top: 100%;
  
  background-color: white;
  border: 1px solid black;
  z-index: 2;
  padding: 1rem;
`;

const NavbarCareer = ({ menuItems, extraDropdown = true }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showArrows, setShowArrows] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
  
    useEffect(() => {
      const handleResize = () => {
        setIsSmallScreen(window.innerWidth < 768);
        setShowArrows(window.innerWidth < 768);
      };
  
      window.addEventListener('resize', handleResize);
      handleResize();
  
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    useEffect(() => {
      setShowArrows(currentIndex > 0 || currentIndex < menuItems.length - 1);
    }, [currentIndex, menuItems]);
  
    const handleNext = () => {
      if (currentIndex < menuItems.length - 1) {
        setCurrentIndex(currentIndex + 1);
      }
    };
  
    const handlePrev = () => {
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      }
    };
  
    const handleDropdown = (index) => {
      if (index === 1) {
        setShowDropdown(true);
      } else {
        setShowDropdown(false);
      }
    };
  
    return (
      <StyledNavbar>
        <Row justify="center ">
          <Col xs={24} sm={24} md={24} lg={20} xl={20}>
            <Row justify="space-around" align="middle">
              {isSmallScreen && showArrows && currentIndex > 0 && (
                <Col span={2}>
                  <Button icon={<LeftOutlined />} onClick={handlePrev} />
                </Col>
              )}
              <Col span={20}>
                <Menu mode="horizontal" style={{ display: "flex", justifyContent: "center" }} selectedKeys={[`${currentIndex}`]}>
                  {menuItems.map((item, index) => (
                    <StyledMenuItem 
                      key={index} 
                      onMouseOver={() => {
                        setCurrentIndex(index);
                        handleDropdown(index);
                      }} 
                      style={{ 
                        display: isSmallScreen ? (index === currentIndex || index === currentIndex - 1 || index === currentIndex + 1) ? "block" : "none" : "block" 
                      }}
                    >
                      {item.label}
                    </StyledMenuItem>
                  ))}
                </Menu>
                {showDropdown && extraDropdown && (
                  <StyledDropdown>
                    <p>Option 1</p>
                    <p>Option 2</p>
                    <p>Option 3</p>
                  </StyledDropdown>
                )}
              </Col>
              {isSmallScreen && showArrows && currentIndex < menuItems.length - 1 && (
                <Col span={2}>
                  <Button icon={<RightOutlined />} onClick={handleNext} />
                </Col>
              )}
            </Row>
          </Col>
        </Row>
      </StyledNavbar>
    );
  };
export default NavbarCareer;
