"use client";
import Item from "./item";
import React from "react";
import { useState, useEffect } from "react";

export default function ItemList({ itemsList, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  const handleSortByName = () => {
    setSortBy("name");
  };

  const handleSortByCategory = () => {
    setSortBy("category");
  };

  return (
    <main>
      <button
        className={`mb-10 ${
          sortBy === "name" ? "bg-blue-700" : "bg-white hover:bg-blue-700"
        } text-black font-bold py-2 px-4 rounded`}
        onClick={handleSortByName}>
        Sort by name
      </button>

      <button
        className={`mb-10 ${
          sortBy === "category" ? "bg-pink-300" : "bg-white hover:bg-blue-700"
        } text-black font-bold py-2 px-4 rounded`}
        onClick={handleSortByCategory}>
        Sort by category
      </button>

      <div>
        <ul>
          {itemsList
            .sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
            .map((item) => (
              <li key={item.id}>
                {/* the first element after the map has to contain the key!! */}
                <Item
                  name={item.name}
                  quantity={item.quantity}
                  category={item.category}
                  onSelect={onItemSelect}
                />
              </li>
            ))}
        </ul>
      </div>
    </main>
  );
}
