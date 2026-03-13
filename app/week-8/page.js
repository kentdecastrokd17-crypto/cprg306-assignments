"use client";

import { useState } from "react";
import ItemList from "./ItemList";
import NewItem from "./NewItem";
import MealIdeas from "./MealIdeas";
import itemsData from "./item.json";

function cleanItemName(name) {
  return name
    .split(",")[0]                                          // remove size info after comma
    .replace(/[\u{1F300}-\u{1FAFF}]/gu, "")               // remove emojis
    .trim();
}

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  function handleAddItem(newItem) {
    setItems([...items, newItem]);
  }

  function handleItemSelect(item) {
    setSelectedItemName(cleanItemName(item.name));
  }

  return (
    <main className="p-10 bg-gray-600 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-white">Shopping List + Meal Ideas</h1>

      <div className="flex gap-10">
        {/* Left side: NewItem + ItemList */}
        <div className="flex-1">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>

        {/* Right side: MealIdeas */}
        <div className="flex-1">
          {selectedItemName ? (
            <MealIdeas ingredient={selectedItemName} />
          ) : (
            <div>
              <h2 className="text-xl font-bold text-white mb-2">Meal ideas (select an item)</h2>
              <p className="text-gray-400">Choose an item to see ideas.</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}