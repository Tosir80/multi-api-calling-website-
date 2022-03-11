import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Meal = (props) => {
    const {idMeal,strArea,strInstructions,strMealThumb,strMeal}=props.meal;
    const navigate=useNavigate()
    return (
        <Col >
        <Card className='m-1'>
            <Card.Img variant="top" src={strMealThumb} />
            <Card.Body>
                <Card.Title>{strMeal}</Card.Title>
                <Card.Text>
                    {strArea}
                </Card.Text>
                <Card.Text>
                    {strInstructions.slice(0,100)}
                </Card.Text>
            </Card.Body>
            <Button onClick={()=>navigate(`/food/${idMeal}`)}>Show Details</Button>
        </Card>
        </Col>
    );
};

export default Meal;