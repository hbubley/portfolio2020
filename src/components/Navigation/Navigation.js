import React from "react";
import { Nav, Navbar } from "react-bootstrap";

const Navigation = ({
    handleToggleAbout,
    handleTogglePortfolio,
    handleToggleContact,
}) => {
    return (
        <Navbar variant="light" expand="lg">
            <Navbar.Brand>
                <img
                    src="https://res.cloudinary.com/dum4u7sro/image/upload/v1603309614/Portfolio/Bubley_1_eijbc8.png"
                    alt="logo"
                    width="60px"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                    <Nav.Link onClick={handleToggleAbout}>About</Nav.Link>
                    <Nav.Link onClick={handleTogglePortfolio}>
                        Portfolio
                    </Nav.Link>
                    <Nav.Link onClick={handleToggleContact}>Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navigation;
