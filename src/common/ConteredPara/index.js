import { Col, Row } from 'antd';
import React from 'react';
import { BoxContent } from '../globalStyle';

export default function CenteredPara({ text, justify='center', textAlign="center" }) {
  return (
    <div style={{ marginTop: 10, marginBottom: 10 }}>
            <Row
                justify={justify}
                style={{
                    width: "100%",
                }}
            >
                <Col>
                    <Row justify={"center"}>
                        <BoxContent style={{ textAlign: textAlign }}>{text ? text : "No description for now"}</BoxContent>
                    </Row>
                </Col>
            </Row>
        </div>
  )
}