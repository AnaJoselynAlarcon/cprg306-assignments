import Link from "next/link";
import StudentInfo from "../StudentInfo";
import React from "react";
import Item from "./item";
import ItemList from "./item-list";

export default function Home() {
  return (
    <main>
      <h1 className="border-sky-500 border-2 p-4 text-center-xl text-center font-bold">
        Shopping List
      </h1>

      <div>
        <ItemList
          name={Item.name}
          quantity={Item.quantity}
          category={Item.category}
        />
      </div>
      <Link
        href="/"
        className="px-4 py-2 text-white bg-pink-500 rounded hover:bg-green-600">
        {" "}
        Back Home
      </Link>
    </main>
  );
}

/*
OBJECT PROPERTIES
const person = {
  name: "Ana",
  age: 24,
  isStudent: true,
  address: {
    street: "123 Main St",
    city: "Calgary",
    province: "AB",
  },
};


console.log(person.address.city); // "Calgary"

REACT PROPS
function Page() {
  return (
    <div>
      <h1>My name is {person.name}</h1>
      <p>I am {person.age} years old</p>
      <p>I live in {person.address.city}</p>
    </div>
  );
}
*/
