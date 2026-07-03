import { useState } from "react";
import Button from "../commons/Button";

export default function SkillForm({ information, handlers }) {
  const { skills } = information;

  const [isAdd, setIsAdd] = useState(false);
  const [newSkill, setNewSkill] = useState("");

  const [editId, setEditId] = useState("");
  const [editedSkill, setEditedSkill] = useState("");

  return (
    <div>
      <h3>{skills.length > 1 ? "Skills" : "Skill"}</h3>

      {skills.length < 1 ? (
        <p>No skills added yet.</p>
      ) : (
        <ul>
          {skills.map((skill) => (
            <li key={skill.id}>
              {editId === skill.id ? (
                <>
                  <div>
                    <input
                      id="editSKill"
                      type="text"
                      placeholder="Edit Skill"
                      value={editedSkill}
                      onChange={(e) => {
                        setEditedSkill(e.target.value);
                      }}
                    />
                  </div>

                  <Button
                    text="Cancel"
                    onClick={(e) => {
                      e.preventDefault();
                      setEditId("");
                    }}
                  />

                  <Button
                    text="Save"
                    onClick={(e) => {
                      e.preventDefault();

                      const skill = editedSkill.trim();

                      if (skill === "") return;

                      handlers.edit(editId, skill);
                      setEditedSkill("");
                      setEditId("");
                    }}
                  />
                </>
              ) : (
                <>
                  <p>{skill.name}</p>
                  <Button
                    text="Edit"
                    onClick={(e) => {
                      e.preventDefault();
                      setEditedSkill(skill.name);
                      setEditId(skill.id);
                    }}
                  />
                  <Button
                    text="Delete"
                    onClick={(e) => {
                      e.preventDefault();
                      handlers.delete(skill.id);
                    }}
                  />
                </>
              )}
            </li>
          ))}
        </ul>
      )}

      {isAdd && (
        <div>
          <div>
            <input
              id="newSkill"
              type="text"
              placeholder="New Skill"
              value={newSkill}
              onChange={(e) => {
                setNewSkill(e.target.value);
              }}
            />
          </div>
          <Button
            text="Save"
            onClick={(e) => {
              e.preventDefault();

              const skill = newSkill.trim();

              if (skill === "") return;

              handlers.add(skill);

              setNewSkill("");
              setIsAdd(false);
            }}
          />
          <Button
            text="Cancel"
            onClick={(e) => {
              e.preventDefault();
              setNewSkill("");
              setIsAdd(false);
            }}
          />
        </div>
      )}

      {!isAdd && (
        <Button
          text="Add"
          onClick={(e) => {
            e.preventDefault();
            setIsAdd(true);
          }}
        />
      )}
    </div>
  );
}
