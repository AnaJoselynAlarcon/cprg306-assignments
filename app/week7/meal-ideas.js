"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

const separateWords = (ingredient) => {
  let firstWord = ingredient.split(" ")[0];
  return firstWord.replace(",", "");
};

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState("");

  useEffect(() => {
    const cleanedIngredient = separateWords(ingredient);

    const getMeals = async () => {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${cleanedIngredient}`
      );
      const data = await response.json();
      setMeals(data.meals);
    };
    getMeals();
  }, [ingredient]);

  return (
    <main className="text-black">
      <h1 className="text-3xl font-bold mb-4">Meals!</h1>
      <div>
        {meals && meals.length ? (
          <select
            className="py-2 px-4 border border-gray-300 rounded-md"
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
            <ul className="mt-4">
              {meals.map((meal) => (
                <li
                  key={meal.idMeal}
                  value={meal.strMeal}
                  className="flex items-center space-x-4 py-2 border-white">
                  <span>{meal.strMeal}</span>
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

      {selectedMeal && meals.length > 0 && (
        <div className="mt-4 flex grid-cols-3">
          <h2 className="text-2xl font-bold mb-2">
            Selected Meal: {selectedMeal}
          </h2>
          {meals.map((meal) => {
            if (meal.strMeal === selectedMeal) {
              return (
                <div key={meal.idMeal} className="flex items-center">
                  <h3 className="font-bold">{meal.strMeal}</h3>
                  <img
                    className="w-20 h-20 rounded-full"
                    src={meal.strMealThumb}
                    alt={meal.strMeal}
                  />
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
