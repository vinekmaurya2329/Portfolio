import React from 'react';
import '../CSS/Navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navb() {
  return (
   <>
  
  <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home" style={{fontFamily:'cursive'}}><i class="ri-flag-line"></i>Aash</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing" className='text-dark'>Project</Nav.Link>
            <Nav.Link href="#pricing" className='text-dark'>Skill</Nav.Link>
            <Nav.Link href="#pricing" className='text-dark'>About Me</Nav.Link>

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

   </>
  )
  }

export default Navb