"use client";

export default function DogForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  function handleSubmit(event) {
    event.preventDefault();
    const dog = { name, age };
    onSubmit(dog);
    //to reset the form
    setName("");
    setAge(0);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name"> Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}></input>

        <label htmlFor="age"> Age</label>
        <input
          value={age}
          type="text"
          id="age"
          onChange={(event) => setAge(parseInt(event.target.value))}></input>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
