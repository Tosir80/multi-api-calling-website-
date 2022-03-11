import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Meal from "./Meal";

const Food = () => {
  const [food, setFood] = useState("");
  const searchInput = (e) => {
    setFood(e.target.value);
  };
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${food}`)
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, [food]);

  return (
    <div>
      <div className="text-center">
        <h1>Search your Food</h1>
        <input type="text" placeholder="Search Food" onChange={searchInput} />
     
      </div>

      <div>
        <h3>{meals?.length}</h3>
        <Row xs={1} sm={2} md={3} lg={4}>
          {meals?.map((meal) => (
            <Meal meal={meal}></Meal>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Food;
