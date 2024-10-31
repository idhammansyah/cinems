import { Navbar, Container, Nav } from "react-bootstrap";

const NavigationBar = () => {
  return ( 
    <div>
      <Navbar variant="light">
        <Container>
          <Navbar.Brand href="/" className="text-white fw-bold text-uppercase">CINEMS</Navbar.Brand>
          <Nav>
            <Nav.Link href="#trending" className="text-white fw-bold text-uppercase">TRENDING</Nav.Link>
            <Nav.Link href="#superhero" className="text-white fw-bold text-uppercase">SUPERHERO</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavigationBar;