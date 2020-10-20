import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Portfolio.scss";
import Project from "./Project";

const Portfolio = () => {
    const portfolioData = [
        {
            title: "Advanced Reporting",

            thumbnail:
                "https://res.cloudinary.com/dum4u7sro/image/upload/v1601406159/Portfolio/PP-AdvancedReporting/advancedreporting-thumb_epjnb5.png",
            description:
                "Filtering service used to sort through medical facility patients by set conditions selected by the user.",
            overview:
                "Application allows medical facilities to select a variety of conditions by which to filter patients by. Users can build out specific queries, choosing whether the conditions should be treated as 'ands' or 'ors'. Built in React. The application features error checking, data handling, API calls, routing, and responsive design.",
            images: [
                {
                    img:
                        "https://res.cloudinary.com/dum4u7sro/image/upload/v1601406159/Portfolio/PP-AdvancedReporting/advancedreporting-thumb_epjnb5.png",
                    caption:
                        "Landing page for application, user is able to select from previously created queries or create a new query.",
                },
                {
                    img:
                        "https://res.cloudinary.com/dum4u7sro/image/upload/v1601406334/Portfolio/PP-AdvancedReporting/advancedreporting-fulllength_wom75i.png",
                    caption:
                        "Full length page example, showing completed query as well as returned data-set.",
                },
                {
                    img:
                        "https://res.cloudinary.com/dum4u7sro/image/upload/v1601406437/Portfolio/PP-AdvancedReporting/advancedreporting-fulllength2_dcsdim.png",
                    caption:
                        "Full length page example, showing completed query along with returned data-set.",
                },
                {
                    img:
                        "https://res.cloudinary.com/dum4u7sro/image/upload/v1601406457/Portfolio/PP-AdvancedReporting/advancedreporting-save_f6w4hv.png",
                    caption:
                        "User is provided option to save the query as well as change the default name of the query.",
                },
            ],
        },
        {
            title: "Care Planning",

            thumbnail:
                "https://res.cloudinary.com/dum4u7sro/image/upload/v1601406044/Portfolio/PP-CarePlan/careplan-thumb_nrbvpn.png",
            description:
                "Application built for medical facilities, allows users to create and track deficit-based care plan for patients.",
            overview:
                "An application that allows medical providers to create and maintain extensive careplans for patients. Providers Start by adding a 'problem' to the careplan and then corresponding goals to improve upon the problem. The careplan has different views depending on the status of the careplan ('approved', 'pending', 'revision requested', etc...), and allows users to dynamically add notes, encounters, and other such relevant information as it occurs. Data is stored and sent to an API.",
            images: [
                {
                    img:
                        "https://res.cloudinary.com/dum4u7sro/image/upload/v1601406044/Portfolio/PP-CarePlan/careplan-thumb_nrbvpn.png",
                    caption:
                        "Application dashboard, existing careplan is displayed along with any notifications (such as plan was reviewed by a doctor).",
                },
                {
                    img:
                        "https://res.cloudinary.com/dum4u7sro/image/upload/v1601405969/Portfolio/PP-CarePlan/careplan-addprob_gyji0o.png",
                    caption:
                        "Modal that allows for the adding of a 'problem' to careplan",
                },
                {
                    img:
                        "https://res.cloudinary.com/dum4u7sro/image/upload/v1601405930/Portfolio/PP-CarePlan/careplan-addg_twbkdy.png",
                    caption:
                        "Modal that allows for the adding of a 'goal' to a selected 'problem'",
                },
            ],
        },
        {
            title: "GitFinder",
            thumbnail:
                "https://res.cloudinary.com/dum4u7sro/image/upload/v1601404510/Portfolio/GitFinder/gitFinder-thumb_malqwu.png",
            description:
                "Search tool used to find and view github profile details.",
            overview:
                "A search application which pulls from the github API to display all github users along with pertainent user information.",
            images: [
                {
                    img:
                        "https://res.cloudinary.com/dum4u7sro/image/upload/v1601404510/Portfolio/GitFinder/gitFinder-thumb_malqwu.png",
                    caption:
                        "Landing page for application, user is able to search github database through this screen.",
                },
                {
                    img:
                        "https://res.cloudinary.com/dum4u7sro/image/upload/v1601386792/Portfolio/GitFinder/gitfinder_w78o9o.png",
                    caption: "Full length page example.",
                },
                {
                    img:
                        "https://res.cloudinary.com/dum4u7sro/image/upload/v1601386845/Portfolio/GitFinder/gitfinder_error_taeaex.png",
                    caption: "Example alert, identifying user error.",
                },
            ],
        },
        {
            title: "Darwin",
            thumbnail:
                "https://res.cloudinary.com/dum4u7sro/image/upload/v1601404685/Portfolio/Darwin/darwin-thumb_w920c6.png",
            description:
                "Slot machine game based in the principles of Darwinism.",
            overview:
                "Darwin is a slot machine game built and designed by myself. It combines the ideaologies of darwinism with a luck and strategety. Users first spin to get assigned a species that they will play as. Each turn, the user must decide between three actions: eating, sleeping, or breeding. Each action has a certain percent chance of success dependent upon species. If the user runs out of health, they lose an animal. In order to gain 'lives' the user must choose the breed action, once they run out of lives the game is over.",
            images: [
                {
                    img:
                        "https://res.cloudinary.com/dum4u7sro/image/upload/v1601404685/Portfolio/Darwin/darwin-thumb_w920c6.png",
                    caption:
                        "Initial splash screen featuring self designed game icon",
                },
                {
                    img:
                        "https://res.cloudinary.com/dum4u7sro/image/upload/v1601404770/Portfolio/Darwin/darwin-gameplay_hs3vuf.png",
                    caption:
                        "Beginning game screen, user must roll in order to be assigned an animal-type.",
                },
                {
                    img:
                        "https://res.cloudinary.com/dum4u7sro/image/upload/v1603218871/Portfolio/Darwin/darwingame_muv9xi.png",
                    caption: "Gameplay screen with possible action options",
                },
                {
                    img:
                        "https://res.cloudinary.com/dum4u7sro/image/upload/v1603218959/Portfolio/Darwin/screenshot-localhost_3001-2020.10.20-13_35_39_calrjt.png",
                    caption: "Gameplay screen with possible action options",
                },
            ],
        },
        {
            title: "PriceLazr",
            thumbnail:
                "https://res.cloudinary.com/dum4u7sro/image/upload/v1601405047/Portfolio/PriceLazr/pricelazr-thumb_foirli.png",
            description:
                "Landing page for GooglePlay/IOS application, job fulfilled on Upwork",
            overview:
                "This website was created for an upwork client whom had requested a landing page for their application, currently in development. The website was built in react, using wireframes I created and had approved by the client. Styling was done in SCSS. The wesite features links to the Apple App Store and GooglePlay store, a customer review section, text and email app-link-forwarding, responsive design, and routing via React-Router.",
            images: [
                {
                    img:
                        "https://res.cloudinary.com/dum4u7sro/image/upload/v1601405047/Portfolio/PriceLazr/pricelazr-thumb_foirli.png",
                    caption: "Hero section of PrizeLazr landing page.",
                },
                {
                    img:
                        "https://res.cloudinary.com/dum4u7sro/image/upload/v1601405298/Portfolio/PriceLazr/screenshot-localhost_3000-2020.09.29-13_47_59_z6w2y8.png",
                    caption: "Full length view of application landing page.",
                },
            ],
        },
        {
            title: "Journey",
            thumbnail:
                "https://res.cloudinary.com/dum4u7sro/image/upload/v1601573741/Portfolio/journey-thumn_ktgqt5.png",
            description:
                "Guided meditation/journaling skill building application for children",
            overview:
                "Journey was a passion project I created with the intent of teaching healthy coping skills to children. It is a journaling application which prompts users with various questions, one-by-one, with guided breathing intervals in between prompts. Button's have a display delay, forcing users to stay on a prompt for at least 15 seconds before skipping to the next prompt. Users can maintain journaling streaks, with their record streak appearing in the dashboard display. The express/mongo backend for this application features JWT authentication.",
            images: [
                {
                    img:
                        "https://res.cloudinary.com/dum4u7sro/image/upload/v1601573741/Portfolio/journey-thumn_ktgqt5.png",
                    caption:
                        "Splash page, this screen features a slow moving background via css animation",
                },
                {
                    img:
                        "https://res.cloudinary.com/dum4u7sro/image/upload/v1601574105/Portfolio/journey-register_cmwr7u.png",
                    caption:
                        "Registration screen, users are stored in mongo/express database featuring JWT authorization",
                },
                {
                    img:
                        "https://res.cloudinary.com/dum4u7sro/image/upload/v1601574106/Portfolio/Journey-login_yzo1lb.png",
                    caption:
                        "Login screen, users are stored in mongo/express database featuring JWT authorization",
                },
            ],
        },
    ];
    return (
        <Container fluid className="Portfolio">
            <Row>
                <h1>Portfolio</h1>
            </Row>
            <hr />
            <Row>
                {portfolioData.map((project) => (
                    <Col lg={4} className="mb-3">
                        <Project
                            title={project.title}
                            image={project.thumbnail}
                            description={project.description}
                            overview={project.overview}
                            imageArray={project.images}
                        />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Portfolio;
