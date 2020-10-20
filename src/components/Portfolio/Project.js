import React from "react";
import { Card, Button } from "react-bootstrap";
import useToggle from "../../hooks/useToggle";
import ProjectModal from "./ProjectModal";

const Project = ({ title, image, description, overview, imageArray }) => {
    const [open, toggleOpen] = useToggle(false);
    return (
        <Card>
            <Card.Img variant="top" src={`${image}`} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Button onClick={toggleOpen} className="DetailsButton">
                    Details
                </Button>
            </Card.Body>
            <ProjectModal
                show={open}
                handleClose={toggleOpen}
                title={title}
                overview={overview}
                imageArray={imageArray}
            />
        </Card>
    );
};

export default Project;
