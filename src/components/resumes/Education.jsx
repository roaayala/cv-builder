export default function Education({ information }) {
  const { education } = information;
  return (
    <div>
      <h2>Education</h2>
      <ul>
        {education.map((ed) => (
          <li key={ed.id}>
            <h3>{ed.institute}</h3>
            <p>
              <span>{ed.start}</span>-<span>{ed.end ? ed.end : "Now"}</span>
            </p>
            <p>{ed.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
