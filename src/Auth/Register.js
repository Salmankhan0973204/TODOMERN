import React, { useState } from "react";
import { Card, Button, Form } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import "../Auth/Auth.css"

function Register() {
  const [reg, setreg] = useState({
    name: "",
    email: "",
    number: "",
    password: "",
  });

  const handle = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setreg({ ...reg, [name]: value });
  };

  const submit = (e) => {
    e.preventDefault();
    console.log(reg);
    axios.post("http://localhost:8000/Register", reg).then(
      (res) => console.log("User Register"),
      (error) => {
        console.log("Registration Failed");
      }
    );
  };
  return (
    <div>
      <Card
        className="card"
        style={{ width: "25rem", background: "#767677", height: "40rem" }}
      >
        <Card.Body>
          <h2>Registration Form</h2>
          <Form onSubmit={submit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>User Name</Form.Label>
              <Form.Control
                type="text"
                value={reg.name}
                name="name"
                placeholder="Enter Name"
                onChange={handle}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                value={reg.email}
                placeholder="Enter email"
                onChange={handle}
                name="email"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control
                type="text"
                value={reg.number}
                placeholder="Enter Number"
                onChange={handle}
                name="number"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={reg.password}
                placeholder="Password"
                onChange={handle}
                name="password"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
            <hr style={{ backgroundColor: "white" }} />
            <h6>
              Already Register Click here -
              <Switch>
                <Link to="/">
                  <Button variant="warning"> Login</Button>
                </Link>
              </Switch>
            </h6>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Register;
