import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidgetComponent from "../CartWidgetComponent/CartWidgetComponent";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { ProductsData } from "../../data/productsData";
const NavBarComponent = () => {
  // ...

  const uniqueCategories = [
    ...new Set(ProductsData.map((product) => product.category)),
  ];

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>
          <Link to={"/"} style={{ textDecoration: "none", color: "red" }}>
            CafeRacerMotos
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Categorías" id="basic-nav-dropdown">
              {uniqueCategories.map((category) => (
                <NavDropdown.Item key={category}>
                  <Link
                    to={`/category/${category}`}
                    className="nav-dropdown-item-link"
                  >
                    {category}
                  </Link>
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
          <CartWidgetComponent />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavBarComponent;
