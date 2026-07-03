export default function Skill({ information }) {
  const { skills } = information;
  return (
    <div>
      <h2>{skills.length > 1 ? "Skills" : "Skill"}</h2>
      <ul>
        {skills.length === 0 && <li>Should have at least one skill!</li>}
        {skills.length > 0 &&
          skills.map((skill) => <li key={skill.id}>{skill.name}</li>)}
      </ul>
    </div>
  );
}
