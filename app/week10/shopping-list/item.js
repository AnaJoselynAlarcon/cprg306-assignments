import React from "react";

export default function Item({ name, quantity, category, onSelect }) {
  return (
    <div
      onClick={() => onSelect(name)}
      className="border-yellow-500 border-2 p-3 m-5 hover:bg-slate-700">
      <ul>
        <li className="font-bold text-center">Product: {name}</li>
        <li className="text-gray-600 text-center">
          Buy {quantity} in {category}
        </li>
      </ul>
    </div>
  );
}
