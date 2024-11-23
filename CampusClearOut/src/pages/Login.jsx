import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./Auth";

export function Login() {
  //access login function from AuthContent
  const {login}=useAuth();
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    //clear previous error messages
    setErrorMessage(null); 

    const loginData = { email: emailAddress, password };

    try {
      const response = await fetch(`/api/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginData),
        credentials: "include",
      });

      if (response.ok) {
        const data=await response.json();
        //update auth state with logged-in user
        login(data.user); 
        // redirect to the homepage
        navigate("/"); 
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message || "Login failed. Please try again.");
      }
    } catch (error) {
      console.error("error during login:", error);
      setErrorMessage("An unexpected error occurred. Please try again later.");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="emailAddress">
          <Form.Label>Email Address:</Form.Label>
          <Form.Control
            type="email"
            value={emailAddress}
            onChange={(e) => setEmailAddress(e.target.value)}
            required
            placeholder="Enter your email"
          />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter your password"
          />
        </Form.Group>
        <Button type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
