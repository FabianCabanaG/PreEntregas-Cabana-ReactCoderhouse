import Cartwidget from "../CartWidget"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";

// import 'bootstrap/dist/css/bootstrap.css'

const NavbarCustom = () => {

    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand as= {NavLink} to='/' >Instrumentazos</Navbar.Brand>
                    <Nav>
                        {/* CartWidget */}
                        <Cartwidget
                            value='0'
                        ></Cartwidget>
                    </Nav>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as= {NavLink} to='/category/gibson' >Gibson</Nav.Link>
                            <Nav.Link as= {NavLink} to='/category/fender' >Fender</Nav.Link>
                            <Nav.Link as= {NavLink} to='/category/bcrich' >B.C. Rich</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>





        </>
    )

}

export default NavbarCustom