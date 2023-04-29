import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Login = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { loginWithEmailAndPassword} = useContext(AuthContext)
    const [userError, setUserError] = useState(null)
  const [userSuccess, setUserSuccess] = useState(null)
  console.log(location);
  const from = location.state?.from?.pathname || '/category/0'
    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        setUserError('')
        setUserSuccess('')
        if (password.length < 6) {
            return setUserError('Please provide six character')
            
      }
      
      loginWithEmailAndPassword(email, password)
        .then(result => {
          const loggedUser = result.user;
          console.log(loggedUser);
          setUserSuccess('Login successfully')
          form.reset()
          navigate(from,{replace:true})
        })
        .catch(error => {
          console.log(error);
          setUserError(error.message)
      })
    

   
        
    }
    return (
        <Container className='mx-auto'>
            <h4>Please Login</h4>
              <Form onSubmit={handleLogin} className='w-50 '>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name='email' required placeholder="Enter email" />
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' required placeholder="Password" />
        </Form.Group>
     
                  
          <p className='text-danger'><small>{ userError}</small></p>
          <p className='text-primary'><small>{ userSuccess}</small></p>
          <Form.Group className="mb-3 d-flex" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                    <p className='ms-3'><small>New to dragon news ? <Link to='/register'>Register</Link></small></p>
        </Form.Group>
        <Button  variant="primary" type="submit">
         Login
        </Button>
      </Form>
      </Container>
    );
};

export default Login;