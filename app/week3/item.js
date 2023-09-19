/*In item.js, 
create a functional component named Item.
 This component should accept 
 name, quantity, and category as props
  and display them in a list item element. 
  Use Tailwind classes for styling.*/

import React from "react";

export default function Item({ name, quantity, category }) {
  return (
    <div className="w-48 h-48 overflow-hidden">
      <ul>
        <li className="font-bold text-center">Product: {name}</li>
        <li className="mt-2 text-gray-600 text-center">
          Buy {quantity} in {category}
        </li>
      </ul>
    </div>
  );
}
