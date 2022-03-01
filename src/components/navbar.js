// import { Box, Flex, Spacer,  } from '@chakra-ui/react'

import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

function Navibar() {
  return (

    <Navbar bg="dark" expand="lg">
    <Container fluid>
      <Navbar.Brand style={{ padding: '0px 0px 0px 100px', color: "white" }}href="#"><Link to="/">The Big Business</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
        </Nav>
        <Nav.Link><Link to="/services">Services</Link></Nav.Link>
        <Nav.Link><Link to="/contact">Contact Us</Link></Nav.Link>
          <Nav.Link><Link to="/FAQ">FAQ</Link></Nav.Link>
      </Navbar.Collapse>
    </Container>
  </Navbar>

  );
}

export default Navibar;