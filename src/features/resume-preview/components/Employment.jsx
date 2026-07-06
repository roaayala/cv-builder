export default function Employment({ data }) {
  return (
    <section>
      <h2>Employment</h2>
      <ul>
        {data.map((employment) => (
          <li key={employment.id}>
            <h3>
              <span>{employment.role}</span> at {employment.workspace}
            </h3>
            <p>
              <span>{employment.start}</span> - <span>{employment.end}</span>
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
