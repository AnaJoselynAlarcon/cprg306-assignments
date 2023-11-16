"use client";
import { useState } from "react";
import React from "react";
import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";
import { addItem } from "./_services/shopping-list-service";

export default function Page() {
  const [nameItem, setNameItem] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  function handleGitHubSignIn() {
    gitHubSignIn();
  }

  function handleFirebaseSignOut() {
    firebaseSignOut();
  }

  const handleAddItem = async () => {
    // Check if the user object exists
    if (!user || !user.uid) {
      console.error("User is not authenticated or does not have a UID");
      return;
    }
    const item = {
      nameItem,
      quantity,
      category,
    };

    // Call the addItem function to add the item to the shopping list
    const newItemId = await addItem(user.uid, item);

    // Set the ID of the new item
    item.id = newItemId;

    console.log(`Item added successfully with ID: ${newItemId}`);
  };

  return (
    <main>
      <div>
        <p>Welcome, please authenticate </p>
        {user ? (
          <button
            className="bg-green-500  hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleFirebaseSignOut}>
            Sign Out
          </button>
        ) : (
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleGitHubSignIn}>
            Sign In
          </button>
        )}
      </div>
      <Link
        href="/"
        className="px-4 py-2 text-white bg-pink-500 rounded hover:bg-green-600 ">
        Back Home
      </Link>

      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const { name, quantity, category } = e.target.elements;
          await addItem({
            nameItem: nameItem.value,
            quantity: quantity.value,
            category: category.value,
          });
          nameItem.value = "";
          quantity.value = "";
          category.value = "";
        }}>
        <div>
          <label>
            Name:
            <input
              className=" text-black"
              type="text"
              name="name"
              value={nameItem}
              onChange={(e) => setNameItem(e.target.value)}
            />
          </label>
          <label>
            Quantity:
            <input
              className=" text-black"
              type="text"
              name="quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </label>
          <label>
            Category:
            <input
              className=" text-black"
              type="text"
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </label>
          <button
            type="button"
            onClick={handleAddItem}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add Item
          </button>
        </div>
      </form>
    </main>
  );
}
