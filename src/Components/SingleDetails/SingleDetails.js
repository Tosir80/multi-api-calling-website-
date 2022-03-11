import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const SingleDetails = () => {
    let {singleDetails}=useParams()
  
   const [single, setSingle] = useState([]);
    console.log(single);
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${singleDetails}`)
        .then(res=>res.json())
        .then(data=>setSingle(data))
    },[])

    return (
        <Card className='bg-info  mx-auto mt-5 shadow-lg' style={{width:'500px'}}>
            <h3>{single.name}</h3>
            <p>{single.username}</p>
            <p>{single.email}</p>

        </Card>
    );
};

export default SingleDetails;