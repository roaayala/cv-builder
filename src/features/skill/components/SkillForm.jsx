import FormSection from "../../../components/ui/FormSection";
import useListManager from "../../../hooks/useListManager";
import Button from "../../../components/ui/Button";
import { Lightbulb, Plus } from "lucide-react";
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
    <FormSection icon={<Lightbulb />} title={"Skill"}>
      <div className="flex flex-col gap-4 pb-4">
        <ul>
          {data.length === 0 ? (
            <li className="text-sm italic">No skill added!</li>
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
          <div className="flex justify-end">
            <Button
              icon={<Plus size={16} />}
              variant="primary"
              text={"Add Skill"}
              onClick={(e) => {
                e.preventDefault();
                actions.handleAdd();
              }}
            />
          </div>
        )}
      </div>
    </FormSection>
  );
}
