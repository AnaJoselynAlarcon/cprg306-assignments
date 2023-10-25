"use client";
import Link from "next/link";

import React from "react";

import ItemList from "./item-list";

import NewItem from "./new-item";

import itemsData from "./items.json";

import MealIdeas from "./meal-ideas";

import Item from "./item";

import { useState, useEffect } from "react";

export default function Home() {
  //Initialize a state variable (e.g., items) with the data from items.json.
  const [items, setItems] = useState(itemsData);

  //state for selected item name
  const [selectedItem, setSelectedItem] = useState("");

  //function to handle item select
  const handleSelectedItem = (itemName) => {
    setSelectedItem(itemName);
  };

  //Create an event handler function (e.g., handleAddItem) that adds a new item to items.
  const handleAddItem = (item) => {
    //adds a new item to itemsData
    console.log(`Submitting ${item.name} ${item.quantity} ${item.category}`);

    setItems([...items, item]);
  };

  return (
    <main>
      <h1 className="border-sky-500 border-2 p-4 text-center-xl text-center font-bold">
        Shopping List
      </h1>
      <div className="flex flex-col items-center">
        <NewItem onAddItem={handleAddItem} />

        <ItemList onItemSelect={handleSelectedItem} itemsList={items} />

        <MealIdeas ingredient={selectedItem} />
      </div>
      <Link
        href="/"
        className="px-4 py-2 text-white bg-pink-500 rounded hover:bg-green-600 ">
        Back Home
      </Link>
    </main>
  );
}
