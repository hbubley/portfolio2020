import React from "react";
import { Nav, Navbar } from "react-bootstrap";

const Navigation = ({ handleToggleAbout, handleTogglePortfolio, handleToggleContact }) => {
    return (
        <Navbar variant="light">
            <Nav>
                <Nav.Link onClick={handleToggleAbout}>
                    About
                </Nav.Link>
                <Nav.Link onClick={handleTogglePortfolio}>
                    Portfolio
                </Nav.Link>
                <Nav.Link onClick={handleToggleContact}>Contact</Nav.Link>
            </Nav>
        </Navbar>
    );
};

export default Navigation;
