import { Edit, Trash2 } from "lucide-react";
import Button from "../../../components/ui/Button";

export default function EmploymentReadItem({ employment, actions }) {
  return (
    <div className="flex justify-between items-center">
      <p className="text-sm">{employment.workplace}</p>
      <div className="flex">
        <Button
          onClick={(e) => {
            e.preventDefault();
            actions.handleEdit(employment);
          }}
          icon={<Edit size={18} />}
          variant="ghost"
        />

        <Button
          onClick={(e) => {
            e.preventDefault();
            actions.handleDelete(employment.id);
          }}
          icon={<Trash2 size={18} />}
          variant="ghost"
        />
      </div>
    </div>
  );
}
