import React from 'react';
import { Button, Card, Image } from 'react-bootstrap';
import { FaBookmark, FaEye, FaRegBookmark, FaRegStar, FaShareAlt, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const CategoryById = ({ category }) => {
    // console.log(category);
    const {image_url,_id,details,author,title,total_view,rating


    } = category;
    return (
        <div>
          <Card className="">
                <Card.Header className='d-flex align-items-center'>
                <Image  style={{height:'30px'}} src={author.img}roundedCircle />
                    <div className='flex-grow-1'>
                    <p className='mb-0'><small>{author.name}</small></p>
                    <p className='mb-0'><small>{ author.published_date}</small></p>
                    </div>
                    <div>
                        <FaShareAlt className='me-2'></FaShareAlt>
                        <FaRegBookmark></FaRegBookmark>
                    </div>
                    
      </Card.Header>
      <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant="top" src={image_url} />
        <Card.Text>
                        {details.length > 250 ? <>{ details.slice(0,250)}...<Link to={`/news/${_id}`}>See Details</Link></> : details}
        </Card.Text>
    
      </Card.Body>
                <Card.Footer className="text-muted d-flex align-items-center">
                    <div className='flex-grow-1'>
                        <Rating className='text-warning'
                        
                        placeholderRating={rating.number}
                        emptySymbol={<FaRegStar></FaRegStar>}
                            placeholderSymbol={<FaStar></FaStar>}
                            readonly
                        fullSymbol={<FaStar></FaStar>}
                        ></Rating>
                        {rating.number}
                    </div>
                    <div>
                        <FaEye></FaEye> { total_view}
                        
                    </div>

      </Card.Footer>
    </Card>
        </div>
    );
};

export default CategoryById;