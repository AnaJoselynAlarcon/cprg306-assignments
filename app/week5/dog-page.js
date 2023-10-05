"use client";
import { useState } from "react";

export default function Page() {
  let dogList = [
    {
      id: 1,
      name: "Sad dog",
      description: "This dog is sad.",
      imageUrl:
        "https://thumbs.dreamstime.com/b/golden-retriever-dog-sitting-isolated-white-24750809.jpg",
    },
    {
      id: 2,
      name: "Cute dog",
      description: "This dog is cute.",
      imageUrl:
        "https://i.pinimg.com/564x/9c/e3/fa/9ce3fa7464651e1303812e807133075b.jpg",
    },
    {
      id: 3,
      name: "Funny dog",
      description: "This dog is funny.",
      imageUrl:
        "https://t4.ftcdn.net/jpg/06/28/22/03/240_F_628220359_iX7zL4lXQqNrMZ20ntqh49ogKk2kh6Bw.jpg",
    },
  ];
}

dogList.sort((a, b) => a.name.localCompare(b.name));

//filter list of dogs so that we don't have dog with id ==2
//let filterDogList
dogList = dogList.filter((dog) => dog.id !== 2);

const handleClick = (event) => {
  console.log(event.target);
};

return (
  <main>
    <h1 className="border-sky-500 border-2 p-4 text-center-xl text-center font-bold">
      Dog List
    </h1>

    <ul>
      {dogList.map((dog) => (
        <li key={dog.id} onClick={handleClick}>
          <h2>{dog.name}</h2>
          <p>{dog.description}</p>
          <img src={dog.imageUrl} alt={dog.name} />
        </li>
      ))}
    </ul>
  </main>
);
