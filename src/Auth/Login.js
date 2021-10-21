import React, { useState } from "react";
import { Card, Button, Form, Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import "../Auth/Auth.css";
function Login() {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handle = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setLogin({ ...login, [name]: value });
  };

  const submit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8000/Login", login).then(
      (res) => console.log(res.data),
      (error) => {
        console.log("Login Failed");
      }
    );
  };

  return (
    <div>
      <Card
        className="card"
        style={{ width: "25rem", background: "#767677", height: "30rem" }}
      >
        <Card.Body>
          <h2>Login Form</h2>
          <Form onSubmit={submit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={login.email}
                placeholder="Enter email"
                onChange={handle}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                type="password"
                value={login.password}
                placeholder="Password"
                onChange={handle}
              />
            </Form.Group>

            <Link to="/ToDoList">
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Link>
            <hr style={{ backgroundColor: "white" }} />

            <Link to="/Register">
              <Button variant="warning">New Registration</Button>
            </Link>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Login;
