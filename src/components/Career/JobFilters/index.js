import { UserOutlined } from "@ant-design/icons";
import React from "react";
import styled from "styled-components";
import FilterField from "./FilterField";

const FilterSubHeading = styled.div`
  font-size: 1.7rem;
  font-weight: 300;
  font-family: Arial, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji,
    Segoe UI Symbol, Noto Color Emoji;
  color: #666;
  text-align: center;
  margin-bottom: 2rem;
  @media (max-width: 575px) {
    font-size: 1.7rem;
    text-align: left;
  }
`;

const FilterHeading = styled.div`
  font-size: 2.2rem;
  font-weight: 600;
  font-family: Arial, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji,
    Segoe UI Symbol, Noto Color Emoji;
  color: #E30022;
  margin-bottom: 2rem;
  text-align: center;
  @media (max-width: 575px) {
    text-align: left;
  }
`;

const JobCountHeading = styled.div`
  font-size: 2.2rem;
  font-weight: 600;
  font-family: Arial, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji,
    Segoe UI Symbol, Noto Color Emoji;
  color: #E30022;
  margin-bottom: 2rem;
  text-align: center;
`;

const FilterFieldsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  margin-bottom: 3rem;
  justify-content: left;
  @media (max-width: 768px) {
    justify-content: center;
  }
`

const countryitems = [
  {
    label: "1st menu item",
    key: "1",
    icon: <UserOutlined />,
  },
  {
    label: "2nd menu item",
    key: "2",
    icon: <UserOutlined />,
  },
  {
    label: "3rd menu item",
    key: "3",
    icon: <UserOutlined />,
    danger: true,
  },
  {
    label: "4rd menu item",
    key: "4",
    icon: <UserOutlined />,
    danger: true,
    disabled: true,
  },
];

export default function JobFilters() {
  return (
    <div
      style={{
        margin: "20px 0px 20px 0px",
        padding: "30px 20px 30px 20px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ maxWidth: 1140, width: "100%" }}>
        <FilterHeading>All vacancies</FilterHeading>
        <FilterSubHeading>FILTER BY</FilterSubHeading>

        <FilterFieldsContainer>
          <FilterField
            items={countryitems}
            labelTitle={"Country"}
            placeholder={"All Countries"}
            type={"dropdown"}
          />

          <FilterField
            items={countryitems}
            labelTitle={"City"}
            placeholder={"All Cities"}
            type={"dropdown"}
          />

          <FilterField
            items={countryitems}
            labelTitle={"Team"}
            placeholder={"All Teams"}
            type={"dropdown"}
          />

          <FilterField
            items={countryitems}
            labelTitle={"Keyword"}
            type={"textfield"}
          />

          <FilterField
            items={countryitems}
            labelTitle={"Preferred search language"}
            type={"dropdown"}
            placeholder={"English UK(English UK)"}
            extraTextInBottom={
              "Prefered languaged / langue préférée / Idioma preferido"
            }
          />

          <FilterField
            type={"button"}
            labelTitle={"SHOW RESULTS"}
            defaultBgColor="#E30022"
            defaultTextColor="#fff"
          />

          <FilterField type={"button"} labelTitle={"RESET FILTERS"} />
        </FilterFieldsContainer>

        <div style={{ margin: "5rem 0px 30px 0px" }}>
          <JobCountHeading>621 Job(s)</JobCountHeading>
        </div>
      </div>
    </div>
  );
}
