"use client";

import { useState, useEffect } from "react";

async function fetchMealList(ingredient) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
  );
  if (!response.ok) throw new Error("Failed to fetch meals");
  const data = await response.json();
  return data.meals || [];
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadMealList() {
      setLoading(true);
      setError(null);
      try {
        const fetchedMeals = await fetchMealList(ingredient);
        setMeals(fetchedMeals);
      } catch (err) {
        setError("Something went wrong. Please try again.");
      } finally {
        setLoading(false);
      }
    }

    loadMealList();
  }, [ingredient]);

  return (
    <div>
      <h2 className="text-xl font-bold text-white mb-2">
        Meal ideas ({ingredient})
      </h2>

      {loading && (
        <p className="text-slate-300 animate-pulse">Loading meal ideas...</p>
      )}

      {error && (
        <p className="text-red-400">{error}</p>
      )}

      {!loading && !error && meals.length === 0 && (
        <p className="text-slate-400">No meal ideas found for this ingredient.</p>
      )}

      {!loading && !error && meals.length > 0 && (
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
      )}
    </div>
  );
}