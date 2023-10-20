"use client";

import React, { useEffect, useState } from "react";

export default function MealIdeas({ ingredient }) {
  // State
  const [meals, setMeals] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState("");

  // Function to fetch meal ideas based on the ingredient
  async function fetchMealIdeas(ingredient) {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );
      const data = await response.json();
      return data.meals || [];
    } catch (error) {
      console.error("Error fetching meal ideas:", error);
      return [];
    }
  }

  // useEffect to load meal list
  useEffect(() => {
    if (ingredient) {
      fetchMealIdeas(ingredient).then((meals) => setMeals(meals));
    }
  }, [ingredient]);

  return (
    <main>
      <h1>Meals!</h1>
      <div>
        {/* Render a dropdown to select a meal */}
        <select
          name="strMeal"
          value={selectedMeal}
          onChange={(event) => setSelectedMeal(event.target.value)}>
          <option value="">Select</option>
          {meals.map((meal) => (
            <option key={meal.idMeal} value={meal.strMeal}>
              {meal.strMeal}
            </option>
            //display the image
          ))}
        </select>
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
