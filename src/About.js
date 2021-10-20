import React from "react";
import { useState } from 'react';
import './App.css';
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

function About() {

    const [name, setName] = useState("");
    const [tnc, setTnc] = useState("");
    const [interest, setInterest] = useState("");

    function getFormData(e) {
        console.warn(name);
        console.warn(interest)
        console.warn(tnc);
        e.preventDefault()

    }
    return (
        <Container>
            <h2 class="App">About Page</h2>
            <form onSubmit={getFormData}>
                <Form.Group controlId="formName" class="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="enter name" onChange={(e) => setName(e.target.value)} required />
                </Form.Group>

                <Form.Group class="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="enter email" onChange={(e) => setInterest(e.target.value)} required />
                </Form.Group>

                <Form.Group class="mb-3">
                    <Form.Label>Password</Form.Label>
                    {/* <Form.Control as="textarea" rows={6} placeholder="enter password" onChange={(e) => setTnc(e.target.value)} required /> */}
                    <Form.Control type="password" placeholder="enter password" onChange={(e) => setTnc(e.target.value)} required />
                </Form.Group>

                <button type="submit" class="btn btn-primary">submit</button>

            </form>
        </Container>
    )
}

export default About;