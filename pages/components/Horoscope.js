/* eslint-disable @next/next/no-img-element */
import mapboxgl from "mapbox-gl";
import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
import geoJson from "../data/locations.json"
import signs from "../data/horoscope.json"
import Image from "next/image";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { ArrowDown, ArrowUp} from 'react-bootstrap-icons';




const Map = () => {
  

  const [title, setTitle] = useState([signs.features[0].properties.title])
  const [range, setRange] = useState([signs.features[0].properties.range])
  const [content, setContent] = useState([signs.features[0].properties.content])
    const [image2,setImage] = useState([signs.features[0].properties.image2])
  const [expanded, setExpanded] = useState(false)
  //const dataForDisplay = expanded ? geoJson.features : geoJson.features.slice(0, 9)
    const dataForDisplay = signs.features
    console.log(dataForDisplay)

  const [selectedLocation, setSelectedLocation] = useState({
    name: "",

  });


  const handleSelectLocation = (signs) => {
    const { range, content, image2,title} = signs.properties;
    setTitle(title);
    setRange(range);
    setContent(content);
    setImage(image2);


    setSelectedLocation({
        title: signs.properties.title,
        range: signs.properties.range,
        content: signs.properties.content,
        image2: signs.properties.image2,
    });

  };  

  return (


    <Container>
      <style type="text/css">
        {`
    .btn-flat {
      background-color: #372545;
      color: white;
      margin-bottom: 1rem;
      width:50%;
    }
    .btn-flat:hover {
      background-color: white;
      color:  #372545;
      margin-bottom: 1rem;
      width:50%;
      border: 1px solid #372545;
    }
    .btn-xxl {
      font-size: 1.5rem;
    }
    `}

      </style>
      <Row className="text-center" >
        <div className="image-box-container">
          {dataForDisplay.map((title, index) => (
            <ul key={index} onClick={() => handleSelectLocation(title)}>
  {/*           <a  href="#side">
              <Image src={signs.features[index].properties.image} width={100} height={100} alt="location-image" className="image-list" />
              </a> */}
              <p>{signs.features[index].properties.title}</p>
            </ul>
          ))}

        </div>

        <Col sm={4}>
          <div className="sidebar" id="side">
            <a href={`/sign/${title}`} >
            <h1> {title} </h1>
            </a>
            <p> {title} </p>
            <p> {range} </p>
            <p>{content} </p>
          </div>

        </Col>
        <Col sm={4}>
        <a >
              <img src={image2} className="display-image" alt="featured-image" width={400} height={400} />
            </a>
        </Col>
      </Row>
    </Container>
  )
};


export default Map;