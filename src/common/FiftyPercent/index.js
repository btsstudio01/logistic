import { Col, Image, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import CenterHeading from '../CenterHeading';
import CenteredPara from '../ConteredPara';
import useScreenWidth from '../../hooks/useScreenWidth';

export default function FiftyPercent({ Item, maxOffset = 100 }) {
    const {screenWidth} = useScreenWidth();
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const offSetValue = window.pageYOffset * 0.15;
            if (offSetValue <= maxOffset) {
                console.log("Offset value", offSetValue, maxOffset);
                setScrollPosition(window.pageYOffset * 0.15);                
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div style={{ backgroundColor: 'lightblue', height: 600, marginLeft: screenWidth <= 768 ? 0 : 90, justifyContent: 'center', display: 'flex', flexDirection: 'column' }}>
            <Row>
                <Col span={24} md={12} style={{ textAlign: 'right', alignItems: 'center', backgroundColor: '#021D49' }}>
                    <div style={{ position:'relative', height: 300, paddingLeft: 20, paddingRight: 20, right: maxOffset - scrollPosition  }}>
                        <CenterHeading Heading={Item.title} color={'#fff'} justify='end' textAlign='left' />
                        <CenteredPara text={Item.desc} justify='end' textAlign='right' />
                    </div>
                </Col>
                <Col span={24} md={12} style={{  textAlign: 'right', alignItems: 'center', backgroundColor: 'lightblue'}}>
                    <div style={{ position:'relative', left: maxOffset - scrollPosition }}>
                        {Item?.img && (
                            <Row>
                                {screenWidth < 426 ? 
                                    <Image preview={false} src={Item?.img} height={300} width={450} /> :
                                    <Image preview={false} src={Item?.img} height={500} width={650} />
                                }

                            </Row>
                        )}
                    </div>
                </Col>
            </Row>
        </div>
    );
}
