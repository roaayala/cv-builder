import { Edit, Trash2 } from "lucide-react";
import Button from "../../../components/ui/Button";

export default function EducationReadItem({ education, actions }) {
  return (
    <div className="flex justify-between">
      <p>{education.institute}</p>
      <div className="flex gap-2">
        <Button
          onClick={(e) => {
            e.preventDefault();
            actions.handleEdit(education);
          }}
          icon={<Edit />}
        />

        <Button
          onClick={(e) => {
            e.preventDefault();
            actions.handleDelete(education.id);
          }}
          icon={<Trash2 />}
        />
      </div>
    </div>
  );
}
