export default function DogPageDemo({ name, age, onDelete }) {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{age}</h2>

      <p>
        <button onClick={(name) => onDelete(name)}> Delete</button>
      </p>
    </div>
  );
}
