import { useState } from "react";
import FormHeader from "./FormHeader";
import Button from "../commons/Button";
import TextInput from "./TextInput";
import { Plus, Save, Edit, Trash2, X } from "lucide-react";
import { list } from "postcss";

export default function EmployementForm({ data, onEmploymentChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const [isAdd, setIsAdd] = useState(false);
  const [newEducation, setNewEducation] = useState("");

  const [editId, setEditId] = useState("");
  const [editedEducation, setEditedEducation] = useState("");

  const handleOpen = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    setIsAdd(true);
  };

  const handleSave = (e) => {
    e.preventDefault();
  };

  const handleEdit = (e) => {
    e.preventDefault();
  };

  const handleDelete = (e) => {
    e.preventDefault();
  };

  const handleCancel = (e) => {
    e.preventDefault();
  };

  return (
    <section>
      <FormHeader
        sectionTitle={"Education"}
        isOpen={isOpen}
        onOpen={handleOpen}
      />

      {isOpen && (
        <>
          <ul>
            {data.length === 0 ? (
              <li>No education added</li>
            ) : (
              data.map((education) => (
                <li key={education.id} className="flex">
                  <p>
                    {education.institute} - <span>{education.degree}</span>
                  </p>
                  <Button icon={<Edit />} onClick={handleEdit} />
                  <Button icon={<Trash2 />} onClick={handleDelete} />
                </li>
              ))
            )}
          </ul>

          <div>
            {!isAdd && !editId && (
              <Button icon={<Plus />} text={"Add Skill"} onClick={handleAdd} />
            )}
          </div>
        </>
      )}
    </section>
  );
}
