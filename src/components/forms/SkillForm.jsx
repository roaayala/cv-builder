export default function SkillForm({ information }) {
  const { skills } = information;

  const expandedSkills = skills.map((skill) => ({
    id: crypto.randomUUID(),
    name: skill,
  }));
  return (
    <div>
      <h3>{skills.length > 1 ? "Skills" : "Skill"}</h3>
      <button>Add</button>
      <ul>
        {expandedSkills.map((skill) => (
          <li key={skill.id}>
            <span>{skill.name}</span>

            <button>Edit</button>
            <button>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
