import FormSection from "../../../components/ui/FormSection";
import useListManager from "../../../hooks/useListManager";
import Button from "../../../components/ui/Button";
import { Plus } from "lucide-react";
import createSkill from "../../../models/SkillModel";
import SkillAddItem from "./SkillAddItem";
import SkillReadItem from "./SkillReadItem";
import SkillEditItem from "./SkillEditItem";

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
                <SkillEditItem draft={draft} actions={actions} />
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
