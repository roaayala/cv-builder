import { Edit, Trash2 } from "lucide-react";
import Button from "../../../components/ui/Button";

export default function EmploymentReadItem({ employment, actions }) {
  return (
    <div className="flex justify-between">
      <p>{employment.workplace}</p>
      <div className="flex gap-2">
        <Button
          onClick={(e) => {
            e.preventDefault();
            actions.handleEdit(employment);
          }}
          icon={<Edit />}
        />

        <Button
          onClick={(e) => {
            e.preventDefault();
            actions.handleDelete(employment.id);
          }}
          icon={<Trash2 />}
        />
      </div>
    </div>
  );
}
