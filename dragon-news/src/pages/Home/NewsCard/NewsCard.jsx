import moment from "moment";
import React from "react";
import { Card, Image } from "react-bootstrap";
import { FaEye, FaRegBookmark, FaRegStar, FaShareAlt, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import Rating from 'react-rating';

const NewsCard = ({ news }) => {
  const { title, details, _id, image_url, author, total_view, rating } = news;
  return (
    <Card className="mb-4">
      <Card.Header className="d-flex align-items-center">
        <Image style={{height: '40px'}} src={author?.img} roundedCircle/>
        <div className="ps-2 flex-grow-1">
            <p className="mb-0">{author?.name}</p>
            <p><small>{moment(author?.published_date).format('yyy-MM-D')}</small></p>
        </div>
        <div>
            <FaRegBookmark/> <FaShareAlt/>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
         {details.length < 250 ? <>{details}</> : 
         <>{details.slice(0,250)}... <Link to={`/news/${_id}`}>Read More</Link></>}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted d-flex">
        <div className="flex-grow-1">
            <Rating
            placeholderRating={3.5}
            readonly
            emptySymbol={<FaRegStar/>}
            placeholderSymbol={<FaStar className="text-warning"/>}
            fullSymbol={<FaStar/>}
          />
            <span>{rating?.number}</span>
        </div>
        <div>
            <FaEye/> {total_view}
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsCard;
