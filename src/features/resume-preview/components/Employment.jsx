export default function Employment({ data }) {
  return (
    <section>
      <h2>Employment</h2>
      <ul>
        {data.map((employment) => (
          <li key={employment.id}>
            <h3>
              <span>{employment.role}</span> at {employment.workplace}
            </h3>
            <p>
              <span>{employment.startYear}</span> -{" "}
              <span>{employment.endYear}</span>
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
