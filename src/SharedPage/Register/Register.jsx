import React, { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useState } from "react";

const Register = () => {
  const { createUserWithEmailAndPass } = useContext(AuthContext)
  const [userError, setUserError] = useState(null)
  const [userSuccess, setUserSuccess] = useState(null)
  const [accepted,setAccepted] = useState(false)
  const handleRegister = event => {
    event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email, password);
        setUserError('')
        setUserSuccess('')
        if (password.length < 6) {
            return setUserError('Please provide six character')
            
        }
        else if (password !== confirm) {
           return setUserError("Password don't match")
    }
    
    createUserWithEmailAndPass(email, password)
    .then(result => {
      const loggedUser = result.user;
      console.log(loggedUser);
        setUserSuccess('Register successfully')
        form.reset()

    })
    .catch(error => {
        console.log(error.message);
        setUserError(error.message)
})



  }


  const handleAccepted = event => {
     setAccepted(event.target.checked)
  }
  return (
    <Container className="mx-auto">
      <h4>Please Register</h4>
      <Form onSubmit={handleRegister} className="w-50 ">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            required
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            required
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" name='confirm' required placeholder="Password" />
          <p className='text-danger'><small>{ userError}</small></p>
          <p className='text-primary'><small>{ userSuccess}</small></p>
        </Form.Group>

        <Form.Group className="mb-3 d-flex " controlId="formBasicCheckbox">
          <Form.Check
             onClick={handleAccepted}
            type="checkbox"
            name='accept'
            label={<>Accept <Link to='/terms'>Terms & Condition</Link></> } />
          <p className="ms-3">
            <small>
              Already have an account ? <Link to="/login">Login</Link>
            </small>
          </p>
        </Form.Group>
        <Button variant="primary" disabled={!accepted} type="submit">
          Register
        </Button>
      </Form>
    </Container>
  );
};

export default Register;
