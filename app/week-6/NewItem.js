"use client";
import { useState } from "react";

// Destructure the onAddItem prop
export default function NewItem({ onAddItem }) { 
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const increment = () => {
    if (quantity < 20) setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Create the item object with a random id
    const item = { 
      id: Math.random().toString(36).substring(2, 9), 
      name, 
      quantity, 
      category 
    };

    // Call the onAddItem prop instead of using alert
    onAddItem(item);

    // Reset form
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <div className="flex flex-col items-center justify-center px-6">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-100 text-gray-800 rounded-lg shadow-xl p-8 w-full max-w-lg space-y-6"
      >
        {/* ... (rest of your form JSX remains the same) */}
        <div>
          <label className="block text-gray-800 text-sm mb-2 font-semibold">Item Name</label>
          <input
            type="text"
            placeholder="e.g., milk, 4 L 🥛"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          />
        </div>
        {/* ... (Quantity and Category fields) */}
        <button
          type="submit"
          className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-6 rounded-md shadow-sm transition duration-200"
        >
          Add Item
        </button>
      </form>
    </div>
  );
}