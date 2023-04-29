import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const NewsDetails = () => {
    const data = useLoaderData()
    // console.log(data);
    const {image_url,details,title,category_id} = data;
    return (
        <Card>
            <Card.Img variant="top" src={ image_url} />
            <Card.Body>
           <h3> {title}</h3>
          <Card.Text>
       {details}
          </Card.Text>
           <Link to={`/category/${category_id
}`}> <Button variant="danger"><FaArrowRight className='me-2'></FaArrowRight>All news in this category</Button></Link>
            </Card.Body>
      </Card>
   
    );
};

export default NewsDetails ;