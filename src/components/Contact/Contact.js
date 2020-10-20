import React from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import "./Contact.scss";

const Contact = () => {
    return (
        <Container fluid className="ContactContainer">
            <Row>
                <h1>Contact Me</h1>
            </Row>
            <hr />

            <Form className="m-2 mt-4 mb-4">
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="John Smith" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="example@email.com"
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="text" placeholder="555 - 867 - 5309" />
                    <Form.Text className="text-muted">
                        I'll never share your phone or email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Subject</Form.Label>
                    <Form.Control
                        type="text"
                        label="Check me out"
                        placeholder="Get creative with it!"
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                        type="text"
                        as="textarea"
                        height="100%"
                        placeholder="How can I help you?"
                    />
                </Form.Group>
                <Button variant="light" type="submit" className="mb-2">
                    Get In Touch
                </Button>
            </Form>
        </Container>
    );
};

export default Contact;
