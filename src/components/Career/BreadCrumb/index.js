import React from 'react';
import { Breadcrumb } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { CaretRightOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { div } from 'numeric';

const StyledBreadcrumb = styled(Breadcrumb)`
  .ant-breadcrumb-link,
  .ant-breadcrumb-separator {
     // Add some spacing between items
    color: white; // Set color of breadcrumb items
  }

  .ant-breadcrumb-separator {
    color: white; // Set color of separator
    margin: 0 5px;
  }

  .ant-breadcrumb-link-active {
    font-weight: 800;
    margin-left: 5rem;
  }
`;

const breadcrumbItemStyle = {
  color: "#fff", // Change this color to your desired color
};

const DynamicBreadcrumb = () => {
  const location = useLocation();
  const paths = location.pathname.split("/").filter((path) => path);

  return (
    <div style={{marginTop: "10rem"}}>
    <StyledBreadcrumb separator={<CaretRightOutlined />}>
      <Breadcrumb.Item>
        <Link to="/" style={breadcrumbItemStyle}>
          Home
        </Link>
      </Breadcrumb.Item>
      {paths.map((path, index) => (
        <Breadcrumb.Item key={index}>
          {index === paths.length - 1 ? (
            <span>{path}</span>
          ) : (
            <Link
              to={`/${paths.slice(0, index + 1).join("/")}`}
              style={breadcrumbItemStyle}
            >
              {path}
            </Link>
          )}
        </Breadcrumb.Item>
      ))}
    </StyledBreadcrumb>
    </div>
  );
};

export default DynamicBreadcrumb;
