import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Navigation = () => {
  const { user, logout } = useContext(AuthContext);
  
  const signOut = () => {
    logout()
      .then(() => { })
      .catch(error => {
      console.log(error.message);
    })
  }
    return (
      
            <Container>
   <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mx-auto">
                <Link className="me-2 text-decoration-none" to="/">
                  Home
                </Link>
                <Link className="me-2 text-decoration-none" to="/about">
                  About
                </Link>
                <Link className="me-2 text-decoration-none" to="/contact">
                  Contact
                </Link>
                <Link className="me-2 text-decoration-none" to="/register">
              Register
                </Link>
              </Nav>
              <Nav className="d-flex  align-items-center">
                <p className="me-3 text-decoration-none" to="/user">
                  {user && user.email}
                </p>
                {user ? (
                  <Button onClick={signOut} variant="dark">Logout</Button>
                ) : (
                  <Link eventKey={2} to="/login">
                    <Button variant="dark">Login</Button>
                  </Link>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
            
            </Container>
       
    );
};

export default Navigation;