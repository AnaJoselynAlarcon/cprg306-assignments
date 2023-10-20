/*In item-list.js, create a functional component named ItemList. 
Inside this component, copy paste the following item 
objects each with name, quantity, and category properties. 
Render these items using 
the Item component you just created, 
passing item data as props. */
"use client";
import Item from "./item";
import React from "react";
import { useState, useEffect } from "react";

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  const handleItemSelected = (item) => {
    if (onItemSelect) {
      onItemSelect(item); // Pass the items as a parameter to the onSelect function
    }
  };
  const handleSortByName = () => {
    setSortBy("name");
  };

  const handleSortByCategory = () => {
    setSortBy("category");
  };

  //   const groupAndSortByCategory = () => {
  //     const groupedItems = listOfItems.reduce((result, item) => {
  //       const category = item.category.toUpperCase(); // Ensure consistent case for sorting
  //       if (!result[category]) {
  //         result[category] = [];
  //       }
  //       result[category].push(item);
  //       return result;
  //     }, {});

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
          {items
            .sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
            .map((item) => (
              <li key={item.id} onClick={() => handleItemSelected(item.name)}>
                {/* the first element after the map has to contain the key!! */}
                <Item
                  name={item.name}
                  quantity={item.quantity}
                  category={item.category}
                />
              </li>
            ))}
        </ul>
      </div>
    </main>
  );
}
{
  /* <li className="p-2 m-4 bg-slate-900 max-w-sm" key={item.id}>
                <h2 className="text-xl text-center font-bold">{item.name}</h2>
                <p className="text-center">{item.quantity}</p>
                <p className="text-center text-gray-500">{item.category} </p> */
}
