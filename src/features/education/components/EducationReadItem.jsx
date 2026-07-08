import { Edit, Trash2 } from "lucide-react";
import Button from "../../../components/ui/Button";

export default function EducationReadItem({ education, actions }) {
  return (
    <div className="flex justify-between items-center">
      <p className="text-sm">{education.institute}</p>
      <div className="flex">
        <Button
          onClick={(e) => {
            e.preventDefault();
            actions.handleEdit(education);
          }}
          icon={<Edit size={18} />}
          variant="ghost"
        />

        <Button
          onClick={(e) => {
            e.preventDefault();
            actions.handleDelete(education.id);
          }}
          icon={<Trash2 size={18} />}
          variant="ghost"
        />
      </div>
    </div>
  );
}
