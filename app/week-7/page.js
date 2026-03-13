"use client";

import { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
  );
  const data = await response.json();
  return data.meals || [];
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  async function loadMealIdeas() {
    const fetchedMeals = await fetchMealIdeas(ingredient);
    setMeals(fetchedMeals);
  }

  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold text-white mb-4">
        Meal Ideas for: <span className="text-teal-400">{ingredient}</span>
      </h2>
      <ul className="space-y-2">
        {meals.map((meal) => (
          <li
            key={meal.idMeal}
            className="flex items-center gap-4 p-3 bg-teal-900 border border-white rounded-lg shadow-sm"
          >
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="w-16 h-16 rounded-md object-cover"
            />
            <span className="text-white font-medium">{meal.strMeal}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}