import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import logo from '../../../src/assets/qZone1.png'
import logo1 from '../../../src/assets/qZone2.png'
import logo2 from '../../../src/assets/qZone3.png'
import banner from '../../../src/assets/bg1.png'

const RightNavigation = () => {
  return (
    <div>
      <h4>Login With</h4>
     <div> <Button className="mb-2" variant="outline-primary"><FaGoogle></FaGoogle> Login With Google</Button></div>
          <Button variant="outline-secondary"><FaGithub></FaGithub> Login With Github</Button>
          <div className="mt-5">
              <h4>Find Us On</h4>
              <ListGroup>
      <ListGroup.Item><FaFacebook className="text-primary"></FaFacebook> Facebook</ListGroup.Item>
      <ListGroup.Item><FaTwitter className="text-primary"></FaTwitter> Twitter</ListGroup.Item>
      <ListGroup.Item><FaInstagram className="text-danger"></FaInstagram> Instagram</ListGroup.Item>
    </ListGroup>
          </div>
          <div className="mt-5 bg-secondary">
              <h4>Q-Zone</h4>
              <img src={logo} alt="" />
              <img src={logo1} alt="" />
              <img src={logo2} alt="" />
          </div>
          <div>
              <img src={banner} alt="" />
          </div>
    </div>
  );
};

export default RightNavigation;
