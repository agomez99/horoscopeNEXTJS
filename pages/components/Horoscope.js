/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState, useRef } from "react";
import signs from "../data/horoscope.json"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ReactImageFallback from "react-image-fallback";

const Map = () => {
  const dataForDisplay = signs.features
  const [isLoading, setIsLoading] = useState(false)
  if (isLoading) {
    return <img src="https://i.ibb.co/ZGLW03w/loading1.gif" alt="loading" />
  }
  const fallback = "https://i.ibb.co/ZGLW03w/loading1.gif"
  return (
    <Container className="horoscope-container">
      <Row className="text-center">
        {Array.from({ length: 3 }, (_, index) => (
          <Col xs={12} xxl={4} lg={4} md={4} sm={4} className="horoscope-col" style={{ height: 'auto' }} key={index}>
            <div className="image-box-container">
              {dataForDisplay.slice(index * 4, index * 4 + 4).map((title, subIndex) => (
                <ul key={subIndex} className="ul-img">
                  <a href={`/sign/${signs.features[subIndex + index * 4].properties.title}`} className="signlink">
                    <p>{signs.features[subIndex + index * 4].properties.title}</p>
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
      </Row>
    </Container>
  )
};


export default Map;