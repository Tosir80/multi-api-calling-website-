import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";

const SingleMeals = () => {
  let { singleMeal } = useParams();

  const [meal, setMeal] = React.useState([0]);
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${singleMeal}`)
      .then((res) => res.json())
      .then((data) => {
        setMeal(data?.meals);
      });
  }, [singleMeal]);

  console.log(meal[0]);
  const { idMeal, strArea, strInstructions, strMealThumb, strMeal } = meal[0];

  return (
    <div className="d-flex m-3 align-items-center ">
      <img width={400} alt="" src={strMealThumb} />
      <div className="p-4 "> 
          <h3>{strMeal}</h3>
          <p>{strArea}</p>
          <p>{strInstructions?.slice(0, 500)}</p>

      </div>
    </div>
  );
};

export default SingleMeals;
