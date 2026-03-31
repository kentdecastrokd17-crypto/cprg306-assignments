"use client";

import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import NewItem from "./NewItem";
import MealIdeas from "./MealIdeas";
import { useUserAuth } from "../../contexts/AuthContext";
import { getItems, addItem } from "../_services/shopping-list-services";

function cleanItemName(name) {
  return name
    .split(",")[0]
    .replace(/[\u{1F300}-\u{1FAFF}]/gu, "")
    .trim();
}

export default function Page() {
  const { user } = useUserAuth();
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");

  // 3. Create the loadItems async function
  async function loadItems() {
    if (user) {
      try {
        const fetchedItems = await getItems(user.uid);
        setItems(fetchedItems);
      } catch (error) {
        console.error("Error loading items:", error);
      }
    }
  }

  useEffect(() => {
    loadItems();
  }, [user]);

  async function handleAddItem(newItem) {
    if (user) {
      try {
        const newItemId = await addItem(user.uid, newItem);
        const itemWithId = {
          id: newItemId,
          ...newItem
        };

        setItems((prevItems) => [...prevItems, itemWithId]);
      } catch (error) {
        console.error("Error adding item:", error);
      }
    }
  }

  function handleItemSelect(item) {
    setSelectedItemName(cleanItemName(item.name));
  }

  if (!user) {
    return (
      <main className="p-10 bg-gray-600 min-h-screen text-white text-center">
        <h1 className="text-2xl font-bold mb-4">Access Denied</h1>
        <p>You must be logged in to view your shopping list.</p>
        <p className="mt-4">
          <a href="/week-10" className="text-blue-400 hover:underline">
            Return to Login Page
          </a>
        </p>
      </main>
    );
  }

  return (
    <main className="p-10 bg-gray-600 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-white">Shopping List + Meal Ideas</h1>
        <span className="text-gray-300 text-sm">Logged in as: {user.email}</span>
      </div>

      <div className="flex flex-col md:flex-row gap-10">
        <div className="flex-1">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>

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