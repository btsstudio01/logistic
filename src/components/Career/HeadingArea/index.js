import { Row, Col, Grid } from "antd";
import styled from "styled-components";
// import useScreenWidth from "../../../hooks/useScreenWidth";

const { useBreakpoint } = Grid;

const MWLHeading = styled.span`
  margin-top: 3rem;
  width: full;
  font-size: 4.4rem;
  text-align: center;
  font-weight: 300;

  &:before {
    margin-right: 3.6rem;
    right: 100%;
    background-color: hsla(0, 0%, 40%, 0.502);
    content: "";
    display: block;
    height: 1px;
    position: absolute;
    top: 0.5em;
    width: 1337px;
  }

  color: #e1261c;
  font-family: Inter;
  media (max-width: 991.98px) {
    font-size: 3.9rem;
  }
  @media (max-width: 575.98px) {
    font-size: 2.8rem;
  }
`;

const MWLSubHeading = styled.p`
  font-size: 2rem;
  font-weight: 400;
  color: #021d49;
  font-family: Arial, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji,
    Segoe UI Symbol, Noto Color Emoji;
  margin-bottom: 1rem;
  padding-left: 3px;
  margin-top: 1rem;
`;

const MWLheadingbox = styled.div``;

const HeadingArea = ({ title, desc }) => {
  const screens = useBreakpoint();
  return (
    <MWLheadingbox
      style={{
        paddingTop: "2rem",
        paddingBottom: ".5rem",
        marginTop: screens.md ? "1rem" : "2rem",
        maxWidth: 1140,
      }}
    >
      <Row 
        align={"middle"}
        justify={"center"}
      >
        <Col>
          <MWLHeading>{title}</MWLHeading>
          <MWLSubHeading>{desc}</MWLSubHeading>
        </Col>
      </Row>
    </MWLheadingbox>
  );
};
export default HeadingArea;
