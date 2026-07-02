import { useState } from "react";

export default function SkillForm({ information }) {
  const { skills } = information;

  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState("");

  return (
    <div>
      <h3>{skills.length > 1 ? "Skills" : "Skill"}</h3>
      <button>Add</button>

      <ul>
        {skills.map((skill) => (
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
