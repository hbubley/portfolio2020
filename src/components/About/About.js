import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedin,
    faGithub,
    faReact,
    faSass,
    faHtml5,
    faJsSquare,
} from "@fortawesome/free-brands-svg-icons";
import { faServer, faFolderOpen } from "@fortawesome/pro-light-svg-icons";
import "./About.scss";

const About = () => {
    return (
        <Container fluid className="About">
            <Row>
                <h1>About Me</h1>
            </Row>
            <hr />
            <Row>
                <Col
                    sm={3}
                    md={5}
                    lg={2}
                    className="align-items-center justify-content-center"
                >
                    <div className="center-div">
                        <Image
                            rounded
                            src="https://res.cloudinary.com/dum4u7sro/image/upload/v1601224855/Untitled_design_6_te1h0x.png"
                            alt="Bio portrait"
                        />
                    </div>
                </Col>
                <Col>
                <label>Bio-Blurb</label>
                    <p>
                        By way of a scenic, hands-on journey, I have ventured
                        through life in search of experience. I have lived in
                        Israel, worked with CAD in the engineering field, spent
                        time as a preschool teacher, an athletic coach, a vet
                        tech, and through these ventures, found myself. I
                        learned that I need challenges, hard problems to solve.
                        This self-awareness is something I value and I feel
                        privliged to call myself a full-stack developer.
                    </p>
                    <hr />
                    <Row>
                        <Col>
                            <label>Highlighted Skills</label>
                            <ul>
                                <li>
                                    <FontAwesomeIcon icon={faReact} /> React
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faHtml5} /> HTML
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faSass} /> S/CSS
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faJsSquare} />{" "}
                                    Javascript
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faServer} />{" "}
                                    Express/Mongo/Cypress
                                </li>
                            </ul>
                        </Col>
                        <Col>
                            <label>Links</label>
                            <ul>
                                <li>
                                    <a
                                        href="https://www.linkedin.com/in/haleybubley"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FontAwesomeIcon icon={faLinkedin} />{" "}
                                        Linkedin
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://github.com/hbubley"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FontAwesomeIcon icon={faGithub} />{" "}
                                        Github
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://drive.google.com/open?id=1zzdF0Mfajj_9SNXMuybl1hMobJ-xYiYT"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {" "}
                                        <FontAwesomeIcon
                                            icon={faFolderOpen}
                                        />{" "}
                                        Resume
                                    </a>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <hr />
            <Row>
                <div className="center-div">
                    <h1 className="text-center">
                        "Who at the worst, if he fails, at least fails while
                        daring greatly"
                    </h1>
                </div>

                <div className="center-div">
                    <h2 className="text-center">~ Theodore Roosevelt</h2>
                </div>
            </Row>
        </Container>
    );
};

export default About;
