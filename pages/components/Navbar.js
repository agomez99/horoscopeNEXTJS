import React from 'react'
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from 'react-bootstrap-icons';
import data from '../data/horoscope.json'
import Image from 'next/image'
const dropdownAllScopes = data.features.map((feature, id) => {
    return (
        <NavDropdown.Item href={`/sign/${feature.properties.title}`} key={id} >
        {feature.properties.title}{"   "}
        <Image  src={feature.properties.smallLogo} width={16} height={16} alt="small-image"  className='float-end'  />
        </NavDropdown.Item>
    )
}

)



function Navbar() {
  return (
    <div>
      {[false].map((expand) => (

        <Nav className="justify-content-beginning" activeKey="/home" key={expand} bg="light" expand={expand}>
          <Nav.Item>
            <Nav.Link href="/">
            <Image src="/horoscope.png" width={40} height={40} alt="zodiac-image"  className='float-end'  />
            </Nav.Link>
          </Nav.Item>
          <Nav className="justify-content-end flex-grow-1 pe-3">

          <NavDropdown
            title= "Horoscopes"
            id={`offcanvasNavbarDropdown-expand-${expand}`} 
           >
              {dropdownAllScopes}
          </NavDropdown>
            <Nav.Link href="/about">
              About
            </Nav.Link>
          </Nav>

        </Nav>
      ))}

    </div>
  )
}

export default Navbar