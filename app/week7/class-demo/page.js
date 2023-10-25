// "use client";

// import { useEffect } from "react";
// import { useState } from "react";

// async function fetchRandomDog() {
//   //https://dog.ceo/api/breeds/list/all

//   //fetch is a slow function, js only has one thread.
//   //thats why we have to make the function async
//   //happens in the background while the rest of the code runs

//   const response = fetch("https://dog.ceo/api/breeds/image/random");

//   //json takes that response and turns it into a json object
//   const data = await response.json();

//   //await waits for the fetch to finish, when is done takes the response and pull out an object from that

//   return data.message;
// }

// //list of all breeeds
// //https://dog.ceo/api/breeds/list/all
// async function fetchBreedList() {
//   try {
//     const response = await fetch("https://dog.ceo/api/breeds/list/all");
//     const data = await response.json();
//     return data.message;
//   } catch (error) {
//     console.log(error);
//   }
// }

// export default function Page() {
//   const [dog, setDog] = useState(null);
//   //instead of null we can start with empty array
//   const [breedList, setBreedList] = useState(null);

//   async function loadRandomDog() {
//     const randomDog = await fetchRandomDog();
//     setDog(randomDog);
//   }

//   async function loadBreedList() {
//     const breedList = await fetchBreedList();
//     setBreedList(breedList);
//   }

//   //use effect uses 2 parameters: a function and an array
//   useEffect(() => loadRandomDog(), []);

//   useEffect(() => loadBreedList(), []);

//   //   useEffect (() => loadRandomDog(); loadBreedList(), []);

//   return (
//     <main>
//       <h1>Dogs!</h1>
//       <div>
//         <img src={dog}></img>
//       </div>

//       {/* //breedList */}
//       <select name="breed">
//         {breedList &&
//           Object.keys(breedList).map((breed) => (
//             <option key={breed} value={breed}>
//               {breed}
//             </option>
//           ))}
//       </select>
//     </main>
//   );
// }
