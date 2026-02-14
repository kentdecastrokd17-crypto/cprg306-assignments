"use client";

import { useState } from "react";

export default function NewItem() {
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
    const item = { name, quantity, category };
    console.log(item);
    alert(`✅ Added Item:
    Name: ${name}
    Quantity: ${quantity}
    Category: ${category}`);

    
    // Reset form
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-6">
      <h1 className="text-3xl font-bold text-white mb-8 text-center">
        Week 5 — New Item
      </h1>

      
      <form
        onSubmit={handleSubmit}
        className="bg-gray-100 text-gray-800 rounded-lg shadow-xl p-8 w-full max-w-lg space-y-6"
      >




        
        {/* Item Name Field */}
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

        {/* Quantity Counter Section */}
        <div>
          <label className="block text-gray-800 text-sm mb-2 font-semibold">Quantity (1–20)</label>
          <p className="text-gray-700 mb-2">Current: <span className="font-bold text-gray-900 italic">{quantity}</span></p>
          <div className="flex gap-2 items-center">
            <button
              type="button"
              onClick={decrement}
              disabled={quantity <= 1}
              className={`w-12 h-10 rounded-md flex items-center justify-center font-bold text-lg ${
                quantity <= 1 ? "bg-gray-200 text-gray-400 cursor-not-allowed" : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              −
            </button>
            <button
              type="button"
              onClick={increment}
              disabled={quantity >= 20}
              className={`w-12 h-10 rounded-md flex items-center justify-center font-bold text-lg ${
                quantity >= 20 ? "bg-blue-300 text-gray-400 cursor-not-allowed" : "bg-blue-500 text-white hover:bg-blue-600"
              }`}
            >
              +
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-1">Allowed range: 1–20</p>
        </div>

        {/* Category Field */}
        <div>
          <label className="block text-gray-800 text-sm mb-1 font-semibold">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-800"
          >
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen">Frozen Foods</option>
            <option value="canned">Canned Goods</option>
            <option value="dry">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Submit Button */}
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