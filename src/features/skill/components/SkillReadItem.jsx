import { Edit, Trash2 } from "lucide-react";
import Button from "../../../components/ui/Button";

export default function SkillReadItem({ skill, actions }) {
  return (
    <div>
      <p>{skill.name}</p>
      <div>
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
