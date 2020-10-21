import React, { useState } from "react";
import { Container, Fade } from "react-bootstrap";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Portfolio from "./components/Portfolio/Portfolio";

function App() {
    const [about, setAbout] = useState(true);
    const [portfolio, setPortfolio] = useState(false);
    const [contact, setContact] = useState(false);
 
    const toggleAbout = async () => {
        setPortfolio(false);
        setContact(false);
        setAbout(true);
    };

    const togglePortfolio = async () => {
        setAbout(false);
        setContact(false);
        setPortfolio(true);
    };

    const toggleContact = () => {
        setAbout(false);
        setPortfolio(false);
        setContact(true);
    };

    return (
        <Container fluid>
            <Navigation
                handleToggleAbout={toggleAbout}
                handleTogglePortfolio={togglePortfolio}
                handleToggleContact={toggleContact}
            />
            <Header />
            <Fade unmountOnExit={true} appear={true} in={about}>
                <div id="about">
                    <About />
                </div>
            </Fade>

            <Fade unmountOnExit={true} appear={true} in={portfolio}>
                <div id="portfolio">
                    <Portfolio />
                </div>
            </Fade>
            <Fade unmountOnExit={true} appear={true} in={contact}>
                <div id="contact">
                    <Contact />
                </div>
            </Fade>

            <Footer />
        </Container>
    );
}

export default App;
