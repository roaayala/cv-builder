export default function Skill({ information }) {
  const { skills } = information;
  return (
    <div>
      <h2>{skills.length > 1 ? "Skills" : "Skill"}</h2>
      <ul>
        {skills.map((skill) => (
          <li>{skill.name}</li>
        ))}
      </ul>
    </div>
  );
}
