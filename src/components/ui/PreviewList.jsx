import { Edit, Trash2 } from "lucide-react";
import Button from "./Button";

export default function PreviewList({ title, onEditClick, onDeleteClick }) {
  return (
    <li>
      <p>{title}</p>
      <div>
        <Button icon={<Edit />} onClick={onEditClick} />
        <Button icon={<Trash2 />} onClick={onDeleteClick} />
      </div>
    </li>
  );
}
