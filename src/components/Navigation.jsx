import { Container, Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Navigation() {
  const isActiveLink = ({ isActive }) => {
    const styleActive = "text-decoration-none me-3";
    return isActive
      ? `text-warning ${styleActive}`
      : ` text-secondary ${styleActive}`;
  };
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand>
          <NavLink to="/" className="text-decoration-none me-3">
            React-Bootstrap
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className={isActiveLink}>
              Home
            </NavLink>
            <NavLink to="/pokemon" className={isActiveLink}>
              Pokemones
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
