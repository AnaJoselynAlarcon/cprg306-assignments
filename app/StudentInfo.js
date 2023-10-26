// Create a React component in the project /app
//folder called StudentInfo that returns the
//following static information:

// Your name
// Your course section, e.g. CPRG 306 A
// A link to your GitHub repository

export default function StudentInfo() {
  return (
    <div>
      <h1>Hola Im Ana Joselyn Alarcon</h1>
      <ul>
        <li>CPRG 306 A</li>
        <li>
          <a
            href="https://github.com/AnaJoselynAlarcon/cprg306-assignments"
            target="_blank">
            Link to GitHub
          </a>
        </li>
      </ul>
    </div>
  );
}
