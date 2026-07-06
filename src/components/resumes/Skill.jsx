export default function Skill({ data }) {
  return (
    <section>
      <h2>Skill</h2>
      <ul>
        {data.map((skill) => (
          <li key={skill.id}>{skill.name}</li>
        ))}
      </ul>
    </section>
  );
}
