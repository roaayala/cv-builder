import FormSection from "../../../components/ui/FormSection";
import useListManager from "../../../hooks/useListManager";
import Button from "../../../components/ui/Button";
import { Edit, Plus, Save, Trash2, X } from "lucide-react";
import TextInput from "../../../components/ui/TextInput";
import createSkill from "../../../models/SkillModel";
import SkillAddItem from "./SkillAddItem";
import SkillReadItem from "./SkillReadItem";

export default function SkillForm({ data, handlers }) {
  const { isAdd, editId, draft, actions } = useListManager({
    handlers: handlers.skill,
    generateEmptyTemplate: () => createSkill({ name: "" }),
  });

  return (
    <FormSection title={"Skill"}>
      <ul>
        {data.length === 0 ? (
          <li>No skill added!</li>
        ) : (
          data.map((skill) => (
            <li key={skill.id}>
              {editId === skill.id ? (
                <div>
                  <div>
                    <TextInput
                      id={"editedSkillName"}
                      label={"Edit Skill"}
                      placeholder={"Skill"}
                      name={"name"}
                      value={draft.name}
                      onChange={(e) => {
                        actions.handleChange(e);
                      }}
                    />
                  </div>

                  <div>
                    <Button
                      icon={<X />}
                      text={"Cancel Edit"}
                      onClick={(e) => {
                        e.preventDefault();
                        actions.handleCancel();
                      }}
                    />

                    <Button
                      icon={<Save />}
                      text={"Save Edit"}
                      onClick={(e) => {
                        e.preventDefault();
                        actions.handleSaveEdit("name");
                      }}
                    />
                  </div>
                </div>
              ) : (
                <SkillReadItem skill={skill} actions={actions} />
              )}
            </li>
          ))
        )}
      </ul>

      {isAdd && <SkillAddItem draft={draft} actions={actions} />}

      {!isAdd && !editId && (
        <div>
          <Button
            icon={<Plus />}
            text={"Add Skill"}
            onClick={(e) => {
              e.preventDefault();
              actions.handleAdd();
            }}
          />
        </div>
      )}
    </FormSection>
  );
}
