import React from "react";
import "./Header.scss";
import { Container, Jumbotron } from "react-bootstrap";

const Header = () => {
    return (
        <Jumbotron fluid className="Header">
            <Container>
                <h1>Haley Bubley</h1>
                <h2>Front-End Developer</h2>
            </Container>
        </Jumbotron>
    );
};

export default Header;
