/* eslint-disable @next/next/no-img-element */
import mapboxgl from "mapbox-gl";
import React, { useEffect, useState, useRef } from "react";
import signs from "../data/horoscope.json"
import Image from "next/image";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ReactImageFallback from "react-image-fallback";

const Map = () => {
  const { features: dataForDisplay } = signs;
  const fallback = "https://i.ibb.co/ZGLW03w/loading1.gif";
  const [isLoading, setIsLoading] = useState(false);
  
  return (
    <Container>
      {isLoading ? (
        <img src={fallback} alt="loading" />
      ) : (
        <Row className="text-center">
          {Array.from({ length: 3 }).map((_, index) => (
            <Col sm key={index}>
              <div className="image-box-container">
                {dataForDisplay.slice(index * 4, index * 4 + 4).map((sign, subIndex) => (
                  <ul key={subIndex}>
                    <a href={`/sign/${sign.properties.title}`}>
                      <p>{sign.properties.title}</p>
                      <ReactImageFallback
                        src={sign.properties.image}
                        fallbackImage={fallback}
                        initialImage={fallback}
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
      )}
    </Container>
  );
};



export default Map;