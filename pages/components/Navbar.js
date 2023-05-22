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






const allHoroscopesImage = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-stars" viewBox="0 0 16 16">
<path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828l.645-1.937zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.734 1.734 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.734 1.734 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.734 1.734 0 0 0 3.407 2.31l.387-1.162zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L10.863.1z"/>
</svg>




function Navbar() {
  return (
    <div>
      {[false].map((expand) => (

        <Nav className="justify-content-beginning" activeKey="/home" key={expand} bg="light" expand={expand}>
          <Nav.Item>
            <Nav.Link href="/">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-house" viewBox="0 0 16 16">
                <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z" />
              </svg>
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