import { ArrowRightOutlined, DownOutlined } from "@ant-design/icons";
import { Button, Dropdown, Input, Space, message } from "antd";
import React from "react";
import styled from "styled-components";

const StyledButton = styled(Button)`
  border-radius: 0;
  height: 55px;
  width: 235px;
  padding: 0px 25px 0px 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0px;
  background-color: ${({ defaultBgColor }) => defaultBgColor};
  color: ${({ defaultTextColor }) => defaultTextColor};
  position: relative;

  &:hover {
    gap: 25px; /* Visible on hover */
    background-color: #062352 !important;
    color: #fff !important;
  }
`;

const IconWrapper = styled.span`
  transition: visibility 0.1s ease-in-out;
  visibility: hidden;

  ${StyledButton}:hover & {
    visibility: visible;
  }
`;

const StyledInput = styled(Input)`
  width: 100%;
  border-radius: 0;
  height: 55px;
  width: 235px;
  padding: 0px 25px 0px 25px;
`;

const DropdownButton = styled(Button)`
  border-radius: 0;
  height: 55px;
  width: 235px;
  padding: 0px 25px 0px 25px;
`;

const DropdownSpace = styled(Space)`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Label = styled.p`
  color: #021d49;
  font-family: Nunito Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji,
    Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  font-size: 2rem;
  height: 3rem;
  font-weight: 400;
  text-transform: none;
  margin: 0px 0px 3px 0px;
`;

export default function FilterField({
  labelTitle,
  items,
  placeholder,
  type,
  defaultBgColor = "#fff",
  defaultTextColor = "#000",
  extraTextInBottom,
  iconColor = "red"
}) {
  const handleMenuClick = (e) => {
    message.info("Click on menu item.");
    console.log("click", e);
  };

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  if (type === "button") {
    return (
      <div style={{ maxWidth: 235 }}>
        <Label>{""}</Label>
        <StyledButton
          style={{ backgroundColor: defaultBgColor, color: defaultTextColor }}
        >
          {labelTitle}
          <IconWrapper>
            <ArrowRightOutlined style={{ color: iconColor }} />
          </IconWrapper>
        </StyledButton>
      </div>
    );
  }

  if (type === "textfield") {
    return (
      <div style={{ maxWidth: 235 }}>
        <Label>{labelTitle ? labelTitle : ""}</Label>
        <StyledInput placeholder={placeholder} />
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 235 }}>
      <Label>{labelTitle ? labelTitle : ""}</Label>
      <Dropdown menu={menuProps}>
        <DropdownButton>
          <DropdownSpace>
            {placeholder}
            <DownOutlined style={{ color: iconColor }} />
          </DropdownSpace>
        </DropdownButton>
      </Dropdown>
      <div>
        <p>{extraTextInBottom}</p>
      </div>
    </div>
  );
}
