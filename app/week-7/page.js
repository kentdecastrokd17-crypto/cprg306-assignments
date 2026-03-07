"use client";

import { useState } from "react";
import ItemList from "./ItemList";
import NewItem from "./NewItem";
import itemsData from "./item.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);

  function handleAddItem(newItem) {
    setItems([...items, newItem]);
  }

  return (
    <main className="p-10 bg-gray-600 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Shopping List</h1>

      <NewItem onAddItem={handleAddItem} />

      <ItemList items={items} />
    </main>
  );
}