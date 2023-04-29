import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Button, Spinner } from 'react-bootstrap';

const PrivateRoute = ({ children }) => {
    const location = useLocation()
    console.log(location);
    const { user,loading } = useContext(AuthContext)
    // console.log(user);
    if (loading) {
        return   <Button  variant="primary" disabled>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Loading...
      </Button>
    }
    if (user) {
        return children;
    }
    return <Navigate state={{from:location}} to='/login' replace></Navigate>
};

export default PrivateRoute;