"use client";
import { useState } from "react";
import Item from "./item";

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <div>
      {/* Sort Buttons */}
      <div className="mb-4 flex items-center gap-2">
        <span className="text-white text-sm">Sort by:</span>
        <button
          onClick={() => setSortBy("name")}
          className={`px-4 py-1 rounded-full text-sm font-medium ${
            sortBy === "name" ? "bg-gray-700 text-white" : "bg-gray-800 text-gray-200"
          }`}
        >
          Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`px-4 py-1 rounded-full text-sm font-medium ${
            sortBy === "category" ? "bg-gray-700 text-white" : "bg-gray-800 text-gray-200"
          }`}
        >
          Category
        </button>
      </div>

      <ul className="space-y-2">
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
            onSelect={() => onItemSelect(item)}
          />
        ))}
      </ul>
    </div>
  );
}