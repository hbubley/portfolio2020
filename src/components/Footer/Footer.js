import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "./Footer.scss";

const Footer = () => {
    return (
        <Navbar variant="light" className="Footer">
            <Nav>
                <Nav.Item as="p" className="CopyText">
                    &#169; 2020 Haley Bubley - Developed in React
                </Nav.Item>
            </Nav>
        </Navbar>
    );
};

export default Footer;
