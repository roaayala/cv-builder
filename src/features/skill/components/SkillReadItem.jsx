import { Edit, Trash2 } from "lucide-react";
import Button from "../../../components/ui/Button";

export default function SkillReadItem({ skill, actions }) {
  return (
    <div className="flex justify-between">
      <p>{skill.name}</p>
      <div className="flex gap-2">
        <Button
          onClick={(e) => {
            e.preventDefault();
            actions.handleEdit(skill);
          }}
          icon={<Edit />}
        />

        <Button
          onClick={(e) => {
            e.preventDefault();
            actions.handleDelete(skill.id);
          }}
          icon={<Trash2 />}
        />
      </div>
    </div>
  );
}
