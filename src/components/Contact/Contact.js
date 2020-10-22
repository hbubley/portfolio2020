import React from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import "./Contact.scss";
import emailjs from "emailjs-com";

const Contact = () => {
    const [messageObject, setMessageObject] = React.useState({
        name: "",
        email: "",
        number: "",
        subject: "",
        message: "",
    });

    const onChange = (e) => {
        setMessageObject({ ...messageObject, [e.target.name]: e.target.value });
    };

    let templateParams = {
        name: messageObject.name,
        email: messageObject.email,
        number: messageObject.number,
        subject: messageObject.subject,
        message: messageObject.message,
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await emailjs.send(
            "service_7zlth79",
            "template_zzlfyid",
            templateParams,
            "user_IglOu9pNmrUEwfuluBONm"
        );
        console.log(messageObject);
    };
    return (
        <Container fluid className="ContactContainer">
            <Row>
                <h1>Contact Me</h1>
            </Row>
            <hr />

            <Form className="m-2 mt-4 mb-4">
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        name="name"
                        type="text"
                        value={messageObject.name}
                        onChange={(e) => onChange(e)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        name="email"
                        type="email"
                        value={messageObject.email}
                        onChange={(e) => onChange(e)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                        name="number"
                        type="text"
                        value={messageObject.number}
                        onChange={(e) => onChange(e)}
                    />
                    <Form.Text className="text-muted">
                        I'll never share your phone or email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Subject</Form.Label>
                    <Form.Control
                        name="subject"
                        type="text"
                        label="Check me out"
                        value={messageObject.subject}
                        onChange={(e) => onChange(e)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                        name="message"
                        type="text"
                        as="textarea"
                        height="100%"
                        value={messageObject.message}
                        onChange={(e) => onChange(e)}
                    />
                </Form.Group>
                <Button
                    variant="light"
                    type="submit"
                    className="mb-2"
                    onClick={onSubmit}
                >
                    Get In Touch
                </Button>
            </Form>
        </Container>
    );
};

export default Contact;
