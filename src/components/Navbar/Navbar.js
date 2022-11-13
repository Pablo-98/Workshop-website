import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function BasicExample() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Hello</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/Users/pablohernandez/Desktop/development /workshop/my-workshop-app/src/components/Resources/Resources.js" >Resources</Nav.Link>
            <NavDropdown title="Workshops" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">1.Html</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                2.CSS
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">3.Javascript</NavDropdown.Item>
              
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;