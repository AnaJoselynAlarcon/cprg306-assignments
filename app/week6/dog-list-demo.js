import DogPageDemo from "./dog";

//list of dogs

export default function DogList({ dogs, onDelete }) {
  function handleDelete(name) {
    onDelete(name);
  }
  return (
    <main>
      <h1 className="border-sky-500 border-2 p-4 text-center-xl text-center font-bold">
        Dogs List
      </h1>
      <div>
        <ul>
          {dogs.map((dog, index) => (
            <li key={index}>
              <DogPageDemo
                name={dog.name}
                age={dog.age}
                onDelete={handleDelete}
              />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
