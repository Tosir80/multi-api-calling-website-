import React, { useEffect, useState } from "react";
import { Row, Spinner } from "react-bootstrap";
import New from "../New/New";
import './News.css'
const News = () => {
  const [news, setNews] = useState([]);
  console.log(news);
  useEffect(() => {
    fetch(
      "https://jsonplaceholder.typicode.com/users"
    )
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);
  return (
    <div className=" mt-5 news mx-auto justify-content-center ">
     {news.length==0?
     <div>
         <Spinner animation="border" variant="primary" />
     </div>
     :
      <Row  xs={1} sm={2} md={3} lg={4} className="news-item" >
        {news.map((user) => (
          <New user={user} key={user.id}></New>
        ))}
      </Row>
   }
    </div>
  );
};

export default News;
