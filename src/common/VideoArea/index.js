import { Col, Row } from 'antd'
import React from 'react'
import useScreenWidth from '../../hooks/useScreenWidth';

export default function VideoArea({ video_url }) {
    const { screenWidth } = useScreenWidth();

    return (
        <div style={{ marginTop: 60, marginBottom: 10, width: '100%', height: 'auto', paddingLeft: screenWidth < 1024 ? 0 : 95 , backgroundColor:"#f1f2f4"}}>
            <Row
                justify={"center"}
                style={{
                    width: "100%",
                    textAlign: "center"
                }}
            >
                {screenWidth <= 426 &&
                    <iframe style={{ backgroundColor: 'gray', borderRadius: 0 }} width={'920px'} height={200} src={video_url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                }

                {screenWidth <= 768 && screenWidth > 426 &&
                    <iframe style={{ backgroundColor: 'gray', borderRadius: 0 }} width={'920px'} height={340} src={video_url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                }

                {screenWidth <= 1024 && screenWidth > 768 &&
                    <iframe style={{ backgroundColor: 'gray', borderRadius: 0 }} width={'920px'} height={400} src={video_url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                }

                {screenWidth <= 1440 && screenWidth > 1024 &&
                    <iframe style={{ backgroundColor: 'gray', borderRadius: 0 }} width={'920px'} height={450} src={video_url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                }

                {screenWidth > 1440 &&
                    <iframe style={{ backgroundColor: 'gray', borderRadius: 0 }} width={'920px'} height={500} src={video_url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                }
            </Row>
        </div>
    )
}
