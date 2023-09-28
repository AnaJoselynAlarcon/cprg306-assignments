"use client";

import { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const handleSubmit = (event) => {
    //this function should Prevent the form's default submission behavior.
    event.preventDefault();

    //Create an item object with the current values of name, quantity, and category.
    const newItem = {
      name,
      quantity,
      category,
    };

    //Log the item object to the console
    console.log(
      `The item is: ${newItem.name}, the quantity is ${newItem.quantity}, and the category is ${newItem.category}`
    );

    //Display an alert with the current state of name, quantity, and category.
    alert(`You submitted ${name}, ${quantity}, ${category}`);

    //reset state variables
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="text-white flex-auto justify-center">
      <label className="flex flex-col mb-4">
        <span className="text-lg font-medium mb-1">Name:</span>
        <input
          required
          type="text"
          onChange={handleNameChange}
          placeholder="Enter name"
          value={name}
          className="border-2 border-blue-500 rounded-md py-2 px-4 text-black"
        />
      </label>

      <label className="flex flex-col mb-4">
        <span className="text-lg font-medium mb-1">Quantity:</span>
        <input
          required
          type="number"
          placeholder="Enter quantity"
          value={quantity}
          min={1}
          max={99}
          onChange={handleQuantityChange}
          className="border-2 border-blue-500 rounded-md py-2 px-4 text-black"
        />
      </label>

      <label className="flex flex-col mb-4">
        <span className="text-lg font-medium mb-1">Category:</span>
        <input
          required
          type="text"
          placeholder="Enter category"
          value={category}
          onChange={handleCategoryChange}
          className="border-2 border-blue-500 rounded-md py-2 px-4 text-black"
        />
      </label>

      <button
        type="submit"
        className="mb-10 bg-pink-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Submit
      </button>
    </form>
  );
}
