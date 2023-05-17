/* eslint-disable @next/next/no-img-element */
import mapboxgl from "mapbox-gl";
import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
import geoJson from "../data/locations.json"
import Image from "next/image";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { ArrowDown, ArrowUp} from 'react-bootstrap-icons';

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOXKEY;



const Map = () => {
  

  const [artistheading, setHeading] = useState([geoJson.features[0].properties.heading])
  const [artistname, setName] = useState([geoJson.features[0].properties.name])
  const [artistImage, setImage] = useState([geoJson.features[0].properties.image])
  const [addressLocation, setAddressLocation] = useState([geoJson.features[0].properties.address])

  const [expanded, setExpanded] = useState(false)
  const dataForDisplay = expanded ? geoJson.features : geoJson.features.slice(0, 9)

  const [selectedLocation, setSelectedLocation] = useState({
    name: "",

  });


  const handleSelectLocation = (geoJson) => {
    const { coordinates } = geoJson.geometry;
    const { heading, name, image, address, description } = geoJson.properties;
    setHeading([heading])
    setName([name])
    setImage([image])
    setAddressLocation([address])

    setSelectedLocation({
      name,
      latitude: coordinates[1],
      longitude: coordinates[0],
      heading,
      image,
      address,
      description,
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
        <h1>Locations</h1>
        <div className="image-box-container">
          {dataForDisplay.map((name, index) => (
            <ul key={index} onClick={() => handleSelectLocation(name)}>
            <a  href="#side">
              <Image src={geoJson.features[index].properties.image} width={100} height={100} alt="location-image" className="image-list" />
              </a>
            </ul>
          ))}

        </div>
        <div className="text-center" >
          <Button type="button" onClick={() => setExpanded(!expanded)} variant="flat" size="xxl" >
            {expanded ?
              (
                <>
                  <ArrowUp /> show less 
                </>
              )
              :
              (
                <>
                  <ArrowDown />show more   
                </>
              )
            }
          </Button>
        </div>

        <Col sm={4}>
          <div className="sidebar" id="side">
            <a href={`/sign/${artistname}`} ><h1> {artistname} </h1>
            </a>
            <p> {artistheading} </p>
            <p> Location: {addressLocation} </p>
            <a >
              <img src={artistImage} className="display-image" alt="featured-image" width={400} height={400} />
            </a>
          </div>

        </Col>
      </Row>
    </Container>
  )
};


export default Map;