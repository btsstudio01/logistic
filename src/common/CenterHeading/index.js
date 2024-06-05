import { Col, Row } from "antd";
import React from "react";
import { HeroHeading } from "../globalStyle";
import { Grid } from "antd"

const { useBreakpoint } = Grid;

export default function CenterHeading({
    Heading,
    color = "#021D49",
    justify = "center",
    textAlign = "center",
    showLine = false,
    width = "36%"

}) {
    const screens = useBreakpoint();
    return (
        <div style={{ marginTop: 10, marginBottom: 10, position: "relative" }}>
            {
                showLine && (
                    <div style={{
                        height: "1px",
                        backgroundColor: "#d2d2d2",
                        width: screens.sm ? "36%" : "22%",
                        left: "0",
                        top: "70%",
                        position: "absolute"
                    }}>
                    </div>
                )
            }
            <Row
                justify={justify}
                style={{
                    width: "100%",

                }}>
                <Col>
                    <Row justify={"center"}>
                        <HeroHeading style={{ textAlign: textAlign, color }}>
                            {Heading ? Heading : "No heading for now"}
                        </HeroHeading>
                    </Row>
                </Col>
            </Row>
        </div>
    );
}
