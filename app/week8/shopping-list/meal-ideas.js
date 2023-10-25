"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
const separateWords = (ingredient) => {
  // Split the text into an array of words using spaces as the delimiter
  let firstWord = ingredient.split(" ")[0];
  return firstWord.replace(",", "");
};

export default function MealIdeas({ ingredient }) {
  // State
  const [meals, setMeals] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState("");

  useEffect(() => {
    const cleanedIngredient = separateWords(ingredient);

    const getMeals = async () => {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${cleanedIngredient}`
      );
      console.log(cleanedIngredient);
      const data = await response.json();
      console.log(data.meals);
      setMeals(data.meals);
    };
    getMeals();
  }, [ingredient]);

  return (
    <main className="text-black">
      <h1>Meals!</h1>
      <div>
        {/* Render a dropdown to select a meal */}
        {meals && meals.length ? (
          <select
            value={selectedMeal}
            onChange={(e) => setSelectedMeal(e.target.value)}>
            <option value="">Select a Meal</option>
            {meals.map((meal, index) => (
              <option key={meal.idMeal} value={meal.strMeal}>
                {meal.strMeal}
              </option>
            ))}
          </select>
        ) : null}
      </div>

      <div className="text-white">
        {meals && meals.length ? (
          <div>
            <ul>
              {meals.map((meal) => (
                <li key={meal.idMeal} value={meal.strMeal}>
                  {" "}
                  {meal.strMeal}{" "}
                  <Image
                    width={100}
                    height={100}
                    src={meal.strMealThumb}
                    alt={meal.strMeal}
                  />
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div>No meals found</div>
        )}
      </div>

      {/* Render the selected meal details if 'meals' is not empty */}
      {selectedMeal && meals.length > 0 && (
        <div>
          <h2>Selected Meal: {selectedMeal}</h2>
          {meals.map((meal) => {
            if (meal.strMeal === selectedMeal) {
              return (
                <div key={meal.idMeal}>
                  <h3>{meal.strMeal}</h3>
                  <img src={meal.strMealThumb} alt={meal.strMeal} />
                </div>
              );
            }
            return null;
          })}
        </div>
      )}
    </main>
  );
}
