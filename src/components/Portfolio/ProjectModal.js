import React from "react";
import { Button, Card, CardColumns, Modal } from "react-bootstrap";

const ProjectModal = ({ show, handleClose, title, overview, imageArray }) => {
    const [photoInFocus, setPhotoInFocus] = React.useState(
        imageArray && imageArray.length ? imageArray[0] : null
    );

    const selectPhotoInFocus = (index) => {
        setPhotoInFocus(imageArray[index]);
    };
    return (
        <Modal show={show} onHide={handleClose} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>{title} - React Project</Modal.Title>
            </Modal.Header>
            <Modal.Body className="PortfolioModal">
                <Modal.Title>Application Overview</Modal.Title>
                {overview}
                <hr />
                {photoInFocus && (
                    <>
                        <Modal.Title>Images</Modal.Title>
                        <Card fluid>
                            <Card.Img
                                src={photoInFocus.img}
                                alt="Large view"
                                width="100%"
                            />
                            <Card.Text className="FocusedImageText">
                                {photoInFocus.caption}
                            </Card.Text>
                        </Card>
                        <p>Select photo to focus:</p>
                        <CardColumns>
                            {imageArray &&
                                imageArray.length &&
                                imageArray.map((image, index) => (
                                    <Card
                                        onClick={() =>
                                            selectPhotoInFocus(index)
                                        }
                                    >
                                        <Card.Img
                                            src={image.img}
                                            alt={image.caption}
                                            className={
                                                photoInFocus.img === image.img
                                                    ? "SelectedImage"
                                                    : ""
                                            }
                                        />
                                    </Card>
                                ))}
                        </CardColumns>
                    </>
                )}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ProjectModal;
