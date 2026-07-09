import { Edit, Trash2 } from "lucide-react";
import Button from "../../../components/ui/Button";

export default function SkillReadItem({ skill, actions }) {
  return (
    <div className="flex justify-between items-center">
      <p className="text-sm">{skill.name}</p>
      <div className="flex">
        <Button
          variant="ghost"
          onClick={(e) => {
            e.preventDefault();
            actions.handleEdit(skill);
          }}
          icon={<Edit size={18} />}
        />

        <Button
          variant="ghost"
          onClick={(e) => {
            e.preventDefault();
            actions.handleDelete(skill.id);
          }}
          icon={<Trash2 size={18} />}
        />
      </div>
    </div>
  );
}
