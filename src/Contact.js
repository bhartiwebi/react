import React from "react"
import './App.css';
// import {  Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

function Contact() {

    return (
        <Container>
            <h2 class="App">Contact Page</h2>
            <form >
                <Form.Group controlId="formName" class="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="enter name" />
                </Form.Group>

                <Form.Group class="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="enter email" />
                </Form.Group>

                <Form.Group class="mb-3">
                    <Form.Label>Textarea</Form.Label>
                    <Form.Control as="textarea" rows={6} placeholder="Text"  />

                </Form.Group>

                <button type="submit" class="btn btn-primary">submit</button>

            </form>
        </Container>
    )
}

export default Contact;