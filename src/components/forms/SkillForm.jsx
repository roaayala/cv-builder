import { useState } from "react";
import FormHeader from "./FormHeader";
import Button from "../commons/Button";
import { Plus, ChevronDown, ChevronUp, Delete } from "lucide-react";

export default function SkillForm({ data, onSkillChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [editId, setEdit] = useState("");

  const handleOpen = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <section>
      <FormHeader sectionTitle={"Skill"} isOpen={isOpen} onOpen={handleOpen} />

      {isOpen && (
        <ul>
          {data.length === 0 ? (
            <li>No skill added!</li>
          ) : (
            data.map((skill) => (
              <li key={skill.id} className="flex">
                <Button
                  onClick={(e) => e.preventDefault()}
                  icon={<ChevronDown />}
                />

                <span>{skill.name}</span>

                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    onSkillChange.delete(skill.id);
                  }}
                  icon={<Delete />}
                />
              </li>
            ))
          )}
        </ul>
      )}

      {isOpen && <Button icon={<Plus />} text={"Add Skill"} />}
    </section>
  );
}
