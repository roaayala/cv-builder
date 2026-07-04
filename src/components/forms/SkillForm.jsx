import { useState } from "react";
import FormHeader from "./FormHeader";
import Button from "../commons/Button";
import TextInput from "./TextInput";
import { Plus, Save, Edit, Trash2, X } from "lucide-react";
import createSkill from "../../models/SkillModel";

export default function SkillForm({ data, onSkillChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isAdd, setIsAdd] = useState(false);
  const [newSkill, setNewSkill] = useState("");
  const [editId, setEdit] = useState("");

  const handleOpen = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    setIsAdd(true);
  };

  const handleSave = (e) => {
    e.preventDefault();

    if (newSkill === "") return;

    onSkillChange.add(createSkill({ name: newSkill }));

    setNewSkill("");
    setIsAdd(false);
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setIsAdd(false);
  };

  return (
    <section>
      <FormHeader sectionTitle={"Skill"} isOpen={isOpen} onOpen={handleOpen} />

      {isOpen && (
        <>
          <ul>
            {data.length === 0 ? (
              <li>No skill added!</li>
            ) : (
              data.map((skill) => (
                <li key={skill.id} className="flex">
                  <span>{skill.name}</span>

                  <Button onClick={(e) => e.preventDefault()} icon={<Edit />} />
                  <Button
                    onClick={(e) => {
                      e.preventDefault();
                      onSkillChange.delete(skill.id);
                    }}
                    icon={<Trash2 />}
                  />
                </li>
              ))
            )}
          </ul>

          {isAdd && (
            <TextInput
              id={"skill"}
              label={"New Skill"}
              placeholder={"Skill"}
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
            />
          )}

          <div>
            {isAdd ? (
              <>
                <Button icon={<X />} text={"Cancel"} onClick={handleCancel} />
                <Button icon={<Save />} text={"Save"} onClick={handleSave} />
              </>
            ) : (
              <Button icon={<Plus />} text={"Add Skill"} onClick={handleAdd} />
            )}
          </div>
        </>
      )}
    </section>
  );
}
