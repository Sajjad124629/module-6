import { useState } from "react";
import { Container, Button, Form } from "react-bootstrap";

const Content = () => {
    const [text, setText] = useState('');
    const [displayText, setDisplayText] = useState('');
    const handelTextAreaValue = (event) => {
        setText(event.target.value);
    }
    const handelButtonClick = () => {
        setDisplayText(text);
    }
    return (
        <>
            <Container className="mt-4">
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Enter text</Form.Label>
                    <Form.Control onChange={handelTextAreaValue} as="textarea" rows={3} />
                </Form.Group>
                <div className="text-end">
                    <Button onClick={handelButtonClick}>Display Text</Button>
                </div>
                <p className="text-center mt-4">{displayText ?? displayText}</p>
            </Container>
        </>
    );
};

export default Content;