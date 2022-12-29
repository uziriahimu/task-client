import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const Navigation = () => {

    return (
        <Navbar bg="light" variant="light">
            <Container>
                {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>

                    <Nav.Link as={Link} to="/addtask">Add Task</Nav.Link>
                    <Nav.Link as={Link} to="/mytask">My Task</Nav.Link>
                    <Nav.Link as={Link} to="/completed">Completed</Nav.Link>
                </Nav>
                <Form className="d-flex">
                    <Form.Control
                        type="search"
                        placeholder="Add a task"
                        className="me-2"
                        aria-label="Search"
                    />

                </Form>
            </Container>
        </Navbar>
    );
};

export default Navigation;