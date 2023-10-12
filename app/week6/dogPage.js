import DogForm from "./dog-form";
import DogList from "./dog-list-demo";
import { useState } from "react";

const dogsData = [
  { name: "Sparky, age: 2" },
  { name: "Fido, age: 5" },
  { name: "Spot, age: 7" },
];

export default function DogPageDemo() {
  const [dogs, setDogs] = useState(dogsData);

  function handleSubmit(dog) {
    alert(`Submitting ${dog.name} ${dog.age}`);
    setDogs([...dogs, dog]);
  }

  function handleDelete(name) {
    alert(`Deleting ${name}`);
    setDogs(dogs.filter((dog) => dog.name !== name));
  }
  return (
    <main>
      <DogList dogs={dogs} onDelete={handleDelete} />
      <DogForm onSubmit={(dogs) => handleSubmit(dogs)} />
    </main>
  );
}
