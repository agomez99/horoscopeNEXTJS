/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState, useRef } from "react";
import signs from "../data/horoscope.json"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ReactImageFallback from "react-image-fallback";
import TodaysHoroscope from "./TodaysHoroscope";
const Map = () => {
  const dataForDisplay = signs.features
  const [isLoading, setIsLoading] = useState(false)
  if (isLoading) {
    return <img src="https://i.ibb.co/ZGLW03w/loading1.gif" alt="loading" />
  }
  const fallback = "https://i.ibb.co/ZGLW03w/loading1.gif"
  return (
    <Container fluid={true} className="horoscope-container">
      <Row >
        {Array.from({ length: 3 }, (_, index) => (
          <Col className="horoscope-col text-center" style={{ height: 'auto' }} key={index}>
            <div >
              {dataForDisplay.slice(index * 4, index * 4 + 4).map((title, subIndex) => (
                <ul key={subIndex} className="ul-img">
                  <a href={`/sign/${signs.features[subIndex + index * 4].properties.title}`} className="signlink">
                    <p className="sign-title">{signs.features[subIndex + index * 4].properties.title}</p>
                    <ReactImageFallback
                      src={signs.features[subIndex + index * 4].properties.logoImage}
                      fallbackImage={fallback}
                      initialImage="https://i.ibb.co/ZGLW03w/loading1.gif"
                      alt="signimage"
                      className="image-list"
                    />
                  </a>
                </ul>
              ))}
            </div>
          </Col>
        ))}
        <Col xs={12} xxl={6} lg={6} md={6} sm={12} className="horoscope-col" style={{ height: 'auto' }} >
           <TodaysHoroscope/>
          </Col>
      </Row>
    </Container>
  )
};


export default Map;