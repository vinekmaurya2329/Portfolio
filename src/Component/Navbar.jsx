import React from 'react';
import '../CSS/Navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navb() {
  return (
   <>
  <div className='navbar-main'>
  <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary nav-main">
      <Container>
        <Navbar.Brand href="/" style={{fontFamily:'cursive'}}><i class="ri-flag-line"></i>Aash</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className='bg-white'>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#project" className='text-dark'>Project</Nav.Link>
            <Nav.Link href="#skill" className='text-dark'>Skill</Nav.Link>
            <Nav.Link href="#about" className='text-dark'>About Me</Nav.Link>
            <Nav.Link href="#contact" className='text-dark'>Contact me</Nav.Link>


            {/* <NavDropdown title="More" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Skill</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Resume
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Certificate</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav>
            {/* <Nav.Link href="#deets">Certificate</Nav.Link> */}
            <NavDropdown title="Certificates" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="https://drive.google.com/file/d/1UXFlhX7yp1dTBfzBlenbANFC_HWKHZrb/view?usp=sharing">Intership Certificate</NavDropdown.Item>
              <NavDropdown.Item href="https://drive.google.com/file/d/1YbfwBTBXFMJOuXVMvX1P74UegLpCMYui/view?usp=sharing">
                Full Stack Certificate
              </NavDropdown.Item>
              
            </NavDropdown>
            <Nav.Link eventKey={2} href="https://drive.google.com/file/d/1eeFWt7TcrhRJWkYdGTBv5lFC-KyTZTIz/view" className='text-dark'>
              Resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
   </>
  )
  }

export default Navb