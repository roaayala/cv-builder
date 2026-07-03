export default function Employment({ information }) {
  const { employment } = information;
  return (
    <div>
      <h2>Employments</h2>
      <ul>
        {employment.map((emp) => (
          <li key={emp.id}>
            <h3>{emp.workplace}</h3>
            <p>
              <span>{emp.start}</span>-<span>{emp.end ? emp.end : "Now"}</span>
            </p>
            <p>{emp.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
