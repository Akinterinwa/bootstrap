import React from "react";
import { Navbar, Container, Nav, Card, Button } from "react-bootstrap";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

const Cards = () => {
    return (
        <>
            <div className="App">
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand>My React App</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>

                <Container>
                    <h1>Welcome to My React App</h1>

                    <div className="row">
                        <div className="col-sm-4">
                            <Card>
                                <Card.Img variant="top" src="https://via.placeholder.com/150" />
                                <Card.Body>
                                    <Card.Title>Card 1</Card.Title>
                                    <Card.Text>This is the first card content.</Card.Text>
                                    <Button variant="primary">Learn More</Button>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-sm-4">
                            <Card>
                                <Card.Img variant="top" src="https://via.placeholder.com/150" />
                                <Card.Body>
                                    <Card.Title>Card 2</Card.Title>
                                    <Card.Text>This is the second card content.</Card.Text>
                                    <Button variant="primary">Learn More</Button>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-sm-4">
                            <Card>
                                <Card.Img variant="top" src="https://via.placeholder.com/150" />
                                <Card.Body>
                                    <Card.Title>Card 3</Card.Title>
                                    <Card.Text>This is the third card content.</Card.Text>
                                    <Button variant="primary">Learn More</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
};

export default Cards;
