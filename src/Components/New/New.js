import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import './new.css'
import {  useNavigate } from "react-router-dom";
 
const New = (props) => {

  const {id,name, username,email} = props.user;
const navigate=useNavigate();


  return (
    <div>
      <Col className="news-items">
        <Card style={{ width: "18rem" }}>
          
          <Card.Body>
              <h2 className="text-primary">{id}</h2>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{username}</Card.Text>
            <Button onClick={()=>navigate(`/home/${id}`)}>ReadMore</Button>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default New;
